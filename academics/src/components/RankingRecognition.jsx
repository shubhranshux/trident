import React from 'react';

export default function RankingRecognition() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#F0BB51]">
      {/* Geometric Shapes */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#E5AA3E] transform origin-top-right -skew-x-12 opacity-50 z-0"></div>
      {/* Asymmetric decorative elements */}
      <div className="absolute top-[20%] right-[15%] w-20 h-20 border-2 border-[#212529]/10 rotate-45 z-0 hidden md:block" />
      <div className="absolute bottom-[10%] left-[8%] w-12 h-12 bg-[#D99A2B]/30 rounded-full z-0 hidden md:block" />
      
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        
        <div className="w-full lg:w-1/3 relative">
          <div className="absolute -left-6 -top-6 w-32 h-32 bg-[#D99A2B] -rotate-12 z-0 hidden md:block opacity-60"></div>
          <h2 className="relative z-10 font-serif text-[40px] md:text-[56px] font-black text-[#212529] leading-[1.1] tracking-tight">
            Ranking &<br/>Recognition
          </h2>
        </div>

        <div className="w-full lg:w-2/3">
          <p className="text-[#3E3A36] text-[18px] md:text-[22px] font-sans font-medium leading-relaxed max-w-4xl">
            Trident Academy of Technology has been recognized as a premier Technical and Industrial Research Organization by the Department of Scientific and Industrial Research, Ministry of Science & Technology, Government of India. Trident holds an 'A' grade accreditation as an autonomous institute and is constantly pushing the boundaries of technical education.
          </p>
        </div>
        
      </div>
    </section>
  );
}
