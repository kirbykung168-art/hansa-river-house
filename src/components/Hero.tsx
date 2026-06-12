'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BRAND, COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import SwanGlide from './SwanGlide';

/**
 * HERO — asymmetric riverfront layout.
 * Left 5 columns: the sunset-terrace photograph (silhouette against
 * the Chao Phraya at golden hour), half-faded behind the ivory wash,
 * with the swan-glide signature animation overlaid.
 * Right 7 columns: eyebrow, big Playfair title, body, gold CTAs.
 *
 * Photo choice — the sunset terrace is the most brand-coherent shot
 * Hansa has: water-glow, silhouette, "for your occasions, on the
 * river" register. The full-table press photo is warmer/more
 * chromatic and so lives in Story instead, where it functions as
 * Plate I of an editorial dossier.
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
      {/* Caustics drift across the ivory backdrop */}
      <div className="absolute inset-0 caustics" aria-hidden />

      {/* Background photograph — left half of viewport on lg, full-bleed
          on mobile. Heavy ivory wash so the type still reads. */}
      <div className="absolute inset-0 lg:right-[40%] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTOS.sunset}
          srcSet={`${PHOTOS.sunset} 900w, ${PHOTOS.sunsetWide} 1600w`}
          sizes="(max-width: 1024px) 100vw, 60vw"
          alt="A guest seated on a bamboo stool on the Hansa River House terrace at golden hour, facing the Chao Phraya as the sky turns gold and a long-tail boat slides past."
          loading="eager"
          decoding="async"
          /* object-position 70%/35%: shift the focal point of the
             photograph rightward and upward so the river, sunset
             glow and far bank fill the visible left third of the
             hero — not the foreground bag and figure. This was
             the audit miss: previous 55%/45% cropped to the tote
             bag rather than to the brand promise (the river). */
          className="absolute inset-0 w-full h-full object-cover object-[70%_35%]"
          style={{ filter: 'saturate(0.7) contrast(0.96) brightness(1.05)' }}
        />
        {/* Heavy ivory veil — slightly cooler now that the photo is sunset-warm */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(247,242,232,0.88) 0%, rgba(247,242,232,0.74) 50%, rgba(247,242,232,0.95) 100%)',
          }}
        />
        {/* Soft gold caustic wash bottom-left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(700px 460px at 15% 80%, rgba(184,146,75,0.16) 0%, rgba(184,146,75,0) 70%)',
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
        {/* LEFT — small Sanskrit caption + horizon line */}
        <motion.div
          style={reduced ? undefined : { y: yLeft }}
          className="hidden lg:flex lg:col-span-5 relative h-full items-end pb-16"
        >
          <div className="w-full">
            <svg viewBox="0 0 600 220" className="w-full h-auto" aria-hidden>
              <defs>
                <linearGradient id="river-fade" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"  stopColor="var(--slate)"  stopOpacity="0" />
                  <stop offset="50%" stopColor="var(--slate)"  stopOpacity="0.55" />
                  <stop offset="100%" stopColor="var(--slate)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="120" x2="600" y2="120" stroke="url(#river-fade)" strokeWidth="0.7" />
              <line x1="0" y1="138" x2="600" y2="138" stroke="url(#river-fade)" strokeWidth="0.4" strokeDasharray="2 6" className="wake-line" />
              <line x1="0" y1="158" x2="600" y2="158" stroke="url(#river-fade)" strokeWidth="0.3" strokeDasharray="1 9" className="wake-line" />
              <text x="40" y="200" fontFamily="var(--font-cormorant), Cormorant Garamond, serif"
                fontStyle="italic" fontSize="18" fill="var(--slate-d)" opacity="0.65">
                {BRAND.meaning.en}
              </text>
            </svg>
          </div>
        </motion.div>

        {/* RIGHT — typographic stack */}
        <motion.div
          style={reduced ? undefined : { y: yRight }}
          className="lg:col-span-7 flex flex-col items-start lg:pl-6 lg:border-l border-[var(--rule-gold)] py-16 lg:py-0"
        >
          <p className="eyebrow" lang={locale}>
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
              className="btn btn-gold celebrate"
              lang={locale}
            >
              {COPY.hero.ctaReserve[locale]} <span className="btn-arrow">→</span>
            </a>
            <a
              href="#occasions"
              className="font-sans text-[11.5px] uppercase tracking-[0.32em] text-deep/80 hover:text-gold transition-colors duration-700 ease-glide underline underline-offset-[10px] decoration-gold/45 decoration-[0.5px] pt-3 sm:pt-0"
              lang={locale}
            >
              {COPY.hero.ctaOccasion[locale]}
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/*
        Scroll cue removed — on shorter viewports it collided with the
        primary CTA. The dual CTAs (Reserve a table + Enquire ·
        occasions) make the affordance clear on their own; an extra
        "drift down" pulse beneath them just stacks signals.
      */}
    </section>
  );
}
