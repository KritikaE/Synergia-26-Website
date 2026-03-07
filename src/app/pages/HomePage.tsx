import { useState } from "react";
import { Navbar } from '../components/Navbar';
import { HeroContent } from '../components/HeroContent';
import HeroMosaic from '../components/HeroMosaic';
import { VideoGrid } from '../components/VideoGrid';
import { AboutSynergia } from '../components/AboutSynergia';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import butterflyVideo from "../../assets/butterfly.mp4";

export function HomePage() {

  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <video
          autoPlay
          muted
          playsInline
          onEnded={() => setShowIntro(false)}
          className="w-full h-full object-cover"
        >
          <source src={butterflyVideo} type="video/mp4" />
        </video>
      </div>
    );
  }

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
