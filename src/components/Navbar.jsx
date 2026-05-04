import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX, HiDownload } from 'react-icons/hi'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import { personal, navLinks } from '../data/config.js'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav('#home') }}
              className="flex items-center gap-2 group"
            >
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-display font-bold text-sm shadow-sm shadow-primary/30 group-hover:scale-110 transition-transform duration-200">
                {personal.initials}
              </span>
              <span className="font-display font-semibold text-ink dark:text-white hidden sm:block">
                {personal.name}
              </span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-0.5">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNav(href) }}
                    className={`relative px-3 py-1.5 text-sm font-display font-medium rounded-lg transition-colors duration-200 ${
                      active === href.slice(1)
                        ? 'text-primary'
                        : 'text-muted dark:text-gray-400 hover:text-ink dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {label}
                    {active === href.slice(1) && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Dark mode toggle */}
              <button
                aria-label="Toggle dark mode"
                onClick={toggle}
                className="hidden md:flex w-9 h-9 items-center justify-center rounded-lg text-muted dark:text-gray-400 hover:text-ink dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {dark ? <BsSun size={16} /> : <BsMoonStars size={16} />}
              </button>

              {/* Download CV button — distinct style */}
              <a
                href={personal.resumeUrl}
                download
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-display font-semibold
                           bg-primary text-white shadow-sm shadow-primary/20
                           hover:bg-primary/90 active:scale-95 transition-all duration-200"
              >
                <HiDownload size={15} />
                Download CV
              </a>

              {/* Mobile hamburger */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-ink dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-lg lg:hidden"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={(e) => { e.preventDefault(); handleNav(href) }}
                  className={`px-4 py-3 rounded-xl text-sm font-display font-medium transition-colors ${
                    active === href.slice(1)
                      ? 'bg-primary/5 text-primary'
                      : 'text-ink dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {label}
                </motion.a>
              ))}
              <div className="mt-2 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between px-2">
                <a
                  href={personal.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-display font-semibold bg-primary text-white"
                >
                  <HiDownload size={15} />
                  Download CV
                </a>
                <button
                  onClick={toggle}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {dark ? <BsSun size={16} /> : <BsMoonStars size={16} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
