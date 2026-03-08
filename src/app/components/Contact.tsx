import { motion } from 'motion/react';
import { Mail, MapPin, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import sac_logo from '../../assets/sac_logo.png';

export function Contact() {

  const sacMembers = [
    { name: 'Sarah', role: 'President', color: '#ff00ff' },
    { name: 'Shanmukhi', role: 'Vice President', color: '#00ffff' },
    { name: 'Sahithi', role: 'Treasurer', color: '#ff1493' },
    { name: 'Shresta', role: 'Secretary', color: '#ff00ff' },
    { name: 'Hansini', role: 'Joint Secretary', color: '#00ffff' },
    { name: 'Varsha', role: 'Cultural Head', color: '#ff1493' },
    { name: 'Sai Srinidhi', role: 'Technical Head', color: '#ff00ff' },
    { name: 'Nandini', role: 'Social Media Head', color: '#00ffff' },
    { name: 'Amitha', role: 'Branding Head', color: '#ff1493' },
    { name: 'Sharanya', role: 'Creative Head', color: '#ff00ff' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sac@bvrithyderabad.edu.in',
      color: '#ff00ff',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'BVRIT Hyderabad College of Engineering for Women, Hyderabad',
      color: '#00ffff',
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      color: '#ff00ff',
      url: 'https://www.instagram.com/sac_bvrith?igsh=MmZtc3FtMHJrMDV0',
    },
    { icon: Facebook, label: 'Facebook', color: '#00ffff', url: '#' },
    { icon: Twitter, label: 'Twitter', color: '#ff1493', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', color: '#ff00ff', url: '#' },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a0015] via-[#1a0033] to-[#0a0015] overflow-hidden"
    >

      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="arcade-grid absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >

          <h2 className="font-['Press_Start_2P'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl neon-text-purple mb-4 sm:mb-6">
            CONNECT
          </h2>

          <p className="font-['Rajdhani'] text-base sm:text-lg md:text-xl text-[#00ffff] max-w-2xl mx-auto px-4">
            Ready to join? • Drop us a message • Let's sync up
          </p>

        </motion.div>

        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* SAC Leadership */}
            <div>

              <div className="flex items-center justify-center gap-4 mb-8">

                <img
                  src={sac_logo}
                  alt="SAC Logo"
                  className="h-20 w-auto object-contain"
                />

                <h3 className="font-['Press_Start_2P'] text-xl sm:text-2xl md:text-3xl text-[#ff00ff]">
                  SAC Leadership Team
                </h3>

              </div>

              {/* 5 x 2 Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mb-8">

                {sacMembers.map((member, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="bg-black/60 backdrop-blur-sm p-4 pixel-corners border-2 hover:bg-black/80 transition-all duration-300"
                    style={{ borderColor: member.color }}
                  >

                    <h4
                      className="font-['Orbitron'] text-base sm:text-lg mb-1"
                      style={{ color: member.color }}
                    >
                      {member.name}
                    </h4>

                    <p className="font-['Rajdhani'] text-xs sm:text-sm text-gray-400">
                      {member.role}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">

              {contactInfo.map((info, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="neon-border-blue bg-black/60 backdrop-blur-sm p-4 sm:p-6 pixel-corners hover:bg-black/80 transition-all duration-300"
                >

                  <div className="flex items-start gap-4">

                    <info.icon
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      style={{ color: info.color }}
                    />

                    <div>

                      <h4 className="font-['Orbitron'] text-sm sm:text-base text-[#00ffff] mb-1">
                        {info.label}
                      </h4>

                      {info.label === 'Email' ? (

                        <a
                          href={`mailto:${info.value}`}
                          className="font-['Rajdhani'] text-sm sm:text-base text-gray-300 hover:text-white"
                        >
                          {info.value}
                        </a>

                      ) : (

                        <p className="font-['Rajdhani'] text-sm sm:text-base text-gray-300">
                          {info.value}
                        </p>

                      )}

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="neon-border-purple bg-black/60 backdrop-blur-sm p-6 sm:p-8 pixel-corners"
            >

              <h3 className="font-['Orbitron'] text-lg sm:text-xl md:text-2xl text-[#ff00ff] mb-6">
                Follow Us
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                {socialLinks.map((social, index) => (

                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="neon-border-blue bg-black/60 p-4 sm:p-6 pixel-corners flex items-center justify-center hover:bg-black/80"
                  >

                    <social.icon
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      style={{ color: social.color }}
                    />

                  </motion.a>

                ))}

              </div>

            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="neon-border-pink bg-black/60 backdrop-blur-sm p-2 pixel-corners overflow-hidden"
            >

              <div className="relative w-full h-48 sm:h-64 md:h-80">

                <iframe
                  src="https://www.google.com/maps?q=BVRIT%20Hyderabad&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="BVRIT Hyderabad Location"
                />

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}