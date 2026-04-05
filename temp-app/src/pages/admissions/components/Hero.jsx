import React, { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center bg-transparent overflow-hidden pt-20 pb-20 group">
      
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-[40%] h-full -skew-x-12 translate-x-16 z-0 hidden lg:block bg-white shadow-2xl mix-blend-overlay opacity-50" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#E5AA3E]/10 rounded-full blur-[80px] z-0" />
      
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="text-left pt-10">
          <div className={`flex items-center gap-4 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mb-8`}>
             <div className="w-12 h-[2px] bg-[#1B4D8E]"></div>
             <span className="text-[12px] font-black text-[#1B4D8E] uppercase tracking-[.4em]">Admissions 2026</span>
          </div>

          <h1 className={`font-serif text-5xl md:text-7xl lg:text-[80px] font-black text-[#3E3A36] leading-[1.05] tracking-tight mb-8 transition-all duration-1000 delay-150 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
            Begin Your <br />
            <span className="italic text-[#8B6E66]">Journey.</span>
          </h1>

          <p className={`text-[17px] md:text-lg text-[#5c5855] max-w-xl mb-12 leading-relaxed transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Embark on a journey of excellence. Discover our premium B.Tech, M.Tech, MCA, 
            and MBA programs designed to shape the next generation of global leaders.
          </p>

          <div className={`flex flex-wrap items-center gap-6 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a href="#process" className="bg-[#1B4D8E] text-white px-10 py-5 rounded-2xl font-bold text-[13px] uppercase tracking-widest flex items-center gap-3 transition-all duration-300 hover:bg-[#8B6E66] hover:shadow-2xl hover:-translate-y-1">
              Apply Now <ArrowRight size={18} />
            </a>
            <a href="#downloads" className="text-[#3E3A36] flex items-center gap-2 font-bold text-[13px] uppercase tracking-widest border-b-2 border-transparent hover:border-[#1B4D8E] transition-colors pb-1">
              <Download size={16} /> Brochure
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className={`relative transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
           <div className="absolute -inset-4 border-2 border-[#8B6E66]/20 -z-10 hidden lg:block" style={{ borderRadius: '40px 8px 40px 8px' }} />
           
           <div className="relative aspect-[4/5] md:aspect-[4/4] overflow-hidden rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
              <img 
                src="https://trident-assets-bucket.s3.us-east-2.amazonaws.com/academics.jpg" 
                alt="Students walking on campus" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2000ms]" 
              />
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md text-[#3E3A36] p-6 rounded-xl hidden md:block shadow-xl border-l-4 border-[#E5AA3E]">
                 <div className="text-3xl font-black mb-1 font-serif">100%</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Placement Assistance</div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
