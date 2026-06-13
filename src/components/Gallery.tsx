'use client';

import { BRAND, GALLERY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';
import { FanRule, RedFan, RedFanStripe } from './RedFan';

/**
 * GALLERY — expanded June 2026 from 7 single-source frames to 17 frames
 * across 3 Trip.com Moments authors + Top 25 + Tatler.
 *
 * Organisation: three editorial chapters — THE HOUSE / THE TABLE /
 * THE RIVER — each with its own asymmetric mosaic and chapter dividers
 * built from the venue's red-paper-fan motif. The chapter dividers
 * (<FanRule />) are the visual ID that ties the gallery to the venue's
 * actual brand-wall decor.
 */
export default function Gallery() {
  const { locale } = useLocale();
  const houseTiles = GALLERY.filter((g) => g.chapter === 'house');
  const tableTiles = GALLERY.filter((g) => g.chapter === 'table');
  const riverTiles = GALLERY.filter((g) => g.chapter === 'river');
  return (
    <section id="gallery" className="relative bg-cream text-deep py-28 lg:py-36 border-y border-[var(--rule)] overflow-hidden">
      <div className="absolute inset-0 caustics" aria-hidden />

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-end mb-12">
          <Reveal>
            <p className="eyebrow coral">{locale === 'en' ? 'From the river' : 'จากริมน้ำ'}</p>
            <h2
              className="display-italic leading-[1.1] mt-5"
              style={{ fontSize: 'clamp(36px, 5vw, 76px)' }}
              lang={locale}
            >
              {locale === 'en' ? 'Three chapters · the house, the table, the river.' : 'สามบท · เรือน · สำรับ · แม่น้ำ'}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="font-sans text-[13px] leading-relaxed text-deep/65 max-w-md lg:ml-auto lg:text-right"
              lang={locale}
            >
              {locale === 'en'
                ? `Seventeen photographs across three Trip.com Moments authors, Top 25 Restaurants and Tatler Asia. Tap any frame for the full source.`
                : 'สิบเจ็ดภาพจาก Trip.com (สามผู้แต่ง), Top 25 และ Tatler Asia · กดที่ภาพเพื่อดูต้นฉบับ'}
            </p>
            <a
              href={BRAND.photoCreditUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-baseline gap-2 font-sans text-[10.5px] uppercase tracking-[0.32em] text-coral hover:text-copper transition-colors duration-700 ease-glide mt-4 underline underline-offset-[10px] decoration-coral/45 decoration-[0.5px]"
            >
              {BRAND.photoCredit} ↗
            </a>
          </Reveal>
        </div>

        {/* CHAPTER I — THE HOUSE */}
        <ChapterHeader numeral="I" title={{ en: 'The house', th: 'เรือน' }} locale={locale} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-4">
          <GalleryTile entry={houseTiles[0]} className="lg:col-span-2 aspect-[16/10]" />
          <GalleryTile entry={houseTiles[1]} className="aspect-[5/4]" />
          <GalleryTile entry={houseTiles[2]} className="aspect-[5/4]" />
          <GalleryTile entry={houseTiles[3]} className="lg:col-span-2 aspect-[16/10]" />
          <GalleryTile entry={houseTiles[4]} className="aspect-[1/1]" />
          <GalleryTile entry={houseTiles[5]} className="aspect-[1/1]" />
        </div>

        <FanRule />

        {/* CHAPTER II — THE TABLE */}
        <ChapterHeader numeral="II" title={{ en: 'The table', th: 'สำรับ' }} locale={locale} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-4">
          <GalleryTile entry={tableTiles[0]} className="lg:col-span-2 aspect-[16/10]" />
          <GalleryTile entry={tableTiles[1]} className="aspect-[5/4]" />
          <GalleryTile entry={tableTiles[2]} className="aspect-[1/1]" />
          <GalleryTile entry={tableTiles[3]} className="aspect-[1/1]" />
          <GalleryTile entry={tableTiles[4]} className="aspect-[1/1]" />
          <GalleryTile entry={tableTiles[5]} className="aspect-[1/1]" />
        </div>

        <FanRule />

        {/* CHAPTER III — THE RIVER */}
        <ChapterHeader numeral="III" title={{ en: 'The river', th: 'แม่น้ำ' }} locale={locale} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <GalleryTile entry={riverTiles[0]} className="lg:col-span-2 aspect-[16/10]" />
          <GalleryTile entry={riverTiles[1]} className="aspect-[5/4]" />
          <GalleryTile entry={riverTiles[2]} className="aspect-[5/4]" />
          <GalleryTile entry={riverTiles[3]} className="aspect-[5/4]" />
          <GalleryTile entry={riverTiles[4]} className="lg:col-span-2 aspect-[16/10]" />
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 text-center">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[12px] uppercase tracking-[0.32em] text-deep/75 hover:text-coral transition-colors duration-700 ease-glide underline underline-offset-[10px] decoration-coral/55 decoration-[0.5px]"
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

function ChapterHeader({
  numeral,
  title,
  locale,
}: {
  numeral: string;
  title: { en: string; th: string };
  locale: 'en' | 'th';
}) {
  return (
    <Reveal>
      <div className="flex items-end gap-6 lg:gap-8 mb-7 mt-4">
        <div className="flex items-center gap-3">
          <RedFan size={26} />
          <span className="display-italic text-coral leading-none" style={{ fontSize: 56 }}>{numeral}</span>
          <RedFanStripe size={26} />
        </div>
        <div className="flex-1 border-b border-dashed border-coral/40 pb-2">
          <p className="font-sans text-[10.5px] uppercase tracking-[0.42em] text-coral" lang={locale}>
            {locale === 'en' ? 'Chapter' : 'บทที่'}
          </p>
          <h3 className="display text-deep text-[26px] mt-0.5" lang={locale}>
            {title[locale]}
          </h3>
        </div>
      </div>
    </Reveal>
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={entry.src}
        alt={entry.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[50%_50%] group-hover:scale-[1.04] transition-[transform,filter] duration-[2400ms] ease-glide"
        style={{ filter: 'saturate(0.4) contrast(0.96) sepia(0.12) brightness(0.96)' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = 'saturate(1) contrast(1) sepia(0) brightness(1)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = 'saturate(0.4) contrast(0.96) sepia(0.12) brightness(0.96)'; }}
      />
      {/* warm-vignette + caption */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-[1500ms] ease-glide opacity-100 group-hover:opacity-40"
        style={{ background: 'linear-gradient(180deg, rgba(30,42,48,0) 60%, rgba(30,42,48,0.45) 100%)' }} />
    </a>
  );
}
