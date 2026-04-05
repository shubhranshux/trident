import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const StatItem = ({ target, label, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });
  
  const displayValue = useTransform(spring, (value) => 
    Math.floor(value).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      spring.set(target);
    }
  }, [isInView, target, spring]);

  return (
    <div ref={ref} className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm shadow-xl hover:-translate-y-2 transition-all duration-300">
      <motion.span className="text-4xl md:text-5xl font-black text-[#E5AA3E] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
        {displayValue}
      </motion.span>
      <span className="text-[#EFE7DF] text-[11px] font-bold tracking-[.2em] uppercase opacity-80">
        {label}
      </span>
    </div>
  );
};

const StatsCounter = () => {
  const stats = [
    { target: 10000, label: "Alumni Worldwide", suffix: "+" },
    { target: 30, label: "Years of Excellence", suffix: "+" },
    { target: 150, label: "Expert Faculty", suffix: "+" },
    { target: 100, label: "Placement Record", suffix: "%" },
  ];

  return (
    <section id="stats-counter" className="py-24 bg-[#1A1817] border-y border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
