import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Users, Menu, X, ChevronDown, FileText } from "lucide-react";
import { NAV_LINKS } from "../data/constants";
import logo from "../assets/logo.png";

const MANDATORY_LINKS = [
  { label: "AICTE Mandatory Disclosure", href: "#" },
  { label: "NIRF", href: "#" },
  { label: "Public Notice on Menace of Ragging", href: "#" },
  { label: "NBA Accreditation", href: "#" },
  { label: "NAAC Accreditation", href: "#" },
  { label: "Grievance Redressal", href: "#" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDisclosureOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Slim Utility Bar */}
      <div className={"hidden lg:block border-b border-white/5 transition-all duration-500 " + (scrolled ? "max-h-0 overflow-hidden py-0 border-b-0" : "max-h-20 py-1.5")} style={{ background: 'linear-gradient(135deg, #1a2660 0%, #2C3A8C 60%, #3a4aad 100%)' }}>
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.2em]">
            Approved by AICTE &nbsp;|&nbsp; Affiliated to BPUT &nbsp;|&nbsp; NAAC Accredited &nbsp;|&nbsp; NBA Accredited for 6 Programmes
          </span>
          <div className="flex items-center gap-3">
            {/* Mandatory Disclosures Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDisclosureOpen(!disclosureOpen)}
                className={"flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] px-5 py-2 rounded-lg whitespace-nowrap transition-all duration-400 " + (disclosureOpen
                  ? "bg-[#E8BD63] text-[#1a2660] shadow-[0_0_20px_rgba(232,189,99,0.4)]"
                  : "bg-gradient-to-r from-white/15 to-white/5 text-white border border-white/20 hover:border-[#E8BD63]/50 hover:shadow-[0_0_15px_rgba(232,189,99,0.2)]"
                )}
              >
                <FileText size={12} />
                Mandatory Disclosures
                <ChevronDown size={12} className={"transition-transform duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] " + (disclosureOpen ? "rotate-180" : "")} />
              </button>

              {/* Dropdown Panel */}
              <div
                className={"absolute top-full right-0 mt-3 w-80 rounded-2xl overflow-hidden transition-all origin-top-right " + (disclosureOpen ? "opacity-100 scale-100 translate-y-0 duration-400" : "opacity-0 scale-90 -translate-y-3 pointer-events-none duration-200")}
                style={{
                  background: '#ffffff',
                  boxShadow: disclosureOpen ? '0 25px 60px -12px rgba(15,23,42,0.3), 0 0 0 1px rgba(44,58,140,0.06)' : 'none',
                }}
              >
                {/* Top accent */}
                <div className="h-1 bg-gradient-to-r from-[#2C3A8C] via-[#E8BD63] to-[#2C3A8C]" />
                
                {/* Header */}
                <div className="px-6 pt-4 pb-3 border-b border-[#EFE7DF]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A59381]">Important Links</p>
                </div>

                <div className="py-2 px-2">
                  {MANDATORY_LINKS.map((link, i) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setDisclosureOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-[13px] font-semibold text-[#3E3A36] hover:bg-gradient-to-r hover:from-[#2C3A8C]/5 hover:to-transparent hover:text-[#2C3A8C] transition-all duration-300 group"
                      style={{
                        opacity: disclosureOpen ? 1 : 0,
                        transform: disclosureOpen ? 'translateX(0)' : 'translateX(-12px)',
                        transition: `opacity 300ms ease ${i * 50 + 100}ms, transform 300ms ease ${i * 50 + 100}ms, background 200ms ease, color 200ms ease`,
                      }}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#E8BD63] group-hover:bg-[#2C3A8C] group-hover:scale-125 transition-all duration-300 flex-shrink-0" />
                      <span className="flex-1">{link.label}</span>
                      <span className="text-[#2C3A8C]/0 group-hover:text-[#2C3A8C]/60 text-[11px] transition-all duration-300 transform translate-x-1 group-hover:translate-x-0">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="w-px h-5 bg-white/20" />

            {/* Alumni Portal */}
            <a href="#" className="flex items-center gap-1.5 text-[10px] font-bold text-[#E8BD63] uppercase tracking-widest hover:text-[#F0D080] transition-colors whitespace-nowrap">
              <Users size={11}/> Alumni
            </a>
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
                  <a href={item.href} className="nav-link text-[14px] uppercase tracking-[0.14em] cursor-pointer whitespace-nowrap font-extrabold text-[#3E3A36] hover:text-primary transition-colors text-decoration-none">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Elements */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="https://apply-now.tekkzy.com" className="btn-rose text-[12px] font-bold px-7 py-3 rounded uppercase whitespace-nowrap text-decoration-none">Apply Now</a>
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
              <a 
                key={item.label} 
                href={item.href} 
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
              </a>
            ))}
            <div 
              className={`pt-8 px-2 transition-all duration-700 transform ${
                mobileOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              }`} 
              style={{ transitionDelay: `${mobileOpen ? NAV_LINKS.length * 40 + 150 : 0}ms` }}
            >
              <a onClick={() => setMobileOpen(false)} href="https://apply-now.tekkzy.com" className="btn-rose block text-center text-[13px] tracking-widest font-extrabold px-6 py-4 rounded-xl shadow-[0_10px_30px_-10px_rgba(230,57,70,0.5)] text-decoration-none">
                START APPLICATION
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

