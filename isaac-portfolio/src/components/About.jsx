import { motion } from 'motion/react'
import { skills } from '../data/projects'
import isaacImage from '../assets/isaac.png'

const stats = [
  { value: '30+', label: 'Projects', color: '#E91E8C' },
  { value: '10', label: 'Platforms', color: '#00D4FF' },
  { value: '100%', label: 'Client Focus', color: '#00FF94' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-8 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Photo */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full aspect-square max-w-md mx-auto md:mx-0 rounded-3xl p-[3px]"
              style={{ background: 'linear-gradient(135deg, #E91E8C, #00D4FF, #00FF94)' }}>
              <div className="w-full h-full rounded-3xl bg-[#1A1A2E] flex items-center justify-center overflow-hidden">
                <img src={isaacImage} alt="Isaac" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Animated glow */}
            <motion.div
              animate={{ boxShadow: ['0 0 30px rgba(233,30,140,0.3)', '0 0 50px rgba(0,212,255,0.3)', '0 0 30px rgba(233,30,140,0.3)'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 max-w-md mx-auto md:mx-0 rounded-3xl pointer-events-none"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Kept from original: "Code Meets Creativity" headline */}
            <p className="text-text-secondary text-xs tracking-[3px] uppercase mb-4">About Me</p>
            <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
              Code Meets<br /><span className="text-[#E91E8C]">Creativity.</span>
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed text-base md:text-lg">
              I'm a full-stack developer and Graphics designer based in Lagos, Nigeria, with a passion for creating
              beautiful, functional digital experiences. With expertise spanning modern web technologies
              and design tools, I bridge the gap between code and creativity to deliver solutions that
              don't just work; they inspire.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8 pb-8 border-b border-white/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="font-display font-bold text-3xl" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-[#8892A4] text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="px-3.5 py-1.5 bg-[#1A1A2E] rounded-lg border text-sm transition-all cursor-default"
                  style={{ borderColor: `${skill.color}40`, color: skill.color }}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
