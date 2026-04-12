import { FadeInUp, SlideIn } from "../utils/animations";
import { Calendar, MapPin, Clock, ArrowRight, GraduationCap, Users } from "lucide-react";

/* ─── vibrant accent palette – every department gets its own colour ─── */
const ACCENTS = [
  { btn: "#6C5CE7", btnHover: "#5A4BD1", pill: "#6C5CE7", pillBg: "rgba(108,92,231,0.12)", glow: "rgba(108,92,231,0.25)" },  // Vivid Purple
  { btn: "#00B894", btnHover: "#00A07D", pill: "#00B894", pillBg: "rgba(0,184,148,0.12)",  glow: "rgba(0,184,148,0.25)" },   // Emerald
  { btn: "#E17055", btnHover: "#D15F45", pill: "#E17055", pillBg: "rgba(225,112,85,0.12)",  glow: "rgba(225,112,85,0.25)" },  // Coral
  { btn: "#0984E3", btnHover: "#0874C9", pill: "#0984E3", pillBg: "rgba(9,132,227,0.12)",   glow: "rgba(9,132,227,0.25)" },   // Ocean Blue
  { btn: "#F39C12", btnHover: "#E08E0B", pill: "#8B6914", pillBg: "rgba(243,156,18,0.15)",  glow: "rgba(243,156,18,0.25)" },  // Amber
  { btn: "#E84393", btnHover: "#D63384", pill: "#E84393", pillBg: "rgba(232,67,147,0.12)",  glow: "rgba(232,67,147,0.25)" },  // Magenta
  { btn: "#00CEC9", btnHover: "#00B5B0", pill: "#00897B", pillBg: "rgba(0,206,201,0.12)",   glow: "rgba(0,206,201,0.25)" },   // Teal
  { btn: "#636E72", btnHover: "#535C60", pill: "#636E72", pillBg: "rgba(99,110,114,0.12)",   glow: "rgba(99,110,114,0.25)" },  // Slate
  { btn: "#D4A017", btnHover: "#BF8F0F", pill: "#8B6914", pillBg: "rgba(253,203,110,0.18)", glow: "rgba(253,203,110,0.30)" }, // Gold
  { btn: "#7C4DFF", btnHover: "#6B3FEE", pill: "#7C4DFF", pillBg: "rgba(124,77,255,0.12)",  glow: "rgba(124,77,255,0.25)" },  // Deep Violet
  { btn: "#26A69A", btnHover: "#1D8C82", pill: "#26A69A", pillBg: "rgba(38,166,154,0.12)",  glow: "rgba(38,166,154,0.25)" },  // Jade
  { btn: "#2C3A8C", btnHover: "#1F2B6D", pill: "#2C3A8C", pillBg: "rgba(44,58,140,0.12)",   glow: "rgba(44,58,140,0.25)" },  // Navy (CTA)
];

// Department data with realistic images and accurate metadata
const DEPARTMENTS = [
  {
    name: "Computer Science & Engg.",
    category: "B.Tech · M.Tech · Ph.D",
    desc: "Focusing on advanced algorithms, distributed computing, and cutting-edge software paradigms.",
    est: "2005", campus: "Trident Main Campus", duration: "4 Years", seats: 438,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Artificial Intelligence & ML",
    category: "B.Tech · M.Tech",
    desc: "Exploring neural networks, deep learning models, and cognitive automation systems.",
    est: "2020", campus: "Adv. Computing Block", duration: "4 Years", seats: 198,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Data Science",
    category: "B.Tech · M.Tech",
    desc: "Rigorous training in big data analytics, predictive modeling, and statistical intelligence.",
    est: "2021", campus: "Data Analytics Lab", duration: "4 Years", seats: 78,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Biotechnology",
    category: "B.Tech · Intg. M.Tech",
    desc: "Intersecting biology with technology for pharmaceutical, agricultural, and biochemical innovations.",
    est: "2007", campus: "Life Sciences Block", duration: "4 Years", seats: 120,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Electronics & Telecomm.",
    category: "B.Tech · M.Tech",
    desc: "Designing robust communications, microwave tech, and advanced signaling systems.",
    est: "2005", campus: "Communication Wing", duration: "4 Years", seats: 48,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "VLSI Design",
    category: "B.Tech · M.Tech",
    desc: "Pioneering microelectronics, semiconductor design, and extreme miniaturization.",
    est: "2010", campus: "Microelectronics Lab", duration: "4 Years", seats: 48,
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Electrical & Electronics",
    category: "Diploma · B.Tech · M.Tech",
    desc: "Mastering power grids, renewable energy, and modern control engineering.",
    est: "2005", campus: "Power Engg. Block", duration: "4 Years", seats: 126,
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Mechanical Engineering",
    category: "Diploma · B.Tech · M.Tech",
    desc: "Advancing automation, thermodynamics, and sustainable manufacturing practices.",
    est: "2012", campus: "Industrial Block", duration: "4 Years", seats: 108,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Civil Engineering",
    category: "B.Tech · M.Tech",
    desc: "Building the future through smart infrastructure and eco-friendly structural design.",
    est: "2014", campus: "Infrastructure Wing", duration: "4 Years", seats: 66,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Department of MBA",
    category: "Core · IEVD · Env. Mgmt.",
    desc: "Fostering strategic leadership, entrepreneurial agility, and global business acumen.",
    est: "2008", campus: "Management Block", duration: "2 Years", seats: 180,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Department of MCA",
    category: "Master of Computer App.",
    desc: "Advanced studies in enterprise software architecture, databases, and IT framework deployments.",
    est: "2005", campus: "Computing Center", duration: "2 Years", seats: 60,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
  }
];

