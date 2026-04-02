import { useState, useRef, useEffect } from "react";
import { FadeInUp, SlideIn } from "../../utils/animations";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowRight,
  Globe,
  GraduationCap,
  Building2,
  Users,
  BookOpen,
  ChevronRight,
  CheckCircle2,
  MessageSquare,
  Navigation,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Clock,
} from "lucide-react";

/* ─── Contact Data ─── */
const contactInfo = [
  {
    icon: <MapPin size={22} />,
    label: "Visit Us",
    title: "Campus Address",
    lines: ["F2/A, Chandaka Industrial Estate,", "In front of Infocity, Bhubaneswar,", "Odisha, Pin: 751024, India"],
    action: { text: "Get Directions", href: "https://maps.google.com/?q=Trident+Academy+of+Technology+Bhubaneswar" },
    accent: "#E8BD63",
  },
  {
    icon: <Phone size={22} />,
    label: "Call Us",
    title: "Phone",
    lines: ["+91 98611 91195"],
    action: { text: "Call Now", href: "tel:+919861191195" },
    accent: "#3EA644",
  },
  {
    icon: <Mail size={22} />,
    label: "Write to Us",
    title: "Email",
    lines: ["info@trident.ac.in"],
    action: { text: "Send Email", href: "mailto:info@trident.ac.in" },
    accent: "#2E6DB4",
  },
  {
    icon: <Phone size={22} />,
    label: "Admissions",
    title: "Admission Contact",
    lines: ["+91 98611 91195", "+91 70084 43255"],
    action: { text: "Call Admissions", href: "tel:+917008443255" },
    accent: "#C41E3A",
  },
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
  { label: "Campus Life", href: "https://campuslife-tat.tekkzy.com", icon: <Users size={14} /> },
  { label: "Research & Innovation", href: "https://research-tat.tekkzy.com", icon: <BookOpen size={14} /> },
  { label: "Alumni Network", href: "https://alumni-tat.tekkzy.com/", icon: <Globe size={14} /> },
  { label: "Academic Calendar", href: "https://academics-tat.tekkzy.com/", icon: <Navigation size={14} /> },
];

const faqs = [
  { q: "How do I apply for admission?", a: "Visit our Admissions Portal or contact the Admissions Office at +91 98611 91195. Applications are open for B.Tech, M.Tech, MBA, and MCA programs.", color: "#E8BD63" },
  { q: "What are the hostel facilities?", a: "We offer separate, well-maintained hostels for boys and girls within the campus with Wi-Fi, mess facilities, and 24/7 security.", color: "#2E6DB4" },
  { q: "Is the campus accessible by public transport?", a: "Yes, the campus is located in Chandaka Industrial Estate, about 12 km from the airport and 4.3 km from Patia railway station. College buses are also available.", color: "#C41E3A" },
  { q: "What placement support is offered?", a: "Our dedicated Placement Cell partners with 320+ companies. Students receive resume workshops, mock interviews, and direct placement drives with top recruiters.", color: "#3EA644" },
  { q: "What scholarships are available?", a: "Trident offers merit-based scholarships, fee waivers for economically weaker sections, and special grants for national-level achievers in sports and academics.", color: "#283B91" },
  { q: "Which courses does TAT offer?", a: "We offer B.Tech in CSE, CSE (AI & ML), ECE, EEE, ME, CE; M.Tech in multiple specializations; MBA; and MCA — all affiliated with BPUT and approved by AICTE.", color: "#E8BD63" },
];

