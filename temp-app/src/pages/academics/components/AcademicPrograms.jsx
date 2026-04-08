import React from 'react';

const programs = [
  {
    title: "B.Tech in Computer Science and Engineering",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
    badge: "4 Years",
    link: "https://academics-tat.tekkzy.com/departments-of-engineering"
  },
  {
    title: "Master of Computer Applications (MCA)",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    badge: "2 Years",
    link: "https://academics-tat.tekkzy.com/department-of-mca"
  },
  {
    title: "Master of Business Administration (MBA)",
    image: "/images/mba_department.jpg",
    badge: "2 Years",
    link: "https://academics-tat.tekkzy.com/#"
  }
];

export default function AcademicPrograms() {
  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 relative">
          
          <div className="w-full lg:w-1/3 relative">
            <div className="absolute -left-10 top-0 w-40 h-24 bg-[#EFE7DF] -skew-x-12 z-0 hidden md:block"></div>
            <h2 className="relative z-10 text-[40px] md:text-[56px] font-black text-[#212529] leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Academic<br/>Programs
            </h2>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col items-start justify-center">
            <p className="text-[#3E3A36] text-[18px] md:text-[22px] font-medium leading-relaxed mb-8 max-w-3xl">
              Trident's breadth of programs equip students with deep knowledge, critical thinking, and expertise to tackle real-world challenges.
            </p>
            <a href="https://academics-tat.tekkzy.com" className="bg-[#283B91] hover:bg-[#1f2d73] text-white px-8 py-3.5 rounded-xl font-bold text-[14px] uppercase tracking-wider transition-colors shadow-lg shadow-[#283B91]/30 hover:shadow-xl hover:-translate-y-1 transform duration-300">
              VIEW ALL DEGREE PROGRAMS
            </a>
          </div>

        </div>

        {/* Asymmetric column sizes: 5-4-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {programs.map((prog, idx) => (
            <div 
              key={idx} 
              className={`${
                idx === 0 ? 'lg:col-span-5' : idx === 1 ? 'lg:col-span-4' : 'lg:col-span-3'
              } border-[6px] md:border-[10px] border-[#283B91] bg-[#283B91] flex flex-col group cursor-pointer overflow-hidden transform transition-transform hover:-translate-y-2 duration-500 shadow-xl rounded-2xl`}
            >
              <div className="w-full h-56 md:h-64 overflow-hidden bg-gray-100 relative">
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                  onError={(e) => {
                    if (!e.target.dataset.fallbackApplied) {
                      e.target.dataset.fallbackApplied = true;
                      e.target.src = `https://picsum.photos/seed/${encodeURIComponent(prog.title)}/800/800`;
                    }
                  }}
                />
                {/* Duration badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#283B91] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full z-10">
                  {prog.badge}
                </div>
              </div>
              <div className="p-6 bg-[#283B91] flex-grow flex flex-col justify-center items-start relative">
                <div className="absolute top-0 left-6 w-12 h-[2px] bg-white/20" />
                <h3 className="text-white font-bold text-xl leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {prog.title}
                </h3>
                {prog.link && (
                  <a 
                    href={prog.link}
                    className="mt-auto inline-flex items-center text-[13px] font-bold text-white uppercase tracking-wider hover:text-gray-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
