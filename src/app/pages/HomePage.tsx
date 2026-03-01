import { Navbar } from '../components/Navbar';
import HeroMosaic from '../components/HeroMosaic';
import { VideoGrid } from '../components/VideoGrid';
import { AboutSynergia } from '../components/AboutSynergia';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="size-full min-h-screen bg-[#0a0015] overflow-x-hidden">
      <Navbar />
      <HeroMosaic />
      <VideoGrid />
      <AboutSynergia />
      <Footer />
    </div>
  );
}