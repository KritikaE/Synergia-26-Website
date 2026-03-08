import { Navbar } from '../components/Navbar';
import { HeroContent } from '../components/HeroContent';
import HeroMosaic from '../components/HeroMosaic';
import { VideoGrid } from '../components/VideoGrid';
import { AboutSynergia } from '../components/AboutSynergia';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function HomePage() {
  return (
    <div className="size-full min-h-screen bg-[#0a0015] overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <HeroContent />
      <AboutSynergia />
      <VideoGrid />
      <HeroMosaic />
      <Footer />
    </div>
  );
}
