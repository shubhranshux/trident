import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <div className={"hidden lg:block bg-primary border-b border-primary/20 transition-all duration-500 " + (scrolled ? "max-h-0 overflow-hidden py-0 border-b-0" : "max-h-20 py-2.5")}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-[11px] font-semibold text-white/80 tracking-widest uppercase">
            Affiliated to BPUT &nbsp;<span className="text-secondary opacity-50">|</span>&nbsp; NAAC 'A' Accredited
          </span>
          <div className="flex gap-6 text-[11px] font-bold text-white/90 uppercase tracking-widest">
            <a href="https://alumni-tat.tekkzy.com/" className="flex items-center gap-1.5 utility-link hover:text-white"><Users size={12}/> Alumni</a>
          </div>
        </div>
      </div>

      <header className={"relative transition-all duration-500 bg-white " + (scrolled ? "shadow-[0_4px_20px_-4px_rgba(15,23,42,0.12)] py-3" : "py-5")}>
        <div className="mx-auto px-6 xl:px-12 flex items-center justify-between">
            
          {/* Logo Lockup */}
          <Link to="/" className="flex items-center gap-3.5 group cursor-pointer text-decoration-none">
            <img src={logo} alt="TAT Logo" className="w-12 h-12 md:w-[52px] md:h-[52px] object-contain flex-shrink-0 drop-shadow-sm" />
            <div className="hidden sm:flex flex-col justify-center">
              <div className="serif text-[22px] md:text-[24px] font-black text-[#3E3A36] leading-none tracking-[0.04em] uppercase">Trident</div>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#1B4D8E] to-transparent my-[3px]"></div>
              <div className="text-[9px] md:text-[10px] font-semibold text-[#1B4D8E] tracking-[0.22em] uppercase leading-none">Academy of Technology</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {NAV_LINKS.map(item => (
                <li key={item.label}>
                  <Link to={item.href} className="nav-link text-[14px] uppercase tracking-[0.14em] cursor-pointer whitespace-nowrap font-extrabold text-[#3E3A36] hover:text-primary transition-colors text-decoration-none">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Elements */}
          <div className="hidden lg:flex items-center gap-5">
            <Link to="/apply" className="btn-rose text-[12px] font-bold px-7 py-3 rounded uppercase whitespace-nowrap text-decoration-none">Apply Now</Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-primary p-2 bg-soft rounded-lg hover:bg-primary/10 transition-colors active:scale-95 z-50 relative" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-[0_30px_60px_-15px_rgba(15,23,42,0.2)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top overflow-hidden border-t border-primary/10 ${
            mobileOpen ? "max-h-[85vh] opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none"
          }`}
        >
          <div className="px-6 flex flex-col h-full overflow-y-auto pb-4">
            {NAV_LINKS.map((item, i) => (
              <Link 
                key={item.label} 
                to={item.href} 
                onClick={() => setMobileOpen(false)}
                className={`block py-3.5 text-[15px] font-extrabold text-[#3E3A36] uppercase tracking-[0.14em] hover:text-primary hover:bg-soft/50 rounded-lg px-3 transition-all duration-500 transform text-decoration-none ${
                  mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ 
                  transitionDelay: `${mobileOpen ? i * 40 + 100 : 0}ms`, 
                  borderBottom: i !== NAV_LINKS.length - 1 ? "1px solid rgba(27,77,142,0.1)" : "none" 
                }}
              >
                {item.label}
              </Link>
            ))}
            <div 
              className={`pt-8 px-2 transition-all duration-700 transform ${
                mobileOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              }`} 
              style={{ transitionDelay: `${mobileOpen ? NAV_LINKS.length * 40 + 150 : 0}ms` }}
            >
              <Link onClick={() => setMobileOpen(false)} to="/apply" className="btn-rose block text-center text-[13px] tracking-widest font-extrabold px-6 py-4 rounded-xl shadow-[0_10px_30px_-10px_rgba(230,57,70,0.5)] text-decoration-none">
                START APPLICATION
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

