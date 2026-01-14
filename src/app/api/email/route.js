// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Set up Nodemailer transporter with Mailtrap SMTP credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Hostinger SMTP server
      port: 465, // Or 587 for STARTTLS
      secure: true, // Use true for port 465, false for 587 (STARTTLS)
      auth: {
        user: "contact@osamarizwan.com", // Your full Hostinger email address
        pass: process.env.NEXT_EMAIL_PASSWORD, // Your email password
      },
      tls: {
        // For port 587 (STARTTLS), you might need this if you have issues
        // rejectUnauthorized: false // Use with caution, only if necessary
      },
    });

    // Email message options
    const mailOptions = {
      from: `"Contact Form" <contact@osamarizwan.com>`, // sender address
      to: "contact@osamarizwan.com", // your email or whoever should get the contact message
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
