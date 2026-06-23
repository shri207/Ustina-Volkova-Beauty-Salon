import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Parallax } from 'swiper/modules';
import { motion } from 'motion/react';
import 'swiper/css';
import 'swiper/css/free-mode';

const portfolioImages = [
  { src: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=1964&auto=format&fit=crop", title: "Hair Extensions", category: "Extensions" },
  { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop", title: "Keratin Results", category: "Treatment" },
  { src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2080&auto=format&fit=crop", title: "Color Transformations", category: "Color" },
  { src: "https://images.unsplash.com/photo-1620552028682-1e9a25b15bb3?q=80&w=1974&auto=format&fit=crop", title: "Hair Botox", category: "Treatment" },
  { src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1964&auto=format&fit=crop", title: "Bridal Looks", category: "Styling" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-offwhite text-softblack overflow-hidden border-t border-softblack/10">
      <div className="max-w-[100vw] mx-auto">
        <div className="px-10 mb-16 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-4 font-sans">The Lookbook</h3>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif italic">Portfolio Showcase</h2>
          </motion.div>
        </div>

        <Swiper
          modules={[FreeMode, Mousewheel, Parallax]}
          slidesPerView="auto"
          spaceBetween={40}
          freeMode={true}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          parallax={true}
          className="w-full px-10 !pb-12 max-w-[1400px] mx-auto"
        >
          {portfolioImages.map((item, index) => (
            <SwiperSlide key={index} className="!w-[85vw] md:!w-[50vw] lg:!w-[35vw] h-[60vh] md:h-[70vh]">
              <div className="relative w-full h-full overflow-hidden group cursor-pointer border border-softblack/10">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-90 mix-blend-multiply"
                  style={{ backgroundImage: `url(${item.src})` }}
                  data-swiper-parallax="20%"
                />
                <div className="absolute inset-0 bg-pearl/10 group-hover:bg-pearl/0 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 p-10 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-pearl/90 to-transparent pt-32">
                  <p className="text-softblack uppercase tracking-[0.2em] text-[10px] mb-2 font-sans opacity-60">{item.category}</p>
                  <h4 className="text-3xl font-serif text-softblack">{item.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
