import Hero from '../components/Hero.jsx'
import BenefitsBar from '../components/BenefitsBar.jsx'
import HifemIntro from '../components/HifemIntro.jsx'
import CandidateSection from '../components/CandidateSection.jsx'
import TreatmentPlans from '../components/TreatmentPlans.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsBar />
      <HifemIntro />
      <CandidateSection />
      <TreatmentPlans />
    </>
  )
}
