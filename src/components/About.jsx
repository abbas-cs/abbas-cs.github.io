import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BsCpuFill, BsLightningChargeFill, BsCodeSlash } from 'react-icons/bs'
import { HiAcademicCap } from 'react-icons/hi'
import { personal, stats, aboutHighlights } from '../data/config.js'

const highlightIcons = [BsCpuFill, BsLightningChargeFill, BsCodeSlash, HiAcademicCap]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-surface dark:from-gray-950 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <p className="section-label mb-3">About me</p>
            <h2 className="section-title mb-6">
              Building the future,<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">one model at a time</span>
            </h2>

            <div className="space-y-4 text-muted dark:text-gray-400 font-body leading-relaxed">
              {personal.bio.map((para, i) => <p key={i}>{para}</p>)}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {aboutHighlights.map(({ label, color }, i) => {
                const Icon = highlightIcons[i]
                return (
                  <span key={label} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-display font-medium ${color}`}>
                    {Icon && <Icon size={14} />}
                    {label}
                  </span>
                )
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}>
            <div className="relative">
              <div className="card p-8 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-accent to-violet-400 rounded-t-2xl" />

                <div className="w-full h-48 rounded-xl bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 dark:from-blue-950 dark:via-indigo-950 dark:to-violet-950 flex items-center justify-center mb-8 relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="text-5xl mb-2">🤖</div>
                    <p className="font-display font-semibold text-primary text-sm">{personal.title}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map(({ value, label }, i) => (
                    <motion.div key={label} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                      className="text-center p-4 bg-surface dark:bg-gray-800 rounded-xl">
                      <div className="font-display text-2xl font-bold text-ink dark:text-white">{value}</div>
                      <div className="text-xs text-muted dark:text-gray-400 font-body mt-0.5">{label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 px-4 py-2.5 flex items-center gap-2">
                <span className="text-lg">🚀</span>
                <span className="font-display text-xs font-semibold text-ink dark:text-white">Available to hire</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
