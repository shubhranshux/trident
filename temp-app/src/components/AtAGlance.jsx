import { FadeInUp } from "../utils/animations";
import { Users, Award, Briefcase, Globe } from "lucide-react";

export default function AtAGlance() {
  const stats = [
    { label: "Students", val: "12,000+", icon: <Users size={32} /> },
    { label: "Faculty", val: "850+", icon: <Award size={32} /> },
    { label: "Partner Universities", val: "45", icon: <Globe size={32} /> },
    { label: "Placement Rate", val: "94%", icon: <Briefcase size={32} /> },
  ];

  return (
    <section className="bg-primary py-28 relative overflow-hidden text-white">
      {/* Abstract Grid Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-pulse pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/3">
            <FadeInUp>
              <h2 className="serif text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                Trident,<br/> <span className="text-secondary italic">At a Glance.</span>
              </h2>
              <p className="text-white/80 text-lg font-medium leading-relaxed mb-8">
                A legacy of excellence defined not just by our history, but by the measurable impact of our community across the globe.
              </p>
              <a href="https://academics-tat.tekkzy.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors">
                View Institutional Report <span className="w-6 h-px bg-current ml-2"></span>
              </a>
            </FadeInUp>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-2 gap-x-8 gap-y-12">
            {stats.map((s, i) => (
              <FadeInUp key={s.label} delay={i * 150}>
                <div className="border-l-2 border-secondary/30 pl-8 group hover:border-secondary transition-colors duration-500">
                  <div className="text-secondary/50 mb-4 group-hover:text-white transition-colors duration-500 transform group-hover:scale-110 origin-left">
                    {s.icon}
                  </div>
                  <div className="serif text-5xl md:text-6xl font-black mb-2 text-white/90 group-hover:text-white transition-colors">{s.val}</div>
                  <div className="text-[13px] font-bold uppercase tracking-widest text-white/60 group-hover:text-secondary transition-colors">{s.label}</div>
                </div>
              </FadeInUp>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
