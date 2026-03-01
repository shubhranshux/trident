import { FadeInUp, SlideIn } from "../utils/animations";
import { RECRUITERS } from "../data/constants";
import { TrendingUp, Building2, Award, Users, ArrowRight } from "lucide-react";

export default function Placements() {
  const stats = [
    { icon: <TrendingUp size={28} />, value: "₹12 LPA", label: "Highest Package", accent: "from-white/60 to-white/10" },
    { icon: <Award size={28} />, value: "₹5.2 LPA", label: "Average Package", accent: "from-white/60 to-white/10" },
    { icon: <Building2 size={28} />, value: "320+", label: "Companies Visited", accent: "from-white/60 to-white/10" },
    { icon: <Users size={28} />, value: "94%", label: "Placement Rate", accent: "from-white/60 to-white/10" },
  ];

  const domainMap = {
    "TCS": "tcs.com", "Infosys": "infosys.com", "Wipro": "wipro.com",
    "HCL": "hcltech.com", "Capgemini": "capgemini.com", "Accenture": "accenture.com",
    "Cognizant": "cognizant.com", "Tech Mahindra": "techmahindra.com",
    "L&T Infotech": "ltimindtree.com", "IBM": "ibm.com",
    "Hexaware": "hexaware.com", "Mphasis": "mphasis.com"
  };

  return (
    <>
      {/* ── Recruiter ticker ── */}
      <div className="bg-[#EFE7DF] border-y border-secondary/20 py-5 ticker-wrap relative z-20">
        <div className="ticker-inner text-[13px] font-bold text-[#3E3A36]/70 uppercase tracking-[0.25em]">
          {[...RECRUITERS, ...RECRUITERS].map((r, i) => (
            <span key={i} className="flex items-center gap-8 mx-8">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block flex-shrink-0 animate-pulse"></span>
              {r}
            </span>
          ))}
        </div>
      </div>

      {/* ── Premium Placements Section ── */}
      <section className="relative py-32 overflow-hidden">
        
        {/* Rich gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2825] via-[#3E3A36] to-[#4A3F38]"></div>
        
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-gradient-to-br from-[#8B6E66]/40 to-[#A59381]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-[#A59381]/30 to-[#8B6E66]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Decorative line accents */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-20">
            <SlideIn direction="right">
              <div className="inline-flex items-center justify-center gap-3 border border-white/15 text-white/90 text-[11px] font-bold uppercase tracking-[0.35em] px-8 py-3 rounded-full mb-10 bg-white/5 backdrop-blur-md shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Placements 2025–26
              </div>
            </SlideIn>
            
            <FadeInUp delay={200}>
              <h2 className="serif text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] drop-shadow-2xl">
                Our graduates are everywhere <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4B5A0] via-[#E8D5C4] to-[#A59381] italic">that matters.</span>
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={400}>
              <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed mb-0 max-w-2xl mx-auto">
                Over 320 global companies visited our campus this year. Our students have secured leading roles across the world's top firms.
              </p>
            </FadeInUp>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {stats.map((s, i) => (
              <FadeInUp key={s.label} delay={200 + i * 100}>
                <div className="group relative bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl p-7 text-center hover:bg-white/[0.12] hover:border-white/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  {/* Gradient accent line at top */}
                  <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${s.accent} opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div className="text-white/50 mb-4 flex justify-center group-hover:text-white/80 transition-colors group-hover:scale-110 transform duration-500">
                    {s.icon}
                  </div>
                  <div className="serif text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#D4B5A0] transition-all">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white/70 transition-colors">
                    {s.label}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Recruiter Logos Grid */}
          <FadeInUp delay={600}>
            <div className="text-center mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">Trusted by Industry Leaders</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {RECRUITERS.map(r => {
                const logoUrl = `https://logo.clearbit.com/${domainMap[r] || r.toLowerCase().replace(/\s+/g, '') + '.com'}?size=80`;
                return (
                  <span key={r} className="group/chip relative bg-white/[0.07] hover:bg-white border border-white/10 hover:border-white/80 text-white hover:text-[#3E3A36] text-[13px] font-bold px-6 py-3 rounded-full transition-all duration-400 cursor-default backdrop-blur-sm shadow-lg transform hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(255,255,255,0.15)] min-w-[100px] text-center overflow-hidden">
                    {/* Text label */}
                    <span className="inline-block transition-all duration-300 group-hover/chip:opacity-0 group-hover/chip:scale-75">
                      {r}
                    </span>
                    {/* Logo on hover */}
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/chip:opacity-100 transition-all duration-300 scale-75 group-hover/chip:scale-100">
                      <img 
                        src={logoUrl} 
                        alt={`${r} logo`} 
                        className="h-7 w-auto max-w-[70px] object-contain"
                        onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.previousElementSibling.style.opacity = '1'; e.target.parentElement.previousElementSibling.style.transform = 'scale(1)'; }}
                      />
                    </span>
                  </span>
                );
              })}
              <span className="bg-gradient-to-r from-[#8B6E66]/30 to-[#A59381]/30 border border-white/15 text-white/90 text-[13px] font-black px-6 py-3 rounded-full italic backdrop-blur-sm">
                +308 more
              </span>
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
    </>
  );
}
