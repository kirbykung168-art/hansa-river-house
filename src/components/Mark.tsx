'use client';

/**
 * MARK — the brand-identity strip immediately under the hero. Replaces
 * the old "PressStrip" plain-text row with something that lands the
 * actual venue identity:
 *
 *   - Background: the wordmarkWall photograph (HANSA on raw textured
 *     concrete, flanked by red paper fans) at low opacity behind a
 *     deep wash so it reads as a paper-grain texture rather than
 *     competing for attention.
 *   - Foreground: the HansaLockup brand mark in copper with the seal
 *     EST · 1616 · MMXXV — the same composition pattern the venue
 *     uses on its own menu cover and concrete brand-wall.
 *   - Below the lockup: a single italic line from Top 25 Restaurants
 *     ("celebrate the moments that matter") and a press-logo row.
 *
 * This is the page's first audible structural statement after the
 * hero — and the first place a visitor sees the venue's actual
 * wordmark in their actual setting.
 */

import Image from 'next/image';
import { BRAND, COPY, PHOTOS, PRESS_LOGOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import { HansaLockup } from './HansaWordmark';
import { RedFan, RedFanStripe } from './RedFan';
import Reveal from './Reveal';

export default function Mark() {
  const { locale } = useLocale();
  return (
    <section
      id="mark"
      className="relative bg-deep text-ivory py-20 lg:py-32 overflow-hidden"
    >
      {/* Background: wordmark wall, heavily dimmed */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTOS.wordmarkWall}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'saturate(0.4) brightness(0.45) contrast(1.05)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(900px 600px at 50% 50%, rgba(30,42,48,0.4) 0%, rgba(30,42,48,0.92) 100%)',
          }}
        />
        {/* Soft copper caustic */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(700px 400px at 50% 30%, rgba(168,97,42,0.22) 0%, rgba(168,97,42,0) 65%)',
          }}
        />
      </div>

      {/* Decorative red paper fans top-left + bottom-right */}
      <div className="absolute top-6 left-6 lg:top-12 lg:left-12 opacity-70 pointer-events-none" aria-hidden>
        <RedFanStripe size={64} spin />
      </div>
      <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 opacity-70 pointer-events-none" aria-hidden>
        <RedFan size={56} spin />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
        <Reveal>
          <p className="eyebrow" style={{ color: 'var(--coral-l)' }} lang={locale}>
            {COPY.mark.eyebrow[locale]}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 lg:mt-10">
            <HansaLockup tone="ivory" />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p
            className="display-italic text-ivory/90 max-w-[44ch] mx-auto mt-12 leading-[1.3]"
            style={{ fontSize: 'clamp(20px, 2.2vw, 28px)' }}
            lang={locale}
          >
            &ldquo;{BRAND.pressLineHouse[locale]}&rdquo;
          </p>
          <p className="font-sans text-[10px] uppercase tracking-[0.42em] text-ivory/55 mt-4">
            — Top 25 Restaurants
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <span className="block w-px h-12 bg-coral-l/40 mx-auto mt-12" />
          <p
            className="font-sans text-[9.5px] uppercase tracking-[0.42em] text-ivory/45 mt-6 mb-6"
            lang={locale}
          >
            {locale === 'en' ? 'As seen in' : 'จากสื่อ'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {PRESS_LOGOS.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="display-italic text-ivory/75 hover:text-coral-l transition-colors duration-700 ease-glide"
                style={{ fontSize: 'clamp(15px, 1.5vw, 19px)' }}
              >
                {p.name}
                {i < PRESS_LOGOS.length - 1 && <span className="font-sans text-ivory/30 ml-7" aria-hidden>·</span>}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
