import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp, SlideIn, AmbientParticles } from "../utils/animations";
import { GSAPCounter, ScrambleText, Tilt3D, AnimatedGradient, ScrollReveal, GlowTrail } from "../utils/advanced-animations";
import { TrendingUp, Building2, Award, Users, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { logos as CompanyLogos } from "../data/companyLogos";

/* ─── Data ──────────────────────────────────────────────────────────── */
const stats = [
  { icon: <TrendingUp size={28} />, value: 7.5,   label: "Highest Package", color: "#E8BD63", prefix: "₹", suffix: " LPA", decimals: 1 },
  { icon: <Award size={28} />,       value: 4.5,  label: "Average Package", color: "#C41E3A", prefix: "₹", suffix: " LPA", decimals: 1 },
  { icon: <Building2 size={28} />,   value: 120,      label: "Companies Visited", color: "#2E6DB4", prefix: "", suffix: "+", decimals: 0 },
  { icon: <Users size={28} />,       value: 94,        label: "Placement Rate", color: "#3EA644", prefix: "", suffix: "%", decimals: 0 },
];

const domains = {
  giants: {
    label: "Tech Giants & Product",
    companies: ["Amazon", "Microsoft", "Google", "Goldman Sachs", "JP Morgan", "Morgan Stanley", "Atlassian", "Oracle", "SAP", "Flipkart", "PhonePe", "Zepto", "Paytm", "Persistent"]
  },
  consulting: {
    label: "Consulting & Services",
    companies: ["TCS", "Infosys", "Wipro", "HCL", "Capgemini", "Accenture", "Cognizant", "Tech Mahindra", "IBM", "Deloitte", "EY India", "KPMG India", "PwC India"]
  },
  core: {
    label: "Core & Infrastructure",
    companies: ["Siemens", "Schneider Electric", "ABB India", "Bosch India", "Tata Power", "JSW Steel", "L&T Construction", "Godrej & Boyce", "HDFC Bank", "ICICI Bank", "Axis Bank"]
  }
};

const dummyPlacements = [
  { name: "Aarav Sharma", company: "TCS", package: "7.5 LPA", role: "Software Engineer", img: "/students/student_male_1.png" },
  { name: "Priya Patel", company: "Infosys", package: "8.0 LPA", role: "System Analyst", img: "/students/student_female_1.png" },
  { name: "Rahul Kumar", company: "Wipro", package: "6.5 LPA", role: "Project Engineer", img: "/students/student_male_2.png" },
  { name: "Neha Singh", company: "Cognizant", package: "7.0 LPA", role: "Programmer Analyst", img: "/students/student_female_2.png" },
  { name: "Rohan Gupta", company: "Accenture", package: "8.5 LPA", role: "Application Dev", img: "/students/student_male_3.png" },
  { name: "Aditi Desai", company: "Capgemini", package: "7.5 LPA", role: "Software Associate", img: "/students/student_female_3.png" },
  { name: "Karan Verma", company: "Tech Mahindra", package: "6.0 LPA", role: "Network Engineer", img: "/students/student_male_4.png" },
  { name: "Sneha Roy", company: "IBM", package: "8.0 LPA", role: "Cloud Consultant", img: "/students/student_female_4.png" }
];

const getBrandStyle = (name) => {
  const styles = {
    // Giants
    "Amazon": { border: "hover:border-[#FF9900]", glow: "hover:shadow-[#FF9900]/40", text: "group-hover:text-[#FF9900]" },
    "Microsoft": { border: "hover:border-[#F25022]", glow: "hover:shadow-[#00A4EF]/40", text: "group-hover:text-[#00A4EF]" },
    "Google": { border: "hover:border-[#EA4335]", glow: "hover:shadow-[#4285F4]/40", text: "group-hover:text-[#4285F4]" },
    "Goldman Sachs": { border: "hover:border-[#C39B62]", glow: "hover:shadow-[#C39B62]/40", text: "group-hover:text-[#C39B62]" },
    "JP Morgan": { border: "hover:border-[#003087]", glow: "hover:shadow-[#003087]/40", text: "group-hover:text-[#003087]" },
    "Morgan Stanley": { border: "hover:border-[#1A5C9A]", glow: "hover:shadow-[#1A5C9A]/40", text: "group-hover:text-[#1A5C9A]" },
    "Atlassian": { border: "hover:border-[#2684FF]", glow: "hover:shadow-[#0052CC]/40", text: "group-hover:text-[#0052CC]" },
    "Oracle": { border: "hover:border-[#F80000]", glow: "hover:shadow-[#F80000]/40", text: "group-hover:text-[#F80000]" },
    "SAP": { border: "hover:border-[#00A3E0]", glow: "hover:shadow-[#00A3E0]/40", text: "group-hover:text-[#00A3E0]" },
    "Flipkart": { border: "hover:border-[#2874F0]", glow: "hover:shadow-[#FFE11B]/40", text: "group-hover:text-[#2874F0]" },
    "PhonePe": { border: "hover:border-[#5f259f]", glow: "hover:shadow-[#5f259f]/40", text: "group-hover:text-[#5f259f]" },
    "Zepto": { border: "hover:border-[#5c14ab]", glow: "hover:shadow-[#FF6B35]/40", text: "group-hover:text-[#5c14ab]" },
    "Paytm": { border: "hover:border-[#00b9f1]", glow: "hover:shadow-[#002970]/40", text: "group-hover:text-[#00b9f1]" },
    "Persistent": { border: "hover:border-[#FF5E00]", glow: "hover:shadow-[#1B4FBF]/40", text: "group-hover:text-[#FF5E00]" },

    // Consulting
    "TCS": { border: "hover:border-[#003366]", glow: "hover:shadow-[#003366]/40", text: "group-hover:text-[#003366]" },
    "Infosys": { border: "hover:border-[#004B8D]", glow: "hover:shadow-[#FA6804]/40", text: "group-hover:text-[#004B8D]" },
    "Wipro": { border: "hover:border-[#7B2D8B]", glow: "hover:shadow-[#7B2D8B]/40", text: "group-hover:text-[#7B2D8B]" },
    "HCL": { border: "hover:border-[#0077B5]", glow: "hover:shadow-[#0077B5]/40", text: "group-hover:text-[#0077B5]" },
    "Capgemini": { border: "hover:border-[#0070AD]", glow: "hover:shadow-[#0070AD]/40", text: "group-hover:text-[#0070AD]" },
    "Accenture": { border: "hover:border-[#A100FF]", glow: "hover:shadow-[#A100FF]/40", text: "group-hover:text-[#A100FF]" },
    "Cognizant": { border: "hover:border-[#0033A0]", glow: "hover:shadow-[#00B5E2]/40", text: "group-hover:text-[#0033A0]" },
    "Tech Mahindra": { border: "hover:border-[#C8102E]", glow: "hover:shadow-[#C8102E]/40", text: "group-hover:text-[#C8102E]" },
    "IBM": { border: "hover:border-[#1F70C1]", glow: "hover:shadow-[#1F70C1]/40", text: "group-hover:text-[#1F70C1]" },
    "Deloitte": { border: "hover:border-[#86BC25]", glow: "hover:shadow-[#86BC25]/40", text: "group-hover:text-[#86BC25]" },
    "EY India": { border: "hover:border-[#FFE600]", glow: "hover:shadow-[#FFE600]/40", text: "group-hover:text-[#FFE600]" },
    "KPMG India": { border: "hover:border-[#00338D]", glow: "hover:shadow-[#00338D]/40", text: "group-hover:text-[#00338D]" },
    "PwC India": { border: "hover:border-[#E0301E]", glow: "hover:shadow-[#F37021]/40", text: "group-hover:text-[#E0301E]" },

    // Core
    "Siemens": { border: "hover:border-[#00828A]", glow: "hover:shadow-[#00828A]/40", text: "group-hover:text-[#00828A]" },
    "Schneider Electric": { border: "hover:border-[#3DCD58]", glow: "hover:shadow-[#3DCD58]/40", text: "group-hover:text-[#3DCD58]" },
    "ABB India": { border: "hover:border-[#FF0000]", glow: "hover:shadow-[#FF0000]/40", text: "group-hover:text-[#FF0000]" },
    "Bosch India": { border: "hover:border-[#E30613]", glow: "hover:shadow-[#005691]/40", text: "group-hover:text-[#E30613]" },
    "Tata Power": { border: "hover:border-[#00A4EF]", glow: "hover:shadow-[#00A4EF]/40", text: "group-hover:text-[#00A4EF]" },
    "JSW Steel": { border: "hover:border-[#002D62]", glow: "hover:shadow-[#FF0000]/40", text: "group-hover:text-[#002D62]" },
    "L&T Construction": { border: "hover:border-[#FDB913]", glow: "hover:shadow-[#1A1A1A]/40", text: "group-hover:text-[#FDB913]" },
    "Godrej & Boyce": { border: "hover:border-[#C41E3A]", glow: "hover:shadow-[#C41E3A]/40", text: "group-hover:text-[#C41E3A]" },
    "HDFC Bank": { border: "hover:border-[#004C8F]", glow: "hover:shadow-[#FF0000]/40", text: "group-hover:text-[#004C8F]" },
    "ICICI Bank": { border: "hover:border-[#F37021]", glow: "hover:shadow-[#7A2500]/40", text: "group-hover:text-[#F37021]" },
    "Axis Bank": { border: "hover:border-[#841439]", glow: "hover:shadow-[#841439]/40", text: "group-hover:text-[#841439]" }
  };
  return styles[name] || { border: "hover:border-[#E8BD63]", glow: "hover:shadow-[#E8BD63]/30", text: "group-hover:text-[#E8BD63]" };
};

function RecruiterCircle({ name }) {
  const Logo = CompanyLogos[name];
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const brand = getBrandStyle(name);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col items-center gap-3"
    >
      {/* Circle Badge with elegant white backdrop to display crisp full-color branding logos */}
      <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center bg-white border border-white/20 transition-all duration-500 hover:scale-110 hover:shadow-2xl ${brand.border} ${brand.glow} shadow-md relative overflow-hidden`}>
        {/* Subtle hover soft light overlay */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
        
        {/* Logo or Initials */}
        <div className="relative z-10 transform transition-all duration-500 group-hover:scale-105 flex items-center justify-center w-14 h-14 md:w-16 md:h-16">
          {Logo ? (
            <div className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:object-contain">
              <Logo size={44} />
            </div>
          ) : (
            <span className="text-base font-bold tracking-wider text-[#1A2660]/75">{initials}</span>
          )}
        </div>
      </div>
      
      {/* Label with dynamic corporate brand color matching on hover */}
      <span className={`text-white/60 text-[10px] md:text-xs font-bold tracking-widest uppercase text-center transition-all duration-300 w-24 truncate ${brand.text}`}>
        {name}
      </span>
    </motion.div>
  );
}

export default function Placements() {
  const [activeTab, setActiveTab] = useState("giants");
  const scrollRef = useRef(null);

  // Horizontal carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerView = 3;
  const totalSlides = Math.ceil(dummyPlacements.length / cardsPerView);
  const goNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const goPrev = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const autoSlide = setInterval(goNext, 4000);
    return () => clearInterval(autoSlide);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 344, behavior: 'smooth' });
        }
      }
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const scrollLeftBtn = () => scrollRef.current?.scrollBy({ left: -344, behavior: 'smooth' });
  const scrollRightBtn = () => scrollRef.current?.scrollBy({ left: 344, behavior: 'smooth' });

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#1A2660]">
      {/* Geometric Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-[#E8BD63]/5 rounded-full blur-[120px] hidden md:block" />
        <div className="absolute top-[25%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#2C3A8C]/20 blur-[150px] hidden md:block" />
        <div className="absolute bottom-[15%] right-[5%] w-80 h-80 rounded-full bg-[#C41E3A]/5 blur-[100px] hidden md:block" />
        <div className="absolute top-[50%] right-[30%] w-32 h-32 rounded-full bg-white/[0.02] blur-[50px] hidden lg:block" />
        <AnimatedGradient colors={["#E8BD63", "#C41E3A", "#2C3A8C"]} opacity={0.03} speed={25} />
        <AmbientParticles count={10} color="rgba(255,255,255,0.05)" section={true} />
      </div>

      {/* Top Accent Stripe */}
      <div className="absolute top-0 left-0 right-0 flex items-center gap-0">
        <div className="h-[3px] flex-1 bg-[#E8BD63]" />
        <div className="h-[3px] flex-1 bg-[#C41E3A]" />
        <div className="h-[3px] flex-1 bg-[#2C3A8C]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <SlideIn direction="right">
            <div className="inline-flex items-center gap-3 border border-white/15 text-white/70 text-[11px] font-medium uppercase tracking-[0.35em] px-8 py-3 rounded-full mb-10 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#3EA644]" style={{ animation: "pulse 2s ease-in-out infinite" }} />
              Placements 2025–26
            </div>
          </SlideIn>
          <FadeInUp delay={200}>
            <h2 className="serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]">
              Our graduates are everywhere{" "}
              <br className="hidden md:block" />
              <span className="italic text-[#E8BD63] font-serif font-light">
                that matters.
              </span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={400}>
            <p className="text-white/50 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Over 120+ industry leaders trust Trident Academy of Technology to source top-tier engineering and management talent.
            </p>
          </FadeInUp>
        </div>

        {/* Premium Borderless Metrics Dashboard */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mb-16 py-6 lg:py-10 border-y border-white/10">
          {stats.map((s, i) => (
            <FadeInUp key={s.label} delay={200 + i * 100} className="w-full sm:w-1/2 lg:w-1/4 flex justify-center">
              <div className="group relative text-center px-4 py-8 w-full border-b sm:border-b-0 sm:border-r border-white/10 [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r last:border-b-0 lg:last:border-r-0">
                {/* Subtle colored accent */}
                <div className="mx-auto w-8 h-1 mb-6 rounded-full transition-all duration-500 group-hover:w-16 group-hover:bg-opacity-100 bg-opacity-60" style={{ backgroundColor: s.color }} />
                
                <div className="mb-5 flex justify-center text-white/30 group-hover:text-white/80 group-hover:-translate-y-1 transform transition-all duration-500">{s.icon}</div>
                
                <div className="serif text-4xl md:text-5xl font-bold mb-3 text-white tracking-tight">
                  <GSAPCounter end={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/50">{s.label}</div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Connecting Line Divider */}
        <div className="flex items-center gap-0 mb-20 mt-2">
          <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent to-white/15" />
          <div className="h-[2px] w-24 bg-[#E8BD63]" />
          <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent to-white/15" />
        </div>

        {/* Dashboard Constellation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-24">
          
          {/* LEFT: Domain Recruiter Constellation (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#E8BD63] block mb-3">
                Industry Alignments
              </span>
              <h3 className="serif text-3xl font-medium text-white mb-6">
                Recruiter <span className="italic font-light text-[#E8BD63] font-serif">Networks.</span>
              </h3>

              {/* Central Domain Switcher Selector Tab */}
              <div className="flex flex-wrap p-1 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 max-w-full md:max-w-max gap-1">
                {Object.entries(domains).map(([key, domain]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`py-3 px-6 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 whitespace-nowrap ${
                      activeTab === key
                        ? "bg-[#E8BD63] text-[#1A2660] shadow-lg scale-105"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {domain.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Glowing Recruiter Bubble Network */}
            <div className="flex-1 min-h-[380px] flex items-center justify-center lg:pr-8">
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center w-full">
                <AnimatePresence mode="wait">
                  {domains[activeTab].companies.map((name) => (
                    <RecruiterCircle key={name} name={name} />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* RIGHT: SVG Chart Dashboard (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col justify-between h-full lg:pl-10 lg:border-l border-white/10 pt-8 lg:pt-0">
            {/* Chart Header */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8BD63] block mb-1">
                Trend Analysis
              </span>
              <h4 className="serif text-2xl font-bold text-white">Year-wise Performance</h4>
              <p className="text-white/50 text-xs font-medium uppercase tracking-wider mt-1">Offers and Recruiter Trends</p>
            </div>

            {/* SVG Graph */}
            <div className="w-full my-8">
              <svg viewBox="0 0 650 350" className="w-full h-auto font-sans" style={{ overflow: 'visible' }}>
                <defs>
                  <linearGradient id="offersGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E57345" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#E57345" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="recruitersGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2E6DB4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2E6DB4" stopOpacity="0.0" />
                  </linearGradient>
                  <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.1" />
                  </filter>
                  <filter id="glowOffers" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="glowRecruiters" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Y-axis Grid Lines & Labels */}
                {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((val) => {
                  const y = 310 - (val / 900) * 270;
                  return (
                    <g key={val}>
                      <line x1="35" y1={y} x2="630" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      <text x="25" y={y + 4} fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="end" fontWeight="700">{val}</text>
                    </g>
                  );
                })}

                {/* X-axis Labels */}
                {["2020-21", "2021-22", "2022-23", "2023-24", "2024-25"].map((year, i) => {
                  const x = 60 + (540 / 4) * i;
                  return (
                    <text key={year} x={x} y="335" fill="rgba(255,255,255,0.6)" fontSize="13" textAnchor="middle" fontWeight="bold">
                      {year}
                    </text>
                  );
                })}

                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes drawGraphLine {
                    to { stroke-dashoffset: 0; }
                  }
                  @keyframes fadePoint {
                    to { opacity: 1; transform: translateY(0); }
                  }
                  .svg-path-anim {
                    stroke-dasharray: 2000;
                    stroke-dashoffset: 2000;
                    animation: drawGraphLine 2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
                  }
                  .svg-point-anim {
                    opacity: 0;
                    transform: translateY(10px);
                    animation: fadePoint 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
                  }
                `}} />

                {/* Offers Area Gradient */}
                <path
                  className="svg-path-anim"
                  d="M 60,169.6 L 195,61.9 L 330,139.6 L 465,112.6 L 600,108.4 L 600,310 L 60,310 Z"
                  fill="url(#offersGrad)"
                  style={{ animationDelay: '0.1s' }}
                />

                {/* Recruiters Area Gradient */}
                <path
                  className="svg-path-anim"
                  d="M 60,276.4 L 195,230.5 L 330,273.4 L 465,272.8 L 600,274.0 L 600,310 L 60,310 Z"
                  fill="url(#recruitersGrad)"
                  style={{ animationDelay: '0.3s' }}
                />

                {/* Offers Line (Orange) */}
                <path
                  className="svg-path-anim"
                  d="M 60,169.6 L 195,61.9 L 330,139.6 L 465,112.6 L 600,108.4"
                  fill="none"
                  stroke="#E57345"
                  strokeWidth="4"
                  filter="url(#shadow)"
                  style={{ animationDelay: '0.2s' }}
                />

                {/* Recruiters Line (Blue) */}
                <path
                  className="svg-path-anim"
                  d="M 60,276.4 L 195,230.5 L 330,273.4 L 465,272.8 L 600,274.0"
                  fill="none"
                  stroke="#2E6DB4"
                  strokeWidth="4"
                  filter="url(#shadow)"
                  style={{ animationDelay: '0.4s' }}
                />

                {/* Offers Data Points */}
                {[
                  { x: 60, y: 169.6, val: 468 },
                  { x: 195, y: 61.9, val: 827 },
                  { x: 330, y: 139.6, val: 568 },
                  { x: 465, y: 112.6, val: 658 },
                  { x: 600, y: 108.4, val: 672 },
                ].map((pt, i) => (
                  <g key={`offer-${i}`} className="svg-point-anim" style={{ animationDelay: `${0.6 + i * 0.2}s` }}>
                    <circle cx={pt.x} cy={pt.y} r="6" fill="#E57345" stroke="#1A2660" strokeWidth="2.5" filter="url(#shadow)" />
                    <text x={pt.x} y={pt.y - 14} fill="#ffffff" fontSize="12" textAnchor="middle" fontWeight="800">
                      {pt.val}
                    </text>
                  </g>
                ))}

                {/* Recruiters Data Points */}
                {[
                  { x: 60, y: 276.4, val: 112 },
                  { x: 195, y: 230.5, val: 265 },
                  { x: 330, y: 273.4, val: 122 },
                  { x: 465, y: 272.8, val: 124 },
                  { x: 600, y: 274.0, val: 120 },
                ].map((pt, i) => (
                  <g key={`recruiter-${i}`} className="svg-point-anim" style={{ animationDelay: `${0.6 + i * 0.2}s` }}>
                    <circle cx={pt.x} cy={pt.y} r="6" fill="#2E6DB4" stroke="#1A2660" strokeWidth="2.5" filter="url(#shadow)" />
                    <text x={pt.x} y={pt.y - 14} fill="#ffffff" fontSize="12" textAnchor="middle" fontWeight="800">
                      {pt.val}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-8 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-1.5 rounded-full" style={{ background: '#2E6DB4' }} />
                <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Recruiters</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-1.5 rounded-full" style={{ background: '#E57345' }} />
                <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Offers Secured</span>
              </div>
            </div>
          </div>

        </div>

        {/* Student Placements — Infinite Loop Carousel */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-cards {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .cards-track {
            will-change: transform;
            backface-visibility: hidden;
          }
          .cards-carousel:hover .cards-track {
            animation-play-state: paused !important;
          }
        `}} />

        <div className="text-center mb-12">
          <FadeInUp delay={600}>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#E8BD63] to-transparent mx-auto mb-5" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#E8BD63]">
              Where Our Students Work
            </span>
            <h3 className="serif text-3xl md:text-4xl font-bold text-white mt-4">
              Success <span className="italic font-light text-[#E8BD63] font-serif">Stories.</span>
            </h3>
          </FadeInUp>
        </div>

        <FadeInUp delay={650}>
          <div className="relative cards-carousel">
            {/* Left & right gradient masks */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1A2660] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1A2660] to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              <div
                className="cards-track flex gap-6"
                style={{ animation: 'scroll-cards 30s linear infinite', width: 'max-content' }}
              >
                {[...dummyPlacements, ...dummyPlacements].map((student, i) => (
                  <div key={i} className="group relative flex-shrink-0 w-[300px]">
                    <div className="relative h-[380px] rounded-[1.5rem] overflow-hidden shadow-2xl">
                      {/* Full Background Image */}
                      <img
                        src={student.img}
                        alt={student.name}
                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2660] via-[#1A2660]/70 to-transparent opacity-90" />

                      {/* Card Content */}
                      <div className="absolute inset-0 p-5 flex flex-col justify-end">
                        <div className="mb-3">
                          <h3 className="text-white font-bold text-lg tracking-wide leading-tight">{student.name}</h3>
                          <p className="text-[#E8BD63] text-[10px] font-medium uppercase tracking-wider mt-1">{student.role}</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex justify-between items-center border border-white/20">
                          <div>
                            <p className="text-[9px] text-white/60 uppercase font-bold tracking-[0.15em] mb-0.5">Company</p>
                            <p className="text-white font-medium text-xs tracking-wide">{student.company}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-[9px] text-white/60 uppercase font-bold tracking-[0.15em] mb-0.5">Package</p>
                            <div className="bg-[#E8BD63] text-[#1A2660] px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest shadow-lg">
                              {student.package}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Border overlay */}
                      <div className="absolute inset-0 border-[2px] border-white/10 rounded-[1.5rem] pointer-events-none group-hover:border-white/30 transition-colors duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* CTA */}
        <FadeInUp delay={800}>
          <div className="text-center mt-16">
            <a href="https://tat.tekkzy.com/placement-report/" className="group inline-flex items-center gap-3 bg-[#E8BD63] text-[#1A2660] px-10 py-4 rounded-full font-medium text-sm uppercase tracking-widest shadow-xl hover:bg-[#F0D080] hover:-translate-y-1 transition-all duration-500">
              View Full Placement Report
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeInUp>

      </div>

      {/* Bottom Accent Stripe */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-0">
        <div className="h-[3px] flex-1 bg-[#2C3A8C]" />
        <div className="h-[3px] flex-1 bg-[#C41E3A]" />
        <div className="h-[3px] flex-1 bg-[#E8BD63]" />
      </div>
    </section>
  );
}
