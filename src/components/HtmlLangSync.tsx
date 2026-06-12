'use client';

import { useEffect } from 'react';
import { useLocale } from './LanguageProvider';

/**
 * Keeps <html lang="..."> in sync with the active locale so that
 * browser auto-translate and screen readers treat the page correctly.
 */
export default function HtmlLangSync() {
  const { locale } = useLocale();
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
