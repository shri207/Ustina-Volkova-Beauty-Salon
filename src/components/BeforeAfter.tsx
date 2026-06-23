import { useState, useRef, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { motion } from 'motion/react';
import { GripVertical } from 'lucide-react';

const beforeAfterPairs = [
  {
    category: "Hair Extension Transformations",
    before: "https://images.unsplash.com/photo-1620552028682-1e9a25b15bb3?q=80&w=1974&auto=format&fit=crop", // placeholder
    after: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2080&auto=format&fit=crop",
  },
  {
    category: "Coloring & Styling",
    before: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1964&auto=format&fit=crop", // placeholder
    after: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1964&auto=format&fit=crop",
  }
];

function ComparisonSlider({ before, after }: { before: string, after: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const onMouseMove = (e: ReactMouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: ReactTouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      className="relative w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden select-none"
      ref={containerRef}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After Image (Background) */}
      <img 
        src={after} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 right-4 bg-softblack/50 backdrop-blur-sm text-offwhite px-4 py-1 text-xs uppercase tracking-widest z-10 pointer-events-none">After</div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={before} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
        />
        <div className="absolute top-4 left-4 bg-softblack/50 backdrop-blur-sm text-offwhite px-4 py-1 text-xs uppercase tracking-widest z-10 pointer-events-none">Before</div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-offwhite cursor-ew-resize z-20 flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="w-10 h-10 bg-offwhite rounded-full shadow-lg flex items-center justify-center text-softblack transform -translate-x-1/2 cursor-ew-resize">
          <GripVertical size={20} />
        </div>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="transformations" className="py-24 md:py-32 bg-pearl border-t border-softblack/10">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="text-center mb-16">
          <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-4 font-sans text-softblack">The Magic</h3>
          <h2 className="text-5xl md:text-6xl font-serif text-softblack italic">Transformations</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {beforeAfterPairs.map((pair, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`px-6 py-3 text-[10px] uppercase tracking-widest font-sans transition-all border ${
                activeIndex === idx 
                  ? 'bg-softblack text-offwhite border-softblack' 
                  : 'bg-transparent border-softblack/20 text-softblack hover:border-softblack'
              }`}
            >
              {pair.category}
            </button>
          ))}
        </div>

        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ComparisonSlider 
            before={beforeAfterPairs[activeIndex].before} 
            after={beforeAfterPairs[activeIndex].after} 
          />
        </motion.div>
      </div>
    </section>
  );
}
