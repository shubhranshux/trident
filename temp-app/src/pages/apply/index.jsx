import { useState, useRef, useEffect } from "react";
import { FadeInUp, SlideIn } from "../../utils/animations";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ArrowRight,
  GraduationCap,
  ClipboardCheck,
  FileText,
  CalendarCheck,
  CheckCircle2,
  Users,
  Award,
  BookOpen,
  Send,
  Phone,
  Clock,
  Landmark,
  ShieldCheck,
} from "lucide-react";

/* ─── Programs Data ─── */
const programs = [
  { name: "Computer Science & Engineering", degree: "B.Tech", duration: "4 Years", seats: 180, fee: "₹85,000 / Year", color: "#E8BD63" },
  { name: "CSE (AI & Machine Learning)", degree: "B.Tech", duration: "4 Years", seats: 60, fee: "₹85,000 / Year", color: "#2E6DB4" },
  { name: "Electronics & Telecom Engineering", degree: "B.Tech", duration: "4 Years", seats: 120, fee: "₹85,000 / Year", color: "#C41E3A" },
  { name: "Electrical & Electronics Engg.", degree: "B.Tech", duration: "4 Years", seats: 60, fee: "₹85,000 / Year", color: "#3EA644" },
  { name: "Mechanical Engineering", degree: "B.Tech", duration: "4 Years", seats: 120, fee: "₹85,000 / Year", color: "#283B91" },
  { name: "Civil Engineering", degree: "B.Tech", duration: "4 Years", seats: 60, fee: "₹85,000 / Year", color: "#E8BD63" },
  { name: "Computer Science & Engineering", degree: "M.Tech", duration: "2 Years", seats: 30, fee: "₹72,000 / Year", color: "#2E6DB4" },
  { name: "Master of Business Administration", degree: "MBA", duration: "2 Years", seats: 60, fee: "₹1,06,000 / Year", color: "#C41E3A" },
  { name: "Master of Computer Applications", degree: "MCA", duration: "2 Years", seats: 60, fee: "₹74,000 / Year", color: "#3EA644" },
];

const steps = [
  { num: "01", title: "Appear for Entrance Exam", desc: "Write JEE Main (B.Tech), OJEE (PG/MBA/MCA), or GATE (M.Tech) based on your chosen program.", icon: <FileText size={24} />, color: "#E8BD63" },
  { num: "02", title: "Register for Counseling", desc: "After results, register on the OJEE / JoSAA counseling portal. Keep documents and rank card ready.", icon: <ClipboardCheck size={24} />, color: "#2E6DB4" },
  { num: "03", title: "Select Trident Academy", desc: "During choice filling, select Trident Academy of Technology as your preferred institution.", icon: <GraduationCap size={24} />, color: "#C41E3A" },
  { num: "04", title: "Report to Campus", desc: "Download allotment letter, pay acceptance fee, and report to campus with original documents for verification.", icon: <CalendarCheck size={24} />, color: "#3EA644" },
];

const eligibility = [
  { program: "B.Tech", requirement: "10+2 with PCM, minimum 45% aggregate. Valid JEE Main score required.", icon: <BookOpen size={20} /> },
  { program: "M.Tech", requirement: "B.Tech/B.E. with minimum 50% marks. Valid GATE or OJEE (PG) score.", icon: <Award size={20} /> },
  { program: "MBA", requirement: "Graduation (3 years) with minimum 50% aggregate. Valid OJEE/CAT/CMAT score.", icon: <Landmark size={20} /> },
  { program: "MCA", requirement: "Graduation with Mathematics at 10+2 or grad level. Minimum 50%. Valid OJEE score.", icon: <ShieldCheck size={20} /> },
];

const whyApply = [
  { stat: "NAAC 'A'", label: "Grade Accredited", color: "#E8BD63" },
  { stat: "320+", label: "Recruiting Companies", color: "#2E6DB4" },
  { stat: "₹48 LPA", label: "Highest Package", color: "#C41E3A" },
  { stat: "94%", label: "Placement Rate", color: "#3EA644" },
];

