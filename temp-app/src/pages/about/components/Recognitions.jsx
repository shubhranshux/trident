import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Monitor, BarChart3 } from 'lucide-react';

const DeptCard = ({ icon: Icon, title, desc, color }) => {
  const colors = {
    green: "bg-[#F8F9FA] border-[#EFE7DF] text-[#1B4D8E]",
    yellow: "bg-[#1B4D8E] border-[#153e72] text-[#EFE7DF]",
    charcoal: "bg-[#1A1817] border-[#1A1817] text-[#E5AA3E]"
  };

  const titleColors = {
    green: "text-[#3E3A36]",
    yellow: "text-white",
    charcoal: "text-[#EFE7DF]"
  }

  const descColors = {
    green: "text-[#5c5855]",
    yellow: "text-white/80",
    charcoal: "text-white/60"
  }

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`p-10 rounded-[40px] border ${colors[color]} shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col items-center text-center`}
    >
      <div className="w-16 h-16 rounded-[20px] bg-black/5 flex items-center justify-center mb-6 border border-white/10">
        <Icon size={28} />
      </div>
      <h3 className={`text-2xl font-black mb-4 tracking-tight uppercase ${titleColors[color]}`} style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
      <p className={`font-light leading-relaxed text-[15px] ${descColors[color]}`}>{desc}</p>
    </motion.div>
  );
};

const Recognitions = () => {
  return (
    <section id="academics" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
            <span className="text-[#E5AA3E] font-black uppercase tracking-[.3em] text-[10px]">ACADEMIC PILLARS</span>
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#3E3A36]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Broadening <span className="italic text-[#1B4D8E]">Institutional</span> Horizons.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          <DeptCard 
            icon={Settings} 
            title="Engineering" 
            desc="Providing top-tier B.Tech programs across diverse specializations with industry-ready curriculum."
            color="green" 
          />
          <DeptCard 
            icon={Monitor} 
            title="MCA" 
            desc="Ranked #1 MCA institution in Odisha, focusing on advanced computing and software paradigms."
            color="yellow" 
          />
          <DeptCard 
            icon={BarChart3} 
            title="MBA" 
            desc="Empowering future managers with strategic thinking and professional leadership skills."
            color="charcoal" 
          />
        </div>

        <div id="stats" className="text-center mb-20 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
            <span className="text-[#E5AA3E] font-black uppercase tracking-[.3em] text-[10px]">RECOGNITIONS</span>
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#3E3A36]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Benchmark of <span className="italic text-[#8B6E66]">Success.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 p-10 bg-[#1A1817] rounded-[40px] text-white flex flex-col justify-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5AA3E]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000" />
            <h3 className="text-4xl md:text-5xl font-black mb-4 text-[#E5AA3E]" style={{ fontFamily: "'Playfair Display', serif" }}>Top 100</h3>
            <p className="text-lg font-light opacity-90 leading-relaxed max-w-xl">
              Consistently ranked among the Top 100 Engineering Institutions in India by DataQuest along with IITs and NITs.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 bg-[#F8F9FA] rounded-[40px] border border-[#EFE7DF] flex flex-col justify-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
          >
            <h3 className="text-4xl font-black mb-2 text-[#1B4D8E]" style={{ fontFamily: "'Playfair Display', serif" }}>No. 1</h3>
            <p className="text-[10px] font-black text-[#8B6E66] opacity-80 uppercase tracking-[.2em] mb-4">IN ODISHA</p>
            <p className="text-[15px] font-light text-[#5c5855] leading-relaxed">
              Ranked #1 MCA Institution in Odisha.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 bg-[#1B4D8E] rounded-[40px] text-white flex flex-col justify-center shadow-[0_20px_40px_-15px_rgba(27,77,142,0.3)]"
          >
            <h3 className="text-4xl font-black mb-4 text-[#E5AA3E]" style={{ fontFamily: "'Playfair Display', serif" }}>#25</h3>
            <p className="text-[15px] font-light opacity-90 leading-relaxed">
              DataQuest CMR Rankings Nationwide.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 bg-white rounded-[40px] border border-[#EFE7DF] flex flex-col justify-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
          >
            <h3 className="text-4xl font-black mb-4 text-[#1B4D8E]" style={{ fontFamily: "'Playfair Display', serif" }}>No. 4</h3>
            <p className="text-[15px] font-light text-[#5c5855] leading-relaxed">
              Private Engineering College under BPUT, Odisha.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 bg-[#E5AA3E] rounded-[40px] text-[#1A1817] flex flex-col justify-center shadow-[0_20px_40px_-15px_rgba(229,170,62,0.3)]"
          >
            <h3 className="text-4xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>100%</h3>
            <p className="text-[15px] font-light opacity-90 leading-relaxed">
              Placement assistance with industry-leading packages for every graduating student.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Recognitions;
