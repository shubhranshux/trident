import { FadeInUp } from "../utils/animations";
import { ChevronRight, FileText, BookOpen } from "lucide-react";

/* ─── Scoped minimal scrollbar ──────────────────────────────────────── */
const scrollbarStyle = `
  .nb-scroll::-webkit-scrollbar { width: 3px; }
  .nb-scroll::-webkit-scrollbar-track { background: transparent; }
  .nb-scroll::-webkit-scrollbar-thumb {
    background: rgba(139,110,102,0.28);
    border-radius: 99px;
  }
  .nb-scroll::-webkit-scrollbar-thumb:hover { background: rgba(139,110,102,0.55); }
  .nb-scroll { scrollbar-width: thin; scrollbar-color: rgba(139,110,102,0.28) transparent; }
`;

/* ─── Data ──────────────────────────────────────────────────────────── */
const noticeItems = [
  { id: 1, text: "End Semester Examination Schedule — Spring 2026 commences April 14", isNew: true },
  { id: 2, text: "Annual Technical Fest TRIDENTECH 2026 — Registrations open till March 25", isNew: true },
  { id: 3, text: "NAAC Peer Team Visit on March 20 — Campus preparation in progress", isNew: true },
  { id: 4, text: "Lateral Entry Admissions 2026–27 Open — Apply at the admissions portal", isNew: true },
  { id: 5, text: "AI & Machine Learning Workshop by Amazon & Microsoft Engineers", isNew: false },
  { id: 6, text: "Fee Payment Deadline Semester II — Last date March 15, 2026", isNew: false },
  { id: 7, text: "Mid-Semester Exam Results Published — Check the student portal", isNew: false },
  { id: 8, text: "Campus Drive — Infosys BPM on March 18 for eligible final-year students", isNew: false },
];

const lectureItems = [
  { id: 1, text: "Data Structures & Algorithms — Module 3 Notes uploaded", isNew: true },
  { id: 2, text: "Digital Signal Processing — Unit 2 lecture slides", isNew: true },
  { id: 3, text: "Electrical Power System Protection Part I", isNew: true },
  { id: 4, text: "Electrical Power System Protection Part II", isNew: true },
  { id: 5, text: "Machines Science Technology — Mod. 1 by Dr. S. Nayak", isNew: false },
  { id: 6, text: "Computer Networks — Module 4 & 5 combined notes", isNew: false },
];

/* ─── Single notice row ─────────────────────────────────────────────── */
function NoticeRow({ item }) {
  return (
    <div className="group flex items-start gap-3 py-3 border-b border-[#EDE4DC] last:border-0 cursor-pointer hover:bg-[#F9F4EF] transition-colors duration-200 px-4 -mx-4 rounded">
      <div className="flex-shrink-0 mt-0.5">
        <div className="w-5 h-5 rounded-full border-2 border-[#8B6E66] flex items-center justify-center group-hover:bg-[#8B6E66] transition-colors duration-200">
          <ChevronRight size={10} className="text-[#8B6E66] group-hover:text-white transition-colors duration-200 ml-px" />
        </div>
      </div>
      <div className="flex-1 flex items-center gap-2 min-w-0">
        <span className="text-[13px] text-[#3E3A36] font-medium leading-snug line-clamp-1 group-hover:text-[#7A5C55] transition-colors">
          {item.text}
        </span>
        {item.isNew && (
          <span className="flex-shrink-0 inline-flex items-center bg-[#B91C1C] text-white text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded">
            NEW
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Panel card ─────────────────────────────────────────────────────── */
function BoardPanel({ color, title, Icon, items }) {
  return (
    <div className="flex rounded-xl overflow-hidden border border-[#D4C4BB] h-full">
      {/* Left header panel */}
      <div
        className="flex flex-col items-center justify-center gap-5 px-6 py-10 text-white flex-shrink-0"
        style={{ background: color, minWidth: 140 }}
      >
        <Icon size={34} strokeWidth={1.5} className="opacity-90" />
        <div className="text-[15px] font-bold text-center leading-snug">{title}</div>
        <button className="flex items-center gap-1.5 border border-white/55 text-white text-[11px] font-semibold px-4 py-1.5 rounded hover:bg-white/20 transition-colors duration-200">
          More <ChevronRight size={12} />
        </button>
      </div>

      {/* Right list */}
      <div className="flex-1 px-5 py-4 bg-[#FDFAF7] overflow-hidden">
        <div className="nb-scroll max-h-[230px] overflow-y-auto pr-1">
          {items.map(item => (
            <NoticeRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────── */
export default function NoticeBoard() {
  return (
    <section id="notice-board" className="py-16" style={{ background: "#F5EEEC" }}>
      <style>{scrollbarStyle}</style>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <FadeInUp delay={0}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-[#DDD4CC]" />
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8B6E66] whitespace-nowrap">
              Notices &amp; Resources
            </p>
            <div className="h-px flex-1 bg-[#DDD4CC]" />
          </div>
        </FadeInUp>

        {/* TWO COLUMNS side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <FadeInUp delay={100}>
            <BoardPanel
              color="#8B6E66"
              title="Notice Board"
              Icon={FileText}
              items={noticeItems}
            />
          </FadeInUp>

          <FadeInUp delay={180}>
            <BoardPanel
              color="#A09280"
              title="Lecture Notes"
              Icon={BookOpen}
              items={lectureItems}
            />
          </FadeInUp>
        </div>

      </div>
    </section>
  );
}
