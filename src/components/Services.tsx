import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Hair Extensions',
    price: 'Starting KD 35',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1964&auto=format&fit=crop',
  },
  {
    title: 'Keratin Treatment',
    price: 'Starting KD 30',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1964&auto=format&fit=crop',
  },
  {
    title: 'Hair Botox',
    price: 'Starting KD 25',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1964&auto=format&fit=crop',
  },
  {
    title: 'Hair Coloring',
    price: 'Starting KD 20',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1964&auto=format&fit=crop',
  },
  {
    title: 'Luxury Hair Spa',
    price: 'Starting KD 15',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Bridal Styling',
    price: 'Starting KD 40',
    image: 'https://images.unsplash.com/photo-1622281229440-b6f13e734318?q=80&w=1935&auto=format&fit=crop',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="text-center mb-16 md:mb-24 border-b border-softblack/10 pb-16">
          <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-4 font-sans text-softblack">Signature Offerings</h3>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-softblack italic">Curated Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-softblack/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden flex flex-col h-[600px] cursor-pointer border border-softblack/10"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover mix-blend-multiply opacity-80 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-pearl/20 group-hover:bg-pearl/0 transition-colors duration-500" />
              </div>
              
              <div className="relative mt-auto p-10 flex flex-col items-center text-center bg-gradient-to-t from-pearl/90 to-transparent pt-32">
                <h3 className="text-3xl font-serif text-softblack mb-2">{service.title}</h3>
                <p className="text-softblack uppercase tracking-[0.2em] text-[10px] font-sans opacity-60 mb-8">{service.price}</p>
                
                <a 
                  href="#appointment"
                  className="inline-flex items-center space-x-2 border-b border-softblack text-softblack uppercase tracking-widest text-[10px] font-sans pb-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                >
                  <span>Book Session</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
