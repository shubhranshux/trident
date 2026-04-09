import React, { useEffect, useState, useCallback } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImg1 from "../assets/hero finall.png";

const slides = [
  {
    tag: "Admissions 2026–27",
    heading: <>Admissions <br /><span className="italic text-[#EAB308]">Open.</span><br /><span className="text-[#212529]">Shape Your Future.</span></>,
    subtext: "Your journey to excellence begins here. Join Odisha's premier technical institution and unlock infinite possibilities.",
    ctaLabel: "Apply Now",
    ctaHref: "/apply",
  },
  {
    tag: "About Trident",
    heading: <>Academic <br /><span className="italic text-[#EAB308]">Excellence.</span><br /><span className="text-[#212529]">Infinite Possibilities.</span></>,
    subtext: "Immerse yourself in Odisha's premier technical ecosystem. We combine rigorous academics with world-class innovation labs to forge the leaders of tomorrow.",
    ctaLabel: "Know More",
    ctaHref: "/about",
  },
  {
    tag: "Placements",
    heading: <>120+ Companies. <br /><span className="italic text-[#EAB308]">Career-Ready</span><br /><span className="text-[#212529]">Graduates.</span></>,
    subtext: "Where talent meets opportunity. Our graduates are placed across India's top firms with strong packages and fulfilling careers.",
    ctaLabel: "View Placements",
    ctaHref: "#placements",
  },
  {
    tag: "Campus Life",
    heading: <>A Campus <br /><span className="italic text-[#EAB308]">That Inspires.</span><br /><span className="text-[#212529]">Life Beyond Books.</span></>,
    subtext: "A corporate-styled campus in the heart of Bhubaneswar — from advanced labs to vibrant student clubs, Trident has it all.",
    ctaLabel: "Explore Campus",
    ctaHref: "/campus-life",
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const goToSlide = useCallback((index) => {
    if (index === activeSlide || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlide(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 400);
  }, [activeSlide, isTransitioning]);

  // Auto-rotate every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-32 md:pt-40 pb-20 group">
      
      {/* Diagonal Background Split */}
      <div className="absolute top-0 right-0 w-[45%] h-full -skew-x-12 translate-x-32 z-0 hidden lg:block bg-[#FAF9F7]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EFE7DF]/20 skew-y-12 -translate-x-32 z-0" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%231A1817' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Content with Slider */}
        <div className="text-left">
          {/* Tag */}
          <div className={`flex items-center gap-4 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mb-8`}>
             <div className="w-12 h-[2px] bg-[#8B6E66]"></div>
             <span className="text-[12px] font-black text-[#8B6E66] uppercase tracking-[.4em]">Trident Academy of Technology</span>
          </div>

          {/* Slide Content with Crossfade */}
          <div className="relative min-h-[340px] md:min-h-[380px]">
            {/* Slide Tag */}
            <div
              className="mb-4 transition-all duration-500 ease-out"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(-10px)' : 'translateY(0)',
              }}
            >
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-white bg-[#2C3A8C] px-4 py-1.5 rounded-full">
                {slide.tag}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-serif text-5xl md:text-7xl lg:text-[82px] font-black text-[#212529] leading-[1] tracking-tight mb-8 transition-all duration-600 ease-out"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
                transition: 'opacity 500ms ease-out, transform 500ms ease-out',
              }}
            >
              {slide.heading}
            </h1>

            {/* Subtext */}
            <p
              className="text-[17px] md:text-lg text-[#5c5855] max-w-xl mb-10 leading-relaxed"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(15px)' : 'translateY(0)',
                transition: 'opacity 500ms ease-out 100ms, transform 500ms ease-out 100ms',
              }}
            >
              {slide.subtext}
            </p>

            {/* CTA */}
            <div
              className="flex flex-wrap items-center gap-6"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
                transition: 'opacity 400ms ease-out 150ms, transform 400ms ease-out 150ms',
              }}
            >
              <a href={slide.ctaHref} className="bg-[#006738] text-white px-10 py-5 rounded-2xl font-bold text-[13px] uppercase tracking-widest flex items-center gap-3 transition-all duration-300 hover:bg-[#004d3d] hover:shadow-2xl hover:-translate-y-1">
                {slide.ctaLabel} <ArrowRight size={18} />
              </a>
              <a href="#about" className="text-[#006738] font-bold text-[13px] uppercase tracking-widest border-b-2 border-[#EAB308] hover:border-[#006738] transition-colors pb-1">
                Know Our Impact
              </a>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className={`flex items-center gap-3 mt-10 transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="relative group/dot p-1"
              >
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === activeSlide 
                      ? 'w-10 bg-[#2C3A8C]' 
                      : 'w-2 bg-[#8B6E66]/40 hover:bg-[#8B6E66]/70'
                  }`}
                />
                {/* Progress bar inside active dot */}
                {i === activeSlide && (
                  <div
                    className="absolute top-1 left-1 h-2 rounded-full bg-[#EAB308]"
                    style={{
                      animation: 'dotProgress 5s linear infinite',
                      width: '0%',
                    }}
                  />
                )}
              </button>
            ))}
            <span className="text-[10px] font-bold text-[#8B6E66]/60 uppercase tracking-widest ml-3">
              {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Right Side: Image with asymmetric frame */}
        <div className={`relative transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
           {/* Asymmetric offset frame — different corner radii */}
           <div className="absolute -inset-4 border-2 border-[#EFE7DF] -z-10 hidden lg:block" style={{ borderRadius: '8px 40px 8px 40px' }} />
           
           <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImg1}
                alt="Students in Trident Lab" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2000ms]" 
              />
              {/* Floating Accent Block — NBA instead of NAAC A+ */}
              <div className="absolute bottom-8 right-8 bg-[#283B91] text-white p-6 rounded-xl hidden md:block">
                 <div className="text-3xl font-black mb-1">NBA</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">6 Programmes Accredited</div>
              </div>
              {/* Small asymmetric badge — top left */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-[#212529] px-4 py-2 rounded-lg hidden md:block shadow-md">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#8B6E66]">Est. 2005</div>
              </div>
           </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] font-black text-[#8B6E66] uppercase tracking-[.3em]">Scroll</span>
        <ChevronDown size={20} className="text-[#8B6E66]" />
      </div>

      {/* Dot progress animation */}
      <style>{`
        @keyframes dotProgress {
          0% { width: 0%; }
          100% { width: calc(100% - 8px); }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
