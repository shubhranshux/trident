import { FadeInUp } from "../utils/animations";
import { NEWS } from "../data/constants";
import { ArrowRight, Calendar, ArrowUpRight } from "lucide-react";
import newsImg from "../assets/indian_campus_quad.png";
import infoImg from "../assets/indian_business_presentation.png";

export default function NewsSection() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-28 relative bg-bg-light z-10">
      
      {/* Decorative BG element */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-secondary opacity-5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* News Column */}
        <div className="lg:col-span-8">
          <FadeInUp>
            <span className="rose-rule"></span>
            <div className="flex justify-between items-end mb-10">
               <h2 className="serif text-4xl md:text-5xl font-black text-[#3E3A36]">Campus Chronicle</h2>
               <a href="#" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3E3A36]/60 hover:text-primary transition-colors hover:translate-x-1 transform duration-300">
                 View Archive <ArrowRight size={14} />
               </a>
            </div>
          </FadeInUp>
          
          {/* Featured News Graphic */}
          <FadeInUp delay={200} duration={1000}>
            <div className="mb-12 rounded-[24px] overflow-hidden shadow-[0_20px_50px_-10px_rgba(62,58,54,0.15)] relative group cursor-pointer block border border-transparent hover:border-primary/20 transition-all duration-500">
              <img src={newsImg} alt="Featured Campus News" className="w-full h-[400px] object-cover transform group-hover:scale-[1.03] transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E3A36]/95 via-[#3E3A36]/40 to-transparent"></div>
              
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-translate-y-1">
                <ArrowUpRight size={20} />
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <span className="inline-block bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 shadow-md bg-opacity-90 backdrop-blur-sm">Featured Headline</span>
                <h3 className="serif text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-md group-hover:text-bg-light transition-colors">Campus Life Flourishes in the Autumn Semester</h3>
                <p className="text-white/70 mt-3 font-medium text-sm flex items-center gap-2.5">
                  <Calendar size={14}/> October 24, 2025
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* List items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NEWS.slice(0, 4).map((item, i) => (
              <FadeInUp key={item.title} delay={100 + (i * 100)}>
                <article className="group cursor-pointer block p-6 rounded-[20px] hover:bg-white hover:shadow-[0_15px_30px_-5px_rgba(62,58,54,0.08)] transition-all duration-500 border border-transparent hover:border-soft h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-soft text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">{item.cat}</span>
                      <span className="text-[11px] font-bold text-[#3E3A36]/40 uppercase flex items-center gap-1.5"><Calendar size={12}/> {item.date}</span>
                    </div>
                    <h3 className="serif text-xl font-bold text-[#3E3A36] group-hover:text-primary leading-[1.4] mb-4 transition-colors">{item.title}</h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-soft flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                     <ArrowUpRight size={14} />
                  </div>
                </article>
              </FadeInUp>
            ))}
          </div>

          <a href="#" className="md:hidden flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3E3A36]/60 hover:text-primary transition-colors mt-10">
            View Archive <ArrowRight size={14} />
          </a>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 space-y-10 lg:pt-20">
          
          {/* Action Box */}
          <FadeInUp delay={300}>
            <div className="bg-[#3E3A36] rounded-[24px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary rounded-bl-full opacity-30 -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-700"></div>
              
              <h3 className="serif text-3xl font-bold mb-8 relative z-10 text-bg-light">Student Portals</h3>
              <ul className="space-y-2 relative z-10">
                {["Academic Calendar","Exam Schedule","Fee Payment","Hostel Application","Library Web OPAC"].map(l => (
                  <li key={l}>
                    <a href="#" className="flex items-center justify-between font-semibold text-[14px] text-bg-light/80 hover:text-white py-3 border-b border-white/10 group/link transition-all hover:pl-2">
                      <span>{l}</span>
                      <ArrowRight size={14} className="text-secondary opacity-0 group-hover/link:opacity-100 transition-opacity transform -translate-x-2 group-hover/link:translate-x-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>

          {/* Featured Sidebar Graphic */}
          <FadeInUp delay={500}>
             <div className="rounded-[24px] overflow-hidden shadow-xl border border-soft group cursor-pointer bg-white relative">
                <div className="overflow-hidden h-48 relative">
                  <img src={infoImg} alt="Business Seminars" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                   <div className="w-10 h-1 bg-secondary mb-5"></div>
                   <h3 className="serif text-2xl font-bold text-[#3E3A36] mb-3 group-hover:text-primary transition-colors">Executive Seminars</h3>
                   <p className="text-[13px] text-[#3E3A36]/70 font-medium mb-6 leading-relaxed">Join our exclusive monthly series hosted by top alumni leaders and industry veterans.</p>
                   <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#3E3A36] flex items-center gap-2 group-hover:text-primary transition-colors">
                     Register Now <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                   </a>
                </div>
             </div>
          </FadeInUp>

        </div>
      </div>
    </main>
  );
}
