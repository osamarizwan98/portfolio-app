"use server";

import nodemailer from "nodemailer";
import { validateContact } from "@/lib/contact";

const SUCCESS = "Thanks! Your message is on its way. I usually reply within an hour.";

const gmailUser = process.env.GMAIL_USER;
const gmailPassword = process.env.GMAIL_APP_PASSWORD;
const recipient = process.env.CONTACT_EMAIL_TO || gmailUser;

async function sendMail({ name, email, topic, message }) {
  if (!gmailUser || !gmailPassword) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] email not configured, message logged instead:", { name, email, topic });
      return;
    }
    throw new Error("Email transport is not configured");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPassword },
  });

  // Plain-text only: user input never ends up in HTML.
  await transporter.sendMail({
    from: `"Portfolio Contact" <${gmailUser}>`,
    to: recipient,
    replyTo: email,
    subject: `New enquiry: ${topic} (${name})`,
    text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
  });
}

export async function sendContact(_prevState, formData) {
  const result = validateContact(formData);

  // Bots get a normal-looking success response and nothing is sent.
  if (result.spam) return { status: "success", message: SUCCESS };

  if (result.fieldErrors) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors: result.fieldErrors,
      values: result.values,
    };
  }

  try {
    await sendMail(result.data);
    return { status: "success", message: SUCCESS };
  } catch (error) {
    console.error("[contact] send failed:", error?.code ?? error?.name ?? "unknown");
    return {
      status: "error",
      message: "Something went wrong sending your message. Please email me directly instead.",
      values: result.data,
    };
  }
}
