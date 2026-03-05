import { motion } from 'motion/react';
import { Mail, MapPin, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import sac_logo from '../../assets/sac_logo.png';

export function Contact() {

  const sacMembers = [
    {
      name: 'Sarah',
      role: 'President',
      color: '#ff00ff',
    },
    {
      name: 'Shanmukhi',
      role: 'Vice President',
      color: '#00ffff',
    },
    {
      name: 'Sahithi',
      role: 'Treasurer',
      color: '#ff1493',
    },
    {
      name: 'Shresta',
      role: 'Secretary',
      color: '#ff00ff',
    },
    {
      name: 'Hansini',
      role: 'Joint Secretary',
      color: '#00ffff',
    },
    {
      name: 'Varsha',
      role: 'Cultural Head',
      color: '#ff1493',
    },
    {
      name: 'Sai Srinidhi',
      role: 'Technical Head',
      color: '#ff00ff',
    },
    {
      name: 'Nandini',
      role: 'Social Media Head',
      color: '#00ffff',
    },
    {
      name: 'Amitha',
      role: 'Branding Head',
      color: '#ff1493',
    },
    {
      name: 'Sharanya',
      role: 'Creative Head',
      color: '#ff00ff',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'synergia@bvrit.ac.in',
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
    { icon: Instagram, label: 'Instagram', color: '#ff00ff', url: '#' },
    { icon: Facebook, label: 'Facebook', color: '#00ffff', url: '#' },
    { icon: Twitter, label: 'Twitter', color: '#ff1493', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', color: '#ff00ff', url: '#' },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a0015] via-[#1a0033] to-[#0a0015] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="arcade-grid absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* SAC Leadership */}
            <div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <img 
                  src={sac_logo} 
                  alt="SAC Logo" 
                  className="h-20 w-auto object-contain"
                />
                <h3 className="font-['Press_Start_2P'] text-xl sm:text-2xl md:text-3xl text-[#ff00ff]">
                  SAC Leadership Team
                </h3>
              </div>
              
              {/* President & Vice President Row */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 mb-6 max-w-3xl mx-auto">
                {sacMembers.slice(0, 2).map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-black/60 backdrop-blur-sm p-6 pixel-corners border-2 hover:bg-black/80 transition-all duration-300"
                    style={{ borderColor: member.color }}
                  >
                    <h4 className="font-['Orbitron'] text-lg sm:text-xl mb-2" style={{ color: member.color }}>
                      {member.name}
                    </h4>
                    <p className="font-['Rajdhani'] text-sm text-gray-400">
                      {member.role}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Rest of the team - 4 per row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                {sacMembers.slice(2).map((member, index) => (
                  <motion.div
                    key={index + 2}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-black/60 backdrop-blur-sm p-6 pixel-corners border-2 hover:bg-black/80 transition-all duration-300"
                    style={{ borderColor: member.color }}
                  >
                    <h4 className="font-['Orbitron'] text-lg sm:text-xl mb-2" style={{ color: member.color }}>
                      {member.name}
                    </h4>
                    <p className="font-['Rajdhani'] text-sm text-gray-400">
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
                  className="neon-border-blue bg-black/60 backdrop-blur-sm p-4 sm:p-6 pixel-corners group hover:bg-black/80 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div style={{ color: info.color }}>
                      <info.icon className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-['Orbitron'] text-sm sm:text-base text-[#00ffff] mb-1 sm:mb-2">
                        {info.label}
                      </h4>
                      <p className="font-['Rajdhani'] text-sm sm:text-base text-gray-300">
                        {info.value}
                      </p>
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
              transition={{ duration: 0.8, delay: 0.3 }}
              className="neon-border-purple bg-black/60 backdrop-blur-sm p-6 sm:p-8 pixel-corners"
            >
              <h3 className="font-['Orbitron'] text-lg sm:text-xl md:text-2xl text-[#ff00ff] mb-4 sm:mb-6">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="neon-border-blue bg-black/60 p-4 sm:p-6 pixel-corners flex items-center justify-center group transition-all duration-300 hover:bg-black/80"
                  >
                    <social.icon
                      className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300"
                      style={{ color: social.color }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="neon-border-pink bg-black/60 backdrop-blur-sm p-2 pixel-corners overflow-hidden"
            >
              <div className="relative w-full h-48 sm:h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4768445849747!2d78.36918831487652!3d17.526997088022076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9232c87fffff%3A0x64f32b74a3f03f03!2sBVRIT%20Hyderabad%20College%20of%20Engineering%20for%20Women!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'hue-rotate(270deg) saturate(1.5) brightness(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BVRIT Hyderabad Location"
                  className="rounded-sm"
                />
                {/* Overlay for arcade effect */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <div className="scanlines absolute inset-0"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}