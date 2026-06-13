import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Mark from '@/components/Mark';
import Story from '@/components/Story';
import Floors from '@/components/Floors';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Across from '@/components/Across';
import Occasions from '@/components/Occasions';
import River from '@/components/River';
import Reserve from '@/components/Reserve';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

/**
 * Hansa River House — single-page editorial site.
 *
 * Section order (audit pass June 2026):
 *
 *   Hero       — sunset drink at the coral railing
 *   Mark       — brand identity strip (wordmark wall + press)
 *   Story      — the manifesto + menu-cover inset
 *   Floors     — two-storey daydream (ground / upper / river)
 *   Menu       — three signatures + From the menu book + drinks
 *   Gallery    — 17 frames in 3 chapters (House / Table / River)
 *   Across     — the across-the-water cartographic moment
 *   Occasions  — the upper-floor + house registry ledger
 *   River      — swan-glide with pagoda silhouette
 *   Reserve    — Tonight's table ledger
 *   Visit      — practical + small Song Wat map glyph
 *   Footer     — wordmark lock-up + socials
 *
 * Across sits after Gallery so the cartographic moment lands on the
 * back of the page's visual chapter; Occasions follows so the planner
 * decision happens with the venue's full identity already established.
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Mark />
      <Story />
      <Floors />
      <Menu />
      <Gallery />
      <Across />
      <Occasions />
      <River />
      <Reserve />
      <Visit />
      <Footer />
    </>
  );
}
