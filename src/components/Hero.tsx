'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import SwanGlide from './SwanGlide';

/**
 * HERO — asymmetric riverfront layout.
 * Type weighted right, an open river on the left where a swan glides
 * across leaving a rippling wake that settles into the wordmark.
 *
 * Layout structure:
 *   left  (5/12 on lg) — open ivory + signature swan glide animation
 *   right (7/12 on lg) — eyebrow · BIG Playfair title · body · CTAs
 *
 * Deliberate divergence from the other Song Wat builds in this series:
 *   - palette: ivory + gold + slate, NOT ink/vermillion/oxblood
 *   - hero layout: asymmetric typographic right, NOT centered
 *   - motion: glide easing, NOT snappy reveal
 */
export default function Hero() {
  const { locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const yLeft  = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const yRight = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-ivory pt-[80px]"
    >
      {/* Caustics drift across the ivory backdrop */}
      <div className="absolute inset-0 caustics" aria-hidden />

      {/* Signature moment: a swan glides across the upper third leaving a wake */}
      <div className="absolute top-[14%] left-0 right-0 pointer-events-none" aria-hidden>
        <SwanGlide />
      </div>

      <motion.div
        style={reduced ? undefined : { opacity }}
        className="relative z-10 mx-auto max-w-[1480px] px-6 lg:px-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100svh-80px)]"
      >
        {/* LEFT — open river */}
        <motion.div
          style={reduced ? undefined : { y: yLeft }}
          className="hidden lg:flex lg:col-span-5 relative h-full items-end pb-16"
        >
          {/* Subtle horizontal river line on the left to anchor the swan path */}
          <div className="w-full">
            <svg viewBox="0 0 600 220" className="w-full h-auto" aria-hidden>
              <defs>
                <linearGradient id="river-fade" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"  stopColor="var(--slate)"  stopOpacity="0" />
                  <stop offset="50%" stopColor="var(--slate)"  stopOpacity="0.55" />
                  <stop offset="100%" stopColor="var(--slate)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Two horizon lines — quiet, like a river surface */}
              <line x1="0" y1="120" x2="600" y2="120" stroke="url(#river-fade)" strokeWidth="0.7" />
              <line x1="0" y1="138" x2="600" y2="138" stroke="url(#river-fade)" strokeWidth="0.4" strokeDasharray="2 6" className="wake-line" />
              <line x1="0" y1="158" x2="600" y2="158" stroke="url(#river-fade)" strokeWidth="0.3" strokeDasharray="1 9" className="wake-line" />
              {/* Sanskrit hamsa caption */}
              <text x="40" y="200" fontFamily="var(--font-cormorant), Cormorant Garamond, serif"
                fontStyle="italic" fontSize="18" fill="var(--slate-d)" opacity="0.55">
                {BRAND.meaning.en}
              </text>
            </svg>
          </div>
        </motion.div>

        {/* RIGHT — type weighted right, asymmetric */}
        <motion.div
          style={reduced ? undefined : { y: yRight }}
          className="lg:col-span-7 flex flex-col items-start lg:pl-6 lg:border-l border-[var(--rule-gold)] py-16 lg:py-0"
        >
          <motion.p
            initial={reduced ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 0.84, 0.30, 1], delay: 0.2 }}
            className="eyebrow"
            lang={locale}
          >
            {COPY.hero.eyebrow[locale]}
          </motion.p>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 0.84, 0.30, 1], delay: 0.45 }}
            className="display mt-6 text-deep max-w-[14ch] leading-[1.02]"
            style={{ fontSize: 'clamp(46px, 7.6vw, 124px)' }}
            lang={locale}
          >
            {COPY.hero.title[locale]}
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 0.84, 0.30, 1], delay: 0.95 }}
            className="font-sans text-[15.5px] leading-[1.85] text-deep/75 max-w-xl mt-9"
            lang={locale}
          >
            {COPY.hero.body[locale]}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 0.84, 0.30, 1], delay: 1.2 }}
            className="mt-11 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <a
              href="#reserve"
              className="btn btn-gold celebrate"
              lang={locale}
            >
              {COPY.hero.ctaReserve[locale]} <span className="btn-arrow">→</span>
            </a>
            <a
              href="#occasions"
              className="font-sans text-[11.5px] uppercase tracking-[0.32em] text-deep/75 hover:text-gold transition-colors duration-700 ease-glide underline underline-offset-[10px] decoration-gold/45 decoration-[0.5px] pt-3 sm:pt-0"
              lang={locale}
            >
              {COPY.hero.ctaOccasion[locale]}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint — soft drift down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.4 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-deep/55 text-[10px] tracking-[0.42em] uppercase" lang={locale}>
          {COPY.hero.scrollHint[locale]}
        </span>
        <motion.span
          animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          className="block w-px h-10 bg-gold origin-top"
        />
      </motion.div>
    </section>
  );
}
