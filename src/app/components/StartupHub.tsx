import { motion } from 'motion/react';
import { Rocket, Store, Users, Award, CheckCircle2 } from 'lucide-react';

export function StartupHub() {
  return (
    <section id="startup-hub" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a0015] via-[#1a0033] to-[#0a0015] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="arcade-grid absolute inset-0"></div>
      </div>
      <div className="scanlines absolute inset-0 opacity-10"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#ff00ff' : i % 3 === 1 ? '#00ffff' : '#ff1493',
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16 sm:mb-20"
        >
          {/* Rocket Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8"
          >
            <Rocket className="w-16 h-16 sm:w-20 sm:h-20 text-[#ff00ff]" />
          </motion.div>

          {/* Headline */}
          <h2 className="font-['Press_Start_2P'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl neon-text-purple mb-6 leading-tight">
            LAUNCH YOUR VISION
          </h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Orbitron'] text-xl sm:text-2xl md:text-3xl text-[#00ffff] mt-4"
            style={{
              textShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
            }}
          >
            Where the next big thing begins
          </motion.p>
        </motion.div>

        {/* Three Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {/* Card 1: Dedicated Stall Space */}
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            className="relative p-6 sm:p-8 rounded-xl"
            style={{
              background: 'rgba(255, 0, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 0, 255, 0.4)',
              boxShadow: `
                0 0 30px rgba(255, 0, 255, 0.3),
                inset 0 0 30px rgba(255, 0, 255, 0.05)
              `,
            }}
          >
            <div className="flex flex-col items-center text-center">
              <Store
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6"
                style={{
                  color: '#ff00ff',
                  filter: 'drop-shadow(0 0 15px #ff00ff)',
                }}
              />
              <h3
                className="font-['Rajdhani'] text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                style={{
                  color: '#ff00ff',
                  textShadow: '0 0 15px rgba(255, 0, 255, 0.6)',
                }}
              >
                Dedicated Stall Space
              </h3>
              <p className="font-['Inter'] text-sm sm:text-base text-gray-300 leading-relaxed">
                Present your startup with a professional stall space designed to showcase your innovation and attract attention.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Networking & Exposure */}
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            className="relative p-6 sm:p-8 rounded-xl"
            style={{
              background: 'rgba(0, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '2px solid rgba(0, 255, 255, 0.4)',
              boxShadow: `
                0 0 30px rgba(0, 255, 255, 0.3),
                inset 0 0 30px rgba(0, 255, 255, 0.05)
              `,
            }}
          >
            <div className="flex flex-col items-center text-center">
              <Users
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6"
                style={{
                  color: '#00ffff',
                  filter: 'drop-shadow(0 0 15px #00ffff)',
                }}
              />
              <h3
                className="font-['Rajdhani'] text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                style={{
                  color: '#00ffff',
                  textShadow: '0 0 15px rgba(0, 255, 255, 0.6)',
                }}
              >
                Networking & Exposure
              </h3>
              <p className="font-['Inter'] text-sm sm:text-base text-gray-300 leading-relaxed">
                Connect with students, faculty, and visitors. Build valuable relationships and gain exposure for your venture.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Exclusive Opportunity */}
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            className="relative p-6 sm:p-8 rounded-xl"
            style={{
              background: 'rgba(255, 20, 147, 0.05)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 20, 147, 0.4)',
              boxShadow: `
                0 0 30px rgba(255, 20, 147, 0.3),
                inset 0 0 30px rgba(255, 20, 147, 0.05)
              `,
            }}
          >
            <div className="flex flex-col items-center text-center">
              <Award
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6"
                style={{
                  color: '#ff1493',
                  filter: 'drop-shadow(0 0 15px #ff1493)',
                }}
              />
              <h3
                className="font-['Rajdhani'] text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                style={{
                  color: '#ff1493',
                  textShadow: '0 0 15px rgba(255, 20, 147, 0.6)',
                }}
              >
                Exclusive Opportunity
              </h3>
              <p className="font-['Inter'] text-sm sm:text-base text-gray-300 leading-relaxed">
                Reserved for registered and certified startups. Get recognized and validated in front of a diverse audience.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Who Can Apply Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div
            className="relative p-8 sm:p-10 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: `
                0 0 40px rgba(0, 255, 255, 0.15),
                inset 0 0 30px rgba(255, 255, 255, 0.03)
              `,
            }}
          >
            {/* Section Header */}
            <h3
              className="font-['Orbitron'] text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8"
              style={{
                background: 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(255, 0, 255, 0.3)',
              }}
            >
              Who Can Apply?
            </h3>

            {/* Eligibility List */}
            <div className="space-y-4">
              {[
                'Registered startups with valid certification (DPIIT, Startup India, or equivalent)',
                'Early-stage ventures seeking visibility and mentorship',
                'Tech innovators and entrepreneurs with scalable ideas',
                'Student-led startups from any recognized institution',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <CheckCircle2
                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1"
                    style={{
                      color: '#39ff14',
                      filter: 'drop-shadow(0 0 8px #39ff14)',
                    }}
                  />
                  <p className="font-['Inter'] text-sm sm:text-base text-gray-300 leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section with Supporting Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Supporting Text */}
          <p className="font-['Rajdhani'] text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed px-4">
            Join Synergia 2025 and take your startup to the next level. Limited slots available—register early to secure your spot and be part of this groundbreaking event!
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neon-button neon-border-purple bg-black/60 px-10 sm:px-16 md:px-20 py-5 sm:py-6 md:py-7 font-['Orbitron'] text-lg sm:text-xl md:text-2xl text-[#ff00ff] hover:bg-[#ff00ff]/20 transition-all duration-300 pixel-corners"
          >
            REGISTER NOW
          </motion.button>

          {/* Bottom pixel decoration */}
          <div className="flex justify-center gap-2 mt-10">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
