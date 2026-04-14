import PageHeader from '../components/PageHeader.jsx'
import { PhoneIcon } from '../components/Icons.jsx'

export default function Book() {
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
            Booking your first visit is easy. Give us a call and our team will
            walk you through availability, pricing, and what to expect.
          </p>

          <a
            href="tel:+19052018005"
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
            onSubmit={e => {
              e.preventDefault()
              alert("Thank you! Your request has been received. We'll contact you shortly.")
            }}
            style={{
              marginTop: 50,
              background: 'var(--cream)',
              padding: 40,
              display: 'grid',
              gap: 18,
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            <h3 style={{ marginTop: 0 }}>Request a callback</h3>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--navy)', fontWeight: 500 }}>Full Name</span>
              <input type="text" required style={inputStyle} />
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--navy)', fontWeight: 500 }}>Email</span>
                <input type="email" required style={inputStyle} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--navy)', fontWeight: 500 }}>Phone</span>
                <input type="tel" required style={inputStyle} />
              </label>
            </div>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--navy)', fontWeight: 500 }}>How can we help?</span>
              <textarea rows={5} style={inputStyle} />
            </label>
            <button type="submit" className="btn" style={{ justifySelf: 'start' }}>Request Callback</button>
          </form>
        </div>
      </section>
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
