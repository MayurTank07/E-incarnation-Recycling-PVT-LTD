import React from "react";
import { NavLink } from "react-router-dom";
import SEO from "../components/SEO";
import { BreadcrumbSchema } from "../components/StructuredData";
import ScrollSection from "../components/common/ScrollSection";
import Navbar from "../components/common/Navbar";
import Footer from "../components/Footer";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-[#132441] mb-4">{title}</h2>
    <div className="text-[#4a5568] text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service - E-Incarnation Recycling"
        description="Read the Terms of Service for E-Incarnation Recycling Pvt. Ltd. Understand your rights and responsibilities when using our e-waste management services."
        keywords="terms of service, e-incarnation terms, e-waste recycling terms, legal agreement"
        canonical="/terms"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ]}
      />
      <div className="w-full font-sans bg-[#f3f0e6] min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="pt-24 pb-16">
          {/* Page Header */}
          <div className="bg-[#132441] text-white py-12 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
              <p className="text-xs uppercase tracking-widest text-[#87BBD7] mb-2">Legal</p>
              <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
              <p className="text-gray-400 text-sm mt-3">
                Last updated: April 9, 2026
              </p>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 text-xs text-[#4a5568]">
            <NavLink to="/" className="hover:text-[#132441] transition-colors">Home</NavLink>
            <span className="mx-2">/</span>
            <span className="text-[#132441] font-medium">Terms of Service</span>
          </div>

          {/* Content */}
          <ScrollSection>
            <div className="max-w-7xl mx-auto px-6 md:px-20 py-8">
              <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                <p className="text-[#4a5568] text-sm leading-relaxed mb-10">
                  Welcome to E-Incarnation Recycling Pvt. Ltd. ("Company", "we", "us", or "our"). By accessing
                  or using our website, services, or facilities, you agree to be bound by these Terms of Service
                  ("Terms"). Please read them carefully before proceeding. If you do not agree to these Terms,
                  you must not use our services.
                </p>

                <Section title="1. Acceptance of Terms">
                  <p>
                    By accessing our website at e-incarnation.com or engaging with any of our services — including
                    e-waste collection, recycling, Extended Producer Responsibility (EPR) compliance, and data
                    destruction — you confirm that you are at least 18 years of age, have the legal capacity to
                    enter into a binding agreement, and agree to be bound by these Terms and our Privacy Policy.
                  </p>
                  <p>
                    We reserve the right to update these Terms at any time. Continued use of our services after
                    changes are posted constitutes acceptance of the revised Terms.
                  </p>
                </Section>

                <Section title="2. Services Offered">
                  <p>E-Incarnation Recycling Pvt. Ltd. provides the following services:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Collection and responsible recycling of electronic waste (e-waste)</li>
                    <li>Extended Producer Responsibility (EPR) compliance consulting and fulfilment</li>
                    <li>Certified data destruction and secure disposal of IT assets</li>
                    <li>Corporate e-waste management programs</li>
                    <li>Awareness events and community drives for e-waste collection</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any service at any time without
                    prior notice.
                  </p>
                </Section>

                <Section title="3. User Responsibilities">
                  <p>When using our services or website, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide accurate, current, and complete information when submitting forms or registering</li>
                    <li>Not submit hazardous materials that are not categorised as e-waste without prior written consent</li>
                    <li>Not use the website for any unlawful, fraudulent, or harmful purpose</li>
                    <li>Not attempt to gain unauthorised access to any systems, data, or networks</li>
                    <li>Comply with all applicable local, state, and national laws and regulations</li>
                  </ul>
                </Section>

                <Section title="4. Intellectual Property">
                  <p>
                    All content on this website — including but not limited to text, graphics, logos, images,
                    and software — is the exclusive property of E-Incarnation Recycling Pvt. Ltd. and is
                    protected by applicable intellectual property laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, or create derivative works of any content
                    without our prior written permission.
                  </p>
                </Section>

                <Section title="5. E-Waste Drop-off & Collection">
                  <p>
                    Items accepted for recycling must qualify as electronic waste under applicable Indian
                    regulations (E-Waste Management Rules, 2022). We reserve the right to refuse collection
                    or drop-off of items that do not meet our acceptance criteria or pose a safety risk.
                  </p>
                  <p>
                    Once items are handed over to us for recycling, ownership is transferred to
                    E-Incarnation Recycling Pvt. Ltd. We will process them in accordance with applicable
                    environmental and safety standards.
                  </p>
                </Section>

                <Section title="6. Limitation of Liability">
                  <p>
                    To the fullest extent permitted by law, E-Incarnation Recycling Pvt. Ltd. shall not
                    be liable for any indirect, incidental, special, consequential, or punitive damages
                    arising out of or related to your use of our services or website.
                  </p>
                  <p>
                    Our total liability to you for any claims arising under these Terms shall not exceed
                    the amount you paid us, if any, for the specific service giving rise to the claim in
                    the six months preceding the claim.
                  </p>
                </Section>

                <Section title="7. Disclaimer of Warranties">
                  <p>
                    Our website and services are provided on an "as is" and "as available" basis without
                    warranties of any kind, whether express or implied, including warranties of
                    merchantability, fitness for a particular purpose, or non-infringement.
                  </p>
                  <p>
                    We do not warrant that the website will be uninterrupted, error-free, or free of viruses
                    or other harmful components.
                  </p>
                </Section>

                <Section title="8. Third-Party Links">
                  <p>
                    Our website may contain links to third-party websites. These links are provided for
                    convenience only. We have no control over the content of those sites and accept no
                    responsibility for them or for any loss or damage that may arise from your use of them.
                  </p>
                </Section>

                <Section title="9. Governing Law & Jurisdiction">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of India.
                    Any disputes arising under these Terms shall be subject to the exclusive jurisdiction
                    of the courts located in Mumbai, Maharashtra, India.
                  </p>
                </Section>

                <Section title="10. Contact Us">
                  <p>If you have any questions about these Terms, please contact us:</p>
                  <div className="mt-3 space-y-1">
                    <p><span className="font-medium text-[#132441]">Company:</span> E-Incarnation Recycling Pvt. Ltd.</p>
                    <p><span className="font-medium text-[#132441]">Address:</span> Unit No. 103, 1st Floor, Bhaveshwar Arcade, A Wing, LBS Marg, Ghatkopar West, Mumbai 400086</p>
                    <p><span className="font-medium text-[#132441]">Phone:</span> 022 47494262 / 86556 06062</p>
                    <p><span className="font-medium text-[#132441]">Email:</span> info@e-incarnation.com</p>
                  </div>
                </Section>
              </div>
            </div>
          </ScrollSection>
        </main>

        <ScrollSection>
          <Footer />
        </ScrollSection>
      </div>
    </>
  );
}
