import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Lightbulb, Trophy, ShieldCheck } from 'lucide-react';

const ValueItem = ({ icon: Icon, title, desc, accent = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`p-10 rounded-[32px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border ${
      accent ? 'bg-[#F8F9FA] border-[#EFE7DF]' : 'bg-white border-[#EFE7DF]'
    }`}
  >
    <div className={`w-16 h-16 rounded-[20px] flex items-center justify-center mb-6 shadow-sm border border-[#EFE7DF] ${
      accent ? 'bg-[#1B4D8E] text-white' : 'bg-[#E5AA3E] text-[#1A1817]'
    }`}>
      <Icon size={28} />
    </div>
    <h4 className="text-xl font-black text-[#3E3A36] mb-3 uppercase tracking-tight">{title}</h4>
    <p className="text-[#5c5855] text-[15px] leading-relaxed font-light">{desc}</p>
  </motion.div>
);

const Identity = () => {
  return (
    <section id="identity" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5AA3E]/5 rounded-full blur-[100px] z-0" />
      
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative z-10 border border-[#EFE7DF]">
              <img 
                src="/assets/about/vision_vibrant_colorful_students_1774672909834.png" 
                alt="Institutional Vision" 
                className="w-full h-[500px] object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#E5AA3E] rounded-[40px] -z-0 translate-x-3 translate-y-3" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
              <span className="text-[#E5AA3E] font-black uppercase tracking-[.3em] text-[10px]">IDENTITY</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#3E3A36] leading-[1.1] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
              Vision & <span className="italic text-[#1B4D8E]">Mission.</span>
            </h2>
            
            <div className="space-y-8">
              <div className="p-10 bg-white border border-[#EFE7DF] rounded-3xl shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300">
                <h3 className="text-2xl font-black text-[#1A1817] mb-4 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#E5AA3E]"></div>
                  Vision
                </h3>
                <p className="text-[#5c5855] text-lg leading-relaxed font-light">
                  To be an institution of global excellence, nurturing innovative technical minds into responsible leaders who shape the future of technology and society.
                </p>
              </div>

              <div className="p-10 bg-[#F8F9FA] border border-[#EFE7DF] rounded-3xl shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300">
                <h3 className="text-2xl font-black text-[#1A1817] mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#1B4D8E]"></div>
                  Mission
                </h3>
                <ul className="space-y-5">
                  {[
                    "To provide uncompromised academic rigor and transformative education.",
                    "To foster an environment of continuous learning and advanced research.",
                    "To develop world-class human resources with a strong sense of ethics."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-[#5c5855] font-light leading-relaxed">
                      <span className="font-black text-[#1B4D8E] mt-0.5">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
            <span className="text-[#E5AA3E] font-black uppercase tracking-[.3em] text-[10px]">CORE VALUES</span>
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#3E3A36]" style={{ fontFamily: "'Playfair Display', serif" }}>
            The <span className="italic text-[#1B4D8E]">Trident</span> Spirit.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueItem 
            icon={Handshake} 
            title="Integrity" 
            desc="Upholding the highest ethical standards in all academic and professional pursuits." 
          />
          <ValueItem 
            icon={Lightbulb} 
            title="Innovation" 
            desc="Encouraging creativity and original thinking across all technical disciplines." 
            accent={true}
          />
          <ValueItem 
            icon={Trophy} 
            title="Excellence" 
            desc="Striving for the benchmark of quality in infrastructure and education." 
          />
          <ValueItem 
            icon={ShieldCheck} 
            title="Responsibility" 
            desc="Developing sensitive citizens committed to sustainable global development." 
            accent={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Identity;
