import PageHeader from '../components/PageHeader.jsx'

const studies = [
  {
    title: 'HIFEM for Stress Urinary Incontinence',
    summary:
      'Multiple peer-reviewed studies show significant improvement in urinary leakage symptoms after a course of HIFEM treatments, with the majority of participants reporting reduced pad use within weeks.',
  },
  {
    title: 'Pelvic Floor Muscle Strengthening',
    summary:
      'HIFEM induces supramaximal contractions that strengthen and re-educate the pelvic floor beyond what voluntary exercises (such as kegels) can achieve.',
  },
  {
    title: 'Post-partum Recovery',
    summary:
      'Clinical research supports HIFEM as a safe, effective adjunct for postpartum pelvic floor rehabilitation, helping new mothers return to activity with confidence.',
  },
  {
    title: 'Post-prostatectomy Continence',
    summary:
      'Emerging studies indicate that HIFEM improves continence and quality of life in men recovering from prostate surgery.',
  },
]

export default function Research() {
  return (
    <>
      <PageHeader
        title="Research"
        subtitle="The science behind HIFEM"
        image="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <span className="eyebrow">Evidence based</span>
          <h2>Clinical research supports the treatment we offer.</h2>
          <div className="divider" />
          <p>
            HIFEM is backed by a growing body of independent clinical research
            published in peer-reviewed journals. Below is a brief overview of the
            key areas our clinicians rely on when building your treatment plan.
          </p>
          <div style={{ display: 'grid', gap: 24, marginTop: 30 }}>
            {studies.map(s => (
              <div
                key={s.title}
                style={{
                  background: 'var(--cream)',
                  padding: '28px 32px',
                  borderLeft: '3px solid var(--navy)',
                  borderRadius: 2,
                }}
              >
                <h3 style={{ margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ margin: 0, color: '#444' }}>{s.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
