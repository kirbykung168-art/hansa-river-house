'use client';

import { COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * STORY — cream section. The full-table press photograph on the
 * right (vertical 4:5 crop, gold corner brackets), pull-quote +
 * drop-cap body on the left. The pull-quote is the verbatim
 * Passport & Stamps line about long-tail boats and a fresh coconut.
 *
 * Photo choice: the press-shot of the whole table — pad Thai,
 * tom yum, pad sam meun, morning glory, coconut, all laid out on
 * the pink-painted railing with the river behind — reads more like
 * an editorial Plate I dossier image here than it does as a hero.
 * The hero now carries the lighter sunset-terrace shot instead.
 *
 * Photo treatment: same desaturate-on-rest, restore-on-hover
 * editorial filter applied to Gallery + Menu signatures, so the
 * page reads as a single editorial volume. Before this pass the
 * Story Plate I was the only un-toned dish photo on the page and
 * pulled visual focus off the manifesto and the gold drop-cap H.
 */
export default function Story() {
  const { locale } = useLocale();

  const restingFilter = 'saturate(0.35) contrast(0.94) sepia(0.18) brightness(0.96)';
  const hoverFilter   = 'saturate(1) contrast(1) sepia(0) brightness(1)';

  return (
    <section id="story" className="relative bg-cream text-deep py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 caustics" aria-hidden />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow">{COPY.story.eyebrow[locale]}</p>
          <h2
            className="display mt-5 leading-[1.04]"
            style={{ fontSize: 'clamp(36px, 5.6vw, 88px)' }}
            lang={locale}
          >
            {COPY.story.title[locale]}
          </h2>
          <span className="gold-rule wide mt-9 inline-block" />
          <p
            className="font-sans text-[15.5px] leading-[1.95] text-deep/80 mt-10 max-w-[64ch] dropcap"
            lang={locale}
          >
            {COPY.story.body[locale]}
          </p>

          <blockquote
            className="display-italic text-deep leading-[1.3] max-w-[34ch] mt-12 border-l-2 border-gold pl-6"
            style={{ fontSize: 'clamp(22px, 2.6vw, 30px)' }}
            lang={locale}
          >
            <span className="text-gold mr-1">&ldquo;</span>
            {COPY.story.pullQuote[locale].replace(/[""'']/g, '')}
            <span className="text-gold ml-1">&rdquo;</span>
          </blockquote>
          <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold mt-5 pl-6">
            — {COPY.story.pullAttribution}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-5 lg:mt-16">
          <figure className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.tableSpread}
                srcSet={`${PHOTOS.tableSpread} 1100w`}
                sizes="(max-width: 1024px) 100vw, 40vw"
                alt="The full Hansa River House table on the pink-painted terrace at sunset, with pad Thai, tom yum, pad sam meun, morning glory salad and a fresh coconut, the Chao Phraya beyond."
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-[55%_55%] transition-[filter] duration-[2200ms] ease-glide"
                style={{ filter: restingFilter }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = hoverFilter; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = restingFilter; }}
              />
              {/* Brass corner brackets */}
              <span aria-hidden className="absolute pointer-events-none" style={{ top: 12, left: 12, width: 26, height: 26, borderTop: '1.2px solid var(--gold)', borderLeft: '1.2px solid var(--gold)' }} />
              <span aria-hidden className="absolute pointer-events-none" style={{ bottom: 12, right: 12, width: 26, height: 26, borderBottom: '1.2px solid var(--gold)', borderRight: '1.2px solid var(--gold)' }} />
              {/* Soft warm vignette */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, rgba(30,42,48,0) 60%, rgba(30,42,48,0.30) 100%)' }} />
            </div>
            {/* mt-7 so the caption reads as figure metadata rather
                than overlay text against the photo's lower edge. */}
            <figcaption className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-deep/55 mt-7">
              Plate I · the table on the river
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
