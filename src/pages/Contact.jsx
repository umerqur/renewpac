import PageHeader from '../components/PageHeader.jsx'
import { PhoneIcon, MailIcon, LocationIcon } from '../components/Icons.jsx'

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you"
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
              <span className="eyebrow">Get in touch</span>
              <h2>Questions? We're here for you.</h2>
              <div className="divider" />
              <p>
                Call us during business hours or send us a message and we'll get
                back to you as soon as possible. A friendly team member will walk
                you through the next steps.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span className="contact-ico"><PhoneIcon color="#fff" /></span>
                  <a href="tel:+19052018005" style={{ color: 'var(--navy)', fontSize: 17, fontWeight: 500 }}>(905) 201-8005</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span className="contact-ico"><MailIcon color="#fff" /></span>
                  <a href="mailto:info@renewpac.ca" style={{ color: 'var(--navy)', fontSize: 17, fontWeight: 500 }}>info@renewpac.ca</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span className="contact-ico"><LocationIcon color="#fff" /></span>
                  <span style={{ color: 'var(--navy)', fontSize: 17, fontWeight: 500 }}>Ontario, Canada</span>
                </div>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={e => {
                e.preventDefault()
                alert("Thank you! We'll be in touch shortly.")
              }}
            >
              <label>
                <span>Name</span>
                <input type="text" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" required />
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" />
              </label>
              <label>
                <span>Message</span>
                <textarea rows={5} required />
              </label>
              <button type="submit" className="btn">Send Message</button>
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
