import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Occasions from '@/components/Occasions';
import River from '@/components/River';
import Reserve from '@/components/Reserve';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

/**
 * Hansa River House — single-page editorial site.
 *
 * Section order, swan-glide pacing:
 *   Hero · Story · Menu · Occasions (high-value) · River (breath) ·
 *   Reserve · Visit · Footer
 *
 * Occasions is intentionally placed BEFORE the consumer reservation
 * flow so corporate / event planners see the venue offer before being
 * funneled to a standard table reservation.
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Story />
      <Menu />
      <Occasions />
      <River />
      <Reserve />
      <Visit />
      <Footer />
    </>
  );
}
