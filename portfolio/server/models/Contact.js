import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    from_name: { type: String, required: true, trim: true },
    from_email: { type: String, required: true, trim: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
