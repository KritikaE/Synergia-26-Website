import { motion } from 'motion/react';
import { User, Calendar, CheckCircle, Clock, Trophy } from 'lucide-react';

interface RegisteredEvent {
  id: string;
  title: string;
  category: 'Technical' | 'Cultural' | 'Workshop';
  dateTime: string;
  venue: string;
  status: 'confirmed' | 'pending' | 'waitlist';
  color: string;
}

export function Profile() {
  // Mock user data
  const userData = {
    name: 'Participant Name',
    email: 'participant@example.com',
    college: 'BVRIT Hyderabad',
    registrationId: 'SYN2026-A123',
  };

  // Mock registered events
  const registeredEvents: RegisteredEvent[] = [
    {
      id: 'hack4sdgs',
      title: 'HACK4SDGs',
      category: 'Technical',
      dateTime: 'March 31, 2026 - 10:00 AM',
      venue: 'CSE Block - Lab 301',
      status: 'confirmed',
      color: '#ff00ff',
    },
    {
      id: 'thandav',
      title: 'THANDAV',
      category: 'Cultural',
      dateTime: 'April 1, 2026 - 6:00 PM',
      venue: 'Open Arena',
      status: 'confirmed',
      color: '#ff1493',
    },
    {
      id: 'resinart',
      title: 'RESIN ART',
      category: 'Workshop',
      dateTime: 'April 1, 2026 - 10:00 AM',
      venue: 'Craft Studio',
      status: 'waitlist',
      color: '#00ffff',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return '#00ff00';
      case 'pending':
        return '#ffff00';
      case 'waitlist':
        return '#ff6600';
      default:
        return '#ffffff';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return CheckCircle;
      case 'pending':
        return Clock;
      case 'waitlist':
        return Clock;
      default:
        return CheckCircle;
    }
  };

  return (
    <section id="profile" className="relative min-h-screen py-24 sm:py-28 md:py-32 bg-gradient-to-b from-[#0a0015] via-[#1a0033] to-[#0a0015] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="arcade-grid absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-['Press_Start_2P'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl neon-text-purple mb-4 sm:mb-6">
            PLAYER PROFILE
          </h2>
          <p className="font-['Rajdhani'] text-base sm:text-lg md:text-xl text-[#00ffff]">
            Track your registrations • Manage your events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* User Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="neon-border-purple bg-black/60 backdrop-blur-sm p-6 sm:p-8 pixel-corners sticky top-24">
              <div className="flex justify-center mb-6">
                <div className="neon-border-blue bg-black/60 p-6 rounded-full">
                  <User className="w-16 h-16 sm:w-20 sm:h-20 text-[#00ffff]" />
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="font-['Orbitron'] text-xl sm:text-2xl text-[#ff00ff] mb-2">
                  {userData.name}
                </h3>
                <p className="font-['Rajdhani'] text-sm sm:text-base text-gray-400">
                  {userData.email}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="neon-border-blue bg-black/40 p-3 pixel-corners">
                  <div className="font-['Press_Start_2P'] text-[8px] sm:text-[10px] text-[#00ffff] mb-1">
                    COLLEGE
                  </div>
                  <div className="font-['Rajdhani'] text-sm text-gray-300">
                    {userData.college}
                  </div>
                </div>

                <div className="neon-border-pink bg-black/40 p-3 pixel-corners">
                  <div className="font-['Press_Start_2P'] text-[8px] sm:text-[10px] text-[#ff1493] mb-1">
                    REG ID
                  </div>
                  <div className="font-['Rajdhani'] text-sm text-gray-300">
                    {userData.registrationId}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="neon-border-blue bg-black/40 p-3 pixel-corners text-center">
                  <Trophy className="w-6 h-6 text-[#ff00ff] mx-auto mb-2" />
                  <div className="font-['Orbitron'] text-lg sm:text-xl text-[#ff00ff]">
                    {registeredEvents.length}
                  </div>
                  <div className="font-['Press_Start_2P'] text-[8px] text-gray-400">
                    EVENTS
                  </div>
                </div>
                <div className="neon-border-purple bg-black/40 p-3 pixel-corners text-center">
                  <CheckCircle className="w-6 h-6 text-[#00ff00] mx-auto mb-2" />
                  <div className="font-['Orbitron'] text-lg sm:text-xl text-[#00ff00]">
                    {registeredEvents.filter(e => e.status === 'confirmed').length}
                  </div>
                  <div className="font-['Press_Start_2P'] text-[8px] text-gray-400">
                    CONFIRMED
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Registered Events */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="font-['Orbitron'] text-xl sm:text-2xl text-[#00ffff] mb-4">
                Registered Events
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {registeredEvents.map((event, index) => {
                const StatusIcon = getStatusIcon(event.status);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="neon-border-blue bg-black/60 backdrop-blur-sm p-4 sm:p-6 pixel-corners hover:bg-black/80 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="inline-block">
                            <span
                              className="font-['Press_Start_2P'] text-[8px] sm:text-[10px] px-2 py-1 border-2 pixel-corners"
                              style={{
                                color: event.color,
                                borderColor: event.color,
                              }}
                            >
                              {event.category.toUpperCase()}
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2 px-2 py-1"
                            style={{ color: getStatusColor(event.status) }}
                          >
                            <StatusIcon className="w-4 h-4" />
                            <span className="font-['Rajdhani'] text-xs sm:text-sm uppercase">
                              {event.status}
                            </span>
                          </div>
                        </div>

                        <h4
                          className="font-['Orbitron'] text-lg sm:text-xl mb-3"
                          style={{
                            color: event.color,
                            textShadow: `0 0 10px ${event.color}`,
                          }}
                        >
                          {event.title}
                        </h4>

                        <div className="space-y-2 font-['Rajdhani'] text-sm sm:text-base text-gray-300">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#00ffff]" />
                            <span>{event.dateTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                              <Trophy className="w-4 h-4 text-[#ff1493]" />
                            </motion.div>
                            <span>{event.venue}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex sm:flex-col gap-2">
                        <button className="neon-button neon-border-purple bg-black/60 px-4 py-2 font-['Orbitron'] text-xs sm:text-sm text-[#ff00ff] hover:bg-[#ff00ff]/20 transition-all duration-300 pixel-corners">
                          VIEW DETAILS
                        </button>
                        <button className="neon-button neon-border-pink bg-black/60 px-4 py-2 font-['Orbitron'] text-xs sm:text-sm text-[#ff1493] hover:bg-[#ff1493]/20 transition-all duration-300 pixel-corners">
                          CANCEL
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Empty State */}
              {registeredEvents.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="neon-border-blue bg-black/60 backdrop-blur-sm p-8 sm:p-12 pixel-corners text-center"
                >
                  <Trophy className="w-16 h-16 text-[#00ffff] mx-auto mb-4 opacity-50" />
                  <p className="font-['Orbitron'] text-lg sm:text-xl text-gray-400 mb-2">
                    No Events Registered Yet
                  </p>
                  <p className="font-['Rajdhani'] text-sm sm:text-base text-gray-500">
                    Start by exploring available events
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
