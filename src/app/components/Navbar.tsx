import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import vishnu_logo from '../../assets/vishnu_logo.png';
import sac_logo from '../../assets/sac_logo.png';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/events', label: 'Events' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/sponsors', label: 'Sponsors' },
    { path: '/startup-hub', label: 'Startup Hub' },
    { path: '/contact', label: 'Contact' },
    { path: '/profile', label: 'Profile' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/98 backdrop-blur-md shadow-lg' : 'bg-black/80 backdrop-blur-sm'
      }`}
      style={{
        borderBottom: scrolled 
          ? '2px solid rgba(0, 255, 255, 0.4)' 
          : '2px solid rgba(255, 0, 255, 0.3)',
        boxShadow: scrolled 
          ? '0 0 20px rgba(0, 255, 255, 0.3), 0 4px 30px rgba(0, 0, 0, 0.8)' 
          : '0 0 15px rgba(255, 0, 255, 0.2)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Logo - Vishnu */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img 
              src={vishnu_logo} 
              alt="BVRIT Hyderabad" 
              className="h-14 w-auto object-contain"
            />
          </motion.div>

          {/* Navigation Items - Centered with 32px spacing */}
          <div className="flex items-center" style={{ gap: '32px' }}>
            {navItems.map((item, index) => (
              <Link
                key={`${item.path}-${index}`}
                to={item.path}
                className="relative group"
              >
                {/* Navigation Text - Active gets neon glow, inactive is clean */}
                <span
                  className={`relative font-['Orbitron'] text-[15px] font-semibold uppercase tracking-wider transition-all duration-300`}
                  style={{
                    letterSpacing: '0.08em',
                    color: isActive(item.path) ? '#00FFFF' : '#E5E5E5',
                    textShadow: isActive(item.path) 
                      ? `
                        0 0 8px rgba(0, 255, 255, 0.4),
                        0 0 12px rgba(0, 255, 255, 0.2)
                      `
                      : 'none',
                  }}
                >
                  {item.label}
                </span>

                {/* Hover State - Only for inactive tabs */}
                {!isActive(item.path) && (
                  <span
                    className="absolute inset-0 font-['Orbitron'] text-[15px] font-semibold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      letterSpacing: '0.08em',
                      color: '#39FF14',
                      textShadow: `
                        0 0 8px rgba(57, 255, 20, 0.4),
                        0 0 12px rgba(57, 255, 20, 0.2)
                      `,
                    }}
                    aria-hidden="true"
                  >
                    {item.label}
                  </span>
                )}

                {/* Pulsing background glow - only on active */}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute inset-0 -z-10 rounded"
                    style={{
                      background: 'radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, transparent 70%)',
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                )}

                {/* Hover glow effect - only on inactive */}
                {!isActive(item.path) && (
                  <motion.div
                    className="absolute inset-0 -z-10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle, rgba(57, 255, 20, 0.12) 0%, transparent 70%)',
                    }}
                  />
                )}

                {/* Active Indicator - Static Underline (NO layoutId, NO animation between tabs) */}
                {isActive(item.path) && (
                  <div
                    className="absolute -bottom-1 left-0 right-0 h-[2px]"
                    style={{
                      background: 'linear-gradient(90deg, #ff00ff, #00ffff, #39ff14)',
                      boxShadow: '0 0 8px #ff00ff, 0 0 12px #00ffff, 0 0 16px #39ff14',
                    }}
                  />
                )}

                {/* Small Dot Indicator - only on active */}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: '#00ffff',
                      boxShadow: '0 0 6px #00ffff, 0 0 12px #00ffff',
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Logo - SAC */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img 
              src={sac_logo} 
              alt="Student Affairs Council" 
              className="h-14 w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
