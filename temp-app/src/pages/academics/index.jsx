import React, { useEffect, useState } from 'react';
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import InstitutionalInfo from "./components/InstitutionalInfo";
import RankingRecognition from "./components/RankingRecognition";
import AcademicPrograms from "./components/AcademicPrograms";
import { ArrowRight } from 'lucide-react';

const departments = [
  {
    title: "Department of Engineering",
    description: "Focused on quality technical education with strong fundamentals, practical exposure to prepare students for engineering.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/departments-of-engineering"
  },
  {
    title: "Department of MCA",
    description: "Provides in-depth knowledge in computer applications, software development, and emerging technologies with hands-on learning.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/department-of-mca"
  },
  {
    title: "Department of MBA",
    description: "Develops managerial and leadership skills through active learning, industry exposure, and case studies.",
    image: "/images/mba_department.jpg",
    linkHref: "https://academics-tat.tekkzy.com/#"
  }
];

const journals = [
  {
    title: "TAT Library",
    description: "Enables users to search and locate books, journals, and other library materials quickly and efficiently.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/tat-library"
  },
  {
    title: "Catalogue search",
    description: "Enables users to search and locate books, journals, and other library materials quickly and efficiently.",
    image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/catalogue-search"
  },
  {
    title: "E resources",
    description: "Provides access to online journals, e-books, databases, and learning materials.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/e-resources"
  }
];

const digitalResources = [
  {
    title: "Digital Resources",
    description: "Offers a range of digital content including e-books, online databases, and multimedia learning tools.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/digital-resources"
  },
  {
    title: "Print Journals",
    description: "A collection of national and international print journals supporting academic and research.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/print-journals"
  },
  {
    title: "Open Access",
    description: "Free access to scholarly articles, research papers, and academic publications.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/open-access"
  },
  {
    title: "E Newspaper",
    description: "Access to leading national and international newspapers in digital format.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/e-newspaper"
  },
  {
    title: "Tri-Digi-Space",
    description: "A unified search platform to access library books, e-resources, journals, and digital content.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/tri-digi-space"
  }
];

export default function Academics() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    // Scroll to top on mount
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA]" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Hero />
      
      {/* Introduction block with Stats */}
      <section id="about" className="pt-40 pb-32 overflow-hidden relative group">
        
        <div className="absolute top-0 left-0 w-1/4 h-full bg-[#EFE7DF]/30 -skew-x-12 -translate-x-20 z-0 hidden lg:block"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-2/3 bg-[#FAF9F7] skew-x-12 translate-x-20 z-0 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-6 xl:px-12 relative z-10">
           
           <div className={`transition-all duration-1000 ease-out transform ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#212529] leading-tight mb-6 max-w-4xl tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                For nearly two decades, Trident has been advancing education with <span className="italic text-[#8B6E66]">purpose and resolve.</span>
              </h2>
             <p className="text-[#495057] text-[16px] md:text-[20px] max-w-3xl leading-relaxed mb-20 font-medium">
               A leading technical and management institution in eastern India, Trident advances education that matters by combining rigorous academics, industry relevance, and real-world learning to empower students to create meaningful impact in a rapidly changing world.
             </p>
           </div>
           
           {/* Asymmetric card grid — different column sizes */}
           <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10 mt-12 transition-all duration-1000 delay-200 transform ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
             
             {/* Card 1: Wider — 5 cols */}
             <div className="md:col-span-5 bg-white border-b-4 border-[#E5AA3E] rounded-2xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transform transition-transform duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#FFF0D4]/80 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="relative z-10 h-full flex flex-col justify-end min-h-[160px]">
                  <h4 className="text-5xl md:text-6xl font-black mb-4 text-[#212529]" style={{ fontFamily: "'Playfair Display', serif" }}>Top-Ranked</h4>
                  <p className="text-[#6C757D] text-[13px] font-black uppercase tracking-[.25em] leading-relaxed">Premier Technical Institution</p>
                </div>
             </div>

             {/* Card 2: 4 cols */}
             <div className="md:col-span-4 bg-[#283B91] border-b-4 border-[#1a2861] rounded-2xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(40,59,145,0.4)] transform transition-transform duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23FFFFFF' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>
                <div className="relative z-10 h-full flex flex-col justify-end min-h-[160px]">
                  <h4 className="text-5xl md:text-6xl font-black mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>3,000+</h4>
                  <p className="text-white/70 text-[13px] font-black uppercase tracking-[.25em] leading-relaxed">Impactful Careers Placed</p>
                </div>
             </div>

             {/* Card 3: 3 cols — narrower */}
             <div className="md:col-span-3 bg-[#1A1817] rounded-2xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(26,24,23,0.5)] transform transition-transform duration-500 hover:-translate-y-2 group flex flex-col justify-center relative overflow-hidden border-b-4 border-[#8B6E66]">
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[160px]">
                  <div className="flex flex-col items-start gap-4 mb-8">
                    <div className="w-20 h-20 bg-white rounded-2xl flex flex-shrink-0 items-center justify-center p-3 border border-white/20 shadow-2xl">
                      <img src="/aicte_logo.png" alt="AICTE" className="w-full h-full object-contain" />
                    </div>
                    <h4 className="text-3xl font-black text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>AICTE <br/><span className="text-base font-medium opacity-60 text-[#A59381] mt-1 inline-block">Approved Center</span></h4>
                  </div>
                  <p className="text-[#A59381] text-[11px] font-black uppercase tracking-[.3em] mt-auto">Legacy Since 2005</p>
                </div>
             </div>

           </div>
        </div>
      </section>
      
      <RankingRecognition />
      <AcademicPrograms />
      <InstitutionalInfo />
      
      <FeatureSection title="Departments" cards={departments} variant="cinematic" />
      <FeatureSection title="Online Journals and Databases" cards={journals} variant="minimal" />
      <FeatureSection title="Digital Resources & Publications" cards={digitalResources} variant="angled" />
    </div>
  );
}
