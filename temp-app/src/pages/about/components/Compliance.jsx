import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Gavel, Landmark } from 'lucide-react';

const DocItem = ({ icon: Icon, title, links }) => (
  <motion.div
    whileHover={{ x: 10 }}
    className="flex gap-6 p-8 bg-white border border-[#EFE7DF] rounded-[32px] shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group"
  >
    <div className="w-16 h-16 rounded-[20px] bg-[#F8F9FA] flex items-center justify-center text-[#1B4D8E] shrink-0 border border-[#EFE7DF] group-hover:bg-[#1B4D8E] group-hover:text-white transition-all duration-300">
      <Icon size={28} />
    </div>
    <div className="flex flex-col gap-3">
      <h4 className="text-xl font-black text-[#3E3A36] uppercase tracking-tight">{title}</h4>
      <div className="flex flex-col gap-2">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B4D8E] font-bold hover:text-[#E5AA3E] transition-colors duration-300 flex items-center gap-2 group/link text-[15px]"
          >
            <div className="w-1 h-1 bg-[#E5AA3E] rounded-full group-hover/link:w-3 transition-all duration-300" />
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </motion.div>
);

const Compliance = () => {
  return (
    <section id="compliance" className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-[#E5AA3E]"></div>
              <span className="text-[#E5AA3E] font-black uppercase tracking-[.3em] text-[10px]">GOVERNANCE</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#3E3A36] leading-[1.1] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Transparency & <span className="italic text-[#1B4D8E]">Compliance</span>
            </h2>
            <p className="text-lg font-light text-[#5c5855] leading-relaxed max-w-xl mb-12">
              Trident Academy of Technology maintains the highest standards of transparency in its operations and financial management. Access our official documents and regulatory approvals below.
            </p>
            <div className="p-8 bg-white rounded-3xl border border-[#EFE7DF] shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5AA3E]/10 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000" />
              <p className="text-[#1B4D8E] font-black italic text-lg relative z-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                "Governance rooted in trust and institutional integrity."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <DocItem
              icon={FileText}
              title="Audited Financials"
              links={[
                { name: "FY 2024-2025 (Provisional)", href: "https://tat.ac.in/wp-content/uploads/2025/09/PROVISIONAL-BS.pdf" },
                { name: "FY 2023-2024", href: "https://tat.ac.in/wp-content/uploads/2024/12/D.Foundation-2023-24.pdf" }
              ]}
            />
            <DocItem
              icon={Gavel}
              title="Rules & Regulations"
              links={[
                { name: "Student Hand Book", href: "https://tat.ac.in/wp-content/uploads/2023/05/Student-Hand-Book-Revised.pdf" },
                { name: "HR Policies", href: "https://tat.ac.in/wp-content/uploads/2025/08/HR-POLICY.pdf" }
              ]}
            />
            <DocItem
              icon={Landmark}
              title="AICTE Approvals"
              links={[
                { name: "Approval Letter 2025-26", href: "https://tat.ac.in/wp-content/uploads/2025/09/EOA-Report-25-26.pdf" }
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
