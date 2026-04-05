import React from 'react';
import { motion } from 'framer-motion';

const BoardCard = ({ img, name, role, desc, variant }) => {
  const styles = {
    blue: {
      bg: 'bg-[#1B4D8E]',
      text: 'text-white',
      roleText: 'text-white/70',
      descText: 'text-white/80',
      divider: 'bg-[#E5AA3E]',
      shadow: 'shadow-[0_20px_40px_-15px_rgba(27,77,142,0.4)]',
      border: 'border-[#153e72]',
    },
    gold: {
      bg: 'bg-[#E5AA3E]',
      text: 'text-[#1A1817]',
      roleText: 'text-[#1A1817]/60',
      descText: 'text-[#1A1817]/80',
      divider: 'bg-[#1B4D8E]',
      shadow: 'shadow-[0_20px_40px_-15px_rgba(229,170,62,0.3)]',
      border: 'border-[#d49a2e]',
    },
    dark: {
      bg: 'bg-[#1A1817]',
      text: 'text-[#EFE7DF]',
      roleText: 'text-[#E5AA3E]',
      descText: 'text-white/60',
      divider: 'bg-[#E5AA3E]',
      shadow: 'shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]',
      border: 'border-white/5',
    },
  };

  const s = styles[variant];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`p-10 rounded-[40px] border ${s.border} ${s.bg} ${s.shadow} transition-all duration-500 overflow-hidden relative flex flex-col items-center text-center group`}
    >
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000" />

      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mb-6 shrink-0 shadow-xl relative z-10">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className={`text-2xl font-black mb-2 ${s.text}`} style={{ fontFamily: "'Playfair Display', serif" }}>{name}</h3>
      <p className={`text-[10px] font-black uppercase tracking-[.2em] mb-4 ${s.roleText}`}>{role}</p>
      <div className={`w-12 h-0.5 ${s.divider} mb-4`} />
      <p className={`text-[14px] font-light leading-relaxed italic ${s.descText}`}>{desc}</p>
    </motion.div>
  );
};

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        {/* Principal Message */}
        <div id="principal" className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] relative z-10 border border-[#EFE7DF]">
              <img
                src="/assets/about/principal_portrait_vibrant_professorial_1774675617669.png"
                alt="Principal"
                className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#E5AA3E] rounded-[40px] -z-0 translate-x-3 translate-y-3" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#1B4D8E] opacity-[0.08] rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
              <span className="text-[#E5AA3E] font-black uppercase tracking-[.3em] text-[10px]">LEADERSHIP VOICE</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#3E3A36] leading-[1.1] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
              Message from the <span className="italic text-[#1B4D8E]">Principal</span>
            </h2>
            <div className="p-8 bg-[#F8F9FA] border border-[#EFE7DF] rounded-3xl mb-8">
              <p className="text-xl font-black text-[#1B4D8E] italic leading-snug border-l-4 border-[#E5AA3E] pl-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                "At Trident, we don't just teach technology; we cultivate the innovators of tomorrow through uncompromised academic rigor and transformative mentorship."
              </p>
            </div>
            <p className="text-[#5c5855] text-lg font-light leading-relaxed mb-8">
              Our institution stands on the foundations of innovation, integrity, and excellence. We believe in providing our students with a holistic environment where world-class infrastructure meets personalized guidance. Join us in our journey of continuous learning and professional growth.
            </p>
            <div className="pt-6 border-t border-[#EFE7DF] flex flex-col">
              <span className="text-xl font-black text-[#1B4D8E]" style={{ fontFamily: "'Playfair Display', serif" }}>Prof. (Dr) D. N. Pattanayak</span>
              <span className="text-[#8B6E66] font-bold uppercase text-[10px] tracking-[.2em] mt-2">Principal, Trident Academy of Technology</span>
            </div>
          </motion.div>
        </div>

        {/* Governing Board */}
        <div id="governance" className="text-center mb-20 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
            <span className="text-[#E5AA3E] font-black uppercase tracking-[.3em] text-[10px]">GOVERNANCE</span>
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#3E3A36]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Governing <span className="italic text-[#1B4D8E]">Board</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <BoardCard
            img="/assets/about/chairperson_panigrahi_1775112672468.png"
            name="Smt. S. Panigrahi"
            role="Chairperson"
            desc="Trustee – D. Foundation"
            variant="blue"
          />
          <BoardCard
            img="/assets/about/member_nanda_portrait_1775112695824.png"
            name="Dr. B. K. Nanda"
            role="Member"
            desc="Ex-Vice Chancellor, VSSUT, Burla (Ph.D, Mechanical)"
            variant="gold"
          />
          <BoardCard
            img="/assets/about/principal_pattanayak_portrait_1775112712100.png"
            name="Prof. (Dr) D. N. Pattanayak"
            role="Member Secretary (GB)"
            desc="Principal (Ph.D, JU, Electrical Engg)"
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
};

export default Leadership;
