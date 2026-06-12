'use client';

import { BRAND, COPY, NAV_ITEMS } from '@/lib/content';
import { useLocale } from './LanguageProvider';

/**
 * FOOTER — quiet, three-column. Brand tagline, nav anchors, social.
 * Hairline gold rule, copyright row at the bottom.
 */
export default function Footer() {
  const { locale } = useLocale();
  return (
    <footer className="relative bg-cream text-deep border-t border-[var(--rule)] pt-16 pb-10 overflow-hidden">
      <div className="absolute inset-0 caustics" aria-hidden />
      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 grid lg:grid-cols-[1.4fr_1fr_1fr] gap-12 items-start">
        <div>
          <a href="#top" className="display text-[28px] hover:text-gold transition-colors duration-700 ease-glide" aria-label={BRAND.name}>
            {BRAND.name}
          </a>
          <p className="font-sans text-[13px] leading-relaxed text-deep/70 max-w-sm mt-4" lang={locale}>
            {COPY.footer.tagline[locale]}
          </p>
          <p className="display-italic text-gold mt-5 text-[17px]">
            {COPY.footer.credit[locale]}
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="eyebrow text-gold mb-2">{locale === 'en' ? 'Browse' : 'หมวด'}</p>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}
              className="font-sans text-[12.5px] uppercase tracking-[0.32em] text-deep/70 hover:text-gold transition-colors duration-700 ease-glide"
              lang={locale}
            >
              {item.label[locale]}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="eyebrow text-gold mb-2">{locale === 'en' ? 'Elsewhere' : 'ติดต่อ'}</p>
          <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="font-sans text-[12.5px] uppercase tracking-[0.32em] text-deep/70 hover:text-gold transition-colors duration-700 ease-glide">Instagram · @hansariverhouse</a>
          <a href={BRAND.facebookUrl} target="_blank" rel="noreferrer" className="font-sans text-[12.5px] uppercase tracking-[0.32em] text-deep/70 hover:text-gold transition-colors duration-700 ease-glide">Facebook</a>
          <a href={BRAND.linktreeUrl} target="_blank" rel="noreferrer" className="font-sans text-[12.5px] uppercase tracking-[0.32em] text-deep/70 hover:text-gold transition-colors duration-700 ease-glide">Linktree</a>
          <a href="/sources" className="font-sans text-[12.5px] uppercase tracking-[0.32em] text-deep/70 hover:text-gold transition-colors duration-700 ease-glide">Sources · what we verified</a>
        </div>
      </div>

      <hr className="border-0 border-t border-[var(--rule-gold)] mt-12 opacity-60 relative" />

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 mt-8 grid md:grid-cols-3 gap-3 text-[10.5px] tracking-[0.32em] uppercase text-deep/55">
        <p lang={locale} className="md:text-left text-center">© {new Date().getFullYear()} {BRAND.name}. {COPY.footer.rights[locale]}</p>
        <p lang={locale} className="text-center">{BRAND.addressOneLine}</p>
        <p lang={locale} className="md:text-right text-center">{BRAND.phoneDisplay}</p>
      </div>
    </footer>
  );
}
