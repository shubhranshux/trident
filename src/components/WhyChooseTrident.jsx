import { useState, useEffect, useRef, useCallback } from "react";
import { FadeInUp } from "../utils/animations";
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

// ─── Count-Up Animation Hook ───
function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnView || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic for a satisfying deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, startOnView]);

  return { count, ref };
}

// Parse stat string → { number, prefix, suffix, isNumeric }
function parseStat(stat) {
  const match = stat.match(/^([^\d]*?)(\d[\d,]*)(.*?)$/);
  if (!match) return { isNumeric: false, raw: stat };
  const prefix = match[1] || "";
  const num = parseInt(match[2].replace(/,/g, ""), 10);
  const suffix = match[3] || "";
  // Format number with commas
  const format = (n) => n.toLocaleString("en-IN");
  return { isNumeric: true, prefix, number: num, suffix, format };
}

function AnimatedStat({ stat, gradient }) {
  const parsed = parseStat(stat);

  if (!parsed.isNumeric) {
    return (
      <h4 className="serif text-5xl md:text-6xl font-black tracking-tight mb-2">
        <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {stat}
        </span>
      </h4>
    );
  }

  const { count, ref } = useCountUp(parsed.number, 2000);

  return (
    <h4 ref={ref} className="serif text-5xl md:text-6xl font-black tracking-tight mb-2">
      <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {parsed.prefix}{parsed.format(count)}{parsed.suffix}
      </span>
    </h4>
  );
}

