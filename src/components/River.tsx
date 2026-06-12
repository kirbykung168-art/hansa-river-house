'use client';

import { COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';
import SwanGlide from './SwanGlide';

/**
 * RIVER — quiet typographic interlude. Wide sunset image as a faint
 * silhouette behind the headline. The signature swan-glide gesture
 * carries the bottom — gold-outlined ivory swan tracing a wake of
 * dashed slate ripple lines across the page. This is the moment the
 * brief calls for ("swan-glide signature moment") so it lives here
 * at brand-defining scale, not as the three tiny grey boats that
 * felt incidental in the earlier pass.
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
        Signature swan-glide. Closer to the body copy than the old
        boat strip (mt-10 vs mt-16) so the bottom of the section
        doesn't feel orphaned. SwanGlide draws its own wake — three
        pulsing dashed slate lines that fade in from both edges —
        plus the swan body itself (ivory fill, gold outline, long
        Cormorant-italic neck and a small triangle beak). One swan,
        held large; the gesture is meant to be the brand mark, not
        decoration.
      */}
      <Reveal delay={0.2}>
        <div className="relative mt-10 lg:mt-14 max-w-[1280px] mx-auto px-4 lg:px-8">
          <SwanGlide />
        </div>
      </Reveal>

      {/* Address mark — closes the section instead of trailing empty
          ivory. Same eyebrow register as the rest of the page so it
          sits as quiet closing typography, not as a content block. */}
      <Reveal delay={0.35}>
        <p className="font-sans text-[10.5px] uppercase tracking-[0.42em] text-deep/45 text-center mt-10">
          <span className="text-gold mr-3">◇</span>
          {locale === 'en' ? '1616 Song Wat · the Chao Phraya · Bangkok' : '1616 ซองวัด · เจ้าพระยา · กรุงเทพฯ'}
          <span className="text-gold ml-3">◇</span>
        </p>
      </Reveal>
    </section>
  );
}
