import Link from 'next/link';
import { SOURCES, BRAND } from '@/lib/content';

export const metadata = {
  title: 'Sources · Hansa River House',
  description: 'Every claim on this site, paired with its source URL. Verifiable, citation by citation.',
};

/**
 * /sources — appendix listing every factual claim on the site with its
 * publication URL. Builds trust that the site isn't fabricated, it's
 * a research-backed asset that can be audited.
 */
export default function SourcesPage() {
  return (
    <main className="min-h-screen bg-ivory text-deep py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 caustics" aria-hidden />
      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10">
        <Link
          href="/"
          className="inline-block font-sans text-[11px] uppercase tracking-[0.32em] text-deep/55 hover:text-gold mb-12 underline underline-offset-[10px] decoration-gold/40"
        >
          ← back to Hansa
        </Link>

        <p className="eyebrow">Appendix</p>
        <h1
          className="display leading-[1.04] mt-5 max-w-[18ch]"
          style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}
        >
          What we verified.
        </h1>
        <p className="font-sans text-[15px] leading-[1.95] text-deep/75 mt-8 max-w-[60ch]">
          Every fact on this site — address, hours, dishes, the press
          line, the occasion capacities — has a citation. This page
          lists them all, paired with the publication URL. Click any
          link to read the original piece.
        </p>
        <p className="font-sans text-[12.5px] uppercase tracking-[0.32em] text-gold mt-7">
          {SOURCES.length} citations · {BRAND.name} · {new Date().getFullYear()}
        </p>

        <ul className="mt-16 grid gap-6">
          {SOURCES.map((s, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-x-6 items-baseline border-b border-[var(--rule)] pb-5"
            >
              <span className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-deep/40 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="display text-[18px] leading-snug text-deep">{s.claim}</p>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-baseline gap-3 mt-2 font-sans text-[12px] uppercase tracking-[0.22em] text-gold hover:text-gold-l transition-colors duration-700 ease-glide flex-wrap"
                >
                  {s.publication}
                  <span className="font-sans text-[10px] tracking-[0.32em] text-deep/40 normal-case truncate">{s.url}</span>
                  <span className="text-deep/40">↗</span>
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="font-sans text-[12px] leading-relaxed text-deep/55 mt-16 max-w-[60ch]">
          If anything on the live site is inaccurate, tell us and we&apos;ll
          fix it within 24 hours. The data is editable in a single file
          (<code className="text-gold">src/lib/content.ts</code>) — no
          codebase surgery required.
        </p>
      </div>
    </main>
  );
}
