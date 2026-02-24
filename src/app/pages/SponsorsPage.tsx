import { Navbar } from '../components/Navbar';
import { Sponsors } from '../components/Sponsors';
import { Footer } from '../components/Footer';

export function SponsorsPage() {
  return (
    <div className="size-full min-h-screen bg-[#0a0015] overflow-x-hidden">
      <Navbar />
      <Sponsors />
      <Footer />
    </div>
  );
}
