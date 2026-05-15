import { motion } from 'motion/react'
import { Zap, Users, Rocket } from 'lucide-react'

const reasons = [
  { icon: Zap, title: 'Fast Turnaround', desc: 'Quick iterations and efficient delivery without compromising quality.', color: '#E91E8C' },
  { icon: Users, title: 'Client-Focused', desc: 'Your vision drives the process. Clear communication every step.', color: '#00D4FF' },
  { icon: Rocket, title: 'Modern Stack', desc: 'Latest technologies and best practices for future-proof solutions.', color: '#00FF94' },
]

export default function WhyMe() {
  return (
    <section className="py-20 px-6 md:px-8 relative">
      <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display font-bold text-white mb-3" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>Why Work with me?</h2>
        </motion.div>
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
        {reasons.map((r, i) => {
          const Icon = r.icon
          return (
            <motion.div
              key={r.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-[#1A1A2E] rounded-2xl p-7 md:p-8 border-t-4 transition-all"
              style={{ borderColor: r.color }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                style={{ background: `radial-gradient(circle, ${r.color}30, transparent)`, border: `2px solid ${r.color}` }}
              >
                <Icon className="w-7 h-7" style={{ color: r.color }} />
              </motion.div>
              <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3">{r.title}</h3>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">{r.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
