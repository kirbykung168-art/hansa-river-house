'use client';

import { COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * MENU — restructured June 2026 to address audit feedback that the
 * three signature cards were typographically identical. Now each
 * signature gets its own treatment:
 *
 *   I.   Pad Thai — RECIPE CARD (numbered ingredients ledger)
 *   II.  Tom Yum — POEM (three short lines stacked in italic)
 *   III. Pad Sam Meun — INGREDIENT LEDGER (two-column quantities table)
 *
 * Below the signatures: a "From the menu book" interlude — embeds the
 * venue's actual beverages page photograph as a card with a tea-stain
 * paper texture. Reads as a direct artifact from the venue rather than
 * digital copy describing it.
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

        {/* SIGNATURES — three editorial cards, each typographically distinct */}
        <Reveal>
          <p className="eyebrow text-deep/55 border-b border-[var(--rule)] pb-4 mb-8" lang={locale}>
            {locale === 'en' ? 'Three signatures · three readings' : 'จานเด่นสามจาน · สามการอ่าน'}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {m.signatures.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.12}>
              <SignatureCard signature={s} index={i} locale={locale} />
            </Reveal>
          ))}
        </div>

        {/* FROM THE MENU BOOK — the actual beverages page as a paper artifact */}
        <Reveal>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center mb-24 bg-paper/60 border border-[var(--rule-copper)] p-8 lg:p-12 relative">
            {/* paper-stain */}
            <div className="absolute inset-0 paper-grain pointer-events-none" aria-hidden />
            <div className="relative">
              <p className="eyebrow copper">{locale === 'en' ? 'From the menu book' : 'จากเล่มเมนู' }</p>
              <h3
                className="display-italic mt-4 text-deep leading-[1.18]"
                style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}
                lang={locale}
              >
                {locale === 'en' ? 'The beverages page, photographed at the table.' : 'หน้าเมนูเครื่องดื่ม ถ่ายตรงโต๊ะ'}
              </h3>
              <p className="font-sans text-[14px] leading-[1.85] text-deep/75 mt-5 max-w-[42ch]" lang={locale}>
                {locale === 'en'
                  ? "Hansa's beverages — iced pea matcha, coconut americano, chrysanthemum americano, yuzu matcha — set in copper serif over cream, photographed from a guest's table by Trip.com contributor Myym.Tcn."
                  : 'เมนูเครื่องดื่มของหงส์ — มัทฉะอัญชัน อเมริกาโน่มะพร้าว อเมริกาโน่เก๊กฮวย ยูสุมัทฉะ — เซ็ตในตัวอักษรเซริฟทองแดงบนกระดาษครีม ถ่ายโดยผู้แต่ง Trip.com Myym.Tcn'}
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] bg-cream border border-copper/30 overflow-hidden shadow-[0_20px_60px_-20px_rgba(168,97,42,0.45)] -rotate-[1.5deg]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PHOTOS.menuBeverages}
                  alt="Hansa River House menu — beverages page photographed at the table. Iced pea matcha, iced coconut matcha, iced matcha latte, iced coconut americano, iced chrysanthemum tea americano, iced yuzu americano soda — each set in copper serif over cream."
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

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

        {/* DRINKS · river-table — with the heritage glassware inset */}
        <Reveal>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-x-12 gap-y-4 items-end border-b border-[var(--rule)] pb-5 mb-9">
            <p className="eyebrow text-deep/55" lang={locale}>
              {locale === 'en' ? 'Drinks · river-table' : 'เครื่องดื่ม · สำรับ'}
            </p>
            <p className="display-italic text-deep/85 lg:text-right text-[18px] leading-snug" lang={locale}>
              {locale === 'en'
                ? '"Served in vintage pressed glass, the colour shift of butterfly pea, the chrysanthemum from across the river."'
                : '"เสิร์ฟในแก้วโบราณ · สีอัญชันที่เปลี่ยน · ดอกเก๊กฮวยจากฝั่งตรงข้าม"'}
            </p>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <ul className="grid sm:grid-cols-2 gap-x-14 gap-y-6">
            {m.drinks.map((d, i) => (
              <Reveal key={i} delay={(i % 2) * 0.06}>
                <li className="border-b border-[var(--rule)] pb-5">
                  <p className="display text-[19px] leading-snug text-deep" lang={locale}>{d.name[locale]}</p>
                  <p className="font-sans text-[13px] text-deep/65 mt-2 leading-[1.75]" lang={locale}>{d.desc[locale]}</p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.2}>
            <figure className="relative">
              <div className="relative aspect-[3/4] overflow-hidden border border-[var(--rule-copper)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PHOTOS.heritageGlass}
                  alt="A vintage pressed-glass tumbler with iced chrysanthemum tea at Hansa River House — embossed daisy pattern, warm sunlight from the river."
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'saturate(0.85) contrast(1.02)' }}
                />
              </div>
              <figcaption className="font-sans text-[10px] uppercase tracking-[0.42em] text-copper mt-4 text-center">
                Pressed glass · the daisy pattern in service
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Footnote */}
        <Reveal>
          <p className="font-sans text-[12px] text-deep/55 mt-14 text-center max-w-2xl mx-auto" lang={locale}>
            {m.footnote[locale]}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function SignatureCard({
  signature,
  index,
  locale,
}: {
  signature: typeof COPY.menu.signatures[number];
  index: number;
  locale: 'en' | 'th';
}) {
  const treatment = signature.treatment;
  const numeral = ['I', 'II', 'III'][index];

  return (
    <article className="relative h-full bg-cream border border-[var(--rule-copper)] flex flex-col group transition-colors duration-700 ease-glide hover:border-coral">
      {/* Photo */}
      <div className="relative aspect-[5/4] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={signature.photo}
          alt={`${signature.name.en} — ${signature.desc.en}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-[50%_50%] group-hover:scale-[1.03] transition-[transform,filter] duration-[2200ms] ease-glide"
          style={{ filter: 'saturate(0.4) contrast(0.95) sepia(0.15) brightness(0.97)' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = 'saturate(1) contrast(1) sepia(0) brightness(1)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = 'saturate(0.4) contrast(0.95) sepia(0.15) brightness(0.97)'; }}
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(30,42,48,0) 65%, rgba(30,42,48,0.32) 100%)' }} />
        <span aria-hidden className="display-italic absolute top-4 left-5 text-ivory text-[44px] leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          {numeral}
        </span>
        <span aria-hidden className="font-sans absolute top-6 right-5 text-[9px] uppercase tracking-[0.42em] text-ivory/80">
          {treatment === 'recipe' ? 'recipe' : treatment === 'poem' ? 'poem' : 'ledger'}
        </span>
      </div>

      {/* Caption block */}
      <div className="p-7 lg:p-8 flex flex-col flex-1">
        <h3
          className="display text-deep leading-[1.1]"
          style={{ fontSize: 'clamp(22px, 2.4vw, 28px)' }}
          lang={locale}
        >
          {signature.name[locale]}
        </h3>
        <p className="font-sans text-[13px] leading-[1.85] text-deep/70 mt-3" lang={locale}>
          {signature.desc[locale]}
        </p>

        {/* Treatment-specific lower half */}
        {treatment === 'recipe' && signature.recipe && (
          <ol className="mt-6 space-y-1.5 text-[12.5px] font-sans text-deep/75 flex-1">
            {signature.recipe[locale].map((line, j) => (
              <li key={j} className="flex items-baseline gap-3 border-b border-dashed border-copper/25 pb-1.5">
                <span className="font-mono text-[10px] text-coral tabular-nums">{String(j + 1).padStart(2, '0')}</span>
                <span lang={locale}>{line}</span>
              </li>
            ))}
          </ol>
        )}

        {treatment === 'poem' && signature.poem && (
          <div className="mt-7 flex-1 space-y-2 border-l-2 border-coral pl-5">
            {signature.poem[locale].map((line, j) => (
              <p
                key={j}
                className="display-italic text-deep/85 leading-[1.4]"
                style={{ fontSize: 'clamp(15px, 1.5vw, 19px)' }}
                lang={locale}
              >
                {line}
              </p>
            ))}
          </div>
        )}

        {treatment === 'ledger' && signature.ledger && (
          <table className="mt-6 w-full font-sans text-[12.5px] flex-1">
            <tbody>
              {signature.ledger[locale].map((row, j) => (
                <tr key={j} className="border-b border-dashed border-copper/25">
                  <td className="py-1.5 text-deep/80" lang={locale}>{row[0]}</td>
                  <td className="py-1.5 text-coral tabular-nums text-right">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <span className="block w-8 h-px bg-coral/55 mt-6 group-hover:w-16 transition-all duration-700 ease-glide" />
      </div>
    </article>
  );
}
