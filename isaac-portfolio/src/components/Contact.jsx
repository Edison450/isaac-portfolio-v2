import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    const sub = encodeURIComponent('Project Inquiry')
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:isaac@example.com?subject=${sub}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(233,30,140,0.1),transparent_60%)]" />
      <div className="max-w-[800px] mx-auto relative z-10">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-text-secondary text-xs tracking-[3px] uppercase mb-4">Have a Project in Mind?</p>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: '1.15' }}>
            Let's Build It<span className="text-[#E91E8C]">.</span>
          </h2>
          <p className="text-text-secondary mb-8 text-base md:text-lg">
            Ready to bring your vision to life? Get in touch and let's create something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="mailto:isaacejidokun@gmail.com"
              className="flex items-center gap-2 text-[#B0C0D8] hover:text-[#00D4FF] transition-colors text-base">
              <Mail className="w-4 h-4" /> isaacejidokun@gmail.com
            </a>
            <span className="hidden sm:block text-text-secondary">•</span>
            <motion.a
              href="https://wa.me/+2348057373247" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,255,148,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#00FF94] text-[#0A0A0F] rounded-full flex items-center gap-2 font-medium text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </motion.a>
          </div>
        </motion.div>

        <motion.form
          initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
          onSubmit={onSubmit} className="space-y-4"
        >
          <input name="name" value={form.name} onChange={onChange} placeholder="Your Name" required
            className="w-full px-6 py-4 bg-[#1A1A2E] text-white rounded-xl border border-white/10 focus:border-[#00D4FF] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all text-sm md:text-base" />
          <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Your Email" required
            className="w-full px-6 py-4 bg-[#1A1A2E] text-white rounded-xl border border-white/10 focus:border-[#00D4FF] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all text-sm md:text-base" />
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Your Message" rows={6} required
            className="w-full px-6 py-4 bg-[#1A1A2E] text-white rounded-xl border border-white/10 focus:border-[#00D4FF] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all resize-none text-sm md:text-base" />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(233,30,140,0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-4 bg-[#E91E8C] text-white rounded-xl flex items-center justify-center gap-2 font-medium transition-all"
          >
            <Send className="w-5 h-5" /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
