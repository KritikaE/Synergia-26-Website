import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

export function Handbook() {
  return (
    <section id="handbook" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a0015] via-[#1a0033] to-[#0a0015] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="arcade-grid absolute inset-0"></div>
      </div>
      <div className="scanlines absolute inset-0 opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-8"
          >
            <BookOpen className="w-16 h-16 sm:w-20 sm:h-20 text-[#ff00ff]" />
          </motion.div>

          {/* Headline */}
          <h2 className="font-['Press_Start_2P'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl neon-text-purple mb-6 leading-tight">
            HANDBOOK
          </h2>

          {/* Placeholder Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Orbitron'] text-xl sm:text-2xl md:text-3xl text-[#00ffff] mt-4"
            style={{
              textShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
            }}
          >
            Coming Soon
          </motion.p>

          <p className="font-['Inter'] text-base sm:text-lg text-gray-300 mt-8">
            Your guide to navigating Synergia 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
