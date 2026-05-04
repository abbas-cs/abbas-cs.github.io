import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { personal } from '../data/config.js'

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 blur-3xl opacity-60" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-950 dark:to-purple-950 blur-3xl opacity-40" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#2563EB" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface dark:bg-gray-950">
      <GridBackground />
      <div className="section-container relative z-10 py-32 lg:py-0">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-3xl mx-auto text-center">

          <motion.div variants={itemVariants} className="mb-6 inline-flex">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 dark:bg-primary/15 border border-primary/15 dark:border-primary/30 text-primary text-sm font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {personal.tagline}
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-ink dark:text-white mb-4 leading-[1.1] tracking-tight">
            {personal.name}
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-6">
            <span className="font-display text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {personal.title}
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted dark:text-gray-400 text-lg sm:text-xl font-body font-light leading-relaxed mb-10 max-w-xl mx-auto">
            {personal.summary}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
              View Projects
              <HiArrowDown size={16} />
            </button>
            <a href={personal.resumeUrl} download className="btn-secondary">
              Download Resume
              <HiDownload size={16} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-muted dark:text-gray-400 hover:text-ink dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              aria-label="GitHub">
              <SiGithub size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-muted dark:text-gray-400 hover:text-[#0A66C2] hover:border-blue-200 dark:hover:border-blue-800 hover:bg-white dark:hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} className="flex flex-col items-center gap-1 text-muted/50 dark:text-gray-600">
            <span className="text-xs font-mono tracking-widest">SCROLL</span>
            <HiArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
