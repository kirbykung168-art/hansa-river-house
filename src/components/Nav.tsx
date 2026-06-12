'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { BRAND, NAV_ITEMS, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import LangToggle from './LangToggle';

/**
 * Sticky nav — ivory wash on scroll, transparent over hero.
 * Active section highlighted via IntersectionObserver. Mobile collapses
 * to a single Reserve button + a hamburger.
 */
export default function Nav() {
  const { locale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-50% 0px -45% 0px', threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-glide',
          scrolled
            ? 'bg-ivory/90 backdrop-blur-sm border-b border-[var(--rule)]'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10 h-[80px] flex items-center justify-between gap-6">
          <a
            href="#top"
            className="display text-[22px] lg:text-[26px] text-deep flex items-center gap-3 hover:text-gold transition-colors duration-700 ease-glide whitespace-nowrap"
            aria-label={BRAND.name}
          >
            <SwanMark />
            <span className="hidden sm:inline">{BRAND.name}</span>
            <span className="sm:hidden">Hansa</span>
          </a>

          {/* whitespace-nowrap on each item — under tight viewports the
              dark-section reveal animations can briefly squeeze the
              flex children and two-word items ("THE HOUSE", "THE
              TABLE", "THE RIVER") collapse onto two lines, which
              re-flowed the whole header. nowrap prevents that. */}
          <nav className="hidden lg:flex items-center gap-9 flex-nowrap">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={clsx(
                  'font-sans text-[11.5px] uppercase tracking-[0.32em] transition-colors duration-700 ease-glide relative whitespace-nowrap',
                  active === item.href ? 'text-gold' : 'text-deep/70 hover:text-deep',
                )}
                lang={locale}
              >
                {item.label[locale]}
                <span className={clsx(
                  'absolute -bottom-1.5 left-0 right-0 h-px bg-gold transition-transform duration-700 ease-glide origin-left',
                  active === item.href ? 'scale-x-100' : 'scale-x-0',
                )} />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden md:block"><LangToggle /></div>
            <a
              href="#reserve"
              className="hidden md:inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.32em] text-ivory bg-gold hover:bg-gold-l transition-colors duration-700 ease-glide px-5 py-2.5"
              lang={locale}
            >
              {COPY.nav.reserve[locale]} <span className="text-[10px]">↗</span>
            </a>
            <button
              type="button"
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className={clsx('block w-5 h-px bg-deep transition-transform duration-500', open && 'translate-y-[6px] rotate-45')} />
              <span className={clsx('block w-5 h-px bg-deep transition-opacity duration-500', open && 'opacity-0')} />
              <span className={clsx('block w-5 h-px bg-deep transition-transform duration-500', open && '-translate-y-[6px] -rotate-45')} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-ivory transition-opacity duration-700 ease-glide lg:hidden',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8 px-8 caustics relative">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display text-[36px] text-deep hover:text-gold transition-colors duration-700 ease-glide"
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
              lang={locale}
            >
              {item.label[locale]}
            </a>
          ))}
          <div className="mt-6"><LangToggle /></div>
          <a
            href="#reserve"
            onClick={() => setOpen(false)}
            className="font-sans text-[12px] uppercase tracking-[0.32em] text-ivory bg-gold px-7 py-3.5 mt-4 celebrate"
            lang={locale}
          >
            {COPY.nav.reserve[locale]} <span className="text-[10px] ml-1">↗</span>
          </a>
        </div>
      </div>
    </>
  );
}

/**
 * Mini swan mark — uses the same single-line silhouette as the hero
 * signature animation. Sits beside the wordmark in the nav so the brand
 * mark reads as a single ceremony emblem.
 */
function SwanMark() {
  return (
    <svg width="32" height="22" viewBox="0 0 64 44" aria-hidden>
      <path
        d="M 6 30
           C 8 22, 18 16, 28 18
           C 34 19, 38 22, 42 24
           C 46 26, 50 26, 54 22
           C 54 22, 50 28, 42 30
           C 36 31, 28 30, 22 32
           C 18 33, 12 33, 6 30 Z
           M 50 18
           C 50 15, 53 14, 55 16
           C 54 18, 52 19, 50 18 Z"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* eye dot */}
      <circle cx="52" cy="17" r="0.9" fill="var(--gold)" />
    </svg>
  );
}
