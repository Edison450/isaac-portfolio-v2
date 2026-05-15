import { motion } from 'motion/react'
import { testimonials } from '../data/projects'

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-8 relative">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-text-secondary text-xs tracking-[3px] uppercase mb-3">Kind Words</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>Client Testimonials</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#1A1A2E] rounded-2xl p-7 md:p-8 relative border border-white/5 hover:border-[#E91E8C]/20 transition-all"
            >
              <div className="absolute top-4 left-5 opacity-10 leading-none select-none font-display"
                style={{ fontSize: '90px', color: '#E91E8C', fontFamily: 'Georgia, serif' }}>"</div>
              <p className="text-white/85 italic mb-7 relative z-10 text-base md:text-lg leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-display font-bold"
                  style={{ backgroundColor: t.color }}>{t.initial}</div>
                <div>
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-text-secondary text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
