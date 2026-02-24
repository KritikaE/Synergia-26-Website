import { Navbar } from '../components/Navbar';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function ContactPage() {
  return (
    <div className="size-full min-h-screen bg-[#0a0015] overflow-x-hidden">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
