import React, { useMemo, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { SYNERGIA_GRID } from '../constants';

const HeroMosaic: React.FC = () => {
  const [phase, setPhase] = useState<'dump' | 'collecting' | 'formed'>('dump');
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });
  const gridScale = useTransform(smoothScroll, [0, 0.15], [1, isMobile ? 4 : 4.5]);
  const gridRotateX = useTransform(smoothScroll, [0, 0.12], [0, 15]);
  const gridOpacity = useTransform(smoothScroll, [0.05, 0.2], [1, 0]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const dumpTimer = setTimeout(() => setPhase('collecting'), 800);
    const formTimer = setTimeout(() => setPhase('formed'), 2400);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(dumpTimer);
      clearTimeout(formTimer);
    };
  }, []);

  const tiles = useMemo(() => {
    const activeCells: { r: number; c: number; id: number; colorIndex: number }[] = [];
    SYNERGIA_GRID.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === 1) {
          activeCells.push({ 
            r: rowIndex, 
            c: colIndex, 
            id: rowIndex * 100 + colIndex,
            colorIndex: (rowIndex + colIndex) % 6
          });
        }
      });
    });

    // Vibrant neon colors matching the website theme
    const vibrantColors = [
      { bg: 'rgba(245, 158, 11, 0.3)', border: '#f59e0b', glow: 'rgba(245, 158, 11, 0.6)' },  // Amber
      { bg: 'rgba(217, 70, 239, 0.3)', border: '#d946ef', glow: 'rgba(217, 70, 239, 0.6)' },  // Pink/Magenta
      { bg: 'rgba(16, 185, 129, 0.3)', border: '#10b981', glow: 'rgba(16, 185, 129, 0.6)' },  // Emerald
      { bg: 'rgba(6, 182, 212, 0.3)', border: '#06b6d4', glow: 'rgba(6, 182, 212, 0.6)' },    // Cyan
      { bg: 'rgba(139, 92, 246, 0.3)', border: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.6)' },  // Violet
      { bg: 'rgba(244, 63, 94, 0.3)', border: '#f43f5e', glow: 'rgba(244, 63, 94, 0.6)' },    // Rose
    ];

    return activeCells.map((cell, index) => {
      const centerX = 17;
      const centerY = 2;
      const diffX = cell.c - centerX;
      const diffY = cell.r - centerY;
      const scatterFactor = isMobile ? 250 : 400;
      const scatterX = diffX * scatterFactor + (Math.random() - 0.5) * (isMobile ? 500 : 1000);
      const scatterY = diffY * scatterFactor + (Math.random() - 0.5) * (isMobile ? 500 : 1000);

      return {
        cell,
        index,
        scatterX,
        scatterY,
        vibrantColors
      };
    });
  }, [isMobile]);

  const renderedTiles = tiles.map(({ cell, index, scatterX, scatterY, vibrantColors }) => {
    const colorScheme = vibrantColors[cell.colorIndex];

    return (
      <motion.div
        key={cell.id}
        initial={{ scale: 0, opacity: 0, rotate: (Math.random() - 0.5) * 360 }}
        animate={
          phase === 'dump' 
            ? { 
                scale: 0.4 + Math.random() * 0.6, 
                opacity: 0.6, 
                x: (Math.random() - 0.5) * (isMobile ? 800 : 1500), 
                y: (Math.random() - 0.5) * (isMobile ? 800 : 1500),
                rotate: (Math.random() - 0.5) * 180
              }
            : phase === 'collecting' 
            ? { scale: 1.05, opacity: 1, x: 0, y: 0, rotate: 0 } 
            : { scale: 1, opacity: 1, x: 0, y: 0, rotate: 0 }
        }
        whileHover={phase === 'formed' ? { 
          scale: isMobile ? 1.2 : 1.5, 
          zIndex: 100,
          transition: { type: 'spring', stiffness: 300, damping: 20 }
        } : {}}
        whileTap={phase === 'formed' ? {
          scale: 1.3,
          zIndex: 100,
          transition: { type: 'spring', stiffness: 300, damping: 20 }
        } : {}}
        transition={{
          type: 'spring',
          stiffness: isMobile ? 60 : 45,
          damping: 15,
          delay: phase === 'formed' ? index * 0.0015 : 0
        }}
        style={{
          gridRow: cell.r + 1,
          gridColumn: cell.c + 1,
          zIndex: phase === 'formed' ? 10 : 1,
        }}
        className="relative aspect-square group/tile cursor-pointer"
      >
        <div 
          className="w-full h-full overflow-hidden relative transition-all duration-300"
          style={{
            backgroundColor: 'transparent',
            border: `2px solid ${colorScheme.border}`,
            boxShadow: `
              0 0 8px ${colorScheme.glow},
              inset 0 0 8px ${colorScheme.glow}
            `,
            imageRendering: 'pixelated',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          }}
        >
          {/* Pixelated corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2" style={{ backgroundColor: colorScheme.border, imageRendering: 'pixelated' }} />
          <div className="absolute top-0 right-0 w-2 h-2" style={{ backgroundColor: colorScheme.border, imageRendering: 'pixelated' }} />
          <div className="absolute bottom-0 left-0 w-2 h-2" style={{ backgroundColor: colorScheme.border, imageRendering: 'pixelated' }} />
          <div className="absolute bottom-0 right-0 w-2 h-2" style={{ backgroundColor: colorScheme.border, imageRendering: 'pixelated' }} />
          
          {/* Holographic scanline effect */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255, 255, 255, 0.1) 4px, rgba(255, 255, 255, 0.1) 8px)',
              imageRendering: 'pixelated',
            }}
          />

          {/* Animated holographic shimmer */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, transparent 0%, ${colorScheme.glow} 50%, transparent 100%)`,
              opacity: 0.1,
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Glow on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at center, ${colorScheme.glow} 0%, transparent 70%)`,
              mixBlendMode: 'screen',
            }}
          />
        </div>
      </motion.div>
    );
  });

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-[#0a0015] via-[#1a0033] to-[#0a0015]">
      {/* Animated Background */}
      <div className="absolute inset-0">
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

      {/* Grid Section */}
      <div className="relative h-[100vh] w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col items-start justify-start pt-[200px] overflow-hidden">
          {/* The Grid Title Container */}
          <motion.div 
            style={{ 
              scale: gridScale, 
              opacity: gridOpacity, 
              rotateX: gridRotateX,
              perspective: "1200px"
            }}
            className="relative z-10 w-full px-4 md:px-20 max-w-full"
          >
            <div className="relative">
              {/* Main Typography Grid */}
              <div className="pt-2 sm:pt-4 md:pt-6 lg:pt-8 grid grid-cols-[repeat(36,minmax(0,1fr))] gap-[1px] md:gap-[2px] lg:gap-[3px] mx-auto pointer-events-auto max-w-[90vw]">
                {renderedTiles}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section Below Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
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
            <span>📅</span>
            <span>MARCH 31 - APRIL 2, 2026</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-[#ff1493] rounded-full"></div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>BVRIT HYDERABAD</span>
          </div>
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
};

export default HeroMosaic;
