import logo from "../assets/logo.png";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1817] text-[#EFE7DF]/80 pt-24 pb-12 relative overflow-hidden font-sans border-t-4 border-[#E5AA3E]">
      
      {/* Skewed Background Accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-white/[0.02] -skew-x-12 translate-x-20 pointer-events-none"></div>

      {/* Subtle Background Logo Watermark */}
      <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] flex items-end justify-end">
        <img src={logo} alt="" className="w-[400px] h-[400px] object-contain transform translate-y-16 translate-x-16" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Subscription block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-16 mb-24 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#E5AA3E]"></div>
          {/* Asymmetric corner accents */}
          <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-[#E5AA3E]/10 hidden md:block" />
          <div className="absolute bottom-4 left-16 w-8 h-8 border-b border-l border-[#8B6E66]/10 hidden md:block" />
          
          <div className="lg:col-span-7">
            <h3 className="font-serif text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Stay informed, <br/>stay <span className="text-[#E5AA3E]">ahead.</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Subscribe to the official Trident Newsletter for updates on research, events, and campus developments.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
             <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="bg-white/5 border border-white/10 text-white placeholder-white/30 px-8 py-5 rounded-xl flex-grow outline-none focus:border-[#E5AA3E] transition-all"
                />
                <button className="bg-[#E5AA3E] hover:bg-[#c99535] text-[#1A1817] px-10 py-5 rounded-xl font-black text-[12px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 whitespace-nowrap">
                  Subscribe <ArrowRight size={18} />
                </button>
             </div>
             <p className="mt-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">No spam. Only updates that matter.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-5 mb-10">
              <img src={logo} alt="TAT Logo" className="w-[64px] h-[64px] object-contain" />
              <div className="h-12 w-[1px] bg-white/10 mx-2"></div>
              <div className="flex flex-col justify-center">
                <div className="font-serif text-[28px] text-white leading-none font-black uppercase">Trident</div>
                <div className="text-[10px] font-bold text-[#8B6E66] tracking-[.3em] uppercase mt-2">Academy of Technology</div>
              </div>
            </div>
            
            <p className="text-gray-400 text-[16px] leading-[1.8] mb-10">
              Empowering the next generation of global leaders through world-class technical education, innovative research, and an unwavering commitment to excellence.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              <a href="/contact" className="flex items-start gap-4 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#8B6E66] flex-shrink-0"><MapPin size={20}/></div>
                <div className="text-sm font-medium leading-relaxed">F2/A, Chandaka Industrial Estate,<br/>In front of Infocity, Bhubaneswar,<br/>Odisha, Pin: 751024, India</div>
              </a>
              <a href="tel:+919861191195" className="flex items-center gap-4 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#8B6E66]"><Phone size={20}/></div>
                <div className="text-sm font-bold">+91 98611 91195</div>
              </a>
              <a href="mailto:info@trident.ac.in" className="flex items-center gap-4 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#8B6E66]"><Mail size={20}/></div>
                <div className="text-sm font-bold">info@trident.ac.in</div>
              </a>
            </div>
          </div>


          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { h:"Academics", ls:[
                { t:"Undergraduate Studies", h:"https://academics-tat.tekkzy.com/departments-of-engineering/" },
                { t:"Postgraduate Studies", h:"https://academics-tat.tekkzy.com/" },
                { t:"Doctoral Programs", h:"https://academics-tat.tekkzy.com/" },
                { t:"Research Centers", h:"https://research-tat.tekkzy.com/" },
                { t:"Academic Calendar", h:"https://academics-tat.tekkzy.com/" },
              ] },
              { h:"Campus Life", ls:[
                { t:"Student Hostels", h:"https://sipitridentcampuslife.netlify.app/" },
                { t:"Clubs & Societies", h:"https://sipitridentactivity.netlify.app/" },
                { t:"Sports & Recreation", h:"https://sipitridentcampuslife.netlify.app/" },
                { t:"Health & Wellness", h:"https://sipitridentcampuslife.netlify.app/" },
                { t:"Campus Safety", h:"https://sipitridentcampuslife.netlify.app/" },
              ] },
              { h:"Resources", ls:[
                { t:"Admissions Portal", h:"https://admissions-tat.tekkzy.com" },
                { t:"Alumni Network", h:"https://alumni-tat.tekkzy.com/" },
                { t:"Career Placements", h:"https://placements-tat.tekkzy.com" },
                { t:"NIRF Data", h:"https://academics-tat.tekkzy.com/" },
                { t:"Tenders & Notices", h:"https://tat.tekkzy.com/" },
              ] },
            ].map((col) => (
              <div key={col.h}>
                <div className="relative mb-10">
                   <div className="absolute -left-4 top-0 w-8 h-8 bg-[#8B6E66]/10 -skew-x-12"></div>
                   <h5 className="font-serif text-white font-black text-[15px] uppercase tracking-widest relative z-10">{col.h}</h5>
                </div>
                <ul className="space-y-5">
                  {col.ls.map((link) => (
                    <li key={link.t}>
                      <a href={link.h} className="text-[14px] font-bold text-gray-500 hover:text-[#E5AA3E] transition-all flex items-center gap-3 group">
                        <span className="w-0 h-[1px] bg-[#E5AA3E] group-hover:w-4 transition-all duration-300" />
                        {link.t}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
            <span className="text-[11px] font-black uppercase tracking-[.2em] text-gray-600">
              © 2026 Trident Academy of Technology. All rights reserved.
            </span>
            <div className="flex gap-4 text-[11px] font-bold text-gray-600">
               {["Privacy Policy", "Disclaimer", "Terms of Use"].map(l=>(
                 <a key={l} href="https://tat.tekkzy.com/" className="hover:text-[#E5AA3E] transition-colors uppercase tracking-wider">{l}</a>
               ))}
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="https://tat.tekkzy.com/" className="text-gray-500 hover:text-[#E5AA3E] transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Built by credit */}
        <div className="text-center mt-8 pt-6 border-t border-white/5">
          <span className="text-[11px] font-medium text-gray-600 tracking-wider">
            Crafted with AI by <a href="https://tekkzy.com" className="text-gray-400 hover:text-[#E5AA3E] transition-colors font-bold">Tekkzy</a> — AI-Powered Intelligent Cloud Solutions
          </span>
        </div>
        
      </div>
    </footer>
  );
}
