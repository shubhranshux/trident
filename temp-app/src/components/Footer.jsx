import logo from "../assets/logo.png";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3E3A36] text-[#EFE7DF]/90 pt-24 pb-8 relative overflow-hidden font-sans">
      
      {/* Decorative Brand Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[pulse_5s_ease-in-out_infinite]"></div>
      
      {/* Subtle Background Abstract overlay */}
      <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden pointer-events-none opacity-5 flex items-end justify-end">
        <div className="text-[400px] leading-none font-serif font-black transform translate-y-24 translate-x-20 text-white select-none relative z-0">
          T
        </div>
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


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 lg:pr-8">
            <div className="flex items-center gap-5 mb-8">
              <div className="bg-bg-light p-2.5 rounded-xl shadow-lg border-2 border-primary/20">
                <img src={logo} alt="TAT Logo" className="w-[52px] h-[52px] object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="serif text-2xl font-black leading-none tracking-tight text-white mt-1">Trident Academy</div>
              </div>
            </div>
            
            <p className="text-bg-light/60 text-[15px] leading-relaxed mb-8 font-medium">
              Empowering the next generation of global leaders through world-class technical education, innovative research, and an unwavering commitment to excellence.
            </p>
            
            <div className="space-y-4 text-sm font-medium">
              <a href="#" className="flex items-start gap-4 hover:text-white transition-colors group">
                <span className="mt-1 text-primary group-hover:scale-110 transition-transform"><MapPin size={18}/></span>
                <span className="leading-snug">F2/A, Chandaka Industrial Estate,<br/>Chandrasekharpur, Bhubaneswar,<br/>Odisha – 751024, India</span>
              </a>
              <a href="tel:+916742742547" className="flex items-center gap-4 hover:text-white transition-colors group">
                <span className="text-primary group-hover:scale-110 transition-transform"><Phone size={18}/></span>
                +91-674-2742547
              </a>
              <a href="mailto:info@tat.ac.in" className="flex items-center gap-4 hover:text-white transition-colors group">
                <span className="text-primary group-hover:scale-110 transition-transform"><Mail size={18}/></span>
                info@tat.ac.in
              </a>
            </div>
          </div>


          {/* Nav Links */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8 lg:pl-12">
            {[
              { h:"Academics", ls:["Undergraduate Studies","Postgraduate Studies","Doctoral Programs","Research Centers","Academic Calendar"] },
              { h:"Campus Life",    ls:["Student Hostels","Clubs & Societies","Sports & Recreation","Health & Wellness","Campus Safety"] },
              { h:"Resources", ls:["Admissions Portal","Alumni Network","Career Placements","NIRF Data","Tenders & Notices"] },
            ].map((col) => (
              <div key={col.h}>
                <h5 className="serif text-white font-bold text-lg mb-8">{col.h}</h5>
                <ul className="space-y-4">
                  {col.ls.map(l => (
                    <li key={l}>
                      <a href="#" className="font-medium text-bg-light/60 text-[14px] hover:text-primary hover:translate-x-1.5 transition-all flex items-center gap-2 group/link">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/30 group-hover/link:bg-primary transition-colors flex-shrink-0"></span>
                        <span className="whitespace-nowrap">{l}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[13px] font-medium text-bg-light/50 flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
            <span>© 2026 Trident Academy of Technology. All rights reserved.</span>
            <div className="flex gap-4">
               {["Privacy Policy", "Disclaimer", "Terms of Use"].map(l=>(
                 <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
               ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-bg-light/40 font-bold mr-2">Connect</span>
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-bg-light/70 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
}
