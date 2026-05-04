import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '../data/skills.js'

const colorMap = {
  blue:   { header: 'bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900', label: 'text-blue-600 dark:text-blue-400', dot: 'bg-blue-500', icon: 'text-blue-500 bg-blue-50 dark:bg-blue-950/60', pill: 'hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/50 dark:hover:bg-blue-950/30' },
  violet: { header: 'bg-violet-50 dark:bg-violet-950/40 border-violet-100 dark:border-violet-900', label: 'text-violet-600 dark:text-violet-400', dot: 'bg-violet-500', icon: 'text-violet-500 bg-violet-50 dark:bg-violet-950/60', pill: 'hover:border-violet-200 dark:hover:border-violet-800 hover:bg-violet-50/50 dark:hover:bg-violet-950/30' },
  emerald:{ header: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900', label: 'text-emerald-600 dark:text-emerald-400', dot: 'bg-emerald-500', icon: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60', pill: 'hover:border-emerald-200 dark:hover:border-emerald-800 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30' },
  orange: { header: 'bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900', label: 'text-orange-600 dark:text-orange-400', dot: 'bg-orange-500', icon: 'text-orange-500 bg-orange-50 dark:bg-orange-950/60', pill: 'hover:border-orange-200 dark:hover:border-orange-800 hover:bg-orange-50/50 dark:hover:bg-orange-950/30' },
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding bg-surface dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.025] dark:opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2563EB" strokeWidth="1"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="section-label mb-3">What I work with</p>
          <h2 className="section-title">Skills & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span></h2>
          <p className="mt-4 text-muted dark:text-gray-400 max-w-xl mx-auto font-body">A curated set of technologies I use to build intelligent systems — from raw data to deployed AI applications.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => {
            const colors = colorMap[category.color]
            return (
              <motion.div key={category.label} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIdx * 0.1, ease: [0.22, 1, 0.36, 1] }} className="card overflow-hidden">
                <div className={`px-6 py-4 border-b ${colors.header} flex items-center gap-2.5`}>
                  <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  <span className={`font-display font-semibold text-sm ${colors.label}`}>{category.label}</span>
                </div>
                <div className="p-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {category.skills.map((skill, skillIdx) => {
                    const Icon = skill.icon
                    return (
                      <motion.div key={skill.name} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: catIdx * 0.1 + skillIdx * 0.05 }}
                        whileHover={{ y: -2, transition: { duration: 0.15 } }}
                        className={`skill-pill ${colors.pill}`}>
                        <span className={`p-1 rounded-md ${colors.icon}`}><Icon size={13} /></span>
                        <span className="text-xs leading-tight">{skill.name}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
