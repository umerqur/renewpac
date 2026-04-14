import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { PhoneIcon } from './Icons.jsx'
import { trackPhoneCall } from '../utils/tracking.js'
import './Header.css'

// Simplified primary nav for paid-traffic landing experience.
// Home / About Us / Research are intentionally removed to reduce navigation
// leakage from Google Ads visitors. Those pages still exist and are reachable
// from the footer.
const NAV = [
  { to: '/candidate', label: 'Am I a Candidate' },
  { to: '/treatment', label: 'Treatment' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="logo-link" aria-label="Renew PAC home">
          <Logo />
        </Link>

        {/* Tap-to-call button shown on mobile next to the burger. */}
        <a
          href="tel:+19052018005"
          className="header-phone-mobile"
          aria-label="Call Renew PAC at (905) 201-8005"
          onClick={() => trackPhoneCall('header-mobile')}
        >
          <PhoneIcon color="#1f3a5f" />
        </a>

        <button
          className={`burger ${mobileOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`primary-nav ${mobileOpen ? 'open' : ''}`}>
          <ul>
            {NAV.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="header-phone-li">
              <a
                href="tel:+19052018005"
                className="header-phone"
                aria-label="Call Renew PAC at (905) 201-8005"
                onClick={() => trackPhoneCall('header-desktop')}
              >
                <PhoneIcon color="currentColor" />
                <span>(905)&nbsp;201-8005</span>
              </a>
            </li>
            <li className="cta-li">
              <Link to="/book" className="nav-cta">
                Book an Appointment
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
