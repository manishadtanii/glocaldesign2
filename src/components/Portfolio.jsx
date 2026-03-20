import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Portfolio = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const images = [
        { src: "/images/consultation2.png", offset: "translate-y-[-1rem]", height: "h-[200px] lg:h-[450px]", flex: 1.5, parallax: [-20, 20] },
        { src: "/images/consultation1.png", offset: "translate-y-[6rem]", height: "h-[350px] lg:h-[480px]", flex: 1.8, parallax: [30, -30] },
        { src: "/images/consultation3.png", offset: "translate-y-[2rem]", height: "h-[350px] lg:h-[550px]", flex: 1.8, parallax: [-50, 50] },
        { src: "/images/consultation4.png", offset: "translate-y-[10rem]", height: "h-[380px] lg:h-[520px]", flex: 1.8, parallax: [40, -40] },
        { src: "/images/consultation5.png", offset: "translate-y-[4rem]", height: "h-[280px] lg:h-[380px]", flex: 1.4, parallax: [-30, 30] }
    ];

    return (
        <section 
            ref={containerRef}
            className="relative w-full bg-white py-32 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
        >
            <div className="max-w-[140rem] mx-auto">
                {/* Image Gallery */}
                <div className="flex items-center justify-between mb-32">
                    {images.map((img, index) => {
                        const y = useTransform(scrollYProgress, [0, 1], img.parallax);
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                style={{ 
                                    flex: img.flex,
                                    y 
                                }}
                                whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                                className={`relative ${img.height} ${img.offset} overflow-hidden rounded-sm shadow-lg cursor-pointer group`}
                            >
                                <motion.img 
                                    src={img.src} 
                                    alt={`Portfolio ${index + 1}`} 
                                    className="w-full h-full object-cover"
                                    whileHover={{ 
                                        scale: 1.15,
                                        transition: { duration: 1.2, ease: "easeOut" }
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Text and CTA */}
                <div className="flex flex-col items-center justify-center space-y-12 mt-64">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-wrap justify-center items-center gap-4 text-gray-500 font-urbanist text-xl md:text-2xl lg:text-3xl font-light tracking-wide"
                    >
                        <span>Villas</span>
                        <span className="text-gray-300">/</span>
                        <span>Farmhouse</span>
                        <span className="text-gray-300">/</span>
                        <span>Penthouse</span>
                        <span className="text-gray-300">/</span>
                        <span>Apartments</span>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-4 border-2 border-[#FF6123] text-[#FF6123] rounded-full font-urbanist font-semibold text-lg hover:bg-[#FF6123] hover:text-white transition-all duration-300 uppercase tracking-widest shadow-sm hover:shadow-orange-200"
                    >
                        View Portfolio
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
