'use client';

import { COPY, BRAND, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';
import { RedFan } from './RedFan';

/**
 * OCCASIONS — slate-blue section with the upper-floor photo full-bleed
 * behind a dark wash. The capacity card on the right is restyled as a
 * "registry ledger" — numbered tier rows with hairline coral rules,
 * a ribbon at the top, and a single red-fan ornament tucked into the
 * corner instead of the previous floating leaf curl.
 */
export default function Occasions() {
  const { locale } = useLocale();
  const o = COPY.occasions;
  const subject = encodeURIComponent('Hansa River House · occasion enquiry');
  const body = encodeURIComponent(o.emailBody[locale]);
  const mailto = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;

  return (
    <section id="occasions" className="relative text-ivory py-28 lg:py-40 overflow-hidden">
      {/* Background photograph — upper floor with red fan chain */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTOS.upperFloor}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-[50%_50%]"
        />
        <div className="absolute inset-0"
          style={{
            background:
              'linear-gradient(110deg, rgba(30,42,48,0.92) 0%, rgba(63,85,96,0.86) 55%, rgba(30,42,48,0.92) 100%)',
          }} />
        <div className="absolute inset-0"
          style={{
            background: 'radial-gradient(900px 600px at 75% 30%, rgba(197,104,61,0.22) 0%, rgba(197,104,61,0) 60%)',
          }} />
      </div>
      <div className="absolute inset-0 river-breathe pointer-events-none" aria-hidden />

      {/* Red-fan corner ornaments */}
      <div className="absolute top-6 right-6 lg:top-10 lg:right-10 opacity-80" aria-hidden>
        <RedFan size={56} spin />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
        <Reveal>
          <p className="eyebrow" style={{ color: 'var(--coral-l)' }}>{o.eyebrow[locale]}</p>
          <h2
            className="display leading-[1.04] mt-5"
            style={{ fontSize: 'clamp(36px, 5.4vw, 88px)' }}
            lang={locale}
          >
            {o.title[locale]}
          </h2>
          <span className="block w-32 h-px bg-coral-l mt-9 opacity-70" />
          <p
            className="font-sans text-[15.5px] leading-[1.95] text-ivory/85 mt-9 max-w-[58ch]"
            lang={locale}
          >
            {o.body[locale]}
          </p>

          {/* CTA */}
          <a
            href={mailto}
            className="mt-11 inline-flex items-center gap-3 btn"
            style={{
              borderColor: 'var(--coral-l)',
              color: 'var(--ivory)',
              background: 'transparent',
            }}
            lang={locale}
          >
            {o.cta[locale]} <span className="btn-arrow">→</span>
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative border border-coral-l/35 p-8 lg:p-10 bg-deep/55 backdrop-blur-sm">
            {/* "ledger" head ribbon */}
            <div
              className="absolute -top-3 left-8 px-3 py-1 font-sans text-[9.5px] uppercase tracking-[0.42em] text-ivory"
              style={{ background: 'var(--coral)' }}
            >
              {locale === 'en' ? 'House registry' : 'สมุดเรือน'}
            </div>

            <p className="font-sans text-[10px] uppercase tracking-[0.36em] text-ivory/45 border-b border-ivory/15 pb-4 mb-7 mt-2">
              {locale === 'en' ? 'Capacity' : 'จำนวนที่นั่ง'}
            </p>
            <ul className="space-y-6">
              {o.capacities.map((c, i) => (
                <li key={i} className="grid grid-cols-[40px_1fr] gap-5 items-baseline border-b border-coral-l/25 pb-5 last:border-0">
                  <span className="display-italic text-coral-l/95 text-[28px] leading-none tabular-nums" aria-hidden>
                    {['I', 'II', 'III'][i]}
                  </span>
                  <p className="display text-[19px] leading-snug" lang={locale}>{c[locale]}</p>
                </li>
              ))}
            </ul>

            <p className="font-sans text-[11px] text-ivory/65 mt-8 leading-[1.85]" lang={locale}>
              {locale === 'en'
                ? 'Cake, candles, flowers and a slower kitchen pace on request. Enquiries by email — we reply with a held table and a sample running order.'
                : 'เค้ก เทียน ดอกไม้ และจังหวะครัวที่ช้าลงตามที่ขอ · สอบถามทางอีเมล เราจะตอบกลับพร้อมโต๊ะที่ถูกจองและลำดับครัวตัวอย่าง'}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
