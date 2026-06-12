import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Occasions from '@/components/Occasions';
import River from '@/components/River';
import Reserve from '@/components/Reserve';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

/**
 * Hansa River House — single-page editorial site.
 *
 * Section order (swan-glide pacing):
 *   Hero · Story · Menu · Gallery · Occasions · River · Reserve ·
 *   Visit · Footer
 *
 * Gallery sits between the menu and occasions so the verified press
 * photos do the heavy lifting (visual evidence) before the planner
 * decision in Occasions.
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Story />
      <Menu />
      <Gallery />
      <Occasions />
      <River />
      <Reserve />
      <Visit />
      <Footer />
    </>
  );
}
