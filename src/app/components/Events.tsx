import { motion } from 'motion/react';
import { Code, Music, Lightbulb, Palette, Mic, Brush } from 'lucide-react';

export interface EventData {
  id: string;
  title: string;
  category: 'Technical' | 'Cultural' | 'Workshop';
  description: string;
  icon: any;
  color: string;
  borderColor: string;
  fullDescription?: string;
  rules?: string[];
  eligibility?: string;
  dateTime?: string;
  venue?: string;
}

interface EventsProps {
  onEventClick?: (event: EventData) => void;
}

export function Events({ onEventClick }: EventsProps) {
  const events: EventData[] = [
    // Technical Events
    {
      id: 'hack4sdgs',
      title: 'HACK4SDGs',
      category: 'Technical',
      description: '24-hour hackathon focused on UN Sustainable Development Goals.',
      icon: Code,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Build innovative tech solutions addressing UN Sustainable Development Goals. Teams will develop projects that create real-world impact.',
      rules: [
        'Team size: 2-4 members',
        '24-hour development time',
        'Project must align with SDG themes',
        'Open source encouraged',
        'All code must be original',
      ],
      eligibility: 'Open to all college students',
      dateTime: 'March 31, 2026 - 10:00 AM to April 1, 2026 - 10:00 AM',
      venue: 'CSE Block - Lab 301',
    },
    {
      id: 'sambhasha',
      title: 'SAMBHASHA',
      category: 'Technical',
      description: 'Technical paper presentation competition on emerging technologies.',
      icon: Code,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Present your research and ideas on cutting-edge technology topics. Showcase your technical expertise and communication skills.',
      rules: [
        'Individual or team of 2',
        '15-minute presentation + 5-minute Q&A',
        'Original research required',
        'PPT/PDF format accepted',
        'Judged on content, delivery, and innovation',
      ],
      eligibility: 'Open to UG and PG students',
      dateTime: 'April 1, 2026 - 2:00 PM',
      venue: 'Seminar Hall A',
    },
    {
      id: 'hacknexus',
      title: 'HACK NEXUS',
      category: 'Technical',
      description: 'Web3 and blockchain development challenge.',
      icon: Code,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Dive into the decentralized future. Build Web3 applications, smart contracts, and blockchain solutions.',
      rules: [
        'Team size: 1-3 members',
        '12-hour sprint',
        'Must use blockchain technology',
        'Deploy to testnet',
        'Demo required',
      ],
      eligibility: 'Students with basic blockchain knowledge',
      dateTime: 'April 1, 2026 - 9:00 AM to 9:00 PM',
      venue: 'Innovation Lab',
    },
    {
      id: 'techhunt',
      title: 'TECH HUNT',
      category: 'Technical',
      description: 'Campus-wide technical treasure hunt with coding challenges.',
      icon: Code,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Solve technical riddles, crack codes, and navigate through campus to find hidden clues. A perfect blend of logic, coding, and adventure.',
      rules: [
        'Team of 2-3 members',
        'Solve puzzles to get next location',
        'Coding challenges at each checkpoint',
        'Time-based scoring',
        'No external help allowed',
      ],
      eligibility: 'All students',
      dateTime: 'April 2, 2026 - 11:00 AM',
      venue: 'Campus Wide',
    },
    {
      id: 'assistivetech',
      title: 'ASSISTIVE TECH MAKERS',
      category: 'Technical',
      description: 'Build technology solutions for accessibility and inclusion.',
      icon: Lightbulb,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Create assistive technology that empowers people with disabilities. Focus on real-world impact and accessibility.',
      rules: [
        'Team size: 2-4 members',
        'Prototype or working demo required',
        'Focus on accessibility',
        'User-centered design approach',
        'Judged on impact and feasibility',
      ],
      eligibility: 'All engineering students',
      dateTime: 'March 31-April 1, 2026',
      venue: 'Design Lab',
    },
    {
      id: 'blinduiux',
      title: 'BLIND UI/UX',
      category: 'Technical',
      description: 'Design interfaces without seeing them - test your UX intuition!',
      icon: Lightbulb,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Design user interfaces based solely on descriptions and user needs. Experience design from a different perspective.',
      rules: [
        'Individual participation',
        'Design blindfolded or without visual feedback',
        'Time limit: 1 hour',
        'Use provided design tools',
        'Judged on usability and creativity',
      ],
      eligibility: 'Students interested in UI/UX',
      dateTime: 'April 2, 2026 - 3:00 PM',
      venue: 'Design Studio',
    },

    // Cultural Events
    {
      id: 'thandav',
      title: 'THANDAV',
      category: 'Cultural',
      description: 'Solo and group dance competition. Show your moves!',
      icon: Music,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Express yourself through dance. Solo and group categories available. All dance forms welcome.',
      rules: [
        'Solo: 1 participant, Group: 5-15 members',
        'Performance time: 5-8 minutes',
        'All dance forms allowed',
        'Bring your own music (USB/aux)',
        'Judged on choreography, sync, expression',
      ],
      eligibility: 'All students',
      dateTime: 'April 1, 2026 - 6:00 PM',
      venue: 'Open Arena',
    },
    {
      id: 'chitraang',
      title: 'CHITRAANG',
      category: 'Cultural',
      description: 'Live painting and art competition. Unleash your creativity!',
      icon: Palette,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Create stunning artwork on the spot. Theme-based painting competition.',
      rules: [
        'Individual participation',
        'Theme revealed on spot',
        'Time limit: 2 hours',
        'Canvas and basic materials provided',
        'Bring your own specialty tools',
      ],
      eligibility: 'All art enthusiasts',
      dateTime: 'March 31, 2026 - 2:00 PM',
      venue: 'Art Gallery',
    },
    {
      id: 'symphony',
      title: 'SYMPHONY',
      category: 'Cultural',
      description: 'Battle of the bands! Rock the stage with your music.',
      icon: Music,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Form your band and compete against the best. Original compositions and covers both accepted.',
      rules: [
        'Band size: 3-7 members',
        'Performance time: 15 minutes',
        'Sound check 30 minutes before',
        'Basic equipment provided',
        'Mix of original and covers allowed',
      ],
      eligibility: 'College bands',
      dateTime: 'April 1, 2026 - 7:00 PM',
      venue: 'Main Stage',
    },
    {
      id: 'rhythm',
      title: 'RHYTHM',
      category: 'Cultural',
      description: 'Beat boxing and percussion performance competition.',
      icon: Mic,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Showcase your rhythmic talents. Beat boxing, percussion, and vocal percussion categories.',
      rules: [
        'Solo or duo',
        'Performance time: 3-5 minutes',
        'Mic provided, no backing track',
        'All vocal percussion styles allowed',
        'Judged on complexity and creativity',
      ],
      eligibility: 'All students',
      dateTime: 'April 2, 2026 - 5:00 PM',
      venue: 'Auditorium',
    },
    {
      id: 'poetsarena',
      title: "THE POET'S ARENA",
      category: 'Cultural',
      description: 'Poetry slam and spoken word performance battle.',
      icon: Mic,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Express through words. Poetry, shayari, and spoken word performances. English, Hindi, Telugu, or Urdu.',
      rules: [
        'Individual participation',
        'Time limit: 3 minutes',
        'Original compositions only',
        'Any language allowed',
        'Props not allowed',
      ],
      eligibility: 'All poetry lovers',
      dateTime: 'April 2, 2026 - 4:00 PM',
      venue: 'Amphitheater',
    },

    // Workshop Events
    {
      id: 'pottery',
      title: 'POTTERY',
      category: 'Workshop',
      description: 'Hands-on pottery making workshop. Create your own ceramic art.',
      icon: Brush,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Learn traditional pottery techniques from expert artisans. Create your own ceramic pieces to take home.',
      rules: [
        'Limited to 30 participants per session',
        'All materials provided',
        'Wear comfortable clothing',
        'Session duration: 2 hours',
        'Take home your creation',
      ],
      eligibility: 'All participants (registration required)',
      dateTime: 'March 31, 2026 - 11:00 AM & 3:00 PM',
      venue: 'Workshop Area',
    },
    {
      id: 'resinart',
      title: 'RESIN ART',
      category: 'Workshop',
      description: 'Create beautiful resin art pieces with expert guidance.',
      icon: Palette,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Explore resin art techniques. Create keychains, coasters, and decorative pieces.',
      rules: [
        'Limited to 25 participants per session',
        'All materials and safety gear provided',
        'Minimum age: 16 years',
        'Session duration: 2.5 hours',
        'Pieces need 24hr to cure (pickup next day)',
      ],
      eligibility: 'All participants (registration required)',
      dateTime: 'April 1, 2026 - 10:00 AM & 2:00 PM',
      venue: 'Craft Studio',
    },
    {
      id: 'totebags',
      title: 'TOTE BAGS',
      category: 'Workshop',
      description: 'Design and paint your own custom tote bags.',
      icon: Brush,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Customize your own tote bag with fabric paints, stencils, and creative techniques.',
      rules: [
        'Limited to 40 participants per session',
        'Blank tote bags provided',
        'Paints and brushes included',
        'Session duration: 1.5 hours',
        'Take your tote bag home',
      ],
      eligibility: 'All participants (registration required)',
      dateTime: 'March 31 & April 1, 2026 - Multiple slots',
      venue: 'Art Room',
    },
    {
      id: 'capspray',
      title: 'CAP SPRAY PAINTING',
      category: 'Workshop',
      description: 'Learn spray painting techniques and customize caps.',
      icon: Palette,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Urban art meets fashion. Learn spray painting and stenciling to create custom designed caps.',
      rules: [
        'Limited to 30 participants per session',
        'Caps and spray paints provided',
        'Outdoor workshop',
        'Session duration: 2 hours',
        'Bring your creativity!',
      ],
      eligibility: 'All participants (registration required)',
      dateTime: 'April 2, 2026 - 10:00 AM & 2:00 PM',
      venue: 'Outdoor Workshop Zone',
    },
  ];

  const categories = ['Technical', 'Cultural', 'Workshop'] as const;
  const eventsByCategory = categories.map(cat => ({
    category: cat,
    events: events.filter(e => e.category === cat)
  }));

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
          <h2 className="font-['Press_Start_2P'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl neon-text-pink mb-4 sm:mb-6">
            GAME MODES
          </h2>
          <p className="font-['Rajdhani'] text-base sm:text-lg md:text-xl text-[#00ffff] max-w-2xl mx-auto px-4">
            Choose your adventure • Multiple categories • Epic prizes
          </p>
        </motion.div>

        {/* Events by Category */}
        {eventsByCategory.map(({ category, events: categoryEvents }) => (
          <div key={category} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-['Press_Start_2P'] text-lg sm:text-xl md:text-2xl mb-8"
              style={{ color: '#87CEEB' }}
            >
              {category}
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {categoryEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className={`${event.borderColor} bg-black/60 backdrop-blur-sm p-6 sm:p-8 pixel-corners group cursor-pointer transition-all duration-300 hover:bg-black/80`}
                  onClick={() => onEventClick?.(event)}
                >
                  <div className="mb-4 sm:mb-6" style={{ color: event.color }}>
                    <event.icon className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3
                    className="font-['Orbitron'] text-base sm:text-lg md:text-xl mb-3 sm:mb-4"
                    style={{
                      color: event.color,
                      textShadow: `0 0 10px ${event.color}`,
                    }}
                  >
                    {event.title}
                  </h3>

                  <p className="font-['Rajdhani'] text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                    {event.description}
                  </p>

                  <button
                    className="neon-button font-['Orbitron'] text-xs sm:text-sm px-4 sm:px-6 py-2 border-2 pixel-corners hover:scale-105 transition-all duration-300"
                    style={{
                      color: event.color,
                      borderColor: event.color,
                    }}
                  >
                    VIEW DETAILS
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
