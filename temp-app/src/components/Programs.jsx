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
            const badgeColors = ['#C41E3A', '#2E6DB4', '#E8BD63', '#C41E3A', '#2E6DB4'];
            const badgeColor = badgeColors[i % badgeColors.length];
            const cornerColors = ['#E8BD63', '#C41E3A', '#2E6DB4', '#E8BD63', '#C41E3A'];
            const cornerColor = cornerColors[i % cornerColors.length];
            return (
            <FadeInUp key={p.name} delay={i * 100}>
              <a href={p.href} className="rounded-[16px] group relative flex flex-col h-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(44,58,140,0.12)] transition-all duration-300 transform hover:-translate-y-1.5 border-2 border-[#E8BD63]/40 hover:border-[#E8BD63]">
                {/* Geometric corner triangle */}
                <div className="absolute top-0 right-0 w-0 h-0 z-20" style={{ borderLeft: '45px solid transparent', borderTop: `45px solid ${cornerColor}` }} />
                
                {/* Large Photo */}
                <div className="h-[260px] relative overflow-hidden">
                  <img src={bgMap[p.name] || imgCSE} alt={p.name} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Colored Badge — overlapping bottom-left */}
                  <div className="absolute -bottom-4 left-5 z-30 px-4 py-2 text-white font-black text-xs uppercase tracking-wider rounded-sm shadow-lg" style={{ backgroundColor: badgeColor }}>
                    {p.dur} <span className="text-white/80 text-[10px] ml-1">• {p.seats} Seats</span>
                  </div>
                </div>
                
                {/* Content Body */}
                <div className="p-8 pt-10 flex flex-col flex-1 relative z-10">
                  <h3 className="serif font-black text-[#1E293B] text-xl leading-snug mb-6 group-hover:text-[#2C3A8C] transition-colors">{p.name}</h3>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 text-[#3E3A36] text-[13px] font-black uppercase tracking-widest group-hover:text-[#2E6DB4] transition-colors">
                      Read More <span className="text-lg">»</span>
                    </span>
                  </div>
                </div>

                {/* Diagonal golden accent bar at bottom */}
                <div className="relative h-5 overflow-hidden">
                  <div className="absolute bottom-0 right-0 h-[5px] w-full" style={{ background: `linear-gradient(90deg, transparent 20%, ${badgeColor} 100%)`, transform: 'skewY(-1.5deg)' }} />
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

        {/* Tri-color accent stripe */}
        <div className="flex items-center gap-0 mt-16">
          <div className="h-[3px] w-1/6 bg-[#2E6DB4]" />
          <div className="h-[3px] w-1/4 bg-[#C41E3A]" />
          <div className="h-[3px] flex-1 bg-gradient-to-l from-transparent to-[#E8BD63]" />
        </div>
      </div>
    </section>
  );
}
