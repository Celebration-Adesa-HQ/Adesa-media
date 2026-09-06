"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, ArrowLeft, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      {
        type: "text",
        value:
          "When you interact with Adesa Media through our website, campaigns, or services, we may collect the following categories of information:",
      },
      {
        type: "list",
        items: [
          "Personal Identification Information: Full name, email address, phone number, and job title provided via contact forms or enquiry submissions.",
          "Business Information: Company name, industry sector, and nature of your marketing or communications needs.",
          "Usage Data: IP address, browser type, pages visited, time spent on pages, referring URLs, and device information collected automatically via cookies and analytics tools.",
          "Communication Records: Messages, enquiries, and correspondence you send to us through our contact form or by email.",
          "Newsletter Subscriptions: Email address and preferences if you subscribe to our LinkedIn newsletter or email updates.",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: [
      {
        type: "text",
        value: "We use the information we collect for the following purposes:",
      },
      {
        type: "list",
        items: [
          "Service Delivery: To respond to your enquiries, process partnership requests, and deliver agreed marketing and media services.",
          "Communication: To send project updates, proposals, reports, and relevant agency insights.",
          "Marketing: To share news, insights, and service announcements that we believe are relevant to your business — only where you have consented.",
          "Analytics and Improvement: To understand how visitors use our website, identify patterns, and improve our digital presence and content.",
          "Legal and Compliance: To meet our obligations under Nigerian data protection law and applicable regulations.",
        ],
      },
    ],
  },
  {
    id: "legal-basis",
    title: "3. Legal Basis for Processing",
    content: [
      {
        type: "text",
        value:
          "Under the Nigeria Data Protection Act (NDPA) 2023, we process your data on the following lawful bases:",
      },
      {
        type: "list",
        items: [
          "Consent: Where you have given us clear consent to process your data for a specific purpose (e.g. newsletter sign-up).",
          "Contractual Necessity: Where processing is required to fulfil a contract with you or your organisation.",
          "Legitimate Interests: Where we have a legitimate business interest in processing data in a way that does not unduly override your rights.",
          "Legal Obligation: Where we are required to process data to comply with a legal requirement.",
        ],
      },
    ],
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing and Third Parties",
    content: [
      {
        type: "text",
        value:
          "We do not sell, rent, or trade your personal information. We may share data with trusted third-party service providers who assist us in operating our website and delivering our services, including:",
      },
      {
        type: "list",
        items: [
          "Analytics providers (e.g. Google Analytics) to understand website performance.",
          "Email and CRM platforms used to manage client communications and newsletters.",
          "Cloud storage and project management tools used internally.",
          "Legal and compliance advisers where required.",
        ],
      },
      {
        type: "text",
        value:
          "All third parties are contractually required to handle your data in accordance with applicable data protection laws and our instructions.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: [
      {
        type: "text",
        value:
          "We retain personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by law. Specifically:",
      },
      {
        type: "list",
        items: [
          "Enquiry and contact data: Retained for up to 24 months after our last interaction.",
          "Client project data: Retained for the duration of the engagement and up to 5 years thereafter for audit and compliance purposes.",
          "Newsletter subscriber data: Retained until you unsubscribe or request deletion.",
          "Website analytics: Aggregated and anonymised data may be retained indefinitely.",
        ],
      },
    ],
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: [
      {
        type: "text",
        value:
          "You have the following rights regarding your personal data under the NDPA 2023:",
      },
      {
        type: "list",
        items: [
          "Right of Access: Request a copy of the personal data we hold about you.",
          "Right to Rectification: Request correction of inaccurate or incomplete data.",
          "Right to Erasure: Request deletion of your data where there is no compelling reason for us to continue processing it.",
          "Right to Restriction: Request that we restrict the processing of your data in certain circumstances.",
          "Right to Object: Object to processing based on legitimate interests or for direct marketing.",
          "Right to Portability: Request your data in a structured, machine-readable format.",
        ],
      },
      {
        type: "text",
        value:
          "To exercise any of these rights, please contact us at adminfo@adesahq.com. We will respond within 30 days.",
      },
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies",
    content: [
      {
        type: "text",
        value:
          "Our website uses cookies to enhance your experience. Cookies are small files placed on your device that help us understand website usage and improve functionality. We use:",
      },
      {
        type: "list",
        items: [
          "Essential Cookies: Required for the website to function correctly.",
          "Analytics Cookies: Help us understand visitor behaviour and improve our website (e.g. Google Analytics).",
          "Preference Cookies: Remember your settings and preferences for future visits.",
        ],
      },
      {
        type: "text",
        value:
          "You can manage or disable cookies through your browser settings. For more information, see our Cookie Policy.",
      },
    ],
  },
  {
    id: "security",
    title: "8. Data Security",
    content: [
      {
        type: "text",
        value:
          "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, alteration, or disclosure. However, no method of electronic transmission is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "updates",
    title: "9. Updates to This Policy",
    content: [
      {
        type: "text",
        value:
          "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated policy on this page with a revised effective date. We encourage you to review this page periodically.",
      },
    ],
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: [
      {
        type: "text",
        value:
          "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:",
      },
      {
        type: "contact",
        details: {
          company: "Adesa Media",
          address: "2, Isheri Road (2nd Floor), by Berger Roundabout, Ojodu Berger, Lagos, 101233",
          email: "adminfo@adesahq.com",
          phone: "+2348023087303",
        },
      },
    ],
  },
];

export default function PrivacyPolicyContent() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      {/* Hero */}
      <section className="bg-[#151E47] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#151E47] via-[#1c2a60] to-[#0d1430]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFA205]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#FFA205] transition-colors mb-8 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-[#FFA205]/10 border border-[#FFA205]/20 rounded-full px-4 py-2 mb-6"
            >
              <Shield size={14} className="text-[#FFA205]" />
              <span className="text-[#FFA205] text-xs font-semibold uppercase tracking-widest">
                Legal
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-[var(--font-heading)]"
            >
              Privacy Policy
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-300 text-lg leading-relaxed">
              This Privacy Policy explains how Adesa Media collects, uses, stores, and protects
              your personal information when you use our website or engage with our services.
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-500 text-sm mt-6">
              Effective Date: 1 January 2025 &nbsp;·&nbsp; Last Updated: August 2026
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents + Body */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* TOC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-slate-200 p-8 mb-12 shadow-sm"
          >
            <h2 className="text-lg font-bold text-[#151E47] mb-4">Table of Contents</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex items-center gap-2 text-slate-600 hover:text-[#FFA205] text-sm transition-colors group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-[#FFA205] group-hover:translate-x-1 transition-transform"
                    />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sections */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="space-y-12"
          >
            {sections.map((section, i) => (
              <motion.div
                key={section.id}
                id={section.id}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm scroll-mt-24"
              >
                <h2 className="text-xl font-bold text-[#151E47] mb-5 pb-4 border-b border-slate-100">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((block, j) => {
                    if (block.type === "text") {
                      return (
                        <p key={j} className="text-slate-600 leading-relaxed">
                          {block.value}
                        </p>
                      );
                    }
                    if (block.type === "list") {
                      return (
                        <ul key={j} className="space-y-3">
                          {block.items.map((item, k) => (
                            <li key={k} className="flex items-start gap-3">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FFA205] shrink-0" />
                              <span className="text-slate-600 leading-relaxed text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (block.type === "contact") {
                      return (
                        <div
                          key={j}
                          className="bg-[#151E47]/5 rounded-xl p-5 border border-[#151E47]/10 space-y-2"
                        >
                          <p className="font-semibold text-[#151E47]">{block.details.company}</p>
                          <p className="text-slate-600 text-sm">{block.details.address}</p>
                          <p className="text-sm">
                            <span className="text-slate-500">Email: </span>
                            <a
                              href={`mailto:${block.details.email}`}
                              className="text-[#FFA205] hover:underline"
                            >
                              {block.details.email}
                            </a>
                          </p>
                          <p className="text-sm">
                            <span className="text-slate-500">Phone: </span>
                            <a
                              href={`tel:${block.details.phone}`}
                              className="text-[#FFA205] hover:underline"
                            >
                              {block.details.phone}
                            </a>
                          </p>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer nav */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-4 justify-between items-center">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Adesa Media. All rights reserved.</p>
            <div className="flex gap-4 text-sm">
              <Link href="/terms-and-conditions" className="text-[#FFA205] hover:underline">
                Terms & Conditions
              </Link>
              <Link href="/cookie-policy" className="text-[#FFA205] hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
