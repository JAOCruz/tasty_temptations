import { cn } from "@/lib/utils"

export function CuteCupcake({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-20 w-20", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wrapper */}
      <path
        d="M30 60 L35 85 Q50 92 65 85 L70 60 Z"
        fill="#FFF8E8"
        stroke="#222222"
        strokeWidth="3"
      />
      {/* Frosting */}
      <path
        d="M25 55 Q50 20 75 55 Q70 60 65 58 Q60 62 55 58 Q50 62 45 58 Q40 62 35 58 Q30 60 25 55"
        fill="#8B5CF6"
        stroke="#222222"
        strokeWidth="3"
      />
      {/* Face */}
      <circle cx="42" cy="50" r="2.5" fill="#222222" />
      <circle cx="58" cy="50" r="2.5" fill="#222222" />
      <path
        d="M45 58 Q50 62 55 58"
        fill="none"
        stroke="#222222"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Cherry */}
      <circle cx="50" cy="25" r="4" fill="#ff7b54" stroke="#222222" strokeWidth="2" />
    </svg>
  )
}

export function CuteHeart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-20 w-20", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 85 Q20 55 20 35 Q20 20 35 20 Q45 20 50 30 Q55 20 65 20 Q80 20 80 35 Q80 55 50 85"
        fill="#ff7b54"
        stroke="#222222"
        strokeWidth="3"
      />
      {/* Face */}
      <circle cx="40" cy="45" r="2.5" fill="#222222" />
      <circle cx="60" cy="45" r="2.5" fill="#222222" />
      <path
        d="M45 55 Q50 60 55 55"
        fill="none"
        stroke="#222222"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Sprinkle dots */}
      <circle cx="32" cy="38" r="1.5" fill="#FFF8E8" />
      <circle cx="68" cy="38" r="1.5" fill="#FFF8E8" />
      <circle cx="50" cy="30" r="1.5" fill="#FFF8E8" />
    </svg>
  )
}

export function CuteRoll({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-20 w-20", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Roll base */}
      <ellipse
        cx="50"
        cy="60"
        rx="32"
        ry="22"
        fill="#FFF8E8"
        stroke="#222222"
        strokeWidth="3"
      />
      {/* Spiral */}
      <path
        d="M30 55 Q35 45 50 45 Q65 45 70 55 Q65 52 50 52 Q35 52 30 55"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32 62 Q40 55 50 55 Q60 55 68 62 Q60 58 50 58 Q40 58 32 62"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Face */}
      <circle cx="42" cy="58" r="2.5" fill="#222222" />
      <circle cx="58" cy="58" r="2.5" fill="#222222" />
      <path
        d="M45 66 Q50 70 55 66"
        fill="none"
        stroke="#222222"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CuteStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-12 w-12", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="50,15 61,38 85,38 67,54 73,78 50,64 27,78 33,54 15,38 39,38"
        fill="#fff3a3"
        stroke="#222222"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Face */}
      <circle cx="45" cy="48" r="2" fill="#222222" />
      <circle cx="55" cy="48" r="2" fill="#222222" />
      <path
        d="M47 54 Q50 57 53 54"
        fill="none"
        stroke="#222222"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
