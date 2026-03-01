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
    { path: '/stalls', label: 'Stalls' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/sponsors', label: 'Sponsors' },
    { path: '/startup-hub', label: 'Startup Hub' },
    { path: '/contact', label: 'Contact' },
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
        scrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-black/85 backdrop-blur-sm'
      }`}
      style={{
        borderBottom: '1px solid rgba(0, 217, 255, 0.2)',
        boxShadow: scrolled 
          ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
          : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
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
              className="h-20 w-auto object-contain"
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
                    color: isActive(item.path) ? '#00d9ff' : '#d1d5db',
                    textShadow: isActive(item.path) 
                      ? '0 0 4px rgba(0, 217, 255, 0.3)'
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
                      color: '#00d9ff',
                    }}
                    aria-hidden="true"
                  >
                    {item.label}
                  </span>
                )}

                {/* Active indicator - simple underline */}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                    layoutId="activeTab"
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
              className="h-20 w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
