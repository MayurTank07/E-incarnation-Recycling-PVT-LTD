import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Leaf, Truck, Award, Clock, Recycle } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "CPCB Authorized Recycler",
    description: "We are a CPCB authorized e-waste recycler in Mumbai, ensuring every item is processed following government-mandated safety and environmental protocols."
  },
  {
    icon: Award,
    title: "ISO 9001 & 14001 Certified",
    description: "Our e-waste management facility in Mumbai holds ISO 9001 (Quality) and ISO 14001 (Environmental) certifications, guaranteeing world-class standards."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Disposal",
    description: "Zero landfill policy. We ensure 95%+ recovery rate through responsible e-waste recycling methods that protect Mumbai's environment."
  },
  {
    icon: Truck,
    title: "Free Pickup Across India",
    description: "We offer hassle-free e-waste collection services across India, ensuring safe and convenient pickup from your location with zero additional cost."
  },
  {
    icon: Recycle,
    title: "Complete EPR Solutions",
    description: "End-to-end Extended Producer Responsibility compliance services including authorization, target fulfillment, and annual reporting for manufacturers."
  },
  {
    icon: Clock,
    title: "15+ Years of Experience",
    description: "With over 15 years of industry experience, we provide reliable and certified e-waste recycling solutions following all environmental and safety standards."
  }
];

const WhyChooseUs = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 md:py-24 px-6 sm:px-10 md:px-20 lg:px-32 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h4 className="text-[#060C0C] font-semibold text-[10px] sm:text-xs tracking-[0.2em] mb-2 uppercase opacity-60">
            WHY CHOOSE US
          </h4>
          <h2 className="font-bold text-[#1A0185] text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            Best E-Waste Recycling<br className="hidden sm:block" /> Company in Mumbai
          </h2>
          <p className="text-[#060C0C]/80 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            E-Incarnation is Mumbai's most trusted e-waste management company, offering certified and eco-friendly electronic waste disposal services for homes and businesses across Maharashtra.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group bg-[#f9f8f5] rounded-2xl p-6 md:p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#9BC9DF]/30"
              >
                <div className="bg-[#1A0185] w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#9BC9DF] transition-colors duration-300">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-[#1A0185] text-base md:text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-600 text-sm md:text-base mb-5">
            Looking for reliable e-waste recycling in Mumbai? Get a free consultation today.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#1A0185] text-white px-8 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-[#3451A3] transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Contact Us Today →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
