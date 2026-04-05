import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, img, name, detail, variant }) => {
  const styles = {
    blue: {
      bg: 'bg-[#1B4D8E]',
      text: 'text-white',
      quoteColor: 'text-white/20',
      detailColor: 'text-white/70',
      borderColor: 'border-white/20',
      shadow: 'shadow-[0_20px_40px_-15px_rgba(27,77,142,0.4)]',
    },
    gold: {
      bg: 'bg-[#E5AA3E]',
      text: 'text-[#1A1817]',
      quoteColor: 'text-[#1A1817]/15',
      detailColor: 'text-[#1A1817]/60',
      borderColor: 'border-[#1A1817]/10',
      shadow: 'shadow-[0_20px_40px_-15px_rgba(229,170,62,0.3)]',
    },
  };

  const s = styles[variant];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`p-12 rounded-[40px] ${s.bg} ${s.shadow} transition-all duration-500 overflow-hidden relative group`}
    >
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000" />

      <div className={`text-6xl lg:text-7xl font-black ${s.quoteColor} absolute top-8 left-8 select-none`} style={{ fontFamily: "'Playfair Display', serif" }}>"</div>
      <p className={`text-lg md:text-xl font-light leading-relaxed mb-10 relative z-10 italic ${s.text}`}>
        {quote}
      </p>
      <div className={`flex items-center gap-4 pt-8 border-t ${s.borderColor}`}>
        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/30 shrink-0 shadow-lg">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className={`text-xl font-black uppercase tracking-tight ${s.text}`} style={{ fontFamily: "'Playfair Display', serif" }}>{name}</h4>
          <span className={`text-[11px] font-bold tracking-[.15em] uppercase ${s.detailColor}`}>{detail}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Success = () => {
  return (
    <section id="success" className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
            <span className="text-[#E5AA3E] font-black uppercase tracking-[.3em] text-[10px]">STUDENT SUCCESS</span>
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#3E3A36]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Voices of <span className="italic text-[#1B4D8E]">Excellence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <TestimonialCard
            quote="Trident provided me with the perfect blend of technical rigor and creative freedom. The labs are truly world-class."
            img="/assets/about/student_rahul_sharma_cse_portrait_1775288690112.png"
            name="Rahul Sharma"
            detail="CSE, Batch of 2024"
            variant="blue"
          />
          <TestimonialCard
            quote="The faculty mentorship here is unparalleled. I was able to publish two research papers before graduating."
            img="/assets/about/student_anjali_priya_etc_portrait_1775288708312.png"
            name="Anjali Priya"
            detail="ETC, Batch of 2023"
            variant="gold"
          />
        </div>
      </div>
    </section>
  );
};

export default Success;
