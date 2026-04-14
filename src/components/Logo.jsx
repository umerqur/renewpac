import logoPelvic from '../assets/logo_pelvic.png'
import './Logo.css'

// Renew Pelvic Activation Clinic logo. The source of truth is the PNG asset
// at src/assets/logo_pelvic.png — rendered here with consistent sizing so the
// header, footer, and landing-page layouts stay in sync.
//
// When `color` is explicitly passed (e.g. "#ffffff" from the footer on the
// dark navy background) we apply a CSS filter that forces the mark to white
// for proper contrast. Otherwise the logo renders in its natural brand
// navy/gray colors.
export default function Logo({ color, className = '' }) {
  const invert = Boolean(color)
  const classes = ['site-logo', invert ? 'site-logo--invert' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <img
      src={logoPelvic}
      alt="Renew Pelvic Activation Clinic"
      className={classes}
      draggable="false"
    />
  )
}
