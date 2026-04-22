import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import iconSuccess from '../assets/icon-success.gif'
import iconPelvic from '../assets/icon-pelvic.gif'
import iconWalkIn from '../assets/icon-walk-in.gif'
import iconDressed from '../assets/icon-dressed.gif'
import './BenefitsBar.css'

const benefits = [
  { src: iconSuccess, alt: '95% success rate', label: '95% Success\nRate' },
  { src: iconPelvic, alt: 'Treats the entire pelvic floor', label: 'Treats The Entire\nPelvic Floor' },
  { src: iconWalkIn, alt: 'Walk-in, walk-out procedure', label: 'Walk-In, Walk-Out\nProcedure' },
  { src: iconDressed, alt: 'Remain fully clothed', label: 'Remain Fully\nClothed' },
]

export default function BenefitsBar() {
  return (
    <section className="benefits-bar">
      <div className="container benefits-inner">
        <motion.div
          className="benefits-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            Strengthen your pelvic floor and
            <br />
            <em>reduce urinary frequency.</em>
          </h2>
          <Link to="/book" className="btn btn-cta-light">
            Book an Appointment
          </Link>
        </motion.div>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <motion.div
              key={b.label}
              className="benefit-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <img src={b.src} alt={b.alt} className="benefit-icon" loading="lazy" />
              <p>{b.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
