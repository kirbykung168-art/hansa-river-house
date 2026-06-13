'use client';

/**
 * FLOORS — three magazine-style panels addressing the venue's actual
 * spatial structure (ground / upper / river). Sets the "two-storey
 * daydream strip" the brief flagged as a distinctive move — but
 * grounded in the specific photographs that show ground, upper and
 * riverside as visually distinct rooms.
 *
 * Each panel has:
 *   - A large Roman numeral overlaid on the photo (I / II / III)
 *   - A photo at a unique aspect ratio (4:5, 3:4, 4:5) so the row
 *     does not read as a uniform card grid
 *   - A short label and a paragraph of text
 *
 * The row sits on cream with a heavy paper-grain overlay so the
 * section breathes between Story and Menu without feeling like
 * another flat ivory band.
 */

import { COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

const photos = [PHOTOS.groundFloor, PHOTOS.upperFloor, PHOTOS.terraceGolden];
const aspects = ['aspect-[3/4]', 'aspect-[4/5]', 'aspect-[3/4]'];

export default function Floors() {
  const { locale } = useLocale();
  const f = COPY.floors;

  return (
    <section
      id="floors"
      className="relative bg-cream text-deep py-24 lg:py-36 overflow-hidden border-y border-[var(--rule)]"
    >
      <div className="absolute inset-0 caustics" aria-hidden />
      <div className="paper-grain absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-end mb-14 lg:mb-20">
          <Reveal>
            <p className="eyebrow coral">{f.eyebrow[locale]}</p>
            <h2
              className="display mt-5 leading-[1.04]"
              style={{ fontSize: 'clamp(36px, 5.4vw, 84px)' }}
              lang={locale}
            >
              {f.title[locale]}
            </h2>
            <span className="coral-rule wide mt-9 inline-block" />
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="font-sans text-[15.5px] leading-[1.9] text-deep/75 max-w-md lg:ml-auto"
              lang={locale}
            >
              {f.intro[locale]}
            </p>
          </Reveal>
        </div>

        {/* Three asymmetric panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {f.panels.map((panel, i) => (
            <Reveal key={panel.tag} delay={0.12 * i}>
              <figure className="relative group">
                <div className={`relative ${aspects[i]} overflow-hidden bg-deep/5`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photos[i]}
                    alt={`${panel.label.en} — ${panel.text.en.slice(0, 90)}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-[transform,filter] duration-[2400ms] ease-glide group-hover:scale-[1.04]"
                    style={{ filter: 'saturate(0.7) contrast(0.96)' }}
                  />
                  {/* dim wash + bottom gradient */}
                  <div
                    className="absolute inset-0 transition-opacity duration-[1600ms] ease-glide group-hover:opacity-50"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(30,42,48,0.18) 0%, rgba(30,42,48,0) 30%, rgba(30,42,48,0.32) 100%)',
                    }}
                  />
                  {/* Roman numeral */}
                  <span
                    aria-hidden
                    className="display-italic absolute top-5 left-6 text-ivory/95"
                    style={{
                      fontSize: 'clamp(60px, 7vw, 120px)',
                      lineHeight: 0.85,
                      textShadow: '0 4px 18px rgba(0,0,0,0.55)',
                    }}
                  >
                    {panel.tag}
                  </span>
                  {/* coral corner mark */}
                  <span
                    aria-hidden
                    className="absolute bottom-5 right-5"
                    style={{
                      width: 28,
                      height: 28,
                      borderBottom: '1.3px solid var(--coral)',
                      borderRight: '1.3px solid var(--coral)',
                    }}
                  />
                </div>
                <figcaption className="mt-6">
                  <p
                    className="font-sans text-[10.5px] uppercase tracking-[0.42em] text-coral"
                    lang={locale}
                  >
                    {panel.label[locale]}
                  </p>
                  <p
                    className="display mt-3 text-deep leading-[1.18]"
                    style={{ fontSize: 'clamp(19px, 1.9vw, 22px)' }}
                    lang={locale}
                  >
                    {panel.text[locale]}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
