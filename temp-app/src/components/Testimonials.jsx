import { useState, useEffect } from "react";
import { FadeInUp } from "../utils/animations";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import avatar1 from "../assets/avatar_1.jpg";
import avatar2 from "../assets/avatar_2.jpg";
import avatar3 from "../assets/avatar_3.jpg";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      text: "The infrastructure and the faculty here are unmatched. The robotics lab provided me with hands-on experience that directly landed me my dream role at a top tech firm.",
      author: "Sneha Patel",
      role: "Software Engineer, Class of 2024",
      rating: 5,
      img: avatar1
    },
    {
      text: "Coming to Trident was the best decision of my life. The emphasis on practical skills, combined with a highly supportive alumni network, built my confidence immensely.",
      author: "Rahul Sharma",
      role: "Data Scientist, Class of 2023",
      rating: 5,
      img: avatar2
    },
    {
      text: "The campus life is vibrant and truly diverse. Beyond academics, the clubs and societies helped me develop leadership skills that are crucial in the corporate world.",
      author: "Anjali Gupta",
      role: "Business Analyst, Class of 2025",
      rating: 5,
      img: avatar3
    }
  ];

  /* Auto-play mechanism */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-32 bg-bg-light relative overflow-hidden">
      
      {/* Abstract Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[240px] md:text-[340px] text-soft opacity-40 font-black pointer-events-none select-none tracking-tighter whitespace-nowrap text-secondary/5">
        SUCCESS
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeInUp>
          <div className="text-center mb-16">
            <span className="block w-12 h-1 bg-secondary mx-auto mb-6"></span>
            <h2 className="serif text-4xl md:text-5xl font-black text-[#0F172A] mb-4">Student <span className="italic text-[#529DD4]">Stories.</span></h2>
            <p className="text-[#0F172A]/70 text-lg font-medium">Hear directly from the minds shaping the future.</p>
          </div>
        </FadeInUp>

        <div className="relative bg-white rounded-[32px] md:rounded-[48px] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.1)] p-8 md:p-16 border border-soft/50 max-w-4xl mx-auto">
          
          {/* Large Quote Icon Watermark */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 opacity-10 text-primary">
            <Quote size={80} />
          </div>

          <div className="relative min-h-[280px] md:min-h-[220px] flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${i === current ? 'opacity-100 scale-100 translate-y-0 z-20' : 'opacity-0 scale-95 translate-y-8 z-0 pointer-events-none'}`}
              >
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                
                <h3 className="serif text-xl md:text-3xl text-center text-[#0F172A] leading-relaxed font-bold mb-10 max-w-2xl px-4 italic">
                  "{t.text}"
                </h3>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={t.img} alt={t.author} className="w-14 h-14 rounded-full border-2 border-bg-light shadow-md" />
                    <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 animate-ping"></div>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-[#0F172A] tracking-wide">{t.author}</div>
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-soft/50 gap-6">
            
            {/* Pagination Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${i === current ? 'w-10 bg-primary' : 'w-2 bg-secondary/30 hover:bg-secondary/60'}`}
                  aria-label={`Go to slide ${i+1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-4">
              <button 
                onClick={() => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full bg-soft flex items-center justify-center text-[#0F172A] hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-lg transform hover:-translate-x-1"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full bg-soft flex items-center justify-center text-[#0F172A] hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-lg transform hover:translate-x-1"
              >
                <ChevronRight size={20} />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
