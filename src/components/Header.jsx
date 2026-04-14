import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import './Header.css'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/candidate', label: 'Am I a Candidate' },
  { to: '/treatment', label: 'Treatment' },
  { to: '/about', label: 'About Us' },
  { to: '/research', label: 'Research' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact Us' },
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
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
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
