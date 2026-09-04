"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, ArrowLeft, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      {
        type: "text",
        value:
          "By accessing or using the Adesa Media website (adesamedia.com) or engaging with our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.",
      },
      {
        type: "text",
        value:
          "These Terms and Conditions apply to all visitors, clients, partners, and any other persons who access or use our website or services.",
      },
    ],
  },
  {
    id: "services",
    title: "2. Our Services",
    content: [
      {
        type: "text",
        value:
          "Adesa Media provides full-service marketing and communications solutions including, but not limited to:",
      },
      {
        type: "list",
        items: [
          "Brand strategy development and marketing communications strategy.",
          "Media planning, buying, and verification.",
          "Creative development and production (TV commercials, documentaries, radio, print).",
          "Public relations and media relations services.",
          "Social media management and digital marketing.",
          "Experiential marketing and events management.",
          "Market research and competitive analysis.",
        ],
      },
      {
        type: "text",
        value:
          "Specific services, deliverables, timelines, and fees will be governed by a separate Client Agreement or Service Level Agreement (SLA) entered into between Adesa Media and the client.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "3. Intellectual Property",
    content: [
      {
        type: "text",
        value:
          "All content on this website, including text, graphics, logos, images, videos, and software, is the exclusive property of Adesa Media or its licensors and is protected under Nigerian intellectual property law and applicable international conventions.",
      },
      {
        type: "list",
        items: [
          "You may not copy, reproduce, distribute, publish, or create derivative works from any content on this website without prior written permission from Adesa Media.",
          "All creative work, strategies, concepts, and campaign materials produced by Adesa Media for clients remain the intellectual property of Adesa Media until full payment has been received and a written assignment of rights is executed.",
          "Client-provided materials (logos, brand assets, data) remain the intellectual property of the client. By sharing materials with Adesa Media, you grant us a limited licence to use them solely for the purpose of delivering agreed services.",
        ],
      },
    ],
  },
  {
    id: "client-obligations",
    title: "4. Client Obligations",
    content: [
      {
        type: "text",
        value: "When engaging Adesa Media for services, clients agree to:",
      },
      {
        type: "list",
        items: [
          "Provide accurate, complete, and timely information, briefs, and approvals necessary for service delivery.",
          "Ensure that all materials, content, and assets provided to Adesa Media do not infringe the intellectual property rights of any third party.",
          "Make payments in accordance with agreed timelines and terms.",
          "Appoint an authorised point of contact for project communications and approvals.",
          "Not engage Adesa Media's employees or contractors directly outside the scope of the agreed engagement without written consent.",
        ],
      },
    ],
  },
  {
    id: "payment",
    title: "5. Payment Terms",
    content: [
      {
        type: "text",
        value:
          "Payment terms for services will be specified in the Client Agreement. General provisions include:",
      },
      {
        type: "list",
        items: [
          "A retainer or initial deposit may be required before work commences.",
          "Invoices are typically due within 14 days of issuance unless otherwise agreed in writing.",
          "Late payments may attract interest charges at a rate of 5% per month on the outstanding balance.",
          "Adesa Media reserves the right to pause or suspend service delivery where payment obligations are not met.",
          "All fees are quoted and payable in Nigerian Naira (NGN) unless otherwise specified.",
        ],
      },
    ],
  },
  {
    id: "confidentiality",
    title: "6. Confidentiality",
    content: [
      {
        type: "text",
        value:
          "Both parties agree to maintain the confidentiality of proprietary information disclosed during the engagement. Adesa Media will not disclose client information, campaign strategies, business data, or commercially sensitive materials to third parties without prior written consent, except as required by law.",
      },
      {
        type: "text",
        value:
          "Adesa Media may reference client names and general campaign outcomes in our portfolio and marketing materials unless the client provides written instructions to the contrary.",
      },
    ],
  },
  {
    id: "limitation-liability",
    title: "7. Limitation of Liability",
    content: [
      {
        type: "text",
        value:
          "To the maximum extent permitted by applicable law, Adesa Media shall not be liable for:",
      },
      {
        type: "list",
        items: [
          "Indirect, incidental, special, or consequential damages arising from the use of our website or services.",
          "Loss of profit, revenue, data, business opportunities, or goodwill.",
          "Damages resulting from third-party actions, including media platforms, vendors, or technology providers.",
          "Errors or omissions in campaign results attributable to inaccurate client-provided information.",
        ],
      },
      {
        type: "text",
        value:
          "Our total aggregate liability under any circumstances shall not exceed the total fees paid by the client to Adesa Media in the three (3) months preceding the claim.",
      },
    ],
  },
  {
    id: "website-use",
    title: "8. Website Use",
    content: [
      {
        type: "text",
        value: "You agree not to use this website to:",
      },
      {
        type: "list",
        items: [
          "Transmit any unlawful, harmful, defamatory, or fraudulent content.",
          "Attempt to gain unauthorised access to any part of our website or systems.",
          "Use automated tools, bots, or scrapers to extract content or data without permission.",
          "Engage in any activity that disrupts or interferes with the website's normal operation.",
        ],
      },
    ],
  },
  {
    id: "termination",
    title: "9. Termination",
    content: [
      {
        type: "text",
        value:
          "Either party may terminate a service engagement by providing written notice as specified in the Client Agreement. Adesa Media reserves the right to immediately suspend or terminate access to services if a client is in material breach of these Terms and Conditions or fails to make required payments.",
      },
      {
        type: "text",
        value:
          "On termination, all outstanding fees for work completed to date become immediately payable. Any deliverables already created will be provided upon settlement of outstanding balances.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "10. Governing Law and Dispute Resolution",
    content: [
      {
        type: "text",
        value:
          "These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria. Any dispute arising from or in connection with these terms shall first be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be referred to arbitration in Lagos, Nigeria, in accordance with the Arbitration and Conciliation Act.",
      },
    ],
  },
  {
    id: "changes",
    title: "11. Changes to These Terms",
    content: [
      {
        type: "text",
        value:
          "Adesa Media reserves the right to modify these Terms and Conditions at any time. Changes will be published on this page with an updated effective date. Continued use of our website or services following any changes constitutes your acceptance of the revised terms.",
      },
    ],
  },
  {
    id: "contact",
    title: "12. Contact Information",
    content: [
      {
        type: "text",
        value: "For any questions about these Terms and Conditions, please contact:",
      },
      {
        type: "contact",
        details: {
          company: "Adesa Media",
          address: "2, Isheri Road (2nd Floor), by Berger Roundabout, Ojodu Berger, Lagos, 101233",
          email: "info.adesamedia@adesahq.com",
          phone: "+2348023087303",
        },
      },
    ],
  },
];

export default function TermsContent() {
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
              <FileText size={14} className="text-[#FFA205]" />
              <span className="text-[#FFA205] text-xs font-semibold uppercase tracking-widest">
                Legal
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-[var(--font-heading)]"
            >
              Terms & Conditions
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-300 text-lg leading-relaxed">
              These Terms and Conditions govern your use of the Adesa Media website and engagement
              with our marketing and communications services. Please read them carefully.
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-500 text-sm mt-6">
              Effective Date: 1 January 2025 &nbsp;·&nbsp; Last Updated: August 2026
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
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
            {sections.map((section) => (
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
              <Link href="/privacy-policy" className="text-[#FFA205] hover:underline">
                Privacy Policy
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
