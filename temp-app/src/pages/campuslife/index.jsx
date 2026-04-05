import React from 'react';
import Hero from './components/Hero';
import News from './components/News';
import { 
  Research, 
  Stories, 
  Stats, 
  Campus, 
  Impact, 
  Faculty, 
  Quote, 
  CTA 
} from './components/Sections';

export default function CampusLifePage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return (
    <div className="bg-soft-off-white min-h-screen font-body overflow-x-hidden">
      <main>
        <Hero />
        <News />
        <Research />
        <Stories />
        <Stats />
        <Campus />
        <Impact />
        <Faculty />
        <Quote />
        <CTA />
      </main>
    </div>
  );
}

