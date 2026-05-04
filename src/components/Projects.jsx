import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'
import { projects, personal } from '../data/config.js'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article ref={ref}
      initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="card group overflow-hidden flex flex-col h-full">

      <div className="h-1.5 w-full transition-opacity" style={{ background: `linear-gradient(to right, ${project.accent}60, ${project.accent}20)` }} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start gap-3 mb-4">
          <span className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: `${project.accent}15` }}>
            {project.emoji}
          </span>
          <h3 className="font-display font-bold text-ink dark:text-white text-base leading-tight pt-1">{project.title}</h3>
        </div>

        <p className="text-sm text-muted dark:text-gray-400 font-body leading-relaxed mb-5 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-muted dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">{t}</span>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-4 border-t border-gray-50 dark:border-gray-800">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-display font-medium text-muted dark:text-gray-400 hover:text-ink dark:hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
            <SiGithub size={14} /> Source Code
          </a>
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-display font-medium text-primary hover:text-primary/80 transition-colors px-3 py-1.5 rounded-lg hover:bg-primary/5 ml-auto">
              Live Demo <HiExternalLink size={14} />
            </a>
          ) : (
            <span className="ml-auto flex items-center gap-1 text-xs text-muted/50 dark:text-gray-600 font-mono">
              <HiCode size={12} /> Private repo
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="section-label mb-3">What I've built</p>
          <h2 className="section-title">Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span></h2>
          <p className="mt-4 text-muted dark:text-gray-400 max-w-xl mx-auto font-body">A selection of AI/ML projects showcasing end-to-end system design, from prototyping to deployment.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="text-center mt-10">
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-display font-medium text-muted dark:text-gray-400 hover:text-primary transition-colors">
            <SiGithub size={16} /> View all projects on GitHub <HiExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
