import { FadeInUp, ScaleReveal } from "../utils/animations";
import aboutImg1 from "../assets/indian_campus_library.png";
import aboutImg2 from "../assets/indian_engineering_lab.png";
import { Award, BookOpen, Map, Users } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { icon: <Award size={24}/>, v:"NAAC 'A'",   l:"Grade Accredited" },
    { icon: <BookOpen size={24}/>, v:"NBA",        l:"Accredited Programs" },
    { icon: <Users size={24}/>, v:"1200+",      l:"Research Papers" },
    { icon: <Map size={24}/>, v:"200 Acres",  l:"Green Campus" },
  ];

  return (
    <section className="py-28 bg-[#EFE7DF] relative overflow-hidden transition-transform duration-700">
      {/* Decorative Blur blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary opacity-10 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Images Grid with Scale Reveals */}
          <div className="relative h-[600px]">
            <ScaleReveal duration={1200} className="absolute top-0 left-0 w-4/5 h-[450px] z-10">
              <img src={aboutImg1} alt="Students Studying" className="w-full h-full object-cover rounded-3xl shadow-[0_30px_60px_-15px_rgba(62,58,54,0.3)] border-4 border-white bg-soft" />
            </ScaleReveal>
            <ScaleReveal delay={300} duration={1200} className="absolute bottom-0 right-0 w-3/5 h-[350px] z-20">
              <img src={aboutImg2} alt="Engineering Lab" className="w-full h-full object-cover rounded-3xl shadow-[0_30px_60px_-15px_rgba(139,110,102,0.4)] border-8 border-[#F5EEEC]" />
            </ScaleReveal>
            
            {/* Floating Badge */}
            <div className="absolute top-1/2 -left-8 z-30">
              <FadeInUp delay={600}>
                <div className="bg-white p-6 rounded-2xl shadow-2xl border border-soft max-w-[200px]">
                  <div className="text-secondary mb-2"><Award size={32} /></div>
                  <div className="font-bold text-lg text-[#3E3A36]">20+ Years</div>
                  <div className="text-sm font-semibold text-secondary">of Academic Legacy</div>
                </div>
              </FadeInUp>
            </div>
          </div>

          {/* About Content */}
          <div>
            <FadeInUp>
              <span className="rose-rule"></span>
              <h2 className="serif text-4xl md:text-5xl font-bold text-[#3E3A36] mb-8 leading-[1.15]">
                Built on a foundation of <span className="text-primary italic">academic excellence.</span>
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-[#3E3A36]/80 leading-relaxed text-lg mb-10 font-medium">
                Founded in 2005 as a unit of the Dinabandhu Foundation, Trident Academy of Technology is one of India's leading private technical institutions. Affiliated with BPUT and approved by AICTE, TAT offers UG, PG, and doctoral programs across engineering and management disciplines, preparing students for absolute global success.
              </p>
            </FadeInUp>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((f, i) => (
                <FadeInUp key={f.l} delay={300 + (i * 100)}>
                  <div className="relative rounded-3xl overflow-hidden group h-[200px] shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer">
                    {/* Background Images based on index */}
                    <img src={
                      i === 0 ? aboutImg1 : 
                      i === 1 ? aboutImg2 : 
                      i === 2 ? aboutImg1 : aboutImg2
                    } alt={f.l} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-20 group-hover:opacity-40" />
                    <div className="absolute inset-0 bg-[#3E3A36]/80 group-hover:bg-[#3E3A36]/60 transition-colors duration-500"></div>

                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="text-secondary group-hover:text-[#EFE7DF] transition-colors mb-auto transform group-hover:scale-110 origin-top-left duration-500">{f.icon}</div>
                      <div className="serif text-3xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform">{f.v}</div>
                      <div className="text-[11px] text-white/60 uppercase tracking-widest font-bold group-hover:text-white/80 transition-colors">{f.l}</div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
            
            <FadeInUp delay={700}>
              <button className="mt-12 group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#3E3A36] hover:text-primary transition-colors">
                <span className="w-12 h-[2px] bg-secondary group-hover:w-16 group-hover:bg-primary transition-all"></span>
                Read Our Full Story
              </button>
            </FadeInUp>
          </div>
          
        </div>
      </div>
    </section>
  );
}
