import { FadeInUp } from "../utils/animations";
import { BookMarked, FlaskConical, Dumbbell, Coffee, Wifi, ShieldCheck, Microscope, ArrowRight } from "lucide-react";

import libImg from "../assets/real_library.jpg";
import labImg from "../assets/real_lab.jpg";
import cafeImg from "../assets/real_cafeteria.jpg";
import quadImg from "../assets/facilities_campus_green.jpg";
import aerialImg from "../assets/facilities_sports.jpg";
import researchImg from "../assets/real_research.jpg";

export default function Facilities() {
  const facs = [
    { 
      title: "Central Library", 
      icon: <BookMarked size={20}/>, 
      desc: "A sprawling repository with over 100,000 volumes, private study pods, and digital journals.",
      img: libImg,
      colSpan: "md:col-span-2 md:row-span-2",
      href: "https://academics-tat.tekkzy.com/tat-library",
      color: "brand-blue"
    },
    { 
      title: "Advanced Laboratories", 
      icon: <FlaskConical size={20}/>, 
      desc: "State-of-the-art AI, IoT, and Robotics labs sponsored by top industry partners.",
      img: labImg,
      colSpan: "md:col-span-2 md:row-span-1",
      href: "https://tat.tekkzy.com/",
      color: "brand-red"
    },
    { 
      title: "Cafeteria & Dining", 
      icon: <Coffee size={20}/>, 
      desc: "Multi-cuisine dining options with spacious glass-walled seating.",
      img: cafeImg,
      colSpan: "md:col-span-1 md:row-span-1",
      href: "https://campuslife-tat.tekkzy.com",
      color: "brand-yellow"
    },
    { 
      title: "Campus Quadrangles", 
      icon: <Wifi size={20}/>, 
      desc: "Lush green tech-enabled spaces for collaboration.",
      img: quadImg,
      colSpan: "md:col-span-1 md:row-span-1",
      color: "brand-green"
    },
    { 
      title: "Athletics & Wellness", 
      icon: <Dumbbell size={20}/>, 
      desc: "Olympic-sized pool, stadium, and expansive green fields.",
      img: aerialImg,
      colSpan: "md:col-span-2 md:row-span-1",
      href: "https://campuslife-tat.tekkzy.com",
      color: "brand-blue"
    },
    { 
      title: "Research Hub", 
      icon: <Microscope size={20}/>, 
      desc: "Dedicated incubation centers equipped with cutting-edge tech to foster student innovation.",
      img: researchImg,
      colSpan: "md:col-span-2 md:row-span-1",
      href: "https://research-tat.tekkzy.com/",
      color: "brand-brown"
    }
  ];

  const colorClasses = {
    "brand-blue": "group-hover:text-brand-blue group-hover:border-brand-blue",
    "brand-red": "group-hover:text-brand-red group-hover:border-brand-red",
    "brand-yellow": "group-hover:text-brand-yellow group-hover:border-brand-yellow",
    "brand-green": "group-hover:text-brand-green group-hover:border-brand-green",
    "brand-orange": "group-hover:text-brand-orange group-hover:border-brand-orange",
    "brand-brown": "group-hover:text-brand-brown group-hover:border-brand-brown",
  };
  
  const bgClasses = {
    "brand-blue": "group-hover:bg-brand-blue/90",
    "brand-red": "group-hover:bg-brand-red/90",
    "brand-yellow": "group-hover:bg-brand-yellow/90",
    "brand-green": "group-hover:bg-brand-green/90",
    "brand-orange": "group-hover:bg-brand-orange/90",
    "brand-brown": "group-hover:bg-brand-brown/90",
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#00674F' }}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeInUp>
            <span className="block w-16 h-1 bg-[#E5AA3E] mx-auto mb-6"></span>
            <h2 className="serif text-4xl font-bold text-white mb-4 relative z-10 inline-block">
              <span className="absolute -top-2 -left-4 w-32 h-14 bg-white/5 transform -rotate-3 -z-10 rounded-sm"></span>
              World-Class <span className="italic text-[#E5AA3E]">Infrastructure.</span>
            </h2>
            <p className="text-white/70 leading-relaxed font-medium">
              We provide an ecosystem that nurtures intellectual exploration, physical well-being, and social engagement, deeply embedded within stunning architecture.
            </p>
          </FadeInUp>
        </div>

        {/* High-Density Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {facs.map((f, i) => (
            <FadeInUp key={f.title} delay={i * 100} className={f.colSpan}>
              <div onClick={() => f.href && (window.location.href = f.href)} className={`group relative w-full h-full rounded-[24px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer`}>
                
                {/* Background Image */}
                <img src={f.img} alt={f.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/90 via-[#0B1120]/30 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className={`absolute inset-0 ${bgClasses[f.color] || 'group-hover:bg-primary/90'} opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all ${colorClasses[f.color] || ''} group-hover:bg-white/20 group-hover:border-white/40`}>
                      {f.icon}
                    </div>
                    <h3 className="serif text-2xl font-bold text-white drop-shadow-md">{f.title}</h3>
                  </div>
                  <p className="text-white/80 text-[14px] leading-relaxed font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-md">
                    {f.desc}
                  </p>
                </div>
                
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16 text-center">
          <FadeInUp delay={200}>
            <a href="https://activities-tat.tekkzy.com" className="inline-flex items-center gap-3 px-8 py-4 bg-[#E5AA3E] border border-[#E5AA3E] text-[#1A1817] rounded-full font-bold text-[13px] uppercase tracking-widest hover:bg-white hover:text-[#1B3060] hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group">
              View All Facilities
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
