'use client';

import { COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * STORY — cream section. Sunset terrace photograph on the right
 * (vertical 4:5 crop, gold corner brackets), pull-quote + drop-cap
 * body on the left. The pull-quote is the verbatim Passport & Stamps
 * line about long-tail boats and a fresh coconut.
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

          <blockquote
            className="display-italic text-deep leading-[1.3] max-w-[34ch] mt-12 border-l-2 border-gold pl-6"
            style={{ fontSize: 'clamp(22px, 2.6vw, 30px)' }}
            lang={locale}
          >
            <span className="text-gold mr-1">&ldquo;</span>
            {COPY.story.pullQuote[locale].replace(/[“”"]/g, '')}
            <span className="text-gold ml-1">&rdquo;</span>
          </blockquote>
          <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold mt-5 pl-6">
            — {COPY.story.pullAttribution}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-5 lg:mt-16">
          <figure className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.sunset}
                srcSet={`${PHOTOS.sunset} 900w`}
                sizes="(max-width: 1024px) 100vw, 40vw"
                alt="A guest seated on a bamboo stool on the Hansa River House terrace at sunset, facing the Chao Phraya River as the sky turns gold."
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-[50%_50%]"
              />
              {/* Brass corner brackets */}
              <span aria-hidden className="absolute pointer-events-none" style={{ top: 12, left: 12, width: 26, height: 26, borderTop: '1.2px solid var(--gold)', borderLeft: '1.2px solid var(--gold)' }} />
              <span aria-hidden className="absolute pointer-events-none" style={{ bottom: 12, right: 12, width: 26, height: 26, borderBottom: '1.2px solid var(--gold)', borderRight: '1.2px solid var(--gold)' }} />
              {/* Soft warm vignette */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, rgba(30,42,48,0) 60%, rgba(30,42,48,0.30) 100%)' }} />
            </div>
            <figcaption className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-deep/55 mt-5">
              Plate I · the river at sunset
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
