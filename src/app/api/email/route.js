// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Set up Nodemailer transporter with Mailtrap SMTP credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "osamadevmont@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email message options
    const mailOptions = {
      from: `"Contact Form" <osamadevmont@gmail.com>`, // sender address
      to: "osamadevmont@gmail.com", // your email or whoever should get the contact message
      subject: "New Contact Form Submission",
      text: `You have a new message from ${name}\n\nEmail: (${email})\n\n${message}`,
    };

    // Send the email
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
