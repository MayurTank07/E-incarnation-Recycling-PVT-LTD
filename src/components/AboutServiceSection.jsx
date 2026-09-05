import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import image from "../assets/images/image1-optimized.webp";
import image2 from "../assets/images/image2-optimized.webp";
import image3 from "../assets/images/image3-optimized.webp";
import { useServices } from "../hooks/useServices";

const AboutServiceSection = () => {
  const { services, loading, error } = useServices();
  const navigate = useNavigate();

  return (
    <div className="bg-[#f3f3f1] w-full relative overflow-x-hidden font-sans">
      
      {/* ================= ABOUT US ================= */}
      <section className="relative pt-24 sm:pt-24 md:pt-28 lg:pt-32 pb-20 md:pb-24 xl:pb-0 xl:min-h-[820px]">
        
        {/* LEFT CONTENT */}
        <div className="relative z-20 mx-auto max-w-[1180px] px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="w-full md:w-[74%] lg:w-[58%] xl:w-[50%] mt-0 md:mt-4 lg:mt-8 mb-8 md:mb-0">
            <h4 className="text-[#060C0C] font-semibold text-xs sm:text-sm tracking-[0.22em] mb-3">
              ABOUT US
            </h4>

            <h2 className="font-bold text-[#1A0185] text-3xl sm:text-4xl md:text-5xl lg:text-[3.45rem] leading-[1.12] mb-5 sm:mb-6">
              Pioneering a <br /> Greener Tomorrow
            </h2>

            <p className="text-[#060C0C] text-[15px] md:text-[17px] leading-relaxed mb-4 max-w-full md:max-w-[560px] pr-0 md:pr-6">
              As Mumbai's leading e-waste recycling company, we are committed to transforming electronic waste into valuable resources. Our certified, eco-friendly disposal services help businesses and individuals recycle responsibly while protecting the environment.
            </p>

            <p className="text-[#394242] text-[14px] md:text-[15px] leading-relaxed mb-6 max-w-full md:max-w-[520px] pr-0 md:pr-8">
              From safe collection to responsible recycling, every step is handled with care, compliance, and a clear focus on reducing landfill waste.
            </p>

            <button 
              onClick={() => navigate('/about')}
              className="bg-[#87BBD7] text-black px-7 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#76a8c1] transition shadow-[0_12px_24px_rgba(30,71,89,0.12)]"
            >
              KNOW MORE →
            </button>
          </div>
        </div>

        {/* LEFT EDGE ACCENT - Desktop only */}
        <div className="hidden 2xl:block absolute -left-7 top-[455px] w-52 h-80 rounded-r-full overflow-hidden z-10 shadow-[18px_0_40px_rgba(6,12,12,0.1)]">
          <img
            src={image3}
            className="w-full h-full object-cover object-center"
            alt="Waste collection and sorting"
            loading="lazy"
            decoding="async"
            width="310"
            height="600"
          />
        </div>

        {/* RIGHT BIG SEMI-CIRCLE - Desktop only */}
        <div
          className="hidden xl:block absolute top-0 -right-5 w-[25vw] max-w-[520px] h-[920px] rounded-l-[100%_50%] overflow-hidden z-0 shadow-[-18px_0_48px_rgba(6,12,12,0.08)]"
          role="img"
          aria-label="E-waste recycling facility"
        >
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
            width="325"
            height="1100"
          />
        </div>

        {/* CENTER CIRCLE - Adjusted positioning for mobile */}
        <div className="hidden xl:block absolute right-[17vw] top-[355px] w-56 h-56 rounded-full overflow-hidden z-30 border-[14px] border-white shadow-2xl">
          <img
            src={image2}
            className="w-full h-full object-cover"
            alt="Recycling process in action"
            loading="lazy"
            decoding="async"
            width="600"
            height="600"
          />
        </div>

      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative mx-auto max-w-[1120px] px-6 sm:px-10 md:px-16 lg:px-20 mt-4 md:mt-6 xl:mt-0 pt-4 sm:pt-0 pb-16 sm:pb-20 md:pb-24 z-10">
        
        <div className="mb-6 sm:mb-10 max-w-3xl">
          <h4 className="text-[#060C0C] font-semibold text-[10px] sm:text-sm tracking-[0.15em] mb-1 uppercase opacity-70">
            SERVICES
          </h4>

          <h2 className="font-bold text-[#1A0185] text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] mb-1 sm:mb-3 leading-tight">
            Our E-Waste Recycling Services
          </h2>

          <p className="text-[#060C0C] max-w-2xl text-[14px] sm:text-[15px] md:text-[16px] leading-snug sm:leading-relaxed">
            Comprehensive e-waste management solutions in Mumbai — from collection and recycling to EPR compliance and certified data destruction.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-[#1A0185]"></div>
              <p className="mt-4 text-gray-600">Loading services...</p>
            </div>
          ) : error ? (
            <div className="col-span-full text-center py-12">
              <p className="text-red-600">Failed to load services. Please try again later.</p>
            </div>
          ) : services.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">No services available.</p>
            </div>
          ) : services.map((service, index) => (
            <div
              key={service._id || index}
              className="group bg-white rounded-[2.2rem] p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-2xl flex flex-col transition-all duration-500 hover:-translate-y-3 cursor-pointer"
            >
              {/* ICON CIRCLE - Updated to display the icon */}
              <div className="bg-black w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-5 flex items-center justify-center overflow-hidden p-3">
                {service.icon && service.icon.trim() !== '' ? (
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-full h-full object-contain invert" 
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="bg-gray-400 w-full h-full rounded-full" />
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#1A0185] mb-2">
                {service.title}
              </h3>

              <p className="text-[#060C0C] text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <button 
                onClick={() => navigate('/contact')}
                className="mt-auto px-4 py-2 rounded-full text-sm font-semibold bg-[#87BBD7] hover:bg-[#1A0185] hover:text-white transition-all duration-300 group-hover:scale-105 flex items-center gap-2"
              >
                Contact Us
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutServiceSection;
