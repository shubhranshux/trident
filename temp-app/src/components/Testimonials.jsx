import { useState, useEffect, useCallback } from "react";
import { FadeInUp } from "../utils/animations";
import { Quote, ChevronLeft, ChevronRight, Star, Briefcase, GraduationCap } from "lucide-react";

/* ───── Real Alumni Profile Photos ───── */
import imgAbinash from "../assets/alumni_abinash_das.jpg";
import imgAkash from "../assets/alumni_akash_bhoi.jpg";
import imgBibhutendu from "../assets/alumni_bibhutendu_parida.jpg";
import imgDebadatta from "../assets/alumni_debadatta_dash.jpg";
import imgSmaranika from "../assets/alumni_smaranika_das.jpg";
import imgTuhin from "../assets/alumni_tuhin_ghose.jpg";
import imgHimansu from "../assets/alumni_himansu_behera.jpg";
import imgPoornima from "../assets/alumni_poornima_mohapatra.jpg";
import imgNilesh from "../assets/alumni_nilesh_mohanty.jpg";
import imgArpita from "../assets/alumni_arpita_nayak.jpg";
import imgMrutyunjaya from "../assets/alumni_mrutyunjaya_jena.jpg";
import imgPragati from "../assets/alumni_pragati_behera.jpg";

/* ───── Alumni Testimonial Data (sourced from tat.ac.in) ───── */
const testimonials = [
  {
    text: "I take this opportunity to express my heartfelt gratitude to my alma mater for shaping me as a competent professional and a good human being. The journey from being a student in Trident to the corporate world has been breathtaking. The college provided the perfect environment to express my potential to the fullest.",
    author: "Abinash Das",
    role: "Technical Lead & Offshore Lead at Intel",
    branch: "CSE, 2006–2010",
    company: "Intel / TCS",
    img: imgAbinash,
    rating: 5,
  },
  {
    text: "Trident has given me the four best years of my life. The college had given me ample opportunities to prove my mettle in both academic and co-curricular activities. The group discussion sessions, paper presentations, and tech fests contributed towards my overall development.",
    author: "Tuhin Ghose",
    role: "Squadron Leader, Indian Air Force",
    branch: "ETC, 2005–2009",
    company: "Indian Air Force",
    img: imgTuhin,
    rating: 5,
  },
  {
    text: "Trident Academy of Technology has grown immensely since its inception. Kudos to the Management Team and the Faculty to have inspired students and helped them achieve success.",
    author: "Smaranika Das",
    role: "Software Engineer at Google",
    branch: "BME, 2005–2009",
    company: "Google",
    img: imgSmaranika,
    rating: 5,
  },
  {
    text: "I woke up here, literally. The place had such a tremendous impact on the way I used to view life and the world at large. The college, being a startup during our time, was a fun place with great freedom. There is a whole lot of Trident in me.",
    author: "Debadatta Dash",
    role: "IT Analyst at TCS",
    branch: "ETC, 2005–2009",
    company: "TCS",
    img: imgDebadatta,
    rating: 5,
  },
  {
    text: "What a lovely time it was! I experienced almost every great thing one can during engineering. Be it staying at the hostel, the classrooms, the labs, singing on stage — the journey was incredible. Even after 7 years, there is still a strong sense of belonging.",
    author: "Himansu Behera",
    role: "Module Lead at Mphasis",
    branch: "ETC, 2005–2009",
    company: "Mphasis",
    img: imgHimansu,
    rating: 5,
  },
  {
    text: "If I have to explain my overall experience in TRIDENT then, I would say 'Awesome'. Here, I got an opportunity to learn so many things.",
    author: "Bibhutendu Parida",
    role: "Consultant at Capgemini",
    branch: "EEE, 2006–2010",
    company: "Capgemini",
    img: imgBibhutendu,
    rating: 5,
  },
  {
    text: "I am writing to express my gratitude for the valuable education and support to develop my skills during my academic years at Trident. We celebrate every little occasion like family. I got placed through Trident campus placement and got the opportunity to build my career in banking.",
    author: "Poornima Mohapatra",
    role: "Assistant Manager, Utkarsh Small Finance Bank",
    branch: "MBA, 2019–2021",
    company: "Utkarsh Bank",
    img: imgPoornima,
    rating: 5,
  },
  {
    text: "My two years at Trident's Department of Business Administration will forever remain one of the most precious chapters of my life. Trident didn't just educate me, it uplifted me, inspired me, and filled me with the courage to chase bigger dreams.",
    author: "Nilesh Mohanty",
    role: "Asst. Manager Digital Marketing, Medicover Hospital",
    branch: "MBA, 2017–2019",
    company: "Medicover",
    img: imgNilesh,
    rating: 5,
  },
  {
    text: "I am proud to have completed my BBA and MBA from Trident, a place that shaped both my academic journey and my personal growth. I served as an anchor at TRIFEST for five years, creating some of my most memorable experiences on stage.",
    author: "Dr. Arpita Nayak",
    role: "Assistant Professor, KIIT DU",
    branch: "MBA, 2018–2020",
    company: "KIIT DU",
    img: imgArpita,
    rating: 5,
  },
  {
    text: "TAT@heart of BBSR, enjoyed my B.Tech Journey & a Techno-Hub to groom.",
    author: "Akash Bhoi",
    role: "R&D Faculty Associate, Sikkim Manipal Institute",
    branch: "BME, 2006–2010",
    company: "SMI Sikkim",
    img: imgAkash,
    rating: 5,
  },
  {
    text: "My journey at Trident College has been a blend of learning, growth, and unforgettable memories, giving me confidence, clarity, and a supportive community, while the faculty and vibrant campus environment helped me truly explore my potential.",
    author: "Mrutyunjaya Jena",
    role: "Asst. Sales Manager, Nandighosha Network",
    branch: "B.Tech",
    company: "Nandighosha",
    img: imgMrutyunjaya,
    rating: 5,
  },
  {
    text: "My college journey was truly memorable, with supportive faculty who always encouraged us. I am especially grateful to our HOD for his constant guidance. Trident College has given me knowledge, values, confidence, and unforgettable memories.",
    author: "Pragati Behera",
    role: "Sales Coordinator, RDC Concrete India Limited",
    branch: "CE, 2020–2023",
    company: "RDC Concrete",
    img: imgPragati,
    rating: 5,
  },
];

