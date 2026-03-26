import logo from "../assets/logo.png";
import { Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1817] text-[#EFE7DF]/80 pt-24 pb-12 relative overflow-hidden font-sans border-t-4 border-[#E5AA3E]">
      
      {/* Skewed Background Accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-white/[0.02] -skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Subscription block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-16 mb-24 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#E5AA3E]"></div>
          {/* Asymmetric corner accents */}
          <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-[#E5AA3E]/10 hidden md:block" />
          <div className="absolute bottom-4 left-16 w-8 h-8 border-b border-l border-[#8B6E66]/10 hidden md:block" />
          
          <div className="lg:col-span-7">
            <h3 className="font-serif text-4xl font-black text-white mb-6 leading-tight">
              Connect with Odisha's <br/>Most Progressive <span className="text-[#E5AA3E]">Network.</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Join 5,000+ graduates and industry experts. Subscribe to receive high-impact insights directly from the Trident academic core.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
             <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your academic email" 
                  className="bg-white/5 border border-white/10 text-white placeholder-white/30 px-8 py-5 rounded-xl flex-grow outline-none focus:border-[#E5AA3E] transition-all"
                />
                <button className="bg-[#E5AA3E] hover:bg-[#c99535] text-[#1A1817] px-10 py-5 rounded-xl font-black text-[12px] uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                  JOIN NOW <ArrowRight size={18} />
                </button>
             </div>
             <p className="mt-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">NO SPAM. ONLY UPDATES THAT MATTER.</p>
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
                <div className="text-[10px] font-bold text-[#8B6E66] tracking-[.3em] uppercase mt-2">Technical Core</div>
              </div>
            </div>
            
            <p className="text-gray-400 text-[16px] leading-[1.8] mb-10">
              Odisha's top-ranked technology and management powerhouse. We advance the standards of higher education through rigorous discipline and futuristic innovation.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#8B6E66]"><MapPin size={20}/></div>
                <div className="text-sm font-medium leading-relaxed">Chandrasekharpur, Bhubaneswar, <br/>Odisha – 751024, India</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#8B6E66]"><Phone size={20}/></div>
                <div className="text-sm font-bold">+91-674-2742547</div>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { h:"Academics", ls:[
                { t:"BPUT Regulations", h:"https://academics-tat.tekkzy.com/bput" },
                { t:"Engineering", h:"https://academics-tat.tekkzy.com/departments" },
                { t:"Postgraduate", h:"#" },
                { t:"Research Labs", h:"#" },
              ] },
              { h:"Campus", ls:[
                { t:"Digital Space", h:"#" },
                { t:"Library Portal", h:"#" },
                { t:"Career Cell", h:"#" },
                { t:"Events", h:"#" },
              ] },
              { h:"Quick Links", ls:[
                { t:"Apply Online", h:"#" },
                { t:"Alumni Cell", h:"#" },
                { t:"Privacy Policy", h:"#" },
                { t:"Contact", h:"#" },
              ] },
            ].map((col) => (
              <div key={col.h}>
                <div className="relative mb-10">
                   <div className="absolute -left-4 top-0 w-8 h-8 bg-[#8B6E66]/10 -skew-x-12"></div>
                   <h5 className="font-serif text-white font-black text-[15px] uppercase tracking-widest relative z-10">{col.h}</h5>
                </div>
                <ul className="space-y-6">
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
          <div className="text-[11px] font-black uppercase tracking-[.2em] text-gray-600">
            © 2026 TRIDENT ACADEMY. ALL RIGHTS SECURED.
          </div>
          
          <div className="flex items-center gap-6">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
}
