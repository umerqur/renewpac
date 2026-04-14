// Line-art icons matching the style of the original Renew PAC site

export function SuccessRateIcon({ size = 90, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" fill="none" stroke={color} strokeWidth="2" />
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeDasharray="276.46"
        strokeDashoffset="13.8"
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
      />
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fill={color}
        fontFamily="'Montserrat', sans-serif"
        fontSize="18"
        fontWeight="500"
      >
        95
      </text>
      <text
        x="72"
        y="50"
        textAnchor="middle"
        fill={color}
        fontFamily="'Montserrat', sans-serif"
        fontSize="10"
        fontWeight="400"
      >
        %
      </text>
    </svg>
  )
}

export function PelvisIcon({ size = 90, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Stylized pelvis line drawing */}
      <path d="M20 40 C 22 28, 32 22, 42 26 C 46 28, 48 34, 50 40" />
      <path d="M80 40 C 78 28, 68 22, 58 26 C 54 28, 52 34, 50 40" />
      <path d="M22 42 C 20 52, 24 62, 34 68 C 42 72, 46 70, 50 64" />
      <path d="M78 42 C 80 52, 76 62, 66 68 C 58 72, 54 70, 50 64" />
      <path d="M50 40 L 50 64" />
      <circle cx="30" cy="44" r="3" />
      <circle cx="70" cy="44" r="3" />
      <path d="M34 68 L 30 80" />
      <path d="M66 68 L 70 80" />
    </svg>
  )
}

export function WalkingIcon({ size = 90, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="54" cy="18" r="6" />
      <path d="M54 24 L 50 42 L 40 58" />
      <path d="M50 42 L 62 50 L 58 66 L 50 82" />
      <path d="M40 58 L 32 78" />
      <path d="M50 36 L 62 34" />
    </svg>
  )
}

export function DressIcon({ size = 90, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M38 20 L 40 30 L 32 44 L 26 82 L 74 82 L 68 44 L 60 30 L 62 20" />
      <path d="M38 20 Q 50 14, 62 20" />
      <path d="M40 30 Q 50 36, 60 30" />
    </svg>
  )
}

export function CheckIcon({ size = 22, color = '#2f6fb5' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function CrossIcon({ size = 22, color = '#b03a3a' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export function SquareBullet({ color = '#1f3a5f' }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="10" height="10" fill={color} />
    </svg>
  )
}

export function PhoneIcon({ size = 20, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function MailIcon({ size = 20, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export function LocationIcon({ size = 20, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function ChevronDown({ size = 20, color = '#1f3a5f' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
