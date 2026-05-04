import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowRight, HiClock, HiExternalLink } from 'react-icons/hi'
import { blogPosts } from '../data/config.js'

function BlogCard({ post, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="card group overflow-hidden flex flex-col"
    >
      {/* Color header strip */}
      <div className="h-1.5" style={{ background: `linear-gradient(to right, ${post.accent}70, ${post.accent}20)` }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Emoji + tags */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
            style={{ background: `${post.accent}15` }}
          >
            {post.emoji}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-muted dark:text-gray-500 font-mono">
            <HiClock size={12} />
            {post.readTime}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-ink dark:text-white text-base leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted dark:text-gray-400 font-body leading-relaxed mb-4 flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-gray-50 dark:bg-gray-800 text-muted dark:text-gray-400 border border-gray-100 dark:border-gray-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800">
          <span className="text-xs font-mono text-muted dark:text-gray-500">{post.date}</span>
          <a
            href={post.url}
            className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-primary hover:text-primary/80 transition-colors group/link"
          >
            Read more
            <HiArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform duration-150" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="blog" className="section-padding bg-surface dark:bg-gray-950">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Thoughts & writing</p>
          <h2 className="section-title">
            Latest{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Blog Posts
            </span>
          </h2>
          <p className="mt-4 text-muted dark:text-gray-400 max-w-xl mx-auto font-body">
            I write about AI engineering, LLMs, and building production ML systems. Practical insights from real-world experience.
          </p>
        </motion.div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-display font-semibold text-ink dark:text-white hover:border-primary/30 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200"
          >
            View all posts
            <HiExternalLink size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
