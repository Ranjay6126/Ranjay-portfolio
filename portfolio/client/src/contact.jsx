import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const formRef = useRef()
  const [isSending, setIsSending] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validateEmailValue = (value) => {
    if (!value) { setEmailError('Email is required'); return false }
    if (!emailPattern.test(value)) { setEmailError('Please enter a valid email'); return false }
    setEmailError('')
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateEmailValue(email)) {
      setStatusMessage('❌ Please fix the form errors before sending.')
      return
    }

    setIsSending(true)
    setStatusMessage('')

    const formData = new FormData(formRef.current)
    const payload = {
      name: formData.get('from_name'),
      email: formData.get('from_email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Failed')

      setStatusMessage('✅ Message sent successfully!')
      formRef.current.reset()
      setEmail('')
    } catch {
      setStatusMessage('❌ Failed to send. Please try again later.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="py-10 min-h-screen flex items-center flex-col relative overflow-hidden">
      <div className="max-w-3xl w-full px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
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
          className="relative z-50 bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl space-y-6 shadow-2xl"
        >
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
            <input name="from_name" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-indigo-500" placeholder="John Doe" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
            <input
              name="from_email"
              type="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); validateEmailValue(e.target.value) }}
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white outline-none ${emailError ? 'border-red-500' : 'border-white/10 focus:border-indigo-500'}`}
              placeholder="john@example.com"
            />
            {emailError && <p className="mt-2 text-xs text-red-400">{emailError}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
            <input name="subject" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-indigo-500" placeholder="Project Inquiry" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea name="message" rows="5" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none resize-none focus:border-indigo-500" placeholder="Tell me about your project..." />
          </div>

          <button
            type="submit"
            disabled={isSending || !email || emailError}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 disabled:opacity-50"
          >
            <FaPaperPlane /> {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {statusMessage && <p className="mt-4 text-sm text-center">{statusMessage}</p>}
        </motion.form>
      </div>
    </section>
  )
}