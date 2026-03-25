import { FadeInUp } from "../utils/animations";
import { ArrowRight, GraduationCap, Award, Users, ChevronDown } from "lucide-react";
import heroImg1 from "../assets/hero finall.png";

export default function Hero() {
  return (
    <section
      className="w-full h-screen overflow-hidden relative"
    >
      {/* Background image — no fixed, no transform, safe for Apple Silicon */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImg1}
          alt="Trident Academy of Technology Campus"
          className="w-full h-full object-cover object-center md:object-top lg:object-[center_20%]"
          fetchPriority="high"
          decoding="sync"
        />
      </div>



      {/* Decorative accent */}
      <div
        className="hidden lg:block absolute left-[7%] top-[20%] bottom-[20%] w-px"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">

          <FadeInUp delay={300} duration={1200}>
            <h1 className="serif text-5xl md:text-7xl lg:text-[96px] font-black text-white leading-[1.02] mb-8 max-w-5xl">
              Academic{" "}
              <span
                className="italic"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundImage: "linear-gradient(to right, #529DD4, #FFFFFF)",
                  backgroundClip: "text",
                }}
              >
                Excellence.
              </span>
              <br />
              <span className="text-white">Infinite Possibilities.</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={500} duration={1200}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://admissions-tat.tekkzy.com"
                
                className="bg-white text-[#0F172A] px-10 py-4 rounded-lg font-extrabold text-[14px] flex items-center gap-3 uppercase tracking-wider transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)]"
              >
                Apply Now <ArrowRight size={18} />
              </a>
              <a
                href="https://academics-tat.tekkzy.com"
                
                className="btn-outline-white px-10 py-4 rounded-lg font-extrabold text-[14px] flex items-center gap-3 uppercase tracking-wider"
              >
                Explore Programs
              </a>
            </div>
          </FadeInUp>

          <FadeInUp delay={800} duration={1200}>
            <div className="flex flex-wrap gap-10 mt-20 pt-8 border-t border-white/10 max-w-2xl">
              {[
                { icon: <GraduationCap size={20} />, val: "6000+", label: "Students" },
                { icon: <Award size={20} />, val: "19+", label: "Years" },
                { icon: <Users size={20} />, val: "320+", label: "Recruiters" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="text-white/30">{s.icon}</div>
                  <div>
                    <div className="text-white font-black text-xl leading-none">{s.val}</div>
                    <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest mt-1">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-caret">
          <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="text-white/30" />
        </div>
      </div>
    </section>
  );
}
