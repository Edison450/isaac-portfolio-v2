import { motion } from 'motion/react'
import { Code, Palette, Zap, ArrowRight } from 'lucide-react'
import { services } from '../data/projects'

const icons = { code: Code, palette: Palette, zap: Zap }

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-text-secondary text-xs tracking-[3px] uppercase mb-3">What I Offer</p>
          <h2 className="font-display font-bold text-white mb-3" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>What I Do</h2>
          <p className="text-text-secondary">End-to-end digital solutions tailored to your needs</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <motion.div
                key={s.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#1A1A2E] rounded-2xl p-7 md:p-8 border-t-4 transition-all"
                style={{ borderColor: s.color }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ background: `radial-gradient(circle, ${s.color}30, transparent)`, border: `2px solid ${s.color}` }}
                >
                  <Icon className="w-7 h-7" style={{ color: s.color }} />
                </motion.div>
                <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-4">{s.title}</h3>
                <ul className="space-y-2.5 mb-6">
                  {s.features.map(f => (
                    <li key={f} className="text-text-secondary flex items-start gap-2 text-sm md:text-base">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.a href="#contact" whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm md:text-base font-medium transition-all"
                  style={{ color: s.color }}>
                  Get Started <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