/* ─── FAQ Item ─── */
function FaqItem({ faq, index, isOpen, onToggle }) {
  const ref = useRef(null);
  const [h, setH] = useState(0);
  useEffect(() => { if (ref.current) setH(isOpen ? ref.current.scrollHeight : 0); }, [isOpen]);
  const num = String(index + 1).padStart(2, "0");

  return (
    <FadeInUp delay={80 + index * 70}>
      <div
        className="group relative rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          background: isOpen ? "#fff" : "#F9F7F5",
          border: isOpen ? "1px solid rgba(40,59,145,0.12)" : "1px solid rgba(62,58,54,0.05)",
          boxShadow: isOpen ? "0 20px 50px -15px rgba(0,0,0,0.08)" : "none",
          transform: isOpen ? "translateY(-2px)" : "none",
        }}
      >
        <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl transition-all duration-500" style={{ backgroundColor: faq.color, opacity: isOpen ? 1 : 0.25, width: isOpen ? "4px" : "3px" }} />
        <button onClick={onToggle} className="w-full flex items-center gap-5 p-5 pl-7 text-left cursor-pointer">
          <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-black text-[12px] transition-all duration-500" style={{ backgroundColor: isOpen ? faq.color : `${faq.color}12`, color: isOpen ? "#fff" : faq.color }}>{num}</div>
          <span className="serif text-[17px] font-black flex-1 pr-3 transition-colors duration-300" style={{ color: isOpen ? "#283B91" : "#3E3A36" }}>{faq.q}</span>
          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ backgroundColor: isOpen ? "#283B91" : "rgba(62,58,54,0.05)", color: isOpen ? "#fff" : "rgba(62,58,54,0.3)", transform: isOpen ? "rotate(135deg)" : "rotate(0deg)" }}>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </div>
        </button>
        <div className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ height: `${h}px` }}>
          <div ref={ref} className="px-7 pb-5">
            <div className="ml-[56px] pl-4 text-[#3E3A36]/50 font-medium text-[14px] leading-[1.8]" style={{ borderLeft: `2px solid ${faq.color}20` }}>{faq.a}</div>
          </div>
        </div>
      </div>
    </FadeInUp>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*  PAGE COMPONENT                                              */
