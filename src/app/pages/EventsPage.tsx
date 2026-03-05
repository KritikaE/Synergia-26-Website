import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Events, EventData } from '../components/Events';
import { EventDetailsModal } from '../components/EventDetailsModal';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event: EventData) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  const handleRegister = (eventId: string) => {
    console.log('Registered for:', eventId);
  };

  return (
    <div className="size-full min-h-screen bg-[#0a0015] overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Events onEventClick={handleEventClick} />
      <Footer />
      
      <EventDetailsModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onRegister={handleRegister}
      />
    </div>
  );
}
