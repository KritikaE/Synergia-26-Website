import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import vishnu_logo from '../../assets/vishnu_logo.png';
import sac_logo from '../../assets/sac_logo.png';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/events', label: 'Events' },
    { path: '/stalls', label: 'Stalls' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/sponsors', label: 'Sponsors' },
    { path: '/handbook', label: 'Map' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-28">
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
                className="h-10 md:h-20 w-auto object-contain"
              />
            </motion.div>

            {/* Desktop Navigation Items - Centered with 32px spacing */}
            <div className="hidden md:flex items-center" style={{ gap: '32px' }}>
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

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
                className="h-10 md:h-20 w-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-16 right-0 bottom-0 w-64 bg-black/95 backdrop-blur-md z-40 md:hidden"
            style={{
              borderLeft: '1px solid rgba(0, 217, 255, 0.2)',
            }}
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={`mobile-${item.path}-${index}`}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative group"
                >
                  <span
                    className={`font-['Orbitron'] text-base font-semibold uppercase tracking-wider transition-all duration-300 block py-2`}
                    style={{
                      letterSpacing: '0.08em',
                      color: isActive(item.path) ? '#00d9ff' : '#d1d5db',
                      textShadow: isActive(item.path) 
                        ? '0 0 8px rgba(0, 217, 255, 0.4)'
                        : 'none',
                    }}
                  >
                    {item.label}
                  </span>
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400"
                      layoutId="activeMobileTab"
                    />
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
