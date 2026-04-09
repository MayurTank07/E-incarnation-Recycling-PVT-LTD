import React from "react";
import SEO from "../components/SEO";
import { BreadcrumbSchema } from "../components/StructuredData";
import Navbar from "../components/common/Navbar";
import ScrollSection from "../components/common/ScrollSection";
import EventsSection from "../components/EventsSection";
import EventsCarousel from "../components/EventsCarousel";  
import Footer from "../components/Footer";

export default function Events() {
  return (
    <>
      <SEO
        title="E-Waste Recycling Events in Mumbai | Community Drives | E-Incarnation"
        description="Join E-Incarnation's e-waste collection drives and recycling workshops in Mumbai. Community awareness programs for responsible electronic disposal across Mumbai, Maharashtra."
        keywords="e-waste events Mumbai, recycling drives Mumbai, e-waste collection Mumbai, awareness programs Mumbai, community recycling Mumbai, electronic waste workshop Mumbai"
        canonical="/events"
        ogImageAlt="E-Waste Recycling Events in Mumbai — E-Incarnation"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' }
      ]} />
      <div className="w-full font-sans bg-[#f3f0e6] min-h-screen overflow-hidden">
      {/* Navbar stays static */}
      <Navbar variant="main" />
      
      <ScrollSection delay={0.2}>
        <EventsSection />
      </ScrollSection>
      
      <ScrollSection delay={0.3}>
        <EventsCarousel />
      </ScrollSection>  
      
      <ScrollSection delay={0.4}>
        <Footer />
      </ScrollSection>
    </div>
    </>
  );
}
