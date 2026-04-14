import PageHeader from '../components/PageHeader.jsx'

const studies = [
  {
    title: 'Pelvic Floor Muscle Training for Stress Urinary Incontinence',
    summary:
      'Pelvic floor muscle training is studied in the clinical literature as a conservative approach for stress urinary incontinence. HIFEM treatments are designed to elicit repeated pelvic floor muscle contractions during each session, engaging the same muscle groups that standard pelvic floor rehabilitation targets.',
    sources: [
      'Arzu Razak Ozdincler et al., Telemedicine and e-Health, 2025',
    ],
  },
  {
    title: 'Post-partum Pelvic Floor Recovery',
    summary:
      'Pelvic floor rehabilitation after childbirth has been examined in clinical research as part of postpartum recovery, with structured pelvic floor training studied for its potential role in helping new mothers regain pelvic floor function.',
    sources: [
      'Zhijing Sun et al., Zhonghua Fu Chan Ke Za Zhi, 2015',
    ],
  },
  {
    title: 'Post-prostatectomy Continence',
    summary:
      'Continence recovery after prostate surgery is an area of ongoing clinical research, with studies investigating pelvic floor rehabilitation and related conservative approaches for men recovering from prostatectomy.',
    sources: [
      'Halil Tosun et al., Therapeutics and Clinical Risk Management, 2025',
      'Alexander Canning et al., World Journal of Urology, 2022',
    ],
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
                <p style={{ margin: '0 0 16px', color: '#444' }}>{s.summary}</p>
                <div
                  style={{
                    borderTop: '1px solid rgba(31, 58, 95, 0.12)',
                    paddingTop: 12,
                  }}
                >
                  {s.sources.map(src => (
                    <p
                      key={src}
                      style={{
                        margin: '2px 0',
                        fontSize: 12,
                        lineHeight: 1.55,
                        color: 'var(--muted)',
                        letterSpacing: '0.01em',
                      }}
                    >
                      <span style={{ fontWeight: 500 }}>Source:</span> {src}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
