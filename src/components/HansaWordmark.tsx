/**
 * HansaWordmark — sets the brand name in the venue's own letterform
 * register: spaced caps in Cormorant Garamond (the geometric serif we
 * already load), in copper. Used as a brand mark in Nav, the Mark
 * strip, and the Footer. Pairs with the EST · 1616 · MMXXV seal so the
 * mark reads as a stamped lock-up rather than a generic title set.
 */

import * as React from 'react';

export function HansaWordmark({
  size = 28,
  tone = 'copper',
  className,
}: {
  size?: number;
  tone?: 'copper' | 'ivory' | 'deep';
  className?: string;
}) {
  const color =
    tone === 'ivory' ? 'var(--ivory)' :
    tone === 'deep'  ? 'var(--deep)' :
                       'var(--copper)';
  return (
    <span
      className={`wordmark inline-block ${className ?? ''}`}
      style={{ fontSize: size, color, lineHeight: 1 }}
    >
      HANSA
    </span>
  );
}

export function HansaLockup({
  className,
  tone = 'copper',
}: {
  className?: string;
  tone?: 'copper' | 'ivory' | 'deep';
}) {
  const color =
    tone === 'ivory' ? 'var(--ivory)' :
    tone === 'deep'  ? 'var(--deep)' :
                       'var(--copper)';
  return (
    <div className={`flex flex-col items-center text-center ${className ?? ''}`}>
      <span className="wordmark" style={{ fontSize: 44, color, lineHeight: 1 }}>HANSA</span>
      <span
        className="mt-1 font-sans uppercase"
        style={{ fontSize: 9, letterSpacing: '0.42em', color, opacity: 0.7 }}
      >
        RIVER · HOUSE
      </span>
      <span
        className="mt-2 font-sans uppercase"
        style={{ fontSize: 8, letterSpacing: '0.36em', color, opacity: 0.55 }}
      >
        EST · 1616 · MMXXV
      </span>
    </div>
  );
}
