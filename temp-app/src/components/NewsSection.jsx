import { useState } from "react";
import { FadeInUp, SlideIn } from "../utils/animations";
import { NEWS, EVENTS } from "../data/constants";
import { ArrowRight, Calendar, ArrowUpRight, MapPin, Clock, Sparkles, Newspaper, Trophy, Lightbulb, GraduationCap, Star, ChevronRight, Mail } from "lucide-react";

/* ───── image imports ───── */
import imgNba from "../assets/news_nba.png";
import imgPlacement from "../assets/news_placement.png";
import imgHackathon from "../assets/news_hackathon.png";
import imgInnovation from "../assets/news_innovation_lab.png";
import imgTrifest from "../assets/news_trifest.png";
import imgConvocation from "../assets/news_convocation.png";

const IMG_MAP = {
  news_nba: imgNba,
  news_placement: imgPlacement,
  news_hackathon: imgHackathon,
  news_innovation_lab: imgInnovation,
  news_trifest: imgTrifest,
  news_convocation: imgConvocation,
};

/* ───── category config ───── */
const CAT_CONFIG = {
  Accreditation: { color: "#2C3A8C", bg: "#E8EAF6", icon: Star },
  Placement:     { color: "#1B5E20", bg: "#E8F5E9", icon: GraduationCap },
  Achievement:   { color: "#E65100", bg: "#FFF3E0", icon: Trophy },
  Innovation:    { color: "#6A1B9A", bg: "#F3E5F5", icon: Lightbulb },
  Event:         { color: "#C41E3A", bg: "#FCE4EC", icon: Sparkles },
  Research:      { color: "#01579B", bg: "#E1F5FE", icon: Newspaper },
};

const TABS = ["All", ...Object.keys(CAT_CONFIG)];

/* ───── styles ───── */
const css = `
  .news-section { position: relative; }
  .news-section::before {
    content: ''; position: absolute; top: 0; right: -200px; width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(44,58,140,0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  .news-tab { 
    padding: 8px 20px; border-radius: 100px; font-size: 12px; font-weight: 700;
    letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer;
    transition: all 0.35s cubic-bezier(0.16,1,0.3,1); border: 1.5px solid transparent;
    background: transparent; color: #3E3A36aa;
  }
  .news-tab:hover { color: #3E3A36; background: #F5EEEC; }
  .news-tab.active { background: #2C3A8C; color: white; border-color: #2C3A8C; box-shadow: 0 4px 14px -4px rgba(44,58,140,0.4); }

  .featured-card { 
    position: relative; border-radius: 28px; overflow: hidden; cursor: pointer;
    box-shadow: 0 25px 60px -15px rgba(15,23,42,0.18);
    transition: all 0.6s cubic-bezier(0.16,1,0.3,1);
  }
  .featured-card:hover { transform: translateY(-6px); box-shadow: 0 35px 70px -15px rgba(15,23,42,0.22); }
  .featured-card img { transition: transform 1.2s cubic-bezier(0.16,1,0.3,1); }
  .featured-card:hover img { transform: scale(1.06); }

  .news-card {
    position: relative; border-radius: 22px; overflow: hidden; cursor: pointer;
    background: white; border: 1px solid rgba(0,0,0,0.04);
    box-shadow: 0 4px 20px -4px rgba(15,23,42,0.06);
    transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
  }
  .news-card:hover { 
    transform: translateY(-8px); 
    box-shadow: 0 25px 50px -10px rgba(15,23,42,0.14);
    border-color: rgba(44,58,140,0.15);
  }
  .news-card .card-img { overflow: hidden; position: relative; }
  .news-card .card-img img { transition: transform 0.8s cubic-bezier(0.16,1,0.3,1); }
  .news-card:hover .card-img img { transform: scale(1.08); }
  .news-card .card-img::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.04) 100%);
  }
  .news-card .arrow-circle {
    width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
    border: 1.5px solid #E5E0DB; color: #A59381;
    transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
  }
  .news-card:hover .arrow-circle { background: #2C3A8C; border-color: #2C3A8C; color: white; transform: rotate(-45deg) scale(1.1); }

  .event-item {
    display: flex; gap: 16px; align-items: flex-start; padding: 18px 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    transition: all 0.3s ease; cursor: pointer;
  }
  .event-item:last-child { border-bottom: none; }
  .event-item:hover { padding-left: 8px; }
  .event-item:hover .event-date-box { background: #E8BD63; transform: scale(1.05); }

  .event-date-box {
    min-width: 56px; height: 60px; border-radius: 14px;
    background: rgba(255,255,255,0.08); backdrop-filter: blur(8px);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
  }

  .cat-badge {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 5px 12px; border-radius: 100px; font-size: 10px; font-weight: 800;
    letter-spacing: 0.08em; text-transform: uppercase;
  }

  @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
  .featured-badge {
    background: linear-gradient(90deg, #E8BD63 0%, #F5D789 50%, #E8BD63 100%);
    background-size: 200% 100%; animation: shimmer 3s linear infinite;
    color: #3E3A36; font-size: 10px; font-weight: 800; letter-spacing: 0.1em;
    text-transform: uppercase; padding: 6px 16px; border-radius: 100px;
    box-shadow: 0 4px 12px -2px rgba(232,189,99,0.5);
  }
`;

