import React from "react";
import SEO from "../components/SEO";
import { BreadcrumbSchema } from "../components/StructuredData";
import ScrollSection from "../components/common/ScrollSection";
import Hero from "../components/Hero";
import AboutIntro from "../components/AboutIntro";
import History from "../components/History";
import CoreTeam from "../components/CoreTeam";
import Certificates from "../components/Certificates";
import ContactForm  from "../components/ContactForm";
import Footer from "../components/Footer";
export default function About() {
  return (
    <>
      <SEO
        title="About Us - E-Waste Recycling Company in Mumbai | E-Incarnation"
        description="E-Incarnation is Mumbai's leading e-waste recycling company. Founded in 2020, we offer certified electronic recycling, EPR compliance & IT disposal across Mumbai and India. Meet our expert team."
        keywords="about e-incarnation, e-waste company Mumbai, recycling company Mumbai, Mumbai recycler, e-waste management history, environmental certifications, sustainable recycling Mumbai"
        canonical="/about"
        ogImageAlt="About E-Incarnation — E-Waste Recycling Company in Mumbai"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' }
      ]} />
      <div className="w-full font-sans bg-[#f3f0e6] min-h-screen">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <ScrollSection>
        <Hero />
      </ScrollSection>
      
      <main id="main-content">

      <ScrollSection delay={0.025}>
        <AboutIntro />
      </ScrollSection>

      <ScrollSection delay={0.05}>
        <History />
      </ScrollSection>

      <ScrollSection delay={0.075}>
        <CoreTeam />
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <Certificates />
      </ScrollSection>

      <ScrollSection delay={0.125}>
        <ContactForm />
      </ScrollSection>

      <ScrollSection delay={0.150}>
        <Footer />
      </ScrollSection>
      </main>
    </div>
    </>
  );
}
