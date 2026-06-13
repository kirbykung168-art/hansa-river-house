import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Palette — extended on the venue-audit pass:
        // Adds coral (railing), seagreen (mezzanine grids), copper (wordmark)
        // and vermillion (paper-fan red) so the page can speak the actual
        // visual language of the venue rather than a generic riverside.
        ivory:   '#F7F2E8',
        cream:   '#FDF9EF',
        paper:   '#F1E8D2',  // warmer paper / menu page
        gold:    '#B8924B',
        'gold-l':'#D6B779',
        copper:  '#A8612A',  // brand wordmark on menu pages
        coral:   '#C5683D',  // signature terrace railing
        'coral-l':'#D88660',
        vermillion: '#C53D2E', // red paper fans, lanterns
        seagreen:'#5C8C7A',  // mezzanine metal grids
        slate:   '#6C8A99',
        'slate-d':'#3F5560',
        deep:    '#1E2A30',
        blush:   '#E0C2C4',
        'blush-d':'#B8898E',
        wake:    'rgba(108,138,153,0.18)',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        accent:  ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        // brand: a geometric cap face used for the HANSA wordmark — Cormorant
        // SC stand-in (we already load Cormorant); CSS reuses with caps.
        brand:   ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans:    ['var(--font-inter-tight)', 'Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
        thai:    ['var(--font-noto-thai)', 'Noto Serif Thai', 'serif'],
      },
      letterSpacing: {
        ceremonial: '0.42em',
        wordmark:   '0.18em',
      },
      transitionTimingFunction: {
        glide: 'cubic-bezier(0.16, 0.84, 0.30, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
