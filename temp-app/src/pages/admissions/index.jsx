import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Overview from './components/Overview';
import StoryBanner from './components/StoryBanner';
import Programs from './components/Programs';
import Eligibility from './components/Eligibility';
import Process from './components/Process';
import Exams from './components/Exams';
import MediaSection from './components/MediaSection';
import ResourcesSection from './components/ResourcesSection';

export default function AdmissionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8F9FA] text-[#3E3A36] font-['Outfit'] overflow-x-hidden relative">
      
      {/* Subtle Grid Overlay */}
      <div className="fixed inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none z-[9999]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%231A1817' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>

      <main className="pt-[80px]">
        <Hero />
        <Overview />
        
        <StoryBanner 
          image="/assets/admissions/story_achievement_new.png"
          title="Share Achievements"
          text="Discover new horizons of professional success. Our programs meticulously bridge the gap between abstract theory and exceptional real-world performance."
          reversed={true}
        />

        <Programs />
        <Eligibility />

        <StoryBanner 
          image="/assets/admissions/story_guidance_new.png"
          title="Guided Journey"
          text="Experience a seamless transition into higher education. Empathy, structured support, and peer guidance form the core pillars of our seamless enrollment experience."
        />

        <Process />
        <Exams />

        <StoryBanner 
          image="/assets/admissions/story_collaboration_new.png"
          title="Share Opportunities"
          text="Foster a transformative academic environment. Join a vibrant community committed to innovation, shared goals, and uncompromised academic rigor."
        />

        <MediaSection />
        <ResourcesSection />
      </main>
    </div>
  );
}
