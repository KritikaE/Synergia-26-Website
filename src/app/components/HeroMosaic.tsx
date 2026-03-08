import React, { useMemo, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { SYNERGIA_GRID } from '../constants';

// Import Synergia 25 photos (optimized for web)
import img1 from '../../assets/Synergia25/SRI06615.JPG';
import img2 from '../../assets/Synergia25/SRI06786.JPG';
import img3 from '../../assets/Synergia25/SRI06822.JPG';
import img4 from '../../assets/Synergia25/SRI06849.JPG';
import img5 from '../../assets/Synergia25/SRI06850.JPG';
import img6 from '../../assets/Synergia25/SRI06851.JPG';
import img7 from '../../assets/Synergia25/SRI06867.JPG';
import img8 from '../../assets/Synergia25/SRI06871.JPG';
import img9 from '../../assets/Synergia25/SRI06898.JPG';
import img10 from '../../assets/Synergia25/SRI06901.JPG';
import img11 from '../../assets/Synergia25/SRI06902.JPG';
import img12 from '../../assets/Synergia25/SRI06922.JPG';
import img13 from '../../assets/Synergia25/SRI06936.JPG';
import img14 from '../../assets/Synergia25/SRI06960.JPG';
import img15 from '../../assets/Synergia25/SRI07122.JPG';
import img16 from '../../assets/Synergia25/SRI07153.JPG';
import img17 from '../../assets/Synergia25/SRI07230.JPG';
import img18 from '../../assets/Synergia25/SRI07307.JPG';
import img19 from '../../assets/Synergia25/SRI07321.JPG';
import img20 from '../../assets/Synergia25/SRI07337.JPG';
import img21 from '../../assets/Synergia25/SRI07431.JPG';
import img22 from '../../assets/Synergia25/SRI07437.JPG';
import img23 from '../../assets/Synergia25/SRI07502.JPG';
import img24 from '../../assets/Synergia25/SRI07566.JPG';
import img25 from '../../assets/Synergia25/SRI07577.JPG';
import img26 from '../../assets/Synergia25/SRI07845.JPG';
import img27 from '../../assets/Synergia25/SRI07883.JPG';
import img28 from '../../assets/Synergia25/SRI08030.JPG';
import img29 from '../../assets/Synergia25/SRI08346.JPG';
import img30 from '../../assets/Synergia25/SRI08491.JPG';
import img31 from '../../assets/Synergia25/SRI08501.JPG';
import img32 from '../../assets/Synergia25/SRI08507.JPG';

const SYNERGIA_PHOTOS = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32
];

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
    const imageSource = SYNERGIA_PHOTOS[index % SYNERGIA_PHOTOS.length];

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
          scale: isMobile ? 1.5 : 2.5, 
          zIndex: 100,
          transition: { type: 'spring', stiffness: 300, damping: 20 }
        } : {}}
        whileTap={phase === 'formed' ? {
          scale: 2,
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
            border: `2px solid ${colorScheme.border}`,
            boxShadow: `
              0 0 8px ${colorScheme.glow},
              inset 0 0 8px ${colorScheme.glow}
            `,
            imageRendering: 'pixelated',
          }}
        >
          {/* Photo */}
          <img 
            src={imageSource} 
            alt={`Synergia 2025 highlight ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          
          {/* Color overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-30 group-hover/tile:opacity-0 transition-opacity duration-300" 
            style={{ 
              backgroundColor: colorScheme.bg, 
              mixBlendMode: 'overlay' 
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
    <section className="relative w-full bg-gradient-to-b from-[#0a0015] via-[#1a0033] to-[#0a0015] py-20">
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
      <div className="relative w-full flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          {/* The Grid Title Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
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
    </section>
  );
};

export default HeroMosaic;
