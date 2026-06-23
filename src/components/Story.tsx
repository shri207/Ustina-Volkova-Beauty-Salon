import { motion } from 'motion/react';

export function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-pearl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1936&auto=format&fit=crop" 
                alt="Ustina Volkova" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold hidden md:block -z-10" />
            <div className="absolute -top-10 -left-10 w-32 h-32 border border-warmgray/30 hidden md:block" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-4 font-sans text-softblack">Our Story</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-softblack mb-8 leading-tight italic">
              Elevating the Art of Hair & Beauty
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-softblack/80 font-sans mb-12">
              Ustina Volkova Beauty Salon specializes in premium hair transformations, extensions, keratin treatments, and personalized beauty experiences. Every client receives one-on-one attention and tailored care to achieve elegant and natural results.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-softblack/10 pt-8">
              <div>
                <div className="text-3xl font-serif text-softblack mb-2 italic">62+</div>
                <div className="text-[10px] uppercase tracking-widest text-softblack/40 font-sans">Five-Star Reviews</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-softblack mb-2 italic">5000+</div>
                <div className="text-[10px] uppercase tracking-widest text-softblack/40 font-sans">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-softblack mb-2 italic">10+</div>
                <div className="text-[10px] uppercase tracking-widest text-softblack/40 font-sans">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-softblack mb-2 italic">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-softblack/40 font-sans">Personalized Care</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
