import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Heart } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'Handbook', href: '/handbook' },
    { label: 'Sponsors', href: '/sponsors' },
    { label: 'Contact', href: '/contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black border-t-2 neon-border-purple py-6 sm:py-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="arcade-grid absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-6"
        >
          {/* Social media content can go here if needed */}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="font-['Rajdhani'] text-sm sm:text-base text-gray-400 text-center sm:text-left">
            © 2026 Synergia - BVRIT Hyderabad. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-['Rajdhani'] text-sm sm:text-base text-gray-400">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-[#ff00ff] animate-pulse" fill="#ff00ff" />
            <span>by Team Synergia</span>
          </div>
        </motion.div>

        {/* Pixel Pattern */}
        <div className="mt-4 sm:mt-6 flex justify-center gap-1 sm:gap-2">
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