/* ─── Page Component ─── */
export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    entranceExam: "",
    rank: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", program: "", entranceExam: "", rank: "", message: "" });
  };

  const inputClass = (field) => {
    const base =
      "w-full bg-[#F9F7F5] border-2 text-[#3E3A36] placeholder-[#3E3A36]/25 px-5 py-4 rounded-xl outline-none transition-all duration-300 font-medium text-[15px]";
    const focused =
      focusedField === field
        ? " border-[#283B91] shadow-[0_0_0_4px_rgba(40,59,145,0.06)] bg-white"
        : " border-transparent hover:border-[#3E3A36]/8";
    return base + focused;
  };

  return (
    <div className="bg-[#F5EEEC] min-h-screen flex flex-col pt-24">
      <Header />

      {/* ═══════════════════════════════════════════════════ */}
      {/*  HERO — WARM LIGHT                                  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#F5EEEC]">
        {/* Tri-color top */}
        <div className="absolute top-0 left-0 right-0 flex items-center gap-0 z-20">
          <div className="h-[3px] flex-1 bg-[#E8BD63]" /><div className="h-[3px] flex-1 bg-[#C41E3A]" /><div className="h-[3px] flex-1 bg-[#2E6DB4]" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(rgba(62,58,54,0.12) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 -right-40 w-[600px] h-[600px] bg-[#E8BD63]/[0.06] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-[#283B91]/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 text-center">
          <FadeInUp delay={100} duration={800}>
            <div className="inline-flex items-center gap-3 bg-white/60 border border-[#3E3A36]/8 rounded-full px-5 py-2 mb-8 backdrop-blur-sm shadow-sm">
              <GraduationCap size={18} className="text-[#E8BD63]" />
              <span className="text-[12px] uppercase tracking-[0.25em] font-bold text-[#3E3A36]/50">Admissions 2026–27</span>
            </div>
            <h1 className="serif text-5xl md:text-7xl lg:text-[88px] font-black text-[#3E3A36] leading-[1.05] mb-5">
              Begin Your <br className="hidden md:block" />
              <span className="text-[#EAB308] italic">Journey.</span>
            </h1>
            <p className="text-[#3E3A36]/40 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-8">
              Join Odisha's premier technical institution. Applications are now open for B.Tech, M.Tech, MBA & MCA programs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#apply-form" className="group inline-flex items-center gap-3 btn-rose px-10 py-4 rounded-full font-bold text-[13px] uppercase tracking-widest">
                Start Application <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 text-[#3E3A36]/50 hover:text-[#283B91] text-[13px] font-bold uppercase tracking-widest border-b border-[#E8BD63]/50 hover:border-[#E8BD63] pb-1 transition-all">
                Contact Us
              </a>
            </div>
          </FadeInUp>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-0 z-20">
          <div className="h-[3px] flex-1 bg-[#2E6DB4]" /><div className="h-[3px] flex-1 bg-[#C41E3A]" /><div className="h-[3px] flex-1 bg-[#E8BD63]" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/*  MAIN CONTENT                                       */}
      {/* ═══════════════════════════════════════════════════ */}
      <main className="flex-grow">

        {/* ── Why Apply Stats ── */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {whyApply.map((s, i) => (
                <FadeInUp key={s.label} delay={100 + i * 100}>
                  <div className="group relative bg-[#F9F7F5] rounded-2xl p-7 text-center transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-[#3E3A36]/5 hover:border-[#3E3A36]/10 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)]">
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: s.color }} />
                    <div className="absolute top-0 right-0 w-0 h-0" style={{ borderLeft: "35px solid transparent", borderTop: `35px solid ${s.color}` }} />
                    <div className="serif text-4xl md:text-5xl font-black text-[#3E3A36] mb-2">{s.stat}</div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3E3A36]/40">{s.label}</div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── How to Apply — Steps ── */}
        <section className="py-24 bg-[#F5EEEC] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/4 h-full bg-[#EFE7DF]/30 -skew-x-12 -translate-x-20 z-0 hidden lg:block" />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <FadeInUp>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="block w-16 h-1 bg-[#E8BD63] mx-auto mb-6" />
                <h2 className="serif text-4xl md:text-5xl font-black text-[#3E3A36] mb-4">
                  How to <span className="italic text-[#EAB308]">Apply.</span>
                </h2>
                <p className="text-[#3E3A36]/45 text-lg font-medium leading-relaxed">
                  A simple 4-step process to secure your seat at Trident Academy of Technology.
                </p>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <FadeInUp key={step.num} delay={150 + i * 120}>
                  <div className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] overflow-hidden border border-[#3E3A36]/5 h-full">
                    <div className="absolute top-0 left-0 w-1.5 h-full transition-all duration-500 rounded-l-2xl" style={{ backgroundColor: step.color }} />
                    <div className="absolute top-0 right-0 w-0 h-0" style={{ borderLeft: "30px solid transparent", borderTop: `30px solid ${step.color}` }} />

                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-[15px] transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: `${step.color}12`, color: step.color }}>
                        {step.num}
                      </div>
                      <div className="text-[#3E3A36]/20 group-hover:text-[#3E3A36]/40 transition-colors">{step.icon}</div>
                    </div>

                    <h3 className="serif text-xl font-black text-[#3E3A36] mb-3 group-hover:text-[#283B91] transition-colors">{step.title}</h3>
                    <p className="text-[#3E3A36]/50 text-[14px] font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>



        {/* ── Application Form ── */}
        <section id="apply-form" className="py-24 bg-[#F5EEEC] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/4 h-full bg-[#EFE7DF]/30 -skew-x-12 -translate-x-20 z-0 hidden lg:block" />

          <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
            <FadeInUp>
              <div className="bg-white rounded-3xl p-8 md:p-14 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] border border-[#3E3A36]/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#E8BD63] via-[#C41E3A] to-[#2E6DB4] rounded-l-3xl" />
                <div className="absolute top-4 right-4 w-14 h-14 border-t-2 border-r-2 border-[#E8BD63]/10 hidden md:block rounded-tr-xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-[2px] w-10" style={{ background: "linear-gradient(90deg, #E8BD63, transparent)" }} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#3E3A36]/30">Application Form</span>
                  </div>
                  <h3 className="serif text-3xl md:text-4xl font-black text-[#3E3A36] mb-2 leading-tight">
                    Apply <span className="italic text-[#EAB308]">Now.</span>
                  </h3>
                  <p className="text-[#3E3A36]/40 text-sm font-medium mb-10">
                    Fill in your details and our admissions team will guide you through the next steps.
                  </p>

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <div className="w-20 h-20 rounded-full bg-[#3EA644]/10 flex items-center justify-center mb-6">
                        <CheckCircle2 size={42} className="text-[#3EA644]" />
                      </div>
                      <h4 className="serif text-2xl font-black text-[#3E3A36] mb-3">Application Received!</h4>
                      <p className="text-[#3E3A36]/50 text-sm font-medium max-w-sm">
                        Thank you for applying. Our admissions team will contact you within 48 hours with next steps.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A36]/40 mb-2">
                            Full Name <span className="text-[#C41E3A]">*</span>
                          </label>
                          <input type="text" name="name" required value={formData.name} onChange={handleChange}
                            onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)}
                            className={inputClass("name")} placeholder="Enter your full name" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A36]/40 mb-2">
                            Email Address <span className="text-[#C41E3A]">*</span>
                          </label>
                          <input type="email" name="email" required value={formData.email} onChange={handleChange}
                            onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)}
                            className={inputClass("email")} placeholder="your@email.com" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A36]/40 mb-2">
                            Phone Number <span className="text-[#C41E3A]">*</span>
                          </label>
                          <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                            onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)}
                            className={inputClass("phone")} placeholder="+91 98XXX XXXXX" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A36]/40 mb-2">
                            Program of Interest <span className="text-[#C41E3A]">*</span>
                          </label>
                          <select name="program" required value={formData.program} onChange={handleChange}
                            onFocus={() => setFocusedField("program")} onBlur={() => setFocusedField(null)}
                            className={inputClass("program") + " appearance-none cursor-pointer"}
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(62,58,54,0.35)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                              backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center",
                            }}>
                            <option value="">Select a program</option>
                            {programs.map((p) => (
                              <option key={p.name + p.degree} value={`${p.degree} - ${p.name}`}>{p.degree} — {p.name}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A36]/40 mb-2">
                            Entrance Exam
                          </label>
                          <select name="entranceExam" value={formData.entranceExam} onChange={handleChange}
                            onFocus={() => setFocusedField("entranceExam")} onBlur={() => setFocusedField(null)}
                            className={inputClass("entranceExam") + " appearance-none cursor-pointer"}
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(62,58,54,0.35)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                              backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center",
                            }}>
                            <option value="">Select exam</option>
                            <option value="JEE Main">JEE Main</option>
                            <option value="OJEE">OJEE</option>
                            <option value="GATE">GATE</option>
                            <option value="CAT">CAT</option>
                            <option value="CMAT">CMAT</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A36]/40 mb-2">
                            Rank / Score (if available)
                          </label>
                          <input type="text" name="rank" value={formData.rank} onChange={handleChange}
                            onFocus={() => setFocusedField("rank")} onBlur={() => setFocusedField(null)}
                            className={inputClass("rank")} placeholder="e.g. 45000" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A36]/40 mb-2">
                          Additional Message
                        </label>
                        <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                          onFocus={() => setFocusedField("message")} onBlur={() => setFocusedField(null)}
                          className={inputClass("message") + " resize-none"}
                          placeholder="Any additional questions or information..." />
                      </div>

                      <div className="flex items-center justify-between pt-3">
                        <p className="text-[#3E3A36]/25 text-[10px] font-bold uppercase tracking-widest hidden sm:block">
                          <span className="text-[#C41E3A]">*</span> Required fields
                        </p>
                        <button type="submit" className="group inline-flex items-center gap-3 btn-rose px-10 py-4 rounded-xl font-bold text-[13px]">
                          Submit Application
                          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </FadeInUp>

            {/* Contact strip */}
            <FadeInUp delay={200}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
                <div className="flex items-center gap-3 text-[#3E3A36]/50 text-[13px] font-bold">
                  <Phone size={16} className="text-[#3EA644]" />
                  <span>Admission Helpline: <a href="tel:+919861191195" className="text-[#283B91] hover:underline">+91 98611 91195</a>, <a href="tel:+917008443255" className="text-[#283B91] hover:underline">+91 70084 43255</a></span>
                </div>
                <span className="text-[#3E3A36]/15 hidden sm:block">|</span>
                <div className="flex items-center gap-3 text-[#3E3A36]/50 text-[13px] font-bold">
                  <Clock size={16} className="text-[#E8BD63]" />
                  <span>Mon – Sat: 9 AM – 5 PM</span>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ── CTA Strip ── */}
        <section className="relative overflow-hidden" style={{ background: "#283B91" }}>
          <div className="absolute top-0 left-0 right-0 flex items-center gap-0 z-10">
            <div className="h-[3px] flex-1 bg-[#E8BD63]" /><div className="h-[3px] flex-1 bg-[#C41E3A]" /><div className="h-[3px] flex-1 bg-[#2E6DB4]" />
          </div>
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/[0.03] rotate-45 hidden md:block" />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
            <FadeInUp>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="text-center sm:text-left">
                  <h4 className="serif text-3xl md:text-4xl font-black text-white mb-3">
                    Have <span className="italic text-[#E8BD63]">questions?</span>
                  </h4>
                  <p className="text-white/50 text-sm font-medium max-w-lg">
                    Our admissions counselors are ready to help you through every step. Don't hesitate to reach out.
                  </p>
                </div>
                <a href="/contact" className="group inline-flex items-center gap-3 bg-[#E8BD63] text-[#0B1120] px-10 py-4 rounded-full font-bold text-[13px] uppercase tracking-widest shadow-xl hover:bg-[#F0D080] hover:-translate-y-1 transition-all duration-500 whitespace-nowrap">
                  Contact Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
