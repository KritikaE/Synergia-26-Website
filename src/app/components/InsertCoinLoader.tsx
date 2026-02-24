import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface InsertCoinLoaderProps {
  onComplete: () => void;
}

export function InsertCoinLoader({ onComplete }: InsertCoinLoaderProps) {
  const [bootPhase, setBootPhase] = useState<'terminal' | 'coin' | 'loading' | 'complete'>('terminal');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [coinInserted, setCoinInserted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showFlash, setShowFlash] = useState(false);

  // Boot sequence terminal lines
  const bootLines = [
    '> INITIALIZING SAC_CORE_PROTOCOL...',
    '> ESTABLISHING BVRITH_LINK...',
    '> SYSTEM READY.',
  ];

  // Terminal boot sequence
  useEffect(() => {
    if (bootPhase === 'terminal') {
      const showLine = (index: number) => {
        if (index < bootLines.length) {
          setTimeout(() => {
            setTerminalLines((prev) => [...prev, bootLines[index]]);
            showLine(index + 1);
          }, 500);
        } else {
          // Transition to coin phase after last line
          setTimeout(() => {
            setBootPhase('coin');
          }, 800);
        }
      };
      showLine(0);
    }
  }, [bootPhase]);

  // Loading progress
  useEffect(() => {
    if (bootPhase === 'loading') {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setBootPhase('complete');
            // Trigger 5x zoom and white flash
            setTimeout(() => {
              setShowFlash(true);
              setTimeout(onComplete, 50);
            }, 300);
            return 100;
          }
          return prev + 2;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [bootPhase, onComplete]);

  const handleInsertCoin = () => {
    setCoinInserted(true);
    setBootPhase('loading');
  };

  return (
    <AnimatePresence>
      {bootPhase !== 'complete' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black overflow-hidden"
        >
          {/* CRT Scanlines Overlay */}
          <div className="absolute inset-0 scanlines opacity-30 pointer-events-none"></div>

          {/* Terminal Boot Phase */}
          {bootPhase === 'terminal' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="font-['Courier_New',monospace] text-[#00ff00] text-sm sm:text-base md:text-lg space-y-4">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center"
                  >
                    <span>{line}</span>
                    {index === terminalLines.length - 1 && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="ml-1"
                      >
                        _
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Insert Coin Phase */}
          {bootPhase === 'coin' && !coinInserted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* Blinking "INSERT COIN" Text */}
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mb-8"
              >
                <h2
                  className="font-['Press_Start_2P'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                  style={{
                    color: '#ffff00',
                    textShadow: `
                      0 0 10px #ffff00,
                      0 0 20px #ffff00,
                      0 0 40px #ffff00
                    `,
                  }}
                >
                  INSERT COIN
                </h2>
              </motion.div>

              {/* Pixel Art Coin Button */}
              <motion.button
                onClick={handleInsertCoin}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative mb-12"
              >
                <motion.div
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="relative w-32 h-32 sm:w-40 sm:h-40"
                >
                  <div
                    className="absolute inset-0 rounded-full border-8"
                    style={{
                      borderColor: '#ffaa00',
                      background: 'linear-gradient(135deg, #ffdd00 0%, #ffaa00 50%, #ff8800 100%)',
                      boxShadow: `
                        0 0 20px #ffaa00,
                        0 0 40px #ffaa00,
                        inset 0 0 20px rgba(255, 255, 255, 0.5)
                      `,
                    }}
                  >
                    <div className="absolute inset-4 rounded-full bg-[#ff8800] flex items-center justify-center">
                      <span
                        className="font-['Press_Start_2P'] text-4xl sm:text-5xl"
                        style={{
                          color: '#ffff00',
                          textShadow: '2px 2px 0 rgba(0,0,0,0.5)',
                        }}
                      >
                        1
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{
                    background: 'radial-gradient(circle, #ffaa00 0%, transparent 70%)',
                  }}
                ></motion.div>
              </motion.button>

              {/* Health Bar - 300px */}
              <div className="relative w-[300px]">
                <div
                  className="relative h-8 border-4 overflow-hidden"
                  style={{
                    borderColor: '#00ffff',
                    background: '#000000',
                    boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-['Press_Start_2P'] text-xs text-[#00ffff]">
                      READY
                    </span>
                  </div>
                </div>
              </div>

              {/* Instruction */}
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-6 font-['Press_Start_2P'] text-xs sm:text-sm text-[#00ffff]"
              >
                CLICK TO START
              </motion.p>
            </motion.div>
          )}

          {/* Loading Phase with Health Bar */}
          {bootPhase === 'loading' && (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ 
                scale: progress >= 100 ? 5 : 1,
              }}
              transition={{
                duration: 0.6,
                ease: 'easeIn',
              }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <motion.div
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
                className="mb-8"
              >
                <h3
                  className="font-['Press_Start_2P'] text-base sm:text-lg md:text-xl"
                  style={{
                    color: '#00ffff',
                    textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
                  }}
                >
                  LOADING...
                </h3>
              </motion.div>

              {/* 300px Health Bar */}
              <div className="relative w-[300px]">
                <div
                  className="relative h-10 border-4 overflow-hidden"
                  style={{
                    borderColor: '#ffffff',
                    background: '#000000',
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                  }}
                >
                  {/* Progress Fill */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      width: `${progress}%`,
                      background: `linear-gradient(90deg, 
                        #ff0000 0%, 
                        #ff00ff ${progress / 3}%, 
                        #00ffff ${(progress * 2) / 3}%, 
                        #00ff00 100%)`,
                      boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
                    }}
                    animate={{
                      filter: [
                        'none',
                        'drop-shadow(2px 0 0 red) drop-shadow(-2px 0 0 cyan)',
                        'none',
                      ],
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-50"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)',
                      }}
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                      }}
                    ></motion.div>
                  </motion.div>

                  {/* Percentage */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-['Press_Start_2P'] text-lg"
                      style={{
                        color: progress > 50 ? '#000000' : '#ffffff',
                        WebkitTextStroke: progress > 50 ? '1px white' : '1px black',
                      }}
                    >
                      {Math.floor(progress)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Pixel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2"
                    style={{
                      backgroundColor: progress > i * 20 ? '#00ffff' : '#333333',
                      boxShadow: progress > i * 20 ? '0 0 10px #00ffff' : 'none',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* White Flash Effect */}
          {showFlash && (
            <motion.div
              className="absolute inset-0 bg-white z-50"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.05 }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
