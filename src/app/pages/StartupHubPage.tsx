import { Navbar } from '../components/Navbar';
import { StartupHub } from '../components/StartupHub';
import { Footer } from '../components/Footer';

export function StartupHubPage() {
  return (
    <div className="size-full min-h-screen bg-[#0a0015] overflow-x-hidden">
      <Navbar />
      <StartupHub />
      <Footer />
    </div>
  );
}
