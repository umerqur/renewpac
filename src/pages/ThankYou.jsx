import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { PhoneIcon } from '../components/Icons.jsx'
import { trackPhoneCall } from '../utils/tracking.js'

export default function ThankYou() {
  const [params] = useSearchParams()
  const source = params.get('source') || 'form'

  // Fire a page-view style event so any tag manager listener can record the
  // thank-you view as a secondary conversion signal.
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'thank_you_view',
      form_source: source,
    })
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: 'Thank You',
        page_path: '/thank-you',
        form_source: source,
      })
    }
  }, [source])

  return (
    <section className="section" style={{ paddingTop: 60 }}>
      <div
        className="container"
        style={{
          maxWidth: 720,
          textAlign: 'center',
          padding: '60px 24px',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: 96,
            height: 96,
            borderRadius: '50%',
            background: 'var(--navy)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 28px',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <span className="eyebrow">Request Received</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Thank you — we'll be in touch.
        </h1>
        <div className="divider" style={{ margin: '20px auto 28px' }} />
        <p style={{ fontSize: 17, maxWidth: 560, margin: '0 auto 28px' }}>
          Your request has been received. A member of our team will reach out
          within one business day to confirm your complimentary consultation
          and answer any questions you have.
        </p>
        <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 36 }}>
          Prefer to speak with us right now? Give us a call — we're happy to
          help.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="tel:+19052018005"
            onClick={() => trackPhoneCall('thank-you-page')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              background: 'var(--navy)',
              color: '#fff',
              padding: '18px 28px',
              borderRadius: 2,
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            <PhoneIcon color="#fff" />
            Call (905) 201-8005
          </a>
          <Link to="/" className="btn" style={{ background: 'transparent', color: 'var(--navy)', border: '2px solid var(--navy)', boxShadow: 'none' }}>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
