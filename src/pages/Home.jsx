import React from "react";
import SEO from "../components/SEO";
import { OrganizationSchema, LocalBusinessSchema, FAQSchema } from "../components/StructuredData";
import Navbar from "../components/common/Navbar";
import ScrollSection from "../components/common/ScrollSection";
import HeroMain from "../components/HeroMain";
import AboutServicesSection from "../components/AboutServiceSection";
import ClientHybrid from "../components/ClientHybrid";
import Review from "../components/Review";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <SEO
        title="E-Incarnation - #1 E-Waste Recycling in Mumbai | EPR & Electronic Recycling"
        description="Leading e-waste recycling company in Mumbai, Maharashtra. Certified electronic recycling, EPR compliance & IT asset disposal. Trusted for responsible e-waste management in Mumbai since 2020."
        keywords="e-waste recycling Mumbai, electronic recycling Mumbai, recycling in Mumbai, e-waste in Mumbai, e-waste disposal Mumbai, EPR services Mumbai, e-waste management Mumbai, IT asset disposal Mumbai, electronic waste Mumbai, certified recycler Mumbai"
        canonical="/"
        ogImageAlt="E-Incarnation Recycling — E-Waste Management in Mumbai"
      />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <FAQSchema />
      <div className="w-full font-sans bg-[#f3f0e6] min-h-screen">
        <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar variant="main" />
      
      <main id="main-content" className="space-y-0">
        {/* Hero Section - No top spacing needed */}
        <ScrollSection>
          <HeroMain />
        </ScrollSection>

        {/* About & Services - Seamless connection to hero */}
        <ScrollSection delay={0.05}>
          <AboutServicesSection />
        </ScrollSection>

        {/* Client Logos - Consistent spacing */}
        <ScrollSection delay={0.1}>
          <ClientHybrid />
        </ScrollSection>

        {/* Testimonials - Balanced spacing */}
        <ScrollSection delay={0.1}>
          <Review />
        </ScrollSection>

        {/* Contact Form - Increased top spacing for separation */}
        <ScrollSection delay={0.1}>
          <ContactForm />
        </ScrollSection>

        {/* Footer - No extra spacing */}
        <ScrollSection>
          <Footer />
        </ScrollSection>
      </main>
    </div>
    </>
  );
}