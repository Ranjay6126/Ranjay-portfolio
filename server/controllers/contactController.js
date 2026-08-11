import nodemailer from "nodemailer";
import asyncHandler from "../middleware/asyncHandler.js";
import Contact from "../models/Contact.js";
import { resolveInfoEmail } from "../utils/InfoEmail.js";
import { dbConnected } from "../config/db.js";

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

  const recipientEmail = resolveInfoEmail({
    infoEmail: process.env.CONTACT_EMAIL,
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

  let contact = { _id: "temp_" + Date.now(), from_name, from_email, subject, message };

  if (dbConnected) {
    try {
      const savedContact = await Contact.create({ from_name, from_email, subject, message });
      contact = savedContact;
      console.log("[Contact] Saved to database successfully:", contact._id);
    } catch (dbErr) {
      console.warn("[Contact] DB save failed, continuing without persistence:", dbErr.message);
    }
  } else {
    console.log("[Contact] MongoDB unavailable – message not persisted to database");
  }

  let emailStatus = "skipped";
  try {
    await sendEmail({ from_name, from_email, subject, message });
    emailStatus = "sent";
  } catch (emailError) {
    console.warn("[Contact] Email notification failed:", emailError.message);
    emailStatus = "failed: " + emailError.message;
  }

  res.status(201).json({
    success: true,
    message: emailStatus.startsWith("sent")
      ? "Message sent successfully!"
      : "Message received (email not sent – configure SMTP for notifications).",
    data: contact,
    emailStatus,
  });
});

export const getContacts = asyncHandler(async (req, res) => {
  if (!dbConnected) {
    return res.json({ success: true, data: [] });
  }
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (err) {
    res.json({ success: true, data: [] });
  }
});
