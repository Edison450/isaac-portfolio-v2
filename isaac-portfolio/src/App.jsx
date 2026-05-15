import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyMe from './components/WhyMe'
import Projects from './components/Projects'
import Process from './components/Process'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white relative overflow-x-hidden">
      {/* Global grid background */}
      <div className="fixed inset-0 opacity-50 pointer-events-none" style={{
        backgroundImage: "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=\")",
        zIndex: 0
      }} />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WhyMe />
        <Projects />
        <Process />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
