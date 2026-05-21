import { FadeInUp } from "../utils/animations";
import { Calendar, Bell, ChevronRight, Pin, ArrowRight } from "lucide-react";

const dummyNotices = [
  { id: 1, date: "15 May 2026", title: "Semester Exams Scheduled", category: "Academic", desc: "The final semester examinations for all B.Tech branches will commence from June 1st. Check the detailed timetable on the student portal." },
  { id: 2, date: "12 May 2026", title: "Campus Recruitment Drive", category: "Placement", desc: "TCS and Infosys will be visiting the campus for the Phase II recruitment drive. Eligible students must register by May 20th." },
  { id: 3, date: "08 May 2026", title: "Tech Symposium 2026", category: "Event", desc: "Registrations are now open for the annual Tech Symposium. Submit your project abstracts before the deadline." },
  { id: 4, date: "05 May 2026", title: "Library Clearance Notice", category: "General", desc: "All issued books must be returned to the central library before the commencement of the end-semester exams to get clearance." },
  { id: 5, date: "01 May 2026", title: "Hostel Allotment List Published", category: "Administration", desc: "The hostel room allotment list for the upcoming academic year has been published on the notice board outside the chief warden's office." },
];

const catColors = {
  Academic: "#2C3A8C",
  Placement: "#006738",
  Event: "#C41E3A",
  General: "#A59381",
  Administration: "#E8BD63",
};

const css = `
  @keyframes verticalMarquee {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  .notice-ticker-wrap {
    height: 380px;
    overflow: hidden;
    position: relative;
    mask-image: linear-gradient(to bottom, transparent, black 6%, black 94%, transparent);
    -webkit-mask-image: linear-gradient(to bottom, transparent, black 6%, black 94%, transparent);
  }
  .notice-ticker-track {
    animation: verticalMarquee 22s linear infinite;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .notice-ticker-wrap:hover .notice-ticker-track {
    animation-play-state: paused;
  }
  .notice-row {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 20px;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-left: 3px solid transparent;
  }
  .notice-row:hover {
    background: rgba(44,58,140,0.04);
    border-left-color: #E5AA3E;
    transform: translateX(4px);
  }
`;

export default function NoticeBoard() {
  const loopingNotices = [...dummyNotices, ...dummyNotices];

  return (
    <section className="py-16 md:py-20 relative bg-[#FAFAF8]" id="notice-board">
      <style>{css}</style>

      {/* Subtle bg decor */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[#2C3A8C]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Compact header */}
        <FadeInUp>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2C3A8C] flex items-center justify-center text-white shadow-lg">
                <Pin size={20} className="-rotate-45" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-[#3E3A36] serif leading-tight">
                  Notice <span className="italic text-[#2C3A8C]">Board</span>
                </h2>
                <p className="text-[13px] text-[#3E3A36]/40 font-medium mt-0.5">Updates & Announcements</p>
              </div>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#2C3A8C] hover:text-[#E5AA3E] transition-colors group">
              View All
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeInUp>

        {/* Single-column ticker — no heavy side panel */}
        <FadeInUp delay={100}>
          <div className="bg-white rounded-[20px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] border border-gray-100/80 overflow-hidden">
            <div className="notice-ticker-wrap">
              <div className="notice-ticker-track pt-2">
                {loopingNotices.map((notice, idx) => (
                  <div key={idx} className="notice-row">
                    {/* Date */}
                    <div className="flex-shrink-0 text-center min-w-[52px]">
                      <div className="text-2xl font-black text-[#2C3A8C] leading-none">{notice.date.split(' ')[0]}</div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-[#3E3A36]/30 mt-1">{notice.date.split(' ')[1]}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                          style={{ background: `${catColors[notice.category] || '#A59381'}12`, color: catColors[notice.category] || '#A59381' }}
                        >
                          {notice.category}
                        </span>
                      </div>
                      <h4 className="text-[15px] font-bold text-[#3E3A36] leading-snug mb-1">{notice.title}</h4>
                      <p className="text-[13px] text-[#3E3A36]/40 font-medium line-clamp-1">{notice.desc}</p>
                    </div>

                    <ChevronRight size={14} className="text-[#3E3A36]/15 flex-shrink-0 mt-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
