import { motion } from 'framer-motion'
import './PageHeader.css'

export default function PageHeader({ title, subtitle, image }) {
  return (
    <section className="page-header">
      <div
        className="page-header-bg"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="page-header-overlay" />
      <motion.div
        className="page-header-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </motion.div>
    </section>
  )
}
