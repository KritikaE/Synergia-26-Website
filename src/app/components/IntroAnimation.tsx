import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [showSkip, setShowSkip] = useState(true);

  useEffect(() => {
    // Auto-complete after 4 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] bg-black overflow-hidden"
      >
        {/* VR Grid Background */}
        <motion.div
          initial={{ scale: 10, z: -1000 }}
          animate={{ scale: 1, z: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Grid Lines - Horizontal */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`h-${i}`}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 0.6 }}
                transition={{ duration: 2, delay: i * 0.05 }}
                className="absolute w-full h-px"
                style={{
                  top: `${(i / 19) * 100}%`,
                  background: `linear-gradient(90deg, transparent, #ff00ff, transparent)`,
                  boxShadow: '0 0 10px #ff00ff',
                }}
              />
            ))}
          </div>

          {/* Grid Lines - Vertical */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`v-${i}`}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.6 }}
                transition={{ duration: 2, delay: i * 0.05 }}
                className="absolute h-full w-px"
                style={{
                  left: `${(i / 19) * 100}%`,
                  background: `linear-gradient(180deg, transparent, #00ffff, transparent)`,
                  boxShadow: '0 0 10px #00ffff',
                }}
              />
            ))}
          </div>

          {/* Floating Neon Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: i % 3 === 0 ? '#ff00ff' : i % 3 === 1 ? '#00ffff' : '#ff1493',
                boxShadow: `0 0 10px ${i % 3 === 0 ? '#ff00ff' : i % 3 === 1 ? '#00ffff' : '#ff1493'}`,
              }}
            />
          ))}
        </motion.div>

        {/* Center Logo Reveal */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotateZ: -180 }}
          animate={{ scale: 1, opacity: 1, rotateZ: 0 }}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3, delay: 1.5 }}
              className="font-['Press_Start_2P'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                color: '#ff00ff',
                textShadow: `
                  0 0 20px #ff00ff,
                  0 0 40px #ff00ff,
                  0 0 60px #ff00ff,
                  0 0 80px #ff00ff,
                  0 0 100px #ff00ff
                `,
              }}
            >
              SYNERGIA
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3, delay: 2 }}
              className="font-['Orbitron'] text-lg sm:text-xl md:text-2xl mt-4 text-[#00ffff]"
              style={{
                textShadow: '0 0 20px #00ffff',
              }}
            >
              INITIALIZING...
            </motion.p>
          </div>
        </motion.div>

        {/* Scan Lines Effect */}
        <div className="scanlines absolute inset-0 opacity-30 pointer-events-none"></div>

        {/* Skip Button */}
        {showSkip && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={onComplete}
            className="absolute bottom-8 right-8 neon-border-blue bg-black/60 px-4 sm:px-6 py-2 sm:py-3 font-['Orbitron'] text-xs sm:text-sm text-[#00ffff] hover:bg-[#00ffff]/20 transition-all duration-300 pixel-corners z-50"
          >
            SKIP INTRO →
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
