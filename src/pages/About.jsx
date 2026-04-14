import PageHeader from '../components/PageHeader.jsx'

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Compassionate care, proven technology"
        image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Our Clinic</span>
          <h2>Renew Pelvic Activation Clinic</h2>
          <div className="divider" />
          <p>
            Renew PAC is a dedicated pelvic-health clinic helping women and men
            reclaim confidence through the latest, evidence-based High-Intensity
            Focused Electromagnetic (HIFEM) technology. Our team combines clinical
            experience with a welcoming, private environment so you can focus on
            what matters most — your wellbeing.
          </p>
          <p>
            We believe that pelvic health should be part of everyday conversations.
            No pads, no embarrassment, no avoiding the things you love. Whether you
            are a new mother, peri- or post-menopausal, or recovering from prostate
            surgery, our goal is simple: help you take control of your body.
          </p>
          <h3 style={{ marginTop: 40 }}>Why patients choose Renew PAC</h3>
          <ul style={{ paddingLeft: 20 }}>
            <li>Proven 95% patient satisfaction rate</li>
            <li>Painless, walk-in walk-out procedure</li>
            <li>Fully clothed, private treatment rooms</li>
            <li>Clinicians with specialized pelvic-floor training</li>
            <li>Personalized treatment plans and ongoing follow-up</li>
          </ul>
        </div>
      </section>
    </>
  )
}
