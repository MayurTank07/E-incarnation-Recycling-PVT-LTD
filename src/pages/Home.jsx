import React from "react";
import SEO from "../components/SEO";
import { OrganizationSchema, LocalBusinessSchema, FAQSchema } from "../components/StructuredData";
import Navbar from "../components/common/Navbar";
import ScrollSection from "../components/common/ScrollSection";
import HeroMain from "../components/HeroMain";
import AboutServicesSection from "../components/AboutServiceSection";
import ClientHybrid from "../components/ClientHybrid";
import Review from "../components/Review";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <SEO
        title="E Waste Recycling in Mumbai | Best E-Waste Management Company - E-Incarnation"
        description="Best e-waste recycling company in Mumbai. E-Incarnation provides certified, eco-friendly e-waste disposal, EPR compliance, IT asset recycling & data destruction. CPCB authorized recycler in Mumbai, Maharashtra."
        keywords="e waste recycling in Mumbai, best e waste recycling in Mumbai, e waste management company Mumbai, e-waste disposal Mumbai, e-waste recycler Mumbai, electronic waste recycling Mumbai, EPR services Mumbai, IT asset disposal Mumbai, CPCB authorized recycler Mumbai, e waste company Mumbai"
        canonical="/"
        ogImageAlt="E-Incarnation — Best E-Waste Recycling Company in Mumbai"
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

        {/* Why Choose Us - SEO keyword content */}
        <ScrollSection delay={0.1}>
          <WhyChooseUs />
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