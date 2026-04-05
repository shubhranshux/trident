import { useState, useRef, useEffect } from "react";
import { FadeInUp, SlideIn } from "../../utils/animations";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  MapPin, Phone, Mail, Send, ArrowRight, Globe, GraduationCap,
  Building2, Users, BookOpen, ChevronRight, CheckCircle2,
  ChevronDown, Navigation, ArrowUpRight, Clock, MessageSquare, Star,
} from "lucide-react";

import imgHeroContact from "../../assets/hero_indian_students_walking.png";
import imgCampusAerial from "../../assets/indian_campus_aerial.png";
import imgCampusLibrary from "../../assets/indian_campus_library.png";
import imgLab from "../../assets/indian_engineering_lab.png";
import imgCafeteria from "../../assets/indian_cafeteria.png";
import counselor1 from "../../assets/indian_counselor_1.png";
import counselor2 from "../../assets/indian_counselor_2.png";
import counselor3 from "../../assets/indian_counselor_3.png";

/* ─── Data ─── */
const contactInfo = [
  { icon: <MapPin size={22} />, label: "Visit Us", title: "Campus Address", lines: ["F2/A, Chandaka Industrial Estate,", "In front of Infocity, Bhubaneswar,", "Odisha, Pin: 751024, India"], action: { text: "Get Directions", href: "https://maps.google.com/?q=Trident+Academy+of+Technology+Bhubaneswar" }, accent: "#E5AA3E" },
  { icon: <Phone size={22} />, label: "Call Us", title: "Phone", lines: ["+91 98611 91195"], action: { text: "Call Now", href: "tel:+919861191195" }, accent: "#283B91" },
  { icon: <Mail size={22} />, label: "Write to Us", title: "Email", lines: ["info@trident.ac.in"], action: { text: "Send Email", href: "mailto:info@trident.ac.in" }, accent: "#8B6E66" },
  { icon: <Phone size={22} />, label: "Admissions", title: "Admission Contact", lines: ["+91 98611 91195", "+91 70084 43255"], action: { text: "Call Admissions", href: "tel:+917008443255" }, accent: "#283B91" },
];

const departments = [
  { name: "Admissions Office", phone: "+91 98611 91195", email: "info@trident.ac.in", icon: <GraduationCap size={20} />, desc: "Course info, eligibility & scholarships" },
  { name: "Placement Cell", phone: "+91 70084 43255", email: "info@trident.ac.in", icon: <Building2 size={20} />, desc: "Campus drives & internships" },
  { name: "Examination Cell", phone: "+91 98611 91195", email: "info@trident.ac.in", icon: <BookOpen size={20} />, desc: "Results & academic records" },
  { name: "Alumni Relations", phone: "+91 98611 91195", email: "info@trident.ac.in", icon: <Users size={20} />, desc: "Network, events & mentorship" },
];

const quickLinks = [
  { label: "Admissions Portal", href: "https://admissions-tat.tekkzy.com", icon: <GraduationCap size={14} /> },
  { label: "Placement Reports", href: "https://placements-tat.tekkzy.com", icon: <Building2 size={14} /> },
  { label: "Campus Life", href: "https://sipitridentcampuslife.netlify.app", icon: <Users size={14} /> },
  { label: "Research & Innovation", href: "https://research-tat.tekkzy.com", icon: <BookOpen size={14} /> },
  { label: "Alumni Network", href: "https://alumni-tat.tekkzy.com/", icon: <Globe size={14} /> },
  { label: "Academic Calendar", href: "https://academics-tat.tekkzy.com/", icon: <Navigation size={14} /> },
];

const faqs = [
  { q: "How do I apply for admission?", a: "Visit our Admissions Portal or contact the Admissions Office at +91 98611 91195. Applications are open for B.Tech, M.Tech, MBA, and MCA programs." },
  { q: "What are the hostel facilities?", a: "We offer separate, well-maintained hostels for boys and girls within the campus with Wi-Fi, mess facilities, and 24/7 security." },
  { q: "Is the campus accessible by public transport?", a: "Yes, the campus is located in Chandaka Industrial Estate, about 12 km from the airport and 4.3 km from Patia railway station. College buses are also available." },
  { q: "What placement support is offered?", a: "Our dedicated Placement Cell partners with 320+ companies. Students receive resume workshops, mock interviews, and direct placement drives with top recruiters." },
  { q: "What scholarships are available?", a: "Trident offers merit-based scholarships, fee waivers for economically weaker sections, and special grants for national-level achievers in sports and academics." },
  { q: "Which courses does TAT offer?", a: "We offer B.Tech in CSE, CSE (AI & ML), ECE, EEE, ME, CE; M.Tech in multiple specializations; MBA; and MCA — all affiliated with BPUT and approved by AICTE." },
];

