import { FadeInUp } from "../utils/animations";
import { ArrowRight } from "lucide-react";
import aicteLogo from "../assets/aicte-logo.png";

/* ─── Main Component ─── */
export default function WhyChooseTrident() {
  return (
    <section className="pt-28 pb-10 relative overflow-hidden" style={{ background: "#F5EEEC" }}>
      {/* Subtle background shapes */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-[#EFE7DF]/30 -skew-x-12 -translate-x-20 z-0 hidden lg:block" />
      <div className="absolute bottom-0 right-0 w-1/4 h-2/3 bg-[#FAF9F7] skew-x-12 translate-x-20 z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── Header ── */}
        <div className="mb-16 relative">
          <FadeInUp>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-10" style={{ background: "linear-gradient(90deg, #E5AA3E, transparent)" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#3E3A36]/35">
                Why Choose Trident
              </span>
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2 className="serif text-5xl md:text-6xl lg:text-7xl font-black text-[#3E3A36] leading-[1.05] mb-6">
              Built for{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(135deg, #2C3A8C 0%, #4F5BD5 60%, #8B5CF6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                excellence.
              </span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-[#3E3A36]/40 text-lg font-medium leading-relaxed max-w-xl">
              A legacy of distinction that transforms students into global leaders.
            </p>
          </FadeInUp>
        </div>

        {/* ── ROW 1 — 5 / 4 / 3 split ── */}
        <FadeInUp delay={250}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
            {/* Top-Ranked — wide white + golden glow */}
            <div className="md:col-span-5 bg-white border-b-4 border-[#E5AA3E] rounded-2xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transform transition-transform duration-500 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#FFF0D4]/80 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col justify-end min-h-[180px]">
                <h4 className="serif text-5xl md:text-6xl font-black mb-4 text-[#212529]">Top-Ranked</h4>
                <p className="text-[#6C757D] text-[13px] font-black uppercase tracking-[.25em] leading-relaxed">Premier Technical Institution</p>
              </div>
            </div>

            {/* 3,000+ — medium deep blue + stripes */}
            <div className="md:col-span-4 bg-[#283B91] border-b-4 border-[#1a2861] rounded-2xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(40,59,145,0.4)] transform transition-transform duration-500 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(255,255,255,0.3) 18px, rgba(255,255,255,0.3) 20px)" }} />
              <div className="relative z-10 h-full flex flex-col justify-end min-h-[180px]">
                <h4 className="serif text-5xl md:text-6xl font-black mb-4 text-white">3,000+</h4>
                <p className="text-white/70 text-[13px] font-black uppercase tracking-[.25em] leading-relaxed">Impactful Careers Placed</p>
              </div>
            </div>

            {/* AICTE — narrow dark + logo */}
            <div className="md:col-span-3 bg-[#1A1817] rounded-2xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(26,24,23,0.5)] transform transition-transform duration-500 hover:-translate-y-2 group relative overflow-hidden border-b-4 border-[#8B6E66]">
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[180px]">
                <div className="flex flex-col items-start gap-4 mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex flex-shrink-0 items-center justify-center p-2.5 border border-white/20 shadow-2xl">
                    <img src={aicteLogo} alt="AICTE" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="serif text-3xl font-black text-white leading-tight">
                    AICTE <br />
                    <span className="text-base font-medium opacity-60 text-[#A59381] mt-1 inline-block">Approved Center</span>
                  </h4>
                </div>
                <p className="text-[#A59381] text-[11px] font-black uppercase tracking-[.3em] mt-auto">Legacy Since 2005</p>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* ── ROW 2 — 3 / 5 / 4 split (reversed) ── */}
        <FadeInUp delay={350}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
            {/* NAAC — narrow dark */}
            <div className="md:col-span-3 bg-[#1A1817] rounded-2xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(26,24,23,0.5)] transform transition-transform duration-500 hover:-translate-y-2 group relative overflow-hidden border-b-4 border-[#E5AA3E]">
              <div className="relative z-10 h-full flex flex-col justify-end min-h-[180px]">
                <h4 className="serif text-5xl md:text-6xl font-black mb-4 text-white">NAAC 'A'</h4>
                <p className="text-[#A59381] text-[13px] font-black uppercase tracking-[.25em] leading-relaxed">Accredited Institution</p>
              </div>
            </div>

            {/* 94% — wide white + blue glow */}
            <div className="md:col-span-5 bg-white border-b-4 border-[#283B91] rounded-2xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transform transition-transform duration-500 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#283B91]/8 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col justify-end min-h-[180px]">
                <h4 className="serif text-5xl md:text-6xl font-black mb-4 text-[#212529]">94%</h4>
                <p className="text-[#6C757D] text-[13px] font-black uppercase tracking-[.25em] leading-relaxed">Placement Rate Achieved</p>
              </div>
            </div>

            {/* 200+ PhD — medium blue + stripes */}
            <div className="md:col-span-4 bg-[#283B91] border-b-4 border-[#E5AA3E] rounded-2xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(40,59,145,0.4)] transform transition-transform duration-500 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(255,255,255,0.3) 18px, rgba(255,255,255,0.3) 20px)" }} />
              <div className="relative z-10 h-full flex flex-col justify-end min-h-[180px]">
                <h4 className="serif text-5xl md:text-6xl font-black mb-4 text-white">200+</h4>
                <p className="text-white/70 text-[13px] font-black uppercase tracking-[.25em] leading-relaxed">PhD Faculty Members</p>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* ── ROW 3 — 4 / 5 / 3 split ── */}
        <FadeInUp delay={450}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Research — medium blue + stripes */}
            <div className="md:col-span-4 bg-[#283B91] border-b-4 border-[#1a2861] rounded-2xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(40,59,145,0.4)] transform transition-transform duration-500 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(255,255,255,0.3) 18px, rgba(255,255,255,0.3) 20px)" }} />
              <div className="relative z-10 h-full flex flex-col justify-end min-h-[180px]">
                <h4 className="serif text-5xl md:text-6xl font-black mb-4 text-white">Research-Led</h4>
                <p className="text-white/70 text-[13px] font-black uppercase tracking-[.25em] leading-relaxed">Innovation & Discovery</p>
              </div>
            </div>

            {/* 100+ Acres — wide white + warm glow */}
            <div className="md:col-span-5 bg-white border-b-4 border-[#E5AA3E] rounded-2xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transform transition-transform duration-500 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#FFF0D4]/80 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col justify-end min-h-[180px]">
                <h4 className="serif text-5xl md:text-6xl font-black mb-4 text-[#212529]">100+ Acres</h4>
                <p className="text-[#6C757D] text-[13px] font-black uppercase tracking-[.25em] leading-relaxed">World-Class Green Campus</p>
              </div>
            </div>

            {/* 15+ Nations — narrow dark */}
            <div className="md:col-span-3 bg-[#1A1817] rounded-2xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(26,24,23,0.5)] transform transition-transform duration-500 hover:-translate-y-2 group relative overflow-hidden border-b-4 border-[#8B6E66]">
              <div className="relative z-10 h-full flex flex-col justify-end min-h-[180px]">
                <h4 className="serif text-5xl md:text-6xl font-black mb-4 text-white">15+</h4>
                <p className="text-[#A59381] text-[13px] font-black uppercase tracking-[.25em] leading-relaxed">Global Partnerships</p>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* ── Bottom CTA ── */}
        <FadeInUp delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-between mt-12 pt-8 border-t border-[#3E3A36]/8">
            <p className="text-[#3E3A36]/35 text-sm font-medium mb-6 sm:mb-0">
              Ready to begin your journey?
            </p>
            <a
              href="https://tat.tekkzy.com/"
              className="group inline-flex items-center gap-3 btn-rose px-8 py-3.5 rounded-full font-bold text-[13px]"
            >
              Explore Trident
              <ArrowRight
                size={16}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
