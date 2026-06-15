import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const gmailUser =
  process.env.GMAIL_USER || process.env.EMAIL_USER || "osamadevmont@gmail.com";
const gmailAppPassword =
  process.env.GMAIL_APP_PASSWORD ||
  process.env.EMAIL_PASSWORD ||
  process.env.NEXT_EMAIL_PASSWORD;
const recipientEmail = process.env.CONTACT_EMAIL_TO || gmailUser;

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (
      !gmailAppPassword ||
      gmailAppPassword === "replace-with-your-gmail-app-password"
    ) {
      return NextResponse.json(
        { message: "Email service is not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: "New Contact Form Submission",
      text: `You have a new message from ${name}\n\nEmail: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
