import { Navbar } from '../components/Navbar';
import { Schedule } from '../components/Schedule';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function SchedulePage() {
  return (
    <div className="size-full min-h-screen bg-[#0a0015] overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Schedule />
      <Footer />
    </div>
  );
}
