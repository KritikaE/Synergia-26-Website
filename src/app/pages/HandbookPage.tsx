import { Navbar } from '../components/Navbar';
import { Handbook } from '../components/Handbook';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function HandbookPage() {
  return (
    <div className="size-full min-h-screen bg-[#0a0015] overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Handbook />
      <Footer />
    </div>
  );
}
