import { lazy, Suspense } from "react";
import { NoiseOverlay, CursorGlow } from "./utils/animations";

// Critical above-the-fold — eager loaded
import Header from "./components/Header";
import Hero from "./components/Hero";


import SectionDivider, { SkewedMarquee } from "./components/SectionDivider";

// Below fold — lazy loaded for faster initial paint
const AboutSection  = lazy(() => import("./components/AboutSection"));
const Programs      = lazy(() => import("./components/Programs"));
const AtAGlance     = lazy(() => import("./components/AtAGlance"));
const Facilities    = lazy(() => import("./components/Facilities"));
const Discover      = lazy(() => import("./components/Discover"));
const Placements    = lazy(() => import("./components/Placements"));
const Testimonials  = lazy(() => import("./components/Testimonials"));
const WhyChooseTrident = lazy(() => import("./components/WhyChooseTrident"));
const NewsSection     = lazy(() => import("./components/NewsSection"));
const NoticeBoard     = lazy(() => import("./components/NoticeBoard"));

const Footer        = lazy(() => import("./components/Footer"));

// Minimal inline fallback — no layout shift
function SectionFallback() {
  return <div style={{ minHeight: "200px" }} />;
}

function Home() {
  return (
    <>
      <Hero />
      <div className="relative">
        <main style={{ overflowX: "clip" }}>
          <Suspense fallback={<SectionFallback />}><Placements /></Suspense>

          <SectionDivider type="wave" topColor="#1A2660" bottomColor="#1A2660" height={70} />
          <Suspense fallback={<SectionFallback />}><AboutSection /></Suspense>

          <SectionDivider type="wave" topColor="#F5EEEC" bottomColor="#F9F7F5" leftTopColor="#111827" splitPercent={45} height={50} />
          <Suspense fallback={<SectionFallback />}><WhyChooseTrident /></Suspense>

          <SectionDivider type="wave" topColor="#F9F7F5" bottomColor="#111827" height={70} />

          {/* Skewed marquee band — organic visual break inspired by reference files */}
          <SkewedMarquee
            items={["NAAC Accredited", "NBA 6 Programmes", "120+ Recruiters", "94% Placement", "DSIR SIRO", "20+ Years of Excellence", "200+ Faculty", "10+ Acre Campus"]}
            bgColor="#111827"
            speed={30}
          />

          <SectionDivider type="wave" topColor="#111827" bottomColor="#F9F7F5" height={60} />
          <Suspense fallback={<SectionFallback />}><Programs /></Suspense>

          <SectionDivider type="tilt" topColor="#F9F7F5" bottomColor="#F0BB51" height={70} />
          <Suspense fallback={<SectionFallback />}><AtAGlance /></Suspense>

          <div className="relative z-[20]">
            <SectionDivider type="curve" topColor="#F0BB51" bottomColor="#34785A" height={80} />
          </div>
          <Suspense fallback={<SectionFallback />}><Facilities /></Suspense>

          <div className="relative z-[20]" style={{ marginTop: '-2px' }}>
            <SectionDivider type="tilt" topColor="#34785A" bottomColor="#FAF7F2" height={80} />
          </div>
          <Suspense fallback={<SectionFallback />}><Discover /></Suspense>

          <SectionDivider type="curve" topColor="#FAF7F2" bottomColor="#FAF9F6" height={50} />
          <Suspense fallback={<SectionFallback />}><Testimonials /></Suspense>

          <SectionDivider type="gradient" topColor="#FAF9F6" bottomColor="#F5EEEC" accentColor="#E8BD63" accentHeight={8} height={50} />
          <Suspense fallback={<SectionFallback />}><NewsSection /></Suspense>

          <SectionDivider type="wave" topColor="#F5EEEC" bottomColor="#FAFAF8" height={30} />
          <Suspense fallback={<SectionFallback />}><NoticeBoard /></Suspense>
        </main>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="text-[#3E3A36] bg-[#EFE7DF] font-sans" style={{ overflowX: "clip" }}>
      <style>{`
        :root {
          /* Trident Custom Primary Palette */
          --primary-rose: #2C3A8C;
          --secondary-beige: #A59381;
          --bg-light: #EFE7DF;
          --bg-soft: #F5EEEC;
          --text-dark: #3E3A36;
        }

        html { scroll-behavior: auto; /* Lenis handles smooth scroll */ }
        body { font-family: 'Inter', 'DM Sans', sans-serif; background-color: var(--bg-light); color: var(--text-dark); font-weight: 400; font-size: 18px; line-height: 1.7; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        .serif { font-family: 'Source Serif 4', Georgia, serif; font-weight: 700; line-height: 1.08; letter-spacing: -0.025em; }
        h1, h2, h3 { font-weight: 700; letter-spacing: -0.02em; }
        p { font-size: 18px; line-height: 1.75; font-weight: 400; letter-spacing: -0.01em; }
        
        .bg-primary { background-color: var(--primary-rose) !important; color: white; }
        .bg-secondary { background-color: var(--secondary-beige) !important; color: white; }
        .bg-soft { background-color: var(--bg-soft) !important; }
        .text-primary { color: var(--primary-rose) !important; }
        .text-secondary { color: var(--secondary-beige) !important; }
        .border-primary { border-color: var(--primary-rose) !important; }
        
        /* High-End Buttons */
        .btn-rose { 
          background-color: var(--primary-rose); 
          color: white; 
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
          text-transform: uppercase;
          letter-spacing: 0.1em;
          box-shadow: 0 10px 30px -10px rgba(27, 77, 142, 0.6);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .btn-rose::before {
          content: ''; position: absolute; top: 0; left: 0; width: 0%; height: 100%;
          background: rgba(255,255,255,0.1); z-index: -1; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-rose:hover::before { width: 100%; }
        .btn-rose:hover { transform: translateY(-2px); box-shadow: 0 12px 30px -10px rgba(27, 77, 142, 0.7); }
        
        .btn-outline-rose { border: 1.5px solid var(--primary-rose); color: var(--primary-rose); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); letter-spacing: 0.1em;}
        .btn-outline-rose:hover { background-color: var(--primary-rose); color: white; transform: translateY(-2px); box-shadow: 0 10px 20px -10px rgba(27, 77, 142, 0.4);}
        
        .btn-outline-white { border: 1.5px solid rgba(255,255,255,0.8); color: white; transition: all 0.4s ease; backdrop-filter: blur(4px); letter-spacing: 0.1em;}
        .btn-outline-white:hover { background-color: white; color: var(--primary-rose) !important; transform: translateY(-2px);}
        
        .rose-rule { display: block; width: 80px; height: 3px; background-color: #EAB308; margin-bottom: 1.5rem; transition: width 0.6s ease; }
        .group:hover .rose-rule { width: 120px; }
        
        /* Navbar Links */
        .utility-link { transition: color 0.3s ease; }
        .utility-link:hover { color: var(--bg-soft) !important; }
        .nav-link { font-weight: 600; font-size: 0.95rem; transition: color 0.3s ease; padding-bottom: 4px; position:relative;}
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: var(--primary-rose); transition: width 0.3s ease; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .nav-link.active, .nav-link:hover { color: var(--primary-rose) !important; }
        
        /* Mega Menu Dropdown */
        .dropdown { box-shadow: 0 20px 50px -20px rgba(15, 23, 42, 0.2); border-top: 3px solid var(--primary-rose); border-radius: 0 0 12px 12px; }
        .dropdown a { transition: all 0.3s ease; position: relative; }
        .dropdown a:hover { background-color: var(--bg-soft); color: var(--primary-rose) !important; padding-left: 1.75rem; }
        .dropdown a::before { content: '→'; position: absolute; left: 1rem; opacity: 0; transform: translateX(-10px); transition: all 0.3s ease; color: var(--primary-rose); }
        .dropdown a:hover::before { opacity: 1; transform: translateX(0); }
        
        /* Premium Card Hover State */
        .card-hover { transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); border: 1px solid rgba(232, 167, 35, 0.2); background: #ffffff; }
        .card-hover:hover { 
          border-color: var(--primary-rose) !important; 
          box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.1); 
          transform: translateY(-4px);
        }
        
        /* Soft Ticker */
        .ticker-wrap { overflow: hidden; background-color: var(--bg-soft) !important; border-top: 1px solid rgba(15, 23, 42, 0.1); border-bottom: 1px solid rgba(15, 23, 42, 0.1); }
        .ticker-inner { display: inline-flex; white-space: nowrap; animation: ticker 50s linear infinite; }
        .ticker-inner span { color: var(--text-dark) !important; }
        @keyframes ticker { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } }

        /* Scroll caret bounce (GPU-friendly, no flicker) */
        @keyframes scrollBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
        .scroll-caret { animation: scrollBounce 2s ease-in-out infinite; }

        /* Custom Scrollbar for elegance */
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: var(--bg-soft); }
        ::-webkit-scrollbar-thumb { background: var(--secondary-beige); border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--primary-rose); }
        
        .custom-scrollbar-mini::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar-mini::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar-mini::-webkit-scrollbar-thumb { background: var(--secondary-beige); border-radius: 4px; }
      `}</style>

      {/* Subtle noise grain overlay */}
      <NoiseOverlay opacity={0.018} />
      {/* Cursor-following radial glow */}
      <CursorGlow color="rgba(44, 58, 140, 0.05)" size={600} />

      <Header />
      <Home />
      <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
    </div>
  );
}