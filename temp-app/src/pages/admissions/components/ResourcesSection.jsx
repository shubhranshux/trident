import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Phone, Mail, MapPin, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

const ResourcesSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", query: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://sgemn43u4xfdset5xxdjjzsn3i0kgjrj.lambda-url.us-east-1.on.aws/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.query,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", query: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting query:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="downloads" className="py-24 bg-white relative overflow-hidden z-10">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Downloads Pane */}
          <div className="flex-1 lg:py-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
                <span className="text-[#E5AA3E] font-black uppercase tracking-[.3em] text-[10px]">Official</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#3E3A36] tracking-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Admission <span className="italic text-[#8B6E66]">Resources.</span>
              </h2>
              <p className="text-[#5c5855] text-lg font-light leading-relaxed">Download official admission brochures and required forms.</p>
            </motion.div>

            <div className="space-y-6">
              {[
                { title: "Admission Brochure 2024", size: "PDF, 2.4 MB" },
                { title: "Admission Guidelines", size: "PDF, 1.1 MB" }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex items-center gap-6 p-6 top-0 bg-[#F8F9FA] rounded-2xl hover:bg-white border border-transparent hover:border-[#EFE7DF] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-[#EFE7DF] flex items-center justify-center text-[#1B4D8E] group-hover:bg-[#1B4D8E] group-hover:text-white transition-colors duration-300">
                    <Download size={24} />
                  </div>
                  <div className="flex-grow">
                    <span className="block text-lg font-black text-[#3E3A36] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</span>
                    <span className="text-[10px] font-bold text-[#8B6E66] uppercase tracking-[.2em]">{item.size}</span>
                  </div>
                  <div className="text-2xl font-black text-[#1B4D8E] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                     <ArrowRight size={24} />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact / Inquiry Pane */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-[#1A1817] p-10 md:p-12 lg:p-14 rounded-[40px] text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5AA3E]/5 rounded-full -translate-y-32 translate-x-32" />
              <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                Admission <span className="italic text-[#E5AA3E]">Inquiry.</span>
              </h2>
              <p className="text-white/60 font-light mb-10 leading-relaxed text-[15px]">Fill out the form below or reach out to our admission team for immediate assistance.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#E5AA3E]/20 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-[#E5AA3E]" />
                  </div>
                  <h4 className="text-xl font-black text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Query Submitted!</h4>
                  <p className="text-white/50 text-sm">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name (required)" 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl placeholder-white/30 text-white focus:border-[#E5AA3E] outline-none transition-all font-light" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Mobile Number (required)" 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl placeholder-white/30 text-white focus:border-[#E5AA3E] outline-none transition-all font-light" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email (required)" 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl placeholder-white/30 text-white focus:border-[#E5AA3E] outline-none transition-all font-light" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <textarea 
                    name="query"
                    placeholder="Query details" 
                    rows="3" 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl placeholder-white/30 text-white focus:border-[#E5AA3E] outline-none transition-all font-light"
                    value={formData.query}
                    onChange={handleChange}
                  ></textarea>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-[#1B4D8E] hover:bg-[#8B6E66] text-white rounded-2xl font-bold uppercase tracking-[.2em] text-[11px] flex items-center justify-center gap-3 transition-colors duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Submit Query"} <Send size={16} />
                  </button>
                </form>
              )}

              <div className="mt-12 space-y-6 border-t border-white/10 pt-10">
                {[
                  { name: "Mr. Tushar Ranjan Panda", role: "Head of Admissions", initial: "T" },
                  { name: "Mr. Rudra Pratap Mohanty", role: "Admissions (Jharkhand)", initial: "R" }
                ].map((agent, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-[#212529] rounded-2xl border border-white/10 flex items-center justify-center font-black text-white shadow-lg group-hover:-translate-y-1 transition-transform" style={{ fontFamily: "'Playfair Display', serif" }}>{agent.initial}</div>
                    <div className="flex-grow">
                      <span className="block font-black text-[13px] tracking-wide text-white">{agent.name}</span>
                      <span className="text-[10px] font-bold text-[#E5AA3E] uppercase tracking-[.2em]">{agent.role}</span>
                    </div>
                    <a href="tel:+919776462430" className="px-5 py-2.5 border border-white/20 rounded-xl text-[9px] font-black uppercase tracking-[.2em] text-white hover:bg-white hover:text-[#1A1817] transition-all">Contact</a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
