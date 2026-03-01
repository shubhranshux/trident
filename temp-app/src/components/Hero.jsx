import { FadeInUp, SlideIn } from "../utils/animations";
import { ArrowRight } from "lucide-react";
import heroImg1 from "../assets/hero-bg-new.jpg";

export default function Hero() {
  return (
    <>
      {/* Spacer to preserve document flow while Hero is fixed */}
      <div className="h-[700px] md:h-[850px] w-full relative z-0" aria-hidden="true"></div>
      
      <section className="fixed top-0 left-0 w-full h-[700px] md:h-[850px] overflow-hidden bg-bg-light z-0">
      {/* Single Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img src={heroImg1} alt="Campus" className="w-full h-full object-cover" />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1817]/90 via-[#1A1817]/60 to-[#1A1817]/30"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <SlideIn direction="left" delay={100} duration={1000}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#EFE7DF] text-[10px] font-bold uppercase tracking-[0.25em] px-5 py-2.5 rounded-full mb-8 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse inline-block"></span>
              Forging the Next Generation of Innovators
            </div>
          </SlideIn>
          
          <FadeInUp delay={300} duration={1200}>
            <h1 className="serif text-5xl md:text-7xl lg:text-[84px] font-black text-white leading-[1.05] mb-6 max-w-4xl drop-shadow-2xl">
              Academic <span className="italic">Excellence.</span><br/>
              Infinite Possibilities.
            </h1>
          </FadeInUp>
          
          <FadeInUp delay={500} duration={1200}>
            <p className="text-[#F5EEEC]/90 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl drop-shadow">
              Immerse yourself in a world-class environment with state-of-the-art facilities, renowned faculty, and an emphasis on cutting-edge research.
            </p>
            <div className="flex flex-wrap gap-5 mt-4">
              <a href="#" className="btn-rose px-8 py-4 rounded-md font-bold text-sm flex items-center gap-3">
                Discover Programs <ArrowRight size={18} />
              </a>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
    </>
  );
}
