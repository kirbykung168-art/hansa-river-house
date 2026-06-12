'use client';

import { useReducedMotion } from 'framer-motion';

/**
 * The signature animation. A single-line swan silhouette glides
 * across the upper portion of the hero, leaving a trailing wake of
 * three dashed slate ripple lines that pulse behind it.
 *
 * The path uses Cormorant-italic feel — long curved neck, compact body,
 * just legible enough to read as a swan at thumbnail size.
 *
 * On reduced-motion the swan freezes at its arrival point so the
 * silhouette still anchors the layout but nothing animates.
 */
export default function SwanGlide() {
  const reduced = useReducedMotion();

  return (
    <svg
      viewBox="0 0 1200 220"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-auto"
      aria-hidden
    >
      <defs>
        <linearGradient id="wake-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="var(--slate)" stopOpacity="0" />
          <stop offset="35%" stopColor="var(--slate)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--slate)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Wake ripple lines — three slow dashed lines that pulse */}
      <g stroke="url(#wake-grad)" fill="none">
        <line x1="0" y1="120" x2="1200" y2="120" strokeWidth="0.7" className="wake-line" />
        <line x1="0" y1="138" x2="1200" y2="138" strokeWidth="0.5"
          strokeDasharray="2 7" className="wake-line"
          style={{ animationDelay: '0.6s' }} />
        <line x1="0" y1="156" x2="1200" y2="156" strokeWidth="0.4"
          strokeDasharray="1 9" className="wake-line"
          style={{ animationDelay: '1.2s' }} />
      </g>

      {/* The swan glides left → right along the central horizon line */}
      <g
        className={reduced ? '' : 'swan-glide'}
        style={{ transformOrigin: '0 100px' }}
      >
        <Swan />
      </g>
    </svg>
  );
}

function Swan() {
  return (
    <g transform="translate(0, 60)">
      <path
        d="M 8 60
           C 10 48, 22 42, 38 44
           C 50 45, 58 50, 66 54
           C 74 58, 82 58, 92 54
           C 86 60, 70 64, 56 62
           C 44 60, 32 60, 22 64
           C 16 66, 10 64, 8 60 Z"
        fill="var(--ivory)"
        stroke="var(--gold)"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      {/* Long curved neck */}
      <path
        d="M 78 50
           C 80 38, 84 30, 90 26
           C 92 25, 94 26, 94 28
           C 92 30, 88 36, 86 44"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Beak — small triangle */}
      <path d="M 94 28 L 98 30 L 94 32 Z" fill="var(--gold)" />
      {/* Eye */}
      <circle cx="91" cy="30" r="0.7" fill="var(--deep)" />
      {/* Tiny wake droplets behind the tail */}
      <circle cx="2"  cy="64" r="0.7" fill="var(--slate)" opacity="0.7" />
      <circle cx="-6" cy="62" r="0.5" fill="var(--slate)" opacity="0.4" />
    </g>
  );
}
