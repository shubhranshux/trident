import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
              <span className="text-[#E5AA3E] font-black uppercase tracking-[.3em] text-[10px]">ABOUT TRIDENT</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-[#3E3A36] leading-[1.1] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              A Legacy of <br />
              <span className="text-[#1B4D8E] italic">Excellence</span>,<br />
              A Future of Innovation.
            </h1>
            <p className="text-lg md:text-xl text-[#5c5855] font-light leading-relaxed max-w-2xl mb-12">
              From a visionary coffee table discussion in 1991 to becoming a top-ranked pinnacle of technical education in Odisha.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="#milestones" 
                className="bg-[#1B4D8E] hover:bg-[#8B6E66] text-white font-bold px-10 py-5 rounded-2xl uppercase text-[11px] tracking-[.2em] transition-all duration-300 hover:-translate-y-1 shadow-[0_20px_40px_-15px_rgba(27,77,142,0.4)]"
              >
                Our Journey
              </a>
              <a 
                href="#academics" 
                className="border border-[#EFE7DF] hover:border-[#1B4D8E] text-[#3E3A36] font-bold px-10 py-5 rounded-2xl uppercase text-[11px] tracking-[.2em] transition-all duration-300 hover:-translate-y-1 bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
              >
                View Rankings
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
            className="relative"
          >
            <div className="absolute -top-5 -left-5 bg-[#E5AA3E] text-[#1A1817] font-black px-6 py-4 text-xs tracking-[.2em] z-20 shadow-2xl rounded-tr-2xl rounded-bl-2xl">
              ESTABLISHED 2005
            </div>
            <div className="rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-[#EFE7DF]">
              <img 
                src="/assets/about/hero_vibrant_campus_sunset_premium_1774683689660.png" 
                alt="Trident Campus" 
                className="w-full h-[400px] md:h-[550px] object-cover hover:scale-105 transition-transform duration-1000" 
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1B4D8E] opacity-[0.05] rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 -left-12 w-24 h-24 bg-[#E5AA3E] opacity-[0.1] rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
