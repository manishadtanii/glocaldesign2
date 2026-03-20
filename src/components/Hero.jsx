import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex flex-col bg-white overflow-hidden">
            {/* Top 70% Background Section */}
            <div
                className="relative w-full h-[65%] flex flex-col items-center"
            >
                {/* Background Image Container */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/hero-bg.png')" }}
                >
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Great Interiors Subtext (Publicity Quote) */}
                <div className="relative mt-auto mb-88 px-6 text-center z-20 max-w-[28rem]">
                    <p className="text-white text-base md:text-xl font-urbanist tracking-wide leading-[1.3] drop-shadow-md">
                        Great interiors don't begin with layouts or materials. They begin with people.
                    </p>
                </div>

                {/* Homes That Reflect... (Overlapping Boundary) */}
                <div className="absolute -bottom-14 md:-bottom-[1.45rem] left-0 w-full text-center z-30 pointer-events-none">
                    <h1 className="font-lacroom text-[8vw] md:text-[8.3vw] leading-[0.85] text-white mix-blend-difference selection:bg-coral">
                        Homes That <br /> Reflect the Lives Within
                    </h1>
                </div>
            </div>

            {/* Bottom 30% Section */}
            <div className="h-[35%] w-full flex flex-col items-center justify-center pt-24 md:pt-12 pb-8  max-w-10xl mx-auto text-center">
                <p className="font-urbanist text-[#4D4D4D] text-xl md:text-xl font-medium leading-relaxed mb-10 max-w-[75rem]">
                    We take the time to understand your world, your family, your routines, your preferences, and the subtle details that shape how you live.
                    Those insights become the foundation of every space we create. Along the way, the bond grows deeper. We're no longer just designing a home, we're helping tell your story through it.
                </p>

                <button className="px-8 py-4 border border-coral text-[#FF6123] rounded-full font-urbanist font-bold tracking-widest text-[10px] md:text-[15px]  hover:bg-coral hover:text-white transition-all duration-500">
                    Start Designing Your Home
                </button>
            </div>
        </section>
    );
};

export default Hero;
