import { FadeInUp, ScaleReveal } from "../utils/animations";
import aboutImg1 from "../assets/about_students_studying.jpg";
import aboutImg2 from "../assets/about_engineering_workshop.jpg";
import { Award, BookOpen, Shield, GraduationCap, Eye, Target, Building2, FlaskConical } from "lucide-react";

export default function AboutSection() {
  const accreditationCards = [
    { icon: <Award size={24}/>, v: "NAAC",  l: "Accredited Institution", color: "#E8BD63" },
    { icon: <BookOpen size={24}/>, v: "NBA", l: "6 Programmes Accredited", color: "#C41E3A" },
    { icon: <Shield size={24}/>, v: "AICTE", l: "Approved by Govt. of India", color: "#2E6DB4" },
    { icon: <GraduationCap size={24}/>, v: "BPUT", l: "Affiliated University", color: "#3EA644" },
  ];

  const badges = [
    "NAAC Accredited",
    "NBA Accredited (6 Programmes)",
    "Approved by AICTE",
    "Affiliated to BPUT",
    "DSIR SIRO",
    "HESI",
  ];

  const missionPoints = [
    "To foster holistic excellence in the new generation of students.",
    "To instill in them, the power of aggressive positive thinking, insatiable desire for information and knowledge, a penchant for out-of-the-box ideation and capacity of execution.",
    "To contribute to the society with honesty and integrity through innovative research in the multi-disciplinary areas of evolving and upcoming technologies.",
  ];

  return (
    <section id="about" className="py-28 bg-[#F5EEEC] relative overflow-hidden transition-transform duration-700">
      {/* Decorative Blur blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary opacity-10 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Images Grid with Scale Reveals */}
          <div className="relative h-[600px]">
            <ScaleReveal duration={1200} className="absolute top-0 left-0 w-4/5 h-[450px] z-10">
              <img src={aboutImg1} alt="Students Studying" className="w-full h-full object-cover rounded-3xl shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)] border-4 border-white bg-soft" />
            </ScaleReveal>
            <ScaleReveal delay={300} duration={1200} className="absolute bottom-0 right-0 w-3/5 h-[350px] z-20">
              <img src={aboutImg2} alt="Engineering Lab" className="w-full h-full object-cover rounded-3xl shadow-[0_30px_60px_-15px_rgba(27,77,142,0.4)] border-8 border-[#F1F5F9]" />
            </ScaleReveal>
            
            {/* Floating Badge */}
            <div className="absolute top-1/2 -left-8 z-30">
              <FadeInUp delay={600}>
                <div className="bg-white p-6 rounded-2xl shadow-2xl border border-soft max-w-[200px]">
                  <div className="text-secondary mb-2"><Award size={32} /></div>
                  <div className="font-bold text-lg text-[#3E3A36]">20+ Years</div>
                  <div className="text-sm font-semibold text-secondary">of Academic Legacy</div>
                </div>
              </FadeInUp>
            </div>
          </div>

          {/* About Content */}
          <div>
            <FadeInUp>
              <span className="rose-rule"></span>
              <h2 className="serif text-4xl md:text-5xl font-bold text-[#3E3A36] mb-8 leading-[1.15] relative z-10 inline-block">
                <span className="absolute -top-2 -left-4 w-32 h-14 bg-soft transform -rotate-3 -z-10 rounded-sm"></span>
                Built on a foundation of <span className="text-[#EAB308] italic">academic excellence.</span>
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-[#3E3A36]/80 leading-relaxed text-lg mb-8 font-medium">
                Founded in 2005 as a unit of the Dinabandhu Foundation, Trident Academy of Technology is one of India's leading private technical institutions. NAAC Accredited and NBA Accredited for 6 Programmes, Approved by AICTE, and Affiliated to BPUT. Recognized as DSIR SIRO and a member of HESI.
              </p>
            </FadeInUp>

            {/* Accreditation Badge Chips */}
            <FadeInUp delay={250}>
              <div className="flex flex-wrap gap-2 mb-10">
                {badges.map((badge, i) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] px-4 py-2 rounded-full border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-default"
                    style={{
                      borderColor: accreditationCards[i % accreditationCards.length]?.color || '#A59381',
                      color: accreditationCards[i % accreditationCards.length]?.color || '#3E3A36',
                      background: `${accreditationCards[i % accreditationCards.length]?.color || '#A59381'}08`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accreditationCards[i % accreditationCards.length]?.color || '#A59381' }} />
                    {badge}
                  </span>
                ))}
              </div>
            </FadeInUp>

            {/* Accreditation Stat Cards */}
            <div className="grid grid-cols-2 gap-6">
              {accreditationCards.map((f, i) => (
                <FadeInUp key={f.l} delay={300 + (i * 100)}>
                  <div className="relative rounded-3xl overflow-hidden group h-[200px] shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer">
                    {/* Geometric corner triangle */}
                    <div className="absolute top-0 right-0 w-0 h-0 z-40" style={{ borderLeft: '40px solid transparent', borderTop: `40px solid ${f.color}` }} />
                    {/* Background Images based on index */}
                    <img src={
                      i === 0 ? aboutImg1 : 
                      i === 1 ? aboutImg2 : 
                      i === 2 ? aboutImg1 : aboutImg2
                    } alt={f.l} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-20 group-hover:opacity-40" />
                    <div className="absolute inset-0 bg-[#3E3A36]/80 flex flex-col justify-end p-6 group-hover:opacity-0 transition-opacity duration-500 z-10">
                      <div className="mb-auto" style={{ color: f.color }}>{f.icon}</div>
                      <div className="serif text-3xl font-bold text-white mb-1">{f.v}</div>
                      <div className="text-[11px] text-white/60 uppercase tracking-widest font-bold">{f.l}</div>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-6 transition-opacity duration-500 mix-blend-multiply z-20" style={{ backgroundColor: `${f.color}E6` }}></div>
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                      <div className="text-white mb-auto transform scale-110 origin-top-left transition-transform duration-500">{f.icon}</div>
                      <div className="serif text-3xl font-bold text-white mb-1 translate-x-1 transition-transform">{f.v}</div>
                      <div className="text-[11px] text-white/80 uppercase tracking-widest font-bold">{f.l}</div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>

            {/* Tri-color accent stripe */}
            <div className="flex items-center gap-0 mt-8">
              <div className="h-[3px] flex-1 bg-gradient-to-r from-transparent to-[#E8BD63]" />
              <div className="h-[3px] w-1/4 bg-[#C41E3A]" />
              <div className="h-[3px] w-1/6 bg-[#2E6DB4]" />
            </div>
            
            <FadeInUp delay={700}>
              <a href="#" className="mt-12 group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#3E3A36] hover:text-primary transition-colors">
                <span className="w-12 h-[2px] bg-secondary group-hover:w-16 group-hover:bg-primary transition-all"></span>
                Read Our Full Story
              </a>
            </FadeInUp>
          </div>
          
        </div>

        {/* ─── Vision & Mission Section ─── */}
        <FadeInUp delay={300}>
          <div className="mt-24">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#E8BD63]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A59381]">Guiding Principles</span>
                <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#E8BD63]" />
              </div>
              <h3 className="serif text-3xl md:text-5xl font-bold text-[#3E3A36] leading-tight">
                Our <span className="text-[#EAB308] italic">Vision</span> & <span className="text-[#2C3A8C] italic">Mission</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Vision Card */}
              <FadeInUp delay={400}>
                <div className="relative rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-700 h-full" style={{ background: 'linear-gradient(145deg, #FBF7F0 0%, #F5EEEC 40%, #EDE4DB 100%)' }}>
                  {/* Top accent bar */}
                  <div className="h-[4px] w-full bg-gradient-to-r from-[#E8BD63] via-[#D4A84B] to-[#E8BD63]/40" />
                  
                  {/* Decorative floating shapes */}
                  <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-[#E8BD63]/8 group-hover:scale-150 transition-transform duration-1000" />
                  <div className="absolute bottom-10 right-16 w-16 h-16 rounded-full bg-[#E8BD63]/5 group-hover:scale-125 transition-transform duration-700 delay-100" />
                  <div className="absolute top-0 right-0 w-0 h-0" style={{ borderLeft: '70px solid transparent', borderTop: '70px solid rgba(232,189,99,0.12)' }} />

                  <div className="relative p-10 md:p-12">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E8BD63] to-[#D4A84B] flex items-center justify-center text-white shadow-[0_8px_24px_-6px_rgba(232,189,99,0.5)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Eye size={30} />
                      </div>
                      <div>
                        <h4 className="serif text-3xl font-bold text-[#3E3A36]">Vision</h4>
                        <div className="w-10 h-[2px] bg-[#E8BD63] mt-1.5 group-hover:w-16 transition-all duration-500" />
                      </div>
                    </div>
                    
                    {/* Quote */}
                    <div className="relative">
                      <div className="absolute -top-4 -left-2 text-[80px] leading-none text-[#E8BD63]/15 font-serif select-none">"</div>
                      <blockquote className="relative text-[#3E3A36]/80 text-[19px] md:text-[22px] leading-relaxed font-medium italic pl-8 border-l-[3px] border-[#E8BD63]/50">
                        To become a sustainable institution of excellence, advancing innovative education, research and skill development.
                      </blockquote>
                    </div>
                  </div>
                </div>
              </FadeInUp>

              {/* Mission Card */}
              <FadeInUp delay={500}>
                <div className="relative rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-700 h-full" style={{ background: 'linear-gradient(145deg, #F0F2FA 0%, #E8EAF6 40%, #DDE0F2 100%)' }}>
                  {/* Top accent bar */}
                  <div className="h-[4px] w-full bg-gradient-to-r from-[#2C3A8C] via-[#3a4aad] to-[#2C3A8C]/40" />
                  
                  {/* Decorative floating shapes */}
                  <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-[#2C3A8C]/5 group-hover:scale-150 transition-transform duration-1000" />
                  <div className="absolute bottom-10 right-16 w-16 h-16 rounded-full bg-[#2C3A8C]/4 group-hover:scale-125 transition-transform duration-700 delay-100" />
                  <div className="absolute top-0 right-0 w-0 h-0" style={{ borderLeft: '70px solid transparent', borderTop: '70px solid rgba(44,58,140,0.08)' }} />

                  <div className="relative p-10 md:p-12">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2C3A8C] to-[#3a4aad] flex items-center justify-center text-white shadow-[0_8px_24px_-6px_rgba(44,58,140,0.5)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Target size={30} />
                      </div>
                      <div>
                        <h4 className="serif text-3xl font-bold text-[#3E3A36]">Mission</h4>
                        <div className="w-10 h-[2px] bg-[#2C3A8C] mt-1.5 group-hover:w-16 transition-all duration-500" />
                      </div>
                    </div>
                    
                    {/* Mission Points */}
                    <ol className="space-y-5">
                      {missionPoints.map((point, i) => (
                        <li key={i} className="flex gap-4 group/item">
                          <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-[#2C3A8C] to-[#3a4aad] text-white text-[12px] font-black flex items-center justify-center mt-0.5 shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                            {i + 1}
                          </span>
                          <p className="text-[#3E3A36]/70 text-[15px] leading-relaxed font-medium">{point}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </FadeInUp>

      </div>
    </section>
  );
}
