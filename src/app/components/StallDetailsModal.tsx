import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Clock, Star } from 'lucide-react';
import { StallData } from './Stalls';

interface StallDetailsModalProps {
  stall: StallData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function StallDetailsModal({ stall, isOpen, onClose }: StallDetailsModalProps) {
  if (!stall) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-[#0a0015] border-4 pixel-corners max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto relative"
              style={{ borderColor: stall.color }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors z-10"
                style={{ color: stall.color }}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 rounded-lg" style={{ backgroundColor: stall.color + '20' }}>
                    <stall.icon className="w-12 h-12" style={{ color: stall.color }} />
                  </div>
                  <div className="flex-1">
                    <h2
                      className="font-['Press_Start_2P'] text-2xl sm:text-3xl mb-2"
                      style={{ color: stall.color, textShadow: `0 0 10px ${stall.color}40` }}
                    >
                      {stall.title}
                    </h2>
                    <p className="font-['Rajdhani'] text-lg text-gray-400">
                      {stall.category}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="font-['Orbitron'] text-xl mb-3" style={{ color: stall.color }}>
                    About
                  </h3>
                  <p className="font-['Rajdhani'] text-base text-gray-300 leading-relaxed">
                    {stall.fullDescription || stall.description}
                  </p>
                </div>

                {/* Highlights */}
                {stall.highlights && stall.highlights.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-['Orbitron'] text-xl mb-3" style={{ color: stall.color }}>
                      Highlights
                    </h3>
                    <ul className="space-y-2">
                      {stall.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="font-['Rajdhani'] text-base text-gray-300 flex items-start gap-2"
                        >
                          <Star className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: stall.color }} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Previous Year Info */}
                {stall.previousYear && (
                  <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: stall.color + '10' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5" style={{ color: stall.color }} />
                      <h3 className="font-['Orbitron'] text-lg" style={{ color: stall.color }}>
                        Previous Year
                      </h3>
                    </div>
                    <p className="font-['Rajdhani'] text-base text-gray-300">
                      {stall.previousYear}
                    </p>
                  </div>
                )}

                {/* Location Info */}
                <div className="flex items-center gap-2 text-gray-400 mb-6">
                  <MapPin className="w-5 h-5" />
                  <span className="font-['Rajdhani'] text-base">
                    Location will be announced soon
                  </span>
                </div>

                {/* Action Button */}
                <button
                  className="w-full neon-button font-['Orbitron'] text-base px-6 py-3 border-2 pixel-corners hover:scale-105 transition-all duration-300"
                  style={{
                    color: stall.color,
                    borderColor: stall.color,
                  }}
                  onClick={onClose}
                >
                  GOT IT!
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
