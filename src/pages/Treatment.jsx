import PageHeader from '../components/PageHeader.jsx'
import TreatmentPlans from '../components/TreatmentPlans.jsx'
import HifemIntro from '../components/HifemIntro.jsx'
import treatmentHero from '../assets/treatment.png'

export default function Treatment() {
  return (
    <>
      <PageHeader
        title="Treatment"
        subtitle="HIFEM pelvic floor therapy"
        image={treatmentHero}
      />
      <HifemIntro />
      <TreatmentPlans />
    </>
  )
}
