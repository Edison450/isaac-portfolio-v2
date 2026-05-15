import { motion } from 'motion/react'
import { Globe, Code } from 'lucide-react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 md:px-8 relative">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-text-secondary text-xs tracking-[3px] uppercase mb-3">Selected Work 2024–2025</p>
          <h2 className="font-display font-bold text-white mb-3" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-[#E91E8C] rounded-full" />
        </motion.div>

        {/* Top row — 2 large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects.filter(p => p.size === 'large').map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} large />
          ))}
        </div>

        {/* Bottom row — 3 small cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => p.size === 'small').map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, large = false }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: `0 20px 50px ${project.color}30` }}
      className="bg-[#1A1A2E] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all cursor-pointer group"
    >
      {/* Screenshot / preview */}
      <div className={`relative bg-[#0D0D1A] overflow-hidden ${large ? 'h-52 md:h-60' : 'h-44'}`}>
        <img
          src={project.preview}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          onError={e => { e.target.style.display = 'none' }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Browser dots */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-[#0A0A0F]/70 backdrop-blur-sm flex items-center px-3 gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#E91E8C]/60" />
          <span className="w-2 h-2 rounded-full bg-[#00D4FF]/40" />
          <span className="w-2 h-2 rounded-full bg-[#00FF94]/40" />
          <span className="ml-2 text-[#8892A4]/40 text-[10px] truncate">{project.liveUrl.replace('https://', '')}</span>
        </div>
        {/* Hover action buttons */}
        <div className="absolute top-9 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <motion.a
            href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={e => e.stopPropagation()}
            className="w-8 h-8 rounded-full bg-[#E91E8C] flex items-center justify-center text-white shadow-lg"
          >
            <Globe className="w-3.5 h-3.5" />
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full bg-[#00D4FF] flex items-center justify-center text-[#0A0A0F] shadow-lg"
          >
            <Code className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 md:p-6">
        <span
          className="inline-block px-3 py-1 rounded-full border text-xs mb-3"
          style={{ backgroundColor: `${project.color}15`, borderColor: `${project.color}50`, color: project.color }}
        >
          {project.tag}
        </span>
        <h3 className="font-display font-bold text-white text-xl mb-2">{project.title}</h3>
        <p className="text-text-secondary text-sm mb-3 leading-relaxed">{project.description}</p>
        <p className="text-[#00FF94] text-xs font-medium mb-5">✓ {project.metric}</p>

        <div className="flex gap-2 pt-4 border-t border-white/5">
          <motion.a
            href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: '#E91E8C' }} whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full bg-[#0A0A0F] flex items-center justify-center text-white transition-colors"
          >
            <Globe className="w-4 h-4" />
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#00D4FF' }} whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full bg-[#0A0A0F] flex items-center justify-center text-white transition-colors"
          >
            <Code className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
