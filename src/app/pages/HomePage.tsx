import { Navbar } from '../components/Navbar';
import { HeroContent } from '../components/HeroContent';
import HeroMosaic from '../components/HeroMosaic';
import { VideoGrid } from '../components/VideoGrid';
import { AboutSynergia } from '../components/AboutSynergia';
import { Schedule } from '../components/Schedule';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function HomePage() {
  return (
    <div className="size-full min-h-screen bg-[#0a0015] overflow-x-hidden">
Updated upstream
      <ScrollToTop />
      <Navbar />
      <HeroContent />
      <AboutSynergia />
      <VideoGrid />
      <HeroMosaic />

      <Navbar />

      <HeroMosaic />


Stashed changes
      <Footer />

    </div>
  );
}
