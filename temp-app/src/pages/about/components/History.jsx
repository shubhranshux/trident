import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, desc, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex gap-8 group"
  >
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 rounded-full border-4 border-[#1B4D8E] bg-[#F8F9FA] flex items-center justify-center text-[15px] font-black text-[#1A1817] shrink-0 group-hover:bg-[#1B4D8E] group-hover:text-white transition-all duration-300">
        {year}
      </div>
      <div className="w-0.5 h-full bg-[#EFE7DF] group-last:bg-transparent min-h-[80px]" />
    </div>
    <div className="pt-2 pb-10">
      <h4 className="text-2xl font-black text-[#3E3A36] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h4>
      <p className="text-[#5c5855] font-light leading-relaxed text-[15px] max-w-md">{desc}</p>
    </div>
  </motion.div>
);

const History = () => {
  const milestones = [
    { year: "1991", title: "Founding Spark", desc: "Incorporation of Trident Softech Private Limited by five visionary technocrats." },
    { year: "1995", title: "Education Focus", desc: "Started as a corporate finishing school providing industry-ready tech training." },
    { year: "2005", title: "Academy Founding", desc: "Trident Academy of Technology established as a premium degree engineering college." },
    { year: "2023", title: "Autonomous Status", desc: "Continuous evolution as a UGC Autonomous institution with industry-leading placements." },
  ];

  return (
    <section id="milestones" className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
            <span className="text-[#E5AA3E] font-black uppercase tracking-[.3em] text-[10px]">TIMELINE</span>
            <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#3E3A36]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="italic text-[#1B4D8E]">Institutional</span> Milestones.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative z-10 border border-[#EFE7DF]">
              <img 
                src="/assets/about/milestones_vibrant_timeline_nodes_1774672926576.png" 
                alt="Timeline Visual" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000" 
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#E5AA3E] opacity-[0.1] rounded-full blur-3xl -z-10" />
          </motion.div>

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <TimelineItem key={i} index={i} {...m} />
            ))}
          </div>
        </div>

        {/* Story Part */}
        <div id="story" className="mt-40 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#3E3A36] leading-[1.1] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
              Rooted in <span className="italic text-[#8B6E66]">Vision.</span>
            </h2>
            <p className="text-2xl font-black text-[#1B4D8E] mb-8 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
              In the winter of 1991, five young minds sparkled a revolution over a coffee table. 
              They debated a future where world-class education wasn't just a dream, but a standard.
            </p>
            <p className="text-[#5c5855] text-lg font-light leading-relaxed mb-8">
              What started as "Trident Softech Private Limited" evolved into a corporate finishing school, and eventually, the Trident Academy of Technology. Today, we stand as a testament to the power of self-financing private entrepreneurship in building high-quality infrastructure for advanced education and research.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-[#EFE7DF]">
              <img 
                src="/assets/about/visionary_meeting_journey_1774669005557.png" 
                alt="Founding Vision" 
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-1000" 
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#1B4D8E]/5 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default History;
