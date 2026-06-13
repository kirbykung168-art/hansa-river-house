'use client';

import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import { HansaLockup } from './HansaWordmark';
import { RedFan, RedFanStripe } from './RedFan';

export default function Footer() {
  const { locale } = useLocale();
  return (
    <footer className="relative bg-deep text-ivory pt-24 pb-14 overflow-hidden">
      {/* paper-grain on the dark deep */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden
        style={{
          background:
            'radial-gradient(ellipse at 30% 0%, rgba(168,97,42,0.18) 0%, transparent 60%),' +
            'radial-gradient(ellipse at 80% 100%, rgba(108,138,153,0.15) 0%, transparent 60%)',
        }}
      />
      <div className="absolute top-10 left-10 opacity-25 pointer-events-none" aria-hidden>
        <RedFan size={48} spin />
      </div>
      <div className="absolute bottom-10 right-10 opacity-25 pointer-events-none" aria-hidden>
        <RedFanStripe size={48} />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start mb-16">
          <div>
            <HansaLockup tone="ivory" className="!items-start text-left" />
            <p className="font-sans text-[13.5px] leading-[1.85] text-ivory/70 mt-8 max-w-md" lang={locale}>
              {COPY.footer.tagline[locale]}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:gap-12 text-left">
            <div>
              <p className="eyebrow" style={{ color: 'var(--coral-l)' }}>{locale === 'en' ? 'Find us' : 'หาเรือน'}</p>
              <ul className="mt-5 space-y-3 font-sans text-[13.5px] text-ivory/85 leading-[1.7]">
                <li>{BRAND.addressLine1}</li>
                <li>{BRAND.addressLine2}</li>
                <li><a className="underline underline-offset-[6px] decoration-coral-l/40 hover:text-coral-l transition-colors duration-700 ease-glide" href={`tel:${BRAND.phoneTel}`}>{BRAND.phoneDisplay}</a></li>
                <li><a className="underline underline-offset-[6px] decoration-coral-l/40 hover:text-coral-l transition-colors duration-700 ease-glide" href={`mailto:${BRAND.email}`}>{BRAND.email}</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow" style={{ color: 'var(--coral-l)' }}>{locale === 'en' ? 'Follow' : 'ติดตาม'}</p>
              <ul className="mt-5 space-y-3 font-sans text-[13.5px] text-ivory/85 leading-[1.7]">
                <li><a className="hover:text-coral-l transition-colors duration-700 ease-glide" target="_blank" rel="noreferrer" href={BRAND.instagramUrl}>Instagram · {BRAND.instagramHandle}</a></li>
                <li><a className="hover:text-coral-l transition-colors duration-700 ease-glide" target="_blank" rel="noreferrer" href={BRAND.tiktokUrl}>TikTok · {BRAND.tiktokHandle}</a></li>
                <li><a className="hover:text-coral-l transition-colors duration-700 ease-glide" target="_blank" rel="noreferrer" href={BRAND.facebookUrl}>Facebook</a></li>
                <li><a className="hover:text-coral-l transition-colors duration-700 ease-glide" target="_blank" rel="noreferrer" href={BRAND.linktreeUrl}>Linktree</a></li>
                <li><a className="hover:text-coral-l transition-colors duration-700 ease-glide" href="/sources">Sources</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/15 pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <p className="font-sans text-[10.5px] uppercase tracking-[0.42em] text-ivory/55">
            © {new Date().getFullYear()} {BRAND.name} · {COPY.footer.rights[locale]}
          </p>
          <p className="display-italic text-ivory/65 text-[15px]" lang={locale}>
            {COPY.footer.credit[locale]} · <span className="text-coral-l">🙏</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
