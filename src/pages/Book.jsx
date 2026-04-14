import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { PhoneIcon } from '../components/Icons.jsx'
import { trackPhoneCall, trackLeadSubmit } from '../utils/tracking.js'

const FORM_NAME = 'book-appointment'

const encode = data =>
  Object.keys(data)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k] ?? ''))
    .join('&')

export default function Book() {
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

      trackLeadSubmit('book')
      navigate('/thank-you?source=book')
    } catch (err) {
      console.error('Book form submission failed:', err)
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
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <span className="eyebrow">Let's get started</span>
          <h2>Complimentary Consultation</h2>
          <div className="divider" />
          <p>
            Booking your first visit is easy. Call our team directly for
            availability, pricing, and what to expect — or fill out the form
            below and we'll contact you within one business day.
          </p>

          <a
            href="tel:+19052018005"
            onClick={() => trackPhoneCall('book-page')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              background: 'var(--navy)',
              color: '#fff',
              padding: '22px 32px',
              borderRadius: 2,
              fontFamily: 'var(--font-serif)',
              fontSize: 26,
              fontWeight: 500,
              marginTop: 12,
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <PhoneIcon color="#fff" />
            Call (905) 201-8005
          </a>

          <form
            name={FORM_NAME}
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={onSubmit}
            style={{
              marginTop: 50,
              background: 'var(--cream)',
              padding: 40,
              display: 'grid',
              gap: 18,
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            {/* Netlify form detection requires these hidden fields even in a
                JS-submitted form. */}
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

            <h3 style={{ marginTop: 0 }}>Request a callback</h3>

            <label style={labelStyle}>
              <span style={labelSpanStyle}>Full Name</span>
              <input
                type="text"
                name="name"
                required
                value={values.name}
                onChange={onChange}
                style={inputStyle}
                autoComplete="name"
              />
            </label>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }} className="book-two-col">
              <label style={labelStyle}>
                <span style={labelSpanStyle}>Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={values.email}
                  onChange={onChange}
                  style={inputStyle}
                  autoComplete="email"
                />
              </label>
              <label style={labelStyle}>
                <span style={labelSpanStyle}>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={values.phone}
                  onChange={onChange}
                  style={inputStyle}
                  autoComplete="tel"
                />
              </label>
            </div>

            <label style={labelStyle}>
              <span style={labelSpanStyle}>How can we help?</span>
              <textarea
                name="message"
                rows={5}
                value={values.message}
                onChange={onChange}
                style={inputStyle}
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

            <button
              type="submit"
              className="btn"
              disabled={submitting}
              style={{ justifySelf: 'start', opacity: submitting ? 0.7 : 1 }}
            >
              {submitting ? 'Sending…' : 'Request Callback'}
            </button>
            <p style={{ fontSize: 12, color: 'var(--muted)', margin: 0 }}>
              By submitting this form you agree to be contacted by Renew PAC
              about your consultation.
            </p>
          </form>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .book-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

const inputStyle = {
  padding: '14px 16px',
  border: '1px solid var(--line)',
  background: '#fff',
  borderRadius: 2,
  fontSize: 15,
  color: '#333',
  fontFamily: 'inherit',
}

const labelStyle = { display: 'flex', flexDirection: 'column', gap: 8 }

const labelSpanStyle = {
  fontSize: 13,
  letterSpacing: 1,
  textTransform: 'uppercase',
  color: 'var(--navy)',
  fontWeight: 500,
}