export default function NewsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const featured = NEWS.find((n) => n.featured);
  const filtered = activeTab === "All" ? NEWS.filter((n) => !n.featured) : NEWS.filter((n) => n.cat === activeTab && !n.featured);

  return (
    <section className="news-section relative z-10 bg-[#F5EEEC]" id="news-events">
      <style>{css}</style>

      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* ─── Section Header ─── */}
        <FadeInUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="rose-rule"></span>
              <h2 className="serif text-4xl md:text-[3.4rem] font-black text-[#3E3A36] leading-[1.05]">
                News &amp; <span className="italic text-[#2C3A8C]">Events.</span>
              </h2>
              <p className="text-[15px] text-[#3E3A36]/50 font-medium mt-4 max-w-lg">
                Stay updated with the latest happenings, achievements, and milestones at Trident Academy of Technology.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  className={`news-tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">

          {/* ─── Main Content Column ─── */}
          <div className="lg:col-span-8">

            {/* Featured Card */}
            {featured && activeTab === "All" && (
              <FadeInUp delay={100} duration={1000}>
                <a href="https://tat.ac.in/view-news/" target="_blank" rel="noopener noreferrer" className="featured-card block mb-10 group">
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 z-30" style={{ borderLeft: '70px solid transparent', borderTop: '70px solid #E8BD63' }} />
                  <div className="absolute top-3 right-3 z-40">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <img
                    src={IMG_MAP[featured.img]}
                    alt={featured.title}
                    className="w-full h-[240px] sm:h-[340px] md:h-[420px] object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816]/95 via-[#1a1816]/30 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="featured-badge">⭐ Featured</span>
                      <CatBadge cat={featured.cat} />
                    </div>
                    <h3 className="serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-[1.15] drop-shadow-lg group-hover:text-[#F5EEEC] transition-colors max-w-2xl">
                      {featured.title}
                    </h3>
                    <p className="text-white/60 mt-3 text-sm font-medium max-w-xl hidden sm:block leading-relaxed">
                      {featured.desc}
                    </p>
                    <div className="flex items-center gap-4 mt-5">
                      <span className="text-white/40 text-xs font-bold uppercase flex items-center gap-1.5 tracking-wide">
                        <Calendar size={13} /> {featured.date}
                      </span>
                      <span className="text-white/40 text-xs font-bold uppercase tracking-wide flex items-center gap-1.5 group-hover:text-[#E8BD63] transition-colors">
                        Read More <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2C3A8C] via-[#E8BD63] to-[#C41E3A]" />
                </a>
              </FadeInUp>
            )}

            {/* News Grid */}
            {(() => {
              const items = activeTab === "All" ? filtered : [...(activeTab === featured?.cat ? [featured] : []), ...filtered];
              const isOdd = items.length % 2 !== 0;
              const gridItems = isOdd ? items.slice(0, -1) : items;
              const lastItem = isOdd ? items[items.length - 1] : null;

              return (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {gridItems.map((item, i) => (
                      <FadeInUp key={item.title} delay={150 + i * 80}>
                        <a href="https://tat.ac.in/view-news/" target="_blank" rel="noopener noreferrer" className="news-card block h-full group">
                          <div className="card-img h-48 relative">
                            <img src={IMG_MAP[item.img]} alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 z-10"><CatBadge cat={item.cat} /></div>
                          </div>
                          <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-[11px] font-bold text-[#3E3A36]/35 uppercase flex items-center gap-1.5 tracking-wider">
                                  <Calendar size={11} /> {item.date}
                                </span>
                              </div>
                              <h3 className="serif text-lg font-bold text-[#3E3A36] group-hover:text-[#2C3A8C] leading-[1.35] mb-3 transition-colors duration-300">{item.title}</h3>
                              <p className="text-[13px] text-[#3E3A36]/55 font-medium leading-relaxed line-clamp-2">{item.desc}</p>
                            </div>
                            <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#3E3A36]/6">
                              <span className="text-[11px] font-bold text-[#3E3A36]/40 uppercase tracking-widest group-hover:text-[#2C3A8C] transition-colors">Read Article</span>
                              <div className="arrow-circle"><ArrowUpRight size={14} /></div>
                            </div>
                          </div>
                        </a>
                      </FadeInUp>
                    ))}
                  </div>

                  {/* Last card spans full width with horizontal layout */}
                  {lastItem && (
                    <FadeInUp delay={150 + gridItems.length * 80}>
                      <a href="https://tat.ac.in/view-news/" target="_blank" rel="noopener noreferrer" className="news-card flex flex-col md:flex-row h-full group mt-7">
                        <div className="card-img md:w-[45%] h-52 md:h-auto relative flex-shrink-0">
                          <img src={IMG_MAP[lastItem.img]} alt={lastItem.title} className="w-full h-full object-cover" />
                          <div className="absolute top-4 left-4 z-10"><CatBadge cat={lastItem.cat} /></div>
                        </div>
                        <div className="p-7 md:p-8 flex flex-col justify-between flex-1">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-[11px] font-bold text-[#3E3A36]/35 uppercase flex items-center gap-1.5 tracking-wider">
                                <Calendar size={11} /> {lastItem.date}
                              </span>
                            </div>
                            <h3 className="serif text-xl md:text-2xl font-bold text-[#3E3A36] group-hover:text-[#2C3A8C] leading-[1.3] mb-4 transition-colors duration-300">{lastItem.title}</h3>
                            <p className="text-[13px] text-[#3E3A36]/55 font-medium leading-relaxed">{lastItem.desc}</p>
                          </div>
                          <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#3E3A36]/6">
                            <span className="text-[11px] font-bold text-[#3E3A36]/40 uppercase tracking-widest group-hover:text-[#2C3A8C] transition-colors">Read Article</span>
                            <div className="arrow-circle"><ArrowUpRight size={14} /></div>
                          </div>
                        </div>
                      </a>
                    </FadeInUp>
                  )}
                </>
              );
            })()}


          </div>

          {/* ─── Sidebar Column ─── */}
          <div className="lg:col-span-4 space-y-8">

            {/* Upcoming Events */}
            <SlideIn direction="right" delay={200}>
              <div className="bg-[#2A2724] rounded-[26px] p-7 md:p-8 text-white shadow-[0_30px_60px_-15px_rgba(15,23,42,0.25)] relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#2C3A8C] rounded-bl-full opacity-20 -mr-8 -mt-8" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#E8BD63] rounded-tr-full opacity-10 -ml-6 -mb-6" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-10 h-10 rounded-xl bg-[#E8BD63]/20 flex items-center justify-center">
                      <Clock size={18} className="text-[#E8BD63]" />
                    </div>
                    <h3 className="serif text-2xl font-bold text-[#F5EEEC]">Upcoming Events</h3>
                  </div>

                  <div className="space-y-0">
                    {EVENTS.map((evt) => (
                      <div key={evt.title} className="event-item group/evt">
                        <div className="event-date-box">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">{evt.month}</span>
                          <span className="text-xl font-black text-white leading-none">{evt.day}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[14px] font-bold text-[#F5EEEC] leading-snug group-hover/evt:text-[#E8BD63] transition-colors">
                            {evt.title}
                          </h4>
                          <div className="flex items-center gap-3 mt-1.5">
                            <span className="text-[11px] font-medium text-white/35 flex items-center gap-1">
                              <MapPin size={10} /> {evt.venue}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-white/30">
                              {evt.type}
                            </span>
                          </div>
                        </div>
                        <ChevronRight size={14} className="text-white/20 group-hover/evt:text-[#E8BD63] mt-1 transition-colors flex-shrink-0" />
                      </div>
                    ))}
                  </div>

                  {/* View All Events Button */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
                    <a
                      href="https://academics-tat.tekkzy.com/calenders/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#E8BD63]/50 hover:bg-[#E8BD63]/10 text-white hover:text-[#E8BD63] text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300"
                    >
                      <Calendar size={14} />
                      View All Events
                      <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </SlideIn>

            {/* Quick Links Box */}
            <SlideIn direction="right" delay={400}>
              <div className="rounded-[26px] overflow-hidden bg-white border border-[#3E3A36]/6 shadow-lg">
                <div className="bg-gradient-to-br from-[#2C3A8C] to-[#1a2560] p-7 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8" />
                  <h3 className="serif text-2xl font-bold text-white relative z-10">Student Portals</h3>
                  <p className="text-white/50 text-xs font-medium mt-1 relative z-10">Quick access to essential resources</p>
                </div>
                <ul className="p-2">
                  {[
                    { label: "Academic Calendar", href: "https://academics-tat.tekkzy.com/calenders/" },
                    { label: "E-Governance Portal", href: "https://ais.tat.ac.in/" },
                    { label: "Placement Statistics", href: "https://tat.ac.in/placement/placement-statistics/" },
                    { label: "TRILOGY Magazine", href: "https://tat.ac.in/activities/trilogy/" },
                    { label: "Student Clubs", href: "https://tat.ac.in/activities/co-curricullar/" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between font-semibold text-[13px] text-[#3E3A36]/70 hover:text-[#2C3A8C] py-3.5 px-5 rounded-xl hover:bg-[#F5EEEC] transition-all duration-300 group/link"
                      >
                        <span>{link.label}</span>
                        <ArrowRight size={13} className="text-[#A59381] opacity-0 group-hover/link:opacity-100 transition-all transform -translate-x-2 group-hover/link:translate-x-0 group-hover/link:text-[#2C3A8C]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>

            {/* TRIFEST Promo Card */}
            <SlideIn direction="right" delay={500}>
              <a
                href="https://tat.ac.in/activities/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-[26px] overflow-hidden group relative cursor-pointer shadow-lg border border-[#3E3A36]/6"
              >
                <div className="overflow-hidden h-52 relative">
                  <img
                    src={IMG_MAP.news_trifest}
                    alt="TRIFEST — Annual Fest"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816]/80 to-transparent" />
                  <div className="absolute inset-0 bg-[#C41E3A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="w-10 h-1 bg-[#E8BD63] mb-4 group-hover:w-16 transition-all duration-500" />
                  <h3 className="serif text-2xl font-bold text-white mb-1.5 drop-shadow-md">TRIFEST 2026</h3>
                  <p className="text-white/60 text-[12px] font-medium mb-4">
                    The flagship annual cultural & technical festival at Trident.
                  </p>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/70 flex items-center gap-2 group-hover:text-[#E8BD63] transition-colors">
                    Explore <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            </SlideIn>

            {/* View All Events CTA Box */}
            <SlideIn direction="right" delay={600}>
              <a
                href="https://academics-tat.tekkzy.com/calenders/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[26px] overflow-hidden bg-gradient-to-br from-[#E8BD63] to-[#d4ac5a] p-7 md:p-8 text-center shadow-[0_20px_40px_-15px_rgba(232,189,99,0.4)] relative cursor-pointer border border-[#E8BD63]/50 hover:shadow-[0_25px_50px_-15px_rgba(232,189,99,0.6)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110 origin-top-right" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-tr-full pointer-events-none transition-transform duration-500 group-hover:scale-110 origin-bottom-left" />
                
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/30 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:-translate-y-2 transition-transform duration-500 shadow-sm border border-white/40">
                    <Calendar size={28} className="text-[#2A2724]" />
                  </div>
                  
                  <h3 className="serif text-3xl font-black text-[#2A2724] mb-2 leading-tight">Explore All <br />Events</h3>
                  <p className="text-[13px] text-[#2A2724]/70 font-semibold mb-6">
                    Discover upcoming seminars, cultural fests, and tech marathons.
                  </p>
                  
                  <div className="w-full py-3.5 px-6 bg-[#2A2724] rounded-xl text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-[#1a1816] transition-colors shadow-inner">
                    View Full Calendar
                    <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </a>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Reusable Category Badge ─── */
function CatBadge({ cat }) {
  const config = CAT_CONFIG[cat] || { color: "#3E3A36", bg: "#F5EEEC", icon: Newspaper };
  const Icon = config.icon;
  return (
    <span
      className="cat-badge"
      style={{ backgroundColor: config.bg, color: config.color }}
    >
      <Icon size={11} strokeWidth={2.5} />
      {cat}
    </span>
  );
}
