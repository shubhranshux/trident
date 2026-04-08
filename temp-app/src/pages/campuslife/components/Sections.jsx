import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Zap, Shield, ArrowRight } from 'lucide-react';

// --- Research Section ---
export const Research = () => (
  <section className="py-24 bg-white" id="research">
    <div className="max-w-[1400px] mx-auto px-6 xl:px-12 grid lg:grid-cols-2 gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif font-black text-5xl mb-6 text-[#3E3A36]">
          Architecting the <br />
          <span className="text-[#E5AA3E] italic font-medium">Next Frontier</span>
        </h2>
        <p className="text-lg font-medium text-[#5c5855] mb-8 max-w-lg leading-relaxed">
          Our research laboratories are the heart of Trident Academy, where Modern University Campus initiatives meet the rigors of breakthrough discovery.
        </p>
        <div className="flex gap-3 mb-10">
          {['AI & Robotics', 'Quantum Computing'].map(tag => (
            <span key={tag} className="px-5 py-2 bg-[#1B4D8E]/5 text-[#1B4D8E] rounded-full text-sm font-bold tracking-wider uppercase border border-[#1B4D8E]/20">{tag}</span>
          ))}
        </div>
        <a href="#" className="bg-[#1B4D8E] text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[13px] inline-flex transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-[#E5AA3E]">
          View Publications
        </a>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden h-[500px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
      >
        <img src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&q=80&w=1200" alt="Research Lab" className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105" />
        <div className="absolute inset-0 bg-radial-gradient(circle at 70% 30%, rgba(27,77,142,0.1) 0%, transparent 60%) pointer-events-none"></div>
      </motion.div>
    </div>
  </section>
);

// --- Story Card Component ---
const StoryCard = ({ name, role, img, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all border border-slate-100"
  >
    <img src={img} alt={name} className="w-full aspect-square object-cover" />
    <div className="p-8">
      <h5 className="font-serif font-black text-xl text-[#1B4D8E] mb-1">{name}</h5>
      <p className="text-[#5c5855] text-[13px] uppercase tracking-widest font-bold">{role}</p>
    </div>
  </motion.div>
);

// --- Stories Section ---
export const Stories = () => (
  <section className="py-24 bg-[#EFE7DF]" id="about">
    <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
      <div className="text-center mb-16">
        <h2 className="font-serif font-black text-5xl mb-4 text-[#1B4D8E]">The Trident Journey</h2>
        <p className="text-[#5c5855] text-lg font-medium">Hear from the next generation of academic pioneers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <StoryCard name="Elena Vance" role="Master of Computer Science" img="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" delay={0.1} />
        <StoryCard name="David Chen" role="AI Research Fellow" img="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400" delay={0.2} />
        <StoryCard name="Samuel Marcus" role="Cyber Resilience Lead" img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" delay={0.3} />
        <StoryCard name="Isabella Thorne" role="Robotics Architect" img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" delay={0.4} />
      </div>
    </div>
  </section>
);

// --- Stats Section ---
export const Stats = () => (
  <section className="py-24 bg-[#3E3A36] text-center">
    <div className="max-w-[1400px] mx-auto px-6 xl:px-12 flex flex-wrap justify-around gap-12">
      {[
        { label: 'Innovation Rank', val: '#1' },
        { label: 'Tech Partners', val: '2.5k+' },
        { label: 'Global Placement', val: '98%' }
      ].map((stat, idx) => (
        <motion.div key={idx} initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: idx * 0.2 }} viewport={{ once: true }}>
          <span className="block text-7xl font-serif font-black text-[#E5AA3E] mb-2">{stat.val}</span>
          <span className="text-white/80 uppercase tracking-widest text-[13px] font-bold">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

// --- Campus Section ---
export const Campus = () => (
    <section className="py-24" id="campus">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        <div className="mb-16">
          <h2 className="font-serif text-5xl mb-4 text-[#1B4D8E] font-black">Institutional Sanctum</h2>
          <p className="text-[#5c5855] text-lg font-medium">Designed for holistic development and unparalleled technical focus.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { title: 'The Global Digital Commons', desc: 'An executive workspace for collaborative research.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200' },
            { title: 'The Creative Resilience Center', desc: 'Modern studio environments for conceptual design.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200' }
          ].map((item, idx) => (
            <motion.div key={idx} initial={{ rotateX: -10, opacity: 0 }} whileInView={{ rotateX: 0, opacity: 1 }} viewport={{ once: true }} className="relative h-[500px] rounded-2xl overflow-hidden group shadow-xl">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-transparent p-10 flex flex-col justify-end">
                <h4 className="text-white font-serif font-black text-2xl mb-2">{item.title}</h4>
                <p className="text-white/80 font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

// --- Impact Section ---
export const Impact = () => (
  <section className="py-24 bg-[#3E3A36] text-white text-center">
    <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
      <h2 className="font-serif font-black text-5xl mb-20 text-[#E5AA3E]">Global Impact 2026</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Award, val: '240+', label: 'Tech Awards' },
          { icon: Globe, val: '45k+', label: 'Elite Alumni' },
          { icon: Zap, val: '$2B+', label: 'Funded Research' },
          { icon: Shield, val: '200+', label: 'Faculty Leads' }
        ].map((item, idx) => (
          <motion.div key={idx} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="p-10 border-r border-white/10 last:border-r-0 relative group hover:bg-white/5 transition-all">
            <item.icon size={45} className="mx-auto mb-6 text-white group-hover:text-[#E5AA3E] transition-colors" />
            <h4 className="text-5xl font-serif font-black mb-2 text-white">{item.val}</h4>
            <p className="text-white/60 tracking-[0.2em] font-bold uppercase text-[12px] mt-4">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Faculty Section ---
export const Faculty = () => (
  <section className="py-32 text-center bg-[#F8F9FA]" id="faculty">
    <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
      <div className="mb-20">
        <h2 className="font-serif font-black text-5xl mb-4 text-[#1B4D8E]">Voices of Excellence</h2>
        <p className="text-[#5c5855] text-lg font-medium">Mentorship from the industry's most distinguished technical leaders.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { name: 'Dr. Julian Thorne', role: 'Dean of Computer Science', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300' },
          { name: 'Prof. Sarah Vance', role: 'Director of Quantitative Finance', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300' },
          { name: 'Dr. Marcus Chen', role: 'Head of Cyber Security', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=300' }
        ].map((item, idx) => (
          <motion.div key={idx} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.2 }} viewport={{ once: true }} className="group">
            <div className="w-[180px] h-[180px] rounded-full mx-auto mb-6 overflow-hidden border-[3px] border-[#1B4D8E]/10 transition-transform duration-500 group-hover:scale-105 shadow-xl">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-serif font-black text-2xl text-[#3E3A36] mb-1">{item.name}</h4>
            <p className="text-[#5c5855] font-bold text-[13px] uppercase tracking-widest">{item.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Quote Section ---
export const Quote = () => (
    <section className="py-32 text-center overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
          <h3 className="font-serif font-black text-4xl md:text-5xl italic leading-tight mb-8 text-[#E5AA3E] max-w-5xl mx-auto">
            "Excellence is not a singular act, but a lineage of intentional masteries."
          </h3>
          <div className="w-[100px] h-[3px] bg-[#1B4D8E] mx-auto mb-8 opacity-20"></div>
          <p className="text-[#3E3A36] uppercase tracking-[0.2em] text-[13px] font-bold">Institutional Philosophy 2026</p>
        </motion.div>
      </div>
    </section>
  );

// --- CTA Section ---
export const CTA = () => (
  <section className="py-32 bg-[#EFE7DF]" id="admissions">
    <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white rounded-[2rem] p-12 md:p-24 text-center shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-serif font-black text-4xl md:text-6xl mb-6 text-[#1B4D8E]">Join the Global Standard</h2>
          <p className="text-[#5c5855] font-medium text-lg mb-10 max-w-2xl mx-auto">
            Admissions for the 2026 Academic Season are now open. Secure your place at the forefront of the technological revolution.
          </p>
          <a href="#" className="inline-block bg-[#1B4D8E] text-white px-12 py-5 rounded-full font-bold hover:bg-[#E5AA3E] transition-all hover:-translate-y-1 hover:shadow-xl uppercase tracking-[0.2em] text-[13px]">
             Application Portal
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
