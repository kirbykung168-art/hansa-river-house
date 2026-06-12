'use client';

import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * VISIT — two-column layout: contact ledger on the left, lat/lng
 * Google Maps embed on the right. Soft gold framing on the embed so
 * it integrates with the editorial palette instead of looking like
 * a default Google iframe.
 */
export default function Visit() {
  const { locale } = useLocale();
  const v = COPY.visit;

  const mapsSrc = `https://maps.google.com/maps?q=${BRAND.lat}%2C${BRAND.lng}&t=&z=17&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="visit" className="relative bg-ivory text-deep py-28 lg:py-36 border-t border-[var(--rule)] overflow-hidden">
      <div className="absolute inset-0 caustics" aria-hidden />
      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">{v.eyebrow[locale]}</p>
          <h2
            className="display leading-[1.04] mt-5 max-w-3xl"
            style={{ fontSize: 'clamp(36px, 5vw, 76px)' }}
            lang={locale}
          >
            {v.title[locale]}
          </h2>
          <span className="gold-rule wide mt-9 inline-block" />
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <Reveal delay={0.15}>
            <dl className="space-y-9">
              <Row label={v.addrLabel[locale]}>
                <p className="display text-[22px] leading-snug" lang={locale}>{BRAND.addressLine1}</p>
                <p className="font-sans text-[14px] text-deep/70 mt-2 leading-relaxed" lang={locale}>
                  {BRAND.addressLine2}
                </p>
              </Row>

              <Row label={v.hoursLabel[locale]}>
                <p className="display text-[20px] leading-snug" lang={locale}>{BRAND.hoursOpen}</p>
                <p className="font-sans text-[12.5px] uppercase tracking-[0.22em] text-gold mt-2" lang={locale}>
                  {BRAND.hoursClosed}
                </p>
              </Row>

              <Row label={v.phoneLabel[locale]}>
                <a href={`tel:${BRAND.phoneTel}`} className="display text-[20px] hover:text-gold transition-colors duration-700 ease-glide">
                  {BRAND.phoneDisplay}
                </a>
              </Row>

              <Row label={v.emailLabel[locale]}>
                <a href={`mailto:${BRAND.email}`} className="display text-[18px] hover:text-gold transition-colors duration-700 ease-glide break-all">
                  {BRAND.email}
                </a>
              </Row>

              <Row label={v.transitLabel[locale]}>
                <p className="font-sans text-[14px] text-deep/75 leading-relaxed" lang={locale}>
                  {BRAND.transit}
                </p>
                <p className="font-sans text-[11.5px] uppercase tracking-[0.22em] text-deep/55 mt-2" lang={locale}>
                  {v.parking[locale]}
                </p>
              </Row>
            </dl>
          </Reveal>

          <Reveal delay={0.25}>
            <a
              href={BRAND.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="relative block aspect-[5/4] overflow-hidden border border-[var(--rule-gold)] group"
            >
              <iframe
                src={mapsSrc}
                title={`Map · ${BRAND.name}`}
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-[filter] duration-1000 ease-glide"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Soft gold radial wash to integrate with palette */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(60% 50% at 80% 90%, rgba(184,146,75,0.18) 0%, rgba(184,146,75,0) 70%)' }} />
              {/* Corner brackets */}
              <span aria-hidden className="absolute pointer-events-none" style={{ top: 10, left: 10, width: 22, height: 22, borderTop: '1.2px solid var(--gold)', borderLeft: '1.2px solid var(--gold)' }} />
              <span aria-hidden className="absolute pointer-events-none" style={{ bottom: 10, right: 10, width: 22, height: 22, borderBottom: '1.2px solid var(--gold)', borderRight: '1.2px solid var(--gold)' }} />
              <p className="absolute bottom-4 left-4 font-sans text-[10.5px] uppercase tracking-[0.32em] text-ivory/90 bg-deep/55 px-3 py-1.5 backdrop-blur-sm">
                {locale === 'en' ? 'Open in Google Maps →' : 'เปิดใน Google Maps →'}
              </p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="eyebrow text-deep/55 mb-3">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