const campusImages = [
  { src: imgCampusAerial, label: "Main Campus" },
  { src: imgCampusLibrary, label: "Library" },
  { src: imgLab, label: "Innovation Lab" },
  { src: imgCafeteria, label: "Study Spaces" },
];

const testimonials = [
  { name: "Aditya Mishra", role: "CSE Graduate, Batch 2024", text: "The placement cell at Trident was incredibly supportive. I received multiple offers during campus drives and landed my dream role at TCS.", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
  { name: "Priya Patel", role: "ECE Graduate, Batch 2023", text: "Trident gave me not just academic knowledge but a platform to grow. The faculty mentorship and industry exposure were outstanding.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
];

const counselors = [
  { name: "Dr. Anisha Ray", role: "Chief Admissions Officer", phone: "+91 98611 91195", email: "anisha.ray@trident.ac.in", image: counselor1 },
  { name: "Mr. Rajat Mohanty", role: "B.Tech Counselor", phone: "+91 70084 43255", email: "rajat.mohanty@trident.ac.in", image: counselor2 },
  { name: "Ms. Smita Dash", role: "PG & MBA Admissions", phone: "+91 98611 91195", email: "smita.dash@trident.ac.in", image: counselor3 },
];

/* ─── FAQ Item ─── */
function FaqItem({ faq, index, isOpen, onToggle }) {
  const ref = useRef(null);
  const [h, setH] = useState(0);
  useEffect(() => { if (ref.current) setH(isOpen ? ref.current.scrollHeight : 0); }, [isOpen]);
  const num = String(index + 1).padStart(2, "0");
  return (
    <FadeInUp delay={80 + index * 70}>
      <div className="group relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ background: isOpen ? "#fff" : "#FAF9F7", border: isOpen ? "1px solid rgba(139,110,102,0.15)" : "1px solid rgba(62,58,54,0.05)", boxShadow: isOpen ? "0 20px 50px -15px rgba(0,0,0,0.08)" : "none", transform: isOpen ? "translateY(-2px)" : "none", borderRadius: "16px" }}>
        <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl transition-all duration-500" style={{ backgroundColor: "#8B6E66", opacity: isOpen ? 1 : 0.2, width: isOpen ? "4px" : "3px" }} />
        <button onClick={onToggle} className="w-full flex items-center gap-5 p-5 pl-7 text-left cursor-pointer">
          <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-black text-[12px] transition-all duration-500" style={{ backgroundColor: isOpen ? "#8B6E66" : "rgba(139,110,102,0.08)", color: isOpen ? "#fff" : "#8B6E66" }}>{num}</div>
          <span className="text-[17px] font-bold flex-1 pr-3 transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif", color: isOpen ? "#212529" : "#3E3A36" }}>{faq.q}</span>
          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500" style={{ backgroundColor: isOpen ? "#8B6E66" : "rgba(62,58,54,0.05)", color: isOpen ? "#fff" : "rgba(62,58,54,0.3)", transform: isOpen ? "rotate(135deg)" : "rotate(0deg)" }}>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </div>
        </button>
        <div className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ height: `${h}px` }}>
          <div ref={ref} className="px-7 pb-5">
            <div className="ml-[56px] pl-4 text-[#5c5855] font-medium text-[14px] leading-[1.8]" style={{ borderLeft: "2px solid rgba(139,110,102,0.15)" }}>{faq.a}</div>
          </div>
        </div>
      </div>
    </FadeInUp>
  );
}