/* ═══════════════════════════════════════════════════════════════════════
   Department Card — inline styles for accent colours (can't template
   Tailwind arbitrary values with JS vars), Tailwind for everything else
   ═══════════════════════════════════════════════════════════════════════ */

const DeptCard = ({ dept, index }) => {
  const c = ACCENTS[index % ACCENTS.length];

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden flex flex-col h-full
                 border border-gray-100 transition-all duration-300
                 hover:-translate-y-1.5"
      style={{
        boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 50px ${c.glow}, 0 8px 24px rgba(0,0,0,0.08)`}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)"}
    >
      {/* ── Image ── */}
      <div className="relative w-full h-[190px] overflow-hidden">
        <img
          src={dept.image}
          alt={dept.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Category badge — frosted glass */}
        <div
          className="absolute bottom-3 left-3 backdrop-blur-xl rounded-lg px-3 py-[5px] border border-white/20"
          style={{ background: "rgba(255,255,255,0.18)" }}
        >
          <span className="text-white text-[11px] font-bold tracking-wider uppercase drop-shadow-sm">
            {dept.category}
          </span>
        </div>

        {/* Colored top-accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: c.btn }}
        />
      </div>

      {/* ── Body ── */}
      <div className="p-5 pb-0 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-[16px] font-bold text-[#1a1a2e] leading-snug mb-2 tracking-[-0.01em]">
          {dept.name}
        </h3>

        {/* Description */}
        <p
          className="text-[#6b7280] text-[13px] leading-[1.7] mb-4 pl-3 border-l-[3px]"
          style={{ borderColor: c.btn }}
        >
          {dept.desc}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {[
            { icon: <Calendar size={12} strokeWidth={1.8} />, label: `Est. ${dept.est}` },
            { icon: <Clock size={12} strokeWidth={1.8} />,    label: dept.duration },
            { icon: <MapPin size={12} strokeWidth={1.8} />,   label: dept.campus },
          ].map((m, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11.5px] font-medium"
              style={{ background: c.pillBg, color: c.pill }}
            >
              {m.icon} {m.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <div
        className="mx-5 mb-5 mt-auto pt-4 flex items-center justify-between"
        style={{ borderTop: "1px solid #f0f0f0" }}
      >
        {/* Seats */}
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: c.pillBg }}
          >
            <Users size={14} style={{ color: c.pill }} strokeWidth={2} />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-[#aaa] uppercase tracking-wider leading-none mb-0.5">Seats</p>
            <p className="text-[15px] font-extrabold text-[#1a1a2e] leading-none">{dept.seats}</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://academics-tat.tekkzy.com/departments-of-engineering/"
          className="inline-flex items-center gap-1.5 text-[13px] font-bold text-white
                     rounded-xl px-5 py-2.5 transition-all duration-200
                     hover:gap-2.5 hover:shadow-lg hover:brightness-110 active:scale-[0.97]"
          style={{ background: c.btn }}
          onMouseEnter={e => e.currentTarget.style.background = c.btnHover}
          onMouseLeave={e => e.currentTarget.style.background = c.btn}
        >
          Explore
          <ArrowRight size={14} strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════
   CTA Card — fills the 12th slot so the grid has no empty spaces
   ═══════════════════════════════════════════════════════════════════════ */
const CtaCard = () => (
  <div className="relative bg-gradient-to-br from-[#2C3A8C] via-[#3B4BA0] to-[#6C5CE7] rounded-2xl overflow-hidden flex flex-col h-full items-center justify-center text-center p-8 shadow-[0_12px_40px_rgba(44,58,140,0.30)]">
    {/* Decorative blurs */}
    <div className="absolute top-0 right-0 w-40 h-40 bg-[#E8BD63]/15 rounded-full blur-[60px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#6C5CE7]/30 rounded-full blur-[50px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

    <div className="z-10 flex flex-col items-center">
      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-lg flex items-center justify-center mb-5 border border-white/10">
        <GraduationCap size={28} className="text-[#E8BD63]" strokeWidth={1.8} />
      </div>
      <h3 className="serif text-[26px] xl:text-[28px] font-bold text-[#E8BD63] mb-2 leading-tight">Explore More</h3>
      <p className="text-white/70 text-[13.5px] max-w-[220px] leading-relaxed font-medium mb-6">
        9 UG · 12 PG · 2 Integrated · 3 Diploma Programs
      </p>
      <a
        href="https://academics-tat.tekkzy.com/departments-of-engineering/"
        className="bg-white hover:bg-gray-50 text-[#1A2660] font-bold py-3 px-7 rounded-xl transition-all shadow-lg hover:-translate-y-0.5 flex items-center gap-2 text-[14px]"
      >
        View All
        <ArrowRight size={16} strokeWidth={2.5} />
      </a>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════
   Main Section
   ═══════════════════════════════════════════════════════════════════════ */
export default function Programs() {
  return (
    <section className="relative py-20 md:py-28 bg-[#F2F4F5] border-y border-[#EFE7DF]/60 overflow-hidden text-left">
      {/* Subtle background dots pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 xl:px-12">

        {/* ── Header ── */}
        <div className="mb-14">
          <SlideIn direction="left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#6C5CE7]/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-[#6C5CE7]" />
              </div>
              <span className="text-[#6C5CE7] text-[12px] font-bold tracking-[0.18em] uppercase">Our Programs</span>
            </div>
            <h2 className="text-[#1a1a2e] text-4xl md:text-[44px] font-bold mb-3 tracking-tight leading-[1.1]">
              Academic Departments
            </h2>
            <p className="text-[#737373] text-[17px] font-medium max-w-2xl leading-relaxed">
              Discover our 50+ specialized undergraduate and postgraduate degrees across immersive, industry-aligned departments.
            </p>
          </SlideIn>
        </div>

        {/* ── Card Grid — 4 cols, 11 dept cards + 1 CTA card = 12 = perfect fill ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DEPARTMENTS.map((dept, i) => (
            <FadeInUp key={i} delay={i * 60}>
              <DeptCard dept={dept} index={i} />
            </FadeInUp>
          ))}
          {/* 12th card — CTA fills the gap */}
          <FadeInUp delay={DEPARTMENTS.length * 60}>
            <CtaCard />
          </FadeInUp>
        </div>

        {/* ── Bottom full-width CTA banner ── */}
        <FadeInUp delay={DEPARTMENTS.length * 60 + 120}>
          <div className="mt-12">
            <div className="bg-gradient-to-r from-[#1a1a2e] via-[#2C3A8C] to-[#6C5CE7] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_12px_40px_rgba(44,58,140,0.20)] overflow-hidden relative">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#E8BD63]/8 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-[#6C5CE7]/15 rounded-full blur-[70px] translate-y-1/2 pointer-events-none" />

              <div className="z-10 text-center md:text-left">
                <h3 className="serif text-2xl md:text-3xl xl:text-[34px] font-bold mb-2 text-[#E8BD63]">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-white/75 text-[15px] max-w-lg leading-relaxed font-medium">
                  Join 5,000+ students across 11 departments. Applications for the 2026-27 academic year are now open.
                </p>
              </div>
              <a
                href="https://academics-tat.tekkzy.com/departments-of-engineering/"
                className="z-10 bg-white hover:bg-gray-50 text-[#1A2660] font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:-translate-y-0.5 flex items-center gap-3 whitespace-nowrap text-[15px]"
              >
                Explore All Programs
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </FadeInUp>

      </div>
    </section>
  );
}
