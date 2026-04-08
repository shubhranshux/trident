import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImg1 from "../assets/hero finall.png";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-32 md:pt-40 pb-20 group">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg1} 
          alt="Trident Campus" 
          className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[4000ms]" 
        />
        {/* Dynamic Gradient Overlay - Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1817] via-[#1A1817]/80 to-[#1A1817]/20 md:from-[#1A1817]/95 md:via-[#1A1817]/70 md:to-transparent"></div>
        
        {/* Subtle Animated Particles/Mesh */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30L60 60M0 60L30 30M30 30L60 0M0 0L30 30' stroke='%23ffffff' stroke-width='1' fill='none' fill-rule='evenodd' opacity='0.2'/%3E%3C/svg%3E\")" }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 w-full relative z-10">
        
        <div className="max-w-3xl">
          <div className={`flex items-center gap-4 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mb-8`}>
             <div className="w-12 h-[2px] bg-[#EAB308]"></div>
             <span className="text-[12px] font-black text-[#EAB308] uppercase tracking-[.4em]">Trident Academy of Technology</span>
          </div>

          <h1 className={`font-serif text-5xl md:text-7xl lg:text-[92px] font-black text-white leading-[1] tracking-tight mb-8 transition-all duration-1000 delay-150 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Academic <br />
            <span className="italic text-[#EAB308]">Excellence.</span>
            <br />
            <span className="text-white">Infinite Possibilities.</span>
          </h1>

          <p className={`text-[18px] md:text-xl text-white/80 max-w-xl mb-12 leading-relaxed transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Immerse yourself in Odisha's premier technical ecosystem. We combine rigorous Silicon-tier academics with world-class innovation labs to forge the leaders of tomorrow.
          </p>

          <div className={`flex flex-wrap items-center gap-6 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a href="https://admissions-tat.tekkzy.com/" className="bg-[#EAB308] text-[#1A1817] px-10 py-5 rounded-2xl font-bold text-[13px] uppercase tracking-widest flex items-center gap-3 transition-all duration-300 hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(234,179,8,0.3)] hover:-translate-y-1">
              Begin Journey <ArrowRight size={18} />
            </a>
            <a href="#about" className="text-white font-bold text-[13px] uppercase tracking-widest border-b-2 border-[#EAB308] hover:border-white transition-colors pb-1">
              Know Our Impact
            </a>
          </div>
        </div>

      </div>

      {/* Floating Accreditation Badge - Repositioned */}
      <div className={`absolute bottom-24 right-12 z-20 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} hidden md:block`}>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl overflow-hidden group/badge">
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity"></div>
             <div className="relative z-10">
                <div className="text-4xl font-black text-white mb-1">A+ Grade</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EAB308]">NAAC Accredited</div>
                <div className="mt-4 pt-4 border-t border-white/10 text-[10px] font-medium text-white/50 uppercase tracking-widest">Est. 2005 • Bhubaneswar</div>
             </div>
          </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] font-black text-white/40 uppercase tracking-[.3em]">Scroll</span>
        <ChevronDown size={20} className="text-[#EAB308] animate-bounce" />
      </div>
    </section>
  );
}
