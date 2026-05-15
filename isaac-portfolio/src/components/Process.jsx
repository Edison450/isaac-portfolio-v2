import { motion } from 'motion/react'
import { processSteps } from '../data/projects'

export default function Process() {
  return (
    <section className="py-24 px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display font-bold text-white mb-3" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>My Creative Workflow</h2>
          <p className="text-text-secondary">A proven process that delivers results</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Dashed connector line */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'repeating-linear-gradient(90deg, #00D4FF 0, #00D4FF 10px, transparent 10px, transparent 22px)' }} />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="bg-[#1A1A2E] rounded-2xl p-7 border border-white/5 hover:border-[#00D4FF]/30 transition-all">
                {/* Connector dot */}
                {i < processSteps.length - 1 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15 }}
                    className="hidden lg:block absolute -right-3 top-[44px] w-3 h-3 rounded-full bg-[#00D4FF] z-20"
                    style={{ boxShadow: '0 0 12px rgba(0,212,255,0.7)' }}
                  />
                )}
                <div className="font-display font-bold mb-4 opacity-20 leading-none"
                  style={{ fontSize: '72px', color: '#E91E8C' }}>
                  {step.number}
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
