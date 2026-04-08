import { motion } from 'framer-motion';

const Exams = () => {
  return (
    <section id="exams" className="py-24 bg-[#F8F9FA] relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 translate-x-32 z-0" />
      
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[2px] bg-[#1B4D8E]"></div>
            <span className="text-[#1B4D8E] font-black uppercase tracking-[.3em] text-[10px]">Important</span>
            <div className="w-8 h-[2px] bg-[#1B4D8E]"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#3E3A36] tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Mandatory <span className="italic text-[#8B6E66]">Examinations.</span>
          </motion.h2>
          <p className="text-[#5c5855] max-w-xl mx-auto font-light text-lg">Admission to our programs is strictly through recognized entrance exams.</p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
          {[
            {
              abbr: "JEE",
              title: "Main / Advanced",
              items: ["1st Year B.Tech", "1st Year Integrated 5 Years M.Tech"]
            },
            {
              abbr: "OJEE",
              title: "Odisha Joint Entrance",
              items: ["Lateral Entry B.Tech (Diploma & B.Sc.)", "M.Tech", "MCA", "MBA"]
            }
          ].map((exam, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="flex-1 min-w-[300px] bg-white p-12 rounded-3xl border border-[#EFE7DF] hover:border-transparent text-center shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-6xl md:text-7xl font-black text-[#1B4D8E] mb-2 font-serif opacity-20" style={{ fontFamily: "'Playfair Display', serif" }}>{exam.abbr}</div>
              <h3 className="text-2xl font-black text-[#3E3A36] mb-6 tracking-tight uppercase">{exam.abbr} <span className="text-[12px] opacity-60 ml-2 tracking-widest">{exam.title}</span></h3>
              <div className="w-16 h-[2px] bg-[#E5AA3E] mx-auto mb-6"></div>
              <p className="text-[10px] font-black text-[#8B6E66] uppercase tracking-widest mb-4">Mandatory For:</p>
              <ul className="space-y-4">
                {exam.items.map((item, i) => (
                  <li key={i} className="text-[#5c5855] text-[15px] font-light leading-relaxed">
                    {item}
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

export default Exams;
