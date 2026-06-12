import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Inter_Tight, Noto_Serif_Thai } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { BRAND, COPY } from '@/lib/content';
import { LanguageProvider } from '@/components/LanguageProvider';
import HtmlLangSync from '@/components/HtmlLangSync';

const playfair = Playfair_Display({
  subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'],
  variable: '--font-playfair', display: 'swap',
});
const cormorant = Cormorant_Garamond({
  subsets: ['latin'], weight: ['300', '400', '500'], style: ['italic'],
  variable: '--font-cormorant', display: 'swap',
});
const interTight = Inter_Tight({
  subsets: ['latin'], weight: ['300', '400', '500'],
  variable: '--font-inter-tight', display: 'swap',
});
const notoThai = Noto_Serif_Thai({
  subsets: ['thai'], weight: ['400', '500', '600'],
  variable: '--font-noto-thai', display: 'swap',
});

const SITE = `https://${BRAND.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Hansa River House — Riverfront on Song Wat, Bangkok',
  description:
    'A graceful two-storey wooden house on Song Wat, terrace over the Chao Phraya, table set for celebrations. Reserve or enquire about private occasions.',
  keywords: [
    'Hansa River House', 'หงส์', 'Song Wat restaurant', 'Bangkok riverfront',
    'private dining Bangkok', 'celebration venue', 'Chao Phraya restaurant',
    'long-tail boats', 'Samphanthawong', 'Thai dining occasions',
  ],
  openGraph: {
    title: 'Hansa River House — Riverfront on Song Wat, Bangkok',
    description: 'A graceful two-storey wooden house on Song Wat. Table set for celebrations.',
    type: 'website', siteName: 'Hansa River House', url: SITE,
    images: ['/og.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/og.jpg'] },
  alternates: { canonical: SITE },
};

const RESTAURANT_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: BRAND.name,
  alternateName: 'หงส์ เรือนริมน้ำ',
  url: SITE,
  image: `${SITE}/og.jpg`,
  telephone: BRAND.phoneTel,
  email: `mailto:${BRAND.email}`,
  servesCuisine: ['Thai', 'Homestyle Thai'],
  priceRange: '฿฿',
  acceptsReservations: true,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BRAND.addressLine1,
    addressLocality: 'Samphanthawong',
    addressRegion: 'Bangkok',
    postalCode: '10100',
    addressCountry: 'TH',
  },
  geo: { '@type': 'GeoCoordinates', latitude: BRAND.lat, longitude: BRAND.lng },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '11:30',
      closes: '20:00',
    },
  ],
  sameAs: [BRAND.instagramUrl, BRAND.facebookUrl, BRAND.linktreeUrl],
};

const MENU_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Hansa River House · Signatures',
  inLanguage: 'en-TH',
  hasMenuSection: [{
    '@type': 'MenuSection',
    name: 'Signatures',
    hasMenuItem: COPY.menu.signatures.map((s) => ({
      '@type': 'MenuItem',
      name: s.name.en,
      description: s.desc.en,
    })),
  }],
};

const WEBSITE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND.name,
  url: SITE,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      translate="no"
      className={`${playfair.variable} ${cormorant.variable} ${interTight.variable} ${notoThai.variable}`}
    >
      <head>
        {/* Prevent Chrome auto-translate from mangling the curated Thai copy. */}
        <meta name="google" content="notranslate" />
        <meta name="robots" content="notranslate" />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(RESTAURANT_JSONLD) }} />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(MENU_JSONLD) }} />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }} />
      </head>
      <body className="bg-ivory text-deep antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-deep focus:text-ivory focus:px-4 focus:py-3 focus:text-[11px] focus:tracking-[0.28em] focus:uppercase"
        >
          Skip to content
        </a>
        <LanguageProvider>
          <HtmlLangSync />
          <main id="main">{children}</main>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
