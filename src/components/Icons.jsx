// Line-art icons matching the elegant, thin-stroke medical illustration style
// of the original Renew PAC site. All four benefit icons share a consistent
// 1.6 stroke width, round line caps, and 100x100 viewBox for visual harmony.

export function SuccessRateIcon({ size = 90, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Faint base ring */}
      <circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth="1.4" strokeOpacity="0.35" />
      {/* 95% progress arc — leaves a small gap at the top */}
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeDasharray="263.89"
        strokeDashoffset="13.2"
        strokeLinecap="round"
        transform="rotate(-85 50 50)"
      />
      {/* Centered 95% label */}
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fill={color}
        fontFamily="'Montserrat', sans-serif"
        fontSize="18"
        fontWeight="600"
        letterSpacing="0.5"
      >
        95%
      </text>
    </svg>
  )
}

export function PelvisIcon({ size = 90, color = '#ffffff' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left iliac crest (hip wing) sweeping down into the ischium */}
      <path d="M50 24 C 40 20, 28 20, 18 28 C 12 34, 10 46, 14 56 C 18 66, 28 72, 36 70 C 44 68, 48 60, 50 52" />
      {/* Right iliac crest mirrored */}
      <path d="M50 24 C 60 20, 72 20, 82 28 C 88 34, 90 46, 86 56 C 82 66, 72 72, 64 70 C 56 68, 52 60, 50 52" />
      {/* Sacrum / pubic column connecting top and bottom centre */}
      <path d="M50 24 L 50 52" />
      {/* Left obturator foramen */}
      <ellipse cx="30" cy="50" rx="7" ry="10" transform="rotate(-12 30 50)" />
      {/* Right obturator foramen */}
      <ellipse cx="70" cy="50" rx="7" ry="10" transform="rotate(12 70 50)" />
      {/* Sacroiliac joint dots */}
      <circle cx="43" cy="32" r="1.3" fill={color} stroke="none" />
      <circle cx="57" cy="32" r="1.3" fill={color} stroke="none" />
      <circle cx="44" cy="50" r="1.2" fill={color} stroke="none" />
      <circle cx="56" cy="50" r="1.2" fill={color} stroke="none" />
      {/* Lower ischial tips */}
      <path d="M36 70 L 34 78" />
      <path d="M64 70 L 66 78" />
    </svg>
  )
}

export function WalkingIcon({ size = 90, color = '#ffffff' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Head */}
      <circle cx="52" cy="16" r="6" />
      {/* Torso */}
      <path d="M52 22 L 50 46" />
      {/* Forward-swinging arm */}
      <path d="M50 30 L 62 40 L 60 52" />
      {/* Back-swinging arm */}
      <path d="M50 30 L 42 44" />
      {/* Front leg (bent forward) */}
      <path d="M50 46 L 58 64 L 58 84" />
      {/* Back leg (extending back) */}
      <path d="M50 46 L 42 66 L 36 84" />
    </svg>
  )
}

export function DressIcon({ size = 90, color = '#ffffff' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left strap */}
      <path d="M38 16 L 42 30" />
      {/* Right strap */}
      <path d="M62 16 L 58 30" />
      {/* Sweetheart neckline */}
      <path d="M42 30 Q 50 26, 58 30" />
      {/* Bodice sides tapering to a natural waist */}
      <path d="M42 30 L 40 46" />
      <path d="M58 30 L 60 46" />
      {/* Waistline */}
      <path d="M40 46 Q 50 49, 60 46" />
      {/* A-line skirt flaring out */}
      <path d="M40 46 C 32 58, 26 72, 22 84" />
      <path d="M60 46 C 68 58, 74 72, 78 84" />
      {/* Hemline sweep */}
      <path d="M22 84 Q 50 92, 78 84" />
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
