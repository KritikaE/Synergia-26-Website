import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AboutSynergia } from '../components/AboutSynergia';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="size-full min-h-screen bg-[#0a0015] overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSynergia />
      <Footer />
    </div>
  );
}