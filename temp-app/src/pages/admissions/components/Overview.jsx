import { motion } from 'framer-motion';

const Overview = () => {
  return (
    <section id="overview" className="py-24 md:py-32 bg-transparent relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-10 md:p-16 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border-b-4 border-[#8B6E66] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5AA3E]/5 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="flex items-center justify-center gap-4 mb-8">
             <div className="w-12 h-[2px] bg-[#1B4D8E]/40"></div>
             <span className="block text-[12px] font-black uppercase tracking-[.4em] text-[#1B4D8E]">Welcome</span>
             <div className="w-12 h-[2px] bg-[#1B4D8E]/40"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 text-[#3E3A36] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Institutional <span className="italic text-[#8B6E66]">Overview.</span>
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl md:text-[22px] leading-relaxed text-[#5c5855] font-light">
            We are excited to guide you through your application. At Trident Academy of Technology, 
            we foster a transformative academic environment. Join a vibrant community committed 
            to innovation, leadership, and uncompromised academic rigor.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
