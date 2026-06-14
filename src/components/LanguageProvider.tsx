'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

type Locale = 'en' | 'th';
interface LangCtx { locale: Locale; setLocale: (l: Locale) => void; toggle: () => void }

const Ctx = createContext<LangCtx>({
  locale: 'en',
  setLocale: () => {},
  toggle: () => {},
});

const STORAGE_KEY = 'hansa.locale';

/**
 * Read a saved locale on mount so the EN/TH preference survives
 * cross-page navigation, hard reloads, and even fresh tab restores.
 *
 * We hydrate from `en` on first paint to avoid an SSR/CSR mismatch,
 * then upgrade to the saved value on the client. A subsequent paint
 * with the correct language is visually indistinguishable for English
 * users (the default) and the right behaviour for Thai users coming
 * back to the page — they get their language without re-toggling.
 */
function readSaved(): Locale | null {
  if (typeof window === 'undefined') return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === 'en' || v === 'th') return v;
  } catch {
    /* private browsing / disabled storage — ignore */
  }
  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  // Hydrate from localStorage on mount.
  useEffect(() => {
    const saved = readSaved();
    if (saved && saved !== locale) setLocaleState(saved);
    // Intentionally only run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, l);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(() => {
    setLocale(locale === 'en' ? 'th' : 'en');
  }, [locale, setLocale]);

  return <Ctx.Provider value={{ locale, setLocale, toggle }}>{children}</Ctx.Provider>;
}

export function useLocale() {
  return useContext(Ctx);
}
