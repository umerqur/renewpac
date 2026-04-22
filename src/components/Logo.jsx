import './Logo.css'

// Typographic co-branded lockup. "Renew" stays the primary wordmark (the
// renewpac.ca domain) with "at Sherlase Clinic & Spa" sitting under it as
// a subtle secondary line. Rendering the mark as text — rather than a bulky
// PNG — keeps the header crisp at every viewport and lets us restyle it
// with CSS instead of re-exporting image assets.
//
// `color` forces a light treatment for dark backgrounds (footer navy). The
// caller is responsible for wrapping the mark in a link when appropriate,
// matching the previous Logo contract.
export default function Logo({ color, className = '' }) {
  const invert = Boolean(color)
  const classes = ['site-logo', invert ? 'site-logo--invert' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <span
      className={classes}
      role="img"
      aria-label="Renew at Sherlase Clinic & Spa"
    >
      <span className="site-logo__primary">Renew</span>
      <span className="site-logo__secondary">
        <span className="site-logo__at">at</span>
        <span className="site-logo__partner">Sherlase Clinic &amp; Spa</span>
      </span>
    </span>
  )
}
