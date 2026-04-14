import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          Take control of <span className="italic underline">your</span> body
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          className="hero-scroll"
        >
          <span className="hero-scroll-line" />
          <span>Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
