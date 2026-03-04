import logo from "../assets/logo.png";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { text: "CISCO thingQbator", href: "https://tat.tekkzy.com/" },
    { text: "Internship", href: "https://tat.tekkzy.com/" },
    { text: "Learning Resources", href: "https://tat.tekkzy.com/" },
    { text: "Hostels", href: "https://tat.tekkzy.com/" },
    { text: "Student Clubs", href: "https://tat.tekkzy.com/" },
    { text: "Sitemap", href: "https://tat.tekkzy.com/" },
    { text: "Placement Statistics", href: "https://tat.tekkzy.com/" },
    { text: "IQAC", href: "https://tat.tekkzy.com/" },
    { text: "IEDC Cell", href: "https://tat.tekkzy.com/" },
  ];

  return (
    <footer className="bg-[#3E3A36] text-[#EFE7DF]/90 pt-24 pb-8 relative overflow-hidden font-sans">
      
      {/* Decorative Brand Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[pulse_5s_ease-in-out_infinite]"></div>
      
      {/* Subtle Background Logo Watermark */}
      <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] flex items-end justify-end">
        <img src={logo} alt="" className="w-[400px] h-[400px] object-contain transform translate-y-16 translate-x-16" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Pre-footer subscription block */}
        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 mb-20 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="max-w-xl relative z-10">
            <h3 className="serif text-3xl font-bold text-white mb-4">Stay informed, stay ahead.</h3>
            <p className="text-bg-light/70 font-medium">Subscribe to the official Trident Newsletter for updates on research, events, and campus developments.</p>
          </div>
          <div className="w-full lg:w-auto flex-1 max-w-md relative z-10 font-sans flex flex-col sm:flex-row gap-3">
             <input type="email" placeholder="Email address..." className="bg-black/20 border border-white/10 text-white placeholder-white/40 px-6 py-4 rounded-xl flex-1 outline-none focus:border-primary/50 focus:bg-black/30 transition-all font-medium text-sm" />
             <button className="bg-primary hover:bg-white text-white hover:text-primary px-8 py-4 rounded-xl font-bold text-[13px] uppercase tracking-widest transition-all duration-300 whitespace-nowrap shadow-lg flex items-center justify-center gap-2 group/btn">
                Subscribe <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Info + About Us */}
          <div className="lg:col-span-5 lg:pr-8">
            <div className="flex items-center gap-3.5 mb-8">
              <img src={logo} alt="TAT Logo" className="w-[52px] h-[52px] object-contain flex-shrink-0 drop-shadow-sm" />
              <div className="flex flex-col justify-center">
                <div className="serif text-[22px] md:text-[24px] font-black leading-none tracking-[0.04em] uppercase text-white">Trident</div>
                <div className="w-full h-[1px] bg-gradient-to-r from-[#8B6E66] to-transparent my-[3px]"></div>
                <div className="text-[9px] md:text-[10px] font-semibold text-[#8B6E66] tracking-[0.22em] uppercase leading-none">Academy of Technology</div>
              </div>
            </div>

            <h5 className="serif text-white font-bold text-lg mb-6">About Us</h5>
            
            <p className="text-bg-light/60 text-[15px] leading-[1.85] mb-6 font-medium">
              Trident Academy of Technology, a name that has become a brand in the field of technical education, is today synonymous with excellence. Trident is where Education meets Enthusiasm. Within just a few years of its establishment, Trident group of institutions has built an image amongst the aspiring masses which is worth the quality of education it imparts.
            </p>
            
            <div className="space-y-4 text-sm font-medium">
              <a href="https://contactus-tat.tekkzy.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:text-white transition-colors group">
                <span className="mt-1 text-primary group-hover:scale-110 transition-transform"><MapPin size={18}/></span>
                <span className="leading-snug">F-2, Chandaka Industrial Estate,<br/>In front of Infocity, Chandrasekharpur,<br/>Bhubaneswar, Odisha – 751024</span>
              </a>
              <a href="tel:06743530517" className="flex items-center gap-4 hover:text-white transition-colors group">
                <span className="text-primary group-hover:scale-110 transition-transform"><Phone size={18}/></span>
                0674-3530517, 9861191195
              </a>
              <a href="mailto:info@trident.ac.in" className="flex items-center gap-4 hover:text-white transition-colors group">
                <span className="text-primary group-hover:scale-110 transition-transform"><Mail size={18}/></span>
                info@trident.ac.in
              </a>
            </div>
          </div>


          {/* Quick Links - 2 column grid */}
          <div className="lg:col-span-4 lg:pl-8">
            <h5 className="serif text-white font-bold text-lg mb-8">Quick Links</h5>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {quickLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-bg-light/60 text-[14px] hover:text-primary hover:translate-x-1.5 transition-all flex items-center gap-2 group/link"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/30 group-hover/link:bg-primary transition-colors flex-shrink-0"></span>
                  <span className="whitespace-nowrap">{link.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div className="lg:col-span-3 lg:pl-4">
            <h5 className="serif text-white font-bold text-lg mb-8">Get In Touch</h5>
            <ul className="space-y-4">
              {[
                { text: "Learn about Trident", href: "https://about-tat.tekkzy.com/" },
                { text: "Explore Academics", href: "https://academics-tat.tekkzy.com/" },
                { text: "Discover Research", href: "https://research-tat.tekkzy.com/" },
                { text: "Admissions Portal", href: "https://admissions-tat.tekkzy.com" },
                { text: "Career Placements", href: "https://placements-tat.tekkzy.com" },
                { text: "Activities", href: "https://activities-tat.tekkzy.com" },
                { text: "Campus Life", href: "https://campuslife-tat.tekkzy.com" },
                { text: "Contact Us", href: "https://contactus-tat.tekkzy.com" },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="font-medium text-bg-light/60 text-[14px] hover:text-primary hover:translate-x-1.5 transition-all flex items-center gap-2 group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/30 group-hover/link:bg-primary transition-colors flex-shrink-0"></span>
                    <span className="whitespace-nowrap">{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[13px] font-medium text-bg-light/50 flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
            <span>© 2026 Trident Academy of Technology. All rights reserved.</span>
            <div className="flex gap-4">
               {["Privacy Policy", "Disclaimer", "Terms of Use"].map(l=>(
                 <a key={l} href="https://tat.tekkzy.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{l}</a>
               ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-bg-light/40 font-bold mr-2">Connect</span>
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="https://tat.tekkzy.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-bg-light/70 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Built by credit */}
        <div className="text-center mt-8 pt-6 border-t border-white/5">
          <span className="text-[11px] font-medium text-bg-light/30 tracking-wider">
            Crafted with AI by <a href="https://tekkzy.com" target="_blank" rel="noopener noreferrer" className="text-bg-light/50 hover:text-white transition-colors font-bold">Tekkzy</a> — AI-Powered Intelligent Cloud Solutions
          </span>
        </div>
        
      </div>
    </footer>
  );
}
