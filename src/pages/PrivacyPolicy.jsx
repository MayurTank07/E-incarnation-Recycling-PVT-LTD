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

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy - E-Incarnation Recycling"
        description="Learn how E-Incarnation Recycling Pvt. Ltd. collects, uses, and protects your personal information in accordance with Indian data protection laws."
        keywords="privacy policy, e-incarnation privacy, data protection, personal information, e-waste recycling"
        canonical="/privacy"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
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
              <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
              <p className="text-gray-400 text-sm mt-3">
                Last updated: April 9, 2026
              </p>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 text-xs text-[#4a5568]">
            <NavLink to="/" className="hover:text-[#132441] transition-colors">Home</NavLink>
            <span className="mx-2">/</span>
            <span className="text-[#132441] font-medium">Privacy Policy</span>
          </div>

          {/* Content */}
          <ScrollSection>
            <div className="max-w-7xl mx-auto px-6 md:px-20 py-8">
              <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                <p className="text-[#4a5568] text-sm leading-relaxed mb-10">
                  E-Incarnation Recycling Pvt. Ltd. ("Company", "we", "us", or "our") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or use our services. Please read this policy carefully.
                  If you disagree with its terms, please discontinue use of our website and services.
                </p>

                <Section title="1. Information We Collect">
                  <p>We may collect the following types of information:</p>
                  <p className="font-medium text-[#132441]">a) Information you provide directly:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Name, email address, phone number, and organisation name (via contact or inquiry forms)</li>
                    <li>Pickup or drop-off address for e-waste collection requests</li>
                    <li>Business registration details for EPR compliance services</li>
                    <li>Feedback, messages, or correspondence you send us</li>
                  </ul>
                  <p className="font-medium text-[#132441]">b) Information collected automatically:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IP address, browser type, and operating system</li>
                    <li>Pages visited, time spent on pages, and referring URLs</li>
                    <li>Device identifiers and cookies</li>
                  </ul>
                </Section>

                <Section title="2. How We Use Your Information">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Process and fulfil e-waste collection and recycling requests</li>
                    <li>Provide EPR compliance and data destruction services</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send service-related communications and updates</li>
                    <li>Improve our website, services, and user experience</li>
                    <li>Comply with legal and regulatory obligations under Indian law</li>
                    <li>Prevent fraud, abuse, and unauthorised access</li>
                  </ul>
                  <p>
                    We will not sell, rent, or trade your personal information to third parties for their
                    marketing purposes.
                  </p>
                </Section>

                <Section title="3. Cookies & Tracking Technologies">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on our
                    website. Cookies are small data files stored on your device that help us remember
                    your preferences and understand how you use our site.
                  </p>
                  <p>
                    You can control cookie settings through your browser preferences. Disabling cookies
                    may affect the functionality of certain parts of our website.
                  </p>
                </Section>

                <Section title="4. Sharing of Information">
                  <p>We may share your information in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <span className="font-medium text-[#132441]">Service providers:</span> Trusted third
                      parties who assist us in operating our website or conducting our business, bound by
                      confidentiality obligations.
                    </li>
                    <li>
                      <span className="font-medium text-[#132441]">Regulatory authorities:</span> When required
                      by law, court order, or government regulation, including compliance with the E-Waste
                      Management Rules, 2022.
                    </li>
                    <li>
                      <span className="font-medium text-[#132441]">Business transfers:</span> In connection with
                      a merger, acquisition, or sale of assets, your information may be transferred as part of
                      that transaction.
                    </li>
                  </ul>
                </Section>

                <Section title="5. Data Retention">
                  <p>
                    We retain your personal information only for as long as necessary to fulfil the purposes
                    outlined in this policy, comply with legal obligations, resolve disputes, and enforce
                    our agreements.
                  </p>
                  <p>
                    When your data is no longer required, we will securely delete or anonymise it in
                    accordance with our data retention schedule.
                  </p>
                </Section>

                <Section title="6. Data Security">
                  <p>
                    We implement industry-standard technical and organisational security measures to protect
                    your personal information against unauthorised access, alteration, disclosure, or
                    destruction. These include SSL/TLS encryption, access controls, and regular security reviews.
                  </p>
                  <p>
                    However, no method of transmission over the internet or electronic storage is 100% secure.
                    While we strive to protect your data, we cannot guarantee absolute security.
                  </p>
                </Section>

                <Section title="7. Your Rights">
                  <p>Under applicable Indian data protection laws, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Access the personal data we hold about you</li>
                    <li>Request correction of inaccurate or incomplete data</li>
                    <li>Request deletion of your personal data (subject to legal obligations)</li>
                    <li>Withdraw consent where processing is based on consent</li>
                    <li>Lodge a complaint with the appropriate data protection authority</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us at the details provided below.
                    We will respond within 30 days of receiving your request.
                  </p>
                </Section>

                <Section title="8. Children's Privacy">
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not knowingly
                    collect personal information from minors. If you believe we have inadvertently collected
                    information from a minor, please contact us immediately and we will take steps to delete it.
                  </p>
                </Section>

                <Section title="9. Third-Party Websites">
                  <p>
                    Our website may contain links to external websites. This Privacy Policy does not apply
                    to those sites. We encourage you to review the privacy policies of any third-party sites
                    you visit, as we have no control over their content or practices.
                  </p>
                </Section>

                <Section title="10. Changes to This Policy">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices
                    or for legal, operational, or regulatory reasons. We will post the revised policy on this
                    page with an updated "Last updated" date. Your continued use of our services after changes
                    are posted constitutes acceptance of the updated policy.
                  </p>
                </Section>

                <Section title="11. Contact Us">
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or your
                    personal data, please contact us:
                  </p>
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
