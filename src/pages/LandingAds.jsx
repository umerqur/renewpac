import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from '../components/Logo.jsx'
import {
  PhoneIcon,
  CheckIcon,
  SuccessRateIcon,
  PelvisIcon,
  WalkingIcon,
  DressIcon,
} from '../components/Icons.jsx'
import { trackPhoneCall, trackLeadSubmit } from '../utils/tracking.js'
import './LandingAds.css'

const FORM_NAME = 'book-appointment'

const encode = data =>
  Object.keys(data)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k] ?? ''))
    .join('&')

const benefits = [
  { Icon: SuccessRateIcon, label: '95% Success Rate' },
  { Icon: PelvisIcon, label: 'Treats Entire Pelvic Floor' },
  { Icon: WalkingIcon, label: 'Walk-In, Walk-Out' },
  { Icon: DressIcon, label: 'Remain Fully Clothed' },
]

const reasons = [
  'Painless, non-invasive HIFEM technology',
  'Fully clothed, 28-minute sessions',
  'Replaces thousands of kegels in a single visit',
  'Perfect for post-partum, menopause & post-prostate recovery',
  'Walk in, walk out — no downtime',
]

export default function LandingAds() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    'bot-field': '',
  })

  const onChange = e =>
    setValues(v => ({ ...v, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, ...values }),
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      trackLeadSubmit('landing-ads')
      navigate('/thank-you?source=landing-ads')
    } catch (err) {
      console.error('Landing form submission failed:', err)
      setError(
        "Sorry — we couldn't submit your request. Please try again, or call us at (905) 201-8005."
      )
      setSubmitting(false)
    }
  }

  return (
    <div className="lp-root">
      {/* Minimal header — logo, phone, single CTA. No full nav. */}
      <header className="lp-header">
        <div className="lp-header-inner">
          <div className="lp-logo">
            <Logo />
          </div>
          <div className="lp-header-right">
            <a
              href="tel:+19052018005"
              className="lp-phone"
              onClick={() => trackPhoneCall('lp-header')}
              aria-label="Call Renew PAC at (905) 201-8005"
            >
              <PhoneIcon color="currentColor" />
              <span>(905)&nbsp;201-8005</span>
            </a>
            <a href="#book" className="lp-cta-small">
              Book Now
            </a>
          </div>
        </div>
      </header>

      <main className="lp-main">
        <section className="lp-hero">
          <div className="lp-hero-bg" />
          <div className="lp-hero-overlay" />
          <div className="lp-hero-grid">
            <motion.div
              className="lp-hero-copy"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="lp-eyebrow">Complimentary Consultation</span>
              <h1>
                End Urinary Leakage Without
                <br />
                <em>Surgery or Medication.</em>
              </h1>
              <p className="lp-sub">
                HIFEM pelvic floor therapy — a painless, 28-minute, fully-clothed
                treatment with a 95% success rate. Walk in, walk out.
              </p>
              <ul className="lp-reasons">
                {reasons.map(r => (
                  <li key={r}>
                    <CheckIcon color="#ffffff" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <div className="lp-hero-ctas">
                <a
                  href="tel:+19052018005"
                  className="lp-cta-big"
                  onClick={() => trackPhoneCall('lp-hero')}
                >
                  <PhoneIcon color="#fff" />
                  Call (905) 201-8005
                </a>
                <a href="#book" className="lp-cta-ghost">
                  Request a Callback
                </a>
              </div>
            </motion.div>

            <motion.div
              className="lp-form-card"
              id="book"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <h2>Book Your Free Consultation</h2>
              <p className="lp-form-sub">
                We'll reach out within one business day.
              </p>
              <form
                name={FORM_NAME}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={onSubmit}
              >
                <input type="hidden" name="form-name" value={FORM_NAME} />
                <p style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                  <label>
                    Don't fill this out if you're human:{' '}
                    <input
                      name="bot-field"
                      tabIndex="-1"
                      autoComplete="off"
                      value={values['bot-field']}
                      onChange={onChange}
                    />
                  </label>
                </p>
                <label>
                  <span>Full Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={values.name}
                    onChange={onChange}
                    autoComplete="name"
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={values.email}
                    onChange={onChange}
                    autoComplete="email"
                  />
                </label>
                <label>
                  <span>Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={values.phone}
                    onChange={onChange}
                    autoComplete="tel"
                  />
                </label>
                <label>
                  <span>How can we help? (optional)</span>
                  <textarea
                    name="message"
                    rows={3}
                    value={values.message}
                    onChange={onChange}
                  />
                </label>
                {error && (
                  <div role="alert" className="lp-form-error">
                    {error}
                  </div>
                )}
                <button type="submit" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Request My Callback'}
                </button>
                <p className="lp-disclaimer">
                  By submitting you agree to be contacted by Renew PAC.
                </p>
              </form>
            </motion.div>
          </div>
        </section>

        <section className="lp-benefits">
          <div className="lp-benefits-inner">
            {benefits.map(({ Icon, label }) => (
              <div key={label} className="lp-benefit">
                <Icon />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="lp-closing">
          <h2>Ready to take control of your body?</h2>
          <div className="divider" style={{ margin: '20px auto 28px' }} />
          <p>
            Join hundreds of women and men who have reclaimed their confidence
            with HIFEM pelvic floor therapy at Renew PAC.
          </p>
          <div className="lp-closing-ctas">
            <a
              href="tel:+19052018005"
              className="lp-cta-big"
              onClick={() => trackPhoneCall('lp-closing')}
            >
              <PhoneIcon color="#fff" />
              Call (905) 201-8005
            </a>
            <a href="#book" className="lp-cta-ghost lp-cta-ghost-dark">
              Request a Callback
            </a>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <p>
            &copy; {new Date().getFullYear()} Renew Pelvic Activation Clinic. All
            rights reserved.
          </p>
          <p>
            383 Main Street Markham N #7, Markham, ON L3P 1Z3 ·{' '}
            <a
              href="tel:+19052018005"
              onClick={() => trackPhoneCall('lp-footer')}
            >
              (905) 201-8005
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
