import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Stalls, StallData } from '../components/Stalls';
import { StallDetailsModal } from '../components/StallDetailsModal';
import { Footer } from '../components/Footer';

export function StallsPage() {
  const [selectedStall, setSelectedStall] = useState<StallData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStallClick = (stall: StallData) => {
    setSelectedStall(stall);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedStall(null), 300);
  };

  return (
    <div className="size-full min-h-screen bg-[#0a0015] overflow-x-hidden">
      <Navbar />
      <Stalls onStallClick={handleStallClick} />
      <Footer />
      
      <StallDetailsModal
        stall={selectedStall}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
