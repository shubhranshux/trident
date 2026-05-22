import { useState, useEffect, useRef } from "react";
import { FadeInUp, TextReveal } from "../utils/animations";
import { ScrollReveal, GSAPCounter, ScrambleText } from "../utils/advanced-animations";
import { 
  Trophy, 
  Briefcase, 
  Award, 
  TrendingUp, 
  Users, 
  MapPin, 
  Globe, 
  Microscope,
  Sparkles,
  ArrowRight
} from "lucide-react";

function parseStat(stat) {
  const match = stat.match(/^([^\d]*?)(\d[\d,]*)(.*?)$/);
  if (!match) return { isNumeric: false, raw: stat };
  const prefix = match[1] || "";
  const num = parseInt(match[2].replace(/,/g, ""), 10);
  const suffix = match[3] || "";
  return { isNumeric: true, prefix, number: num, suffix };
}

function AnimatedStat({ stat, color }) {
  const parsed = parseStat(stat);

  if (!parsed.isNumeric) {
    return (
      <h3 className="serif text-4xl md:text-5xl font-bold tracking-tight leading-none" style={{ color }}>
        <ScrambleText text={stat} />
      </h3>
    );
  }

  return (
    <h3 className="serif text-4xl md:text-5xl font-bold tracking-tight leading-none flex items-baseline" style={{ color }}>
      <GSAPCounter end={parsed.number} prefix={parsed.prefix} suffix={parsed.suffix} duration={2} />
    </h3>
  );
}

