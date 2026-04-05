import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Check Eligibility",
      text: "Review the specific academic requirements for your desired program.",
      className: "md:col-span-2 md:row-span-2 bg-[#283B91] text-white"
    },
    {
      num: "02",
      title: "Entrance Exam",
      text: "Appear for JEE Main for B.Tech or OJEE.",
      className: "md:col-span-1 md:row-span-1 bg-[#1A1817] text-[#EFE7DF]"
    },
    {
      num: "03",
      title: "Merit Evaluation",
      text: "Evaluation based on your entrance test performance and records.",
      className: "md:col-span-1 md:row-span-1 bg-[#E5AA3E] text-[#1A1817]"
    },
    {
      num: "04",
      title: "Confirmation",
      text: "Secure admission by completing documentation and fee payment.",
      className: "md:col-span-2 md:row-span-1 bg-[#006738] text-white"
    },
    {
      num: "05",
      title: "Counseling Support",
      text: "Receive comprehensive guidance and support before classes officially begin.",
      className: "md:col-span-4 md:row-span-1 bg-[#F8F9FA] text-[#3E3A36] border border-[#EFE7DF]"
    }
  ];

  return (
    <section id="process" className="py-24 bg-transparent relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
            <span className="text-[#E5AA3E] font-black uppercase tracking-[.3em] text-[10px]">Your Journey</span>
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#3E3A36] tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Enrolment <span className="italic text-[#8B6E66]">Process.</span>
          </motion.h2>
          <p className="text-[#5c5855] max-w-xl mx-auto font-light text-lg">A seamless 5-step journey from application to enrollment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[800px]">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`p-10 rounded-3xl flex flex-col justify-end relative overflow-hidden group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 ${step.className}`}
            >
              <span className="absolute top-8 left-8 text-6xl md:text-8xl font-serif font-black opacity-[0.15] pointer-events-none group-hover:opacity-30 transition-opacity" style={{ fontFamily: "'Playfair Display', serif" }}>
                {step.num}
              </span>
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-3 group-hover:translate-x-2 transition-transform duration-300 tracking-tight leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {step.title}
                </h4>
                <p className="text-[15px] font-light leading-relaxed opacity-90">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
