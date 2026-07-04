import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { api } from "../services/api";

export default function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmailValue = (value) => {
    if (!value) {
      setEmailError("Email is required");
      return false;
    }
    if (!emailPattern.test(value)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmailValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmailValue(email)) {
      setStatusMessage("❌ Please fix the form errors before sending.");
      return;
    }

    setIsSending(true);
    setStatusMessage("");

    const formData = new FormData(formRef.current);
    const payload = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await api.sendContact(payload);
      setStatusMessage("✅ " + res.message);
      formRef.current.reset();
      setEmail("");
      setEmailError("");
    } catch (error) {
      setStatusMessage("❌ " + (error.message || "Failed to send. Please try again later."));
    } finally {
      setIsSending(false);
    }
  };

  const isFormValid = () => email && !emailError;

  return (
    <section id="contact" className="py-10 min-h-screen flex items-center flex-col relative overflow-hidden">
      <div className="max-w-3xl w-full px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block">
            📬 Contact Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-50 pointer-events-auto bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl space-y-6 shadow-2xl"
        >
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
            <input
              name="from_name"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
            <input
              name="from_email"
              type="email"
              required
              value={email}
              onChange={handleEmailChange}
              onBlur={() => validateEmailValue(email)}
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white outline-none transition-all ${
                emailError
                  ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              }`}
              placeholder="john@example.com"
            />
            {emailError && <p className="mt-2 text-xs text-red-400">{emailError}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
            <input
              name="subject"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
              placeholder="Project Inquiry"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSending || !isFormValid()}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 mx-auto ${
                isSending || !isFormValid()
                  ? "bg-white/5 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02]"
              }`}
            >
              {isSending ? "Sending..." : <><FaPaperPlane className="text-sm" /> Send Message</>}
            </button>
            {statusMessage && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm font-medium ${statusMessage.includes("✅") ? "text-green-400" : "text-red-400"}`}
              >
                {statusMessage}
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
