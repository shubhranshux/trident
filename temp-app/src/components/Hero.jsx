import { FadeInUp, SlideIn } from "../utils/animations";
import { ArrowRight, GraduationCap, Award, Users } from "lucide-react";
import heroImg1 from "../assets/hero-bg-new.jpg";

export default function Hero() {
  return (
    <>
      {/* Spacer to preserve document flow while Hero is fixed */}
      <div className="h-[700px] md:h-[850px] w-full relative z-0" aria-hidden="true"></div>
      
      <section className="fixed top-0 left-0 w-full h-[700px] md:h-[850px] overflow-hidden bg-bg-light z-0">
      {/* Single Background Image with subtle zoom */}
      <div className="absolute inset-0 w-full h-full">
        <img src={heroImg1} alt="Campus" className="w-full h-full object-cover scale-105" />
      </div>
      
      {/* Multi-layer Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1817]/95 via-[#1A1817]/70 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/60 via-transparent to-[#1A1817]/20"></div>
      
      {/* Decorative vertical accent line */}
      <div className="hidden lg:block absolute left-[7%] top-[20%] bottom-[20%] w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <SlideIn direction="left" delay={100} duration={1000}>
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-3 rounded-full mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
              NAAC 'A' Accredited &nbsp;·&nbsp; Affiliated to BPUT
            </div>
          </SlideIn>
          
          <FadeInUp delay={300} duration={1200}>
            <h1 className="serif text-5xl md:text-7xl lg:text-[90px] font-black text-white leading-[1.02] mb-8 max-w-4xl">
              Academic{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4B5A0] to-[#F5EEEC]">Excellence.</span>
              <br/>
              <span className="text-white">Infinite Possibilities.</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={500} duration={1200}>
            <div className="flex flex-wrap items-center gap-5 mt-2">
              <a href="#" className="btn-rose px-10 py-4 rounded-lg font-bold text-[13px] flex items-center gap-3 uppercase tracking-wider">
                Explore Programs <ArrowRight size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white text-[13px] font-bold uppercase tracking-wider flex items-center gap-2 transition-colors">
                Campus Tour <span className="text-white/40">→</span>
              </a>
            </div>
          </FadeInUp>

          {/* Hero Stats Strip */}
          <FadeInUp delay={700} duration={1200}>
            <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10 max-w-2xl">
              {[
                { icon: <GraduationCap size={18} />, val: "6000+", label: "Students" },
                { icon: <Award size={18} />, val: "19+", label: "Years" },
                { icon: <Users size={18} />, val: "320+", label: "Recruiters" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="text-white/30">{s.icon}</div>
                  <div>
                    <div className="text-white font-black text-lg leading-none">{s.val}</div>
                    <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-0.5">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
    </>
  );
}
