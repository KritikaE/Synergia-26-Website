import { motion } from 'motion/react';

export function Sponsors() {
  // Updated sponsor list with specified companies
  const sponsors = [
    { name: 'BeingZero', color: '#ff00ff' },
    { name: 'SmartInterviews', color: '#00ffff' },
    { name: 'Student Tribe', color: '#ff1493' },
    { name: 'Dominos', color: '#ff00ff' },
    { name: 'Prodigy', color: '#00ffff' },
  ];

  const SponsorCard = ({ name, color }: { name: string; color: string }) => (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="neon-border-blue bg-black/60 backdrop-blur-sm p-8 sm:p-10 md:p-12 pixel-corners group cursor-pointer transition-all duration-300 hover:bg-black/80 flex items-center justify-center min-h-[180px]"
    >
      <div className="text-center">
        <div
          className="font-['Orbitron'] text-xl sm:text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300"
          style={{
            color: color,
            textShadow: `0 0 15px ${color}, 0 0 30px ${color}`,
          }}
        >
          {name}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="sponsors" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0a0015] overflow-hidden">
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
            POWER-UPS
          </h2>
          <p className="font-['Rajdhani'] text-base sm:text-lg md:text-xl text-[#00ffff] max-w-2xl mx-auto px-4">
            Powered by the best • Thanks to our amazing sponsors
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SponsorCard name={sponsor.name} color={sponsor.color} />
            </motion.div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <button className="neon-button neon-border-purple bg-black/60 px-8 sm:px-12 py-4 sm:py-5 font-['Orbitron'] text-base sm:text-lg md:text-xl text-[#ff00ff] hover:bg-[#ff00ff]/20 transition-all duration-300 pixel-corners">
            BECOME A SPONSOR
          </button>
        </motion.div>
      </div>
    </section>
  );
}
