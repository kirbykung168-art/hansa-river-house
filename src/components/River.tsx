'use client';

import { COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * RIVER — quiet typographic interlude. Wide nightBoat photograph faint
 * behind the headline. The signature swan-glide gesture carries the
 * middle of the section. New on this pass: a pagoda+pavilion
 * silhouette pinned at the bottom of the river horizon, so the swan
 * passes "in front of" the across-the-river skyline rather than over a
 * blank wake.
 */
export default function River() {
  const { locale } = useLocale();
  return (
    <section id="river" className="relative bg-ivory text-deep py-28 lg:py-36 overflow-hidden border-y border-[var(--rule)]">
      <div className="absolute inset-0 caustics" aria-hidden />

      {/* Faint sunset behind the text */}
      <div className="absolute inset-0 opacity-22 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTOS.nightBoat}
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
          <span className="coral-rule wide mx-auto mt-10 inline-block" />
          <p
            className="font-sans text-[15.5px] leading-[1.95] text-deep/80 max-w-[60ch] mt-9 mx-auto"
            lang={locale}
          >
            {COPY.river.body[locale]}
          </p>
        </Reveal>
      </div>

      {/* Signature swan-glide. Bigger viewbox; pagoda + pavilion sit on
          the far bank near the bottom of the SVG so the swan crosses
          in front of them. */}
      <Reveal delay={0.2}>
        <div className="relative mt-12 lg:mt-16 max-w-[1280px] mx-auto px-4 lg:px-8">
          <svg
            viewBox="0 0 1200 320"
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

            {/* Far-bank pavilion + pagoda silhouettes — sit on the wake line */}
            <g fill="var(--slate-d)" opacity="0.35">
              {/* trees */}
              <ellipse cx="120" cy="218" rx="36" ry="11" />
              <ellipse cx="155" cy="212" rx="28" ry="10" />
              {/* Chinese pavilion */}
              <polygon points="285,222 345,222 335,206 295,206" />
              <rect x="298" y="222" width="6" height="14" />
              <rect x="308" y="222" width="10" height="14" />
              <rect x="322" y="222" width="6" height="14" />
              <line x1="315" y1="206" x2="315" y2="198" stroke="var(--slate-d)" strokeWidth="1" />
              <circle cx="315" cy="198" r="1.4" />
              {/* multi-tier pagoda */}
              <g transform="translate(560, 0)">
                <rect x="-12" y="220" width="24" height="14" />
                <polygon points="-20,220 20,220 12,210 -12,210" />
                <rect x="-10" y="200" width="20" height="10" />
                <polygon points="-18,200 18,200 10,192 -10,192" />
                <rect x="-8" y="184" width="16" height="8" />
                <polygon points="-16,184 16,184 8,176 -8,176" />
                <rect x="-7" y="170" width="14" height="6" />
                <polygon points="-14,170 14,170 7,162 -7,162" />
                <rect x="-6" y="156" width="12" height="6" />
                <polygon points="-12,156 12,156 6,148 -6,148" />
                <rect x="-5" y="142" width="10" height="6" />
                <polygon points="-10,142 10,142 4,134 -4,134" />
                <line x1="0" y1="134" x2="0" y2="116" stroke="var(--slate-d)" strokeWidth="1" />
                <circle cx="0" cy="116" r="1.6" />
              </g>
              {/* condo towers fading */}
              <g opacity="0.7">
                <rect x="780" y="170" width="14" height="68" />
                <rect x="804" y="155" width="18" height="83" />
                <rect x="830" y="180" width="12" height="58" />
                <rect x="852" y="165" width="14" height="73" />
              </g>
            </g>

            {/* Wake ripple lines */}
            <g stroke="url(#river-wake-grad)" fill="none">
              <line x1="0" y1="200" x2="1200" y2="200" strokeWidth="1.1" className="wake-line" />
              <line x1="0" y1="232" x2="1200" y2="232" strokeWidth="0.8"
                strokeDasharray="3 10" className="wake-line"
                style={{ animationDelay: '0.7s' }} />
              <line x1="0" y1="260" x2="1200" y2="260" strokeWidth="0.6"
                strokeDasharray="1 13" className="wake-line"
                style={{ animationDelay: '1.4s' }} />
            </g>

            {/* The signature swan */}
            <g
              className="swan-glide"
              style={{ animationDuration: '48s' }}
            >
              <BigSwan />
            </g>
          </svg>
        </div>
      </Reveal>

      <Reveal delay={0.35}>
        <p className="font-sans text-[10.5px] uppercase tracking-[0.42em] text-deep/45 text-center mt-10">
          <span className="text-coral mr-3">&#9670;</span>
          {locale === 'en' ? '1616 Song Wat · the Chao Phraya · Bangkok' : '1616 ทรงวาด · เจ้าพระยา · กรุงเทพฯ'}
          <span className="text-coral ml-3">&#9670;</span>
        </p>
      </Reveal>
    </section>
  );
}

function BigSwan() {
  return (
    <g>
      <path
        d="M 19 188
           C 24 159, 53 145, 91 150
           C 120 153, 139 166, 158 174
           C 178 182, 197 182, 221 172
           C 207 186, 168 196, 134 192
           C 106 188, 77 188, 53 198
           C 38 204, 24 198, 19 188 Z"
        fill="var(--ivory)"
        stroke="var(--coral)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M 187 163
           C 192 134, 202 115, 216 105
           C 220 103, 224 105, 224 110
           C 220 115, 211 129, 206 150"
        fill="none"
        stroke="var(--coral)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M 226 110 L 235 115 L 226 120 Z" fill="var(--copper)" />
      <circle cx="218" cy="114" r="1.6" fill="var(--deep)" />
      <circle cx="5"    cy="198" r="2"   fill="var(--slate)" opacity="0.7" />
      <circle cx="-12"  cy="193" r="1.3" fill="var(--slate)" opacity="0.4" />
    </g>
  );
}
