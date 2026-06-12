'use client';

import { COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * MENU — three signature dishes presented as a typographic ceremony
 * (no photos yet — owner will supply), then a "larger plates" two-column
 * list, then a drinks block. Drop-cap intro keeps the editorial register.
 */
export default function Menu() {
  const { locale } = useLocale();
  const m = COPY.menu;

  return (
    <section id="menu" className="relative bg-ivory text-deep py-28 lg:py-40 border-y border-[var(--rule)] overflow-hidden">
      <div className="absolute inset-0 caustics" aria-hidden />
      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 mb-16 items-end">
          <Reveal>
            <p className="eyebrow">{m.eyebrow[locale]}</p>
            <h2
              className="display leading-[1.04] mt-5"
              style={{ fontSize: 'clamp(36px, 5.4vw, 84px)' }}
              lang={locale}
            >
              {m.title[locale]}
            </h2>
            <span className="gold-rule wide mt-9 inline-block" />
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="font-sans text-[15.5px] leading-[1.85] text-deep/75 max-w-md lg:ml-auto"
              lang={locale}
            >
              {m.intro[locale]}
            </p>
          </Reveal>
        </div>

        {/* SIGNATURES — three editorial cards, gold-ledger numerals */}
        <Reveal>
          <p className="eyebrow text-deep/55 border-b border-[var(--rule)] pb-4 mb-8" lang={locale}>
            {locale === 'en' ? 'Signatures' : 'จานเด่น'}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-20">
          {m.signatures.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.12}>
              <article className="relative h-full border border-[var(--rule-gold)] bg-cream p-7 lg:p-9 group transition-colors duration-700 ease-glide hover:border-gold">
                <span
                  aria-hidden
                  className="display italic text-gold/70 absolute top-5 right-6 text-[34px]"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="display text-deep leading-[1.1] mt-2"
                  style={{ fontSize: 'clamp(22px, 2.4vw, 30px)' }}
                  lang={locale}
                >
                  {s.name[locale]}
                </h3>
                <p className="font-sans text-[13.5px] leading-[1.85] text-deep/70 mt-5" lang={locale}>
                  {s.desc[locale]}
                </p>
                <span className="block w-8 h-px bg-gold/55 mt-7 group-hover:w-16 transition-all duration-700 ease-glide" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* LARGER PLATES — two-column editorial list */}
        <Reveal>
          <p className="eyebrow text-deep/55 border-b border-[var(--rule)] pb-4 mb-7" lang={locale}>
            {locale === 'en' ? 'Larger plates' : 'จานหลัก'}
          </p>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-x-14 gap-y-6 mb-20">
          {m.larger.map((d, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <li className="border-b border-[var(--rule)] pb-5">
                <p className="display text-[20px] leading-snug text-deep" lang={locale}>{d.name[locale]}</p>
                <p className="font-sans text-[13px] text-deep/65 mt-2 leading-[1.75]" lang={locale}>{d.desc[locale]}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* DRINKS — single column */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-20 items-start">
          <Reveal>
            <p className="eyebrow text-deep/55 border-b border-[var(--rule)] pb-4 mb-7" lang={locale}>
              {locale === 'en' ? 'Drinks · river-table' : 'เครื่องดื่ม · สำรับริมน้ำ'}
            </p>
            <ul className="grid gap-5">
              {m.drinks.map((d, i) => (
                <li key={i} className="grid grid-cols-[1fr] gap-1">
                  <p className="display italic text-[18px] text-deep" lang={locale}>{d.name[locale]}</p>
                  <p className="font-sans text-[12.5px] text-deep/65 leading-relaxed" lang={locale}>{d.desc[locale]}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-deep/55 lg:text-right" lang={locale}>
              {m.footnote[locale]}
            </p>
            <p className="display-italic text-deep/70 lg:text-right mt-8 leading-[1.5] max-w-[40ch] lg:ml-auto" style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}>
              <span className="text-gold">{COPY.story.eyebrow[locale] === 'The house' ? 'A long version,' : 'ค่อย ๆ,'}</span>{' '}
              {locale === 'en' ? 'unhurried, by the river.' : 'อย่างใจเย็น เคียงแม่น้ำ'}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
