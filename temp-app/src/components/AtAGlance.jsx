import { FadeInUp } from "../utils/animations";
import { Users, Award, Briefcase, Globe } from "lucide-react";

export default function AtAGlance() {
  const stats = [
    { label: "Students", val: "12,000+", icon: <Users size={22} /> },
    { label: "Faculty", val: "850+", icon: <Award size={22} /> },
    { label: "Partner Universities", val: "45", icon: <Globe size={22} /> },
    { label: "Placement Rate", val: "94%", icon: <Briefcase size={22} /> },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-[#F0BB51]">

      {/* Skewed background panel — same as RankingRecognition */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#E5AA3E] transform origin-top-right -skew-x-12 opacity-50 z-0"></div>

      {/* Geometric decorative elements */}
      <div className="absolute top-[20%] right-[15%] w-20 h-20 border-2 border-[#212529]/10 rotate-45 z-0 hidden md:block" />
      <div className="absolute bottom-[10%] left-[8%] w-12 h-12 bg-[#D99A2B]/30 rounded-full z-0 hidden md:block" />
      <div className="absolute top-[15%] left-[5%] w-28 h-28 bg-[#D99A2B] -rotate-12 z-0 hidden md:block opacity-40"></div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Top row: Heading left + Description right — mirrors RankingRecognition layout */}
        <FadeInUp>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-24 mb-12">
            <div className="w-full lg:w-1/3 relative">
              <h2 className="relative z-10 font-serif text-[40px] md:text-[56px] font-black text-[#212529] leading-[1.1] tracking-tight">
                Trident,<br/><span className="italic">At a Glance.</span>
              </h2>
            </div>
            <div className="w-full lg:w-2/3">
              <p className="text-[#3E3A36] text-[16px] md:text-[20px] font-sans font-medium leading-relaxed max-w-4xl">
                A legacy of excellence defined not just by our history, but by the measurable impact of our community across the globe.
              </p>
            </div>
          </div>
        </FadeInUp>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, idx) => (
            <FadeInUp key={s.label} delay={idx * 100}>
              <div className="bg-[#FDF8EF] rounded-2xl p-6 md:p-8 group hover:-translate-y-1 transition-all duration-300 border-2 border-[#E8BD63] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <div className="w-11 h-11 rounded-xl bg-[#F0BB51]/20 text-[#212529] flex items-center justify-center mb-5 group-hover:bg-[#212529] group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </div>
                <div className="serif text-3xl md:text-4xl font-black text-[#212529] mb-1">{s.val}</div>
                <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#212529]/50">{s.label}</div>
              </div>
            </FadeInUp>
          ))}
        </div>

      </div>
    </section>
  );
}
