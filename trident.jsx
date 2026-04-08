import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBand from "./components/StatsBand";
import NewsSection from "./components/NewsSection";
import Programs from "./components/Programs";
import AboutSection from "./components/AboutSection";
import Placements from "./components/Placements";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="text-gray-800 overflow-x-hidden" style={{ fontFamily: "DM Sans, sans-serif" }}>
      <style>{`
        :root {
          --blush-lightest: #f5eeec;
          --blush-light: #e8d5d0;
          --blush-mid-light: #d4b5ae;
          --blush-mid: #b08880;
          --blush-base: #8b6e66;
          --blush-dark: #6a524c;
        }
        
        .bg-navy { background-color: var(--blush-mid) !important; }
        .bg-navy-dark { background-color: var(--blush-base) !important; }
        .text-navy { color: var(--blush-base) !important; }
        .text-gold { color: var(--blush-dark) !important; }
        .bg-yellow-400 { background-color: var(--blush-mid-light) !important; }
        
        .btn-gold { 
          background-color: var(--blush-base); 
          color: white; 
          transition: background 0.3s; 
        }
        .btn-gold:hover { background-color: var(--blush-dark); }
        
        .btn-navy { 
          background-color: var(--blush-mid); 
          color: white; 
          transition: background 0.3s; 
        }
        .btn-navy:hover { background-color: var(--blush-base); }
        
        .btn-outline-gold { 
          border: 1px solid var(--blush-base); 
          color: var(--blush-base); 
          transition: all 0.3s; 
        }
        .btn-outline-gold:hover { 
          background-color: var(--blush-base); 
          color: white; 
        }
        
        .btn-outline-white { 
          border: 1px solid white; 
          color: white; 
          transition: all 0.3s ease; 
        }
        .btn-outline-white:hover { 
          background-color: white; 
          color: var(--blush-base) !important; 
        }
        
        .tag-navy { 
          background-color: var(--blush-lightest); 
          color: var(--blush-base); 
          border: 1px solid var(--blush-light);
        }
        
        .gold-rule { 
          display: block; 
          width: 40px; 
          height: 3px; 
          background-color: var(--blush-mid); 
          margin-bottom: 1rem; 
        }
        
        .utility-link:hover { color: var(--blush-base) !important; }
        .nav-link.active { color: var(--blush-base) !important; }
        .dropdown a:hover { 
          background-color: var(--blush-lightest); 
          color: var(--blush-base) !important; 
        }
        
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { 
          border-color: var(--blush-mid-light) !important; 
          box-shadow: 0 4px 15px rgba(176,136,128,0.15); 
          transform: translateY(-2px);
        }
        
        /* Ticker Animation & Styling */
        .ticker-wrap {
          overflow: hidden;
          background-color: var(--blush-lightest) !important;
          border-color: var(--blush-light) !important;
        }
        .ticker-inner {
          display: inline-flex;
          white-space: nowrap;
          animation: ticker 30s linear infinite;
        }
        .ticker-inner span {
          color: var(--blush-base) !important;
        }
        .ticker-inner span span {
          background-color: var(--blush-mid) !important;
        }
        @keyframes ticker {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>

      <Header />
      <Hero />
      <StatsBand />
      <NewsSection />
      <Programs />
      <AboutSection />
      <Placements />
      <Footer />
    </div>
  );
}