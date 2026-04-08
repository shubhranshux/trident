import { useState, useEffect } from "react";
import { FadeInUp } from "../../utils/animations";
import {
  ArrowRight, GraduationCap, ClipboardCheck, FileText,
  CalendarCheck, CheckCircle2, Send, Phone, Clock, Landmark,
  ShieldCheck, BookOpen, Award, ChevronDown, Star, Users, Zap,
} from "lucide-react";

import imgHeroApply from "../../assets/indian_hero_graduation.png";
import imgLab from "../../assets/indian_engineering_lab.png";
import imgLife from "../../assets/indian_campus_quad.png";
import imgIndustry from "../../assets/indian_business_presentation.png";

/* ─── Data ─── */
const programs = [
  { name: "Computer Science & Engineering", degree: "B.Tech", duration: "4 Years", seats: 180, fee: "₹85,000 / Year", color: "#E5AA3E" },
  { name: "CSE (AI & Machine Learning)", degree: "B.Tech", duration: "4 Years", seats: 60, fee: "₹85,000 / Year", color: "#283B91" },
  { name: "Electronics & Telecom Engineering", degree: "B.Tech", duration: "4 Years", seats: 120, fee: "₹85,000 / Year", color: "#8B6E66" },
  { name: "Electrical & Electronics Engg.", degree: "B.Tech", duration: "4 Years", seats: 60, fee: "₹85,000 / Year", color: "#283B91" },
  { name: "Mechanical Engineering", degree: "B.Tech", duration: "4 Years", seats: 120, fee: "₹85,000 / Year", color: "#E5AA3E" },
  { name: "Civil Engineering", degree: "B.Tech", duration: "4 Years", seats: 60, fee: "₹85,000 / Year", color: "#8B6E66" },
  { name: "Computer Science & Engineering", degree: "M.Tech", duration: "2 Years", seats: 30, fee: "₹72,000 / Year", color: "#283B91" },
  { name: "Master of Business Administration", degree: "MBA", duration: "2 Years", seats: 60, fee: "₹1,06,000 / Year", color: "#E5AA3E" },
  { name: "Master of Computer Applications", degree: "MCA", duration: "2 Years", seats: 60, fee: "₹74,000 / Year", color: "#8B6E66" },
];

const steps = [
  { num: "01", title: "Appear for Entrance Exam", desc: "Write JEE Main (B.Tech), OJEE (PG/MBA/MCA), or GATE (M.Tech) based on your chosen program.", icon: <FileText size={24} />, accent: "#E5AA3E" },
  { num: "02", title: "Register for Counseling", desc: "After results, register on the OJEE / JoSAA counseling portal. Keep documents and rank card ready.", icon: <ClipboardCheck size={24} />, accent: "#283B91" },
  { num: "03", title: "Select Trident Academy", desc: "During choice filling, select Trident Academy of Technology as your preferred institution.", icon: <GraduationCap size={24} />, accent: "#8B6E66" },
  { num: "04", title: "Report to Campus", desc: "Download allotment letter, pay acceptance fee, and report to campus with original documents for verification.", icon: <CalendarCheck size={24} />, accent: "#E5AA3E" },
];

const eligibility = [
  { program: "B.Tech", requirement: "10+2 with PCM, minimum 45% aggregate. Valid JEE Main score required.", icon: <BookOpen size={20} /> },
  { program: "M.Tech", requirement: "B.Tech/B.E. with minimum 50% marks. Valid GATE or OJEE (PG) score.", icon: <Award size={20} /> },
  { program: "MBA", requirement: "Graduation (3 years) with minimum 50% aggregate. Valid OJEE/CAT/CMAT score.", icon: <Landmark size={20} /> },
  { program: "MCA", requirement: "Graduation with Mathematics at 10+2 or grad level. Minimum 50%. Valid OJEE score.", icon: <ShieldCheck size={20} /> },
];