export default function WhyChooseTrident() {
  const [activePillar, setActivePillar] = useState("academics");

  const pillars = [
    {
      id: "academics",
      num: "01",
      title: "Academic Excellence",
      short: "Academics",
      subtitle: "Accreditations & Expert Mentorship",
      desc: "A curriculum aligned with global standards, audited by premier national bodies and led by distinguished academic minds.",
      color: "#2C3A8C", // navy
      lightColor: "#4A5DC5",
      glow: "rgba(44, 58, 140, 0.05)",
      bg: "bg-[#2C3A8C]",
      text: "text-[#2C3A8C]"
    },
    {
      id: "careers",
      num: "02",
      title: "Career Ascendancy",
      short: "Careers",
      subtitle: "Global Placement & Industry Networks",
      desc: "Empowering our graduates with premium career launchpads, active recruiting pipelines, and premier international partnerships.",
      color: "#C41E3A", // red
      lightColor: "#E74C3C",
      glow: "rgba(196, 30, 58, 0.05)",
      bg: "bg-[#C41E3A]",
      text: "text-[#C41E3A]"
    },
    {
      id: "ecosystem",
      num: "03",
      title: "Vibrant Ecosystem",
      short: "Ecosystem",
      subtitle: "Research Labs & Smart Green Campus",
      desc: "Driving breakthroughs and sustainable living inside a cutting-edge technological incubator and SIRO-accredited research facilities.",
      color: "#006738", // green
      lightColor: "#2E8B57",
      glow: "rgba(0, 103, 56, 0.05)",
      bg: "bg-[#006738]",
      text: "text-[#006738]"
    }
  ];

  const achievements = [
    // Academics
    {
      id: "top-ranked",
      stat: "Top-Ranked",
      label: "Premier Technical Institution",
      desc: "Consistently recognized as a leading engineering and technology destination in Eastern India.",
      icon: Trophy,
      color: "#2C3A8C",
      pillar: "academics",
      iconBg: "rgba(255,255,255,0.15)",
      gradient: "from-white to-white/80",
      layout: "wide",
      cardBg: "linear-gradient(135deg, #1E2A6E 0%, #2C3A8C 50%, #3D4FA0 100%)",
      cardText: "light"
    },
    {
      id: "nba",
      stat: "6",
      label: "NBA Accredited Programmes",
      desc: "Demonstrating high academic rigor across core engineering disciplines.",
      icon: Award,
      color: "#006738",
      pillar: "academics",
      iconBg: "rgba(255,255,255,0.12)",
      gradient: "from-white to-white/80",
      layout: "square",
      cardBg: "linear-gradient(135deg, #004D29 0%, #006738 50%, #2E8B57 100%)",
      cardText: "light"
    },
    {
      id: "faculty",
      stat: "200+",
      label: "Expert Faculty Members",
      desc: "Guided by dedicated professors and industry practitioners pushing boundaries.",
      icon: Users,
      color: "#E8BD63",
      pillar: "academics",
      iconBg: "rgba(62,58,54,0.08)",
      gradient: "from-[#3E3A36] to-[#5A554F]",
      layout: "square",
      cardBg: "linear-gradient(135deg, #F7ECD8 0%, #FDF5E6 50%, #FFF8ED 100%)",
      cardText: "dark"
    },
    // Careers
    {
      id: "placements",
      stat: "5,000+",
      label: "Impactful Career Placements",
      desc: "Empowering thousands of graduates to join leading global conglomerates and tech leaders.",
      icon: Briefcase,
      color: "#C41E3A",
      pillar: "careers",
      iconBg: "rgba(255,255,255,0.15)",
      gradient: "from-white to-white/80",
      layout: "wide",
      cardBg: "linear-gradient(135deg, #9B1530 0%, #C41E3A 50%, #E74C3C 100%)",
      cardText: "light"
    },
    {
      id: "placement-rate",
      stat: "94%",
      label: "Placement Rate",
      desc: "Delivering continuous career launchpads through robust active networks.",
      icon: TrendingUp,
      color: "#2C3A8C",
      pillar: "careers",
      iconBg: "rgba(62,58,54,0.08)",
      gradient: "from-[#3E3A36] to-[#5A554F]",
      layout: "square",
      cardBg: "linear-gradient(135deg, #E8EDF8 0%, #EEF2FB 50%, #F5F7FD 100%)",
      cardText: "dark"
    },
    {
      id: "partnerships",
      stat: "15+",
      label: "Global Partnerships",
      desc: "Collaborating with renowned international academic and research institutions.",
      icon: Globe,
      color: "#E8BD63",
      pillar: "careers",
      iconBg: "rgba(255,255,255,0.15)",
      gradient: "from-[#FFF8ED] to-[#F7ECD8]",
      layout: "square",
      cardBg: "linear-gradient(135deg, #8B6914 0%, #B8860B 50%, #D4A84B 100%)",
      cardText: "light"
    },
    // Ecosystem
    {
      id: "naac",
      stat: "NAAC",
      label: "Accredited Institution",
      desc: "Validated by the highest national assessment bodies for our quality standards and excellence.",
      icon: Award,
      color: "#2C3A8C",
      pillar: "ecosystem",
      iconBg: "rgba(62,58,54,0.07)",
      gradient: "from-[#3E3A36] to-[#5A554F]",
      layout: "wide",
      cardBg: "linear-gradient(135deg, #E6F0E6 0%, #F0F8F0 50%, #F5FBF5 100%)",
      cardText: "dark"
    },
    {
      id: "research",
      stat: "Research-Led",
      label: "Innovation & Discovery",
      desc: "Driving local and global breakthroughs inside state-of-the-art labs.",
      icon: Microscope,
      color: "#C41E3A",
      pillar: "ecosystem",
      iconBg: "rgba(255,255,255,0.15)",
      gradient: "from-white to-white/80",
      layout: "square",
      cardBg: "linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)",
      cardText: "light"
    },
    {
      id: "campus",
      stat: "10+ Acres",
      label: "Smart Green Campus",
      desc: "A sprawling, vibrant ecosystem located in the academic heart of Bhubaneswar.",
      icon: MapPin,
      color: "#006738",
      pillar: "ecosystem",
      iconBg: "rgba(255,255,255,0.15)",
      gradient: "from-white to-white/80",
      layout: "square",
      cardBg: "linear-gradient(135deg, #004D29 0%, #006738 50%, #2E8B57 100%)",
      cardText: "light"
    }
  ];

  // Scroll spy to update active pillar based on viewport intersection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // triggers when section is in the upper half of screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActivePillar(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    pillars.forEach(p => {
      const el = document.getElementById(`section-${p.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      // Offset for sticky header if any, else smooth scroll
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#F9F7F5] border-t border-[#EFE7DF]/50">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row items-start relative">
        
        {/* ─── LEFT COLUMN: Sticky Header & Navigation ─── */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-0 lg:h-screen lg:py-24 py-16 flex flex-col justify-center z-20">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EFE7DF] shadow-sm mb-6">
              <Sparkles size={14} className="text-[#E8BD63]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A59381]">
                Why Choose Trident
              </span>
            </div>
            
            <h2 className="serif text-5xl md:text-6xl xl:text-7xl font-black text-[#3E3A36] leading-[1.05] tracking-tight mb-6">
              Built for <br/>
              <span className="italic font-light text-[#A59381] font-serif">excellence.</span>
            </h2>
            
            <p className="text-[#5A554F] text-lg font-medium leading-relaxed max-w-md mb-12 font-serif italic">
              A comprehensive ecosystem designed to forge global leaders through uncompromising standards.
            </p>

            {/* Sticky Navigation Menu with Progress Path */}
            <div className="hidden lg:flex flex-col gap-1 relative">
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes node-breathe {
                  0%, 100% { box-shadow: 0 0 0 0px var(--ring-color), 0 0 0 0px var(--ring-color); }
                  50% { box-shadow: 0 0 0 6px var(--ring-color), 0 0 20px 2px var(--glow-color); }
                }
                @keyframes progress-glow {
                  0%, 100% { opacity: 0.5; }
                  50% { opacity: 1; }
                }
                @keyframes checkmark-pop {
                  0% { transform: scale(0) rotate(-45deg); opacity: 0; }
                  60% { transform: scale(1.3) rotate(0deg); opacity: 1; }
                  100% { transform: scale(1) rotate(0deg); opacity: 1; }
                }
                .node-active {
                  animation: node-breathe 2.5s ease-in-out infinite;
                }
                .checkmark-enter {
                  animation: checkmark-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
              `}} />

              {/* Background track line */}
              <div className="absolute left-[15px] top-6 bottom-6 w-[3px] bg-[#EFE7DF] -z-10 rounded-full overflow-hidden">
                {/* Active progress fill */}
                <div 
                  className="w-full rounded-full transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative"
                  style={{
                    height: activePillar === pillars[0].id ? '15%' 
                         : activePillar === pillars[1].id ? '55%' 
                         : '100%',
                    background: `linear-gradient(180deg, ${pillars[0].color} 0%, ${pillars[1].color} 50%, ${pillars[2].color} 100%)`,
                  }}
                >
                  {/* Glowing tip at the bottom of the progress */}
                  <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[7px] h-[7px] rounded-full"
                    style={{
                      background: pillars.find(p => p.id === activePillar)?.color || pillars[0].color,
                      boxShadow: `0 0 10px ${pillars.find(p => p.id === activePillar)?.color || pillars[0].color}`,
                      animation: 'progress-glow 2s ease-in-out infinite',
                    }}
                  />
                </div>
              </div>

              {pillars.map((item, idx) => {
                const isActive = activePillar === item.id;
                const activeIdx = pillars.findIndex(p => p.id === activePillar);
                const isPassed = idx < activeIdx;
                const isUpcoming = idx > activeIdx;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className={`group flex items-center gap-5 py-5 px-5 text-left w-full rounded-2xl relative overflow-hidden transition-all duration-700 ease-out ${
                      isActive ? "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]" : "hover:bg-white/50"
                    }`}
                  >
                    {/* Active colored left accent bar */}
                    <div 
                      className="absolute left-0 top-[15%] bottom-[15%] w-[3px] rounded-r-full transition-all duration-700"
                      style={{
                        backgroundColor: isActive ? item.color : "transparent",
                        boxShadow: isActive ? `0 0 12px ${item.color}80` : "none",
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'scaleY(1)' : 'scaleY(0.5)',
                      }}
                    />

                    {/* Number Indicator Node */}
                    <div 
                      className={`w-[34px] h-[34px] rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all duration-700 ${isActive ? 'node-active' : ''}`}
                      style={{
                        borderColor: isUpcoming ? "#D5CCC4" : item.color,
                        backgroundColor: isUpcoming ? "#F9F7F5" : item.color,
                        '--ring-color': `${item.color}20`,
                        '--glow-color': `${item.color}30`,
                        transform: isActive ? 'scale(1.2)' : 'scale(1)',
                      }}
                    >
                      {isPassed ? (
                        <span className="checkmark-enter text-white text-[12px] font-black">✓</span>
                      ) : (
                        <span 
                          className="text-[10px] font-black transition-all duration-500"
                          style={{ color: isUpcoming ? "#A59381" : "#FFFFFF" }}
                        >
                          {item.num}
                        </span>
                      )}
                    </div>

                    {/* Menu Text */}
                    <div className="flex flex-col gap-0.5">
                      <span 
                        className="text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-700"
                        style={{ 
                          color: isActive ? item.color : isPassed ? item.color : "#8A8279",
                          opacity: isUpcoming ? 0.6 : 1,
                        }}
                      >
                        {item.short}
                      </span>
                      <span 
                        className="font-serif text-[22px] font-bold leading-tight transition-all duration-700"
                        style={{ 
                          color: isActive ? item.color : isPassed ? "#3E3A36" : "#5A554F",
                          opacity: isUpcoming ? 0.5 : 1,
                          transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                        }}
                      >
                        {item.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </FadeInUp>
        </div>

        {/* ─── RIGHT COLUMN: Scrolling Bento Metrics ─── */}
        <div className="w-full lg:w-[65%] lg:py-24 pb-20 flex flex-col gap-24 lg:gap-32 z-10">
          
          {pillars.map((pillar) => {
            const pillarStats = achievements.filter(a => a.pillar === pillar.id);
            
            return (
              <div key={pillar.id} id={`section-${pillar.id}`} className="flex flex-col gap-8 scroll-mt-24">
                
                {/* Pillar Header (Visible primarily on mobile or as elegant dividers on desktop) */}
                <FadeInUp className="flex flex-col gap-3 lg:hidden">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-[2px] bg-current" style={{ color: pillar.color }} />
                    <span className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: pillar.color }}>
                      {pillar.title}
                    </span>
                  </div>
                </FadeInUp>

                {/* The Bento Grid for this Pillar */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pillarStats.map((stat, idx) => {
                    const Icon = stat.icon;
                    const isWide = stat.layout === "wide";
                    
                    const isLight = stat.cardText === "light";
                    return (
                      <FadeInUp 
                        key={stat.id} 
                        delay={idx * 100}
                        className={isWide ? "md:col-span-2" : ""}
                      >
                        <div
                          className={`group relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-1.5 ${
                            isWide ? "flex flex-col md:flex-row items-start md:items-center p-8 md:p-10 gap-8" : "flex flex-col p-8 gap-6"
                          }`}
                          style={{ background: stat.cardBg }}
                        >
                          {/* Decorative shimmer overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-black/[0.05] pointer-events-none rounded-3xl" />

                          {/* Icon Badge */}
                          <div 
                            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 backdrop-blur-sm relative z-10"
                            style={{ backgroundColor: stat.iconBg, color: isLight ? "#FFFFFF" : stat.color }}
                          >
                            <Icon size={24} />
                          </div>

                          {/* Stat Content */}
                          <div className="flex flex-col flex-1 relative z-10">
                            <AnimatedStat stat={stat.stat} gradient={stat.gradient} />
                            <h5 className={`text-[11px] font-black uppercase tracking-[0.2em] mb-2.5 ${
                              isLight ? "text-white/80" : "text-[#3E3A36]"
                            }`}>
                              {stat.label}
                            </h5>
                            <p className={`text-sm font-medium leading-relaxed ${
                              isLight ? "text-white/60" : "text-[#5A554F]/80"
                            }`}>
                              {stat.desc}
                            </p>
                          </div>
                          
                          {/* Wide Layout Arrow indicator */}
                          {isWide && (
                            <div className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full border transition-colors duration-300 ml-auto flex-shrink-0 ${
                              isLight 
                                ? "border-white/20 text-white/50 group-hover:bg-white/10 group-hover:text-white" 
                                : "border-[#EFE7DF] text-[#A59381] group-hover:bg-white/50 group-hover:text-[#3E3A36]"
                            }`}>
                              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          )}
                        </div>
                      </FadeInUp>
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
