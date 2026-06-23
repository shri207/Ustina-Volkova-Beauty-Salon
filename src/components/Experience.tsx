import { motion } from 'motion/react';

const steps = [
  { id: '01', title: 'Consultation', desc: 'Discussing your vision and desires.' },
  { id: '02', title: 'Hair Analysis', desc: 'Assessing hair health and structure.' },
  { id: '03', title: 'Treatment', desc: 'Applying premium products and techniques.' },
  { id: '04', title: 'Transformation', desc: 'The magical process of creation.' },
  { id: '05', title: 'Styling', desc: 'Final touches for a flawless finish.' },
];

export function Experience() {
  return (
    <section className="py-24 md:py-32 bg-offwhite text-softblack relative overflow-hidden border-t border-softblack/10">
      <div className="max-w-[1400px] mx-auto px-10 relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-4 font-sans">The Process</h3>
          <h2 className="text-5xl md:text-6xl font-serif italic">Your Experience</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-[23px] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-softblack/10" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                } md:min-h-[120px]`}
              >
                {/* Mobile View line dot */}
                <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-softblack top-2 md:top-1/2 md:-translate-y-1/2" />

                <div className={`pl-16 md:pl-0 md:w-1/2 ${
                  idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                }`}>
                  <span className="text-softblack/30 font-serif text-3xl mb-2 block italic">{step.id}</span>
                  <h4 className="text-2xl font-serif mb-2">{step.title}</h4>
                  <p className="text-softblack/60 font-sans text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
