import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValueEvent } from 'framer-motion';

const data = [
  {
    title: "Design Consultation",
    heading: "Thoughtful direction to help you shape spaces that feel personal.",
    description: "We provide expert design consultation, you execute it with your vendors.",
    image: "/images/consultation1.png",
    thumbnail: "/images/consultation1.png",
  },
  {
    title: "Consultation + Execution",
    heading: "Intelligent layouts that breathe life into every square foot.",
    description: "Optimized floor plans crafted around how you actually live and move.",
    image: "/images/consultation2.png",
    thumbnail: "/images/consultation2.png",
  },
  {
    title: "Turnkey Design and Build",
    heading: "Premium materials chosen with precision to define the mood.",
    description: "From marble to bespoke joinery — we source what elevates your vision.",
    image: "/images/consultation3.png",
    thumbnail: "/images/consultation3.png",
  }
];

const Consultation = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track active index based on scroll (120vh total height makes it faster)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) setActiveIndex(0);
    else if (latest < 0.66) setActiveIndex(1);
    else setActiveIndex(2);
  });

  return (
    <section 
      ref={containerRef} 
      className="relative h-[250vh] bg-white w-full z-40" // Using 250vh for 120vh sticky height feel
    >
      <div className="sticky top-0 h-screen w-full flex items-start justify-center px-6 md:px-12 lg:px-24 pt-20">
        
        <div className="grid grid-cols-12 gap-16 items-start w-full max-w-[140rem]">
          
          {/* 1. Left Image: Height 100vh */}
          <div className="col-span-12 lg:col-span-6 relative h-[75vh] xl:h-[85vh] overflow-hidden rounded-md bg-gray-50 border border-gray-100 shadow-sm">
            {data.map((item, index) => (
              <motion.div 
                key={index}
                className="absolute inset-0"
                initial={false}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1.05 : 1
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-12 left-12 z-40">
                  <span className="text-white text-3xl font-urbanist italic font-semibold tracking-[0.05em] mix-blend-difference">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. Middle Text: Top Aligned */}
          <div className="col-span-12 lg:col-span-4 min-h-[500px] relative flex flex-col gap-12 pt-12">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="space-y-82 pr-10"
              >
                <h2 className="text-5xl lg:text-4xl xl:text-[2rem] font-urbanist font-medium leading-[1.2] text-gray-800">
                  <span className="text-[#FF6123]">
                    {data[activeIndex].heading.split(' ').slice(0, 2).join(' ')}
                  </span> 
                  <br />
                  {data[activeIndex].heading.split(' ').slice(2).join(' ')}
                </h2>
                
                <div className="">
                  <p className="text-[#4D4D4D] font-urbanist text-xl lg:text-2xl max-w-sm leading-snug font-medium">
                    {data[activeIndex].description}
                  </p>
                  <a href="#" className="inline-flex items-center text-[#FF6123] group font-urbanist font-bold uppercase tracking-[0.2em] text-[13px] pt-4">
                    Know More <span className="ml-4 transform transition-transform group-hover:translate-x-4 text-xl">→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3. Right: Thumbnails (Top Aligned) */}
          <div className="hidden lg:flex col-span-2 items-start justify-end gap-10 pt-12">
            {/* Progress Track */}
            <div className="relative w-[4px] h-[340px] bg-gray-100 rounded-full">
              <motion.div 
                className="absolute top-0 left-0 w-full h-[100px] bg-[#FF6123] rounded-full z-50 shadow-[0_4px_15px_rgba(255,97,35,0.4)]"
                style={{ 
                    y: useTransform(smoothProgress, [0, 1], [0, 240])
                }}
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex flex-col gap-6">
              {data.map((item, index) => (
                <div 
                    key={index} 
                    className={`w-[130px] h-[100px] overflow-hidden rounded-sm transition-all duration-500 border ${activeIndex === index ? 'border-[#FF6123] p-1 scale-105 shadow-md' : 'border-gray-100 p-0 opacity-40 shadow-none'}`}
                >
                  <img 
                    src={item.thumbnail} 
                    alt="nav"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Consultation;