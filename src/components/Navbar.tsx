import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Story', href: '#story' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Transformations', href: '#transformations' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Appointment', href: '#appointment' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'bg-offwhite/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-[1400px] w-full mx-auto px-10 flex items-center justify-between">
        <a href="#home" className="text-xs tracking-[0.3em] font-sans uppercase text-softblack">
          Ustina Volkova / Kuwait
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-sans uppercase tracking-widest">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={`hover:opacity-100 transition-opacity pb-1 ${idx === 0 ? 'opacity-100 border-b border-softblack' : 'opacity-50'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#appointment"
            className="px-6 py-2 border border-softblack text-softblack text-[10px] uppercase tracking-widest hover:bg-softblack hover:text-offwhite transition-colors ml-4"
          >
            Book Session
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-softblack" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-offwhite/95 backdrop-blur-md border-b border-warmgray/20 shadow-lg py-6 px-6 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif tracking-wider text-softblack"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-6 py-3 bg-softblack text-offwhite text-center text-sm uppercase tracking-[0.2em]"
            >
              Book Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
