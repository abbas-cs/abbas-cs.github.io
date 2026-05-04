import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { personal, navLinks } from '../data/config.js'

export default function Footer() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-ink dark:bg-gray-950 text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-sm shadow-sm">
              {personal.initials}
            </span>
            <div>
              <div className="font-display font-semibold text-sm">{personal.name}</div>
              <div className="text-xs text-white/40 font-mono">{personal.title}</div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} onClick={(e) => { e.preventDefault(); handleNav(href) }}
                className="text-xs text-white/50 hover:text-white transition-colors font-body">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {[
              { icon: SiGithub, href: personal.github, label: 'GitHub' },
              { icon: FaLinkedinIn, href: personal.linkedin, label: 'LinkedIn' },
              { icon: HiMail, href: `mailto:${personal.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30 font-body">
          <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
          <span className="font-mono">Built with React + Vite + TailwindCSS</span>
        </div>
      </div>
    </footer>
  )
}
