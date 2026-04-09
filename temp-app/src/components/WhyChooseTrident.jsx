import { FadeInUp } from "../utils/animations";
import { ArrowRight, Trophy, Briefcase, Award, TrendingUp, Users, MapPin, Globe } from "lucide-react";

/* ─── Main Component ─── */
export default function WhyChooseTrident() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden" style={{ background: "#F9F7F5" }}>
      {/* Luxurious Abstract Backgrounds */}
      <div className="absolute top-0 right-0 w-[40vw] h-[80vh] bg-gradient-to-b from-[#E8BD63]/5 to-transparent rounded-full blur-[100px] -translate-y-1/4 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[60vh] bg-gradient-to-tr from-[#2C3A8C]/5 to-transparent rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />

      <div className="max-w-7xl mx-auto px-6 xl:px-12 relative z-10">
        {/* ── Header ── */}
        <div className="mb-20 text-center flex flex-col items-center">
          <FadeInUp>
            <div className="inline-flex items-center gap-4 mb-6 px-6 py-2 rounded-full border border-[#E8BD63]/30 bg-[#E8BD63]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8BD63] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A59381]">
                Why Choose Trident
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8BD63] animate-pulse" />
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2 className="serif text-5xl md:text-6xl lg:text-[72px] font-black text-[#3E3A36] leading-[1.05] tracking-tight mb-6">
              Built for <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4A84B] to-[#E8BD63] drop-shadow-sm">excellence.</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-[#5A554F] text-lg md:text-xl font-medium leading-relaxed max-w-2xl font-serif italic selection:bg-[#E8BD63]/20">
              A legacy of distinction that transforms ambitious minds into pioneering global leaders.
            </p>
          </FadeInUp>
        </div>

        {/* ── ROW 1 — 5 / 4 / 3 split ── */}
        <FadeInUp delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
            {/* Top-Ranked — Pristine White Premium */}
            <div className="md:col-span-5 bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgba(44,58,140,0.06)] hover:shadow-[0_20px_50px_rgba(44,58,140,0.12)] border border-[#EFE7DF] transform transition-all duration-700 hover:-translate-y-1.5 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#E8BD63]/10 to-transparent blur-[40px] group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#E8BD63] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                <div className="w-12 h-12 rounded-xl bg-[#FDF9F3] border border-[#E8BD63]/20 flex items-center justify-center text-[#D4A84B] mb-6 group-hover:scale-110 group-hover:bg-[#E8BD63] group-hover:text-white transition-all duration-500 shadow-sm">
                  <Trophy size={24} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="serif text-4xl md:text-5xl font-black mb-3 text-[#212529] group-hover:text-[#2C3A8C] transition-colors">Top-Ranked</h4>
                  <p className="text-[#8A8580] text-[12px] font-bold uppercase tracking-[0.2em] leading-relaxed">Premier Technical Institution</p>
                </div>
              </div>
            </div>

            {/* 5,000+ — Deep Trident Blue */}
            <div className="md:col-span-4 bg-[linear-gradient(145deg,#1A2660_0%,#2C3A8C_100%)] rounded-[24px] p-8 md:p-10 shadow-[0_12px_40px_rgba(26,38,96,0.25)] hover:shadow-[0_20px_50px_rgba(26,38,96,0.35)] transform transition-all duration-700 hover:-translate-y-1.5 group relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#E8BD63]/20 rounded-full blur-[60px] group-hover:translate-x-12 group-hover:translate-y-12 transition-transform duration-1000" />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-500">
                  <Briefcase size={24} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="serif text-5xl md:text-6xl font-black mb-3 text-white">5,000+</h4>
                  <p className="text-white/80 text-[12px] font-bold uppercase tracking-[0.2em] leading-relaxed">Impactful Career Placements</p>
                </div>
              </div>
            </div>

            {/* 6 NBA — Emerald Accent */}
            <div className="md:col-span-3 bg-[linear-gradient(145deg,#004d2a_0%,#006738_100%)] rounded-[24px] p-8 md:p-10 shadow-[0_12px_40px_rgba(0,103,56,0.25)] hover:shadow-[0_20px_50px_rgba(0,103,56,0.35)] transform transition-all duration-700 hover:-translate-y-1.5 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-500">
                  <Award size={24} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="serif text-5xl md:text-6xl font-black mb-3 text-white">6</h4>
                  <p className="text-white/80 text-[12px] font-bold uppercase tracking-[0.2em] leading-relaxed">NBA Accredited Programmes</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* ── ROW 2 — 3 / 5 / 4 split (reversed) ── */}
        <FadeInUp delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
            {/* NAAC — Royal Gold */}
            <div className="md:col-span-3 bg-[linear-gradient(145deg,#D4A84B_0%,#E8BD63_100%)] rounded-[24px] p-8 md:p-10 shadow-[0_12px_40px_rgba(232,189,99,0.3)] hover:shadow-[0_20px_50px_rgba(232,189,99,0.4)] transform transition-all duration-700 hover:-translate-y-1.5 group relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-[#1A1817] mb-6 group-hover:scale-110 transition-all duration-500">
                  <Award size={24} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="serif text-4xl md:text-5xl font-black mb-3 text-[#1A1817]">NAAC</h4>
                  <p className="text-[#1A1817]/70 text-[12px] font-bold uppercase tracking-[0.2em] leading-relaxed">Accredited Institution</p>
                </div>
              </div>
            </div>

            {/* 82% — Frosty White Premium */}
            <div className="md:col-span-5 bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgba(44,58,140,0.06)] hover:shadow-[0_20px_50px_rgba(44,58,140,0.12)] border border-[#EFE7DF] transform transition-all duration-700 hover:-translate-y-1.5 group relative overflow-hidden">
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#2C3A8C]/5 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#2C3A8C] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                <div className="w-12 h-12 rounded-xl bg-[#F0F2F5] border border-[#2C3A8C]/10 flex items-center justify-center text-[#2C3A8C] mb-6 group-hover:scale-110 group-hover:bg-[#2C3A8C] group-hover:text-white transition-all duration-500 shadow-sm">
                  <TrendingUp size={24} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="serif text-5xl md:text-6xl font-black mb-3 text-[#212529] group-hover:text-[#E8BD63] transition-colors">82%</h4>
                  <p className="text-[#8A8580] text-[12px] font-bold uppercase tracking-[0.2em] leading-relaxed">Placement Rate</p>
                </div>
              </div>
            </div>

            {/* 200+ Faculty — Soft Charcoal Blue */}
            <div className="md:col-span-4 bg-[linear-gradient(145deg,#232A44_0%,#2F375B_100%)] rounded-[24px] p-8 md:p-10 shadow-[0_12px_40px_rgba(35,42,68,0.25)] hover:shadow-[0_20px_50px_rgba(35,42,68,0.35)] transform transition-all duration-700 hover:-translate-y-1.5 group relative overflow-hidden">
               <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#E8BD63]/15 rounded-full blur-[60px] group-hover:-translate-x-12 group-hover:translate-y-12 transition-transform duration-1000" />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#E8BD63] mb-6 group-hover:scale-110 transition-all duration-500">
                  <Users size={24} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="serif text-5xl md:text-6xl font-black mb-3 text-white">200+</h4>
                  <p className="text-[#A5AAB5] text-[12px] font-bold uppercase tracking-[0.2em] leading-relaxed">Expert Faculty Members</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* ── ROW 3 — 4 / 5 / 3 split ── */}
        <FadeInUp delay={500}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Research-Led — Crimson Accent */}
            <div className="md:col-span-4 bg-[linear-gradient(145deg,#8C2C3A_0%,#A63143_100%)] rounded-[24px] p-8 md:p-10 shadow-[0_12px_40px_rgba(140,44,58,0.2)] hover:shadow-[0_20px_50px_rgba(140,44,58,0.3)] transform transition-all duration-700 hover:-translate-y-1.5 group relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-500">
                  <Users size={24} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="serif text-4xl md:text-5xl font-black mb-3 text-white leading-tight">Research-Led</h4>
                  <p className="text-white/80 text-[12px] font-bold uppercase tracking-[0.2em] leading-relaxed">Innovation & Discovery</p>
                </div>
              </div>
            </div>

            {/* 10+ Acres — Frosty White Premium */}
            <div className="md:col-span-5 bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgba(44,58,140,0.06)] hover:shadow-[0_20px_50px_rgba(44,58,140,0.12)] border border-[#EFE7DF] transform transition-all duration-700 hover:-translate-y-1.5 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#006738]/5 to-transparent blur-[40px] group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#006738]/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                <div className="w-12 h-12 rounded-xl bg-[#F0F8F4] border border-[#006738]/10 flex items-center justify-center text-[#006738] mb-6 group-hover:scale-110 group-hover:bg-[#006738] group-hover:text-white transition-all duration-500 shadow-sm">
                  <MapPin size={24} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="serif text-5xl md:text-6xl font-black mb-3 text-[#212529] group-hover:text-[#006738] transition-colors">10+ Acres</h4>
                  <p className="text-[#8A8580] text-[12px] font-bold uppercase tracking-[0.2em] leading-[1.6]">World-Class Campus in the Heart of Bhubaneswar</p>
                </div>
              </div>
            </div>

            {/* 15+ Partnerships — Pitch Dark */}
            <div className="md:col-span-3 bg-[linear-gradient(145deg,#18181A_0%,#28282B_100%)] rounded-[24px] p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform transition-all duration-700 hover:-translate-y-1.5 group relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#E8BD63]/10 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#A59381] mb-6 group-hover:scale-110 group-hover:text-white group-hover:border-white/30 transition-all duration-500">
                  <Globe size={24} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="serif text-5xl md:text-6xl font-black mb-3 text-white">15+</h4>
                  <p className="text-[#A59381] text-[12px] font-bold uppercase tracking-[0.18em] leading-relaxed">Global Partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

      </div>
    </section>
  );
}
