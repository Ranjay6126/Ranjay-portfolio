import nodemailer from "nodemailer";
import asyncHandler from "../middleware/asyncHandler.js";
import Contact from "../models/Contact.js";
import { resolveRecipientEmail } from "../utils/contactEmail.js";

const sendEmail = async ({ from_name, from_email, subject, message }) => {
  console.log("[Email] Starting email send process...");

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("[Email] SMTP credentials not set - skipping email send");
    return;
  }

  const smtpUser = process.env.SMTP_USER.trim();
  const smtpPass = process.env.SMTP_PASS.trim();

  if (!smtpUser.endsWith("@gmail.com") && !smtpUser.endsWith("@googlemail.com")) {
    throw new Error("SMTP_USER must be a Gmail address.");
  }

  if (smtpPass === "your_app_password_here" || smtpPass.length < 10) {
    throw new Error("SMTP_PASS is not set correctly. Use a Gmail app password instead of your regular account password.");
  }

  console.log("[Email] Creating transporter with SMTP_USER:", smtpUser);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.verify();
    console.log("[Email] SMTP connection verified successfully");
  } catch (verifyError) {
    console.error("[Email] SMTP connection verification failed:", verifyError.message);
    throw new Error(
      `Gmail SMTP authentication failed. Use a Google App Password for ${smtpUser}. ${verifyError.message}`
    );
  }

  const recipientEmail = resolveRecipientEmail({
    contactEmail: process.env.CONTACT_EMAIL,
    smtpUser: process.env.SMTP_USER,
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: recipientEmail,
    replyTo: from_email,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${from_name}\nEmail: ${from_email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${from_name}</p><p><strong>Email:</strong> ${from_email}</p><p><strong>Subject:</strong> ${subject}</p><p>${message}</p>`,
  };

  console.log("[Email] Sending email with options:", { ...mailOptions, html: "[REDACTED]" });

  const info = await transporter.sendMail(mailOptions);
  console.log("[Email] Email sent successfully! Message ID:", info.messageId);
  return info;
};

export const createContact = asyncHandler(async (req, res) => {
  console.log("[Contact] New form submission received:", req.body);
  
  const { from_name, from_email, subject, message } = req.body;

  if (!from_name || !from_email || !subject || !message) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(from_email)) {
    res.status(400);
    throw new Error("Please enter a valid email address");
  }

  const contact = await Contact.create({ from_name, from_email, subject, message });
  console.log("[Contact] Saved to database successfully:", contact._id);

  try {
    await sendEmail({ from_name, from_email, subject, message });
  } catch (emailError) {
    console.error("[Contact] Email notification failed completely:", emailError);
    res.status(500);
    throw new Error(emailError.message || "Email delivery failed. Check your Gmail app password.");
  }

  res.status(201).json({
    success: true,
    message: "Message sent successfully!",
    data: contact,
  });
});

export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json({ success: true, data: contacts });
});
