'use client';

import { COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * RIVER — quiet typographic interlude. Wide sunset image as a faint
 * silhouette behind the headline. The signature swan-glide gesture
 * carries the bottom — gold-outlined ivory swan tracing a wake of
 * dashed slate ripple lines across the page. This is the moment the
 * brief calls for ("swan-glide signature moment"), so the swan is
 * drawn at signature scale — ~2.4× the hero mark — and the glide
 * animation is slowed to 48s so the bird dwells at centre frame
 * long enough to be seen.
 */
export default function River() {
  const { locale } = useLocale();
  return (
    <section id="river" className="relative bg-ivory text-deep py-28 lg:py-36 overflow-hidden border-y border-[var(--rule)]">
      <div className="absolute inset-0 caustics" aria-hidden />

      {/* Faint sunset photograph behind the text */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTOS.sunsetWide}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-[50%_60%]"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(247,242,232,0.94) 0%, rgba(247,242,232,0.82) 50%, rgba(247,242,232,0.96) 100%)' }} />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 lg:px-10 text-center">
        <Reveal>
          <p className="eyebrow">{COPY.river.eyebrow[locale]}</p>
          <h2
            className="display-italic mt-5 leading-[1.1] text-deep"
            style={{ fontSize: 'clamp(38px, 6vw, 96px)' }}
            lang={locale}
          >
            {COPY.river.title[locale]}
          </h2>
          <span className="gold-rule wide mx-auto mt-10 inline-block" />
          <p
            className="font-sans text-[15.5px] leading-[1.95] text-deep/80 max-w-[60ch] mt-9 mx-auto"
            lang={locale}
          >
            {COPY.river.body[locale]}
          </p>
        </Reveal>
      </div>

      {/*
        Signature swan-glide. Swan body coordinates are inlined at
        ~2.4× the hero swan's path so the gesture lands at brand
        scale without relying on a nested SVG transform (which
        wasn't composing reliably with the CSS animation on the
        parent g). Animation duration is overridden to 48s so the
        swan crosses the viewport slowly — the bird is the brand
        mark, it should be allowed to dwell.
      */}
      <Reveal delay={0.2}>
        <div className="relative mt-12 lg:mt-16 max-w-[1280px] mx-auto px-4 lg:px-8">
          <svg
            viewBox="0 0 1200 280"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-auto"
            aria-hidden
          >
            <defs>
              <linearGradient id="river-wake-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="var(--slate)" stopOpacity="0" />
                <stop offset="35%"  stopColor="var(--slate)" stopOpacity="0.55" />
                <stop offset="65%"  stopColor="var(--slate)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="var(--slate)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Wake ripple lines — pulse dashed slate, full width */}
            <g stroke="url(#river-wake-grad)" fill="none">
              <line x1="0" y1="160" x2="1200" y2="160" strokeWidth="1.1" className="wake-line" />
              <line x1="0" y1="190" x2="1200" y2="190" strokeWidth="0.8"
                strokeDasharray="3 10" className="wake-line"
                style={{ animationDelay: '0.7s' }} />
              <line x1="0" y1="218" x2="1200" y2="218" strokeWidth="0.6"
                strokeDasharray="1 13" className="wake-line"
                style={{ animationDelay: '1.4s' }} />
            </g>

            {/* The signature swan. Path coordinates have been
                pre-scaled (rather than wrapping in a transform g)
                because a nested transform on the inner g did not
                compose with the CSS animation on the parent g —
                bounding rect kept reporting the unscaled size.
                Inlining the larger coordinates is the bulletproof
                fix. */}
            <g
              className="swan-glide"
              style={{ animationDuration: '48s' }}
            >
              <BigSwan />
            </g>
          </svg>
        </div>
      </Reveal>

      {/* Address mark — closes the section instead of trailing empty
          ivory. Same eyebrow register as the rest of the page so it
          sits as quiet closing typography, not as a content block. */}
      <Reveal delay={0.35}>
        <p className="font-sans text-[10.5px] uppercase tracking-[0.42em] text-deep/45 text-center mt-10">
          <span className="text-gold mr-3">&#9670;</span>
          {locale === 'en' ? '1616 Song Wat · the Chao Phraya · Bangkok' : '1616 ซองวัด · เจ้าพระยา · กรุงเทพฯ'}
          <span className="text-gold ml-3">&#9670;</span>
        </p>
      </Reveal>
    </section>
  );
}

/**
 * BigSwan — signature scale. The hero SwanGlide body path runs from
 * roughly (8, 44) to (98, 64). This is the same silhouette with
 * every coordinate multiplied by 2.4 and translated to sit centred
 * vertically on the wake line at y ~ 175.
 */
function BigSwan() {
  return (
    <g>
      {/* Swan body — ivory fill, confident gold contour at 1.6 stroke
          so it reads at signature scale without thinning out */}
      <path
        d="M 19 148
           C 24 119, 53 105, 91 110
           C 120 113, 139 126, 158 134
           C 178 142, 197 142, 221 132
           C 207 146, 168 156, 134 152
           C 106 148, 77 148, 53 158
           C 38 164, 24 158, 19 148 Z"
        fill="var(--ivory)"
        stroke="var(--gold)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Long Cormorant-italic neck */}
      <path
        d="M 187 123
           C 192 94, 202 75, 216 65
           C 220 63, 224 65, 224 70
           C 220 75, 211 89, 206 110"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Beak — small triangle */}
      <path d="M 226 70 L 235 75 L 226 80 Z" fill="var(--gold)" />
      {/* Eye */}
      <circle cx="218" cy="74" r="1.6" fill="var(--deep)" />
      {/* Wake droplets behind the tail */}
      <circle cx="5"    cy="158" r="2"   fill="var(--slate)" opacity="0.7" />
      <circle cx="-12"  cy="153" r="1.3" fill="var(--slate)" opacity="0.4" />
    </g>
  );
}
