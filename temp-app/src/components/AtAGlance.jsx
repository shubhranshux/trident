import { FadeInUp } from "../utils/animations";
import { Users, Award, Briefcase, Globe } from "lucide-react";

export default function AtAGlance() {
  const stats = [
    { label: "Students", val: "12,000+", icon: <Users size={32} />, color: "brand-blue" },
    { label: "Faculty", val: "850+", icon: <Award size={32} />, color: "brand-brown" },
    { label: "Partner Universities", val: "45", icon: <Globe size={32} />, color: "brand-green" },
    { label: "Placement Rate", val: "94%", icon: <Briefcase size={32} />, color: "brand-red" },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-[#F0BB51] text-[#212529]">
      {/* Geometric Shapes from Academics folder */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#E5AA3E] transform origin-top-right -skew-x-12 opacity-50 z-0"></div>
      <div className="absolute top-[20%] right-[15%] w-20 h-20 border-2 border-[#212529]/10 rotate-45 z-0 hidden md:block" />
      <div className="absolute bottom-[10%] left-[8%] w-12 h-12 bg-[#D99A2B]/30 rounded-full z-0 hidden md:block" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full md:w-1/3 relative">
            <div className="absolute -left-6 -top-6 w-32 h-32 bg-[#D99A2B] -rotate-12 z-0 hidden md:block opacity-60"></div>
            <FadeInUp>
              <h2 className="relative z-10 font-serif text-[40px] md:text-[56px] font-black text-[#212529] leading-[1.1] tracking-tight mb-6">
                Trident,<br/> <span className="italic text-[#529DD4]">At a Glance.</span>
              </h2>
              <p className="relative z-10 text-[#3E3A36] text-[18px] md:text-[20px] font-sans font-medium leading-relaxed mb-8">
                A legacy of excellence defined not just by our history, but by the measurable impact of our community across the globe.
              </p>
              <a href="https://academics-tat.tekkzy.com" className="relative z-10 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#212529] hover:text-[#3E3A36] transition-colors">
                View Institutional Report <span className="w-6 h-px bg-current ml-2"></span>
              </a>
            </FadeInUp>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-2 gap-x-8 gap-y-12">
            {stats.map((s, i) => (
              <FadeInUp key={s.label} delay={i * 150}>
                <div className={`border-l-2 border-[#212529]/20 pl-8 group hover:border-${s.color} transition-colors duration-500`}>
                  <div className={`text-[#212529]/60 mb-4 group-hover:text-${s.color} transition-colors duration-500 transform group-hover:scale-110 origin-left`}>
                    {s.icon}
                  </div>
                  <div className={`serif text-5xl md:text-6xl font-black mb-2 text-[#212529] group-hover:text-${s.color} transition-colors`}>{s.val}</div>
                  <div className="text-[12px] font-bold uppercase tracking-widest text-[#3E3A36]/80">{s.label}</div>
                </div>
              </FadeInUp>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
