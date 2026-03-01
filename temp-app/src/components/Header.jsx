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
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Utility Bar */}
      <div className={"hidden lg:block bg-primary border-b border-primary/20 transition-all duration-500 " + (scrolled ? "max-h-0 overflow-hidden py-0 border-b-0" : "max-h-20 py-2.5")}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-[11px] font-semibold text-white/80 tracking-widest uppercase">
            Affiliated to BPUT &nbsp;<span className="text-secondary opacity-50">|</span>&nbsp; NAAC 'A' Accredited
          </span>
          <div className="flex gap-6 text-[11px] font-bold text-white/90 uppercase tracking-widest">
            <a href="#" className="flex items-center gap-1.5 utility-link hover:text-white"><Users size={12}/> Alumni</a>
          </div>
        </div>
      </div>

      <header className={"transition-all duration-500 bg-white " + (scrolled ? "shadow-[0_4px_20px_-4px_rgba(62,58,54,0.12)] py-3" : "py-5")}>
        <div className="mx-auto px-6 xl:px-12 flex items-center justify-between">
            
          {/* Logo Lockup */}
          <a href="#" className="flex items-center gap-3.5 group cursor-pointer">
            <img src={logo} alt="TAT Logo" className="w-12 h-12 md:w-[52px] md:h-[52px] object-contain flex-shrink-0 drop-shadow-sm" />
            <div className="hidden sm:flex flex-col justify-center">
              <div className="serif text-[22px] md:text-[24px] font-black text-[#3E3A36] leading-none tracking-[0.04em] uppercase">Trident</div>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#8B6E66] to-transparent my-[3px]"></div>
              <div className="text-[9px] md:text-[10px] font-semibold text-[#8B6E66] tracking-[0.22em] uppercase leading-none">Academy of Technology</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map(item => (
                <li key={item.label} className="relative group"
                  onMouseEnter={() => setActiveNav(item.label)}
                  onMouseLeave={() => setActiveNav(null)}>
                  <div className={"nav-link flex items-center gap-1 text-[14px] uppercase tracking-[0.14em] cursor-pointer whitespace-nowrap font-extrabold " + (activeNav === item.label ? "text-primary active" : "text-[#3E3A36]")}>
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeNav === item.label ? 'rotate-180 text-primary' : 'text-secondary'}`}/>
                  </div>
                  
                  {/* Megamenu dropdown */}
                  <div className={`dropdown absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white min-w-[260px] z-50 transition-all duration-400 ${activeNav === item.label ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}>
                    <div className="p-2">
                      {item.sub.map((s, idx) => {
                        if (typeof s === 'string') {
                          return <a key={idx} href="#" className="block px-4 py-3 text-[14px] font-semibold text-[#3E3A36] rounded-md hover:bg-[#EFE7DF] hover:text-[#8B6E66] transition-colors">{s}</a>;
                        } else {
                          // Nested Dropdown
                          return (
                            <div key={idx} className="relative group/nested">
                              <div className="flex items-center justify-between px-4 py-3 text-[14px] font-semibold text-[#3E3A36] rounded-md hover:bg-[#EFE7DF] hover:text-[#8B6E66] transition-colors cursor-pointer group-hover/nested:bg-[#EFE7DF] group-hover/nested:text-[#8B6E66]">
                                {s.label}
                                <ChevronDown size={14} className="-rotate-90 text-black/40 group-hover/nested:text-[#8B6E66] transition-colors" />
                              </div>
                              <div className="absolute top-0 left-full ml-1 bg-white min-w-[340px] rounded-lg shadow-[0_10px_40px_-10px_rgba(62,58,54,0.15)] opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 transform -translate-x-2 group-hover/nested:translate-x-0 border border-[#EFE7DF]">
                                <div className="p-2 py-3 max-h-[60vh] overflow-y-auto custom-scrollbar-mini">
                                  {s.sub.map((subItem, subIdx) => (
                                    <a key={subIdx} href="#" className="block px-5 py-2.5 text-[14px] font-semibold text-[#3E3A36] rounded-md hover:bg-soft transition-colors leading-snug mb-1">{subItem}</a>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
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
            <a href="#" className="btn-rose text-[12px] font-bold px-7 py-3 rounded uppercase whitespace-nowrap">Apply Now</a>
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
                    {item.sub.map((s, idx) => {
                      if (typeof s === 'string') {
                        return <a key={idx} href="#" className="block py-2 text-[15px] font-semibold text-[#3E3A36]">{s}</a>;
                      } else {
                        // Mobile nested dropdown
                        return (
                          <div key={idx} className="py-2">
                            <div className="text-[15px] font-semibold text-primary mb-2 flex items-center justify-between pr-4">{s.label}</div>
                            <div className="pl-4 border-l-2 border-soft space-y-1">
                              {s.sub.map((subItem, subIdx) => (
                                <a key={subIdx} href="#" className="block py-1.5 text-[14px] font-medium text-[#3E3A36]/80">{subItem}</a>
                              ))}
                            </div>
                          </div>
                        );
                      }
                    })}
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
    </div>
  );
}
