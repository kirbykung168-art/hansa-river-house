'use client';

import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';
import { RedFan } from './RedFan';

/**
 * VISIT — the practical info section. Left: a static map embed at full
 * height with a coral pin overlay. Right: stacked address / hours /
 * phone / email / transit rows. New: a tiny "schematic" mark above the
 * map showing 1616 sitting on the Song Wat curve — readable as a
 * cartographic ornament, not as a real map.
 */
export default function Visit() {
  const { locale } = useLocale();
  const v = COPY.visit;

  return (
    <section id="visit" className="relative bg-cream text-deep py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 caustics" aria-hidden />
      <div className="paper-grain absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">
        <Reveal>
          <p className="eyebrow coral">{v.eyebrow[locale]}</p>
          <h2
            className="display mt-5 leading-[1.04]"
            style={{ fontSize: 'clamp(36px, 5.2vw, 84px)' }}
            lang={locale}
          >
            {v.title[locale]}
          </h2>
          <span className="coral-rule wide mt-9 inline-block" />

          {/* tiny cartographic glyph */}
          <svg viewBox="0 0 360 70" className="w-full max-w-[360px] mt-9" aria-hidden>
            <path d="M 6 50 Q 90 30, 180 35 T 354 50" stroke="var(--slate)" strokeWidth="1" fill="none" />
            <path d="M 6 56 Q 90 36, 180 41 T 354 56" stroke="var(--slate)" strokeWidth="0.5" strokeDasharray="2 6" fill="none" className="wake-line" />
            <path d="M 6 8 Q 90 5, 180 18 T 354 12" stroke="var(--coral)" strokeWidth="0.8" fill="none" opacity="0.6" />
            <circle cx="180" cy="35" r="4" fill="var(--coral)" />
            <text x="186" y="32" fontFamily="var(--font-cormorant), Cormorant Garamond, serif"
              fontStyle="italic" fontSize="12" fill="var(--copper)">1616 · Hansa</text>
            <text x="6" y="64" fontFamily="var(--font-inter-tight), Inter Tight, sans-serif"
              fontSize="8" letterSpacing="0.32em" fill="var(--deep)" opacity="0.5">SONG · WAT</text>
            <text x="296" y="64" fontFamily="var(--font-inter-tight), Inter Tight, sans-serif"
              fontSize="8" letterSpacing="0.32em" fill="var(--deep)" opacity="0.5">RATCHAWONG</text>
          </svg>

          <dl className="mt-10 grid grid-cols-1 gap-6">
            <Row label={v.addrLabel[locale]}>
              <p className="font-sans text-[14px] leading-[1.7] text-deep/85">
                {BRAND.addressLine1}<br />
                {BRAND.addressLine2}
              </p>
            </Row>
            <Row label={v.hoursLabel[locale]}>
              <p className="font-sans text-[14px] leading-[1.7] text-deep/85">
                {BRAND.hoursOpen}<br />
                <span className="text-deep/55">{BRAND.hoursClosed}</span>
              </p>
            </Row>
            <Row label={v.phoneLabel[locale]}>
              <a href={`tel:${BRAND.phoneTel}`} className="font-sans text-[14px] text-deep/85 hover:text-coral transition-colors duration-700 ease-glide">
                {BRAND.phoneDisplay}
              </a>
            </Row>
            <Row label={v.emailLabel[locale]}>
              <a href={`mailto:${BRAND.email}`} className="font-sans text-[14px] text-deep/85 hover:text-coral transition-colors duration-700 ease-glide">
                {BRAND.email}
              </a>
            </Row>
            <Row label={v.transitLabel[locale]}>
              <p className="font-sans text-[13.5px] leading-[1.75] text-deep/80">
                {BRAND.transit}
              </p>
              <p className="font-sans text-[12px] leading-[1.7] text-deep/55 mt-2">
                {v.parking[locale]}
              </p>
            </Row>
          </dl>

          <a
            href={BRAND.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 font-sans text-[11.5px] uppercase tracking-[0.32em] text-coral hover:text-copper transition-colors duration-700 ease-glide underline underline-offset-[10px] decoration-coral/45 decoration-[0.5px]"
          >
            {locale === 'en' ? 'Open in Google Maps' : 'เปิดใน Google Maps'} ↗
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative aspect-[4/5] lg:aspect-[3/4] border border-[var(--rule-coral)] bg-deep/5">
            <iframe
              title="Hansa River House on the map"
              src={BRAND.googleMapsEmbed}
              className="absolute inset-0 w-full h-full grayscale-[0.4] contrast-[0.95]"
              style={{ border: 0 }}
              loading="lazy"
            />
            {/* coral pin marker overlay */}
            <span aria-hidden className="absolute top-3 right-3 flex items-center gap-2 bg-cream px-3 py-1.5 border border-coral/50">
              <RedFan size={14} />
              <span className="font-sans text-[9.5px] uppercase tracking-[0.42em] text-coral">1616 · here</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-5 border-b border-[var(--rule)] pb-5">
      <dt className="font-sans text-[10px] uppercase tracking-[0.42em] text-copper">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
