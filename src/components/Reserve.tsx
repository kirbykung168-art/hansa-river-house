'use client';

import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * RESERVE — the "reservation registry" feel. A card on cream paper with
 * ruled lines (ledger-paper utility), a copper border, a top ribbon
 * reading TONIGHT'S TABLE, and a four-column header row (Date / Guests
 * / Floor / Hour) above the three primary CTAs (Line, Phone, DM). The
 * card visually evokes a leather-bound reservation book without
 * pretending to be a real form.
 */
export default function Reserve() {
  const { locale } = useLocale();
  const r = COPY.reserve;
  return (
    <section id="reserve" className="relative bg-ivory text-deep py-28 lg:py-36 border-y border-[var(--rule)] overflow-hidden">
      <div className="absolute inset-0 caustics" aria-hidden />
      <div className="relative mx-auto max-w-[1080px] px-6 lg:px-10 text-center">
        <Reveal>
          <p className="eyebrow coral">{locale === 'en' ? 'Reserve' : 'จองโต๊ะ'}</p>
          <h2
            className="display mt-5 leading-[1.04]"
            style={{ fontSize: 'clamp(36px, 5.4vw, 84px)' }}
            lang={locale}
          >
            {r.title[locale]}
          </h2>
          <span className="coral-rule wide mx-auto mt-9 inline-block" />
          <p className="font-sans text-[14.5px] leading-[1.85] text-deep/75 mt-7 max-w-xl mx-auto" lang={locale}>
            {r.body[locale]}
          </p>
        </Reveal>

        {/* Ledger card */}
        <Reveal delay={0.18}>
          <div
            className="relative ledger-paper border border-copper/45 mt-14 px-7 py-10 lg:px-14 lg:py-12 text-left shadow-[0_30px_70px_-30px_rgba(168,97,42,0.5)]"
          >
            {/* Ribbon */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 font-sans text-[10px] uppercase tracking-[0.42em] text-ivory"
              style={{ background: 'var(--copper)' }}
            >
              {r.ledger.title[locale]}
            </div>

            {/* Ledger header row — Date / Guests / Floor / Hour */}
            <div className="grid grid-cols-4 gap-3 pt-4 pb-3 border-b border-copper/30 mb-7">
              {r.ledger.headers[locale].map((h, i) => (
                <p key={i} className="font-sans text-[9.5px] uppercase tracking-[0.42em] text-copper text-center">{h}</p>
              ))}
            </div>

            {/* Three sample ledger rows — visual treatment only */}
            <div className="space-y-7 mb-10">
              {[
                ['Sat 14 Jun', '4', 'Terrace', '6:30 PM'],
                ['Sun 15 Jun', '8', 'Upper',   '7:00 PM'],
                ['Mon 16 Jun', '12', 'Upper',  '6:30 PM'],
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-4 gap-3 text-center">
                  {row.map((cell, j) => (
                    <p
                      key={j}
                      className={`${j === 0 ? 'display-italic' : 'font-sans'} text-[14px] text-deep/85`}
                      style={{ letterSpacing: j === 0 ? 0 : '0.04em' }}
                    >
                      {cell}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-copper/30 pt-9">
              <a href={`https://line.me/R/ti/p/~hansariverhouse`} target="_blank" rel="noreferrer"
                 className="btn btn-coral celebrate justify-center" lang={locale}>
                {r.primary[locale]} <span className="btn-arrow">→</span>
              </a>
              <a href={`tel:${BRAND.phoneTel}`} className="btn justify-center text-center"
                 style={{ borderColor: 'var(--copper)', color: 'var(--copper)' }}>
                {r.secondary[locale]} · {BRAND.phoneDisplay}
              </a>
              <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer"
                 className="btn justify-center text-center"
                 style={{ borderColor: 'var(--deep)', color: 'var(--deep)' }} lang={locale}>
                {r.dm[locale]}
              </a>
            </div>

            <p className="font-sans text-[11.5px] text-deep/60 mt-7 leading-[1.85] text-center" lang={locale}>
              {r.policy[locale]}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
