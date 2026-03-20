import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects = () => {
    const containerRef = useRef(null);

    // Scroll-based zoom out for the main image
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.3], [1.1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    const images = [
        '/images/project1.png',
        '/images/project2.png',
        '/images/project3.png',
        '/images/project4.png',
        '/images/project5.png',
    ];

    // Variants for the "straight slide-in" animation
    const galleryVariants = {
        hidden: {
            opacity: 0,
            x: -100 // Less aggressive displacement
        },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2, // Increased stagger for "slow and smooth"
                duration: 1.5, // Slower duration
                ease: [0.22, 1, 0.36, 1] // Very smooth quintic-out
            }
        })
    };

    return (
        <section ref={containerRef} className="relative w-full h-screen flex flex-col bg-white overflow-hidden py-10 px-6 md:px-12 lg:px-24">
            {/* Main Image (70% height) with Zoom Out Animation */}
            <div className="relative w-full h-[65%] overflow-hidden rounded-sm mb-6 shadow-2xl">
                <motion.div
                    style={{
                        scale,
                        opacity,
                        backgroundImage: "url('/images/secondbed.png')"
                    }}
                    className="w-full h-full bg-cover bg-center"
                />
            </div>

            {/* Gallery (Part of bottom 35%) with Slide-in Animation */}
            <div className="flex gap-4 md:gap-5 mb-8 h-[20%] overflow-visible items-center">
                {images.map((src, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={galleryVariants}
                        className="flex-1 h-full overflow-hidden rounded-sm shadow-md border border-gray-100 bg-gray-50"
                    >
                        <img
                            src={src}
                            alt={`Project ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 ease-out cursor-pointer"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Footer (Part of bottom 35%) */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6 mt-auto pb-4 h-[10%]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="max-w-[30rem]"
                >
                    <p className="font-urbanist text-black text-base md:text-xl font-light leading-snug">
                        Because a house becomes a home only when it begins to feel like it belongs to you.
                    </p>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="px-10 py-3 border border-coral text-coral rounded-full font-urbanist font-medium tracking-wide text-xs md:text-sm hover:bg-coral hover:text-white transition-all duration-300 whitespace-nowrap"
                >
                    Explore Our Projects
                </motion.button>
            </div>
        </section>
    );
};

export default Projects;
