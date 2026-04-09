import { FadeInUp, SlideIn } from "../utils/animations";
import { TrendingUp, Building2, Award, Users, ArrowRight } from "lucide-react";
import { logos as CompanyLogos } from "../data/companyLogos";

/* Smooth hover CSS and marquee animation */
const hoverAnimCSS = `
  .company-pill {
    position: relative;
    overflow: hidden;
  }
  .company-pill .pill-logo-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border-radius: inherit;
    transform: translateY(100%);
    transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
    will-change: transform;
    pointer-events: none;
    z-index: 2;
  }
  .company-pill:hover .pill-logo-overlay {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 35s linear infinite;
  }
  .animate-marquee:hover {
    animation-play-state: paused;
  }
`;
if (typeof document !== "undefined" && !document.getElementById("pill-hover-css")) {
  const s = document.createElement("style");
  s.id = "pill-hover-css";
  s.textContent = hoverAnimCSS;
  document.head.appendChild(s);
}

/* ─── Data ──────────────────────────────────────────────────────────── */
const stats = [
  { icon: <TrendingUp size={28} />, value: "₹7.5 LPA",  label: "Highest Package", color: "#E8BD63" },
  { icon: <Award size={28} />,       value: "₹4.5 LPA", label: "Average Package", color: "#C41E3A" },
  { icon: <Building2 size={28} />,   value: "120+",      label: "Companies Visited", color: "#2E6DB4" },
  { icon: <Users size={28} />,       value: "82%",        label: "Placement Rate", color: "#3EA644" },
];

const companies = [
  "TCS", "Infosys", "Wipro", "HCL", "Capgemini", "Accenture",
  "Cognizant", "Tech Mahindra", "L&T Infotech", "IBM",
  "Hexaware", "Mphasis", "Amazon", "Microsoft", "Google",
  "Goldman Sachs", "JP Morgan", "Morgan Stanley", "Deloitte",
  "Atlassian", "Persistent", "Mindtree", "Oracle", "SAP",
];

/* Placement records will be populated from Excel data */
const placements = [];

/* ─── Company tag ── */
function CompanyTag({ name }) {
  const Logo = CompanyLogos[name];
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div
      className="company-pill flex-shrink-0 flex items-center justify-center rounded-xl cursor-default transition-colors duration-300"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.12)",
        padding: "10px 16px",
      }}
    >
      <div className="pill-logo-overlay">
        {Logo
          ? <Logo size={26} />
          : <span style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: 28, height: 28, borderRadius: "50%",
              background: "#F1F5F9",
              fontSize: 10, fontWeight: 900, color: "#3E3A36",
              border: "1px solid rgba(15,23,42,0.1)",
            }}>{initials}</span>
        }
      </div>
      <span style={{
        fontSize: 13,
        fontWeight: 600,
        whiteSpace: "nowrap",
        color: "rgba(255,255,255,0.7)",
      }}>
        {name}
      </span>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────── */
