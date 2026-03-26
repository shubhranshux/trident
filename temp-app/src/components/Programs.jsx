import { FadeInUp, SlideIn } from "../utils/animations";
import { PROGRAMS } from "../data/constants";
import progBg from "../assets/prog_computer_science.jpg";
import { ArrowRight, Code, Cpu, LineChart, Cpu as Mech, Plug as Elec, UserCircle } from "lucide-react";

// Image maps — real photos per department
import imgCSE from "../assets/prog_computer_science.jpg";
import imgECE from "../assets/prog_electronics.jpg";
import imgBBA from "../assets/prog_business.jpg";
import imgCivil from "../assets/prog_civil.jpg";
import imgMech from "../assets/prog_mechanical.jpg";
import imgEE from "../assets/prog_electrical.jpg";

export default function Programs() {
  
  const iconMap = {
    "Computer Science & Engineering": <Code size={20} />,
    "Electronics & Communication": <Cpu size={20} />,
    "Mechanical Engineering": <Mech size={20} />,
    "Electrical & Electronics": <Elec size={20} />,
    "Civil Engineering": <UserCircle size={20} />
  };

  const bgMap = {
    "Computer Science & Engineering": imgCSE,
    "Electronics & Communication": imgECE,
    "Mechanical Engineering": imgMech,
    "Electrical & Electronics": imgEE,
    "Civil Engineering": imgCivil
  };
  


  return (
    <section className="relative py-28 bg-[#F1F5F9] border-y border-soft overflow-hidden">
      
      {/* Background Accent Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none mix-blend-multiply">
        <img src={progBg} alt="Background abstract" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SlideIn direction="left">
          <span className="rose-rule"></span>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="serif text-4xl md:text-5xl font-bold text-[#3E3A36] relative z-10 inline-block">
                <span className="absolute -top-2 -left-4 w-32 h-14 bg-soft transform -rotate-3 -z-10 rounded-sm"></span>
                Academic <span className="italic text-[#2C3A8C]">Programs.</span>
              </h2>
              <p className="text-[#3E3A36]/80 mt-5 text-lg font-medium leading-relaxed italic">
                A rigorous curriculum led by visionary scholars, providing hands-on immersive learning across diverse disciplines.
              </p>
            </div>
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((p, i) => {
            return (
            <FadeInUp key={p.name} delay={i * 100}>
              <a href={p.href} className="rounded-[24px] overflow-hidden group relative flex flex-col h-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(44,58,140,0.12)] transition-all duration-300 transform hover:-translate-y-1.5 border border-[#E8DDD0]/60 hover:border-[#C9A96E]/50" style={{ background: 'linear-gradient(160deg, #F5E6D3 0%, #FFF8F0 35%, #FFFFFF 100%)' }}>
                
                {/* Photo Header */}
                <div className="h-[220px] relative overflow-hidden">
                  <img src={bgMap[p.name] || imgCSE} alt={p.name} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 right-4 bg-[#2C3A8C] text-white px-4 py-1.5 text-[10px] uppercase tracking-widest font-black rounded-full shadow-md">
                    B.TECH
                  </div>
                </div>
                
                {/* Content Body */}
                {/* Golden bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A96E] via-[#E8C97A] to-[#C9A96E] opacity-80"></div>

                <div className="p-8 flex flex-col flex-1 relative z-10">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#2C3A8C]/10 text-[#2C3A8C] group-hover:bg-[#2C3A8C] group-hover:text-white transition-all duration-400">
                      {iconMap[p.name] || <Code size={20} />}
                    </div>
                    <h3 className="serif font-black text-[#1E293B] text-xl leading-snug">{p.name}</h3>
                  </div>
                  
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-[#E8DDD0]">
                     <p className="text-[10px] text-[#6B7280] font-black uppercase tracking-[0.15em] flex items-center gap-2">
                       {p.dur} <span className="text-[#D1C4B0]">|</span> {p.seats} Seats
                     </p>
                     <ArrowRight size={16} className="text-[#2C3A8C] transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </a>
            </FadeInUp>
          )})}

          {/* Special "Explore All" Card to fill the grid slot */}
          <FadeInUp delay={600}>
            <a href="https://academics-tat.tekkzy.com/departments-of-engineering/" className="rounded-[24px] overflow-hidden group relative flex flex-col h-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(44,58,140,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 items-center justify-center p-10 text-center border border-[#E8DDD0]/60 hover:border-[#2C3A8C]/30" style={{ background: 'linear-gradient(160deg, #2C3A8C 0%, #3D4FA0 50%, #4F63B4 100%)' }}>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Golden bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A96E] via-[#E8C97A] to-[#C9A96E]"></div>
              
              <div className="w-20 h-20 rounded-full border border-white/20 bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 group-hover:bg-white text-white group-hover:text-[#2C3A8C] shadow-inner">
                <ArrowRight size={32} />
              </div>
              
              <h3 className="serif font-black text-white text-2xl md:text-3xl mb-4">Explore All Programs</h3>
              <p className="text-white/80 text-sm font-bold leading-relaxed max-w-[80%]">
                Discover over 50+ specialized undergraduate and postgraduate degrees.
              </p>
            </a>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
