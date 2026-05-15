import { motion } from 'motion/react'

// Colorful social icons with brand colors
const socials = [
  {
    label: 'GitHub',
    color: '#FFFFFF',
    href: 'https://github.com/edison450',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    color: '#00D4FF',
    href: 'www.linkedin.com/in/isaac-ejidokun-6a8052391',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Behance',
    color: '#E91E8C',
    href: 'https://behance.net/isaacejidokun',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H8.95c3.474 0 4.947-1.606 4.947-3.567 0-1.957-1.047-3.22-3.064-3.633v-.045c1.469-.247 2.617-1.658 2.617-3.03 0-2.065-1.389-3.513-4.297-3.513H0v13.788h6.466zm-3.583-7.48h2.473c1.418 0 2.247.582 2.247 1.86 0 1.340-.848 1.967-2.398 1.967H3.483V12.51zm0-4.967h2.262c1.357 0 1.937.538 1.937 1.655 0 1.099-.603 1.717-2.01 1.717H3.483V7.543z"/>
      </svg>
    ),
  },
  {
    label: 'Fiverr',
    color: '#00FF94',
    href: 'https://fiverr.com/isaacai_edit',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        {/* Green circle background */}
        <circle cx="12" cy="12" r="12" fill="#1DBF73"/>
        {/* White stylized "fn" mark */}
        <path d="M8 6V18H10V12H13V10H10V8C10 7.4 10.4 7 11 7H13V5C12.3 5 11 5 10 5C8 5 8 6.5 8 8V10H6V12H8V18H10V12" fill="white"/>
      </svg>
    ),
  },
]

const navLinks = ['Work', 'Services', 'About', 'Contact']

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-12 px-6 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Main footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-0.5">
            <span className="font-display font-bold text-white text-xl">Isaac Ejidokun</span>
            <span className="text-[#E91E8C] text-xl">.</span>
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-6 md:gap-8">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                className="text-text-secondary hover:text-white transition-colors text-sm">
                {link}
              </a>
            ))}
          </div>

          {/* Colorful social icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ label, color, href, icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-[#1A1A2E] flex items-center justify-center border border-white/5 transition-all"
                style={{ color }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 0 18px ${color}60`
                  e.currentTarget.style.borderColor = `${color}60`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-text-secondary text-sm">
          <p>© 2026 Isaac Ejidokun. All rights reserved.</p>
          <p className="text-[#8892A4]/60">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
