import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-[160px] pb-24 overflow-hidden relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[4.5rem] leading-[1.1] mb-6 text-[#3E3A36] font-black">
            Engineering the <br />
            <span className="italic text-[#E5AA3E] font-medium">
              Future of <br /> Technical Mastery
            </span>
          </h1>
          <p className="text-[1.15rem] font-medium text-[#5c5855] mb-10 max-w-[480px] leading-relaxed">
            Trident Academy of Technology is where visionary research meets institutional luxury, cultivating the next lineage of global technical leaders.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-[#1B4D8E] text-white px-10 py-5 rounded-2xl font-bold text-[13px] uppercase tracking-widest inline-flex items-center gap-3 transition-all duration-300 hover:bg-[#8B6E66] hover:shadow-2xl hover:-translate-y-1">
              Discover the Legacy
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-12 -left-24 w-[400px] h-[400px] bg-[#1B4D8E]/5 blur-[100px] rounded-full -z-10 animate-pulse"></div>
          <div className="w-full aspect-[4/5] bg-transparent rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200" 
              alt="Modern University Campus Building" 
              className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
            />
          </div>
          {/* Subtle Glow Overlay */}
          <div className="absolute inset-0 bg-radial-gradient(circle at 70% 30%, rgba(229,170,62,0.15) 0%, transparent 60%) pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
