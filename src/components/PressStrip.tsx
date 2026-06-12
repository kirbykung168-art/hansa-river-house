'use client';

import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * PRESS STRIP — a small "as featured in" row sitting between the hero
 * and the story manifesto. Typographic only (italic Cormorant
 * publication names) so the strip reads as editorial restraint, not
 * a trophy case. Linked back to each publication for verification.
 *
 * Lives just below the hero so the Trip.com / Tatler / Top 25 /
 * Passport & Stamps credentials are visible before the reader even
 * starts scrolling — establishes the site as a real, press-attested
 * restaurant rather than a marketing brochure.
 */
const PRESS = [
  { name: 'Passport & Stamps',  url: 'https://passportandstamps.com/song-wat-road-bangkok/' },
  { name: 'Trip.com',           url: 'https://us.trip.com/moments/detail/bangkok-191-137501114/' },
  { name: 'Tatler Asia',        url: 'https://www.tatlerasia.com/dining/food/chao-phraya-riverside-restaurants-caf%C3%A9s-bangkok' },
  { name: 'Top 25 Restaurants', url: 'https://www.top25restaurants.com/thailand/bangkok/restaurant/hansa-river-house/' },
  { name: 'Wanderlog',          url: 'https://wanderlog.com/place/details/13572675/hansa-river-house' },
];

export default function PressStrip() {
  const { locale } = useLocale();
  return (
    <section
      aria-label="Press features"
      className="relative bg-cream text-deep border-y border-[var(--rule)]"
    >
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-9 lg:py-11">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-12 text-center">
            <p
              className="font-sans text-[10px] uppercase tracking-[0.48em] text-gold whitespace-nowrap"
              lang={locale}
            >
              {locale === 'en' ? 'Featured in' : 'ปรากฏใน'}
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-7 lg:gap-x-10 gap-y-3">
              {PRESS.map((p, i) => (
                <li key={p.name} className="flex items-center gap-x-7 lg:gap-x-10">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display-italic text-deep/80 hover:text-gold transition-colors duration-700 ease-glide text-[17px] lg:text-[19px] tracking-wide"
                  >
                    {p.name}
                  </a>
                  {i < PRESS.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden sm:inline-block w-1 h-1 rotate-45 bg-gold/60"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
