import React from 'react';

export default function FeatureCard({ image, title, description, linkText = "Learn More", linkHref = "#", variant = "angled" }) {
  const displayImage = image || `https://picsum.photos/seed/${encodeURIComponent(title)}/800/800`;

  // --- VARIANT 1: CINEMATIC (Dark Image Overlay) ---
  if (variant === 'cinematic') {
    return (
      <div className="relative group cursor-pointer flex flex-col h-[400px] md:h-[450px] overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-700 bg-[#212529]">
        <img 
          src={displayImage} alt={title} 
          className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-40" 
          onError={(e) => { 
            if(!e.target.dataset.fallbackApplied) {
              e.target.dataset.fallbackApplied = true;
              e.target.src = `https://picsum.photos/seed/${encodeURIComponent(title)}/800/800`;
            } 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-[#8B6E66] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 z-20"></div>
        
        {/* Asymmetric corner accents */}
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/10 group-hover:border-[#E5AA3E]/30 transition-colors duration-500 rounded-tr-lg z-20" />

        <div className="relative z-20 p-8 flex flex-col justify-end h-full">
           <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 group-hover:-translate-y-2 transition-transform duration-500">
              {title}
           </h3>
           <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
             <p className="font-sans text-gray-300 text-[14px] leading-relaxed mb-6 line-clamp-3">
                {description}
             </p>
           </div>
           <a href={linkHref} className="font-sans font-bold text-white text-[11px] uppercase tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              {linkText} <span className="text-[#8B6E66] ml-2 group-hover:ml-4 transition-all duration-500">&gt;&gt;</span>
           </a>
        </div>
      </div>
    );
  }

  // --- VARIANT 2: MINIMAL (Overlapping Editorial Split) ---
  if (variant === 'minimal') {
    return (
      <div className="group cursor-pointer flex flex-col h-full bg-transparent">
        <div className="w-full h-56 md:h-64 overflow-hidden relative shadow-md bg-[#FAF9F7] rounded-2xl">
           <img 
             src={displayImage} alt={title} 
             className="w-full h-full object-cover transform motion-safe:group-hover:scale-110 transition-transform duration-[1200ms]" 
             onError={(e) => { 
               if(!e.target.dataset.fallbackApplied) {
                 e.target.dataset.fallbackApplied = true;
                 e.target.src = `https://picsum.photos/seed/${encodeURIComponent(title)}/800/600`;
               } 
             }}
           />
           <div className="absolute inset-0 bg-[#283B91]/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </div>
        
        {/* Overlapping Text Box */}
        <div className="w-[90%] md:w-[85%] bg-white p-6 md:p-8 -mt-12 md:-mt-16 ml-auto relative z-20 border-t-4 border-[#283B91] rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group-hover:-translate-y-2 transition-transform duration-500 flex flex-col flex-grow">
           <h3 className="font-serif text-xl md:text-2xl font-bold text-[#212529] mb-3 group-hover:text-[#283B91] transition-colors leading-tight">
              {title}
           </h3>
           <p className="font-sans text-[#5c5855] text-[14px] leading-relaxed mb-6 flex-grow">
              {description}
           </p>
           <a href={linkHref} className="mt-auto inline-flex items-center gap-2 font-sans font-bold text-[#283B91] text-[11px] uppercase tracking-widest group-hover:text-[#212529] transition-colors">
              {linkText} <span className="transition-transform duration-300 transform group-hover:translate-x-1">&rarr;</span>
           </a>
        </div>
      </div>
    );
  }

  // --- DEFAULT VARIANT: ASYMMETRIC MINIMAL ---
  return (
    <div className="group flex flex-col h-full relative pt-2 pr-2">
      {/* Background Accent Frame */}
      <div className="absolute inset-0 bg-[#FAF9F7] rounded-2xl transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 border border-[#EFE7DF]" />
      
      <div className="bg-white border border-[#EFE7DF] rounded-2xl flex flex-col h-full overflow-hidden shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:-translate-x-1 relative z-10">
        <div className="w-full h-48 md:h-56 relative overflow-hidden bg-gray-50 border-b border-[#EFE7DF]">
           <img 
             src={displayImage} alt={title} 
             className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700" 
             onError={(e) => { 
               if(!e.target.dataset.fallbackApplied) {
                 e.target.dataset.fallbackApplied = true;
                 e.target.src = `https://picsum.photos/seed/${encodeURIComponent(title)}/800/600`;
               } 
             }}
           />
        </div>
        
        <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
           <h3 className="font-serif text-[20px] md:text-[24px] font-bold text-[#212529] mb-4 group-hover:text-[#8B6E66] transition-colors leading-tight">
              {title}
           </h3>
           <p className="font-sans text-[#5c5855] text-[14px] leading-relaxed mb-8 flex-grow">
              {description}
           </p>
           <div className="mt-auto">
             <a href={linkHref} className="inline-flex items-center gap-3 font-sans font-bold text-[#212529] text-[11px] uppercase tracking-[0.15em] hover:text-[#8B6E66] transition-colors relative pb-1">
                {linkText} <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#EFE7DF] group-hover:bg-[#8B6E66] transition-colors" />
             </a>
           </div>
        </div>
      </div>
    </div>
  );
}