export default function WhyChooseTrident() {
  const [activePillar, setActivePillar] = useState("academics");

  const pillars = [
    { id: "academics", num: "01", title: "Academic Excellence", short: "Academics", color: "#2C3A8C", lightBg: "rgba(44, 58, 140, 0.04)" },
    { id: "careers", num: "02", title: "Career Ascendancy", short: "Careers", color: "#C41E3A", lightBg: "rgba(196, 30, 58, 0.04)" },
    { id: "ecosystem", num: "03", title: "Vibrant Ecosystem", short: "Ecosystem", color: "#006738", lightBg: "rgba(0, 103, 56, 0.04)" },
  ];

  const achievements = [
    { id: "top-ranked", stat: "Top-Ranked", label: "Premier Technical Institution", desc: "Consistently recognized as a leading engineering and technology destination in Eastern India.", icon: Trophy, color: "#2C3A8C", pillar: "academics" },
    { id: "nba", stat: "6", label: "NBA Accredited Programmes", desc: "Demonstrating high academic rigor across core engineering disciplines.", icon: Award, color: "#006738", pillar: "academics" },
    { id: "faculty", stat: "200+", label: "Expert Faculty Members", desc: "Guided by dedicated professors and industry practitioners pushing boundaries.", icon: Users, color: "#8B6914", pillar: "academics" },
    { id: "placements", stat: "5,000+", label: "Impactful Career Placements", desc: "Empowering thousands of graduates to join leading global conglomerates and tech leaders.", icon: Briefcase, color: "#C41E3A", pillar: "careers" },
    { id: "placement-rate", stat: "94%", label: "Placement Rate", desc: "Delivering continuous career launchpads through robust active networks.", icon: TrendingUp, color: "#2C3A8C", pillar: "careers" },
    { id: "partnerships", stat: "15+", label: "Global Partnerships", desc: "Collaborating with renowned international academic and research institutions.", icon: Globe, color: "#8B6914", pillar: "careers" },
    { id: "naac", stat: "NAAC", label: "Accredited Institution", desc: "Validated by the highest national assessment bodies for our quality standards and excellence.", icon: Award, color: "#2C3A8C", pillar: "ecosystem" },
    { id: "research", stat: "Research-Led", label: "Innovation & Discovery", desc: "Driving local and global breakthroughs inside state-of-the-art labs.", icon: Microscope, color: "#C41E3A", pillar: "ecosystem" },
    { id: "campus", stat: "10+ Acres", label: "Smart Green Campus", desc: "A sprawling, vibrant ecosystem located in the academic heart of Bhubaneswar.", icon: MapPin, color: "#006738", pillar: "ecosystem" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(entry => { if (entry.isIntersecting) setActivePillar(entry.target.id); }); },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    pillars.forEach(p => { const el = document.getElementById(`section-${p.id}`); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#F9F7F5] border-t border-[#EFE7DF]/50">

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes node-breathe {
          0%, 100% { box-shadow: 0 0 0 0px var(--ring-color); }
          50% { box-shadow: 0 0 0 6px var(--ring-color), 0 0 20px 2px var(--glow-color); }
        }
        @keyframes checkmark-pop {
          0% { transform: scale(0) rotate(-45deg); opacity: 0; }
          60% { transform: scale(1.3) rotate(0deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .node-active { animation: node-breathe 2.5s ease-in-out infinite; }
        .checkmark-enter { animation: checkmark-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
      `}} />

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row items-start relative">
        
        {/* ─── LEFT COLUMN: Sticky Navigation Panel ─── */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-24 h-max lg:py-24 py-16 z-20">
          
          {/* Header */}
          <ScrollReveal from={{ opacity: 0, y: 30 }} className="mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C41E3A] block mb-5">
              The Trident Advantage
            </span>
            <h2 className="serif text-5xl md:text-6xl lg:text-[72px] font-bold text-[#1A1817] leading-[1.02] tracking-tight mb-5">
              <TextReveal blur={true} stagger={0.02}>Why students</TextReveal>
              <TextReveal blur={true} stagger={0.02} delay={100} className="italic font-light text-[#A59381]">choose us.</TextReveal>
            </h2>
            <p className="text-[#3E3A36]/60 text-base md:text-lg font-medium leading-relaxed max-w-sm">
              Discover the pillars that make Trident Academy of Technology the premier destination for future-ready education.
            </p>
          </ScrollReveal>

          {/* Interactive Node Navigation */}
          <ScrollReveal from={{ opacity: 0, x: -20 }} delay={200} className="hidden lg:block relative">
            <div className="flex flex-col gap-1 relative">
              {pillars.map((item, idx) => {
                const isActive = activePillar === item.id;
                const activeIdx = pillars.findIndex(p => p.id === activePillar);
                const isPassed = idx < activeIdx;
                const isUpcoming = idx > activeIdx;
                return (
                  <button key={item.id} onClick={() => handleScrollTo(item.id)}
                    className={`group flex items-center gap-5 py-5 px-5 text-left w-full rounded-2xl relative overflow-hidden transition-all duration-700 ease-out ${isActive ? "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]" : "hover:bg-white/50"}`}>
                    <div className={`w-[34px] h-[34px] rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all duration-700 ${isActive ? 'node-active' : ''}`}
                      style={{ borderColor: isUpcoming ? "#D5CCC4" : item.color, backgroundColor: isUpcoming ? "#F9F7F5" : item.color, '--ring-color': `${item.color}20`, '--glow-color': `${item.color}30`, transform: isActive ? 'scale(1.2)' : 'scale(1)' }}>
                      {isPassed ? <span className="checkmark-enter text-white text-[12px] font-bold">✓</span> : <span className="text-[10px] font-bold" style={{ color: isUpcoming ? "#A59381" : "#FFF" }}>{item.num}</span>}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: isActive ? item.color : isPassed ? item.color : "#8A8279", opacity: isUpcoming ? 0.6 : 1 }}>{item.short}</span>
                      <span className="font-serif text-[22px] font-medium leading-tight" style={{ color: isActive ? item.color : isPassed ? "#3E3A36" : "#5A554F", opacity: isUpcoming ? 0.5 : 1, transform: isActive ? 'translateX(4px)' : 'translateX(0)' }}>{item.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* ─── RIGHT COLUMN: No containers, blends with background ─── */}
        <div className="w-full lg:w-[65%] lg:py-24 pb-20 z-10">

            {pillars.map((pillar, pillarIdx) => {
              const pillarStats = achievements.filter(a => a.pillar === pillar.id);
              
              return (
                <div key={pillar.id} id={`section-${pillar.id}`} className="relative scroll-mt-24">
                  
                  {/* Pillar heading — colored line separator */}
                  <ScrollReveal from={{ opacity: 0, y: 20 }}>
                    <div className={`flex items-center gap-4 ${pillarIdx > 0 ? 'mt-16 md:mt-20 pt-10 md:pt-14 border-t border-[#EFE7DF]' : ''} mb-10 md:mb-12`}>
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: pillar.color }} />
                      <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: pillar.color }}>
                        {pillar.title}
                      </span>
                      <div className="flex-1 h-[2px] rounded-full" style={{ backgroundColor: `${pillar.color}15` }} />
                      <span className="text-xs font-mono" style={{ color: `${pillar.color}40` }}>{pillar.num}</span>
                    </div>
                  </ScrollReveal>

                  {/* Stats rows — floating directly on the page background */}
                  <div className="flex flex-col">
                    {pillarStats.map((stat, idx) => {
                      const Icon = stat.icon;
                      const isLast = idx === pillarStats.length - 1;

                      return (
                        <ScrollReveal key={stat.id} from={{ opacity: 0, x: 20 }} delay={idx * 100}>
                          <div className="group cursor-default">
                            <div className="flex items-start gap-5 md:gap-7 py-6 md:py-8 transition-all duration-500 group-hover:translate-x-1">
                              
                              {/* Solid colored icon */}
                              <div 
                                className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                                style={{ backgroundColor: stat.color, color: '#FFFFFF', boxShadow: `0 4px 14px ${stat.color}30` }}
                              >
                                <Icon size={22} strokeWidth={1.5} />
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A59381] group-hover:text-[#7A7570] transition-colors duration-400 block mb-2">
                                  {stat.label}
                                </span>
                                <AnimatedStat stat={stat.stat} color={stat.color} />
                                <p className="text-[#5A554F] text-sm md:text-[15px] leading-relaxed mt-2.5 max-w-md group-hover:text-[#3E3A36] transition-colors duration-400">
                                  {stat.desc}
                                </p>
                              </div>

                              {/* Arrow on hover */}
                              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-400 -translate-x-2 group-hover:translate-x-0 border"
                                style={{ borderColor: `${stat.color}30`, color: stat.color }}>
                                <ArrowRight size={16} />
                              </div>
                            </div>

                            {/* Thin separator between rows */}
                            {!isLast && (
                              <div className="ml-[68px] md:ml-[80px] h-[1px] bg-[#EFE7DF] group-hover:bg-[#D5CCC4] transition-colors duration-400" />
                            )}
                          </div>
                        </ScrollReveal>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
}
