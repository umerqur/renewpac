import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { PhoneIcon, MailIcon, LocationIcon } from './Icons.jsx'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-logo">
            <Logo color="#ffffff" />
          </div>
          <p className="footer-tag">
            Reclaim your confidence with HIFEM pelvic floor therapy.
            Painless. Non-invasive. Walk-in, walk-out.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/candidate">Am I a Candidate</Link></li>
            <li><Link to="/treatment">Treatment</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="contact-list">
            <li>
              <PhoneIcon />
              <a href="tel:+19052018005">(905) 201-8005</a>
            </li>
            <li>
              <MailIcon />
              <a href="mailto:info@renewpac.ca">info@renewpac.ca</a>
            </li>
            <li>
              <LocationIcon />
              <span>Ontario, Canada</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Book Your Visit</h4>
          <p className="footer-tag">
            Ready to take control of your body? Schedule a complimentary consultation today.
          </p>
          <Link to="/book" className="footer-cta">Book an Appointment</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {year} Renew Pelvic Activation Clinic. All rights reserved.</p>
          <p>Designed for confidence and comfort.</p>
        </div>
      </div>
    </footer>
  )
}
