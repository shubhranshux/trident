import { motion } from 'framer-motion';

const MediaSection = () => {
  const videos = [
    {
      id: "yLP5kSUssLo",
      title: "A Visual Walk-Through",
      thumbnail: "https://img.youtube.com/vi/yLP5kSUssLo/hqdefault.jpg"
    },
    {
      id: "VdltLXf44OQ",
      title: "Trident Academy Techlabs",
      thumbnail: "https://img.youtube.com/vi/VdltLXf44OQ/hqdefault.jpg"
    }
  ];

  return (
    <section id="tour" className="py-24 bg-[#1A1817] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#E5AA3E]/5 -skew-x-12 translate-x-32 z-0" />
      
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
            <span className="text-[#E5AA3E] font-black uppercase tracking-[.3em] text-[10px]">Experience</span>
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Institutional <span className="italic text-[#EFE7DF]">Media.</span>
          </motion.h2>
          <p className="text-white/70 max-w-xl mx-auto font-light text-lg">Take a visual journey through Trident Academy of Technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((vid, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group bg-[#212529] rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/5"
            >
              <div className="aspect-video relative overflow-hidden bg-black">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${vid.id}?autoplay=0`}
                  title={vid.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-8 text-center border-t border-white/5">
                <h4 className="text-xl md:text-2xl font-black text-white tracking-tight group-hover:text-[#E5AA3E] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{vid.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
