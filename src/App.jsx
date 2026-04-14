import { Routes, Route } from 'react-router-dom'
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
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
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
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