/* ═══════════════════════════════════════════════════════════ */
export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", department: "General Inquiry", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", department: "General Inquiry", subject: "", message: "" });
  };

  const inputClass = (field) => {
    const base = "w-full bg-[#F9F7F5] border-2 text-[#3E3A36] placeholder-[#3E3A36]/25 px-5 py-4 rounded-xl outline-none transition-all duration-300 font-medium text-[15px]";
    return base + (focusedField === field ? " border-[#283B91] shadow-[0_0_0_4px_rgba(40,59,145,0.06)] bg-white" : " border-transparent hover:border-[#3E3A36]/8");
  };

  return (
    <div className="bg-[#F5EEEC] min-h-screen flex flex-col pt-24">
      <Header />

      {/* ════════════════════════════════════════════════════════ */}
      {/*  HERO — WARM LIGHT SPLIT SCREEN                          */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#F5EEEC]">
        {/* Tri-color top */}
        <div className="absolute top-0 left-0 right-0 flex items-center gap-0 z-20">
          <div className="h-[3px] flex-1 bg-[#E8BD63]" /><div className="h-[3px] flex-1 bg-[#C41E3A]" /><div className="h-[3px] flex-1 bg-[#2E6DB4]" />
        </div>

        {/* Background elements */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(rgba(62,58,54,0.12) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 -right-32 w-[600px] h-[600px] bg-[#E8BD63]/[0.06] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-[#283B91]/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-20 lg:py-28 items-center">
            {/* Left — Text */}
            <div>
              <FadeInUp delay={100}>
                <div className="inline-flex items-center gap-3 bg-white/60 border border-[#3E3A36]/8 rounded-full px-5 py-2 mb-8 backdrop-blur-sm shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#3EA644] animate-pulse" />
                  <span className="text-[12px] uppercase tracking-[0.25em] font-bold text-[#3E3A36]/50">We're here to help</span>
                </div>

                <h1 className="serif text-5xl md:text-6xl lg:text-[72px] font-black text-[#3E3A36] leading-[1.05] mb-6">
                  Let's build
                  <br />
                  <span className="relative">
                    <span className="text-[#EAB308] italic">something</span>
                    <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none"><path d="M1 5.5C40 2 80 2 100 4C120 6 160 6 199 3" stroke="#E8BD63" strokeWidth="2" strokeLinecap="round" opacity="0.5" /></svg>
                  </span>
                  <br />
                  <span className="text-[#3E3A36]/80">together.</span>
                </h1>

                <p className="text-[#3E3A36]/40 text-[17px] font-medium leading-relaxed max-w-lg mb-10">
                  Whether you're a prospective student, parent, or industry collaborator — we'd love to connect. Reach out and start a conversation that could shape your future.
                </p>

                {/* Quick contact pills */}
                <div className="flex flex-wrap gap-3">
                  <a href="tel:+919861191195" className="group inline-flex items-center gap-3 bg-white hover:bg-white border border-[#3E3A36]/8 hover:border-[#3EA644]/30 text-[#3E3A36]/70 hover:text-[#3E3A36] rounded-xl px-5 py-3 transition-all duration-400 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    <Phone size={16} className="text-[#3EA644]" />
                    <span className="text-[14px] font-bold">+91 98611 91195</span>
                  </a>
                  <a href="mailto:info@trident.ac.in" className="group inline-flex items-center gap-3 bg-white hover:bg-white border border-[#3E3A36]/8 hover:border-[#2E6DB4]/30 text-[#3E3A36]/70 hover:text-[#3E3A36] rounded-xl px-5 py-3 transition-all duration-400 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    <Mail size={16} className="text-[#2E6DB4]" />
                    <span className="text-[14px] font-bold">info@trident.ac.in</span>
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Right — Contact Cards on light bg */}
            <div className="relative">
              <FadeInUp delay={250}>
                <div className="grid grid-cols-2 gap-4">
                  {contactInfo.map((c, i) => (
                    <a
                      key={c.label}
                      href={c.action.href}
                      target={c.action.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group relative bg-white border border-[#3E3A36]/5 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] hover:border-[#3E3A36]/10 overflow-hidden"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {/* Top accent bar */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-500" style={{ backgroundColor: c.accent }} />
                      {/* Corner triangle */}
                      <div className="absolute top-0 right-0 w-0 h-0" style={{ borderLeft: "28px solid transparent", borderTop: `28px solid ${c.accent}` }} />

                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: `${c.accent}12`, color: c.accent }}>
                        {c.icon}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3E3A36]/25 mb-2">{c.label}</div>
                      <div className="text-[#3E3A36] text-[14px] font-semibold leading-relaxed mb-3">
                        {c.lines.map((l, j) => <span key={j} className="block">{l}</span>)}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 group-hover:gap-3" style={{ color: c.accent }}>
                        {c.action.text}
                        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </a>
                  ))}
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-0 z-20">
          <div className="h-[3px] flex-1 bg-[#2E6DB4]" /><div className="h-[3px] flex-1 bg-[#C41E3A]" /><div className="h-[3px] flex-1 bg-[#E8BD63]" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/*  MAIN CONTENT                                            */}
      {/* ════════════════════════════════════════════════════════ */}
      <main className="flex-grow">

        {/* ── Form + Map — Asymmetric Layout ── */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#283B91]/[0.02] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#E8BD63]/[0.03] rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            {/* Section Title */}
            <FadeInUp>
              <div className="max-w-xl mb-16">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[2px] w-12" style={{ background: "linear-gradient(90deg, #E8BD63, transparent)" }} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#3E3A36]/30">Send a Message</span>
                </div>
                <h2 className="serif text-4xl md:text-5xl font-black text-[#3E3A36] mb-3 leading-[1.1]">
                  Drop us a <span className="italic text-[#EAB308]">line.</span>
                </h2>
                <p className="text-[#3E3A36]/40 text-[16px] font-medium leading-relaxed">
                  Fill up the form and our team will get back to you within 24 hours.
                </p>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* ── Form ── */}
              <FadeInUp delay={150} className="lg:col-span-7">
                <div className="bg-[#FAFAF8] rounded-3xl p-8 md:p-10 border border-[#3E3A36]/5 relative overflow-hidden">
                  {/* Side gradient bar */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#E8BD63] via-[#C41E3A] to-[#2E6DB4] rounded-l-3xl" />

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <div className="w-20 h-20 rounded-full bg-[#3EA644]/10 flex items-center justify-center mb-6 animate-bounce">
                        <CheckCircle2 size={42} className="text-[#3EA644]" />
                      </div>
                      <h4 className="serif text-2xl font-black text-[#3E3A36] mb-3">Message Sent!</h4>
                      <p className="text-[#3E3A36]/50 text-sm font-medium max-w-sm">Our team will respond within 24 working hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A36]/35 mb-2">Full Name <span className="text-[#C41E3A]">*</span></label>
                          <input type="text" name="name" required value={formData.name} onChange={handleChange}
                            onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)}
                            className={inputClass("name")} placeholder="John Doe" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A36]/35 mb-2">Email <span className="text-[#C41E3A]">*</span></label>
                          <input type="email" name="email" required value={formData.email} onChange={handleChange}
                            onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)}
                            className={inputClass("email")} placeholder="john@example.com" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A36]/35 mb-2">Phone</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                            onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)}
                            className={inputClass("phone")} placeholder="+91 98XXX XXXXX" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A36]/35 mb-2">Department</label>
                          <select name="department" value={formData.department} onChange={handleChange}
                            onFocus={() => setFocusedField("department")} onBlur={() => setFocusedField(null)}
                            className={inputClass("department") + " appearance-none cursor-pointer"}
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(62,58,54,0.3)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
                            <option>General Inquiry</option>
                            <option>Admissions</option>
                            <option>Placements</option>
                            <option>Academics</option>
                            <option>Research</option>
                            <option>Alumni Relations</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A36]/35 mb-2">Subject <span className="text-[#C41E3A]">*</span></label>
                        <input type="text" name="subject" required value={formData.subject} onChange={handleChange}
                          onFocus={() => setFocusedField("subject")} onBlur={() => setFocusedField(null)}
                          className={inputClass("subject")} placeholder="How can we help?" />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A36]/35 mb-2">Message <span className="text-[#C41E3A]">*</span></label>
                        <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
                          onFocus={() => setFocusedField("message")} onBlur={() => setFocusedField(null)}
                          className={inputClass("message") + " resize-none"} placeholder="Tell us more about your inquiry..." />
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <p className="text-[#3E3A36]/20 text-[10px] font-bold uppercase tracking-widest hidden sm:block"><span className="text-[#C41E3A]">*</span> Required</p>
                        <button type="submit" className="group inline-flex items-center gap-3 btn-rose px-10 py-4 rounded-xl font-bold text-[13px]">
                          Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </FadeInUp>

              {/* ── Right Column: Map + Depts ── */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Google Map */}
                <FadeInUp delay={250}>
                  <div className="relative rounded-3xl overflow-hidden border border-[#3E3A36]/5 shadow-sm" style={{ height: "280px" }}>
                    <iframe
                      title="Trident Academy of Technology Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0025!2d85.8148!3d20.3350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190900125b0001%3A0x2fa5a1248e5084a4!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sin!4v1711900000000!5m2!1sen!2sin"
                      width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-[#3E3A36] px-4 py-2.5 rounded-xl shadow-lg border border-[#3E3A36]/5">
                      <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#E8BD63] mb-0.5">Campus Location</div>
                      <div className="text-[12px] font-bold text-[#3E3A36]">Chandrasekharpur, Bhubaneswar</div>
                    </div>
                  </div>
                </FadeInUp>

                {/* Department List */}
                <FadeInUp delay={350}>
                  <div className="bg-[#FAFAF8] rounded-3xl p-6 border border-[#3E3A36]/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E8BD63] via-[#C41E3A] to-[#2E6DB4]" />
                    <h4 className="serif text-lg font-black text-[#3E3A36] mb-4">
                      Department <span className="text-[#EAB308]">Contacts</span>
                    </h4>
                    <div className="space-y-1.5">
                      {departments.map((d) => (
                        <div key={d.name} className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-all duration-300">
                          <div className="w-9 h-9 rounded-lg bg-[#283B91]/6 flex items-center justify-center text-[#283B91] flex-shrink-0 group-hover:bg-[#283B91]/12 transition-colors">{d.icon}</div>
                          <div className="min-w-0 flex-1">
                            <div className="text-[#3E3A36] text-[13px] font-bold leading-tight">{d.name}</div>
                            <div className="text-[#3E3A36]/30 text-[11px] font-medium">{d.desc}</div>
                          </div>
                          <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="text-[10px] font-bold text-[#3EA644] hover:underline flex-shrink-0 hidden sm:block">{d.phone}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeInUp>

                {/* Office Hours */}
                <FadeInUp delay={400}>
                  <div className="bg-[#FAFAF8] rounded-2xl p-5 border border-[#3E3A36]/5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C41E3A]/8 flex items-center justify-center text-[#C41E3A]"><Clock size={20} /></div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A36]/30 mb-0.5">Office Hours</div>
                      <div className="text-[#3E3A36] text-[14px] font-bold">Mon – Sat: 9:00 AM – 5:00 PM <span className="text-[#3E3A36]/30 font-medium">· Sun Closed</span></div>
                    </div>
                  </div>
                </FadeInUp>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-[#F5EEEC] relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E8BD63]/[0.03] rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left — Sticky */}
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <FadeInUp>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-[2px] w-10" style={{ background: "linear-gradient(90deg, #E8BD63, transparent)" }} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#3E3A36]/30">FAQ</span>
                  </div>
                  <h2 className="serif text-4xl md:text-5xl font-black text-[#3E3A36] mb-5 leading-[1.1]">
                    Got <span className="italic text-[#EAB308]">Questions?</span>
                  </h2>
                  <p className="text-[#3E3A36]/40 text-[15px] font-medium leading-relaxed mb-8">
                    Find quick answers to the most common queries about admissions, campus life, and more.
                  </p>
                  <div className="flex items-center gap-0 mb-8">
                    <div className="h-[3px] flex-1 bg-gradient-to-r from-transparent to-[#E8BD63]" />
                    <div className="h-[3px] w-1/4 bg-[#C41E3A]" />
                    <div className="h-[3px] w-1/6 bg-[#2E6DB4]" />
                  </div>
                  <a href="mailto:info@trident.ac.in" className="group inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-widest text-[#3E3A36]/50 hover:text-[#283B91] transition-colors">
                    <span className="w-10 h-[2px] bg-[#E8BD63] group-hover:w-14 transition-all" />
                    Still have questions? Email us
                  </a>
                </FadeInUp>
              </div>

              {/* Right — Accordion */}
              <div className="lg:col-span-8 space-y-3">
                {faqs.map((faq, i) => (
                  <FaqItem key={i} faq={faq} index={i} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Quick Links ── */}
        <section className="py-14 bg-white border-t border-[#3E3A36]/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <FadeInUp>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#3E3A36]/30 flex items-center gap-3 mb-2">
                    <Globe size={14} className="text-[#E8BD63]" /> Quick Links
                  </span>
                  <h4 className="serif text-2xl font-black text-[#3E3A36]">Explore <span className="italic text-[#EAB308]">more.</span></h4>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {quickLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                      className="group inline-flex items-center gap-2 bg-[#F9F7F5] hover:bg-[#283B91] border border-[#3E3A36]/5 hover:border-[#283B91] text-[#3E3A36]/60 hover:text-white px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-400 hover:-translate-y-0.5 shadow-sm hover:shadow-lg">
                      {link.icon} {link.label}
                      <ChevronRight size={12} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden" style={{ background: "#283B91" }}>
          <div className="absolute top-0 left-0 right-0 flex items-center gap-0 z-10">
            <div className="h-[3px] flex-1 bg-[#E8BD63]" /><div className="h-[3px] flex-1 bg-[#C41E3A]" /><div className="h-[3px] flex-1 bg-[#2E6DB4]" />
          </div>
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/[0.03] rotate-45 hidden md:block" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 relative z-10">
            <FadeInUp>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="text-center sm:text-left">
                  <h4 className="serif text-3xl md:text-4xl font-black text-white mb-2">Ready to join <span className="italic text-[#E8BD63]">Trident?</span></h4>
                  <p className="text-white/40 text-sm font-medium max-w-lg">Begin your application today and take the first step towards an extraordinary career.</p>
                </div>
                <a href="/apply" className="group inline-flex items-center gap-3 bg-[#E8BD63] text-[#0B1120] px-10 py-4 rounded-full font-bold text-[13px] uppercase tracking-widest shadow-xl hover:bg-[#F0D080] hover:-translate-y-1 transition-all duration-500 whitespace-nowrap">
                  Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </FadeInUp>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex items-center gap-0 z-10">
            <div className="h-[3px] flex-1 bg-[#2E6DB4]" /><div className="h-[3px] flex-1 bg-[#C41E3A]" /><div className="h-[3px] flex-1 bg-[#E8BD63]" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
