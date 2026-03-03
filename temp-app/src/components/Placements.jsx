import { FadeInUp, SlideIn } from "../utils/animations";
import { TrendingUp, Building2, Award, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import { logos as CompanyLogos } from "../data/companyLogos";

/* Smooth glow hover CSS and marquee animation */
const hoverAnimCSS = `
  .company-pill {
    transition:
      background 0.3s ease,
      border-color 0.3s ease,
      box-shadow 0.35s ease,
      transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94),
      gap 0.3s ease;
  }
  .company-pill:hover {
    transform: translateY(-3px) scale(1.035);
  }
  .logo-fade {
    transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
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

/* ─── Company tag — smooth glow + logo fade ─────────────────────────── */
function CompanyTag({ name }) {
  const [hovered, setHovered] = useState(false);
  const Logo = CompanyLogos[name];
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div
      className="company-pill flex-shrink-0 flex items-center rounded-xl px-4 py-2.5 cursor-default"
      style={{
        background: hovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)",
        borderWidth: hovered ? "1.5px" : "1px",
        borderStyle: "solid",
        borderColor: hovered ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.12)",
        boxShadow: hovered
          ? "0 0 0 4px rgba(255,255,255,0.05), 0 0 28px 0 rgba(212,181,160,0.25), 0 8px 28px -6px rgba(0,0,0,0.5)"
          : "none",
        gap: hovered ? "10px" : "0px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Logo — smooth width + opacity transition */}
      <div style={{
        maxWidth: hovered ? "60px" : "0px",
        overflow: "hidden",
        flexShrink: 0,
        transition: "max-width 0.35s ease",
        display: "flex",
        alignItems: "center",
      }}>
        <div
          className="logo-fade"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1) translateY(0)" : "scale(0.85) translateY(3px)",
          }}
        >
          {Logo
            ? <Logo size={26} />
            : <span style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 26, height: 26, borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                fontSize: 9, fontWeight: 900, color: "rgba(255,255,255,0.7)",
              }}>{initials}</span>
          }
        </div>
      </div>

      {/* Label */}
      <span style={{
        fontSize: 13,
        fontWeight: hovered ? 700 : 600,
        whiteSpace: "nowrap",
        color: hovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.68)",
        letterSpacing: hovered ? "0.01em" : "0",
        transition: "color 0.3s ease, letter-spacing 0.3s ease",
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
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C2825] via-[#3E3A36] to-[#4A3F38]" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-gradient-to-br from-[#8B6E66]/40 to-[#A59381]/20 rounded-full blur-[120px]"
        style={{ animation: "pulse 4s ease-in-out infinite" }} />
      <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-[#A59381]/30 to-[#8B6E66]/10 rounded-full blur-[100px]"
        style={{ animation: "pulse 4s ease-in-out infinite", animationDelay: "2s" }} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <SlideIn direction="right">
            <div className="inline-flex items-center gap-3 border border-white/15 text-white/90 text-[11px] font-bold uppercase tracking-[0.35em] px-8 py-3 rounded-full mb-10 bg-white/5 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
              Placements 2025–26
            </div>
          </SlideIn>
          <FadeInUp delay={200}>
            <h2 className="serif text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] drop-shadow-2xl">
              Our graduates are everywhere{" "}
              <br className="hidden md:block" />
              <span className="italic" style={{
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(to right, #D4B5A0, #E8D5C4, #A59381)",
                backgroundClip: "text",
              }}>
                that matters.
              </span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={400}>
            <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Over 320 global companies visited our campus this year. Our students have secured leading roles across the world's top firms.
            </p>
          </FadeInUp>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stats.map((s, i) => (
            <FadeInUp key={s.label} delay={200 + i * 100}>
              <div className="group relative bg-white/[0.06] border border-white/10 rounded-2xl p-7 text-center hover:bg-white/[0.12] hover:border-white/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-white/50 to-white/10 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="text-white/50 mb-4 flex justify-center group-hover:text-white/80 group-hover:scale-110 transform transition-all duration-500">{s.icon}</div>
                <div className="serif text-3xl md:text-4xl font-black text-white mb-2">{s.value}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white/70 transition-colors">{s.label}</div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Company Tags */}
        <FadeInUp delay={500}>
          <div className="mb-20">
            <div className="text-center mb-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">
                Trusted by Industry Leaders
              </p>
              <p className="text-white/25 text-[10px] mt-1.5 font-medium">Hover to reveal each company's logo</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
              {companies.map((name) => (
                <CompanyTag key={name} name={name} />
              ))}
              <div className="flex-shrink-0 flex items-center justify-center border border-white/10 bg-white/[0.05] rounded-lg px-5 py-2.5">
                <span className="text-white/50 text-[13px] font-bold">+{remaining} more</span>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Student Placements */}
        <div className="text-center mb-10">
          <FadeInUp delay={600}>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-5" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">Where Our Students Work</span>
          </FadeInUp>
        </div>

        <FadeInUp delay={650}>
          {/* w-[100vw] and left-1/2 -translate-x-1/2 breaks it out of the max-w-7xl container to span edge-to-edge */}
          <div className="relative w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden py-4">
            {/* Gradient edge masks for smooth fade in/out */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#2C2825] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#4A3F38] to-transparent z-10 pointer-events-none" />

            {/* Scrolling container — duplicated items for infinite seamless scroll */}
            <div className="flex w-max animate-marquee space-x-4 px-4">
              {[...placements, ...placements].map((s, i) => (
                <div key={i} className="group w-[320px] md:w-[380px] flex-shrink-0 flex items-center justify-between bg-white/[0.12] hover:bg-white/[0.18] border border-white/20 hover:border-white/30 rounded-xl px-5 py-4 transition-all duration-400 hover:-translate-y-1 cursor-default backdrop-blur-sm shadow-xl">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4B5A0] to-[#8B6E66] border border-white/30 flex items-center justify-center text-white text-sm font-black flex-shrink-0 group-hover:from-[#E8D5C4] transition-all duration-400 shadow-inner">
                      {s.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="text-white font-bold text-[16px] leading-tight truncate">{s.name}</div>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <div className="text-white/80 text-[13px] font-semibold truncate">{s.company}</div>
                        <span className="flex-shrink-0 bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wider">{s.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#F5EEEC] font-black text-[16px] tracking-wide whitespace-nowrap pl-4 group-hover:text-white transition-colors">{s.pkg}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* CTA */}
        <FadeInUp delay={800}>
          <div className="text-center mt-16">
            <a href="#" className="group inline-flex items-center gap-3 bg-white text-[#3E3A36] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_-10px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-500">
              View Full Placement Report
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeInUp>

      </div>
    </section>
  );
}
