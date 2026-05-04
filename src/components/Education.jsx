import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import { BsCheckCircleFill, BsAwardFill } from 'react-icons/bs'
import { education } from '../data/config.js'

function EducationCard({ edu, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="card overflow-hidden"
    >
      {/* Accent top strip */}
      <div className="h-1" style={{ background: `linear-gradient(to right, ${edu.accent}80, ${edu.accent}20)` }} />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${edu.accent}, ${edu.accent}99)` }}
            >
              {edu.degree.includes('B.S') || edu.degree.includes('M.S') || edu.degree.includes('PhD')
                ? <HiAcademicCap size={18} />
                : <BsAwardFill size={16} />
              }
            </div>
            <div>
              <h3 className="font-display font-bold text-ink dark:text-white text-base leading-tight">{edu.degree}</h3>
              <p className="text-sm font-display font-medium mt-0.5" style={{ color: edu.accent }}>{edu.institution}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <span className="text-xs font-mono text-muted dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-2.5 py-1 rounded-lg">
              {edu.period}
            </span>
            <span className="text-xs text-muted dark:text-gray-500">{edu.location}</span>
          </div>
        </div>

        <p className="text-sm text-muted dark:text-gray-400 font-body mb-4">{edu.description}</p>

        <ul className="space-y-2">
          {edu.achievements.map((a, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.12 + 0.25 + i * 0.06, duration: 0.4 }}
              className="flex items-start gap-2.5 text-sm text-muted dark:text-gray-400 font-body"
            >
              <BsCheckCircleFill size={13} className="mt-0.5 flex-shrink-0 opacity-60" style={{ color: edu.accent }} />
              <span>{a}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Academic background</p>
          <h2 className="section-title">
            Education &{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="mt-4 text-muted dark:text-gray-400 max-w-xl mx-auto font-body">
            The academic foundations and continuous learning that underpin my work in AI engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <EducationCard key={edu.id} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
