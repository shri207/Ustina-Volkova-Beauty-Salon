import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const pricing = [
  {
    name: "Essential",
    price: "KD 15",
    features: ["Hair Spa", "Wash", "Styling"],
    highlight: false
  },
  {
    name: "Premium",
    price: "KD 30",
    features: ["Keratin", "Botox", "Treatment"],
    highlight: true
  },
  {
    name: "Signature",
    price: "KD 50",
    features: ["Extensions", "Coloring", "Styling"],
    highlight: false
  }
];

const faqs = [
  { q: "Do you specialize in hair extensions?", a: "Yes, we specialize in premium, seamless hair extensions using the finest quality human hair to ensure natural blending." },
  { q: "Do you offer keratin treatments?", a: "Absolutely. We offer customized Keratin treatments tailored to your hair type to restore shine and eliminate frizz." },
  { q: "What products are used?", a: "We exclusively use luxury, salon-grade products from top international brands to ensure the health and vibrancy of your hair." },
  { q: "Do I need an appointment?", a: "Yes, to ensure every client receives our undivided attention, we operate on an appointment-only basis." },
  { q: "How long do treatments take?", a: "Treatment times vary. A basic styling may take an hour, while color transformations or extensions can take 3-5 hours." },
  { q: "Are consultations available?", a: "Yes! We highly recommend a consultation before major transformations so we can analyze your hair and discuss your goals." }
];

export function PricingFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-offwhite border-t border-softblack/10">
      <div className="max-w-[1400px] mx-auto px-10">
        
        {/* Pricing Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-4 font-sans text-softblack">Investment</h3>
            <h2 className="text-5xl md:text-6xl font-serif text-softblack italic">Salon Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto border border-softblack/10">
            {pricing.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-10 flex flex-col border border-softblack/10 ${
                  pkg.highlight 
                    ? 'bg-softblack text-offwhite relative -translate-y-4 shadow-xl' 
                    : 'bg-pearl text-softblack'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-softblack text-[10px] uppercase tracking-widest px-4 py-1 font-sans">
                    Most Popular
                  </div>
                )}
                <h4 className="text-xl font-serif mb-2">{pkg.name}</h4>
                <div className="text-3xl font-serif mb-8">{pkg.price}</div>
                <div className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map(feature => (
                    <div key={feature} className={`text-[10px] font-sans tracking-widest uppercase ${pkg.highlight ? 'text-white/70' : 'text-softblack/70'}`}>
                      • {feature}
                    </div>
                  ))}
                </div>
                <a 
                  href="#appointment"
                  className={`block text-center py-4 text-[10px] font-sans uppercase tracking-widest transition-colors ${
                    pkg.highlight 
                      ? 'bg-gold text-softblack hover:bg-white' 
                      : 'border border-softblack text-softblack hover:bg-softblack hover:text-white'
                  }`}
                >
                  Book Package
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-4 font-sans text-softblack">Inquiries</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-softblack italic">Questions & Answers</h2>
          </div>

          <div className="space-y-4 border-t border-softblack/10 pt-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-softblack/10 pb-4">
                <button
                  className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                >
                  <span className="font-serif text-lg md:text-xl text-softblack pr-8">{faq.q}</span>
                  <span className="text-gold-dark flex-shrink-0">
                    {openFAQ === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFAQ === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-softblack/70 font-sans text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
