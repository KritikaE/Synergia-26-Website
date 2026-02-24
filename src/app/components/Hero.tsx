import { motion } from 'motion/react';
import { Sparkles, Calendar, MapPin } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import bvrithLogo from 'figma:asset/4ca561598c269bdc372d92c26a2c32913d1d8afc.png';
import sacLogo from 'figma:asset/88981308929248bd59abca996b18d809d9a8b8f1.png';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0015] via-[#1a0033] to-[#0a0015]">
        <div className="arcade-grid absolute inset-0 opacity-30"></div>
        <div className="scanlines absolute inset-0 opacity-20"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ff00ff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 sm:mb-12"
        >
          <Sparkles className="inline-block w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#00ffff] mb-4 animate-pulse" />
        </motion.div>

        {/* Glassmorphism Container with Logos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 sm:mb-12 flex flex-col items-center"
        >
          {/* Glassmorphism Card Container */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative mb-6 rounded-xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(0, 255, 255, 0.3)',
              boxShadow: `
                0 0 40px rgba(0, 255, 255, 0.3),
                0 0 80px rgba(255, 0, 255, 0.2),
                inset 0 0 40px rgba(255, 255, 255, 0.05)
              `,
            }}
          >
            {/* Inner glow effect */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.2) 0%, transparent 70%)',
              }}
            ></div>

            {/* Logo Container with 64px spacing and 40px padding */}
            <div 
              className="relative flex items-center justify-center p-10"
              style={{ gap: '64px' }}
            >
              {/* BVRIT Logo */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div 
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg overflow-hidden bg-white/10 p-3 flex items-center justify-center"
                  style={{
                    boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)',
                  }}
                >
                  <img 
                    src={bvrithLogo} 
                    alt="BVRIT Hyderabad" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

              {/* SAC Logo */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div 
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg overflow-hidden bg-white/10 p-3 flex items-center justify-center"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                  }}
                >
                  <img 
                    src={sacLogo} 
                    alt="Student Affairs Council" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-['Inter'] text-base sm:text-lg md:text-xl text-white/80 mb-6 px-4"
            style={{
              letterSpacing: '0.02em',
            }}
          >
            Binary beats and cultural feats
          </motion.p>

          {/* Event Title */}
          <div className="space-y-2">
            <h1
              className="font-['Press_Start_2P'] text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-2"
              style={{
                color: '#ff00ff',
                textShadow: `
                  0 0 10px #ff00ff,
                  0 0 20px #ff00ff,
                  0 0 40px #ff00ff,
                  2px 0 #00ffff,
                  -2px 0 #ff1493
                `,
              }}
            >
              SYNERGIA
            </h1>
            <p className="font-['Rajdhani'] text-base sm:text-lg md:text-xl text-gray-300">
              Annual College Fest 2026
            </p>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-['Orbitron'] text-sm sm:text-base md:text-lg lg:text-xl text-[#00ffff] mb-6 sm:mb-8 px-4"
        >
          WHERE TECH MEETS CREATIVITY • LEVEL UP YOUR EXPERIENCE
        </motion.p>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 text-[#ff1493] font-['Rajdhani'] text-base sm:text-lg"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>MARCH 31 - APRIL 2, 2026</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-[#ff1493] rounded-full"></div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>BVRIT HYDERABAD</span>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-8 sm:mb-10"
        >
          <CountdownTimer />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
        >
          <button className="neon-button neon-border-purple bg-black/60 px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-['Orbitron'] text-sm sm:text-base md:text-lg text-[#ff00ff] hover:bg-[#ff00ff]/20 transition-all duration-300 pixel-corners w-full sm:w-auto">
            REGISTER NOW
          </button>
          <button className="neon-button neon-border-blue bg-black/60 px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-['Orbitron'] text-sm sm:text-base md:text-lg text-[#00ffff] hover:bg-[#00ffff]/20 transition-all duration-300 pixel-corners w-full sm:w-auto">
            EXPLORE EVENTS
          </button>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0015] to-transparent"></div>
    </section>
  );
}
