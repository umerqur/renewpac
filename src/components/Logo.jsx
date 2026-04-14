export default function Logo({ color = '#1f3a5f' }) {
  return (
    <svg
      width="220"
      height="78"
      viewBox="0 0 380 134"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Renew Pelvic Activation Clinic"
    >
      {/* Butterfly emblem: two thin overlapping ellipses */}
      <g
        transform="translate(48 48)"
        fill="none"
        stroke={color}
        strokeWidth="2"
      >
        <ellipse cx="0" cy="0" rx="30" ry="9" transform="rotate(-32)" />
        <ellipse cx="0" cy="0" rx="30" ry="9" transform="rotate(32)" />
      </g>

      {/* RENEW wordmark */}
      <text
        x="100"
        y="62"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="50"
        fontWeight="700"
        fill={color}
        letterSpacing="2"
      >
        RENEW
      </text>

      {/* Tagline */}
      <text
        x="102"
        y="88"
        fontFamily="'Montserrat', 'Helvetica Neue', sans-serif"
        fontSize="12"
        fontWeight="500"
        fill={color}
        letterSpacing="3.4"
      >
        PELVIC ACTIVATION CLINIC
      </text>

      {/* Sweeping U-curve beneath */}
      <path
        d="M 18 60 Q 185 180 355 60"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
