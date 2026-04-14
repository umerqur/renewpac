import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { ChevronDown } from '../components/Icons.jsx'
import faqHero from '../assets/FAQ.png'

const faqs = [
  {
    q: 'What is HIFEM treatment?',
    a: 'HIFEM stands for High-Intensity Focused Electromagnetic technology. It is a non-invasive treatment that uses focused electromagnetic energy to induce thousands of supramaximal contractions in the pelvic floor — far more than you could achieve with voluntary exercise.',
  },
  {
    q: 'How long is a treatment session?',
    a: 'Each HIFEM session is 28 minutes. You remain fully clothed and can sit back and relax.',
  },
  {
    q: 'Is HIFEM painful?',
    a: 'HIFEM is painless and non-invasive. Most patients describe the sensation as unusual at first — like thousands of tiny contractions — but not painful.',
  },
  {
    q: 'How many treatments will I need?',
    a: 'Our initial treatment plan includes 6 sessions booked twice a week for 3 weeks. Follow-up treatments are recommended every 4 months to maintain results.',
  },
  {
    q: 'When will I see results?',
    a: 'Many patients notice improvements after just a few sessions. The majority see meaningful changes by the end of the initial treatment plan.',
  },
  {
    q: 'Is there any downtime?',
    a: 'None. HIFEM is a walk-in, walk-out procedure. You can return to your normal activities immediately.',
  },
  {
    q: 'How much does it cost?',
    a: 'Please call (905) 201-8005 for pricing details and to learn about insurance coverage options.',
  },
]

function Item({ item, open, onClick }) {
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={onClick} aria-expanded={open}>
        <span>{item.q}</span>
        <span className="faq-chevron">
          <ChevronDown />
        </span>
      </button>
      <div className="faq-a" style={{ maxHeight: open ? 400 : 0 }}>
        <p>{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <>
      <PageHeader
        title="FAQ"
        subtitle="Frequently asked questions"
        image={faqHero}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Answers</span>
          <h2>Everything you want to know.</h2>
          <div className="divider" />
          <div className="faq-list">
            {faqs.map((f, i) => (
              <Item
                key={f.q}
                item={f}
                open={openIdx === i}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .faq-list { display: flex; flex-direction: column; gap: 14px; margin-top: 10px; }
        .faq-item {
          border: 1px solid var(--line);
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .faq-item.open {
          border-color: var(--navy);
          box-shadow: var(--shadow-soft);
        }
        .faq-q {
          width: 100%;
          background: transparent;
          border: 0;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          text-align: left;
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 500;
          color: var(--navy);
          cursor: pointer;
        }
        .faq-chevron {
          display: inline-flex;
          transition: transform 0.3s ease;
        }
        .faq-item.open .faq-chevron { transform: rotate(180deg); }
        .faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .faq-a p {
          margin: 0;
          padding: 0 24px 22px;
          color: #444;
          font-size: 15px;
          line-height: 1.7;
        }
      `}</style>
    </>
  )
}
