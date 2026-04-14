// Renew Pelvic Activation Clinic logo, rendered as an inline SVG so the
// stroke/fill colors can be themed (the footer overrides everything to white
// on the dark navy background).
//
// When `color` is passed explicitly (e.g. "#ffffff" from the footer) it is
// used for the entire mark to preserve contrast. Otherwise the wordmark is
// drawn in brand navy and the tagline in brand gray to match the official
// printed logo.
export default function Logo({ color }) {
  const wordmarkColor = color || '#1f3a5f'
  const taglineColor = color || '#8a8a8a'
  const emblemColor = color || '#1f3a5f'

  return (
    <svg
      width="220"
      height="78"
      viewBox="0 0 380 134"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Renew Pelvic Activation Clinic"
    >
      {/* Butterfly emblem: two thin overlapping ellipses forming a figure-8 */}
      <g
        transform="translate(48 48)"
        fill="none"
        stroke={emblemColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      >
        <ellipse cx="0" cy="0" rx="32" ry="10" transform="rotate(-32)" />
        <ellipse cx="0" cy="0" rx="32" ry="10" transform="rotate(32)" />
      </g>

      {/* RENEW wordmark */}
      <text
        x="100"
        y="62"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="50"
        fontWeight="700"
        fill={wordmarkColor}
        letterSpacing="2"
      >
        RENEW
      </text>

      {/* Tagline — gray in the official logo, overrideable for dark backgrounds */}
      <text
        x="102"
        y="88"
        fontFamily="'Montserrat', 'Helvetica Neue', sans-serif"
        fontSize="12"
        fontWeight="500"
        fill={taglineColor}
        letterSpacing="3.4"
      >
        PELVIC ACTIVATION CLINIC
      </text>

      {/* Sweeping U-curve beneath the wordmark */}
      <path
        d="M 18 60 Q 185 180 355 60"
        fill="none"
        stroke={wordmarkColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

    </svg>
  )
}