/* ───── Styles ───── */
const css = `
  .testimonial-card {
    position: relative;
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .alumni-thumb {
    width: 72px; height: 72px; border-radius: 50%;
    object-fit: cover; border: 3px solid rgba(229, 170, 62, 0.4);
    box-shadow: 0 6px 20px -4px rgba(0,0,0,0.2);
    transition: all 0.4s ease;
  }
  .testimonial-card:hover .alumni-thumb,
  .testimonial-card.active .alumni-thumb {
    border-color: #E5AA3E;
    box-shadow: 0 0 0 4px rgba(229,170,62,0.15), 0 6px 20px -4px rgba(0,0,0,0.25);
  }

  .thumb-strip {
    display: flex; gap: 8px; overflow-x: auto; padding: 8px 4px;
    scrollbar-width: none; -ms-overflow-style: none;
  }
  .thumb-strip::-webkit-scrollbar { display: none; }

  .thumb-btn {
    flex-shrink: 0; position: relative; cursor: pointer;
    border-radius: 50%; padding: 2px;
    transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
    border: 2px solid transparent;
  }
  .thumb-btn.active { border-color: #E5AA3E; transform: scale(1.15); }
  .thumb-btn:hover { transform: scale(1.1); }
  .thumb-btn img {
    width: 44px; height: 44px; border-radius: 50%; object-fit: cover;
    filter: grayscale(60%); transition: filter 0.3s ease;
  }
  .thumb-btn.active img, .thumb-btn:hover img { filter: grayscale(0%); }
  .thumb-btn .active-dot {
    position: absolute; bottom: -2px; left: 50%; transform: translateX(-50%);
    width: 6px; height: 6px; border-radius: 50%; background: #E5AA3E;
    opacity: 0; transition: opacity 0.3s ease;
  }
  .thumb-btn.active .active-dot { opacity: 1; }

  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .slide-enter { animation: fadeSlideIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
`;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p === 0 ? total - 1 : p - 1)), [total]);

  /* Auto-play */
  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: '#2F3A87' }} id="student-stories">
      <style>{css}</style>

      {/* Abstract Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[200px] md:text-[300px] text-white/[0.02] font-black pointer-events-none select-none tracking-tighter whitespace-nowrap">
        ALUMNI
      </div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#E5AA3E]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[80px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <FadeInUp>
          <div className="text-center mb-14">
            <span className="block w-12 h-1 bg-[#E5AA3E] mx-auto mb-6"></span>
            <h2 className="serif text-4xl md:text-5xl font-black text-white mb-4 relative z-10 inline-block">
              <span className="absolute -top-2 -left-4 w-32 h-14 bg-white/5 transform -rotate-3 -z-10 rounded-sm"></span>
              Student <span className="italic text-[#E5AA3E]">Stories.</span>
            </h2>
            <p className="text-white/50 text-base font-medium mt-2">
              Hear directly from our alumni who are shaping industries worldwide.
            </p>
          </div>
        </FadeInUp>

        {/* Main Testimonial Card */}
        <div className="testimonial-card relative bg-white rounded-[28px] md:rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] max-w-4xl mx-auto overflow-hidden">

          {/* Top gradient bar */}
          <div className="h-1.5 bg-gradient-to-r from-[#2C3A8C] via-[#E5AA3E] to-[#C41E3A]" />

          <div className="p-8 md:p-14 relative">

            {/* Large Quote Watermark */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 opacity-[0.06] text-[#2C3A8C]">
              <Quote size={90} strokeWidth={1.5} />
            </div>

            {/* Testimonial Content — keyed for re-animation */}
            <div key={current} className="slide-enter relative min-h-[200px] md:min-h-[180px] flex flex-col items-center justify-center text-center">

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} fill="#E5AA3E" color="#E5AA3E" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="serif text-lg md:text-2xl text-[#3E3A36] leading-relaxed font-bold max-w-2xl px-2 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4 mt-10">
                <img src={t.img} alt={t.author} className="alumni-thumb" />
                <div className="text-left">
                  <div className="font-black text-[#3E3A36] text-lg tracking-wide">{t.author}</div>
                  <div className="text-xs font-bold text-[#2C3A8C] uppercase tracking-wider mt-0.5 flex items-center gap-1.5">
                    <Briefcase size={11} /> {t.role}
                  </div>
                  <div className="text-[11px] font-semibold text-[#A59381] uppercase tracking-wider mt-0.5 flex items-center gap-1.5">
                    <GraduationCap size={11} /> {t.branch}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Controls Bar */}
          <div className="bg-[#FAFAF8] border-t border-[#3E3A36]/5 px-6 md:px-14 py-5">
            <div className="flex items-center justify-between gap-4">

              {/* Thumbnail strip */}
              <div className="thumb-strip flex-1">
                {testimonials.map((person, i) => (
                  <button
                    key={i}
                    className={`thumb-btn ${i === current ? "active" : ""}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`View ${person.author}'s story`}
                  >
                    <img src={person.img} alt={person.author} />
                    <span className="active-dot" />
                  </button>
                ))}
              </div>

              {/* Counter + Arrows */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-xs font-bold text-[#3E3A36]/30 tabular-nums tracking-wider">
                  {String(current + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
                </span>
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-[#F5EEEC] flex items-center justify-center text-[#3E3A36] hover:bg-[#2C3A8C] hover:text-white transition-all shadow-sm hover:shadow-lg transform hover:-translate-x-0.5"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-[#F5EEEC] flex items-center justify-center text-[#3E3A36] hover:bg-[#2C3A8C] hover:text-white transition-all shadow-sm hover:shadow-lg transform hover:translate-x-0.5"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
