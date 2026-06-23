import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Monica Fortich",
    text: "It was a great and satisfying visit. Ustina herself is hands-on and the team is attentive to every need.",
    rating: 5
  },
  {
    name: "Noora A",
    text: "The best experience ever. Ustina is incredibly talented and my hair blends perfectly. Everything looks flawless.",
    rating: 5
  },
  {
    name: "Anna Khruschc",
    text: "The professionalism and quality are amazing. Definitely the best hair artist in Kuwait.",
    rating: 5
  },
  {
    name: "Sarah M.",
    text: "I felt like a VIP from the moment I walked in. The color transformation exceeded all my expectations. Truly luxurious.",
    rating: 5
  },
  {
    name: "Latifa K.",
    text: "Her extensions are seamless! You can't even tell I have them in. The quality of the hair and the service is unmatched.",
    rating: 5
  },
  {
    name: "Emma W.",
    text: "A true artist. Ustina knows exactly what tone suits your skin. I am completely in love with my new look.",
    rating: 5
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-pearl overflow-hidden border-t border-softblack/10">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="text-center mb-16 md:mb-24">
          <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-4 font-sans text-softblack">Client Love</h3>
          <h2 className="text-5xl md:text-6xl font-serif text-softblack mb-6 italic">Experiences</h2>
          <div className="flex justify-center items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-gold">★</span>
            ))}
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-widest font-sans text-softblack opacity-60">5.0 Rating (62 Reviews)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-softblack/10">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-offwhite p-10 border border-softblack/10 hover:bg-white transition-all duration-500 flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-gold text-sm">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-softblack/80 font-serif text-lg leading-relaxed mb-8 flex-grow italic">
                "{review.text}"
              </p>
              <h4 className="text-[10px] uppercase tracking-widest font-sans text-softblack opacity-60">
                {review.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
