import { Navbar } from '../components/Navbar';
import { Sponsors } from '../components/Sponsors';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function SponsorsPage() {
  return (
    <div className="size-full min-h-screen bg-[#0a0015] overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Sponsors />
      <Footer />
    </div>
  );
}
