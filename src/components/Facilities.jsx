import { useState } from "react";
import { FadeInUp } from "../utils/animations";
import { BookMarked, FlaskConical, Dumbbell, Coffee, Wifi, Microscope, ArrowRight } from "lucide-react";

import libImg from "../assets/real_library.jpg";
import labImg from "../assets/real_lab.jpg";
import cafeImg from "../assets/real_cafeteria.jpg";
import quadImg from "../assets/facilities_campus_green.jpg";
import aerialImg from "../assets/facilities_sports.jpg";
import researchImg from "../assets/real_research.jpg";

const FACILITIES = [
  { 
    title: "Central Library", 
    icon: <BookMarked size={20}/>, 
    desc: "A sprawling repository with over 100,000 volumes, private study pods, and digital journal access for round-the-clock research.",
    img: libImg,
    href: "https://academics-tat.tekkzy.com/department-libraries/",
    accent: "#2C3A8C",
    accentLight: "#EEF0FA",
    stat: "100K+",
    statLabel: "Volumes"
  },
  { 
    title: "Advanced Labs", 
    icon: <FlaskConical size={20}/>, 
    desc: "State-of-the-art AI, IoT, and Robotics labs sponsored by leading industry partners, equipped with cutting-edge technology.",
    img: labImg,
    href: "https://tat.tekkzy.com/career-guidance/",
    accent: "#C41E3A",
    accentLight: "#FCEEF1",
    stat: "25+",
    statLabel: "Specialized Labs"
  },
  { 
    title: "Cafeteria & Dining", 
    icon: <Coffee size={20}/>, 
    desc: "Multi-cuisine dining options with spacious glass-walled seating areas designed for collaboration and community.",
    img: cafeImg,
    href: "https://activities-tat.tekkzy.com/",
    accent: "#006738",
    accentLight: "#E8F5EE",
    stat: "3",
    statLabel: "Dining Halls"
  },
  { 
    title: "Campus Quadrangles", 
    icon: <Wifi size={20}/>, 
    desc: "Lush green, tech-enabled open spaces designed for relaxation, outdoor learning, and creative collaboration.",
    img: quadImg,
    href: "https://campuslife-tat.tekkzy.com/",
    accent: "#0F766E",
    accentLight: "#ECFDF5",
    stat: "10+",
    statLabel: "Acres Green"
  },
  { 
    title: "Athletics & Wellness", 
    icon: <Dumbbell size={20}/>, 
    desc: "Olympic-standard facilities, indoor stadium, swimming pool, and expansive green fields for holistic fitness.",
    img: aerialImg,
    href: "https://activities-tat.tekkzy.com/",
    accent: "#B45309",
    accentLight: "#FEF3C7",
    stat: "8+",
    statLabel: "Sports"
  },
  { 
    title: "Research Hub", 
    icon: <Microscope size={20}/>, 
    desc: "Dedicated incubation centers and research labs equipped with cutting-edge technology to foster innovation.",
    img: researchImg,
    href: "https://research-tat.tekkzy.com/",
    accent: "#7C3AED",
    accentLight: "#F3EEFE",
    stat: "50+",
    statLabel: "Projects"
  }
];

