import { motion } from 'framer-motion';

const Eligibility = () => {
  return (
    <section id="eligibility" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#1B4D8E]/5 rounded-full blur-[80px] z-0" />
      
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[2px] bg-[#1B4D8E]"></div>
            <span className="text-[#1B4D8E] font-black uppercase tracking-[.3em] text-[10px]">Guidelines</span>
            <div className="w-8 h-[2px] bg-[#1B4D8E]"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-5xl font-black text-[#3E3A36] tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Admissions <span className="italic text-[#8B6E66]">Eligibility.</span>
          </motion.h2>
          <p className="text-[#5c5855] text-lg font-light leading-relaxed">Find the specific requirements for your chosen program before you apply.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "B.Tech & Int. M.Tech",
              subtitle: "1st Year Engineering",
              color: "bg-white border-[#EFE7DF]",
              textColor: "text-[#3E3A36]",
              iconColor: "text-[#1B4D8E]",
              items: [
                "Passed 10+2 Science with Physics & Mathematics.",
                "Chemistry/Biology/Biotech as optional.",
                "Minimum 45% marks (40% for reserved).",
                "Must appear for JEE-Main (CBSE)."
              ]
            },
            {
              title: "Lateral Entry",
              subtitle: "2nd Year Engineering",
              color: "bg-[#1B4D8E] border-[#153e72]",
              textColor: "text-white",
              highlightColor: "text-white/80",
              iconColor: "text-[#E5AA3E]",
              items: [
                "Diploma Holders: 3-year diploma in Eng/Tech with min 45%.",
                "B.Sc Students: 3-year Bachelor's with Mathematics in XII.",
                "Must appear for O-JEE."
              ]
            },
            {
              title: "PG Programs",
              subtitle: "M.Tech, MCA, MBA",
              color: "bg-white border-[#EFE7DF]",
              textColor: "text-[#3E3A36]",
              iconColor: "text-[#8B6E66]",
              items: [
                "M.Tech: B.Tech/M.Sc with min 50%.",
                "MCA/MBA: Bachelor's Degree with min 50%.",
                "MCA requires Mathematics at 10+2 or Grad.",
                "Must appear for O-JEE."
              ]
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`${card.color} p-10 rounded-3xl border hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 h-full flex flex-col`}
            >
              <div className="mb-8">
                <span className={`block text-[10px] uppercase tracking-[.2em] font-black mb-2 ${card.textColor} opacity-60`}>{card.subtitle}</span>
                <h4 className={`text-2xl font-black ${card.textColor}`} style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h4>
              </div>
              
              <ul className="space-y-4 flex-grow">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className={`${card.iconColor} font-black mt-1`}>+</span>
                    <span className={`text-[15px] leading-relaxed font-light ${card.highlightColor || 'text-[#5c5855]'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
