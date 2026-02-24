import { motion } from 'motion/react';
import { Clock, MapPin } from 'lucide-react';
import { useState } from 'react';

interface ScheduleEvent {
  time: string;
  title: string;
  venue: string;
  type: 'technical' | 'cultural' | 'workshop' | 'annual';
}

interface DaySchedule {
  day: string;
  label: string;
  date: string;
  events: ScheduleEvent[];
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0);

  const schedule: DaySchedule[] = [
    {
      day: 'DAY 1',
      label: 'TECHNICAL SUMMIT',
      date: 'MARCH 31, 2026',
      events: [
        { time: '09:00 AM', title: 'REGISTRATION & WELCOME', venue: 'Main Auditorium', type: 'technical' },
        { time: '10:00 AM', title: 'TECH KEYNOTE SESSION', venue: 'Main Auditorium', type: 'technical' },
        { time: '11:00 AM', title: 'HACK4SDGs BEGINS', venue: 'CSE Block - Lab 301', type: 'technical' },
        { time: '12:00 PM', title: 'SAMBHASHA - Paper Presentation', venue: 'Seminar Hall A', type: 'technical' },
        { time: '02:00 PM', title: 'HACK NEXUS - Web3 Challenge', venue: 'Innovation Lab', type: 'technical' },
        { time: '03:00 PM', title: 'ASSISTIVE TECH MAKERS', venue: 'Design Lab', type: 'technical' },
        { time: '04:00 PM', title: 'BLIND UI/UX Challenge', venue: 'Design Studio', type: 'technical' },
        { time: '06:00 PM', title: 'TECH HUNT Begins', venue: 'Campus Wide', type: 'technical' },
        { time: '08:00 PM', title: 'NETWORKING SESSION', venue: 'Open Arena', type: 'technical' },
      ],
    },
    {
      day: 'DAY 2',
      label: 'CULTURAL HUB',
      date: 'APRIL 01, 2026',
      events: [
        { time: '09:00 AM', title: 'POTTERY WORKSHOP', venue: 'Workshop Area', type: 'workshop' },
        { time: '10:00 AM', title: 'RESIN ART WORKSHOP', venue: 'Craft Studio', type: 'workshop' },
        { time: '11:00 AM', title: 'TOTE BAG CUSTOMIZATION', venue: 'Art Room', type: 'workshop' },
        { time: '02:00 PM', title: 'CHITRAANG - Live Painting', venue: 'Art Gallery', type: 'cultural' },
        { time: '03:00 PM', title: 'THE POET\'S ARENA', venue: 'Amphitheater', type: 'cultural' },
        { time: '05:00 PM', title: 'RHYTHM - Beat Boxing', venue: 'Auditorium', type: 'cultural' },
        { time: '06:00 PM', title: 'THANDAV - Dance Competition', venue: 'Open Arena', type: 'cultural' },
        { time: '07:00 PM', title: 'SYMPHONY - Battle of Bands', venue: 'Main Stage', type: 'cultural' },
        { time: '09:00 PM', title: 'CULTURAL NIGHT', venue: 'Main Stage', type: 'cultural' },
      ],
    },
    {
      day: 'DAY 3',
      label: 'ANNUAL DAY',
      date: 'APRIL 02, 2026',
      events: [
        { time: '09:00 AM', title: 'HACK4SDGs - FINALS', venue: 'CSE Block - Lab 301', type: 'annual' },
        { time: '10:00 AM', title: 'CAP SPRAY PAINTING WORKSHOP', venue: 'Outdoor Workshop Zone', type: 'workshop' },
        { time: '11:00 AM', title: 'TECH HUNT - FINALS', venue: 'Campus Wide', type: 'annual' },
        { time: '02:00 PM', title: 'ANNUAL DAY INAUGURATION', venue: 'Main Auditorium', type: 'annual' },
        { time: '03:00 PM', title: 'CULTURAL PERFORMANCES', venue: 'Main Auditorium', type: 'annual' },
        { time: '04:00 PM', title: 'GUEST SPEAKER SESSION', venue: 'Main Auditorium', type: 'annual' },
        { time: '05:00 PM', title: 'PRIZE DISTRIBUTION CEREMONY', venue: 'Main Auditorium', type: 'annual' },
        { time: '06:30 PM', title: 'VALEDICTORY CEREMONY', venue: 'Main Auditorium', type: 'annual' },
        { time: '08:00 PM', title: 'GRAND FINALE - DJ NIGHT', venue: 'Main Stage', type: 'annual' },
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'technical':
        return '#ff00ff';
      case 'cultural':
        return '#ff1493';
      case 'workshop':
        return '#00ffff';
      case 'annual':
        return '#ff00ff';
      default:
        return '#ff00ff';
    }
  };

  const getDayColor = (index: number) => {
    switch (index) {
      case 0:
        return { bg: '#ff00ff', border: 'neon-border-purple', text: '#ff00ff' };
      case 1:
        return { bg: '#ff1493', border: 'neon-border-pink', text: '#ff1493' };
      case 2:
        return { bg: '#00ffff', border: 'neon-border-blue', text: '#00ffff' };
      default:
        return { bg: '#ff00ff', border: 'neon-border-purple', text: '#ff00ff' };
    }
  };

  return (
    <section id="schedule" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a0015] via-[#1a0033] to-[#0a0015] overflow-hidden">
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
          <h2 className="font-['Press_Start_2P'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl neon-text-blue mb-4 sm:mb-6">
            TIMELINE
          </h2>
          <p className="font-['Rajdhani'] text-base sm:text-lg md:text-xl text-[#ff1493] max-w-2xl mx-auto px-4">
            3 Days • 3 Experiences • Infinite Memories
          </p>
        </motion.div>

        {/* Day Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16"
        >
          {schedule.map((day, index) => {
            const colors = getDayColor(index);
            return (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`flex-1 ${colors.border} ${
                  activeDay === index ? 'bg-black/80' : 'bg-black/40'
                } p-4 sm:p-6 pixel-corners transition-all duration-300 hover:bg-black/60 group`}
              >
                <div className="text-center">
                  <div
                    className="font-['Press_Start_2P'] text-[10px] sm:text-xs mb-2 sm:mb-3"
                    style={{
                      color: colors.text,
                      textShadow: activeDay === index ? `0 0 10px ${colors.bg}` : 'none',
                    }}
                  >
                    {day.day}
                  </div>
                  <div
                    className="font-['Orbitron'] text-sm sm:text-base md:text-lg mb-2"
                    style={{
                      color: activeDay === index ? colors.text : '#888',
                      textShadow: activeDay === index ? `0 0 15px ${colors.bg}` : 'none',
                    }}
                  >
                    {day.label}
                  </div>
                  <div className="font-['Rajdhani'] text-xs sm:text-sm text-gray-400">
                    {day.date}
                  </div>
                  
                  {/* Active Indicator */}
                  {activeDay === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="h-1 mt-3 sm:mt-4 rounded-full"
                      style={{ backgroundColor: colors.bg, boxShadow: `0 0 10px ${colors.bg}` }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Schedule Content */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 sm:space-y-6"
        >
          {schedule[activeDay].events.map((event, eventIndex) => (
            <motion.div
              key={eventIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: eventIndex * 0.05 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 group"
            >
              {/* Time */}
              <div className="flex-shrink-0">
                <div
                  className={`${getDayColor(activeDay).border} bg-black/60 px-4 sm:px-6 py-2 sm:py-3 pixel-corners min-w-[120px] sm:min-w-[140px]`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" style={{ color: getDayColor(activeDay).text }} />
                    <span className="font-['Orbitron'] text-xs sm:text-sm" style={{ color: getDayColor(activeDay).text }}>
                      {event.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              <div
                className="hidden sm:block flex-shrink-0 w-12 md:w-16 h-0.5 group-hover:w-20 transition-all duration-300"
                style={{
                  background: `linear-gradient(90deg, ${getDayColor(activeDay).bg}, ${getTypeColor(event.type)})`,
                  boxShadow: `0 0 5px ${getDayColor(activeDay).bg}`,
                }}
              ></div>

              {/* Event Details */}
              <div className="flex-1 neon-border-blue bg-black/40 p-4 sm:p-6 pixel-corners hover:bg-black/60 transition-all duration-300 w-full group-hover:scale-[1.02]">
                <h4
                  className="font-['Orbitron'] text-base sm:text-lg md:text-xl mb-2"
                  style={{
                    color: getTypeColor(event.type),
                    textShadow: `0 0 10px ${getTypeColor(event.type)}`,
                  }}
                >
                  {event.title}
                </h4>
                <div className="flex items-center gap-2 text-gray-300 font-['Rajdhani'] text-sm sm:text-base">
                  <MapPin className="w-4 h-4" />
                  <span>{event.venue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
