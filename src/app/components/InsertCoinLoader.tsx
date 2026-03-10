import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface InsertCoinLoaderProps {
  onComplete: () => void;
}

export function InsertCoinLoader({ onComplete }: InsertCoinLoaderProps) {
  const [phase, setPhase] = useState<'typing' | 'loading' | 'glitch' | 'complete'>('typing');
  const [currentLine, setCurrentLine] = useState(0);
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(0);

  const lines = [
    '> SAC_PROTOCOL ACTIVE...',
    '> BVRITH SYSTEMS ONLINE...',
    '> LAUNCHING SYNERGIA 2026...'
  ];

  // Typing effect for multiple lines
  useEffect(() => {
    if (phase === 'typing') {
      let charIndex = 0;
      const currentText = lines[currentLine];
      
      const interval = setInterval(() => {
        if (charIndex <= currentText.length) {
          setText(currentText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(interval);
          if (currentLine < lines.length - 1) {
            setTimeout(() => {
              setCurrentLine(currentLine + 1);
              setText('');
            }, 300);
          } else {
            setTimeout(() => setPhase('loading'), 400);
          }
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [phase, currentLine]);

  // Progress bar
  useEffect(() => {
    if (phase === 'loading') {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setPhase('glitch'), 100);
            return 100;
          }
          return prev + 3;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [phase]);

  // Glitch then complete
  useEffect(() => {
    if (phase === 'glitch') {
      setTimeout(() => {
        setPhase('complete');
        setTimeout(onComplete, 100);
      }, 500);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] bg-black overflow-hidden flex items-center justify-center"
        >
          {/* Scanlines */}
          <div className="absolute inset-0 scanlines opacity-20 pointer-events-none"></div>

          {/* Typing Phase */}
          {phase === 'typing' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-left px-4"
            >
              <div className="font-['Courier_New',monospace] text-[#00ff00] text-base sm:text-lg md:text-xl space-y-2">
                {lines.slice(0, currentLine).map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
                <div>
                  {text}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    _
                  </motion.span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Loading Phase */}
          {phase === 'loading' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-6 px-4"
            >
              <div className="font-['Courier_New',monospace] text-[#00ff00] text-base sm:text-lg md:text-xl text-center space-y-2">
                {lines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
              
              <div className="w-full max-w-md">
                <div
                  className="relative h-8 border-2 overflow-hidden"
                  style={{
                    borderColor: '#00ffff',
                    background: '#000',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      width: `${progress}%`,
                      background: 'linear-gradient(90deg, #ff00ff 0%, #00ffff 50%, #00ff00 100%)',
                      boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)',
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-40"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)',
                      }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-['Press_Start_2P'] text-xs text-white mix-blend-difference">
                      {Math.floor(progress)}%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
