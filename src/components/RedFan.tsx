/**
 * RedFan — section divider motif borrowed from the venue's own brand-
 * wall photographs. Hansa decorates its raw-concrete interior with red
 * and red-striped paper fans (a Chinese-Songwat heritage cue for the
 * neighbourhood). Wiring that motif into the page as a recurring
 * divider lands a distinctive moment that no other riverside template
 * is using — and it specifically reads as THIS venue.
 *
 * Two variants are exported:
 *   - <RedFan />     — a solid vermillion pleated fan
 *   - <RedFanStripe /> — the red+ivory striped variant from the wordmark wall
 *
 * The pair is composed by <FanRule /> as a horizontal section break with
 * a hairline rule passing through.
 */

import * as React from 'react';

export function RedFan({ className, spin = false, size = 88 }: {
  className?: string;
  spin?: boolean;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`${spin ? 'fan-spin' : ''} ${className ?? ''}`}
      aria-hidden
    >
      <defs>
        <radialGradient id="fan-grad" cx="50%" cy="100%" r="100%">
          <stop offset="0%" stopColor="#A8281E" />
          <stop offset="55%" stopColor="var(--vermillion)" />
          <stop offset="100%" stopColor="#D85A4A" />
        </radialGradient>
      </defs>
      {/* 11 pleated petals from a single pivot */}
      {Array.from({ length: 11 }).map((_, i) => {
        const angle = -90 + i * 18;
        return (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
            <path
              d="M 50 50 L 44 4 L 56 4 Z"
              fill="url(#fan-grad)"
              stroke="rgba(0,0,0,0.18)"
              strokeWidth="0.4"
            />
          </g>
        );
      })}
      {/* centre hub */}
      <circle cx="50" cy="50" r="4" fill="#7A1A14" />
      <circle cx="50" cy="50" r="1.4" fill="var(--gold-l)" />
    </svg>
  );
}

export function RedFanStripe({ className, spin = false, size = 88 }: {
  className?: string;
  spin?: boolean;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`${spin ? 'fan-spin-rev' : ''} ${className ?? ''}`}
      aria-hidden
    >
      {/* alternating vermillion + ivory pleated petals */}
      {Array.from({ length: 11 }).map((_, i) => {
        const angle = -90 + i * 18;
        const fill = i % 2 === 0 ? 'var(--vermillion)' : 'var(--ivory)';
        return (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
            <path
              d="M 50 50 L 44 4 L 56 4 Z"
              fill={fill}
              stroke="rgba(122, 26, 20, 0.55)"
              strokeWidth="0.5"
            />
          </g>
        );
      })}
      <circle cx="50" cy="50" r="4" fill="#7A1A14" />
      <circle cx="50" cy="50" r="1.4" fill="var(--gold-l)" />
    </svg>
  );
}

/**
 * FanRule — full-width section divider. A hairline gold rule with a
 * triplet of red paper fans hung at the centre. Used between major
 * editorial chapters so every chapter break is distinctly Hansa.
 */
export function FanRule({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center gap-5 my-12 lg:my-20 ${className ?? ''}`} aria-hidden>
      <span className="flex-1 max-w-[200px] lg:max-w-[300px] h-px bg-gold opacity-40" />
      <RedFan size={32} />
      <RedFanStripe size={42} spin />
      <RedFan size={32} />
      <span className="flex-1 max-w-[200px] lg:max-w-[300px] h-px bg-gold opacity-40" />
    </div>
  );
}
