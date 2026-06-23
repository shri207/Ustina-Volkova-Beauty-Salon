import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-pearl border-t border-softblack/10 mt-[80px]">
      {/* Background Image / Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop"
          alt="Salon Background"
          className="w-full h-full object-cover mix-blend-multiply opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] px-10 flex flex-col justify-center h-full">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[80px] sm:text-[100px] md:text-[140px] leading-[0.8] tracking-tighter uppercase font-bold text-softblack"
        >
          Ustina<br/>Volkova
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col md:flex-row md:items-center gap-6"
        >
          <div className="hidden md:block w-24 h-[1px] bg-gold-dark" />
          <p className="text-xs uppercase tracking-[0.3em] text-gold-dark font-sans font-bold">
            Hair Is Art. Beauty Is Confidence.
          </p>
          <span className="text-xs uppercase tracking-[0.3em] text-softblack/50 font-sans">
            • Hair • Beauty • Transformations
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-start gap-6"
        >
          <a
            href="#appointment"
            className="px-8 py-4 bg-softblack text-offwhite text-[10px] uppercase tracking-widest hover:bg-gold-dark hover:text-white transition-all w-full sm:w-auto text-center font-sans"
          >
            Book Appointment
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border border-softblack text-softblack text-[10px] uppercase tracking-widest hover:bg-softblack hover:text-white transition-all w-full sm:w-auto text-center font-sans"
          >
            Explore Portfolio
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-10 flex flex-col sm:flex-row gap-8 sm:gap-12 text-[10px] uppercase tracking-widest font-sans text-softblack"
      >
        <div>
          <span className="block opacity-40 mb-1">Scroll To</span>
          <span>Discover</span>
        </div>
      </motion.div>
    </section>
  );
}
