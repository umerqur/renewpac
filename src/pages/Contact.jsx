import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { PhoneIcon, MailIcon, LocationIcon } from '../components/Icons.jsx'
import { trackPhoneCall, trackLeadSubmit } from '../utils/tracking.js'

const FORM_NAME = 'contact'

const encode = data =>
  Object.keys(data)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k] ?? ''))
    .join('&')

export default function Contact() {
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

      trackLeadSubmit('contact')
      navigate('/thank-you?source=contact')
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setError(
        "Sorry — we couldn't submit your request. Please try again, or call us directly at (905) 201-8005."
      )
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageHeader
        title="Book an Appointment"
        subtitle="Your first step toward confidence"
        image="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 60,
              alignItems: 'start',
            }}
            className="contact-grid"
          >
            <div>
              <span className="eyebrow">Let's get started</span>
              <h2>Book your complimentary consultation.</h2>
              <div className="divider" />
              <p>
                Call (905) 201-8005 to book your complimentary consultation
                and trial - we don't provide receipts for extended health
                coverage.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span className="contact-ico"><PhoneIcon color="#fff" /></span>
                  <a
                    href="tel:+19052018005"
                    onClick={() => trackPhoneCall('contact-page')}
                    style={{ color: 'var(--navy)', fontSize: 17, fontWeight: 500 }}
                  >
                    (905) 201-8005
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span className="contact-ico"><MailIcon color="#fff" /></span>
                  <a href="mailto:info@sherlaseclinic.com" style={{ color: 'var(--navy)', fontSize: 17, fontWeight: 500 }}>info@sherlaseclinic.com</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span className="contact-ico"><LocationIcon color="#fff" /></span>
                  <span style={{ color: 'var(--navy)', fontSize: 17, fontWeight: 500 }}>383 Main Street Markham N #7, Markham, ON L3P 1Z3</span>
                </div>
              </div>
            </div>

            <form
              className="contact-form"
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
                <span>Name</span>
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
                  value={values.phone}
                  onChange={onChange}
                  autoComplete="tel"
                />
              </label>
              <label>
                <span>How can we help?</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={values.message}
                  onChange={onChange}
                />
              </label>
              {error && (
                <div
                  role="alert"
                  style={{
                    padding: '12px 16px',
                    background: '#fdecec',
                    border: '1px solid #e8b4b4',
                    color: '#8a2222',
                    borderRadius: 2,
                    fontSize: 14,
                  }}
                >
                  {error}
                </div>
              )}
              <button type="submit" className="btn" disabled={submitting}>
                {submitting ? 'Sending…' : 'Request My Appointment'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .contact-ico {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: var(--navy);
          border-radius: 50%;
          flex-shrink: 0;
        }
        .contact-form {
          background: var(--cream);
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          box-shadow: var(--shadow-soft);
        }
        .contact-form label { display: flex; flex-direction: column; gap: 8px; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; color: var(--navy); font-weight: 500; }
        .contact-form input,
        .contact-form textarea {
          font-family: inherit;
          padding: 14px 16px;
          border: 1px solid var(--line);
          background: #fff;
          border-radius: 2px;
          font-size: 15px;
          color: #333;
          transition: border 0.2s ease;
        }
        .contact-form input:focus,
        .contact-form textarea:focus { outline: none; border-color: var(--navy); }
        .contact-form textarea { resize: vertical; }
        .contact-form button { margin-top: 10px; align-self: flex-start; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
