import { FadeInUp } from "../../utils/animations";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PROGRAMS } from "../../data/constants";
import bannerImg from "../../assets/chatgpt-hero.png"; // reusing hero image for banner

export default function Academics() {
  return (
    <div className="bg-[#F5EEEC] min-h-screen flex flex-col pt-24">
      <Header />
      
      {/* Academics Banner */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={bannerImg} 
            alt="Academics" 
            className="w-full h-full object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-[#3E3A36]/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
          <FadeInUp delay={100} duration={800}>
            <div className="flex items-center justify-center gap-3 mb-4 text-white/80">
              <BookOpen size={24} />
              <span className="text-[14px] uppercase tracking-[0.2em] font-bold">Academics at Trident</span>
            </div>
            <h1 className="serif text-5xl md:text-7xl font-black text-white leading-tight">
              Programs & <span className="text-secondary italic">Departments</span>
            </h1>
          </FadeInUp>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          
          <FadeInUp delay={200} duration={1000}>
            <div className="mb-16 max-w-3xl">
              <span className="rose-rule"></span>
              <h2 className="serif text-4xl md:text-5xl font-black text-[#3E3A36] mb-6">Explore Our Disciplines</h2>
              <p className="text-[#3E3A36]/80 text-lg leading-relaxed font-medium">
                Trident Academy of Technology offers a diverse array of undergraduate and postgraduate programs designed to foster innovation, critical thinking, and leadership. Our curriculum integrates theoretical depth with practical application, preparing students for the challenges of tomorrow.
              </p>
            </div>
          </FadeInUp>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((prog, idx) => (
              <FadeInUp key={idx} delay={300 + idx * 100} duration={800} className="h-full">
                <div className="card-hover bg-white rounded-xl p-8 h-full flex flex-col justify-between group">
                  <div>
                    <div className="text-4xl mb-6 bg-soft inline-flex items-center justify-center w-16 h-16 rounded-full shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {prog.icon}
                    </div>
                    <h3 className="serif text-2xl font-black text-[#3E3A36] mb-3 leading-snug group-hover:text-primary transition-colors">
                      {prog.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-soft text-primary text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded">
                        {prog.dept}
                      </span>
                      <span className="bg-soft text-[#3E3A36] text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded">
                        {prog.dur}
                      </span>
                      <span className="bg-soft text-[#3E3A36] text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded">
                        {prog.seats} Seats
                      </span>
                    </div>
                  </div>
                  
                  <a 
                    href={prog.href}
                    className="flex items-center gap-2 text-[13px] font-black uppercase tracking-widest text-[#3E3A36] group-hover:text-primary transition-colors mt-auto pt-6 border-t border-[#3E3A36]/10"
                  >
                    View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </FadeInUp>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <FadeInUp delay={600} duration={1000}>
            <div className="mt-24 bg-primary rounded-2xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-brand-green/20 mix-blend-overlay"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <GraduationCap size={48} className="text-white mx-auto mb-6 opacity-90" />
                <h3 className="serif text-4xl text-white font-black mb-6">Ready to shape your future?</h3>
                <p className="text-white/80 font-medium mb-10 text-lg">
                  Join a community of innovators and leaders. Applications are now open for the upcoming academic session.
                </p>
                <a href="https://admissions-tat.tekkzy.com" className="btn-outline-white inline-flex items-center gap-3 px-8 py-4 rounded-lg font-extrabold text-[14px] uppercase tracking-wider bg-white/10 hover:bg-white text-white hover:text-primary border-white transition-all">
                  Apply Now <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </FadeInUp>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