const whyApply = [
  { stat: "NAAC 'A'", label: "Grade Accredited", accent: "#E5AA3E" },
  { stat: "320+", label: "Recruiting Companies", accent: "#283B91" },
  { stat: "₹48 LPA", label: "Highest Package", accent: "#8B6E66" },
  { stat: "94%", label: "Placement Rate", accent: "#E5AA3E" },
];

const campusHighlights = [
  { title: "World-Class Labs", desc: "GPU-powered AI research labs, IoT labs, and advanced engineering workshops.", image: imgLab, accent: "#E5AA3E" },
  { title: "Vibrant Campus Life", desc: "Cultural fests, sports competitions, clubs, and a thriving student community.", image: imgLife, accent: "#283B91" },
  { title: "Industry Connect", desc: "Regular industry visits, guest lectures, and internship programs with top companies.", image: imgIndustry, accent: "#8B6E66" },
];

const successStories = [
  { name: "Rahul Sharma", package: "₹12 LPA", company: "TCS Digital", year: "2024", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200", quote: "Trident's placement cell prepared me exceptionally well. The mock interviews and resume workshops were game-changers." },
  { name: "Sneha Das", package: "₹18 LPA", company: "Capgemini", year: "2024", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200", quote: "The industry exposure and hands-on project experience at Trident gave me a competitive edge in placements." },
  { name: "Vikram Patra", package: "₹15 LPA", company: "Infosys", year: "2023", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", quote: "From hackathons to campus drives, every experience at Trident shaped my career trajectory." },
];

const scholarships = [
  { title: "Merit Scholarship", target: "JEE Main Top Rankers", discount: "Up to 100% Tuition Fee Waiver", icon: <Award size={24}/>, accent: "#E5AA3E" },
  { title: "Women in Tech", target: "Female Candidates", discount: "Special 25% Grant", icon: <Users size={24}/>, accent: "#8B6E66" },
  { title: "EWS Grant", target: "Economically Weaker Section", discount: "50% Fee Assistance", icon: <Landmark size={24}/>, accent: "#283B91" },
];

/* ═══════════════════════════════════════════════════════ */
export default function ApplyPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", program: "", entranceExam: "", rank: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => { setIsVisible(true); window.scrollTo(0, 0); }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000); setFormData({ name: "", email: "", phone: "", program: "", entranceExam: "", rank: "", message: "" }); };

  const inputClass = (field) => {
    const base = "w-full bg-[#FAF9F7] border-2 text-[#212529] placeholder-[#3E3A36]/20 px-5 py-4 rounded-xl outline-none transition-all duration-300 font-medium text-[15px]";
    return base + (focusedField === field ? " border-[#8B6E66] shadow-[0_0_0_4px_rgba(139,110,102,0.08)] bg-white" : " border-transparent hover:border-[#EFE7DF]");
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ══════ HERO ══════ */}
      <section className="relative w-full min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-32 md:pt-40 pb-20 group">
        <div className="absolute top-0 right-0 w-[45%] h-full -skew-x-12 translate-x-32 z-0 hidden lg:block bg-[#FAF9F7]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EFE7DF]/20 skew-y-12 -translate-x-32 z-0" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%231A1817' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-left">
            <div className={`flex items-center gap-4 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mb-8`}>
               <div className="w-12 h-[2px] bg-[#8B6E66]"></div>
               <span className="text-[12px] font-black text-[#8B6E66] uppercase tracking-[.4em]">Admissions 2026–27</span>
            </div>
            <h1 className={`text-5xl md:text-7xl lg:text-[82px] font-black text-[#212529] leading-[1] tracking-tight mb-8 transition-all duration-1000 delay-150 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
              Begin Your <br /><span className="italic text-[#8B6E66]">Journey.</span>
            </h1>
            <p className={`text-[17px] md:text-lg text-[#5c5855] max-w-xl mb-12 leading-relaxed transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Join Odisha's premier technical institution. Applications are now open for B.Tech, M.Tech, MBA & MCA programs across all branches.
            </p>
            <div className={`flex flex-wrap items-center gap-4 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <a href="#apply-form" className="bg-[#212529] text-white px-10 py-5 rounded-2xl font-bold text-[13px] uppercase tracking-widest flex items-center gap-3 transition-all duration-300 hover:bg-[#8B6E66] hover:shadow-2xl hover:-translate-y-1">
                Start Application <ArrowRight size={18} />
              </a>
              <a href="/contact" className="text-[#212529] font-bold text-[13px] uppercase tracking-widest border-b-2 border-[#EFE7DF] hover:border-[#8B6E66] transition-colors pb-1">Contact Us</a>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`relative transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="absolute -inset-4 border-2 border-[#EFE7DF] -z-10 hidden lg:block" style={{ borderRadius: '8px 40px 8px 40px' }} />
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <img src={imgHeroApply} alt="Students at Trident" className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2000ms]" />
              <div className="absolute bottom-8 right-8 bg-[#283B91] text-white p-6 rounded-xl hidden md:block shadow-xl">
                <div className="text-3xl font-black mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>19+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years of Excellence</div>
              </div>
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-[#212529] px-4 py-2 rounded-lg hidden md:block shadow-md">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#8B6E66]">AICTE Approved</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-[10px] font-black text-[#8B6E66] uppercase tracking-[.3em]">Scroll</span>
          <ChevronDown size={20} className="text-[#8B6E66]" />
        </div>
      </section>

      {/* ══════ STATS BAND ══════ */}
      <section className="py-16 bg-[#FAF9F7] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {whyApply.map((s, i) => (
              <FadeInUp key={s.label} delay={100 + i * 100}>
                <div className="group relative bg-white border border-[#EFE7DF] rounded-2xl p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] hover:border-[#8B6E66]/20 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" style={{ backgroundColor: s.accent }} />
                  <div className="absolute top-0 right-0 w-0 h-0" style={{ borderLeft: "28px solid transparent", borderTop: `28px solid ${s.accent}20` }} />
                  <div className="text-4xl md:text-5xl font-black text-[#212529] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{s.stat}</div>
                  <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#8B6E66]/50">{s.label}</div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ HOW TO APPLY ══════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[45%] h-full -skew-x-12 translate-x-32 z-0 hidden lg:block bg-[#FAF9F7]" />
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <FadeInUp>
            <div className="mb-16 relative">
              <div className="absolute -left-10 -top-4 w-32 h-20 bg-[#EFE7DF] -skew-x-12 z-0 hidden md:block"></div>
              <h2 className="relative z-10 text-[40px] md:text-[56px] font-black text-[#212529] leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                How to<br /><span className="italic text-[#8B6E66]">Apply.</span>
              </h2>
              <p className="text-[#5c5855] text-[16px] md:text-[18px] font-medium leading-relaxed mt-6 max-w-2xl relative z-10">A simple 4-step process to secure your seat at Trident Academy of Technology.</p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <FadeInUp key={step.num} delay={150 + i * 120}>
                <div className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] overflow-hidden border border-[#EFE7DF] h-full">
                  <div className="absolute top-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" style={{ backgroundColor: step.accent }} />
                  <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#EFE7DF] group-hover:border-[#8B6E66]/20 transition-colors duration-500 rounded-tr-lg" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-[16px] transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: `${step.accent}12`, color: step.accent }}>{step.num}</div>
                    <div className="text-[#5c5855]/25 group-hover:text-[#8B6E66]/30 transition-colors">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-black text-[#212529] mb-3 group-hover:text-[#8B6E66] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                  <p className="text-[#5c5855] text-[14px] font-medium leading-relaxed">{step.desc}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CAMPUS HIGHLIGHTS — CINEMATIC ══════ */}
      <section className="py-24 bg-[#212529] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23FFFFFF' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <FadeInUp>
            <div className="mb-16 relative">
              <div className="absolute -left-10 -top-4 w-32 h-20 bg-[#3E3A36] -skew-x-12 z-0 hidden md:block"></div>
              <h2 className="relative z-10 text-[40px] md:text-[56px] font-black text-white leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why Choose <span className="italic text-[#E5AA3E]">Trident?</span>
              </h2>
              <p className="text-[#A59381] text-[16px] md:text-[18px] font-medium leading-relaxed mt-4 max-w-2xl relative z-10">
                Experience a campus designed for excellence — where innovation meets opportunity.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campusHighlights.map((item, i) => (
              <FadeInUp key={item.title} delay={100 + i * 120}>
                <div className="group relative h-[400px] md:h-[450px] overflow-hidden rounded-2xl cursor-pointer shadow-lg">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-transparent pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#8B6E66] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 z-20"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/10 group-hover:border-[#E5AA3E]/30 transition-colors duration-500 rounded-tr-lg z-20" />
                  <div className="relative z-20 p-8 flex flex-col justify-end h-full">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:-translate-y-2 transition-transform duration-500" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                    <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                      <p className="text-gray-300 text-[14px] leading-relaxed mb-4">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SCHOLARSHIPS ══════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[45%] h-full -skew-x-12 translate-x-32 z-0 hidden lg:block bg-[#FAF9F7]" />
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <FadeInUp>
            <div className="mb-16 relative">
              <div className="absolute -left-10 -top-4 w-32 h-20 bg-[#EFE7DF] -skew-x-12 z-0 hidden md:block"></div>
              <h2 className="relative z-10 text-[40px] md:text-[56px] font-black text-[#212529] leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Scholarships &<br /><span className="italic text-[#8B6E66]">Financial Aid.</span>
              </h2>
              <p className="text-[#5c5855] text-[16px] md:text-[18px] font-medium leading-relaxed mt-4 max-w-2xl relative z-10">
                We believe finances should never be a barrier to world-class education. Explore our diverse array of scholarship programs.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scholarships.map((s, i) => (
              <FadeInUp key={s.title} delay={100 + i * 150}>
                <div className="group relative bg-[#FAF9F7] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden border border-[#EFE7DF] h-full flex flex-col justify-center">
                  <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 transition-transform duration-700 group-hover:scale-150" style={{ backgroundColor: s.accent }}></div>
                  
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-[20px] mb-8 relative z-10 transition-all duration-500 group-hover:scale-110 shadow-lg" style={{ backgroundColor: s.accent, color: "white" }}>
                    {s.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-[#212529] mb-3 relative z-10" style={{ fontFamily: "'Playfair Display', serif" }}>{s.title}</h3>
                  <div className="text-[12px] font-black uppercase tracking-widest text-[#8B6E66] mb-6 relative z-10">{s.target}</div>
                  
                  <div className="mt-auto px-5 py-4 rounded-xl bg-white border border-[#EFE7DF] relative z-10 font-bold text-[#212529] text-[15px] group-hover:border-[#E5AA3E]/30 transition-colors shadow-sm">
                    {s.discount}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ ELIGIBILITY ══════ */}

      <section className="relative py-20 overflow-hidden bg-[#F0BB51]">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#E5AA3E] transform origin-top-right -skew-x-12 opacity-50 z-0"></div>
        <div className="absolute top-[20%] right-[15%] w-20 h-20 border-2 border-[#212529]/10 rotate-45 z-0 hidden md:block" />
        <div className="absolute bottom-[10%] left-[8%] w-12 h-12 bg-[#D99A2B]/30 rounded-full z-0 hidden md:block" />
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
            <div className="w-full lg:w-1/3 relative">
              <div className="absolute -left-6 -top-6 w-32 h-32 bg-[#D99A2B] -rotate-12 z-0 hidden md:block opacity-60"></div>
              <h2 className="relative z-10 text-[40px] md:text-[56px] font-black text-[#212529] leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Eligibility<br />Criteria</h2>
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5">
              {eligibility.map((e, i) => (
                <FadeInUp key={e.program} delay={100 + i * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E5AA3E]/10 group hover:-translate-y-1 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#283B91]/8 text-[#283B91] flex items-center justify-center group-hover:bg-[#283B91]/15 transition-colors">{e.icon}</div>
                      <h3 className="text-lg font-black text-[#212529]" style={{ fontFamily: "'Playfair Display', serif" }}>{e.program}</h3>
                    </div>
                    <p className="text-[#5c5855] text-[14px] font-medium leading-relaxed">{e.requirement}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ SUCCESS STORIES ══════ */}
      <section className="py-24 bg-[#FAF9F7] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-[#EFE7DF]/30 -skew-x-12 -translate-x-20 z-0 hidden lg:block"></div>
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <FadeInUp>
            <div className="mb-16 relative">
              <div className="absolute -left-10 -top-4 w-32 h-20 bg-[#EFE7DF] -skew-x-12 z-0 hidden md:block"></div>
              <h2 className="relative z-10 text-[40px] md:text-[56px] font-black text-[#212529] leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Success<br /><span className="italic text-[#8B6E66]">Stories.</span>
              </h2>
              <p className="text-[#5c5855] text-[16px] md:text-[18px] font-medium leading-relaxed mt-4 max-w-2xl relative z-10">
                Our graduates are making an impact at leading companies worldwide.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((s, i) => (
              <FadeInUp key={s.name} delay={100 + i * 120}>
                <div className="group bg-white rounded-2xl p-8 border border-[#EFE7DF] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-[#E5AA3E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#EFE7DF] group-hover:border-[#E5AA3E]/20 transition-colors duration-500 rounded-tr-lg"></div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, k) => <Star key={k} size={12} className="text-[#E5AA3E]" fill="#E5AA3E" />)}
                  </div>
                  <p className="text-[#5c5855] text-[14px] leading-relaxed mb-6 italic flex-grow">"{s.quote}"</p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-[#EFE7DF]">
                    <img src={s.image} alt={s.name} className="w-11 h-11 rounded-full object-cover border-2 border-[#EFE7DF]" />
                    <div className="flex-1">
                      <div className="text-[#212529] font-bold text-[13px]">{s.name}</div>
                      <div className="text-[#8B6E66] text-[10px] font-bold uppercase tracking-widest">{s.company} · {s.year}</div>
                    </div>
                    <div className="bg-[#283B91] text-white px-3 py-1.5 rounded-lg text-[12px] font-black">{s.package}</div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ APPLICATION FORM ══════ */}
      <section id="apply-form" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[45%] h-full -skew-x-12 translate-x-32 z-0 hidden lg:block bg-[#FAF9F7]" />
        <div className="max-w-4xl mx-auto px-6 xl:px-12 relative z-10">
          <FadeInUp>
            <div className="mb-12 relative">
              <div className="absolute -left-10 -top-4 w-32 h-20 bg-[#EFE7DF] -skew-x-12 z-0 hidden md:block"></div>
              <h2 className="relative z-10 text-[40px] md:text-[56px] font-black text-[#212529] leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Apply<br /><span className="italic text-[#8B6E66]">Now.</span>
              </h2>
              <p className="text-[#5c5855] text-[16px] font-medium leading-relaxed mt-4 relative z-10">Fill in your details and our admissions team will guide you through the next steps.</p>
            </div>
          </FadeInUp>

          <FadeInUp delay={150}>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] border border-[#EFE7DF] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#E5AA3E] via-[#8B6E66] to-[#283B91] rounded-l-2xl" />
              <div className="absolute top-4 right-4 w-14 h-14 border-t-2 border-r-2 border-[#EFE7DF] hidden md:block rounded-tr-xl" />
              <div className="relative z-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#8B6E66]/10 flex items-center justify-center mb-6"><CheckCircle2 size={42} className="text-[#8B6E66]" /></div>
                    <h4 className="text-2xl font-black text-[#212529] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Application Received!</h4>
                    <p className="text-[#5c5855] text-sm font-medium max-w-sm">Thank you for applying. Our admissions team will contact you within 48 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div><label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/60 mb-2">Full Name <span className="text-[#E5AA3E]">*</span></label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} className={inputClass("name")} placeholder="Enter your full name" /></div>
                      <div><label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/60 mb-2">Email Address <span className="text-[#E5AA3E]">*</span></label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} className={inputClass("email")} placeholder="your@email.com" /></div>
                      <div><label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/60 mb-2">Phone Number <span className="text-[#E5AA3E]">*</span></label>
                        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)} className={inputClass("phone")} placeholder="+91 98XXX XXXXX" /></div>
                      <div><label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/60 mb-2">Program <span className="text-[#E5AA3E]">*</span></label>
                        <select name="program" required value={formData.program} onChange={handleChange} onFocus={() => setFocusedField("program")} onBlur={() => setFocusedField(null)} className={inputClass("program") + " appearance-none cursor-pointer"} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(139,110,102,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
                          <option value="">Select a program</option>
                          {programs.map((p) => (<option key={p.name + p.degree} value={`${p.degree} - ${p.name}`}>{p.degree} — {p.name}</option>))}
                        </select></div>
                      <div><label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/60 mb-2">Entrance Exam</label>
                        <select name="entranceExam" value={formData.entranceExam} onChange={handleChange} onFocus={() => setFocusedField("entranceExam")} onBlur={() => setFocusedField(null)} className={inputClass("entranceExam") + " appearance-none cursor-pointer"} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(139,110,102,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
                          <option value="">Select exam</option><option value="JEE Main">JEE Main</option><option value="OJEE">OJEE</option><option value="GATE">GATE</option><option value="CAT">CAT</option><option value="CMAT">CMAT</option><option value="Other">Other</option>
                        </select></div>
                      <div><label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/60 mb-2">Rank / Score</label>
                        <input type="text" name="rank" value={formData.rank} onChange={handleChange} onFocus={() => setFocusedField("rank")} onBlur={() => setFocusedField(null)} className={inputClass("rank")} placeholder="e.g. 45000" /></div>
                    </div>
                    <div><label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/60 mb-2">Additional Message</label>
                      <textarea name="message" rows={4} value={formData.message} onChange={handleChange} onFocus={() => setFocusedField("message")} onBlur={() => setFocusedField(null)} className={inputClass("message") + " resize-none"} placeholder="Any additional questions or information..." /></div>
                    <div className="flex items-center justify-between pt-3">
                      <p className="text-[#8B6E66]/30 text-[10px] font-bold uppercase tracking-widest hidden sm:block"><span className="text-[#E5AA3E]">*</span> Required fields</p>
                      <button type="submit" className="group inline-flex items-center gap-3 bg-[#212529] hover:bg-[#8B6E66] text-white px-10 py-4 rounded-xl font-bold text-[13px] uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 shadow-lg">
                        Submit Application <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-3 text-[#5c5855] text-[13px] font-bold">
                <Phone size={16} className="text-[#8B6E66]" />
                <span>Helpline: <a href="tel:+919861191195" className="text-[#283B91] hover:underline">+91 98611 91195</a>, <a href="tel:+917008443255" className="text-[#283B91] hover:underline">+91 70084 43255</a></span>
              </div>
              <span className="text-[#EFE7DF] hidden sm:block">|</span>
              <div className="flex items-center gap-3 text-[#5c5855] text-[13px] font-bold">
                <Clock size={16} className="text-[#E5AA3E]" /> <span>Mon – Sat: 9 AM – 5 PM</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="relative overflow-hidden bg-[#1A1817]">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23FFFFFF' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 py-20 relative z-10">
          <FadeInUp>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="text-center sm:text-left">
                <h4 className="text-3xl md:text-4xl font-black text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Have <span className="italic text-[#E5AA3E]">questions?</span></h4>
                <p className="text-[#A59381] text-sm font-medium max-w-lg">Our admissions counselors are ready to help you through every step.</p>
              </div>
              <a href="/contact" className="group inline-flex items-center gap-3 bg-[#E5AA3E] hover:bg-[#c99535] text-[#1A1817] px-10 py-5 rounded-2xl font-black text-[12px] uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all duration-500 whitespace-nowrap">
                Contact Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
