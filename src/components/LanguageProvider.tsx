'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Locale = 'en' | 'th';
interface LangCtx { locale: Locale; setLocale: (l: Locale) => void; toggle: () => void }

const Ctx = createContext<LangCtx>({
  locale: 'en',
  setLocale: () => {},
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');
  const toggle = useCallback(() => setLocale((l) => (l === 'en' ? 'th' : 'en')), []);
  return <Ctx.Provider value={{ locale, setLocale, toggle }}>{children}</Ctx.Provider>;
}

export function useLocale() {
  return useContext(Ctx);
}
