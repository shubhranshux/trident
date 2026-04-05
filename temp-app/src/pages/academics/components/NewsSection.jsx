import React from 'react';

const newsData = [
  {
    date: { day: '08', monthYear: "FEB '2026" },
    image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=800",
    title: "Trident organizes the 8th edition of Model United Nations (TMUN 2026)"
  },
  {
    date: { day: '31', monthYear: "JAN '2026" },
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    title: "Trident organizes 'Vibe Coding 2026 - A Computational Hack Sprint'"
  },
  {
    date: { day: '26', monthYear: "JAN '2026" },
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    title: "Republic Day Celebrations at Trident Campus"
  },
  {
    date: { day: '20', monthYear: "JAN '2026" },
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
    title: "Inauguration of New Advanced Research Labs"
  }
];

export default function NewsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Header — asymmetric with line accent pulled right */}
        <div className="mb-16 relative">
           <div className="absolute -left-10 -top-4 w-32 h-20 bg-[#EFE7DF] -skew-x-12 z-0 hidden md:block"></div>
           <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
             <h2 className="relative z-10 font-serif text-[48px] md:text-[64px] font-black text-[#212529] leading-[1.1] tracking-tight">
               Trident<br/>News
             </h2>
             <div className="flex items-center gap-4 lg:pb-4">
               <div className="w-24 h-[2px] bg-[#E5AA3E]" />
               <span className="text-[11px] font-black text-[#8B6E66] uppercase tracking-[.3em]">Latest Updates</span>
             </div>
           </div>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Hero card — spans 7 cols and 2 rows */}
          <div className="lg:col-span-7 lg:row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl" style={{ minHeight: '520px' }}>
            <img src={newsData[0].image} alt="News" className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent" />
            
            <div className="absolute top-6 left-6 bg-[#A8383B] text-white flex flex-col items-center justify-center p-4 w-20 z-20">
              <span className="font-serif text-3xl font-black leading-none mb-1">{newsData[0].date.day}</span>
              <span className="font-sans text-[9px] font-bold tracking-widest leading-none text-center">{newsData[0].date.monthYear}</span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 z-20">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">{newsData[0].title}</h3>
              <span className="font-sans font-bold text-white/80 text-[11px] uppercase tracking-widest">Read Full Story →</span>
            </div>
          </div>

          {/* Card 2: 5 cols */}
          <div className="lg:col-span-5 relative group cursor-pointer overflow-hidden rounded-2xl" style={{ minHeight: '250px' }}>
            <img src={newsData[1].image} alt="News" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
            
            <div className="absolute top-5 right-5 bg-[#A8383B] text-white flex flex-col items-center justify-center p-3 w-16 z-20">
              <span className="font-serif text-2xl font-black leading-none mb-1">{newsData[1].date.day}</span>
              <span className="font-sans text-[8px] font-bold tracking-wider leading-none text-center">{newsData[1].date.monthYear}</span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 z-20">
              <h3 className="font-serif text-lg md:text-xl font-bold text-white mb-2">{newsData[1].title}</h3>
              <span className="font-sans font-bold text-white/80 text-[11px] uppercase tracking-widest">Read More →</span>
            </div>
          </div>

          {/* Card 3: 5 cols */}
          <div className="lg:col-span-5 relative group cursor-pointer overflow-hidden rounded-2xl" style={{ minHeight: '250px' }}>
            <img src={newsData[2].image} alt="News" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
            
            <div className="absolute top-5 left-5 bg-[#A8383B] text-white flex flex-col items-center justify-center p-3 w-16 z-20">
              <span className="font-serif text-2xl font-black leading-none mb-1">{newsData[2].date.day}</span>
              <span className="font-sans text-[8px] font-bold tracking-wider leading-none text-center">{newsData[2].date.monthYear}</span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 z-20">
              <h3 className="font-serif text-lg md:text-xl font-bold text-white mb-2">{newsData[2].title}</h3>
              <span className="font-sans font-bold text-white/80 text-[11px] uppercase tracking-widest">Read More →</span>
            </div>
          </div>
        </div>

        {/* Card 4: Full-width horizontal dark card */}
        <div className="mt-8 relative group cursor-pointer overflow-hidden rounded-2xl flex flex-col lg:flex-row">
          <div className="w-full lg:w-[55%] h-64 lg:h-auto relative overflow-hidden">
            <img src={newsData[3].image} alt="News" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1A1817] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817] to-transparent lg:hidden" />
          </div>
          <div className="w-full lg:w-[45%] bg-[#1A1817] p-8 md:p-12 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#E5AA3E]/20 hidden lg:block" />
            
            <div className="bg-[#A8383B] text-white inline-flex flex-col items-center justify-center p-3 w-16 mb-6">
              <span className="font-serif text-2xl font-black leading-none mb-1">{newsData[3].date.day}</span>
              <span className="font-sans text-[8px] font-bold tracking-wider leading-none text-center">{newsData[3].date.monthYear}</span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-4">{newsData[3].title}</h3>
            <span className="font-sans font-bold text-[#8B6E66] text-[11px] uppercase tracking-widest flex items-center gap-3 group-hover:text-[#E5AA3E] transition-colors">
              Read Full Story <span className="w-8 h-[1px] bg-[#8B6E66] group-hover:w-16 group-hover:bg-[#E5AA3E] transition-all duration-500" />
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
