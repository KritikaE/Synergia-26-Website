import { Navbar } from '../components/Navbar';
import HeroMosaic from '../components/HeroMosaic';
import { AboutSynergia } from '../components/AboutSynergia';
import { Schedule } from '../components/Schedule';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="size-full min-h-screen bg-[#0a0015] overflow-x-hidden">

      <Navbar />

      <HeroMosaic />

      <AboutSynergia />

      {/* ✅ NEW SCHEDULE SECTION */}
      <Schedule />

      <Footer />

    </div>
  );
}
