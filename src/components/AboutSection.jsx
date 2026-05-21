import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FadeInUp } from "../utils/animations";
import aboutImg1 from "../assets/about_students_studying.jpg";
import aboutImg2 from "../assets/about_engineering_workshop.jpg";
import { Award, BookOpen, Shield, GraduationCap, Eye, Target, ArrowRight } from "lucide-react";

/* ─── Animated Counter ─── */
function AnimatedNumber({ value, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(value);
    const stepTime = Math.max(Math.floor(duration / end), 16);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function AboutSection() {
  const badges = [
    { label: "NAAC Accredited", icon: <Award size={13} />, color: "#E8BD63" },
    { label: "NBA — 6 Programmes", icon: <BookOpen size={13} />, color: "#C41E3A" },
    { label: "Approved by AICTE", icon: <Shield size={13} />, color: "#2E6DB4" },
    { label: "Affiliated to BPUT", icon: <GraduationCap size={13} />, color: "#3EA644" },
    { label: "DSIR SIRO", icon: <Shield size={13} />, color: "#8B5CF6" },
    { label: "Member of HESI", icon: <Award size={13} />, color: "#A59381" },
  ];

  const stats = [
    { number: "20", suffix: "+", label: "Years of\nLegacy", color: "#E8BD63" },
    { number: "200", suffix: "+", label: "Expert\nFaculty", color: "#4ECDC4" },
    { number: "94", suffix: "%", label: "Placement\nRate", color: "#FF6B6B" },
    { number: "120", suffix: "+", label: "Top\nRecruiters", color: "#A78BFA" },
  ];

  const missionPoints = [
    "To foster holistic excellence in the new generation of students.",
    "To instill in them, the power of aggressive positive thinking, insatiable desire for information and knowledge, a penchant for out-of-the-box ideation and capacity of execution.",
    "To contribute to the society with honesty and integrity through innovative research in the multi-disciplinary areas of evolving and upcoming technologies.",
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden bg-[#F5EEEC]">


      {/* ═══ Main Content: Dramatic Split ═══ */}
      <div className="relative pb-10">

        {/* Background split — dark left, light right */}
        <div className="absolute inset-0 hidden lg:flex">
          <div className="w-[45%] bg-[#111827]" />
          <div className="w-[55%] bg-[#F5EEEC]" />
        </div>

        {/* Mobile: full dark top section */}
        <div className="absolute inset-0 lg:hidden bg-[#111827]" style={{ height: '520px' }} />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start">

            {/* ═══ LEFT: Dark Immersive Panel ═══ */}
            <div className="lg:col-span-5 relative px-6 md:px-10 lg:pl-10 lg:pr-0 pt-10 pb-16 lg:py-20">

              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-24 h-24 border border-white/[0.04] rounded-full hidden lg:block" />
              <div className="absolute bottom-32 left-6 w-40 h-40 border border-white/[0.03] rounded-full hidden lg:block" />

              {/* Section heading on dark */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10 relative z-10"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E8BD63]/70 block mb-4">
                  Est. 2005 · Bhubaneswar
                </span>
                <h2 className="serif text-3xl md:text-4xl lg:text-[42px] font-black text-white leading-[1.1] tracking-tight">
                  Built on a
                  <br />foundation of
                  <br /><span className="italic text-[#E8BD63]">excellence.</span>
                </h2>
              </motion.div>

              {/* Image composition */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 mb-12"
              >
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]" style={{ aspectRatio: '4/3' }}>
                  <img src={aboutImg2} alt="Engineering workshop" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Overlapping secondary image */}
                <div className="absolute -bottom-8 -right-4 md:-right-8 w-[45%] rounded-xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)] border-[3px] border-[#111827] ring-1 ring-white/10" style={{ aspectRatio: '3/4' }}>
                  <img src={aboutImg1} alt="Students studying" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </motion.div>

              {/* Stats Grid — Card-Free Typographic Constellation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 grid grid-cols-2 gap-x-12 gap-y-16 px-4 py-8"
              >
                {/* Custom keyframes injected */}
                <style dangerouslySetInnerHTML={{ __html: `
                  @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                  @keyframes float-gentle-1 {
                    0%, 100% { transform: translateY(0px) translateX(-5px); }
                    50% { transform: translateY(-8px) translateX(-5px); }
                  }
                  @keyframes float-gentle-2 {
                    0%, 100% { transform: translateY(15px) translateX(5px); }
                    50% { transform: translateY(7px) translateX(5px); }
                  }
                  @keyframes float-gentle-3 {
                    0%, 100% { transform: translateY(5px) translateX(-15px); }
                    50% { transform: translateY(-3px) translateX(-15px); }
                  }
                  @keyframes float-gentle-4 {
                    0%, 100% { transform: translateY(30px) translateX(10px); }
                    50% { transform: translateY(22px) translateX(10px); }
                  }
                  .orbit-ring {
                    transform-origin: center;
                    animation: spin-slow 18s linear infinite;
                  }
                `}} />



                {stats.map((s, i) => {
                  const floatAnim = `float-gentle-${i + 1} ${6 + i * 0.7}s ease-in-out infinite`;
                  return (
                    <div
                      key={i}
                      className="group relative flex flex-col items-start transition-all duration-500 z-10 cursor-default"
                      style={{ animation: floatAnim }}
                    >
                      {/* Ambient Glow spotlight behind metrics on hover */}
                      <div 
                        className="absolute -inset-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-[40px] pointer-events-none scale-90 group-hover:scale-100"
                        style={{
                          background: `radial-gradient(circle, ${s.color}15 0%, transparent 70%)`
                        }}
                      />



                      {/* Number Content */}
                      <div className="relative z-10 flex items-baseline">
                        <div className="serif text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight mb-2 flex items-baseline transform transition-transform duration-500 group-hover:scale-105">
                          <AnimatedNumber value={s.number} />
                          <span 
                            style={{ color: s.color }} 
                            className="ml-1 text-2xl md:text-3xl font-light transform transition-transform duration-500 group-hover:scale-110 select-none"
                          >
                            {s.suffix}
                          </span>
                        </div>
                      </div>

                      {/* Descriptive Label */}
                      <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em] text-white/30 group-hover:text-white/60 transition-colors duration-500 whitespace-pre-line leading-relaxed relative z-10">
                        {s.label}
                      </div>

                      {/* Interactive Mini Accent Wave that draws on hover */}
                      <div className="w-16 h-[2px] mt-2.5 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 relative z-10">
                        <svg className="w-full h-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                          <path 
                            d="M0,5 Q25,0 50,5 T100,5" 
                            fill="none" 
                            stroke={s.color} 
                            strokeWidth="3" 
                            strokeLinecap="round" 
                          />
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* ═══ RIGHT: Vision & Mission on Light ═══ */}
            <div className="lg:col-span-7 relative bg-[#F5EEEC] lg:bg-transparent px-6 md:px-10 lg:pl-16 xl:pl-24 lg:pr-10 py-16 lg:py-20">

              {/* Decorative vertical line */}
              <div className="absolute top-20 left-0 w-px h-[60%] bg-gradient-to-b from-[#E8BD63]/20 via-[#2C3A8C]/10 to-transparent hidden lg:block" />

              {/* Intro text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mb-14"
              >
                <p className="text-[#3E3A36]/50 text-base md:text-lg font-medium leading-relaxed max-w-lg">
                  A unit of the Dinabandhu Foundation, Trident Academy of Technology is one of India's leading private technical institutions, shaping the next generation of innovators and leaders.
                </p>
              </motion.div>

              {/* ── VISION ── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mb-14"
              >
                <div className="flex items-center gap-4 mb-7">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-[0_8px_25px_-5px_rgba(232,189,99,0.4)]"
                    style={{ background: 'linear-gradient(135deg, #E8BD63 0%, #D4A84B 100%)' }}
                  >
                    <Eye size={24} className="text-white relative z-10" />
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20" />
                  </div>
                  <div>
                    <h3 className="serif text-3xl font-black text-[#3E3A36] tracking-tight leading-none">Vision</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="w-10 h-[3px] rounded-full bg-[#E8BD63]" />
                      <div className="w-3 h-[3px] rounded-full bg-[#E8BD63]/30" />
                      <div className="w-1.5 h-[3px] rounded-full bg-[#E8BD63]/15" />
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l-[3px] border-[#E8BD63]">
                  <div className="absolute -top-4 -left-3 text-[90px] leading-none select-none pointer-events-none" style={{ fontFamily: "'Playfair Display', serif", color: '#E8BD63', opacity: 0.07 }}>"</div>
                  <blockquote className="text-[#3E3A36]/65 text-[18px] md:text-[20px] leading-[1.9] font-medium italic">
                    To become a sustainable institution of excellence, advancing innovative education, research and skill development.
                  </blockquote>
                </div>
              </motion.div>

              {/* ── Ornamental Divider ── */}
              <div className="flex items-center gap-5 mb-14 max-w-lg">
                <div className="h-px flex-1 bg-gradient-to-r from-[#E8BD63]/20 to-transparent" />
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#E8BD63]/25" />
                  <div className="w-2 h-2 rotate-45 border border-[#3E3A36]/10" />
                  <div className="w-1 h-1 rounded-full bg-[#2C3A8C]/25" />
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-[#2C3A8C]/15 to-transparent" />
              </div>

              {/* ── MISSION ── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 mb-9">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-[0_8px_25px_-5px_rgba(44,58,140,0.4)]"
                    style={{ background: 'linear-gradient(135deg, #2C3A8C 0%, #3D4FA0 100%)' }}
                  >
                    <Target size={24} className="text-white relative z-10" />
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white/15" />
                  </div>
                  <div>
                    <h3 className="serif text-3xl font-black text-[#3E3A36] tracking-tight leading-none">Mission</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="w-10 h-[3px] rounded-full bg-[#2C3A8C]" />
                      <div className="w-3 h-[3px] rounded-full bg-[#2C3A8C]/30" />
                      <div className="w-1.5 h-[3px] rounded-full bg-[#2C3A8C]/15" />
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  {missionPoints.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.55 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="flex gap-4 items-start group"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl text-white text-[13px] font-black flex items-center justify-center shadow-[0_4px_15px_-3px_rgba(44,58,140,0.35)] group-hover:shadow-[0_8px_25px_-5px_rgba(44,58,140,0.5)] group-hover:scale-105 transition-all duration-400 mt-0.5"
                        style={{ background: 'linear-gradient(135deg, #2C3A8C, #3D4FA0)' }}
                      >
                        {i + 1}
                      </span>
                      <p className="text-[#3E3A36]/55 text-[15px] leading-[1.85] font-medium pt-1.5">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* ── CTA ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.85 }}
              >
                <a
                  href="https://tat.tekkzy.com/read-our-full-storyyy/"
                  className="mt-16 group inline-flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border-2 border-[#2C3A8C]/15 text-[#2C3A8C] hover:bg-[#2C3A8C] hover:border-[#2C3A8C] hover:text-white transition-all duration-500 hover:shadow-[0_10px_30px_-8px_rgba(44,58,140,0.35)]"
                >
                  Read Our Full Story
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-400" />
                </a>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
