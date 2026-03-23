import React from 'react';
import { motion } from 'framer-motion';

// Using local assets provided in the public/images folder
const formBg = '/images/FormsectionImg.png';
const formSide = '/images/FormsectionInnerImg.png';

const FormSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Background Image without Blur */}
      <motion.div 
        initial={{ scale: 1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          backgroundImage: `url(${formBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Main Card */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-5xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]"
      >
        
        {/* Left Side: Image */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full"
        >
          <img 
            src={formSide} 
            alt="Interior sunset view" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side: Form */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          <div className="text-center mb-10">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-lacroom text-[#333] mb-2 leading-tight"
            >
              Design The Home You’ve
            </motion.h2>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-lacroom text-coral"
            >
              Always Imagined
            </motion.h2>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {/* Name */}
              <div className="relative group">
                <input 
                  type="text" 
                  id="name"
                  placeholder="Name*" 
                  className="w-full border-b border-gray-300 py-2 bg-transparent text-[#333] cursor-text focus:outline-none focus:border-coral peer placeholder-transparent"
                  style={{ caretColor: '#333' }}
                  required
                />
                <label 
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-coral peer-focus:text-sm"
                >
                  Name*
                </label>
              </div>

              {/* Phone No */}
              <div className="relative group">
                <input 
                  type="tel" 
                  id="phone"
                  placeholder="Phone No.*" 
                  className="w-full border-b border-gray-300 py-2 bg-transparent text-[#333] cursor-text focus:outline-none focus:border-coral peer placeholder-transparent"
                  style={{ caretColor: '#333' }}
                  required
                />
                <label 
                  htmlFor="phone"
                  className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-coral peer-focus:text-sm"
                >
                  Phone No.*
                </label>
              </div>

              {/* Email */}
              <div className="relative group">
                <input 
                  type="email" 
                  id="email"
                  placeholder="Email*" 
                  className="w-full border-b border-gray-300 py-2 bg-transparent text-[#333] cursor-text focus:outline-none focus:border-coral peer placeholder-transparent"
                  style={{ caretColor: '#333' }}
                  required
                />
                <label 
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-coral peer-focus:text-sm"
                >
                  Email*
                </label>
              </div>

              {/* City */}
              <div className="relative group">
                <input 
                  type="text" 
                  id="city"
                  placeholder="City*" 
                  className="w-full border-b border-gray-300 py-2 bg-transparent text-[#333] cursor-text focus:outline-none focus:border-coral peer placeholder-transparent"
                  style={{ caretColor: '#333' }}
                  required
                />
                <label 
                  htmlFor="city"
                  className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-coral peer-focus:text-sm"
                >
                  City*
                </label>
              </div>
            </div>

            {/* Description */}
            <div className="relative group">
              <input 
                type="text" 
                id="description"
                placeholder="Description*" 
                className="w-full border-b border-gray-300 py-2 bg-transparent text-[#333] cursor-text focus:outline-none focus:border-coral peer placeholder-transparent"
                style={{ caretColor: '#333' }}
                required
              />
              <label 
                htmlFor="description"
                className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-coral peer-focus:text-sm"
              >
                Description*
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button 
                type="submit" 
                className="text-coral font-medium border-b-2 border-coral pb-1 hover:text-coral/80 hover:border-coral/80 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default FormSection;
