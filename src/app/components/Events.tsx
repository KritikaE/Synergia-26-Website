import { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Music, Lightbulb, Palette, Mic, Brush } from 'lucide-react';
import buildspherePoster from "../../assets/events/buildsphere.jpeg";
import chipeainewgenPoster from "../../assets/events/chipeainewgen.jpeg";
import hardwarehustlePoster from "../../assets/events/hardwarehustle.jpeg";
import raconteurPoster from "../../assets/events/raconteur.jpeg";
import trashtotechPoster from "../../assets/events/trashtotech.jpeg";
import innoventurePoster from "../../assets/events/innoventure.jpeg";
import algohack10Poster from "../../assets/events/algohack10.jpeg";
import embedxPoster from "../../assets/events/embedx.jpeg";
import codeescape from "/src/assets/Event_posters.png/Code&Escape.png";
import Chaos2Clarity from "/src/assets/Event_posters.png/Chaos2Clarity.png";


import SvarautsavPoster from "../../assets/CulturalEventsPosters/SvarautsavPoster.jpeg";
import PicitPoster from "../../assets/CulturalEventsPosters/PicitPoster.jpeg";
import ChitraangPoster from "../../assets/CulturalEventsPosters/ChitraangPoster.jpeg";
import BattleOfBandsPoster from "../../assets/CulturalEventsPosters/BattleOfBandsPoster.jpeg";
import ThandavClassical from "/src/assets/CulturalEventsPosters/Thandav (Classical).png";
import ThandavWestern from "/src/assets/CulturalEventsPosters/Thandav (Western).png";

import Pottery from "/src/assets/Event_posters.png/Pottery Workshop.png";
import Painting from "/src/assets/Event_posters.png/Painting.png";
import CandleMaking from "/src/assets/Event_posters.png/Candle Making Workshop.png";
import CandleHolder from "/src/assets/Event_posters.png/CandleHolderDecorationWorkshop.png";

export interface EventData {
  id: string;
  title: string;
  category: 'Technical' | 'Cultural' | 'Workshop';
  description: string;
  icon: any;
  color: string;
  borderColor: string;
  poster?: string;
  fullDescription?: string;
  rules?: string[];
  eligibility?: string;
  dateTime?: string;
  venue?: string;
  registrationLink?: string;
}

interface EventsProps {
  onEventClick?: (event: EventData) => void;
}

