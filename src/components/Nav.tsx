'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { BRAND, NAV_ITEMS, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import LangToggle from './LangToggle';
import { RedFan } from './RedFan';

/**
 * Sticky nav — ivory wash on scroll, transparent over hero.
 * Active section highlighted via IntersectionObserver. Mobile collapses
 * to a single Reserve button + a hamburger. Audit pass June 2026
 * swapped the gold active accent for coral so the nav reads in the
 * venue's actual railing colour, and re-skinned the SwanMark to pair
 * the swan with a small red paper-fan glyph — the venue's two
 * recurring decorative motifs in one nav lock-up.
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
            className="text-deep flex items-center gap-3 hover:text-coral transition-colors duration-700 ease-glide whitespace-nowrap"
            aria-label={BRAND.name}
          >
            <SwanMark />
            <span className="wordmark hidden sm:inline" style={{ fontSize: 22 }}>HANSA</span>
            <span className="font-sans hidden sm:inline text-[9.5px] uppercase tracking-[0.42em] text-deep/55">RIVER · HOUSE</span>
            <span className="wordmark sm:hidden" style={{ fontSize: 22 }}>HANSA</span>
          </a>

          <nav className="hidden lg:flex items-center gap-9 flex-nowrap">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={clsx(
                  'font-sans text-[11.5px] uppercase tracking-[0.32em] transition-colors duration-700 ease-glide relative whitespace-nowrap',
                  active === item.href ? 'text-coral' : 'text-deep/70 hover:text-deep',
                )}
                lang={locale}
              >
                {item.label[locale]}
                {active === item.href && (
                  <span aria-hidden className="absolute -bottom-2 left-0 right-0 h-px bg-coral" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LangToggle />
            <a href="#reserve" className="hidden sm:inline-flex btn btn-coral celebrate" style={{ padding: '10px 18px' }}>
              {COPY.nav.reserve[locale]} <span className="btn-arrow">→</span>
            </a>
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span className={clsx('block w-6 h-px bg-deep transition-transform duration-500', open && 'translate-y-[6px] rotate-45')} />
              <span className={clsx('block w-6 h-px bg-deep transition-opacity duration-500', open && 'opacity-0')} />
              <span className={clsx('block w-6 h-px bg-deep transition-transform duration-500', open && '-translate-y-[6px] -rotate-45')} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-deep transition-opacity duration-700 ease-glide lg:hidden',
          open ? 'opacity-95 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => setOpen(false)}
      >
        <nav className="absolute inset-0 flex flex-col items-center justify-center gap-7" onClick={(e) => e.stopPropagation()}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display text-ivory text-[28px] hover:text-coral-l transition-colors duration-700 ease-glide"
              lang={locale}
            >
              {item.label[locale]}
            </a>
          ))}
          <a href="#reserve" onClick={() => setOpen(false)} className="mt-6 btn btn-coral celebrate">
            {COPY.nav.reserve[locale]} <span className="btn-arrow">→</span>
          </a>
        </nav>
      </div>
    </>
  );
}

function SwanMark() {
  return (
    <span className="inline-flex items-center gap-1.5" aria-hidden>
      <RedFan size={18} />
      <svg viewBox="0 0 36 24" width="34" height="22" className="text-coral">
        <path
          d="M 3 16 C 6 11, 12 9, 18 11 C 22 12, 25 14, 28 14 C 30 14, 32 13, 33 11 C 31 14, 27 16, 22 16 C 17 16, 11 16, 7 18 C 5 19, 3 18, 3 16 Z"
          fill="var(--ivory)"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M 25 13 C 26 9, 28 6, 30 5 C 31 5, 31 6, 31 7 C 30 8, 29 11, 28 13"
          fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M 31 6 L 33 7 L 31 8 Z" fill="var(--copper)" />
      </svg>
    </span>
  );
}
