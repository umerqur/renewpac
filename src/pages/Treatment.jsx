import PageHeader from '../components/PageHeader.jsx'
import TreatmentPlans from '../components/TreatmentPlans.jsx'
import HifemIntro from '../components/HifemIntro.jsx'

export default function Treatment() {
  return (
    <>
      <PageHeader
        title="Treatment"
        subtitle="HIFEM pelvic floor therapy"
        image="https://images.unsplash.com/photo-1571772805064-207c8435df79?auto=format&fit=crop&w=2000&q=80"
      />
      <HifemIntro />
      <TreatmentPlans />
    </>
  )
}