export function Events({ onEventClick }: EventsProps) {
  const events: EventData[] = [
    // Technical Day Events
    {
      id: 'hardwarehustle',
      title: 'Hardware Hustle',
      category: 'Technical',
      description: 'Hardware design and innovation challenge.',
      poster: hardwarehustlePoster,
      icon: Code,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      registrationLink: 'https://forms.gle/oDGD8N9dAjZVB2RA9',
    },
    {
      id: 'chaos2clarity',
      title: 'Chaos2Clarity',
      category: 'Technical',
      description: 'Problem-solving and debugging competition.',
      icon: Code,
      poster: Chaos2Clarity,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      registrationLink: 'https://forms.gle/LKyhVRJUQ9hbp6XU7',
    },
    {
      id: 'trash2tech',
      title: 'Trash2Tech',
      category: 'Technical',
      description: 'Upcycling and sustainable technology innovation.',
      poster: trashtotechPoster,
      icon: Lightbulb,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      registrationLink: 'https://forms.gle/GbPWW8ReePoYpTV78',
    },
    {
      id: 'embedx',
      title: 'EmbedX',
      category: 'Technical',
      description: 'Embedded systems and IoT challenge.',
      poster: embedxPoster,
      icon: Code,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      registrationLink: 'https://forms.gle/s6cp5S9AwM111kSq6',
    },
    {
      id: 'raconteur',
      title: 'Raconteur',
      category: 'Technical',
      description: 'Technical storytelling and presentation competition.',
      poster: raconteurPoster,
      icon: Mic,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      registrationLink: 'https://forms.gle/BjiBEHKRv5RAEWUy5',
    },
    {
      id: 'chipai_newgen',
      title: 'ChipAI_NewGen',
      category: 'Technical',
      description: 'AI and chip design innovation challenge.',
      poster: chipeainewgenPoster,
      icon: Code,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      registrationLink: 'https://forms.gle/LAay1VpCLffmufX38',
    },
    {
      id: 'innoventure',
      title: 'Innoventure',
      category: 'Technical',
      description: 'Startup pitch and innovation showcase.',
      poster: innoventurePoster,
      icon: Lightbulb,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      registrationLink: 'https://forms.gle/GZV35YcXwTcA3djx9',
    },
    {
      id: 'codeescape',
      title: 'Code & Escape',
      category: 'Technical',
      description: 'Coding challenges in an escape room format.',
      icon: Code,
      poster: codeescape,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      registrationLink: 'https://forms.gle/X8otii5Q55TiXbcH9',
    },
    {
      id: 'algohack',
      title: 'AlgoHack 1.O',
      category: 'Technical',
      description: 'Algorithm design and competitive programming.',
      poster: algohack10Poster,
      icon: Code,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      registrationLink: 'https://forms.gle/DNuNhiGiDgzBaHbV7',
    },
    {
      id: 'buildsphere',
      title: 'BuildSphere',
      category: 'Technical',
      description: 'Full-stack development and project building competition.',
      poster: buildspherePoster,
      icon: Code,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      registrationLink: 'https://forms.gle/Ds21kQ1tbhg92j1M9',
    },

    // Cultural Day Events
    {
      id: 'battleofbands',
      title: 'Battle of Bands',
      category: 'Cultural',
      description: 'Rock the stage with your band!',
      icon: Music,
      poster: BattleOfBandsPoster, 
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      registrationLink: 'https://forms.gle/hpuRoCpeKiTjQPZJ7',
    },
    {
      id: 'svarautsav',
      title: 'Svarautsav',
      category: 'Cultural',
      description: 'Classical and contemporary music competition.',
      icon: Music,
      poster: SvarautsavPoster,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      registrationLink: 'https://forms.gle/dtoQCPyMAsHo9cL87',
    },
    {
      id: 'thandavclassical',
      title: 'Thandav Classical',
      category: 'Cultural',
      description: 'Solo and group dance competition.',
      icon: Music,
      poster: ThandavClassical,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      registrationLink: 'https://forms.gle/7PPe1gnC2L3ZQ7KN6',
    },
    {
      id: 'thandavwestern',
      title: 'Thandav Western',
      category: 'Cultural',
      description: 'Solo and group dance competition.',
      icon: Music,
      poster: ThandavWestern,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      registrationLink: 'https://forms.gle/QDdxfpqFEnLKA32Q9',
    },
    {
      id: 'chitraang',
      title: 'Chitraang',
      category: 'Cultural',
      description: 'Live painting and art competition.',
      icon: Palette,
      poster: ChitraangPoster,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      registrationLink: 'https://forms.gle/V9PfEQoUAFTjdQZD9',
    },
    {
      id: 'picit',
      title: 'PicIt',
      category: 'Cultural',
      description: 'Photography and visual storytelling competition.',
      icon: Palette,
      poster: PicitPoster,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      registrationLink: 'https://forms.gle/v4hRLXELzDvEKKBJ9',
    },

    // Workshops
    {
      id: 'pottery',
      title: 'Pottery',
      category: 'Workshop',
      description: 'Hands-on pottery making workshop.',
      icon: Brush,
      poster: Pottery,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      registrationLink: 'https://forms.gle/dug58hULS7b2ewa69',
    },
    {
      id: 'candlemaking',
      title: 'Candle Making',
      category: 'Workshop',
      description: 'Create beautiful handmade candles.',
      icon: Brush,
      poster: CandleMaking,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      registrationLink: 'https://forms.gle/woSomoBVPuMZHe6Z8',
    },
    {
      id: 'fabricpainting',
      title: 'Fabric Painting',
      category: 'Workshop',
      description: 'Learn fabric painting techniques.',
      icon: Palette,
      poster: Painting,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      registrationLink: 'https://forms.gle/n4k1sCTFgzDGAKST7',
    },
    {
      id: 'candleholder',
      title: 'Candle Holder Decoration',
      category: 'Workshop',
      description: 'Design and decorate custom candle holders.',
      icon: Brush,
      poster: CandleHolder,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      registrationLink: 'https://forms.gle/tQyNz4jf4TthyUZcA',
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = ['Technical', 'Cultural', 'Workshop'] as const;
  const eventsByCategory = categories.map(cat => ({
    category: cat,
    events: events.filter(e => e.category === cat)
  }));

  const getCategoryColor = (index: number) => {
    switch (index) {
      case 0: return { bg: '#00ffff', text: '#00ffff' };
      case 1: return { bg: '#ff1493', text: '#ff1493' };
      case 2: return { bg: '#34d399', text: '#34d399' };
      default: return { bg: '#00ffff', text: '#00ffff' };
    }
  };

  return (
    <section id="events" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0a0015] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="arcade-grid absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="font-['Press_Start_2P'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6" style={{ color: '#ff1493', textShadow: '0 0 15px rgba(255, 20, 147, 0.5)' }}>
            EVENTS
          </h2>
          <p className="font-['Rajdhani'] text-base sm:text-lg md:text-xl text-[#00ffff] max-w-2xl mx-auto px-4">
            Compete • Create • Celebrate
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16 justify-center items-center"
        >
          {eventsByCategory.map((cat, index) => {
            const colors = getCategoryColor(index);
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`w-full sm:flex-1 max-w-xs ${
                  activeCategory === index ? 'bg-black/80' : 'bg-black/40'
                } py-8 sm:py-10 px-6 pixel-corners transition-all duration-300 hover:bg-black/60 group border-2 flex items-center justify-center relative`}
                style={{ borderColor: colors.bg }}
              >
                <div
                  className="font-['Press_Start_2P'] text-xl sm:text-2xl md:text-3xl"
                  style={{
                    color: colors.text,
                    textShadow: activeCategory === index ? `0 0 10px ${colors.bg}` : 'none',
                  }}
                >
                  {cat.category}
                </div>
                {activeCategory === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-2 left-4 right-4 h-1 rounded-full"
                    style={{ backgroundColor: colors.bg, boxShadow: `0 0 10px ${colors.bg}` }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Active Category Events */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {eventsByCategory[activeCategory].events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="bg-black/60 backdrop-blur-sm p-6 sm:p-8 pixel-corners group cursor-pointer transition-all duration-300 hover:bg-black/80 border-2"
                style={{ borderColor: event.color + '60' }}
                onClick={() => onEventClick?.(event)}
              >
                <div className="mb-4 sm:mb-6 w-full h-64 overflow-hidden pixel-corners bg-black">
                    <img
                        src={event.poster}
                        alt={event.title}
                        className="w-full h-full object-contain transition-transform duration-300"
                    />
                </div>

                <h3
                  className="font-['Orbitron'] text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4"
                  style={{ color: event.color }}
                >
                  {event.title}
                </h3>

                <p className="font-['Rajdhani'] text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                  {event.description}
                </p>

                <div className="flex flex-col gap-2">
                  <button
                    className="neon-button font-['Orbitron'] text-xs sm:text-sm px-4 sm:px-6 py-2 border-2 pixel-corners hover:scale-105 transition-all duration-300"
                    style={{
                      color: event.color,
                      borderColor: event.color,
                    }}
                  >
                    VIEW DETAILS
                  </button>
                  
                  {event.registrationLink && (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-button font-['Orbitron'] text-xs sm:text-sm px-4 sm:px-6 py-2 border-2 pixel-corners hover:scale-105 transition-all duration-300 text-center"
                      style={{
                        color: '#00ff00',
                        borderColor: '#00ff00',
                        textShadow: '0 0 5px #00ff00',
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      REGISTER NOW
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
