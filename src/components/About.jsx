import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="relative w-full bg-white py-10 md:py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-[140rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 items-start">
                {/* Heading Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-[80%]"
                >
                    <h2 className="font-lacroom text-4xl md:text-5xl lg:text-[5.5rem] leading-[1] text-[#FF6123] tracking-tight">
                        <span className="block whitespace-nowrap">The People Behind</span>
                        <span className="block">Your Space.</span>
                    </h2>
                </motion.div>

                {/* Paragraph Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="md:mt-44 md:ml-[-5vw] lg:ml-[-8vw]"
                >
                    <p className="font-urbanist text-[#4D4D4D] text-lg pl-28 md:text-2xl lg:text-2xl font-medium leading-[1.5] max-w-5xl">
                        At Glocal Design, we believe every home begins with a story. Building on the idea that great interiors start with people, we combine a refined global perspective with a deep understanding of your lifestyle, shaping spaces that feel personal, meaningful, and truly yours
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
