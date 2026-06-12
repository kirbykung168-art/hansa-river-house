'use client';

import { BRAND, GALLERY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * GALLERY — Instagram-style mosaic of the seven verified press photos
 * (Nick @nickeatsg via Trip.com, November 2025). Asymmetric grid: a
 * tall hero photo on the left, smaller squares on the right.
 *
 * Each tile links to the upstream Trip Moment article so the credit
 * chain stays attached. Hover lifts each tile slightly with a gold
 * underline appearing under the caption.
 */
export default function Gallery() {
  const { locale } = useLocale();
  return (
    <section id="gallery" className="relative bg-cream text-deep py-28 lg:py-36 border-y border-[var(--rule)] overflow-hidden">
      <div className="absolute inset-0 caustics" aria-hidden />

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-end mb-12">
          <Reveal>
            <p className="eyebrow">{locale === 'en' ? 'From the river' : 'จากริมน้ำ'}</p>
            <h2
              className="display-italic leading-[1.1] mt-5"
              style={{ fontSize: 'clamp(36px, 5vw, 76px)' }}
              lang={locale}
            >
              {locale === 'en' ? 'A table, a sunset, a long-tail boat.' : 'โต๊ะ · พระอาทิตย์ตก · เรือหางยาว'}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="font-sans text-[13px] leading-relaxed text-deep/65 max-w-md lg:ml-auto lg:text-right"
              lang={locale}
            >
              {locale === 'en'
                ? `Seven photographs from the Hansa terrace, captured for Trip.com Moments in November 2025. Tap any to read the original feature.`
                : 'ภาพถ่ายเจ็ดภาพจากระเบียงของหงส์ เผยแพร่ใน Trip.com Moments เดือนพฤศจิกายน 2025 · กดที่ภาพเพื่ออ่านบทความต้นฉบับ'}
            </p>
            <a
              href={BRAND.photoCreditUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-baseline gap-2 font-sans text-[11px] uppercase tracking-[0.32em] text-gold hover:text-gold-l transition-colors duration-700 ease-glide mt-4 underline underline-offset-[10px] decoration-gold/45 decoration-[0.5px]"
            >
              {BRAND.photoCredit} ↗
            </a>
          </Reveal>
        </div>

        {/* Asymmetric mosaic:
            row 1 — wide sunset (col 1-2)  + tom yum (col 3)
            row 2 — pad thai (col 1)        + table spread (col 2-3)
            row 3 — morning glory (col 1)   + pad sam meun (col 2)  + sunset alt (col 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <GalleryTile entry={GALLERY[0]} className="lg:col-span-2 lg:row-span-1 aspect-[16/10]" />
          <GalleryTile entry={GALLERY[3]} className="aspect-[5/4]" />
          <GalleryTile entry={GALLERY[2]} className="aspect-[5/4]" />
          <GalleryTile entry={GALLERY[1]} className="lg:col-span-2 aspect-[16/10]" />
          <GalleryTile entry={GALLERY[5]} className="aspect-[1/1]" />
          <GalleryTile entry={GALLERY[4]} className="aspect-[1/1]" />
          <GalleryTile entry={GALLERY[6]} className="aspect-[1/1]" />
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[12px] uppercase tracking-[0.32em] text-deep/75 hover:text-gold transition-colors duration-700 ease-glide underline underline-offset-[10px] decoration-gold/55 decoration-[0.5px]"
            >
              {locale === 'en'
                ? `More on Instagram · ${BRAND.instagramHandle} →`
                : `เพิ่มเติมที่ Instagram · ${BRAND.instagramHandle} →`}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GalleryTile({
  entry,
  className,
}: {
  entry: typeof GALLERY[number];
  className?: string;
}) {
  return (
    <a
      href={BRAND.photoCreditUrl}
      target="_blank"
      rel="noreferrer"
      className={`relative block overflow-hidden bg-ivory border border-[var(--rule)] group ${className ?? ''}`}
    >
      {/* Photo treatment: at-rest the tile is desaturated + warmed by
          a sepia tilt so the press shots read as editorial dossier
          plates instead of an Instagram feed; hover restores full
          colour over 900ms. The typography around the gallery (high-
          contrast Playfair Didone, gold rules, italic Cormorant) sits
          in the Tatler/Vogue register — full-saturation dish photos
          fight that. Grayscale-on-rest is the same gesture the map
          uses, so the gestures rhyme across the page. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={entry.src}
        alt={entry.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[50%_50%] group-hover:scale-[1.04] transition-[transform,filter] duration-[2400ms] ease-glide"
        style={{
          filter: 'saturate(0.55) contrast(0.97) sepia(0.10)',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = 'saturate(1) contrast(1) sepia(0)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = 'saturate(0.55) contrast(0.97) sepia(0.10)'; }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(30,42,48,0) 70%, rgba(30,42,48,0.30) 100%)' }} />
      {/* gold corner brackets */}
      <span aria-hidden className="absolute pointer-events-none" style={{ top: 8, left: 8, width: 18, height: 18, borderTop: '1px solid rgba(184,146,75,0.8)', borderLeft: '1px solid rgba(184,146,75,0.8)' }} />
      <span aria-hidden className="absolute pointer-events-none" style={{ bottom: 8, right: 8, width: 18, height: 18, borderBottom: '1px solid rgba(184,146,75,0.8)', borderRight: '1px solid rgba(184,146,75,0.8)' }} />
    </a>
  );
}

