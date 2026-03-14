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
    <section className="relative py-28 bg-[#F5EEEC] border-y border-soft overflow-hidden">
      
      {/* Background Accent Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none mix-blend-multiply">
        <img src={progBg} alt="Background abstract" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SlideIn direction="left">
          <span className="rose-rule"></span>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="serif text-4xl md:text-5xl font-bold text-[#3E3A36]">Academic Programs</h2>
              <p className="text-[#3E3A36]/80 mt-5 text-lg font-medium leading-relaxed italic">
                A rigorous curriculum led by visionary scholars, providing hands-on immersive learning across diverse disciplines.
              </p>
            </div>
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((p, i) => (
            <FadeInUp key={p.name} delay={i * 100}>
              <a href={p.href} className="bg-white rounded-[24px] overflow-hidden group relative flex flex-col h-full shadow-[0_10px_30px_-15px_rgba(62,58,54,0.1)] hover:shadow-[0_25px_50px_-15px_rgba(139,110,102,0.3)] transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-primary/20">
                
                {/* Photo Header */}
                <div className="h-48 relative overflow-hidden">
                  <img src={bgMap[p.name] || imgCSE} alt={p.name} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold rounded-full shadow-md">
                    {p.dept}
                  </div>
                </div>
                
                {/* Content Body */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-bg-light text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {iconMap[p.name] || <Code size={20} />}
                    </div>
                    <h3 className="serif font-bold text-[#3E3A36] text-xl leading-snug group-hover:text-primary transition-colors">{p.name}</h3>
                  </div>
                  
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-soft">
                     <p className="text-[12px] text-[#3E3A36]/60 font-bold uppercase tracking-widest flex items-center gap-2">
                       {p.dur} <span className="text-[#3E3A36]/20">|</span> {p.seats} Seats
                     </p>
                     <ArrowRight size={18} className="text-secondary opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                  </div>
                </div>

              </a>
            </FadeInUp>
          ))}

          {/* Special "Explore All" Card to fill the grid slot */}
          <FadeInUp delay={600}>
            <a href="https://academics-tat.tekkzy.com/departments-of-engineering/" className="bg-[#3E3A36] rounded-[24px] overflow-hidden group relative flex flex-col h-full shadow-[0_20px_40px_-10px_rgba(62,58,54,0.4)] transition-all duration-500 transform hover:-translate-y-2 items-center justify-center p-10 text-center border-2 border-[#D4B5A0]/20 hover:border-[#D4B5A0]/80">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B6E66]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay"></div>
              
              <div className="w-20 h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white text-white group-hover:text-[#3E3A36]">
                <ArrowRight size={32} />
              </div>
              
              <h3 className="serif font-bold text-white text-2xl md:text-3xl mb-4 group-hover:text-[#F5EEEC] transition-colors">Explore All Programs</h3>
              <p className="text-white/60 text-sm font-medium leading-relaxed max-w-[80%]">
                Discover over 50+ specialized undergraduate and postgraduate degrees.
              </p>
            </a>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
