import React from 'react';
import FeatureCard from './FeatureCard';

export default function FeatureSection({ title, cards, variant = "angled" }) {
  return (
    <section className="py-24 relative overflow-hidden group">
      {/* Background alternation logic based on variant for deeper distinction */}
      <div className={`absolute inset-0 ${variant === 'cinematic' ? 'bg-[#212529]' : variant === 'minimal' ? 'bg-[#FAF9F7]' : 'bg-[#FFFFFF]'}`}></div>
      
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Silicon Style Header Section */}
        <div className="mb-16 relative">
           <div className={`absolute -left-10 -top-4 w-32 h-20 -skew-x-12 z-0 hidden md:block ${variant === 'cinematic' ? 'bg-[#3E3A36]' : 'bg-[#EFE7DF]'}`}></div>
           <h2 className={`relative z-10 font-serif text-[40px] md:text-[56px] lg:text-[64px] font-black capitalize leading-[1.1] tracking-tight ${variant === 'cinematic' ? 'text-white' : 'text-[#212529]'}`}>
             {title}
           </h2>
        </div>
        
        {/* Symmetrical Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={card.title || idx} 
              className="h-full col-span-1"
            >
               <FeatureCard {...card} variant={variant} />
            </div>
          ))}
          
          {/* Fill empty grid slots on large screens if the row is incomplete */}
          {cards.length % 3 !== 0 && Array.from({ length: 3 - (cards.length % 3) }).map((_, i) => (
            <div key={`empty-slot-${i}`} className="h-full hidden lg:flex flex-col justify-center items-center relative p-8 group border-2 border-dashed border-[#E5AA3E]/30 bg-white">
              <div className="relative z-10 text-center flex flex-col items-center gap-6">
                <svg className="w-10 h-10 text-[#E5AA3E] opacity-20 group-hover:opacity-60 transition-opacity duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
