import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SuccessRateIcon, PelvisIcon, WalkingIcon, DressIcon } from './Icons.jsx'
import './BenefitsBar.css'

const benefits = [
  { icon: SuccessRateIcon, label: '95% Success Rate' },
  { icon: PelvisIcon, label: 'Treats The Entire\nPelvic Floor' },
  { icon: WalkingIcon, label: 'Walk-in Walk-Out\nProcedure' },
  { icon: DressIcon, label: 'Remain Fully\nClothed' },
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
            Strenghten your pelvic floor and
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
              <b.icon />
              <p>{b.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
