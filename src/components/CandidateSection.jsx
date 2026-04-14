import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SquareBullet } from './Icons.jsx'
import './CandidateSection.css'

const questions = [
  'Do you have urinary leakage when you cough, sneeze, laugh, jump, bend over or lift items?',
  'Do you have urinary leakage on the way to the toilet?',
  'During your day-to-day activities do you wear a pad to manage urinary leakage?',
  'Do you wake up more than once to urinate during the night?',
]

export default function CandidateSection() {
  return (
    <section className="candidate section">
      <div className="container candidate-grid">
        <motion.div
          className="candidate-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            Am I a candidate
            <br />
            <span className="eyebrow-lg">Is HIFEM right for me?</span>
          </h2>
          <div className="divider" />
          <ul className="q-list">
            {questions.map(q => (
              <li key={q}>
                <SquareBullet />
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <p className="yes-text">
            If you responded <strong>YES</strong> to any of these questions, then this may
            be the solution.
          </p>
          <Link to="/candidate" className="btn">Learn More</Link>
        </motion.div>

        <motion.div
          className="candidate-image"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
            alt="Mother exercising with daughter — stay active at every age"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
