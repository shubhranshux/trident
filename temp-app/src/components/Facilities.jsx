import { FadeInUp } from "../utils/animations";
import { BookMarked, FlaskConical, Dumbbell, Coffee, Wifi, ShieldCheck, Microscope, ArrowRight } from "lucide-react";

import libImg from "../assets/indian_campus_library.png";
import labImg from "../assets/indian_engineering_lab.png";
import cafeImg from "../assets/indian_cafeteria.png";
import quadImg from "../assets/indian_campus_quad.png";
import aerialImg from "../assets/indian_campus_aerial.png";
import researchImg from "../assets/indian_campus_research.png";

export default function Facilities() {
  const facs = [
    { 
      title: "Central Library", 
      icon: <BookMarked size={20}/>, 
      desc: "A sprawling repository with over 100,000 volumes, private study pods, and digital journals.",
      img: libImg,
      colSpan: "md:col-span-2 md:row-span-2"
    },
    { 
      title: "Advanced Laboratories", 
      icon: <FlaskConical size={20}/>, 
      desc: "State-of-the-art AI, IoT, and Robotics labs sponsored by top industry partners.",
      img: labImg,
      colSpan: "md:col-span-2 md:row-span-1"
    },
    { 
      title: "Cafeteria & Dining", 
      icon: <Coffee size={20}/>, 
      desc: "Multi-cuisine dining options with spacious glass-walled seating.",
      img: cafeImg,
      colSpan: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Campus Quadrangles", 
      icon: <Wifi size={20}/>, 
      desc: "Lush green tech-enabled spaces for collaboration.",
      img: quadImg,
      colSpan: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Athletics & Wellness", 
      icon: <Dumbbell size={20}/>, 
      desc: "Olympic-sized pool, stadium, and expansive green fields.",
      img: aerialImg,
      colSpan: "md:col-span-2 md:row-span-1"
    },
    { 
      title: "Research Hub", 
      icon: <Microscope size={20}/>, 
      desc: "Dedicated incubation centers equipped with cutting-edge tech to foster student innovation.",
      img: researchImg,
      colSpan: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeInUp>
            <span className="block w-16 h-1 bg-secondary mx-auto mb-6"></span>
            <h2 className="serif text-4xl font-bold text-[#3E3A36] mb-4">World-Class Infrastructure</h2>
            <p className="text-[#3E3A36]/70 leading-relaxed font-medium">
              We provide an ecosystem that nurtures intellectual exploration, physical well-being, and social engagement, deeply embedded within stunning architecture.
            </p>
          </FadeInUp>
        </div>

        {/* High-Density Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {facs.map((f, i) => (
            <FadeInUp key={f.title} delay={i * 100} className={f.colSpan}>
              <div className={`group relative w-full h-full rounded-[24px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer`}>
                
                {/* Background Image */}
                <img src={f.img} alt={f.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/90 via-[#1A1817]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
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
            <a href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-[#3E3A36]/20 text-[#3E3A36] rounded-full font-bold text-[13px] uppercase tracking-widest hover:bg-[#3E3A36] hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group">
              View All Facilities
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