/* ═══════════════════════════════════════════════════════ */
export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", department: "General Inquiry", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => { setIsVisible(true); window.scrollTo(0, 0); }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000); setFormData({ name: "", email: "", phone: "", department: "General Inquiry", subject: "", message: "" }); };

  const inputClass = (field) => {
    const base = "w-full bg-[#FAF9F7] border-2 text-[#212529] placeholder-[#3E3A36]/20 px-5 py-4 rounded-xl outline-none transition-all duration-300 font-medium text-[15px]";
    return base + (focusedField === field ? " border-[#8B6E66] shadow-[0_0_0_4px_rgba(139,110,102,0.08)] bg-white" : " border-transparent hover:border-[#EFE7DF]");
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Header />

      {/* ══════ HERO ══════ */}
      <section className="relative w-full min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-32 md:pt-40 pb-20 group">
        <div className="absolute top-0 right-0 w-[45%] h-full -skew-x-12 translate-x-32 z-0 hidden lg:block bg-[#FAF9F7]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EFE7DF]/20 skew-y-12 -translate-x-32 z-0" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%231A1817' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-left">
            <div className={`flex items-center gap-4 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mb-8`}>
               <div className="w-12 h-[2px] bg-[#8B6E66]"></div>
               <span className="text-[12px] font-black text-[#8B6E66] uppercase tracking-[.4em]">Get in Touch</span>
            </div>
            <h1 className={`text-5xl md:text-7xl lg:text-[82px] font-black text-[#212529] leading-[1] tracking-tight mb-8 transition-all duration-1000 delay-150 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
              Let's <br /><span className="italic text-[#8B6E66]">Connect.</span>
            </h1>
            <p className={`text-[17px] md:text-lg text-[#5c5855] max-w-xl mb-12 leading-relaxed transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Whether you're a prospective student, parent, or industry collaborator — we'd love to hear from you. Start a conversation that could shape your future.
            </p>
            <div className={`flex flex-wrap items-center gap-4 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <a href="tel:+919861191195" className="bg-[#212529] text-white px-8 py-4 rounded-2xl font-bold text-[13px] uppercase tracking-widest flex items-center gap-3 transition-all duration-300 hover:bg-[#8B6E66] hover:shadow-2xl hover:-translate-y-1">
                <Phone size={16} /> Call Us
              </a>
              <a href="mailto:info@trident.ac.in" className="text-[#212529] font-bold text-[13px] uppercase tracking-widest border-b-2 border-[#EFE7DF] hover:border-[#8B6E66] transition-colors pb-1">
                Send Email
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`relative transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
             <div className="absolute -inset-4 border-2 border-[#EFE7DF] -z-10 hidden lg:block" style={{ borderRadius: '8px 40px 8px 40px' }} />
             <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl shadow-2xl">
                <img src={imgHeroContact} alt="Trident Campus" className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2000ms]" />
                {/* Floating Info Block */}
                <div className="absolute bottom-8 right-8 bg-[#283B91] text-white p-6 rounded-xl hidden md:block shadow-xl">
                   <div className="text-3xl font-black mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>24/7</div>
                   <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Support Available</div>
                </div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-[#212529] px-4 py-2 rounded-lg hidden md:block shadow-md">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#8B6E66]">We're here to help</div>
                </div>
             </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-[10px] font-black text-[#8B6E66] uppercase tracking-[.3em]">Scroll</span>
          <ChevronDown size={20} className="text-[#8B6E66]" />
        </div>
      </section>

      {/* ══════ CONTACT CARDS — FULL WIDTH ══════ */}
      <section className="py-20 bg-[#FAF9F7] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <FadeInUp>
            <div className="mb-16 relative">
              <div className="absolute -left-10 -top-4 w-32 h-20 bg-[#EFE7DF] -skew-x-12 z-0 hidden md:block"></div>
              <h2 className="relative z-10 text-[40px] md:text-[56px] font-black text-[#212529] leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Reach<br /><span className="italic text-[#8B6E66]">Out.</span>
              </h2>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((c, i) => (
              <FadeInUp key={c.label} delay={100 + i * 80}>
                <a href={c.action.href} target={c.action.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  className="group relative bg-white border border-[#EFE7DF] rounded-2xl p-7 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] hover:border-[#8B6E66]/20 overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" style={{ backgroundColor: c.accent }} />
                  <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#EFE7DF] group-hover:border-[#8B6E66]/15 transition-colors duration-500 rounded-tr-lg" />
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: `${c.accent}12`, color: c.accent }}>{c.icon}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8B6E66]/40 mb-2">{c.label}</div>
                  <div className="text-[#212529] text-[15px] font-semibold leading-relaxed mb-4 flex-grow">
                    {c.lines.map((l, j) => <span key={j} className="block">{l}</span>)}
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest mt-auto transition-all duration-300 group-hover:gap-3" style={{ color: c.accent }}>
                    {c.action.text} <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ MEET THE COUNSELORS ══════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[45%] h-full -skew-x-12 translate-x-32 z-0 hidden lg:block bg-[#FAF9F7]" />
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <FadeInUp>
            <div className="mb-16 relative flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="absolute -left-10 -top-4 w-32 h-20 bg-[#EFE7DF] -skew-x-12 z-0 hidden md:block"></div>
                <h2 className="relative z-10 text-[40px] md:text-[56px] font-black text-[#212529] leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Meet Your<br /><span className="italic text-[#8B6E66]">Counselors.</span>
                </h2>
                <p className="text-[#5c5855] text-[16px] md:text-[18px] font-medium leading-relaxed mt-4 max-w-xl relative z-10">
                  Our dedicated admissions team is here to guide you through your enrollment journey.
                </p>
              </div>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {counselors.map((c, i) => (
              <FadeInUp key={c.name} delay={100 + i * 150}>
                <div className="group bg-white rounded-2xl border border-[#EFE7DF] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden pb-6">
                  <div className="h-64 overflow-hidden relative">
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#212529] via-transparent to-transparent opacity-80" />
                  </div>
                  
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-[#E5AA3E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 z-10" />
                  
                  <div className="px-8 pt-6 relative -mt-12">
                    <div className="bg-white px-5 py-4 rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-[#EFE7DF] mb-5 group-hover:border-[#E5AA3E]/20 transition-colors relative z-20">
                      <h4 className="text-[18px] font-black text-[#212529]" style={{ fontFamily: "'Playfair Display', serif" }}>{c.name}</h4>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-[#8B6E66]">{c.role}</div>
                    </div>
                    
                    <div className="space-y-4">
                      <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-[#5c5855] text-[14px] font-medium hover:text-[#283B91] transition-colors group/link">
                        <div className="w-8 h-8 rounded-full bg-[#FAF9F7] flex items-center justify-center text-[#8B6E66] group-hover/link:bg-[#283B91] group-hover/link:text-white transition-colors">
                          <Phone size={14} />
                        </div>
                        {c.phone}
                      </a>
                      <a href={`mailto:${c.email}`} className="flex items-center gap-3 text-[#5c5855] text-[14px] font-medium hover:text-[#283B91] transition-colors group/link">
                        <div className="w-8 h-8 rounded-full bg-[#FAF9F7] flex items-center justify-center text-[#8B6E66] group-hover/link:bg-[#8B6E66] group-hover/link:text-white transition-colors">
                          <Mail size={14} />
                        </div>
                        {c.email}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CAMPUS GALLERY — CINEMATIC ══════ */}
      <section className="py-24 bg-[#212529] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23FFFFFF' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <FadeInUp>
            <div className="mb-16 relative">
              <div className="absolute -left-10 -top-4 w-32 h-20 bg-[#3E3A36] -skew-x-12 z-0 hidden md:block"></div>
              <h2 className="relative z-10 text-[40px] md:text-[56px] font-black text-white leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our <span className="italic text-[#E5AA3E]">Campus</span>
              </h2>
              <p className="text-[#A59381] text-[16px] md:text-[18px] font-medium leading-relaxed mt-4 max-w-2xl relative z-10">
                A world-class facility designed to inspire learning, innovation, and collaboration.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {campusImages.map((img, i) => (
              <FadeInUp key={img.label} delay={100 + i * 100}>
                <div className="group relative h-[280px] md:h-[350px] overflow-hidden rounded-2xl cursor-pointer shadow-lg">
                  <img src={img.src} alt={img.label} className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#8B6E66] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 z-20"></div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="text-xl font-bold text-white group-hover:-translate-y-1 transition-transform duration-500" style={{ fontFamily: "'Playfair Display', serif" }}>{img.label}</div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FORM + MAP ══════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[45%] h-full -skew-x-12 translate-x-32 z-0 hidden lg:block bg-[#FAF9F7]" />

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <FadeInUp>
            <div className="max-w-xl mb-16 relative">
              <div className="absolute -left-10 -top-4 w-32 h-20 bg-[#EFE7DF] -skew-x-12 z-0 hidden md:block"></div>
              <h2 className="relative z-10 text-[40px] md:text-[56px] font-black text-[#212529] leading-[1.1] tracking-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send us a<br /><span className="italic text-[#8B6E66]">message.</span>
              </h2>
              <p className="text-[#5c5855] text-[16px] font-medium leading-relaxed relative z-10">Fill up the form below and our team will get back to you within 24 hours.</p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <FadeInUp delay={150} className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#EFE7DF] relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#E5AA3E] via-[#8B6E66] to-[#283B91] rounded-l-2xl" />
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#8B6E66]/10 flex items-center justify-center mb-6"><CheckCircle2 size={42} className="text-[#8B6E66]" /></div>
                    <h4 className="text-2xl font-black text-[#212529] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Message Sent!</h4>
                    <p className="text-[#5c5855] text-sm font-medium max-w-sm">Our team will respond within 24 working hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div><label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/60 mb-2">Full Name <span className="text-[#E5AA3E]">*</span></label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} className={inputClass("name")} placeholder="John Doe" /></div>
                      <div><label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/60 mb-2">Email <span className="text-[#E5AA3E]">*</span></label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} className={inputClass("email")} placeholder="john@example.com" /></div>
                      <div><label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/60 mb-2">Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)} className={inputClass("phone")} placeholder="+91 98XXX XXXXX" /></div>
                      <div><label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/60 mb-2">Department</label>
                        <select name="department" value={formData.department} onChange={handleChange} onFocus={() => setFocusedField("department")} onBlur={() => setFocusedField(null)} className={inputClass("department") + " appearance-none cursor-pointer"} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(139,110,102,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
                          <option>General Inquiry</option><option>Admissions</option><option>Placements</option><option>Academics</option><option>Research</option><option>Alumni Relations</option>
                        </select></div>
                    </div>
                    <div><label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/60 mb-2">Subject <span className="text-[#E5AA3E]">*</span></label>
                      <input type="text" name="subject" required value={formData.subject} onChange={handleChange} onFocus={() => setFocusedField("subject")} onBlur={() => setFocusedField(null)} className={inputClass("subject")} placeholder="How can we help?" /></div>
                    <div><label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/60 mb-2">Message <span className="text-[#E5AA3E]">*</span></label>
                      <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} onFocus={() => setFocusedField("message")} onBlur={() => setFocusedField(null)} className={inputClass("message") + " resize-none"} placeholder="Tell us more about your inquiry..." /></div>
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-[#8B6E66]/30 text-[10px] font-bold uppercase tracking-widest hidden sm:block"><span className="text-[#E5AA3E]">*</span> Required</p>
                      <button type="submit" className="group inline-flex items-center gap-3 bg-[#212529] hover:bg-[#8B6E66] text-white px-10 py-4 rounded-xl font-bold text-[13px] uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 shadow-lg">
                        Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </FadeInUp>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <FadeInUp delay={250}>
                <div className="relative rounded-2xl overflow-hidden border border-[#EFE7DF] shadow-sm" style={{ height: "280px" }}>
                  <iframe title="Trident Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0025!2d85.8148!3d20.3350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190900125b0001%3A0x2fa5a1248e5084a4!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sin!4v1711900000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-[#EFE7DF]">
                    <div className="text-[9px] font-black uppercase tracking-[0.25em] text-[#8B6E66] mb-0.5">Campus Location</div>
                    <div className="text-[12px] font-bold text-[#212529]">Chandrasekharpur, Bhubaneswar</div>
                  </div>
                </div>
              </FadeInUp>
              <FadeInUp delay={350}>
                <div className="bg-white rounded-2xl p-6 border border-[#EFE7DF] relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#E5AA3E] via-[#8B6E66] to-[#283B91]" />
                  <h4 className="text-lg font-black text-[#212529] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Department <span className="italic text-[#8B6E66]">Contacts</span></h4>
                  <div className="space-y-1.5">
                    {departments.map((d) => (
                      <div key={d.name} className="group flex items-center gap-3 p-3 rounded-xl hover:bg-[#FAF9F7] transition-all duration-300">
                        <div className="w-9 h-9 rounded-lg bg-[#8B6E66]/8 flex items-center justify-center text-[#8B6E66] flex-shrink-0 group-hover:bg-[#8B6E66]/15 transition-colors">{d.icon}</div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[#212529] text-[13px] font-bold leading-tight">{d.name}</div>
                          <div className="text-[#5c5855]/50 text-[11px] font-medium">{d.desc}</div>
                        </div>
                        <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="text-[10px] font-bold text-[#8B6E66] hover:underline flex-shrink-0 hidden sm:block">{d.phone}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>
              <FadeInUp delay={400}>
                <div className="bg-white rounded-2xl p-5 border border-[#EFE7DF] flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#E5AA3E]/10 flex items-center justify-center text-[#E5AA3E]"><Clock size={20} /></div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/40 mb-0.5">Office Hours</div>
                    <div className="text-[#212529] text-[14px] font-bold">Mon – Sat: 9:00 AM – 5:00 PM <span className="text-[#5c5855]/40 font-medium">· Sun Closed</span></div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="py-24 bg-[#FAF9F7] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-[#EFE7DF]/30 -skew-x-12 -translate-x-20 z-0 hidden lg:block"></div>
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <FadeInUp>
            <div className="mb-16 relative">
              <div className="absolute -left-10 -top-4 w-32 h-20 bg-[#EFE7DF] -skew-x-12 z-0 hidden md:block"></div>
              <h2 className="relative z-10 text-[40px] md:text-[56px] font-black text-[#212529] leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                What Students<br /><span className="italic text-[#8B6E66]">Say.</span>
              </h2>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <FadeInUp key={t.name} delay={100 + i * 150}>
                <div className="group bg-white rounded-2xl p-8 md:p-10 border border-[#EFE7DF] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-[#E5AA3E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#EFE7DF] group-hover:border-[#E5AA3E]/20 transition-colors duration-500 rounded-tr-lg"></div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(5)].map((_, k) => <Star key={k} size={14} className="text-[#E5AA3E]" fill="#E5AA3E" />)}
                  </div>
                  <p className="text-[#5c5855] text-[16px] leading-relaxed mb-8 italic">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#EFE7DF]" />
                    <div>
                      <div className="text-[#212529] font-bold text-[14px]">{t.name}</div>
                      <div className="text-[#8B6E66] text-[11px] font-bold uppercase tracking-widest">{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[45%] h-full -skew-x-12 translate-x-32 z-0 hidden lg:block bg-[#FAF9F7]" />
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <FadeInUp>
                <div className="mb-4 relative">
                  <div className="absolute -left-10 -top-4 w-32 h-20 bg-[#EFE7DF] -skew-x-12 z-0 hidden md:block"></div>
                  <h2 className="relative z-10 text-[40px] md:text-[56px] font-black text-[#212529] leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Got<br /><span className="italic text-[#8B6E66]">Questions?</span>
                  </h2>
                </div>
                <p className="text-[#5c5855] text-[15px] font-medium leading-relaxed mb-8 mt-6">Find quick answers to the most common queries about admissions, campus life, and more.</p>
                <div className="w-16 h-1 bg-[#E5AA3E] mb-8"></div>
                <a href="mailto:info@trident.ac.in" className="group inline-flex items-center gap-4 font-bold text-[12px] uppercase tracking-widest text-[#8B6E66] hover:text-[#212529] transition-colors">
                  Still have questions? Email us <span className="w-12 h-[1px] bg-[#8B6E66] inline-block group-hover:w-20 transition-all duration-500"></span>
                </a>
              </FadeInUp>
            </div>
            <div className="lg:col-span-8 space-y-3">
              {faqs.map((faq, i) => (<FaqItem key={i} faq={faq} index={i} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ QUICK LINKS ══════ */}
      <section className="py-14 bg-[#FAF9F7] border-t border-[#EFE7DF]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <FadeInUp>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#8B6E66]/40 flex items-center gap-3 mb-2"><Globe size={14} className="text-[#E5AA3E]" /> Quick Links</span>
                <h4 className="text-2xl font-black text-[#212529]" style={{ fontFamily: "'Playfair Display', serif" }}>Explore <span className="italic text-[#8B6E66]">more.</span></h4>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {quickLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 bg-white hover:bg-[#212529] border border-[#EFE7DF] hover:border-[#212529] text-[#5c5855] hover:text-white px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-400 hover:-translate-y-0.5 shadow-sm hover:shadow-lg">
                    {link.icon} {link.label} <ChevronRight size={12} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="relative overflow-hidden bg-[#1A1817]">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23FFFFFF' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 py-20 relative z-10">
          <FadeInUp>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="text-center sm:text-left">
                <h4 className="text-3xl md:text-4xl font-black text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to join <span className="italic text-[#E5AA3E]">Trident?</span></h4>
                <p className="text-[#A59381] text-sm font-medium max-w-lg">Begin your application today and take the first step towards an extraordinary career.</p>
              </div>
              <a href="/apply" className="group inline-flex items-center gap-3 bg-[#E5AA3E] hover:bg-[#c99535] text-[#1A1817] px-10 py-5 rounded-2xl font-black text-[12px] uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all duration-500 whitespace-nowrap">
                Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
