import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplet, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../constants';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Service Areas', path: '/service-areas' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-white dark:bg-dark-bg py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors">
            <Droplet className="w-6 h-6 text-primary-600 dark:text-cyan-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl leading-tight text-slate-900 dark:text-white">
              Copperline
            </span>
            <span className="text-xs font-medium text-copper-600 dark:text-copper-400 uppercase tracking-wider">
              Plumbing & Drains
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                'text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-cyan-400',
                location.pathname === link.path
                  ? 'text-primary-600 dark:text-cyan-400'
                  : 'text-slate-600 dark:text-slate-300'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-900 dark:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 dark:border-dark-border bg-white dark:bg-dark-bg overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    'text-base font-medium py-2',
                    location.pathname === link.path
                      ? 'text-primary-600 dark:text-cyan-400'
                      : 'text-slate-600 dark:text-slate-300'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${BUSINESS_INFO.phones.main.replace(/\D/g, '')}`}
                className="bg-primary-600 text-white px-5 py-3 rounded-xl text-center font-semibold mt-2 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                {BUSINESS_INFO.phones.main}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
