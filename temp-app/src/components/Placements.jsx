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
  { icon: <TrendingUp size={28} />, value: "₹48 LPA",  label: "Highest Package" },
  { icon: <Award size={28} />,       value: "₹5.2 LPA", label: "Average Package" },
  { icon: <Building2 size={28} />,   value: "320+",      label: "Companies Visited" },
  { icon: <Users size={28} />,       value: "94%",        label: "Placement Rate" },
];

const companies = [
  "TCS", "Infosys", "Wipro", "HCL", "Capgemini", "Accenture",
  "Cognizant", "Tech Mahindra", "L&T Infotech", "IBM",
  "Hexaware", "Mphasis", "Amazon", "Microsoft", "Google",
  "Goldman Sachs", "JP Morgan", "Morgan Stanley", "Deloitte",
  "Atlassian", "Persistent", "Mindtree", "Oracle", "SAP",
];

const placements = [
  { name: "Vikram Nair",      year: "2024", company: "Google",         pkg: "₹48 LPA" },
  { name: "Aarav Sharma",     year: "2024", company: "Amazon",         pkg: "₹44 LPA" },
  { name: "Priya Patel",      year: "2024", company: "Microsoft",      pkg: "₹42 LPA" },
  { name: "Rohan Gupta",      year: "2023", company: "Atlassian",      pkg: "₹35 LPA" },
  { name: "Sneha Reddy",      year: "2023", company: "Goldman Sachs",  pkg: "₹28 LPA" },
  { name: "Amit Kumar",       year: "2023", company: "Morgan Stanley", pkg: "₹24 LPA" },
  { name: "Anjali Desai",     year: "2024", company: "JP Morgan",      pkg: "₹22 LPA" },
  { name: "Meera Iyer",       year: "2024", company: "Deloitte",       pkg: "₹18 LPA" },
  { name: "Rahul Behera",     year: "2022", company: "TCS Digital",    pkg: "₹12 LPA" },
  { name: "Sanya Mohanty",    year: "2022", company: "Infosys",        pkg: "₹8 LPA"  },
  { name: "Karan Singh",      year: "2023", company: "Capgemini",      pkg: "₹7.5 LPA"},
  { name: "Diya Patnaik",     year: "2022", company: "Wipro",          pkg: "₹6.5 LPA"},
];

/* ─── Company tag — only name shown, logo slides up from bottom on hover ── */
function CompanyTag({ name }) {
  const Logo = CompanyLogos[name];
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div
      className="company-pill flex-shrink-0 flex items-center justify-center rounded-xl cursor-default transition-colors duration-300"
      style={{
        background: "#F8FAFC",
        border: "1px solid rgba(15,23,42,0.06)",
        padding: "10px 16px",
      }}
    >
      {/* Logo — slides up from bottom on hover, covers the name */}
      <div className="pill-logo-overlay">
        {Logo
          ? <Logo size={26} />
          : <span style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: 28, height: 28, borderRadius: "50%",
              background: "#F1F5F9",
              fontSize: 10, fontWeight: 900, color: "#0F172A",
              border: "1px solid rgba(15,23,42,0.1)",
            }}>{initials}</span>
        }
      </div>

      {/* Company name — always visible, logo covers it on hover */}
      <span style={{
        fontSize: 13,
        fontWeight: 600,
        whiteSpace: "nowrap",
        color: "rgba(15,23,42,0.7)",
      }}>
        {name}
      </span>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────── */
export default function Placements() {
  const remaining = 320 - companies.length;

  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <SlideIn direction="right">
            <div className="inline-flex items-center gap-3 border border-soft text-[#0F172A] text-[11px] font-bold uppercase tracking-[0.35em] px-8 py-3 rounded-full mb-10 bg-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
              Placements 2025–26
            </div>
          </SlideIn>
          <FadeInUp delay={200}>
            <h2 className="serif text-5xl md:text-6xl lg:text-7xl font-black text-[#0F172A] mb-6 leading-[1.05]">
              Our graduates are everywhere{" "}
              <br className="hidden md:block" />
              <span className="italic text-[#529DD4]">
                that matters.
              </span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={400}>
            <p className="text-[#0F172A]/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Over 320 global companies visited our campus this year. Our students have secured leading roles across the world's top firms.
            </p>
          </FadeInUp>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {stats.map((s, i) => (
            <FadeInUp key={s.label} delay={200 + i * 100}>
              <div className="group relative bg-[#F8FAFC] border border-soft/60 rounded-2xl p-7 text-center hover:bg-white hover:border-[#529DD4]/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden hover:shadow-lg">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#529DD4]/50 to-[#529DD4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-[#529DD4] mb-4 flex justify-center group-hover:scale-110 transform transition-all duration-500">{s.icon}</div>
                <div className="serif text-3xl md:text-4xl font-black text-[#0F172A] mb-2">{s.value}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0F172A]/50 group-hover:text-[#0F172A]/70 transition-colors">{s.label}</div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Company Tags */}
        <FadeInUp delay={500}>
          <div className="mb-24">
            <div className="text-center mb-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#529DD4]">
                Trusted by Industry Leaders
              </p>
              <p className="text-[#0F172A]/40 text-[10px] mt-1.5 font-medium">Hover to reveal each company's logo</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
              {companies.map((name) => (
                <CompanyTag key={name} name={name} />
              ))}
              <div className="flex-shrink-0 flex items-center justify-center border border-dashed border-soft bg-white rounded-lg px-5 py-2.5">
                <span className="text-[#0F172A]/50 text-[13px] font-bold">+{remaining} more</span>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Student Placements */}
        <div className="text-center mb-10">
          <FadeInUp delay={600}>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#529DD4] to-transparent mx-auto mb-5" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#529DD4]">Where Our Students Work</span>
          </FadeInUp>
        </div>

        <FadeInUp delay={650}>
          {/* w-[100vw] and left-1/2 -translate-x-1/2 breaks it out of the max-w-7xl container to span edge-to-edge */}
          <div className="relative w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden py-4">
            {/* Gradient edge masks for smooth fade in/out */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Scrolling container — duplicated items for infinite seamless scroll */}
            <div className="flex w-max animate-marquee space-x-4 px-4">
              {[...placements, ...placements].map((s, i) => (
                <div key={i} className="group w-[320px] md:w-[380px] flex-shrink-0 flex items-center justify-between bg-white hover:bg-[#F8FAFC] border border-soft hover:border-[#529DD4]/20 rounded-xl px-5 py-4 transition-all duration-400 hover:-translate-y-1 cursor-default shadow-[0_4px_24px_rgba(15,23,42,0.02)] hover:shadow-[0_12px_40px_rgba(82,157,212,0.08)]">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#529DD4] to-[#2C3A8C] border-2 border-white flex items-center justify-center text-white text-sm font-black flex-shrink-0 shadow-md">
                      {s.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[#0F172A] font-bold text-[16px] leading-tight truncate">{s.name}</div>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <div className="text-[#0F172A]/70 text-[13px] font-semibold truncate">{s.company}</div>
                        <span className="flex-shrink-0 bg-[#F1F5F9] border border-soft text-[#0F172A]/60 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wider">{s.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#529DD4] font-black text-[16px] tracking-wide whitespace-nowrap pl-4 group-hover:scale-105 transition-transform">{s.pkg}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* CTA */}
        <FadeInUp delay={800}>
          <div className="text-center mt-16">
            <a href="https://placements-tat.tekkzy.com" className="group inline-flex items-center gap-3 bg-[#0F172A] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-[#529DD4] hover:-translate-y-1 transition-all duration-500">
              View Full Placement Report
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeInUp>

      </div>
    </section>
  );
}
