'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BRAND, COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import SwanGlide from './SwanGlide';
import { HansaWordmark } from './HansaWordmark';

/**
 * HERO — asymmetric riverfront layout.
 *
 * Photograph: Myym.Tcn's June 2025 golden-hour shot — passion-fruit drink
 * sitting on the coral railing with the black HANSA cup-sticker visible,
 * river behind, sun bright through cloud. Audit found this is the single
 * most on-brand frame the venue has: it shows the coral railing, the
 * HANSA wordmark on their own packaging, and the Chao Phraya, all in one
 * composition. The old Nov-2025 silhouette stays inside Story.
 *
 * Type: an asymmetric 5/7 split with a tiny HANSA mark + horizon-line
 * SVG on the left and the full eyebrow/title/body/CTAs on the right.
 */
export default function Hero() {
  const { locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const yLeft   = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);
  const yRight  = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.35]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-ivory pt-[80px]"
    >
      <div className="absolute inset-0 caustics" aria-hidden />

      {/* Background photograph — left half on desktop, full-bleed on mobile.
          object-position 60%/40% keeps the coral railing + the HANSA-stickered
          glass + the sun visible after the heavy ivory wash. */}
      <div className="absolute inset-0 lg:right-[40%] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTOS.sunsetDrink}
          srcSet={`${PHOTOS.sunsetDrink} 1200w, ${PHOTOS.sunsetDrinkWide} 2000w`}
          sizes="(max-width: 1024px) 100vw, 60vw"
          alt="A passion-fruit drink with the HANSA cup sticker resting on the coral terrace railing at Hansa River House, the Chao Phraya golden behind it and the sun bright through cloud."
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-[55%_42%]"
          style={{ filter: 'saturate(0.78) contrast(0.98) brightness(1.02)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(247,242,232,0.86) 0%, rgba(247,242,232,0.68) 50%, rgba(247,242,232,0.94) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(700px 460px at 18% 80%, rgba(197,104,61,0.18) 0%, rgba(197,104,61,0) 70%)',
          }}
        />
      </div>

      {/* Signature swan glide */}
      <div className="absolute top-[14%] left-0 right-0 pointer-events-none" aria-hidden>
        <SwanGlide />
      </div>

      <motion.div
        style={reduced ? undefined : { opacity }}
        className="relative z-10 mx-auto max-w-[1480px] px-6 lg:px-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100svh-80px)]"
      >
        {/* LEFT — wordmark + horizon line */}
        <motion.div
          style={reduced ? undefined : { y: yLeft }}
          className="hidden lg:flex lg:col-span-5 relative h-full items-end pb-16"
        >
          <div className="w-full">
            <div className="mb-8 flex items-baseline gap-5">
              <HansaWordmark size={40} tone="copper" />
              <span className="font-sans text-[10px] uppercase tracking-[0.42em] text-deep/55">
                RIVER · HOUSE
              </span>
            </div>
            <svg viewBox="0 0 600 220" className="w-full h-auto" aria-hidden>
              <defs>
                <linearGradient id="river-fade" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"  stopColor="var(--slate)"  stopOpacity="0" />
                  <stop offset="50%" stopColor="var(--slate)"  stopOpacity="0.55" />
                  <stop offset="100%" stopColor="var(--slate)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="100" x2="600" y2="100" stroke="var(--coral)" strokeWidth="0.9" opacity="0.55" />
              <line x1="0" y1="120" x2="600" y2="120" stroke="url(#river-fade)" strokeWidth="0.6" />
              <line x1="0" y1="138" x2="600" y2="138" stroke="url(#river-fade)" strokeWidth="0.4" strokeDasharray="2 6" className="wake-line" />
              <line x1="0" y1="158" x2="600" y2="158" stroke="url(#river-fade)" strokeWidth="0.3" strokeDasharray="1 9" className="wake-line" />
              <text x="40" y="200" fontFamily="var(--font-cormorant), Cormorant Garamond, serif"
                fontStyle="italic" fontSize="18" fill="var(--slate-d)" opacity="0.7">
                {BRAND.meaning.en}
              </text>
            </svg>
          </div>
        </motion.div>

        {/* RIGHT — typographic stack */}
        <motion.div
          style={reduced ? undefined : { y: yRight }}
          className="lg:col-span-7 flex flex-col items-start lg:pl-6 lg:border-l border-[var(--rule-coral)] py-16 lg:py-0"
        >
          <p className="eyebrow coral" lang={locale}>
            {COPY.hero.eyebrow[locale]}
          </p>

          <h1
            className="display mt-6 text-deep max-w-[14ch] leading-[1.02]"
            style={{ fontSize: 'clamp(46px, 7.6vw, 124px)' }}
            lang={locale}
          >
            {COPY.hero.title[locale]}
          </h1>

          <p className="font-sans text-[15.5px] leading-[1.85] text-deep/80 max-w-xl mt-9" lang={locale}>
            {COPY.hero.body[locale]}
          </p>

          <div className="mt-11 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href="#reserve"
              className="btn btn-coral celebrate"
              lang={locale}
            >
              {COPY.hero.ctaReserve[locale]} <span className="btn-arrow">→</span>
            </a>
            <a
              href="#occasions"
              className="font-sans text-[11.5px] uppercase tracking-[0.32em] text-deep/80 hover:text-coral transition-colors duration-700 ease-glide underline underline-offset-[10px] decoration-coral/45 decoration-[0.5px]"
              lang={locale}
            >
              {COPY.hero.ctaOccasion[locale]} <span aria-hidden>↗</span>
            </a>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 hidden lg:flex items-center gap-4">
            <span className="block w-px h-10 bg-coral scroll-pulse origin-top" />
            <span className="font-sans text-[10px] uppercase tracking-[0.42em] text-deep/55" lang={locale}>
              {COPY.hero.scrollHint[locale]}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
