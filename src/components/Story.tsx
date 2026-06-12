'use client';

import { COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * STORY — cream section, editorial drop-cap, framed pull-quote on the
 * Passport & Stamps press line. Asymmetric grid: type fills the left
 * 7/12, a quiet riverfront caption sits in the right 5/12.
 */
export default function Story() {
  const { locale } = useLocale();

  return (
    <section id="story" className="relative bg-cream text-deep py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 caustics" aria-hidden />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow">{COPY.story.eyebrow[locale]}</p>
          <h2
            className="display mt-5 leading-[1.04]"
            style={{ fontSize: 'clamp(36px, 5.6vw, 88px)' }}
            lang={locale}
          >
            {COPY.story.title[locale]}
          </h2>
          <span className="gold-rule wide mt-9 inline-block" />
          <p
            className="font-sans text-[15.5px] leading-[1.95] text-deep/80 mt-10 max-w-[64ch] dropcap"
            lang={locale}
          >
            {COPY.story.body[locale]}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-5 lg:pl-6 lg:border-l border-[var(--rule-gold)] lg:mt-24">
          <blockquote
            className="display-italic text-deep leading-[1.3] max-w-[28ch]"
            style={{ fontSize: 'clamp(22px, 2.8vw, 34px)' }}
            lang={locale}
          >
            <span className="text-gold mr-1">&ldquo;</span>
            {COPY.story.pullQuote[locale].replace(/[“”"]/g, '')}
            <span className="text-gold ml-1">&rdquo;</span>
          </blockquote>
          <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold mt-6">
            — {COPY.story.pullAttribution}
          </p>
          {/* Decorative gold corner */}
          <div className="mt-12 flex items-center gap-4">
            <span className="block w-12 h-px bg-gold" />
            <span className="block w-1.5 h-1.5 bg-gold rotate-45" />
            <span className="block w-3 h-px bg-gold/55" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
