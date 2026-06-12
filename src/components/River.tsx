'use client';

import { COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * RIVER — quiet typographic interlude. Wide sunset image as a faint
 * silhouette behind the headline; three long-tail boats drifting along
 * the bottom horizon.
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

      {/* Long-tail boats drifting across the bottom */}
      <div className="relative mt-16 lg:mt-20 h-24">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 w-full h-full" aria-hidden>
          <defs>
            <linearGradient id="river-h" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"  stopColor="var(--slate)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--slate)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--slate)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="64" x2="1200" y2="64" stroke="url(#river-h)" strokeWidth="0.8" />
          <line x1="0" y1="80" x2="1200" y2="80" stroke="url(#river-h)" strokeWidth="0.5" strokeDasharray="2 7" className="wake-line" />
          <line x1="0" y1="96" x2="1200" y2="96" stroke="url(#river-h)" strokeWidth="0.4" strokeDasharray="1 9" className="wake-line" style={{ animationDelay: '0.8s' }} />
          <g className="swan-glide" style={{ animationDuration: '34s' }}>
            <LongTail />
          </g>
          <g className="swan-glide" style={{ animationDuration: '46s', animationDelay: '6s' }}>
            <g transform="translate(0, -8) scale(0.75)"><LongTail /></g>
          </g>
          <g className="swan-glide" style={{ animationDuration: '40s', animationDelay: '14s' }}>
            <g transform="translate(0, 6) scale(0.85)"><LongTail /></g>
          </g>
        </svg>
      </div>
    </section>
  );
}

function LongTail() {
  return (
    <g transform="translate(0, 60)">
      <path
        d="M 6 4
           C 18 0, 50 -2, 72 0
           C 76 1, 76 5, 72 6
           C 50 8, 18 8, 6 6 Z"
        fill="var(--slate-d)"
        opacity="0.78"
      />
      <line x1="0" y1="4" x2="-18" y2="-8" stroke="var(--slate-d)" strokeWidth="1.1" />
      <line x1="72" y1="3" x2="80" y2="-2" stroke="var(--gold)" strokeWidth="0.7" />
      <circle cx="80" cy="-2" r="0.7" fill="var(--gold)" />
    </g>
  );
}
