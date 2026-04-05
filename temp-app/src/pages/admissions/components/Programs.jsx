import { motion } from 'framer-motion';

const programData = [
  {
    title: "B.Tech (1st Year)",
    description: "4-Year Undergraduate Engineering Program.",
    tags: ["Biotechnology", "Civil", "CSE", "CSE (AI & ML)", "CSE (Data Science)", "ETC", "EE (VLSI)", "EEE", "Mechanical"]
  },
  {
    title: "Integrated M.Tech (5 Years)",
    description: "5-Year dual degree program.",
    tags: ["Biotechnology", "Computer Science & Engineering"]
  },
  {
    title: "M.Tech",
    description: "Postgraduate programs in advanced engineering.",
    tags: ["CSE", "ETC", "CSE (AI & ML)", "Data Science", "EE (VLSI)", "EV Technology", "Energy & Env.", "Environmental", "Industrial Safety", "Structural"]
  },
  {
    title: "MCA",
    description: "Master of Computer Applications focusing on advanced computing logic and application development.",
    tags: ["MCA"]
  },
  {
    title: "MBA",
    description: "Master of Business Administration designing the next generation of business leaders.",
    tags: ["MBA"]
  },
  {
    title: "Diploma in Engineering",
    description: "Foundational engineering programs in Civil, Electrical, and Mechanical disciplines.",
    tags: ["Civil", "Electrical", "Mechanical"]
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-white relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[30%] h-full bg-[#EFE7DF]/30 -skew-x-12 translate-x-12 z-0 hidden lg:block" />
      
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <div className="text-left mb-16 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
            <span className="text-[#E5AA3E] font-black uppercase tracking-[.3em] text-[10px]">Academics</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#3E3A36] tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Academic <span className="italic text-[#8B6E66]">Programs.</span>
          </motion.h2>
          <p className="text-[#5c5855] text-lg font-light leading-relaxed">Discover our comprehensive range of undergraduate and postgraduate degree programs meticulously designed for global competitiveness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programData.map((program, idx) => {
            const colors = [
              "bg-[#283B91] border-b-4 border-[#1a2861]", 
              "bg-[#1A1817] border-b-4 border-[#8B6E66]", 
              "bg-[#006738] border-b-4 border-[#004d2a]",
              "bg-[#C5282F] border-b-4 border-[#9c1f25]",
              "bg-[#E56D24] border-b-4 border-[#b8561d]",
              "bg-[#2C3A8C] border-b-4 border-[#1f2861]"
            ];
            const bgClass = colors[idx % colors.length];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`${bgClass} p-8 md:p-10 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between min-h-[320px]`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.05] transform group-hover:scale-150 transition-transform duration-700 pointer-events-none">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{program.title}</h3>
                  <p className="text-white/80 text-[15px] leading-relaxed mb-8 font-light">{program.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {program.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 bg-white/10 text-white rounded-md backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
