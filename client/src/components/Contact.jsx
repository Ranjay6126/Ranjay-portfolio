import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { api } from "../services/api";

export default function Contact() {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
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
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        const emailResult = await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: payload.from_name,
            from_email: payload.from_email,
            subject: payload.subject,
            message: payload.message,
            to_email: "panditranjay33@gmail.com",
          },
          publicKey
        );

        if (emailResult.status === 200) {
          setStatusMessage("✅ Message sent successfully!");
          formRef.current.reset();
          setEmail("");
          setEmailError("");
          return;
        }
      }

      const messageBody = `Name: ${payload.from_name}\nEmail: ${payload.from_email}\nSubject: ${payload.subject}\n\nMessage:\n${payload.message}`;

      const response = await fetch("https://formsubmit.co/ajax/panditranjay33@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: payload.from_name,
          email: payload.from_email,
          subject: `[Portfolio] ${payload.subject}`,
          message: messageBody,
          _subject: `[Portfolio] ${payload.subject}`,
          _template: "table",
          _captcha: "false",
          _next: window.location.origin,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to deliver the message right now.");
      }

      setStatusMessage("✅ Message sent successfully!");
      formRef.current.reset();
      setEmail("");
      setEmailError("");
    } catch (error) {
      try {
        const res = await api.sendContact(payload);
        setStatusMessage("✅ " + res.message);
        formRef.current.reset();
        setEmail("");
        setEmailError("");
      } catch (fallbackError) {
        setStatusMessage("❌ " + (fallbackError.message || "Failed to send. Please try again later."));
      }
    } finally {
      setIsSending(false);
    }
  };

  const isFormValid = () => email && !emailError;

  return (
    <section id="contact" className="py-10 px-4 sm:px-6 min-h-screen flex items-center flex-col relative overflow-hidden">
      <div className="max-w-3xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 inline-flex items-center gap-2 sm:gap-3">
            <Mail className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 drop-shadow-lg ${isLightMode ? "text-indigo-600" : "text-cyan-300"}`} />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Get in Touch</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Let's connect and build something exceptional together. Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-50 pointer-events-auto bg-white/5 backdrop-blur-2xl border border-white/10 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl space-y-5 sm:space-y-6 shadow-2xl"
        >
          
          <div className="relative">
            <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">Your Name</label>
            <input
              name="from_name"
              required
              className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 hover:border-white/20 text-sm sm:text-base"
              placeholder="John Doe"
            />
          </div>
          <div className="relative">
            <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">Your Email</label>
            <input
              name="from_email"
              type="email"
              required
              value={email}
              onChange={handleEmailChange}
              onBlur={() => validateEmailValue(email)}
              className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl bg-white/5 border text-white placeholder-gray-500 outline-none transition-all duration-300 hover:border-white/20 text-sm sm:text-base ${
                emailError
                  ? "border-red-500/60 focus:border-red-500 focus:ring-2 focus:ring-red-500/50"
                  : "border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
              }`}
              placeholder="john@example.com"
            />
            {emailError && <p className="mt-2 text-xs text-red-400 font-medium">{emailError}</p>}
          </div>
          <div className="relative">
            <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">Subject</label>
            <input
              name="subject"
              required
              className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 hover:border-white/20 text-sm sm:text-base"
              placeholder="Project Inquiry"
            />
          </div>
          <div className="relative">
            <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 resize-none hover:border-white/20 text-sm sm:text-base"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="text-center pt-4 sm:pt-6">
            <button
              type="submit"
              disabled={isSending || !isFormValid()}
              className={`w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 mx-auto text-sm sm:text-base ${
                isSending || !isFormValid()
                  ? "bg-gradient-to-r from-green-800/50 to-emerald-800/50 text-gray-300 cursor-not-allowed border border-green-700/30"
                  : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-2xl hover:shadow-green-500/40 hover:scale-[1.03] active:scale-[0.98]"
              }`}
            >
              {isSending ? "Sending..." : <><FaPaperPlane className="text-sm sm:text-base" /> Send Message</>}
            </button>
            {statusMessage && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 sm:mt-5 text-sm font-semibold ${statusMessage.includes("✅") ? "text-green-400" : "text-red-400"}`}
              >
                {statusMessage}
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>

      <footer className="w-full mt-12 sm:mt-16 md:mt-20 text-center text-white text-xs sm:text-sm">
        {/* Social Links */}
        <div className="flex justify-center gap-5 sm:gap-8 mb-4 sm:mb-6">
          <a href="https://www.facebook.com/mrranjay.prajapati/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            <FaFacebook className="text-2xl sm:text-3xl" />
          </a>
          <a href="https://x.com/Ranjay10220" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            <FaXTwitter className="text-2xl sm:text-3xl" />
          </a>
          <a href="https://www.instagram.com/er.ranjay_prajapati/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            <FaInstagram className="text-2xl sm:text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/ranjay-pandit-prajapati/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            <FaLinkedin className="text-2xl sm:text-3xl" />
          </a>
        </div>
        {/* Line */}
        <div className="w-3/4 mx-auto border-t border-white/30 mb-6" />
        <p className="font-medium">© 2025 All Rights Reserved | Powered by Ranjay Prajapati</p>
        <p className="mt-3 font-medium">Thank you 😍 for visiting my Portfolio</p>
      </footer>
    </section>
  );
}
