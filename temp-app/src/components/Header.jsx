import { useState, useEffect } from "react";
import { Mail, Monitor, Landmark, Users, MessageSquare, Search, Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import { NAV_LINKS } from "../data/constants";
import logo from "../assets/logo.png";

export default function Header() {
  const [activeNav, setActiveNav] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Utility Bar */}
      <div className="hidden lg:block bg-primary border-b border-primary/20 relative z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-2.5">
          <span className="text-[11px] font-semibold text-white/80 tracking-widest uppercase">
            Affiliated to BPUT &nbsp;<span className="text-secondary opacity-50">|</span>&nbsp; NAAC 'A' Accredited
          </span>
          <div className="flex gap-6 text-[11px] font-bold text-white/90 uppercase tracking-widest">
            <a href="#" className="flex items-center gap-1.5 utility-link hover:text-white"><Monitor size={12}/> ERP Portal</a>
            <a href="#" className="flex items-center gap-1.5 utility-link hover:text-white"><Users size={12}/> Alumni</a>
          </div>
        </div>
      </div>

      <header className={"sticky top-0 z-40 transition-all duration-500 " + (scrolled ? "bg-white/95 backdrop-blur-lg shadow-[0_10px_40px_-10px_rgba(62,58,54,0.1)] py-2" : "bg-white py-4")}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            
          {/* Logo Lockup */}
          <a href="#" className="flex items-center gap-4 group cursor-pointer">
            <div className="bg-soft p-1.5 rounded-xl border border-secondary/20 group-hover:bg-white transition-colors flex items-center justify-center">
              <img src={logo} alt="TAT Logo" className="w-10 h-10 md:w-12 md:h-12 min-w-[40px] min-h-[40px] md:min-w-[48px] md:min-h-[48px] object-contain flex-shrink-0 block" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="serif text-2xl font-black text-[#3E3A36] leading-none tracking-tight mt-1">Trident Academy</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map(item => (
                <li key={item.label} className="relative group"
                  onMouseEnter={() => setActiveNav(item.label)}
                  onMouseLeave={() => setActiveNav(null)}>
                  <div className={"nav-link flex items-center gap-1.5 text-[14px] uppercase tracking-widest cursor-pointer whitespace-nowrap " + (activeNav === item.label ? "text-primary active" : "text-[#3E3A36]")}>
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeNav === item.label ? 'rotate-180 text-primary' : 'text-secondary'}`}/>
                  </div>
                  
                  {/* Megamenu dropdown */}
                  <div className={`dropdown absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white min-w-[260px] z-50 transition-all duration-400 ${activeNav === item.label ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}>
                    <div className="p-3">
                      {item.sub.map(s => (
                        <a key={s} href="#" className="block px-5 py-3 text-[14px] font-semibold text-[#3E3A36] rounded-lg">{s}</a>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Elements */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center bg-soft border border-secondary/20 rounded-full px-4 py-2 gap-2 text-primary focus-within:border-primary focus-within:bg-white transition-all">
              <Search size={16} />
              <input placeholder="Search campus..." className="bg-transparent outline-none placeholder-secondary/80 w-32 text-[#3E3A36] text-[13px] font-bold" />
            </div>
            <a href="#" className="btn-rose text-[12px] font-bold px-7 py-3 rounded uppercase">Apply Now</a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-primary p-2 bg-soft rounded-lg" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-b border-primary/10 py-4 absolute w-full left-0 shadow-2xl overflow-y-auto max-h-[85vh] animate-in slide-in-from-top-4">
            <div className="px-6 space-y-6">
              {NAV_LINKS.map(item => (
                <div key={item.label}>
                  <div className="text-[13px] font-bold text-primary uppercase tracking-widest mb-3 flex items-center justify-between">
                    {item.label}
                    <ChevronDown size={14} className="text-secondary"/>
                  </div>
                  <div className="space-y-1 pl-3 border-l-2 border-soft">
                    {item.sub.map(s => (
                      <a key={s} href="#" className="block py-2 text-[15px] font-semibold text-[#3E3A36]">{s}</a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-6 border-t border-soft">
                <a href="#" className="btn-rose block text-center text-sm font-bold px-5 py-3.5 rounded">Start Application</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
