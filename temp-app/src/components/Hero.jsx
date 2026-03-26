import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImg1 from "../assets/hero finall.png";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-32 md:pt-40 pb-20 group">
      
      {/* Diagonal Background Split */}
      <div className="absolute top-0 right-0 w-[45%] h-full -skew-x-12 translate-x-32 z-0 hidden lg:block bg-[#FAF9F7]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EFE7DF]/20 skew-y-12 -translate-x-32 z-0" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%231A1817' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="text-left">
          <div className={`flex items-center gap-4 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mb-8`}>
             <div className="w-12 h-[2px] bg-[#8B6E66]"></div>
             <span className="text-[12px] font-black text-[#8B6E66] uppercase tracking-[.4em]">Trident Academy of Technology</span>
          </div>

          <h1 className={`font-serif text-5xl md:text-7xl lg:text-[88px] font-black text-[#212529] leading-[1] tracking-tight mb-8 transition-all duration-1000 delay-150 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Boundless <br />
            <span className="italic text-[#8B6E66]">Intelligence.</span>
          </h1>

          <p className={`text-[17px] md:text-lg text-[#5c5855] max-w-xl mb-12 leading-relaxed transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Immerse yourself in Odisha's premier technical ecosystem. We combine rigorous Silicon-tier academics with world-class innovation labs to forge the leaders of tomorrow.
          </p>

          <div className={`flex flex-wrap items-center gap-6 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a href="https://admissions-tat.tekkzy.com" className="bg-[#212529] text-white px-10 py-5 rounded-2xl font-bold text-[13px] uppercase tracking-widest flex items-center gap-3 transition-all duration-300 hover:bg-[#8B6E66] hover:shadow-2xl hover:-translate-y-1">
              Begin Journey <ArrowRight size={18} />
            </a>
            <a href="#about" className="text-[#212529] font-bold text-[13px] uppercase tracking-widest border-b-2 border-[#EFE7DF] hover:border-[#8B6E66] transition-colors pb-1">
              Know Our Impact
            </a>
          </div>
        </div>

        {/* Right Side: Image with asymmetric frame */}
        <div className={`relative transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
           {/* Asymmetric offset frame — different corner radii */}
           <div className="absolute -inset-4 border-2 border-[#EFE7DF] -z-10 hidden lg:block" style={{ borderRadius: '8px 40px 8px 40px' }} />
           
           <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImg1}
                alt="Students in Trident Lab" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2000ms]" 
              />
              {/* Floating Accent Block */}
              <div className="absolute bottom-8 right-8 bg-[#283B91] text-white p-6 rounded-xl hidden md:block">
                 <div className="text-3xl font-black mb-1">A+ Grade</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">NAAC Accredited</div>
              </div>
              {/* Small asymmetric badge — top left */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-[#212529] px-4 py-2 rounded-lg hidden md:block shadow-md">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#8B6E66]">Est. 2005</div>
              </div>
           </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] font-black text-[#8B6E66] uppercase tracking-[.3em]">Scroll</span>
        <ChevronDown size={20} className="text-[#8B6E66]" />
      </div>
    </section>
  );
}