export default function Facilities() {
  const [active, setActive] = useState(0);
  const fac = FACILITIES[active];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="facilities"
      style={{ background: 'linear-gradient(180deg, #D5E8D4 0%, #DCEADB 50%, #D2E6D1 100%)' }}
    >

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} 
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <FadeInUp>
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#E8BD63]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#A59381]">Campus Ecosystem</span>
              <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#E8BD63]" />
            </div>
            <h2 className="serif text-4xl md:text-5xl lg:text-[64px] font-black text-[#1A1817] leading-[1.05] tracking-tight mb-4">
              World-Class{' '}
              <span className="italic font-light text-[#2C3A8C]">Infrastructure.</span>
            </h2>
            <p className="text-[#3E3A36]/50 text-base md:text-lg font-medium leading-relaxed max-w-lg mx-auto">
              Six pillars of excellence designed to nurture intellectual exploration and holistic development.
            </p>
          </FadeInUp>
        </div>

        {/* ═══ Horizontal Tab Bar ═══ */}
        <FadeInUp delay={150}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-14">
            {FACILITIES.map((item, i) => {
              const isActive = active === i;
              return (
                <button
                  key={item.title}
                  onClick={() => setActive(i)}
                  className="group relative flex items-center gap-2.5 px-5 py-3 rounded-full text-left transition-all duration-500 border"
                  style={{
                    background: isActive ? item.accent : 'white',
                    borderColor: isActive ? item.accent : '#EFE7DF',
                    color: isActive ? '#FFFFFF' : '#3E3A36',
                    boxShadow: isActive 
                      ? `0 8px 25px -5px ${item.accent}40` 
                      : '0 1px 3px rgba(0,0,0,0.04)',
                    transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                  }}
                >
                  <span 
                    className="flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-500"
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.2)' : item.accentLight,
                      color: isActive ? '#FFFFFF' : item.accent,
                    }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-[12px] font-bold tracking-wide hidden sm:block">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeInUp>

        {/* ═══ Main Showcase Area ═══ */}
        <FadeInUp delay={250}>
          <div 
            className="rounded-[28px] overflow-hidden transition-all duration-700 border"
            style={{ 
              borderColor: `${fac.accent}15`,
              boxShadow: `0 30px 80px -20px ${fac.accent}15, 0 0 0 1px ${fac.accent}08`,
            }}
          >
            <div className="flex flex-col lg:flex-row min-h-[480px]">

              {/* ── Left: Image ── */}
              <div className="w-full lg:w-[58%] relative overflow-hidden min-h-[300px] lg:min-h-0">
                {/* Image crossfade */}
                {FACILITIES.map((item, i) => (
                  <div
                    key={item.title}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      active === i ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                    style={{ zIndex: active === i ? 2 : 1 }}
                  >
                    <img 
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Bottom gradient */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/10" />

                {/* Number watermark */}
                <div 
                  className="absolute bottom-4 left-6 z-20 serif font-black text-[80px] lg:text-[120px] leading-none select-none pointer-events-none text-white/10"
                >
                  {String(active + 1).padStart(2, '0')}
                </div>

                {/* Counter */}
                <div className="absolute top-5 left-6 z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10">
                    <span className="text-[10px] font-black tracking-widest text-white/90">
                      {String(active + 1).padStart(2, '0')} / {String(FACILITIES.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Right: Content Panel ── */}
              <div 
                className="w-full lg:w-[42%] p-8 lg:p-12 flex flex-col justify-between transition-all duration-700"
                style={{ background: `linear-gradient(160deg, #FFFFFF 0%, ${fac.accentLight} 100%)` }}
              >
                <div>
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-500"
                      style={{ 
                        background: `linear-gradient(135deg, ${fac.accent}, ${fac.accent}CC)`,
                        boxShadow: `0 8px 24px -4px ${fac.accent}35`,
                      }}
                    >
                      {fac.icon}
                    </div>
                    <div>
                      <h3 className="serif text-2xl lg:text-3xl font-black text-[#1A1817] leading-tight">
                        {fac.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#3E3A36]/65 text-[15px] lg:text-base font-medium leading-[1.8] mb-8 max-w-md">
                    {fac.desc}
                  </p>

                  {/* Stat Card */}
                  <div 
                    className="inline-flex items-center gap-5 px-6 py-4 rounded-2xl border transition-all duration-500 mb-8"
                    style={{
                      background: 'white',
                      borderColor: `${fac.accent}15`,
                      boxShadow: `0 4px 16px -4px ${fac.accent}10`,
                    }}
                  >
                    <span 
                      className="serif text-4xl lg:text-5xl font-black leading-none transition-colors duration-500"
                      style={{ color: fac.accent }}
                    >
                      {fac.stat}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#3E3A36]/40">
                        {fac.statLabel}
                      </span>
                      <span className="text-[11px] font-medium text-[#3E3A36]/25 mt-0.5">Available on campus</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex mt-2">
                  <a 
                    href={fac.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-10 py-5 rounded-2xl text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:-translate-y-1 group/btn"
                    style={{
                      background: fac.accent,
                      boxShadow: `0 12px 30px -8px ${fac.accent}60`,
                    }}
                  >
                    Explore Facility
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </FadeInUp>

        {/* ═══ Bottom Mini-Grid Preview ═══ */}
        <FadeInUp delay={350}>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-8">
            {FACILITIES.map((item, i) => {
              const isActive = active === i;
              return (
                <button
                  key={item.title}
                  onClick={() => setActive(i)}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-500"
                  style={{
                    height: '80px',
                    border: isActive ? `2px solid ${item.accent}` : '2px solid transparent',
                    boxShadow: isActive ? `0 4px 16px -4px ${item.accent}30` : '0 1px 4px rgba(0,0,0,0.06)',
                    transform: isActive ? 'translateY(-3px)' : 'translateY(0)',
                  }}
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{
                      filter: isActive ? 'brightness(1) saturate(1.1)' : 'brightness(0.7) saturate(0.7)',
                    }}
                  />
                  <div 
                    className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                    style={{
                      background: isActive ? `${item.accent}30` : 'rgba(0,0,0,0.3)',
                    }}
                  >
                    <span className="text-white text-[9px] font-bold uppercase tracking-wider text-center px-2 leading-tight" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                      {item.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </FadeInUp>

      </div>
    </section>
  );
}
