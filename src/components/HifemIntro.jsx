import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import renewPacProvides from '../assets/renew-pac-provides.jpg'
import './HifemIntro.css'

export default function HifemIntro() {
  return (
    <section className="hifem-intro section">
      <div className="container hifem-grid">
        <motion.div
          className="hifem-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <img
            src={renewPacProvides}
            alt="Confident older woman jogging outdoors in a sunlit park — active, healthy and strong"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="hifem-text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <span className="eyebrow">Renew PAC Provides</span>
          <h2>
            Pelvic floor therapy in combination with <em>High-Intensity Focused Electromagnetic</em> (HIFEM) treatment.
          </h2>
          <div className="divider" />
          <h4 className="sub-q">What is HIFEM treatment?</h4>
          <p>
            You basically sit in a chair and enjoy some time to yourself for 28 minutes
            while we take care of the rest. It feels like thousands of gentle, focused
            contractions — effortlessly re-training the pelvic floor muscles you can't
            reach through kegels alone.
          </p>
          <div className="hifem-ctas">
            <Link to="/treatment" className="btn">Learn More</Link>
            <Link to="/book" className="btn btn-ghost">
              Book Your Complimentary Trial
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
