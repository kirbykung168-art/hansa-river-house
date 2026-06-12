'use client';

import { useLocale } from './LanguageProvider';

export default function LangToggle() {
  const { locale, setLocale } = useLocale();
  return (
    <div
      className="font-sans text-[11px] uppercase tracking-[0.32em] text-deep/55 flex items-center gap-3"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={locale === 'en' ? 'text-gold' : 'hover:text-deep transition-colors duration-500'}
      >
        EN
      </button>
      <span aria-hidden className="text-deep/30">|</span>
      <button
        type="button"
        onClick={() => setLocale('th')}
        aria-pressed={locale === 'th'}
        className={locale === 'th' ? 'text-gold' : 'hover:text-deep transition-colors duration-500'}
      >
        TH
      </button>
    </div>
  );
}
