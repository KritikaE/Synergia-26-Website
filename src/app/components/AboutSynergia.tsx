import { motion } from 'motion/react';
import { Zap, Users, Trophy, Sparkles } from 'lucide-react';

export function AboutSynergia() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden bg-gradient-to-b from-[#0a0015] via-[#0a0020] to-[#0a0015]">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="arcade-grid absolute inset-0"></div>
      </div>
      <div className="scanlines absolute inset-0 opacity-10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? '#ff00ff' : '#00ffff',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Decorative top element */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center gap-3 mb-6"
          >
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#ff00ff]"></div>
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ffff]" />
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#ff00ff]"></div>
          </motion.div>

          <h2
            className="font-['Orbitron'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(255, 0, 255, 0.3)',
            }}
          >
            About SYNERGIA
          </h2>

          {/* Pixel separator */}
          <div className="flex justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2"
                style={{
                  backgroundColor: i % 2 === 0 ? '#ff00ff' : '#00ffff',
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Content Container with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-2xl p-8 sm:p-10 md:p-12"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: `
              0 0 40px rgba(255, 0, 255, 0.1),
              inset 0 0 40px rgba(255, 255, 255, 0.02)
            `,
          }}
        >
          {/* Welcome Heading */}
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-['Rajdhani'] text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8"
            style={{
              color: '#ffffff',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
            }}
          >
            Welcome to Synergia 2025 – Where Innovation Meets Celebration!
          </motion.h3>

          {/* Body Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-['Inter'] text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 space-y-4"
            style={{
              letterSpacing: '0.01em',
              lineHeight: '1.8',
            }}
          >
            <p>
              Experience the ultimate fusion of{' '}
              <span
                className="font-semibold"
                style={{
                  color: '#ff1493',
                  textShadow: '0 0 10px rgba(255, 20, 147, 0.5)',
                }}
              >
                technology and culture
              </span>{' '}
              at Synergia 2026! This{' '}
              <span className="font-semibold text-white">three-day extravaganza</span> at BVRIT
              Hyderabad brings together thrilling competitions, mesmerizing performances, and{' '}
              <span
                className="font-semibold"
                style={{
                  color: '#39ff14',
                  textShadow: '0 0 10px rgba(57, 255, 20, 0.5)',
                }}
              >
                exciting events
              </span>{' '}
              filled with innovation and creativity.
            </p>

            <p>
              Whether you're a{' '}
              <span
                className="font-semibold"
                style={{
                  color: '#00ffff',
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                }}
              >
                tech enthusiast
              </span>
              , an{' '}
              <span
                className="font-semibold"
                style={{
                  color: '#ff00ff',
                  textShadow: '0 0 10px rgba(255, 0, 255, 0.5)',
                }}
              >
                artist
              </span>
              , or a{' '}
              <span
                className="font-semibold"
                style={{
                  color: '#ff1493',
                  textShadow: '0 0 10px rgba(255, 20, 147, 0.5)',
                }}
              >
                performer
              </span>
              , there's something for everyone!
            </p>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 sm:mt-12"
          >
            {[
              { icon: Zap, label: 'Thrilling Competitions', color: '#ff00ff' },
              { icon: Users, label: 'Network & Collaborate', color: '#00ffff' },
              { icon: Trophy, label: 'Amazing Prizes', color: '#39ff14' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${item.color}33`,
                }}
              >
                <item.icon
                  className="w-10 h-10 sm:w-12 sm:h-12 mb-3"
                  style={{
                    color: item.color,
                    filter: `drop-shadow(0 0 10px ${item.color})`,
                  }}
                />
                <p
                  className="font-['Rajdhani'] text-base sm:text-lg font-semibold"
                  style={{
                    color: item.color,
                    textShadow: `0 0 10px ${item.color}80`,
                  }}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex justify-center items-center gap-2 mt-12"
        >
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 sm:w-3 sm:h-3"
              style={{
                backgroundColor: i % 3 === 0 ? '#ff00ff' : i % 3 === 1 ? '#00ffff' : '#ff1493',
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
