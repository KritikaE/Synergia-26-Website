import { Navbar } from '../components/Navbar';
import { Profile } from '../components/Profile';
import { Footer } from '../components/Footer';

export function ProfilePage() {
  return (
    <div className="size-full min-h-screen bg-[#0a0015] overflow-x-hidden">
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}
