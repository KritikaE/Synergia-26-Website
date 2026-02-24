import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Heart } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'Startup Hub', href: '/startup-hub' },
    { label: 'Sponsors', href: '/sponsors' },
    { label: 'Contact', href: '/contact' },
    { label: 'Profile', href: '/profile' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black border-t-2 neon-border-purple py-12 sm:py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="arcade-grid absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-['Press_Start_2P'] text-lg sm:text-xl neon-text-purple mb-4 sm:mb-6">
              SYNERGIA
            </h3>
            <p className="font-['Rajdhani'] text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              The Annual Tech & Cultural Fest of BVRIT Hyderabad College of Engineering for Women
            </p>
            <p className="font-['Rajdhani'] text-xs sm:text-sm text-[#00ffff]">
              March 31, 2026 - APRIL 02, 2026
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="font-['Orbitron'] text-base sm:text-lg text-[#00ffff] mb-4 sm:mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="font-['Rajdhani'] text-sm sm:text-base text-gray-400 hover:text-[#ff00ff] transition-colors duration-300 group flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-[#ff1493] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* College Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-['Orbitron'] text-base sm:text-lg text-[#ff1493] mb-4 sm:mb-6">
              COLLEGE INFO
            </h4>
            <div className="space-y-2 sm:space-y-3 font-['Rajdhani'] text-sm sm:text-base text-gray-400">
              <p>BVRIT Hyderabad</p>
              <p>College of Engineering for Women</p>
              <p>Bachupally, Hyderabad</p>
              <p>Telangana - 500090</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="font-['Rajdhani'] text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            © 2026 Synergia - BVRIT Hyderabad. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-['Rajdhani'] text-xs sm:text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#ff00ff] animate-pulse" fill="#ff00ff" />
            <span>by Team Synergia</span>
          </div>
        </motion.div>

        {/* Pixel Pattern */}
        <div className="mt-8 sm:mt-12 flex justify-center gap-1 sm:gap-2">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 sm:w-3 sm:h-3"
              style={{
                backgroundColor: i % 3 === 0 ? '#ff00ff' : i % 3 === 1 ? '#00ffff' : '#ff1493',
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}