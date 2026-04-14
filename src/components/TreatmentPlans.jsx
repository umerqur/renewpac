import { motion } from 'framer-motion'
import { CheckIcon, CrossIcon, PhoneIcon } from './Icons.jsx'
import './TreatmentPlans.css'

const rows = [
  { label: '28 minutes in duration', initial: true, follow: true },
  { label: 'Fully clothed', initial: true, follow: true },
  { label: 'HIFEM contracts your pelvic floor muscle', initial: true, follow: true },
  { label: 'Painless and non-invasive', initial: true, follow: true },
  { label: 'Treatment booked twice a week for 3 weeks', initial: true, follow: false },
  { label: 'Follow up treatments recommended every 4 months', initial: false, follow: true },
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
                <strong>Initial Treatment</strong>
                <small>Includes 6 HIFEM treatments</small>
              </div>
              <div className="plans-cell plan-col">
                <strong>Follow Up Treatment</strong>
                <small>Cost Per Treatment</small>
              </div>
            </div>

            {rows.map(r => (
              <div className="plans-row" role="row" key={r.label}>
                <div className="plans-cell plan-label">{r.label}</div>
                <div className="plans-cell plan-col center">
                  {r.initial ? <CheckIcon color="#2f6fb5" /> : <CrossIcon color="#b03a3a" />}
                </div>
                <div className="plans-cell plan-col center">
                  {r.follow ? <CheckIcon color="#2f6fb5" /> : <CrossIcon color="#b03a3a" />}
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
