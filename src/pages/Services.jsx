import React from "react";
import SEO from "../components/SEO";
import { BreadcrumbSchema, ServiceSchema } from "../components/StructuredData";
import ScrollSection from "../components/common/ScrollSection";
import SectionHero from "../components/SectionHero";
import ServicesSection from "../components/ServicesSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
export default function Services() {
  return (
    <>
      <SEO
        title="E-Waste Recycling Services in Mumbai | Electronic Recycling | E-Incarnation"
        description="Professional electronic recycling services in Mumbai — EPR compliance, IT asset disposal, secure data destruction, battery recycling & corporate e-waste management. Certified recycler in Mumbai."
        keywords="e-waste services Mumbai, electronic recycling Mumbai, EPR compliance Mumbai, ITAD Mumbai, data destruction Mumbai, battery recycling Mumbai, corporate e-waste Mumbai, IT disposal Mumbai, e-waste pickup Mumbai"
        canonical="/services"
        ogImageAlt="E-Waste Recycling Services in Mumbai — E-Incarnation"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' }
      ]} />
      <ServiceSchema service={{
        title: 'E-Waste Recycling & Electronic Recycling Services in Mumbai',
        description: 'Professional e-waste recycling, EPR compliance, IT asset disposition, data destruction, and battery recycling services in Mumbai, Maharashtra'
      }} />
      <main className="w-full">
      <ScrollSection>
        <SectionHero />
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <ServicesSection />
      </ScrollSection>

      <ScrollSection delay={0.2}>
        <ContactForm />
      </ScrollSection>

      <ScrollSection delay={0.3}>
        <Footer />
      </ScrollSection>
    </main>
    </>
  );
}
