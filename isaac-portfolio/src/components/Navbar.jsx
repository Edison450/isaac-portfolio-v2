import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Work', 'Services', 'About', 'Contact']

  const handleMobileNavClick = () => {
    // Close menu after 3 seconds
    setTimeout(() => {
      setMenuOpen(false)
    }, 1000)
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-5 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[#0A0A0F]/85 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          <span className="font-display font-bold text-white text-2xl">Isaac Ejidokun</span>
          <span className="text-[#E91E8C] text-2xl">.</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className="text-white/70 hover:text-white transition-colors text-sm relative group">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#E91E8C] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(233,30,140,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-[#E91E8C] text-white rounded-full text-sm font-medium transition-all"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white z-50" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1A2E] border-t border-white/5 overflow-hidden pointer-events-auto"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(link => (
                <a key={link} href={`#${link.toLowerCase()}`}
                  onClick={handleMobileNavClick}
                  className="text-white/70 hover:text-white text-sm transition-colors pointer-events-auto">
                  {link}
                </a>
              ))}
              <a href="#contact" onClick={handleMobileNavClick}
                className="bg-[#E91E8C] text-white text-sm font-medium px-5 py-2.5 rounded-full text-center pointer-events-auto">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
