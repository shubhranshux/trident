import { motion } from 'framer-motion';

const StoryBanner = ({ image, title, text, reversed = false }) => {
  const isRight = reversed;

  return (
    <section className="relative py-12 px-6 xl:px-12 w-full max-w-[1400px] mx-auto group z-10">
      <div className="relative h-[450px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
        <div className={`absolute inset-0 bg-gradient-to-r ${isRight ? 'from-transparent via-[#1A1817]/60 to-[#1A1817]/95' : 'from-[#1A1817]/95 via-[#1A1817]/60 to-transparent'} z-10`} />
        
        <div className={`absolute inset-0 z-20 flex items-center p-12 md:p-20 ${isRight ? 'justify-end text-right' : 'justify-start text-left'}`}>
          <motion.div 
            initial={{ opacity: 0, x: isRight ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl text-white"
          >
            <div className={`flex items-center gap-4 mb-6 opacity-80 ${isRight ? 'justify-end' : 'justify-start'}`}>
              {!isRight && <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>}
              <span className="text-[10px] font-black uppercase tracking-[.3em] text-[#E5AA3E]">Trident Edge</span>
              {isRight && <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>}
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              {title}
            </h2>
            <p className="text-[17px] md:text-lg font-light leading-relaxed opacity-90 text-[#EFE7DF]">
              {text}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoryBanner;
