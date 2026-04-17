import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAboutPage } from "../hooks/useAboutPage";
import iso9001 from "../assets/images/iso9001.png";
import iso14001 from "../assets/images/iso14001.png";
import seepz from "../assets/images/seepz.png";
import mpcb from "../assets/images/mpcb.png";
import decor from "../assets/images/certificates-decor.png";

export default function Certificates() {
  const { aboutData, loading } = useAboutPage();
  const navigate = useNavigate();

  const fallbackCerts = [
    { 
      id: "ISO 9001", 
      logo: iso9001, 
      text: "We follow globally recognized quality standards to ensure consistent excellence in our products and services. Customer satisfaction and continuous improvement are at the heart of everything we do." 
    },
    { 
      id: "ISO 14001", 
      logo: iso14001, 
      text: "We are committed to minimizing environmental impact through responsible and sustainable practices. Our operations strictly follow international environmental safety standards." 
    },
    { 
      id: "SEEPZ", 
      logo: seepz, 
      text: "We are an authorized SEEPZ unit, enabling efficient export-oriented operations and global trade compliance. This approval ensures faster processing, tax benefits, and seamless international business." 
    },
    { 
      id: "MPCB", 
      logo: mpcb, 
      text: "We operate in compliance with MPCB norms to control pollution and protect the environment. Our processes meet regulatory standards for safety, waste management, and emissions." 
    },
  ];

  const certs = aboutData?.certifications && aboutData.certifications.length > 0
    ? aboutData.certifications.sort((a, b) => (a.order || 0) - (b.order || 0))
    : fallbackCerts;

  if (loading) {
    return (
      <section className="bg-[#EBE8D7] py-16 md:py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-[#1A0185]"></div>
      </section>
    );
  }

  return (
    <section className="bg-[#EBE8D7] py-14 md:py-20 relative overflow-hidden font-sans">
      
      {/* Decorative Image */}
      <img
        src={decor}
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 w-[120px] md:w-[200px] opacity-30 md:opacity-80 pointer-events-none select-none"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-black/60 mb-1">
            OUR
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1e1494] leading-tight">
            Certificates
          </h2>
          <p className="text-sm md:text-[15px] text-gray-600 mt-2 max-w-xl">
            Industry-recognized certifications that validate our commitment to quality and environmental responsibility.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {certs.map((c, index) => (
            <motion.div
              key={c.id || c._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(26, 1, 133, 0.1)", transition: { duration: 0.25 } }}
              className="bg-[#F4F3EF] rounded-2xl md:rounded-3xl p-5 md:p-7 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-white/40 hover:border-[#9BC9DF]/40 transition-colors duration-300"
            >
              
              {/* CARD HEADER */}
              <div>
                <div className="flex items-center gap-4 mb-4 md:mb-5">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden flex-shrink-0 p-2">
                    <img
                      src={c.logo}
                      alt={`${c.id || c.name} certification`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#1A0185]">
                    {c.id || c.name}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="text-[13px] md:text-sm leading-relaxed text-gray-600 mb-5 md:mb-6">
                  {c.text || c.description}
                </p>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => navigate('/contact')}
                className="flex items-center gap-2 w-fit rounded-full bg-[#9BC9DF] px-6 py-2.5 text-[13px] font-bold text-gray-900 transition-all duration-300 hover:bg-[#1A0185] hover:text-white hover:shadow-md active:scale-95"
              >
                Get in Touch
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}