import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { SquareBullet } from '../components/Icons.jsx'
import CandidateSection from '../components/CandidateSection.jsx'

export default function Candidate() {
  return (
    <>
      <PageHeader
        title="Am I a Candidate"
        subtitle="Is HIFEM right for me?"
        image="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Who is HIFEM for?</span>
          <h2>Designed for real, everyday life.</h2>
          <div className="divider" />
          <p>
            HIFEM pelvic floor therapy is a safe, non-invasive treatment for anyone
            experiencing urinary leakage, urgency, or a weakened pelvic floor.
            It is an ideal choice for women after childbirth, during and after
            menopause, and for men recovering from prostate surgery.
          </p>
          <p>
            A single HIFEM session generates thousands of supramaximal pelvic-floor
            muscle contractions — something you simply cannot replicate with
            kegels or voluntary exercise.
          </p>
          <h3 style={{ marginTop: 40 }}>Quick self-check</h3>
          <ul className="q-list" style={{ marginTop: 18 }}>
            {[
              'Do you have urinary leakage when you cough, sneeze, laugh, jump, or lift?',
              'Do you have urinary leakage on the way to the toilet?',
              'Do you wear pads during daily activities to manage leakage?',
              'Do you wake up more than once at night to urinate?',
              'Have you had a baby, or are you in peri-menopause or post-menopause?',
              'Are you a man recovering from prostate surgery?',
            ].map(q => (
              <li key={q}>
                <SquareBullet />
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 28 }}>
            If you answered <strong>YES</strong> to any of these, HIFEM may be
            the right solution for you. Speak with our clinicians for a no-pressure
            consultation.
          </p>
          <Link to="/book" className="btn">Book a Consultation</Link>
        </div>
      </section>

      <CandidateSection />
    </>
  )
}
