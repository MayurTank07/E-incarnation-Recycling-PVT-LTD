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
        title="E-Waste Recycling Services in Mumbai | Certified E-Waste Disposal - E-Incarnation"
        description="Professional e-waste recycling services in Mumbai. EPR compliance, IT asset disposal, secure data destruction, battery recycling & corporate e-waste management. Best e-waste management company Mumbai."
        keywords="e waste recycling in Mumbai, e-waste services Mumbai, best e waste recycling in Mumbai, e waste management company Mumbai, EPR compliance Mumbai, IT asset disposal Mumbai, data destruction Mumbai, e-waste pickup Mumbai, certified e-waste disposal Mumbai"
        canonical="/services"
        ogImageAlt="Best E-Waste Recycling Services in Mumbai — E-Incarnation"
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
