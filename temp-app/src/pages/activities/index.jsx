import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Activities() {
  // --- Scroll Intersection Observer ---
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
          if (
            entry.target.classList.contains('glass-img') || 
            entry.target.classList.contains('club-card') || 
            entry.target.classList.contains('sport-card') || 
            entry.target.classList.contains('stat-badge')
          ) {
            entry.target.style.transitionDelay = `${index * 0.1}s`;
          }
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#EFE7DF] text-[#3E3A36] font-['Playfair_Display'] overflow-x-hidden relative">
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-[180px] pb-[120px] min-h-screen flex items-center" id="activities">
          <div className="absolute inset-0 bg-transparent -z-10 pointer-events-none"></div>
          
          <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content */}
            <div 
              data-animate 
              className="opacity-0 translate-y-10 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <div className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide bg-blue-500/10 text-primary border border-blue-500/20 mb-6">
                TRIDENT ACADEMY OF TECHNOLOGY
              </div>
              <h1 className="text-[clamp(52px,7vw,88px)] font-bold tracking-tight mb-6 leading-tight">
                Ignite Your <br/>
                <span className="bg-gradient-to-br from-primary to-[#E56D24] text-transparent bg-clip-text">Passion & Creativity</span>
              </h1>
              <p className="text-xl leading-relaxed mb-10 max-w-[90%] font-medium text-[#3E3A36]/80">
                Discover a vibrant ecosystem of over 20+ student-led clubs. At TAT, we don't just teach technology; we nurture the innovators, performers, and leaders of tomorrow.
              </p>

              <div className="flex flex-wrap gap-4 mb-14">
                <Link to="#" className="px-7 py-3.5 rounded-full font-semibold text-[15px] bg-primary text-white hover:bg-[#349FCC] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                  Explore Opportunities
                </Link>
                <Link to="#" className="px-7 py-3.5 rounded-full font-semibold text-[15px] bg-transparent text-[#3E3A36] border border-[#3E3A36]/20 hover:border-primary hover:bg-blue-500/5 transition-all duration-300">
                  View Calendar
                </Link>
              </div>

              <div className="flex flex-wrap gap-5">
                {[
                  { icon: 'users-three', text: '20+ Active Clubs' },
                  { icon: 'confetti', text: '15+ Annual Events' },
                  { icon: 'basketball', text: '10+ Sports Facilities' }
                ].map((stat, i) => (
                  <div key={i} data-animate className="stat-badge flex items-center gap-3 bg-[#F5EEEC] py-2.5 pr-5 pl-4 rounded-lg border border-[#3E3A36]/10 border-l-2 border-l-primary text-[15px] font-semibold shadow-[-2px_0_10px_rgba(59,130,246,0.1)] opacity-0 translate-y-10 transition-all duration-800">
                    <span className="text-primary text-lg">
                      <i className={`ph-fill ph-${stat.icon}`}></i>
                    </span>
                    <span>{stat.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visuals */}
            <div className="relative h-[400px] md:h-[560px] perspective-[1000px]">
              <div className="relative w-full h-full transform-style-3d">
                <div data-animate className="glass-img absolute top-0 left-0 w-[55%] h-[48%] z-[2] bg-[#111115]/60 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-[0_4px_30px_rgba(0,0,0,0.15)] transition-transform duration-600 hover:-rotate-2 hover:scale-105 hover:z-10 hover:border-white/20 opacity-0 translate-y-10">
                  <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Students" className="rounded-xl w-full h-full object-cover" />
                </div>
                <div data-animate className="glass-img absolute top-[5%] right-0 w-[40%] h-[40%] z-[1] bg-[#111115]/60 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-[0_4px_30px_rgba(0,0,0,0.15)] transition-transform duration-600 hover:-rotate-2 hover:scale-105 hover:z-10 hover:border-white/20 opacity-0 translate-y-10">
                  <img src="https://images.unsplash.com/photo-1511516412963-801b050c92aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Campus Life" className="rounded-xl w-full h-full object-cover" />
                </div>
                <div data-animate className="glass-img absolute bottom-0 left-[5%] w-[45%] h-[45%] z-[3] bg-[#111115]/60 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-[0_4px_30px_rgba(0,0,0,0.15)] transition-transform duration-600 hover:-rotate-2 hover:scale-105 hover:z-10 hover:border-white/20 opacity-0 translate-y-10">
                  <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Friends" className="rounded-xl w-full h-full object-cover" />
                </div>
                <div data-animate className="glass-img absolute bottom-[5%] right-0 w-[45%] h-[52%] z-[4] bg-[#111115]/60 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-[0_4px_30px_rgba(0,0,0,0.15)] transition-transform duration-600 hover:-rotate-2 hover:scale-105 hover:z-10 hover:border-white/20 opacity-0 translate-y-10">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tech Lab" className="rounded-xl w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Divider */}
        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#3E3A36]/10 to-transparent my-0" />

        {/* CLUBS SECTION */}
        <section className="py-[120px] bg-white" id="clubs">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20" data-animate>
              <div className="mb-6 md:mb-0">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-px bg-primary shadow-[0_0_8px_var(--primary)]"></div>
                  <h2 className="text-[2.5rem] font-bold tracking-tight">Athenaeum of Clubs</h2>
                </div>
                <p className="text-lg opacity-80 max-w-xl">Find your tribe among our diverse specialized student organizations.</p>
              </div>
              <Link to="#" className="px-6 py-2.5 rounded-full border border-[#3E3A36]/20 font-semibold text-[15px] hover:border-primary hover:bg-blue-500/5 transition-all duration-300 flex items-center gap-2">
                View All 24 Clubs <i className="ph ph-arrow-right"></i>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: "/assets/activities/club_theatre_1775284777707.png", icon: "mask-happy", title: "Drama & Theatre", desc: "Where expressions find their stage.", delay: "100ms" },
                { img: "/assets/activities/club_music_1775284853863.png", icon: "music-note", title: "The Melody Hub", desc: "We don't do noise, we play art.", delay: "200ms" },
                { img: "/assets/activities/club_dance_1775284873092.png", icon: "guitar", title: "Rhythm Squad", desc: "Contemporary and folk dance forms.", delay: "300ms" },
                { img: "/assets/activities/club_arts_1775284893434.png", icon: "paint-brush", title: "Arts & Crafts", desc: "Canvas, clay, and visual storytelling.", delay: "400ms" },
                { img: "/assets/activities/club_robot_1775284912133.png", icon: "robot", title: "Robo-Trident", desc: "Building the future, one gear at a time.", delay: "500ms" },
                { img: "/assets/activities/club_code_1775285013076.png", icon: "code", title: "Code Wizards", desc: "Algorithms, hackathons, and coffee.", delay: "600ms" },
                { img: "https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/cta_innovation_lab.jpg", icon: "wifi-high", title: "IoT Explorers", desc: "Connecting things to change the world.", delay: "700ms" },
                { img: "https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/indian_business_presentation.png", icon: "device-mobile", title: "App Genesis", desc: "Mobile innovations for modern life.", delay: "800ms" }
              ].map((club, i) => (
                <div key={i} data-animate className="relative rounded-2xl overflow-hidden bg-white border border-[#E8A723]/20 shadow-sm transition-all duration-500 hover:border-primary hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.1)] hover:-translate-y-1 group opacity-0 translate-y-10" style={{ transitionDelay: club.delay }}>
                  <img src={club.img} className="w-full h-[200px] object-cover border-b border-[#3E3A36]/5" alt={club.title} />
                  <div className="p-6 relative">
                    <div className="absolute -top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] text-primary text-xl border border-[#3E3A36]/5 group-hover:-translate-y-1 transition-transform">
                      <i className={`ph ph-${club.icon}`}></i>
                    </div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{club.title}</h4>
                    <p className="text-[15px] opacity-70 leading-relaxed max-w-[85%]">{club.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#3E3A36]/10 to-transparent my-0" />

        {/* LEADERSHIP SECTION */}
        <section className="py-[120px] bg-[#F5EEEC]" id="leadership">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center justify-center mb-8" data-animate>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-px bg-primary shadow-[0_0_8px_var(--primary)]"></div>
                <h2 className="text-[2.5rem] font-bold tracking-tight">Student Leadership & Governance</h2>
              </div>
            </div>
            <p className="text-lg opacity-80 text-center mb-[50px] max-w-2xl mx-auto" data-animate>
              Empowering student voices through democratic representation.
            </p>

            <div className="flex justify-center gap-[60px] flex-wrap mt-[50px]">
              {[
                { name: "Rahul Verma", role: "PRESIDENT", img: "https://loremflickr.com/200/200/india,student?random=51", color: "blue" },
                { name: "Priya Singh", role: "VICE PRESIDENT", img: "https://loremflickr.com/200/200/india,student?random=52", color: "violet" },
                { name: "Ananya Roy", role: "GENERAL SECRETARY", img: "https://loremflickr.com/200/200/india,student?random=53", color: "blue" },
                { name: "Vikram Das", role: "TREASURER", img: "https://loremflickr.com/200/200/india,student?random=54", color: "violet" }
              ].map((leader, i) => (
                <div key={i} data-animate className="text-center opacity-0 translate-y-10 group">
                  <img 
                    src={leader.img} 
                    alt={leader.role}
                    className={`w-[120px] h-[120px] object-cover rounded-full border-4 p-1 mx-auto mb-4 transition-transform duration-300 group-hover:scale-105 ${leader.color === 'blue' ? 'border-[#2C3A8C]' : 'border-[#E56D24]'}`}
                  />
                  <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider mb-2 ${leader.color === 'blue' ? 'bg-blue-500/10 text-[#2C3A8C] border border-[#2C3A8C]/20' : 'bg-orange-500/10 text-[#E56D24] border border-[#E56D24]/20'}`}>
                    {leader.role}
                  </div>
                  <h4 className="text-[1.1rem] font-bold text-[#3E3A36]">{leader.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#3E3A36]/10 to-transparent my-0" />

        {/* SPORTS SECTION */}
        <section className="py-[120px] bg-white overflow-hidden relative" id="sports">
          <div className="w-full max-w-7xl mx-auto px-6 mb-[60px]">
            <div className="flex flex-col items-center text-center justify-center mb-8" data-animate>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-px bg-primary shadow-[0_0_8px_var(--primary)]"></div>
                <h2 className="text-[2.5rem] font-bold tracking-tight">Pulse & Play</h2>
              </div>
            </div>
            <p className="text-lg opacity-80 text-center max-w-2xl mx-auto" data-animate>
              World-class athletic infrastructure designed to foster sportsmanship and physical excellence.
            </p>
          </div>

          <div className="w-full relative py-10" data-animate>
             {/* Ticker Container with pure CSS animation mapping */}
             <div className="flex w-max animate-[ticker_50s_linear_infinite] hover:[animation-play-state:paused] gap-8 px-4">
                {/* Need to duplicate array to make it perfectly loop */}
                {[...Array(2)].map((_, groupIndex) => (
                  <div key={groupIndex} className="flex gap-8">
                    {[
                      { img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600&h=800", icon: "baseball", text: "Cricket Arena", color: "text-[#349FCC]" },
                      { img: "https://loremflickr.com/600/800/india,basketball?random=2", icon: "basketball", text: "Basketball Courts", color: "text-[#E56D24]" },
                      { img: "https://loremflickr.com/600/800/india,football?random=3", icon: "soccer-ball", text: "Football Turf", color: "text-[#EAB308]" },
                      { img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600&h=800", icon: "barbell", text: "Modern Gym", color: "text-primary" }
                    ].map((sport, idx) => (
                      <div key={idx} className="relative w-[300px] h-[400px] rounded-[24px] overflow-hidden group border border-[#3E3A36]/10 shadow-lg">
                        <img src={sport.img} alt={sport.text} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111115]/90 via-[#111115]/30 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col pt-6 border-t border-white/20 relative">
                           {/* Hover spin border effect via pseudo element */}
                           <div className="absolute top-0 left-0 w-8 h-px bg-white transition-all duration-500 group-hover:w-full group-hover:bg-[#349FCC]"></div>
                           <i className={`ph-light ph-${sport.icon} text-[2.5rem] mb-2 ${sport.color} opacity-90 group-hover:-translate-y-1 transition-transform`}></i>
                           <span className="text-white text-xl font-bold tracking-wide">{sport.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
             </div>
          </div>
        </section>

        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#3E3A36]/10 to-transparent my-0" />

        {/* RESEARCH SECTION */}
        <section className="py-[120px] bg-[#F5EEEC]" id="research">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20" data-animate>
              <div className="mb-6 md:mb-0">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-px bg-primary shadow-[0_0_8px_var(--primary)]"></div>
                  <h2 className="text-[2.5rem] font-bold tracking-tight">Research & Innovation Spotlight</h2>
                </div>
                <p className="text-lg opacity-80 max-w-xl">Driving technological advancement through dedicated research and academic excellence.</p>
              </div>
              <Link to="#" className="px-6 py-2.5 rounded-full border border-[#3E3A36]/20 font-semibold text-[15px] hover:border-primary hover:bg-blue-500/5 transition-all duration-300 flex items-center gap-2">
                View All Papers <i className="ph ph-arrow-right"></i>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              {[
                { tag: "PUBLISHED PAPER", title: "AI in Healthcare Systems", desc: "Exploring the implementation of neural networks in predictive diagnostics.", linkTxt: "Read Abstract", color: "blue" },
                { tag: "FUNDED PROJECT", title: "Smart Grid Optimisation", desc: "Developing efficient energy distribution algorithms for urban microgrids.", linkTxt: "View Project", color: "violet" },
                { tag: "PATENT PENDING", title: "Renewable Material Science", desc: "Creating biodegradable polymer composites for industrial packaging.", linkTxt: "Learn More", color: "blue" }
              ].map((card, idx) => (
                <div key={idx} data-animate className="bg-white/60 backdrop-blur-md border border-[#3E3A36]/10 p-8 rounded-2xl opacity-0 translate-y-10 hover:border-[#3E3A36]/30 transition-all duration-300">
                  <span className={`inline-block px-3 py-1 text-[0.65rem] font-bold tracking-wider rounded-full mb-4 ${card.color === 'blue' ? 'bg-blue-500/10 text-primary border border-primary/20' : 'bg-orange-500/10 text-[#E56D24] border border-[#E56D24]/20'}`}>
                    {card.tag}
                  </span>
                  <h4 className="text-[1.1rem] font-bold mb-3 text-[#3E3A36]">{card.title}</h4>
                  <p className="text-[0.9rem] opacity-80 mb-6">{card.desc}</p>
                  <Link to="#" className={`text-sm font-semibold flex items-center gap-1 ${card.color === 'blue' ? 'text-primary' : 'text-[#E56D24]'} hover:underline`}>
                    {card.linkTxt} <i className="ph ph-arrow-right"></i>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#3E3A36]/10 to-transparent my-0" />

        {/* EVENTS SECTION */}
        <section className="py-[120px] bg-white" id="events">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16" data-animate>
               <div className="w-10 h-px bg-primary shadow-[0_0_8px_var(--primary)]"></div>
               <h2 className="text-[2.5rem] font-bold tracking-tight">Legacy Events</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { img: "https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_campus_life.jpg", tag: "ANNUAL EVENT", title: "Trifest", desc: "The flagship annual cultural celebration; arts, music, and the diverse spirit of Trident.", linkTxt: "Relive the Memories", linkColor: "text-[#E56D24]", tagBg: "bg-[#E56D24]" },
                { img: "https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_seminar.jpg", tag: "TECH CONCLAVE", title: "Technotrix", desc: "The ultimate challenge for young minds to solve real-world problems through technology.", linkTxt: "Explore Projects", linkColor: "text-primary", tagBg: "bg-primary" }
              ].map((ev, i) => (
                <div key={i} data-animate className="relative h-[450px] rounded-3xl overflow-hidden group border border-[#3E3A36]/10 opacity-0 translate-y-10">
                  <img src={ev.img} alt={ev.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111115]/90 via-[#111115]/40 to-[#111115]/10"></div>
                  
                  <div className={`absolute top-6 right-6 ${ev.tagBg} text-white text-[0.65rem] font-bold tracking-wider px-4 py-1.5 rounded-full z-10`}>
                    {ev.tag}
                  </div>
                  
                  <div className="absolute bottom-10 left-10 right-10 z-10">
                    <h3 className="text-white text-[2rem] font-bold mb-3">{ev.title}</h3>
                    <p className="text-white/80 text-[1rem] leading-relaxed mb-6 font-medium max-w-sm">{ev.desc}</p>
                    <Link to="#" className={`${ev.linkColor} font-semibold flex items-center gap-2 hover:underline tracking-wide`}>
                      {ev.linkTxt} <i className="ph ph-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#3E3A36]/10 to-transparent my-0" />

        {/* INNOVATION SECTION */}
        <section className="py-[120px] bg-[#111115] text-[#EFE7DF]" id="innovation">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16" data-animate>
              <div>
                <p className="text-[0.75rem] font-bold tracking-[0.2em] text-[#349FCC] mb-3">CUTTING-EDGE INFRASTRUCTURE</p>
                <h2 className="text-[3rem] font-bold tracking-tight text-white leading-tight">
                  Innovation &amp;<br/><em className="text-transparent bg-gradient-to-r from-[#E56D24] to-[#EAB308] bg-clip-text not-italic">Incubation Labs</em>
                </h2>
              </div>
              <p className="text-lg opacity-70 max-w-md">State-of-the-art facilities bridging the gap between academic learning and industry demands — where ideas become reality.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Hero Image */}
              <div className="lg:col-span-8 relative h-[500px] rounded-3xl overflow-hidden group border border-white/10" data-animate>
                 <img src="https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/indian_engineering_lab.png" alt="AI & Robotics Lab" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#111115]/80 via-transparent to-transparent"></div>
              </div>

              {/* Right List */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                {[
                  { img: "https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/prog_computer_science.jpg", title: "Advanced Software Lab", delay: "100ms" },
                  { img: "https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/cta_innovation_lab.jpg", title: "IoT Innovation Center", delay: "200ms" },
                  { img: "https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/cta_research_scholars.jpg", title: "Startup Incubation Hub", delay: "300ms" }
                ].map((item, i) => (
                  <div key={i} data-animate className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer opacity-0 translate-y-6" style={{ transitionDelay: item.delay }}>
                    <img src={item.img} alt={item.title} className="w-20 h-20 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                    <h3 className="text-[1.1rem] font-bold text-white leading-tight">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#3E3A36]/10 to-transparent my-0" />

        {/* CAMPUS FACILITIES BENTO GRID */}
        <section className="py-[120px] bg-white" id="vibe">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16" data-animate>
              <div>
                <p className="text-[0.75rem] font-bold tracking-[0.2em] text-primary mb-3">EXPLORE THE CAMPUS</p>
                <h2 className="text-[3rem] font-bold tracking-tight text-[#3E3A36] leading-tight">
                  World-Class<br/><em className="text-transparent bg-gradient-to-r from-[#e34dbf] to-[#6b4dff] bg-clip-text not-italic">Campus Facilities</em>
                </h2>
              </div>
              <p className="text-lg opacity-70 max-w-md">Every corner of Trident Academy is designed to inspire — from cutting-edge laboratories to serene reading halls and vibrant open-air quadrangles.</p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
              {/* Library - span 2 cols */}
              <div data-animate className="md:col-span-2 relative rounded-3xl overflow-hidden group opacity-0 translate-y-10" style={{ transitionDelay: '100ms' }}>
                <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Central Library" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111115]/80 via-[#111115]/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <i className="ph ph-books text-lg"></i>
                    </div>
                    <h3 className="text-white text-[1.4rem] font-bold">Central Library</h3>
                  </div>
                  <p className="text-white/70 text-sm max-w-md">A sprawling repository with over 100,000 volumes, private study pods, and digital journals.</p>
                </div>
              </div>

              {/* Cafeteria */}
              <div data-animate className="relative rounded-3xl overflow-hidden group opacity-0 translate-y-10" style={{ transitionDelay: '200ms' }}>
                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cafeteria" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111115]/80 via-[#111115]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <i className="ph ph-coffee text-lg"></i>
                    </div>
                    <h3 className="text-white text-[1.2rem] font-bold">Cafeteria & Dining</h3>
                  </div>
                </div>
              </div>

              {/* Quadrangles */}
              <div data-animate className="relative rounded-3xl overflow-hidden group opacity-0 translate-y-10" style={{ transitionDelay: '300ms' }}>
                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Quadrangles" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111115]/80 via-[#111115]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <i className="ph ph-wifi-high text-lg"></i>
                    </div>
                    <h3 className="text-white text-[1.2rem] font-bold">Campus Quadrangles</h3>
                  </div>
                </div>
              </div>

              {/* Athletics - span 2 cols */}
              <div data-animate className="md:col-span-2 relative rounded-3xl overflow-hidden group opacity-0 translate-y-10" style={{ transitionDelay: '400ms' }}>
                <img src="https://images.unsplash.com/photo-1628126235206-5260b9ea6441?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Athletics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111115]/80 via-[#111115]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <i className="ph ph-barbell text-lg"></i>
                    </div>
                    <h3 className="text-white text-[1.2rem] font-bold">Athletics & Wellness</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VOICES / TESTIMONIALS SECTION */}
        <section className="py-[120px] bg-[#F5EEEC] relative overflow-hidden" id="voices">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="text-center mb-16" data-animate>
              <p className="text-[0.75rem] font-bold tracking-[0.2em] text-primary mb-3">ALUMNI VOICES</p>
              <h2 className="text-[3rem] font-bold tracking-tight text-[#3E3A36]">
                Voices of <em className="not-italic text-transparent bg-gradient-to-r from-primary to-[#E56D24] bg-clip-text">Trident</em>
              </h2>
            </div>

            <div className="relative max-w-3xl mx-auto" data-animate>
              {/* Decorative glow */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>

              <div className="relative bg-white p-12 md:p-16 rounded-3xl border border-[#3E3A36]/10 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)]">
                {/* Oversized quote mark */}
                <div className="absolute top-8 left-10 text-[8rem] font-bold text-primary/5 leading-none pointer-events-none select-none" aria-hidden="true">&ldquo;</div>

                {/* Gold accent */}
                <div className="w-12 h-1 bg-gradient-to-r from-[#EAB308] to-[#E56D24] rounded-full mb-8"></div>

                <blockquote className="text-[1.25rem] leading-relaxed text-[#3E3A36] font-medium mb-8 relative z-10">
                  "The ecosystem at Trident is unparalleled. It provides the exact blend of rigorous academics and creative freedom needed to thrive in today's rapid technological landscape."
                </blockquote>

                <div className="w-full h-px bg-[#3E3A36]/10 mb-8"></div>

                <div className="flex items-center gap-4">
                  <img src="https://loremflickr.com/120/120/india,portrait?random=31" alt="Aarav Sharma" className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
                  <div>
                    <span className="block text-[1rem] font-bold text-[#3E3A36]">Aarav Sharma</span>
                    <span className="block text-sm opacity-60">Alumnus, Class of '23 · Data Scientist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MILESTONES SECTION */}
        <section className="py-[120px] bg-white" id="milestones">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16" data-animate>
              <div>
                <p className="text-[0.75rem] font-bold tracking-[0.2em] text-primary mb-3">MARK YOUR CALENDAR</p>
                <h2 className="text-[3rem] font-bold tracking-tight text-[#3E3A36] leading-tight">
                  Upcoming<br/><em className="not-italic text-transparent bg-gradient-to-r from-primary to-[#E56D24] bg-clip-text">Milestones</em>
                </h2>
              </div>
              <p className="text-lg opacity-70 max-w-md">Key moments that define the Trident experience — from innovation summits to cultural celebrations and alumni reunions. Don't miss a beat.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: "https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_seminar.jpg", date: "Oct 15, 2024", tag: "TECHNOLOGY", title: "National Tech Symposium", desc: "Annual gathering of tech enthusiasts across the country.", cta: "Register" },
                { img: "https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_campus_life.jpg", date: "Nov 02, 2024", tag: "CULTURE", title: "Cultural Fest 'Dhwani'", desc: "Inter-college cultural extravaganza and competitions.", cta: "Learn More" },
                { img: "https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/discover_graduation.jpg", date: "Nov 20, 2024", tag: "ALUMNI", title: "Alumni Meet 2024", desc: "Reconnecting past graduates with the campus.", cta: "RSVP Now" }
              ].map((ms, i) => (
                <div key={i} data-animate className="relative rounded-3xl overflow-hidden group opacity-0 translate-y-10 border border-[#3E3A36]/10 shadow-sm hover:shadow-xl transition-all duration-500">
                  <img src={ms.img} alt={ms.title} className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-0 left-0 w-full h-[220px] bg-gradient-to-t from-[#111115]/60 via-transparent to-transparent"></div>

                  {/* Date pill */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#3E3A36] text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    <i className="ph-fill ph-calendar-blank"></i>
                    <span>{ms.date}</span>
                  </div>

                  <div className="p-7">
                    <span className="inline-block px-3 py-1 text-[0.6rem] font-bold tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20 mb-3">{ms.tag}</span>
                    <h3 className="text-[1.25rem] font-bold text-[#3E3A36] mb-2">{ms.title}</h3>
                    <p className="text-sm opacity-70 mb-5">{ms.desc}</p>
                    <Link to="#" className="text-primary font-semibold text-sm flex items-center gap-1.5 hover:underline tracking-wide group-hover:translate-x-1 transition-transform">
                      {ms.cta} <i className="ph ph-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}} />
    </div>
  );
}
