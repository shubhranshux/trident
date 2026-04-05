import React, { useEffect } from 'react';

// Page components
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import Identity from './components/Identity';
import History from './components/History';
import Recognitions from './components/Recognitions';
import Leadership from './components/Leadership';
import Success from './components/Success';
import Compliance from './components/Compliance';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#F8F9FA] text-[#3E3A36] font-['Outfit'] overflow-x-hidden relative">
      
      {/* Subtle Grid Overlay */}
      <div className="fixed inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none z-[9999]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%231A1817' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>

      <main className="pt-[80px]">
        <div id="hero"><Hero /></div>
        <div id="stats-counter"><StatsCounter /></div>
        <div id="identity"><Identity /></div>
        <div id="milestones"><History /></div>
        <div id="academics"><Recognitions /></div>
        <div id="leadership"><Leadership /></div>
        <div id="success"><Success /></div>
        <div id="compliance"><Compliance /></div>
      </main>
    </div>
  );
}
