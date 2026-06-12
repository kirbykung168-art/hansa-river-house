'use client';

import { COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * MENU — three signature dishes with verified press photographs (Nick
 * @nickeatsg via Trip.com Moments, Nov 2025) presented as editorial
 * cards. Below: larger plates list + drinks block.
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

        {/* SIGNATURES — three editorial cards with photographs */}
        <Reveal>
          <p className="eyebrow text-deep/55 border-b border-[var(--rule)] pb-4 mb-8" lang={locale}>
            {locale === 'en' ? 'Signatures' : 'จานเด่น'}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-20">
          {m.signatures.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.12}>
              <article className="relative h-full bg-cream border border-[var(--rule-gold)] overflow-hidden group transition-colors duration-700 ease-glide hover:border-gold">
                {/* Photo */}
                <div className="relative aspect-[5/4] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.photo}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt={`${s.name.en} — ${s.desc.en}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-[50%_50%] group-hover:scale-[1.03] transition-transform duration-[2200ms] ease-glide"
                  />
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(180deg, rgba(30,42,48,0) 65%, rgba(30,42,48,0.32) 100%)' }} />
                  {/* gold ledger numeral */}
                  <span aria-hidden className="display italic text-ivory absolute top-4 right-5 text-[32px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Caption */}
                <div className="p-7 lg:p-8">
                  <h3
                    className="display text-deep leading-[1.1]"
                    style={{ fontSize: 'clamp(22px, 2.4vw, 28px)' }}
                    lang={locale}
                  >
                    {s.name[locale]}
                  </h3>
                  <p className="font-sans text-[13.5px] leading-[1.85] text-deep/70 mt-4" lang={locale}>
                    {s.desc[locale]}
                  </p>
                  <span className="block w-8 h-px bg-gold/55 mt-6 group-hover:w-16 transition-all duration-700 ease-glide" />
                </div>
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

        {/* DRINKS */}
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
            <p className="display-italic text-deep/80 lg:text-right mt-8 leading-[1.4] max-w-[40ch] lg:ml-auto" style={{ fontSize: 'clamp(20px, 2.4vw, 28px)' }}>
              <span className="text-gold">{locale === 'en' ? 'A long version,' : 'ค่อย ๆ,'}</span>{' '}
              {locale === 'en' ? 'unhurried, by the river.' : 'อย่างใจเย็น เคียงแม่น้ำ'}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
