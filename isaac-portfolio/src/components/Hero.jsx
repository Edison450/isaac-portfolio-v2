import { motion } from 'motion/react'
import { Download, ArrowRight } from 'lucide-react'
import isaacImage from '../assets/isaac.png'

const techBadges = ['React', 'Next.js', 'Node.js', 'n8n', 'Tailwind']

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 pt-24 pb-16 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(233,30,140,0.12),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.08),transparent_50%)]" />

      <div className="max-w-[1400px] w-full mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">

        {/* On mobile: image first, text second (order-first / order-last) */}

        {/* Right — orbit graphic */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[320px] md:h-[500px] flex items-center justify-center order-first md:order-last"
        >
          {/* Pulsing glow ring */}
          <motion.div
            className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full"
            style={{ background: 'linear-gradient(135deg, #E91E8C, #00D4FF)', padding: '3px' }}
            animate={{ boxShadow: ['0 0 40px rgba(233,30,140,0.4)', '0 0 60px rgba(0,212,255,0.4)', '0 0 40px rgba(233,30,140,0.4)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0F] flex items-center justify-center overflow-hidden">
              <img src={isaacImage} alt="Isaac" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Floating tech badges */}
          {techBadges.map((tech, i) => {
            const angle = (i / techBadges.length) * Math.PI * 2
            const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 180 : 220
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            return (
              <motion.div
                key={tech}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1, opacity: 1,
                  x: [x, x + Math.cos(angle) * 12, x],
                  y: [y, y + Math.sin(angle) * 12, y],
                }}
                transition={{
                  scale: { delay: 0.4 + i * 0.1, duration: 0.4 },
                  opacity: { delay: 0.4 + i * 0.1 },
                  x: { duration: 3.5, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' },
                  y: { duration: 3.5, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' },
                }}
                className="absolute px-3 py-1.5 bg-[#1A1A2E] border border-[#E91E8C]/30 rounded-lg text-white text-xs shadow-lg pointer-events-none"
                style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
              >
                {tech}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Left — text content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="order-last md:order-first"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#00FF94]/10 border border-[#00FF94]/30 rounded-full text-[#00FF94] text-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF94] animate-pulse" />
            Available for Work ✦
          </motion.div>

          <h1 className="font-display font-bold text-white mb-6 leading-[1.1]"
            style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}>
            I Build Digital<br />
            Experiences That<br />
            <span className="text-[#E91E8C]">Convert</span>.
          </h1>

          <p className="text-text-secondary mb-8 leading-relaxed text-base md:text-lg">
            Full-stack developer and UI/UX designer crafting high-performance web
            applications with modern technologies and creative flair.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(233,30,140,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 bg-[#E91E8C] text-white rounded-full flex items-center gap-2 font-medium text-sm md:text-base transition-all"
            >
              View My Work <ArrowRight className="text-text-secondary w-4 h-4" />
            </motion.a>
            {/* <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,212,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="text-text-secondary px-7 py-3.5 bg-transparent border-2 border-[#00D4FF] rounded-full flex items-center gap-2.5 font-medium text-sm md:text-base transition-all whitespace-nowrap"
            >
              <Download className="w-4 h-4 flex-shrink-0" /> Download CV
            </motion.a> */}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
