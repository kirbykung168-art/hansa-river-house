'use client';

import { COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * STORY — cream section. Left: eyebrow / title / drop-cap body /
 * side-pulled italic quote. Right: a stacked figure pair — Plate I
 * (the full table press shot) over a small inset "MENU · 2026" card
 * showing the venue's own watercolour menu cover. The menu-cover
 * inset is a distinctive moment: it embeds the venue's actual
 * graphic identity (gold copper serif HANSA + watercolour view) as a
 * card-within-a-card, like a magazine pulling a real artefact into
 * the page rather than describing it.
 */
export default function Story() {
  const { locale } = useLocale();

  const restingFilter = 'saturate(0.45) contrast(0.96) sepia(0.12) brightness(0.97)';
  const hoverFilter   = 'saturate(1) contrast(1) sepia(0) brightness(1)';

  return (
    <section id="story" className="relative bg-cream text-deep py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 caustics" aria-hidden />
      <div className="paper-grain absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow coral">{COPY.story.eyebrow[locale]}</p>
          <h2
            className="display mt-5 leading-[1.04]"
            style={{ fontSize: 'clamp(36px, 5.6vw, 88px)' }}
            lang={locale}
          >
            {COPY.story.title[locale]}
          </h2>
          <span className="coral-rule wide mt-9 inline-block" />
          <p
            className="font-sans text-[15.5px] leading-[1.95] text-deep/80 mt-10 max-w-[64ch] dropcap"
            lang={locale}
          >
            {COPY.story.body[locale]}
          </p>

          {/* Side-pulled italic quote — pulls into the gutter on lg+ */}
          <blockquote
            className="display-italic text-deep leading-[1.3] max-w-[34ch] mt-12 border-l-2 border-coral pl-6 lg:-ml-6 lg:pl-10 relative"
            style={{ fontSize: 'clamp(22px, 2.6vw, 30px)' }}
            lang={locale}
          >
            <span className="text-coral mr-1">&ldquo;</span>
            {COPY.story.pullQuote[locale].replace(/[""'']/g, '')}
            <span className="text-coral ml-1">&rdquo;</span>
          </blockquote>
          <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-coral mt-5 pl-6 lg:pl-10">
            — {COPY.story.pullAttribution}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-5 lg:mt-16">
          <figure className="relative">
            {/* Plate I — full table on the river */}
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.tableSpread}
                alt="The full Hansa River House table on the coral terrace at sunset — pad Thai, tom yum, pad sam meun, morning glory salad and a fresh coconut, the Chao Phraya beyond."
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-[55%_55%] transition-[filter] duration-[2200ms] ease-glide"
                style={{ filter: restingFilter }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = hoverFilter; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = restingFilter; }}
              />
              <span aria-hidden className="absolute pointer-events-none" style={{ top: 12, left: 12, width: 26, height: 26, borderTop: '1.2px solid var(--coral)', borderLeft: '1.2px solid var(--coral)' }} />
              <span aria-hidden className="absolute pointer-events-none" style={{ bottom: 12, right: 12, width: 26, height: 26, borderBottom: '1.2px solid var(--coral)', borderRight: '1.2px solid var(--coral)' }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, rgba(30,42,48,0) 60%, rgba(30,42,48,0.30) 100%)' }} />
            </div>
            <figcaption className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-deep/55 mt-7">
              Plate I · the table on the river
            </figcaption>

            {/* Menu-cover inset — overlapped postcard pinned to the lower-right.
                Renders the venue's actual visual identity: copper serif
                HANSA + RIVER HOUSE + MENU stamped over a watercolour
                painting of the terrace view. */}
            <div
              className="hidden md:block absolute -bottom-10 -left-10 w-[200px] lg:w-[220px] bg-cream border border-copper/40 shadow-[0_18px_40px_-12px_rgba(168,97,42,0.35)] -rotate-[3.5deg]"
              style={{ padding: 10 }}
              aria-hidden
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PHOTOS.menuCover}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <p className="font-sans text-[8.5px] uppercase tracking-[0.42em] text-copper mt-2 text-center">
                Menu · 2026
              </p>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
