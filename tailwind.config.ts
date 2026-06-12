import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Palette: swan ivory, soft gold, river slate-blue, restrained blush.
        // Deliberate opposite of Naam's dusk — light, airy, ceremonial.
        ivory:   '#F7F2E8',  // signature swan/paper
        cream:   '#FDF9EF',  // brighter accent
        gold:    '#B8924B',  // soft brass/champagne
        'gold-l':'#D6B779',
        slate:   '#6C8A99',  // river slate-blue
        'slate-d':'#3F5560',
        deep:    '#1E2A30',  // body text
        blush:   '#E0C2C4',  // celebration blush, restrained
        'blush-d':'#B8898E',
        wake:    'rgba(108,138,153,0.18)',  // river wake/ripple wash
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        accent:  ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans:    ['var(--font-inter-tight)', 'Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
        thai:    ['var(--font-noto-thai)', 'Noto Serif Thai', 'serif'],
      },
      letterSpacing: {
        ceremonial: '0.42em',
      },
      transitionTimingFunction: {
        // Swan-glide: long ease that never snaps. Defined here so every
        // reveal across the page hits the same swan-like motion curve.
        glide: 'cubic-bezier(0.16, 0.84, 0.30, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
