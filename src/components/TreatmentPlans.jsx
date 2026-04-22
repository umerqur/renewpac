import { motion } from 'framer-motion'
import { CheckIcon, PhoneIcon } from './Icons.jsx'
import './TreatmentPlans.css'

const rows = [
  '28 minutes in duration',
  'Fully clothed',
  'HIFEM contracts your pelvic floor muscle',
  'Painless and non-invasive',
  'Treatment booked twice a week for 3 weeks',
  'Follow up consultation for progress results',
]

export default function TreatmentPlans() {
  return (
    <section className="plans">
      <div className="plans-bg" />
      <div className="plans-overlay" />
      <div className="container plans-inner">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Treatment Plans
        </motion.h2>

        <motion.div
          className="plans-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
        >
          <div className="plans-table" role="table">
            <div className="plans-row plans-head" role="row">
              <div className="plans-cell plan-label">
                <strong>Treatment Plan</strong>
              </div>
              <div className="plans-cell plan-col">
                <strong>11,200 Kegels</strong>
              </div>
            </div>

            {rows.map(label => (
              <div className="plans-row" role="row" key={label}>
                <div className="plans-cell plan-label">{label}</div>
                <div className="plans-cell plan-col center">
                  <CheckIcon color="#2f6fb5" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.a
          className="call-cta"
          href="tel:+19052018005"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <PhoneIcon color="#fff" />
          Call (905) 201-8005 for pricing and insurance coverage details.
        </motion.a>
      </div>
    </section>
  )
}
