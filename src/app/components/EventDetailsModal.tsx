import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Users, CheckCircle } from 'lucide-react';
import { EventData } from './Events';

interface EventDetailsModalProps {
  event: EventData | null;
  isOpen: boolean;
  onClose: () => void;
  onRegister?: (eventId: string) => void;
}

export function EventDetailsModal({ event, isOpen, onClose, onRegister }: EventDetailsModalProps) {
  if (!event) return null;

  const handleRegister = () => {
    onRegister?.(event.id);
    alert(`Successfully registered for ${event.title}!`);
  };

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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              className={`${event.borderColor} bg-black/95 backdrop-blur-md pixel-corners max-w-4xl w-full my-8 relative`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#ff00ff] hover:text-[#00ffff] transition-colors duration-300 z-10"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div style={{ color: event.color }}>
                      <event.icon className="w-12 h-12 sm:w-16 sm:h-16" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-block mb-3">
                        <span
                          className="font-['Press_Start_2P'] text-[8px] sm:text-[10px] px-3 py-1 border-2 pixel-corners"
                          style={{
                            color: event.color,
                            borderColor: event.color,
                          }}
                        >
                          {event.category.toUpperCase()}
                        </span>
                      </div>
                      <h2
                        className="font-['Press_Start_2P'] text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 leading-tight"
                        style={{
                          color: event.color,
                          textShadow: `0 0 20px ${event.color}`,
                        }}
                      >
                        {event.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Event Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
                  {event.dateTime && (
                    <div className="neon-border-blue bg-black/40 p-4 pixel-corners">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-[#00ffff] flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-['Orbitron'] text-sm text-[#00ffff] mb-1">DATE & TIME</div>
                          <div className="font-['Rajdhani'] text-sm text-gray-300">{event.dateTime}</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {event.venue && (
                    <div className="neon-border-purple bg-black/40 p-4 pixel-corners">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#ff00ff] flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-['Orbitron'] text-sm text-[#ff00ff] mb-1">VENUE</div>
                          <div className="font-['Rajdhani'] text-sm text-gray-300">{event.venue}</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {event.eligibility && (
                    <div className="neon-border-pink bg-black/40 p-4 pixel-corners sm:col-span-2">
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-[#ff1493] flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-['Orbitron'] text-sm text-[#ff1493] mb-1">ELIGIBILITY</div>
                          <div className="font-['Rajdhani'] text-sm text-gray-300">{event.eligibility}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                {event.fullDescription && (
                  <div className="mb-6 sm:mb-8">
                    <h3 className="font-['Orbitron'] text-lg sm:text-xl text-[#00ffff] mb-3">ABOUT</h3>
                    <p className="font-['Rajdhani'] text-base sm:text-lg text-gray-300 leading-relaxed">
                      {event.fullDescription}
                    </p>
                  </div>
                )}

                {/* Rules */}
                {event.rules && event.rules.length > 0 && (
                  <div className="mb-6 sm:mb-8">
                    <h3 className="font-['Orbitron'] text-lg sm:text-xl text-[#ff1493] mb-4">RULES & GUIDELINES</h3>
                    <div className="space-y-3">
                      {event.rules.map((rule, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" style={{ color: event.color }} />
                          <span className="font-['Rajdhani'] text-sm sm:text-base text-gray-300">{rule}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Register Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700">
                  <button
                    onClick={handleRegister}
                    className="neon-button neon-border-purple bg-black/60 px-6 sm:px-8 py-3 sm:py-4 font-['Orbitron'] text-sm sm:text-base text-[#ff00ff] hover:bg-[#ff00ff]/20 transition-all duration-300 pixel-corners flex-1"
                  >
                    REGISTER NOW
                  </button>
                  <button
                    onClick={onClose}
                    className="neon-button neon-border-blue bg-black/60 px-6 sm:px-8 py-3 sm:py-4 font-['Orbitron'] text-sm sm:text-base text-[#00ffff] hover:bg-[#00ffff]/20 transition-all duration-300 pixel-corners"
                  >
                    CLOSE
                  </button>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: event.color }}></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: event.color }}></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: event.color }}></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: event.color }}></div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
