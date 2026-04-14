export default function Logo({ color = '#1f3a5f' }) {
  return (
    <svg
      width="180"
      height="90"
      viewBox="0 0 220 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Renew Pelvic Activation Clinic"
    >
      {/* Decorative oval ring */}
      <ellipse
        cx="110"
        cy="55"
        rx="95"
        ry="40"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
      />
      {/* Renew wordmark */}
      <text
        x="110"
        y="50"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="30"
        fontWeight="500"
        fontStyle="italic"
        fill={color}
        letterSpacing="1"
      >
        Renew
      </text>
      {/* Tagline */}
      <text
        x="110"
        y="74"
        textAnchor="middle"
        fontFamily="'Montserrat', sans-serif"
        fontSize="7"
        fontWeight="500"
        letterSpacing="2.5"
        fill={color}
      >
        PELVIC ACTIVATION CLINIC
      </text>
      {/* small decorative dots */}
      <circle cx="22" cy="55" r="2" fill={color} />
      <circle cx="198" cy="55" r="2" fill={color} />
    </svg>
  )
}
