import { FadeInUp } from "../utils/animations";
import { ArrowRight } from "lucide-react";

import ugImg from "../assets/discover_graduation.jpg";
import ptImg from "../assets/discover_research_lab.jpg";
import campusLifeImg from "../assets/user-img-1.jpeg";

export default function Discover() {
  const cards = [
    {
      title: "Undergraduate",
      desc: "Lay the foundation for a transformative career with our rigorous bachelor's programs.",
      img: ugImg,
      link: "Explore UG Programs",
      href: "https://academics-tat.tekkzy.com/departments-of-engineering/",
      delay: 0,
      color: "brand-blue"
    },
    {
      title: "Research & Innovation",
      desc: "Join leading scholars in state-of-the-art labs addressing the world's most pressing challenges.",
      img: ptImg,
      link: "Discover Research",
      href: "https://research-tat.tekkzy.com/",
      delay: 200,
      color: "brand-red"
    },
    {
      title: "Campus Life",
      desc: "Experience a vibrant community with endless opportunities for personal growth and leadership.",
      img: campusLifeImg,
      link: "Life at Trident",
      href: "https://campuslife-tat.tekkzy.com/",
      delay: 400,
      color: "brand-green"
    }
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden z-30 shadow-[0_-20px_40px_rgba(62,58,54,0.05)] border-t border-soft/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeInUp>
            <h2 className="serif text-4xl md:text-5xl lg:text-6xl font-black text-[#3E3A36] mb-4 relative z-10 inline-block">
              <span className="absolute -top-2 -left-4 w-40 h-16 bg-soft transform -rotate-2 -z-10 rounded-sm"></span>
              Discover <span className="italic text-[#2C3A8C]">Trident.</span>
            </h2>
            <p className="text-[#3E3A36]/70 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
              A community of creators, thinkers, and leaders pushing the boundaries of what is possible.
            </p>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((c, i) => (
            <FadeInUp key={c.title} delay={c.delay}>
              <a href={c.href || "#"} className="group block h-[500px] rounded-2xl overflow-hidden relative shadow-[0_15px_30px_-5px_rgba(62,58,54,0.1)] hover:shadow-[0_25px_50px_-15px_rgba(139,110,102,0.3)] transition-all duration-700">
                 {/* Image */}
                 <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                 
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#3E3A36]/90 via-[#3E3A36]/40 to-transparent"></div>
                 <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-${c.color}/90 transition-opacity duration-700 mix-blend-multiply`}></div>

                 {/* Text Content */}
                 <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                    <h3 className="serif text-3xl font-bold text-white mb-3 group-hover:text-bg-light transition-colors drop-shadow-md">{c.title}</h3>
                    <p className="text-white/80 font-medium text-[15px] mb-6 leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">{c.desc}</p>
                    
                    <div className="flex items-center text-xs font-bold text-white uppercase tracking-widest gap-2">
                       <span className="w-8 h-[2px] bg-secondary group-hover:w-12 transition-all duration-500"></span>
                       {c.link}
                       <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-200" />
                    </div>
                 </div>
              </a>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
