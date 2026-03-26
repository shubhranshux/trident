import React from 'react';

const infoData = [
  {
    title: "BPUT Regulation",
    description: "Access detailed information about BPUT regulations, academic guidelines, examination rules, and evaluation systems. This section ensures transparency and helps students stay informed about university policies, curriculum structure, and academic compliance requirements. The regulations provide a clear framework for academic progression, credit requirements, attendance norms, and examination procedures. Students can refer to this section for updated notifications, amendments, and official circulars issued by the university. It ensures clarity in grading patterns, result processing, and re-evaluation guidelines. Staying informed about BPUT regulations helps students maintain compliance and plan their academic journey effectively.",
    image: "/images/bput_regulation.jpg",
    linkHref: "https://academics-tat.tekkzy.com/bput",
    reverse: false,
    accent: "#E5AA3E"
  },
  {
    title: "Calenders",
    description: "Stay updated with Trident's academic and event calendars, featuring important dates, examinations, holidays, workshops, and campus activities. The calendar helps students and faculty plan effectively and stay organized throughout the academic year. The academic calendar provides a structured overview of the semester, ensuring clarity and transparency in all institutional activities. It keeps students informed about key deadlines, internal assessments, and examination schedules. Regular updates help the campus community stay aligned with upcoming events and important announcements.",
    image: "/images/calendar_pins.jpg",
    linkHref: "https://academics-tat.tekkzy.com/calenders",
    reverse: true,
    accent: "#283B91"
  },
  {
    title: "Chapters",
    description: "Explore the various chapters that shape Trident's vibrant academic and student life. Every chapter represents a unique initiative, activity, or community that encourages leadership, creativity, and collaboration, helping students develop beyond the classroom. Our chapters provide students with opportunities to engage in technical, cultural, social, and leadership activities that enrich their academic journey. Through events, competitions, and community initiatives, students gain practical exposure and build networks that foster teamwork, innovation, and prepare individuals to excel in both professional and personal realms.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
    linkHref: "https://academics-tat.tekkzy.com/chapters",
    reverse: false,
    accent: "#8B6E66"
  },
  {
    title: "Time Table",
    description: "Discover Trident's diverse chapters that bring students together through academics, culture, innovation, and social initiatives. These chapters provide platforms to explore talents, build leadership skills, encourage teamwork, and create meaningful experiences beyond the classroom. They play a vital role in shaping confident, responsible, and well-rounded individuals. Stay updated with the detailed timetable designed to ensure a smooth academic schedule for all students. The timetable provides clear information about class timings, subjects, faculty allocations, and room numbers. It helps students organize their daily routine efficiently and manage their academic commitments effectively.",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=1200",
    linkHref: "#",
    reverse: true,
    accent: "#E5AA3E"
  }
];

export default function InstitutionalInfo() {
  return (
    <section className="py-24 bg-[#FAF9F7] relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10 mb-20">
        <div className="mb-4 relative">
           <div className="absolute -left-10 -top-4 w-32 h-20 bg-[#EFE7DF] -skew-x-12 z-0 hidden md:block"></div>
           <h2 className="relative z-10 font-serif text-[48px] md:text-[64px] font-black text-[#212529] leading-[1.1] tracking-tight">
             Beyond<br/>Academics
           </h2>
        </div>
      </div>

      <div className="flex flex-col gap-0">
        {infoData.map((item, idx) => (
          <div key={idx} className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full min-h-[500px] group`}>
            
            {/* Image Half */}
            <div className="w-full lg:w-1/2 relative overflow-hidden h-[400px] lg:h-auto">
              <div className="absolute inset-0 bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                  onError={(e) => {
                    if (!e.target.dataset.fallbackApplied) {
                      e.target.dataset.fallbackApplied = true;
                      e.target.src = `https://picsum.photos/seed/${encodeURIComponent(item.title)}/1000/1000`;
                    }
                  }}
                />
                {/* Color overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: item.accent }}
                />
              </div>
              {/* Geometric Angle Cut */}
              {item.reverse ? (
                <div className="absolute top-0 right-0 w-16 h-full bg-[#FAF9F7] transform skew-x-12 translate-x-8 z-10 hidden lg:block"></div>
              ) : (
                <div className="absolute top-0 left-0 w-16 h-full bg-[#FAF9F7] transform -skew-x-12 -translate-x-8 z-10 hidden lg:block"></div>
              )}
              {/* Section Number — large, transparent */}
              <div 
                className="absolute bottom-8 z-20 text-[100px] font-black font-serif leading-none opacity-[0.06] pointer-events-none select-none"
                style={{ 
                  color: item.accent,
                  [item.reverse ? 'left' : 'right']: '24px',
                }}
              >
                0{idx + 1}
              </div>
            </div>

            {/* Content Half */}
            <div className={`w-full lg:w-1/2 flex flex-col justify-center p-12 lg:p-24 bg-[#FAF9F7] relative`}>
              {/* Decorative Accent Outline Box */}
              <div 
                className="absolute inset-6 md:inset-12 border-2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ borderColor: `${item.accent}30` }}
              ></div>
              
              <div className="relative z-20">
                <div className="w-16 h-1 mb-8 transition-all duration-700 group-hover:w-24" style={{ backgroundColor: item.accent }}></div>
                <h3 className="font-serif text-[32px] md:text-[40px] font-black text-[#212529] mb-6">
                  {item.title}
                </h3>
                <p className="font-sans text-[#5c5855] text-[16px] leading-relaxed mb-10 max-w-xl">
                  {item.description}
                </p>
                <a 
                  href={item.linkHref} 
                  className="inline-flex items-center gap-4 font-sans font-bold text-[12px] uppercase tracking-widest hover:text-[#212529] transition-colors"
                  style={{ color: item.accent }}
                >
                  Discover More 
                  <span className="w-12 h-[1px] inline-block group-hover:w-20 transition-all duration-500" style={{ backgroundColor: item.accent }}></span>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
