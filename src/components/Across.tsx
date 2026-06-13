'use client';

/**
 * ACROSS — the across-the-water cartographic moment. Hansa's defining
 * view is the Chinese pavilion + multi-tier pagoda directly across the
 * Chao Phraya. This section turns that into a feature: full-bleed
 * pagoda photo as background, with a fine-line SVG overlay tracing the
 * river current and pinning four landmarks at their actual distances.
 *
 * The map-trace gesture is hand-drawn — not a real map embed — so it
 * reads as cartographic ornament, not as Google Maps. The point is to
 * say "this is what you're looking at," with the precision of an
 * editorial annotation rather than a tourist diagram.
 */

import { COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

export default function Across() {
  const { locale } = useLocale();
  const a = COPY.across;
  return (
    <section
      id="across"
      className="relative bg-deep text-ivory py-28 lg:py-40 overflow-hidden"
    >
      {/* Full-bleed pagoda view */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTOS.pagodaView}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-[55%_45%]"
          style={{ filter: 'saturate(0.7) contrast(1.02) brightness(0.78)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(30,42,48,0.55) 0%, rgba(30,42,48,0.35) 40%, rgba(30,42,48,0.78) 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
        {/* LEFT — heading + body */}
        <Reveal>
          <p className="eyebrow" style={{ color: 'var(--coral-l)' }}>{a.eyebrow[locale]}</p>
          <h2
            className="display mt-5 leading-[1.04] text-ivory"
            style={{ fontSize: 'clamp(36px, 5.6vw, 92px)' }}
            lang={locale}
          >
            {a.title[locale]}
          </h2>
          <span className="block w-32 h-px bg-coral-l mt-9 opacity-70" />
          <p
            className="font-sans text-[15.5px] leading-[1.95] text-ivory/85 mt-9 max-w-[60ch]"
            lang={locale}
          >
            {a.body[locale]}
          </p>
        </Reveal>

        {/* RIGHT — cartographic SVG with distance markers */}
        <Reveal delay={0.2}>
          <div className="border border-coral-l/40 bg-deep/45 backdrop-blur-sm p-6 lg:p-9">
            <p className="font-sans text-[10px] uppercase tracking-[0.42em] text-ivory/55 border-b border-ivory/15 pb-3 mb-6">
              {locale === 'en' ? 'On the far bank' : 'ฝั่งตรงข้าม'}
            </p>

            <svg viewBox="0 0 460 220" className="w-full h-auto block" aria-hidden>
              {/* The Chao Phraya current — a sweeping curve with dashed wake lines */}
              <defs>
                <linearGradient id="across-river" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"   stopColor="var(--slate)" stopOpacity="0" />
                  <stop offset="40%"  stopColor="var(--slate)" stopOpacity="0.6" />
                  <stop offset="60%"  stopColor="var(--slate)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--slate)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 5 145 Q 120 132, 230 138 T 455 145"
                stroke="url(#across-river)"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M 5 162 Q 120 150, 230 156 T 455 162"
                stroke="url(#across-river)"
                strokeWidth="0.6"
                strokeDasharray="2 7"
                fill="none"
                className="wake-line"
              />

              {/* Our bank — bottom — coral railing line */}
              <line x1="0" y1="200" x2="460" y2="200" stroke="var(--coral)" strokeWidth="1.2" opacity="0.8" />
              <text x="6" y="218" fontFamily="var(--font-cormorant), Cormorant Garamond, serif"
                fontStyle="italic" fontSize="11" fill="var(--coral-l)" opacity="0.85">
                Hansa terrace · this side
              </text>

              {/* Far bank — top — silhouette of pagoda + pavilion */}
              {/* Pagoda — seven-tier multi-eave silhouette at ~position x=305 */}
              <g fill="var(--ivory)" opacity="0.92">
                {/* base */}
                <rect x="298" y="80" width="14" height="20" />
                {/* tiers ascending */}
                <polygon points="287,80 323,80 313,72 297,72" />
                <rect x="299" y="60" width="12" height="12" />
                <polygon points="289,60 321,60 312,53 298,53" />
                <rect x="300" y="44" width="10" height="9" />
                <polygon points="291,44 319,44 311,37 299,37" />
                <rect x="301" y="30" width="8" height="7" />
                <polygon points="293,30 317,30 310,24 300,24" />
                <rect x="302" y="18" width="6" height="6" />
                <polygon points="295,18 315,18 309,13 301,13" />
                {/* spire */}
                <line x1="305" y1="13" x2="305" y2="2" stroke="var(--ivory)" strokeWidth="1" />
                <circle cx="305" cy="3" r="1.3" />
              </g>

              {/* Chinese pavilion silhouette at ~position x=120 */}
              <g fill="var(--ivory)" opacity="0.88">
                <polygon points="100,98 152,98 144,80 108,80" />
                <rect x="112" y="98" width="6" height="14" />
                <rect x="122" y="98" width="8" height="14" />
                <rect x="134" y="98" width="6" height="14" />
                <line x1="126" y1="80" x2="126" y2="72" stroke="var(--ivory)" strokeWidth="1" />
                <circle cx="126" cy="72" r="1.2" />
              </g>

              {/* condo towers fading to right */}
              <g fill="var(--ivory)" opacity="0.40">
                <rect x="370" y="55" width="14" height="55" />
                <rect x="390" y="42" width="18" height="68" />
                <rect x="415" y="60" width="12" height="50" />
                <rect x="435" y="48" width="14" height="62" />
              </g>

              {/* tree silhouette far left */}
              <g fill="var(--seagreen)" opacity="0.7">
                <ellipse cx="40" cy="100" rx="30" ry="14" />
                <ellipse cx="65" cy="92" rx="22" ry="10" />
              </g>

              {/* pinpoints */}
              <g>
                <circle cx="126" cy="112" r="2.4" fill="var(--coral)" />
                <circle cx="305" cy="100" r="2.4" fill="var(--coral)" />
                <circle cx="395" cy="110" r="2" fill="var(--gold-l)" />
                <circle cx="455" cy="195" r="2" fill="var(--gold-l)" />
              </g>
            </svg>

            {/* Distance markers */}
            <ul className="mt-7 space-y-3">
              {a.markers.map((m, i) => (
                <li key={i} className="grid grid-cols-[12px_1fr] items-center gap-4 border-b border-ivory/12 pb-3 last:border-0">
                  <span
                    aria-hidden
                    className="block w-2 h-2 rounded-full"
                    style={{
                      background: i < 2 ? 'var(--coral)' : 'var(--gold-l)',
                    }}
                  />
                  <p
                    className="font-sans text-[12px] uppercase tracking-[0.32em] text-ivory/85"
                    lang={locale}
                  >
                    {m[locale]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
