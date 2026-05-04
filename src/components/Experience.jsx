import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiBriefcase } from 'react-icons/hi'
import { BsCheckCircleFill } from 'react-icons/bs'
import { experiences } from '../data/config.js'

function TimelineItem({ exp, index, isLast }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm flex-shrink-0 z-10"
          style={{ background: `linear-gradient(135deg, ${exp.accent}, ${exp.accent}99)` }}>
          <HiBriefcase size={18} />
        </div>
        {!isLast && <div className="flex-1 w-px mt-2 min-h-[2rem] timeline-line opacity-20 rounded-full" />}
      </div>

      <div className="card p-6 mb-8 flex-1 hover:-translate-y-1">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-display font-bold text-ink dark:text-white text-base">{exp.title}</h3>
            <p className="text-sm font-display font-medium" style={{ color: exp.accent }}>{exp.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs font-mono text-muted dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-2.5 py-1 rounded-lg">{exp.period}</span>
            <span className="text-xs text-muted dark:text-gray-500">{exp.location}</span>
          </div>
        </div>

        <p className="text-sm text-muted dark:text-gray-400 font-body mb-4">{exp.description}</p>

        <ul className="space-y-2">
          {exp.achievements.map((a, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -8 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.3 + i * 0.06, duration: 0.4 }}
              className="flex items-start gap-2.5 text-sm text-muted dark:text-gray-400 font-body">
              <BsCheckCircleFill size={13} className="mt-0.5 flex-shrink-0 opacity-60" style={{ color: exp.accent }} />
              <span>{a}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding bg-surface dark:bg-gray-950">
      <div className="section-container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="section-label mb-3">My journey</p>
          <h2 className="section-title">Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span></h2>
          <p className="mt-4 text-muted dark:text-gray-400 max-w-xl mx-auto font-body">My professional growth in AI engineering, building production ML systems and LLM applications.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} index={i} isLast={i === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