export default function Placements() {
  const remaining = 120 - companies.length;

  return (
    <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: '#2F3A87' }}>
      
      {/* Background decorative geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/[0.03] rotate-45 hidden md:block" />
        <div className="absolute top-[25%] left-[3%] w-40 h-40 rounded-full bg-[#E8BD63]/[0.06] hidden md:block" />
        <div className="absolute bottom-[15%] right-[8%] w-24 h-24 bg-[#C41E3A]/[0.05] rotate-45 hidden md:block" />
        <div className="absolute top-[50%] right-[30%] w-16 h-16 rounded-full bg-white/[0.03] hidden lg:block" />
        <div className="absolute top-0 left-[20%] w-px h-56 bg-gradient-to-b from-[#E8BD63]/15 to-transparent hidden md:block" />
        <div className="absolute bottom-0 right-[15%] w-px h-40 bg-gradient-to-t from-[#2E6DB4]/20 to-transparent hidden md:block" />
      </div>

      {/* Top tri-color accent */}
      <div className="absolute top-0 left-0 right-0 flex items-center gap-0">
        <div className="h-[3px] flex-1 bg-[#E8BD63]" />
        <div className="h-[3px] flex-1 bg-[#C41E3A]" />
        <div className="h-[3px] flex-1 bg-[#2E6DB4]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <SlideIn direction="right">
            <div className="inline-flex items-center gap-3 border border-white/15 text-white/70 text-[11px] font-bold uppercase tracking-[0.35em] px-8 py-3 rounded-full mb-10 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#3EA644]" style={{ animation: "pulse 2s ease-in-out infinite" }} />
              Placements 2025–26
            </div>
          </SlideIn>
          <FadeInUp delay={200}>
            <h2 className="serif text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05]">
              Our graduates are everywhere{" "}
              <br className="hidden md:block" />
              <span className="italic text-[#E8BD63]">
                that matters.
              </span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={400}>
            <p className="text-white/50 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Over 120 companies visited our campus this year. Our students have secured leading roles across top firms.
            </p>
          </FadeInUp>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {stats.map((s, i) => (
            <FadeInUp key={s.label} delay={200 + i * 100}>
              <div className="group relative rounded-2xl p-7 text-center transition-all duration-500 hover:-translate-y-1 overflow-hidden hover:shadow-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20">
                {/* Colored top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-500" style={{ backgroundColor: s.color }} />
                {/* Geometric corner triangle */}
                <div className="absolute top-0 right-0 w-0 h-0" style={{ borderLeft: '40px solid transparent', borderTop: `40px solid ${s.color}` }} />
                
                <div className="mb-4 flex justify-center group-hover:scale-110 transform transition-all duration-500 text-white/70">{s.icon}</div>
                <div className="serif text-3xl md:text-4xl font-black mb-2 text-white">{s.value}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">{s.label}</div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Tri-color accent stripe */}
        <div className="flex items-center gap-0 mb-24 mt-2">
          <div className="h-[3px] flex-1 bg-gradient-to-r from-transparent to-[#E8BD63]" />
          <div className="h-[3px] w-1/4 bg-[#C41E3A]" />
          <div className="h-[3px] w-1/6 bg-[#2E6DB4]" />
        </div>

        {/* Company Tags */}
        <FadeInUp delay={500}>
          <div className="mb-24">
            <div className="text-center mb-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#E8BD63]">
                Trusted by Industry Leaders
              </p>
              <p className="text-white/30 text-[10px] mt-1.5 font-medium">Hover to reveal each company's logo</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
              {companies.map((name) => (
                <CompanyTag key={name} name={name} />
              ))}
              <div className="flex-shrink-0 flex items-center justify-center border border-dashed border-white/15 bg-white/5 rounded-lg px-5 py-2.5">
                <span className="text-white/40 text-[13px] font-bold">+{remaining} more</span>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Student Placements — Placeholder until Excel data is provided */}
        <div className="text-center mb-10">
          <FadeInUp delay={600}>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#E8BD63] to-transparent mx-auto mb-5" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#E8BD63]">Where Our Students Work</span>
          </FadeInUp>
        </div>

        <FadeInUp delay={650}>
          <div className="relative rounded-2xl border border-dashed border-white/20 bg-white/5 backdrop-blur-sm py-12 px-8 text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#E8BD63]/10 flex items-center justify-center">
              <Users size={28} className="text-[#E8BD63]" />
            </div>
            <p className="text-white/60 text-lg font-semibold mb-2">Detailed placement records coming soon</p>
            <p className="text-white/35 text-sm font-medium max-w-md mx-auto">
              Student Name, Company, Batch & Package data for the last 5 years will be updated shortly.
            </p>
          </div>
        </FadeInUp>

        {/* CTA */}
        <FadeInUp delay={800}>
          <div className="text-center mt-16">
            <a href="https://placements-tat.tekkzy.com" className="group inline-flex items-center gap-3 bg-[#E8BD63] text-[#0B1930] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-[#F0D080] hover:-translate-y-1 transition-all duration-500">
              View Full Placement Report
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeInUp>

      </div>

      {/* Bottom tri-color accent */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-0">
        <div className="h-[3px] flex-1 bg-[#2E6DB4]" />
        <div className="h-[3px] flex-1 bg-[#C41E3A]" />
        <div className="h-[3px] flex-1 bg-[#E8BD63]" />
      </div>
    </section>
  );
}
