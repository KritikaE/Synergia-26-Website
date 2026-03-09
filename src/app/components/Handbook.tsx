import { motion } from 'motion/react';
import { Map as MapIcon } from 'lucide-react';
import collegeMap from '../../assets/college_map.jpeg';

export function Handbook() {
  return (
    <section id="map" className="relative min-h-screen bg-gradient-to-b from-[#0a0015] via-[#1a0033] to-[#0a0015] overflow-hidden pt-32 pb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="arcade-grid absolute inset-0"></div>
      </div>
      <div className="scanlines absolute inset-0 opacity-10"></div>

      <div className="relative z-10 w-full h-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <MapIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff00ff]" />
            <h2 
              className="font-['Press_Start_2P'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              style={{
                color: '#ff1493',
                textShadow: '0 0 20px rgba(255, 20, 147, 0.8), 0 0 40px rgba(255, 20, 147, 0.4)',
              }}
            >
              COLLEGE MAP
            </h2>
          </div>
          <p 
            className="font-['Rajdhani'] text-lg sm:text-xl md:text-2xl"
            style={{
              color: '#00ffff',
              textShadow: '0 0 15px rgba(0, 255, 255, 0.6)',
            }}
          >
            Navigate your way through Synergia 2026
          </p>
        </motion.div>

        {/* Map Image - Full Width, No Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-7xl mx-auto"
        >
          <img 
            src={collegeMap} 
            alt="BVRIT College Map - Synergia 2026"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
