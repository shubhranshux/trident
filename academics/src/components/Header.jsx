import { useState, useEffect } from "react";
import { Users, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/constants";
import logo from "../assets/logo.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Utility Bar */}
      <div className={"hidden lg:block bg-[#8B6E66] transition-all duration-500 " + (scrolled ? "max-h-0 overflow-hidden py-0" : "max-h-20 py-3")}>
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 flex justify-between items-center text-white">
          <div className="text-[10px] font-black tracking-[.35em] uppercase flex items-center gap-4">
            <span className="opacity-70">AFFILIATED TO BPUT</span>
            <div className="w-1 h-1 rounded-full bg-white opacity-40"></div>
            <span className="opacity-70">NAAC 'A' ACCREDITED</span>
          </div>
          <div className="flex text-[10px] font-black uppercase tracking-[.3em]">
            <a href="https://alumni-tat.tekkzy.com/" className="flex items-center gap-2 hover:text-white/80 transition-colors">
               ALUMNI PORTAL
            </a>
          </div>
        </div>
      </div>

      <header className={"relative transition-all duration-500 bg-white " + (scrolled ? "shadow-[0_4px_30px_-10px_rgba(0,0,0,0.1)] py-4" : "py-7")}>
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 flex items-center justify-between">
            
          {/* Logo Lockup */}
          <a href="https://trident-academic.netlify.app/" className="flex items-center gap-5 group cursor-pointer">
            <img src={logo} alt="TAT Logo" className="w-[55px] h-[55px] md:w-[65px] md:h-[65px] object-contain flex-shrink-0 drop-shadow-sm" />
            <div className="hidden sm:flex flex-col justify-center border-l border-[#8B6E66]/20 pl-5">
              <div className="font-serif text-[26px] md:text-[30px] text-[#212529] leading-none tracking-tight font-black uppercase">Trident</div>
              <div className="text-[10px] font-black text-[#8B6E66] tracking-[.35em] uppercase mt-2">Academy of Technology</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {NAV_LINKS.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="nav-link text-[12px] uppercase tracking-[0.2em] cursor-pointer whitespace-nowrap font-black text-[#495057] hover:text-[#8B6E66] transition-colors relative group">
                    {item.label}
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#8B6E66] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Elements */}
          <div className="hidden lg:flex items-center">
            <a href="https://admissions-tat-tekkzy.netlify.app" className="bg-[#212529] hover:bg-[#8B6E66] text-white text-[12px] font-black px-10 py-4 rounded-xl uppercase tracking-[.2em] shadow-xl transition-all hover:-translate-y-1">
              Apply Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-[#8B6E66] p-2 bg-[#F5EEEC] rounded-lg hover:bg-[#8B6E66]/10 transition-colors active:scale-95 z-50 relative" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-[0_30px_60px_-15px_rgba(62,58,54,0.2)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top overflow-hidden border-t border-[#8B6E66]/10 ${
            mobileOpen ? "max-h-[85vh] opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none"
          }`}
        >
          <div className="px-6 flex flex-col h-full overflow-y-auto pb-4">
            {NAV_LINKS.map((item, i) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={() => setMobileOpen(false)}
                className={`block py-3.5 text-[14px] font-bold text-[#3E3A36] uppercase tracking-[0.14em] hover:text-[#8B6E66] hover:bg-[#F5EEEC]/50 rounded-lg px-3 transition-all duration-500 transform ${
                  mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ 
                  transitionDelay: `${mobileOpen ? i * 40 + 100 : 0}ms`, 
                  borderBottom: i !== NAV_LINKS.length - 1 ? "1px solid rgba(139,110,102,0.1)" : "none" 
                }}
              >
                {item.label}
              </a>
            ))}
            <div 
              className={`pt-8 px-2 transition-all duration-700 transform ${
                mobileOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              }`} 
              style={{ transitionDelay: `${mobileOpen ? NAV_LINKS.length * 40 + 150 : 0}ms` }}
            >
              <a href="https://admissions-tat-tekkzy.netlify.app" className="bg-[#8B6E66] text-white block text-center text-[13px] tracking-widest font-bold px-6 py-4 rounded-xl shadow-[0_10px_30px_-10px_rgba(139,110,102,0.5)] uppercase">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
