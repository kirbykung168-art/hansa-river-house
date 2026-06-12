'use client';

import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * RESERVE — single-column, centered, gold accent. Three actions:
 * LINE-style primary, call, IG DM. Walk-in policy underneath.
 */
export default function Reserve() {
  const { locale } = useLocale();
  return (
    <section id="reserve" className="relative bg-cream text-deep py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 caustics" aria-hidden />
      {/* Top decorative gold cross — celebratory accent */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-80" aria-hidden>
        <span className="block w-10 h-px bg-gold" />
        <span className="block w-1.5 h-1.5 bg-gold rotate-45" />
        <span className="block w-10 h-px bg-gold" />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="display leading-[1.04]" style={{ fontSize: 'clamp(38px, 5.4vw, 84px)' }} lang={locale}>
            {COPY.reserve.title[locale]}
          </h2>
          <p className="font-sans text-[13px] tracking-[0.32em] uppercase text-gold mt-7" lang={locale}>
            {COPY.reserve.body[locale]}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={BRAND.linktreeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold celebrate"
              lang={locale}
            >
              {COPY.reserve.primary[locale]} <span className="btn-arrow">→</span>
            </a>
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="font-sans text-[12px] uppercase tracking-[0.32em] text-deep/80 hover:text-gold underline underline-offset-[10px] decoration-gold/55 decoration-[0.5px] transition-colors duration-700 ease-glide"
              lang={locale}
            >
              {COPY.reserve.secondary[locale]}
            </a>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[12px] uppercase tracking-[0.32em] text-deep/80 hover:text-gold underline underline-offset-[10px] decoration-gold/55 decoration-[0.5px] transition-colors duration-700 ease-glide"
              lang={locale}
            >
              {COPY.reserve.dm[locale]}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="font-sans text-[11.5px] tracking-[0.28em] uppercase text-deep/55 mt-12" lang={locale}>
            {COPY.reserve.policy[locale]}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
