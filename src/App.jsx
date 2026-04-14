import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Candidate from './pages/Candidate.jsx'
import Treatment from './pages/Treatment.jsx'
import About from './pages/About.jsx'
import Research from './pages/Research.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import Book from './pages/Book.jsx'
import ThankYou from './pages/ThankYou.jsx'
import LandingAds from './pages/LandingAds.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

// Routes that render their own layout / don't use the full site chrome.
const BARE_LAYOUT_ROUTES = ['/lp']

export default function App() {
  const location = useLocation()
  const isBare = BARE_LAYOUT_ROUTES.includes(location.pathname)

  if (isBare) {
    return (
      <div className="app">
        <ScrollToTop />
        <Routes>
          <Route path="/lp" element={<LandingAds />} />
        </Routes>
      </div>
    )
  }

  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
