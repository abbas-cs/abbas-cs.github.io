import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiMail, HiLocationMarker, HiArrowRight } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { personal } from '../data/config.js'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const contactLinks = [
    { icon: HiMail, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-950/60' },
    { icon: SiGithub, label: 'GitHub', value: personal.githubUsername, href: personal.github, color: 'text-gray-700 dark:text-gray-300', bg: 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700' },
    { icon: FaLinkedinIn, label: 'LinkedIn', value: personal.linkedinUsername, href: personal.linkedin, color: 'text-[#0A66C2]', bg: 'bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-950/60' },
    { icon: HiLocationMarker, label: 'Location', value: personal.location, href: null, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/40' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: '', email: '', message: '' })
  }

  const inputClass = "w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-body text-ink dark:text-white placeholder:text-muted/50 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 bg-surface dark:bg-gray-800 transition-all duration-200"

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-50 dark:from-blue-950/30 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-violet-50 dark:from-violet-950/30 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="section-label mb-3">Let's connect</p>
          <h2 className="section-title">Get in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span></h2>
          <p className="mt-4 text-muted dark:text-gray-400 max-w-xl mx-auto font-body">Open to AI engineering roles, collaborations, and interesting conversations. Let's build something great together.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="card p-8">
              <h3 className="font-display font-bold text-ink dark:text-white mb-2">Say Hello</h3>
              <p className="text-sm text-muted dark:text-gray-400 font-body mb-6 leading-relaxed">Whether you have a project in mind, a question about AI, or just want to chat — I'm always open to connecting.</p>
              <div className="space-y-3">
                {contactLinks.map(({ icon: Icon, label, value, href, color, bg }, i) => (
                  <motion.div key={label} initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 rounded-xl transition-colors group ${bg}`}>
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${color} bg-white dark:bg-gray-900 shadow-sm`}><Icon size={16} /></span>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-muted dark:text-gray-500 font-mono">{label}</div>
                          <div className="text-sm font-display font-medium text-ink dark:text-white truncate">{value}</div>
                        </div>
                        <HiArrowRight size={14} className="text-muted/40 group-hover:text-muted transition-colors flex-shrink-0" />
                      </a>
                    ) : (
                      <div className={`flex items-center gap-3 p-3 rounded-xl ${bg}`}>
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${color} bg-white dark:bg-gray-900 shadow-sm`}><Icon size={16} /></span>
                        <div>
                          <div className="text-xs text-muted dark:text-gray-500 font-mono">{label}</div>
                          <div className="text-sm font-display font-medium text-ink dark:text-white">{value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="card p-8">
              <h3 className="font-display font-bold text-ink dark:text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-display font-medium text-muted dark:text-gray-400 mb-1.5">Your Name</label>
                  <input type="text" required value={formState.name} onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))} placeholder="Jane Smith" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-display font-medium text-muted dark:text-gray-400 mb-1.5">Email Address</label>
                  <input type="email" required value={formState.email} onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))} placeholder="jane@example.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-display font-medium text-muted dark:text-gray-400 mb-1.5">Message</label>
                  <textarea required rows={4} value={formState.message} onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))} placeholder="Tell me about your project or opportunity..." className={`${inputClass} resize-none`} />
                </div>
                <motion.button type="submit" whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 rounded-xl font-display font-semibold text-sm transition-all duration-300 ${submitted ? 'bg-emerald-500 text-white' : 'bg-primary text-white hover:bg-primary/90 shadow-sm shadow-primary/20'}`}>
                  {submitted ? '✓ Message Sent!' : 'Send Message →'}
                </motion.button>
                <p className="text-xs text-center text-muted/60 dark:text-gray-600 font-body">UI demo only · no messages are actually sent</p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
