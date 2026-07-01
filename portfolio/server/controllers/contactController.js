import nodemailer from "nodemailer";
import asyncHandler from "../middleware/asyncHandler.js";
import Contact from "../models/Contact.js";

const sendEmail = async ({ from_name, from_email, subject, message }) => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
    replyTo: from_email,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${from_name}\nEmail: ${from_email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${from_name}</p><p><strong>Email:</strong> ${from_email}</p><p><strong>Subject:</strong> ${subject}</p><p>${message}</p>`,
  });
};

export const createContact = asyncHandler(async (req, res) => {
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

  try {
    await sendEmail({ from_name, from_email, subject, message });
  } catch (emailError) {
    console.warn("Email notification failed:", emailError.message);
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
