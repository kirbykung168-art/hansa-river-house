'use client';

import { COPY, BRAND } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * OCCASIONS — the high-value revenue section. Slate-blue background
 * (river surface "breathing"), warm-gold celebration accents, an
 * enquire-by-email CTA that pre-fills the body.
 */
export default function Occasions() {
  const { locale } = useLocale();
  const o = COPY.occasions;
  const subject = encodeURIComponent('Hansa River House · occasion enquiry');
  const body = encodeURIComponent(o.emailBody[locale]);
  const mailto = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;

  return (
    <section id="occasions" className="relative text-ivory py-28 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #3F5560 0%, #1E2A30 100%)' }}>
      {/* River surface breathing */}
      <div className="absolute inset-0 river-breathe pointer-events-none" aria-hidden />
      {/* A faint gold leaf curl at top-left */}
      <svg viewBox="0 0 240 160" className="absolute top-0 left-0 w-[260px] h-auto opacity-25" aria-hidden>
        <path d="M 20 80 C 60 30, 140 30, 200 70 C 180 90, 130 95, 90 90 C 65 87, 40 92, 20 80 Z"
          fill="none" stroke="var(--gold)" strokeWidth="0.8" />
      </svg>

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
        <Reveal>
          <p className="eyebrow text-gold-l">{o.eyebrow[locale]}</p>
          <h2
            className="display leading-[1.04] mt-5"
            style={{ fontSize: 'clamp(36px, 5.4vw, 88px)' }}
            lang={locale}
          >
            {o.title[locale]}
          </h2>
          <span className="block w-32 h-px bg-gold-l mt-9 opacity-70" />
          <p
            className="font-sans text-[15.5px] leading-[1.95] text-ivory/85 mt-9 max-w-[58ch]"
            lang={locale}
          >
            {o.body[locale]}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="border border-gold-l/35 p-8 lg:p-10 bg-deep/30 backdrop-blur-sm">
            <p className="eyebrow text-gold-l border-b border-gold-l/30 pb-4 mb-7">
              {locale === 'en' ? 'Capacity' : 'จำนวนที่นั่ง'}
            </p>
            <ul className="space-y-6">
              {o.capacities.map((c, i) => (
                <li key={i} className="grid grid-cols-[34px_1fr] gap-5 items-baseline border-b border-gold-l/20 pb-5 last:border-0">
                  <span className="display italic text-gold-l/85 text-lg tabular-nums" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="display text-[18px] leading-snug" lang={locale}>{c[locale]}</p>
                </li>
              ))}
            </ul>
            <a href={mailto} className="btn btn-gold celebrate mt-9" lang={locale}>
              {o.cta[locale]} <span className="btn-arrow">→</span>
            </a>
            <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-ivory/55 mt-6">
              {BRAND.email}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
