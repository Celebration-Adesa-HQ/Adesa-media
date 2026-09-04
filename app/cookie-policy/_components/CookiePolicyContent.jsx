"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cookie, ArrowLeft, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

const cookieTypes = [
  {
    name: "Essential Cookies",
    color: "bg-green-500",
    canDisable: false,
    description:
      "These cookies are strictly necessary for the website to function and cannot be switched off. They enable core features such as page navigation, security, and accessibility.",
    examples: [
      "Session management cookies",
      "Security and authentication tokens",
      "Load balancing cookies",
      "User preference persistence (e.g. theme settings)",
    ],
  },
  {
    name: "Analytics Cookies",
    color: "bg-blue-500",
    canDisable: true,
    description:
      "These cookies help us understand how visitors interact with our website. The data is aggregated and anonymised, so no individual is identified. We use this information to improve site performance and content.",
    examples: [
      "Google Analytics (_ga, _gid, _gat): Tracks page views, session duration, and user journeys.",
      "Vercel Analytics: Measures Core Web Vitals and performance metrics.",
      "Speed Insights: Identifies slow-loading pages for optimisation.",
    ],
  },
  {
    name: "Preference Cookies",
    color: "bg-purple-500",
    canDisable: true,
    description:
      "These cookies remember your settings and choices to provide a more personalised experience on return visits.",
    examples: [
      "Language and region preferences",
      "Display mode (dark/light theme)",
      "Previously viewed content",
    ],
  },
  {
    name: "Marketing Cookies",
    color: "bg-orange-500",
    canDisable: true,
    description:
      "We do not currently use marketing or advertising cookies on our website. Should this change in future, we will update this policy and request your consent before placing any such cookies.",
    examples: [],
  },
];

const sections = [
  {
    id: "what-are-cookies",
    title: "1. What Are Cookies?",
    content: [
      {
        type: "text",
        value:
          "Cookies are small text files placed on your device (computer, tablet, or phone) when you visit a website. They are widely used to make websites work more efficiently, improve user experience, and provide information to website owners.",
      },
      {
        type: "text",
        value:
          "Cookies do not typically contain information that personally identifies you. However, personal data we store about you may be linked to information stored in and obtained from cookies.",
      },
    ],
  },
  {
    id: "why-we-use",
    title: "2. Why We Use Cookies",
    content: [
      {
        type: "text",
        value: "Adesa Media uses cookies to:",
      },
      {
        type: "list",
        items: [
          "Ensure the website functions correctly and securely.",
          "Understand how visitors use and navigate our website.",
          "Measure and improve website performance.",
          "Remember your preferences for a better experience.",
          "Comply with our legal and regulatory obligations.",
        ],
      },
    ],
  },
  {
    id: "types-of-cookies",
    title: "3. Types of Cookies We Use",
    content: [
      {
        type: "cookie-table",
      },
    ],
  },
  {
    id: "third-party",
    title: "4. Third-Party Cookies",
    content: [
      {
        type: "text",
        value:
          "Some cookies on our website are placed by third-party services we use. These third parties may use cookies for their own purposes, including analytics and performance monitoring. The third parties whose cookies may be present on our site include:",
      },
      {
        type: "list",
        items: [
          "Google Analytics (analytics.google.com) — for website traffic and behaviour analysis.",
          "Vercel (vercel.com) — for web performance insights and speed metrics.",
          "LinkedIn — if you click the LinkedIn Subscribe button or access embedded LinkedIn content.",
        ],
      },
      {
        type: "text",
        value:
          "We do not control the cookies set by these third parties. Please refer to their respective privacy and cookie policies for more information.",
      },
    ],
  },
  {
    id: "manage-cookies",
    title: "5. Managing Your Cookie Preferences",
    content: [
      {
        type: "text",
        value:
          "You have the right to accept or reject non-essential cookies. You can manage cookie preferences in the following ways:",
      },
      {
        type: "list",
        items: [
          "Browser Settings: Most browsers allow you to refuse or delete cookies through their settings. Please note that disabling cookies may affect the functionality of our website.",
          "Google Analytics Opt-Out: Install the Google Analytics Opt-out Browser Add-on (available at tools.google.com/dlpage/gaoptout).",
          "Do Not Track: Some browsers support a Do Not Track (DNT) feature. We currently respect DNT signals for analytics cookies.",
        ],
      },
      {
        type: "text",
        value:
          "Instructions for managing cookies in common browsers: Chrome, Firefox, Safari, Edge — refer to the 'Privacy' or 'Security' settings section of your browser.",
      },
    ],
  },
  {
    id: "consent",
    title: "6. Your Consent",
    content: [
      {
        type: "text",
        value:
          "When you first visit our website, you may be presented with a cookie notice. By continuing to use our website without adjusting your settings, you consent to our use of cookies as described in this policy. Essential cookies are always active as they are necessary for the website to function.",
      },
      {
        type: "text",
        value:
          "You can withdraw your consent at any time by adjusting your browser settings or contacting us directly.",
      },
    ],
  },
  {
    id: "updates",
    title: "7. Updates to This Cookie Policy",
    content: [
      {
        type: "text",
        value:
          "We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed about our use of cookies.",
      },
    ],
  },
  {
    id: "contact",
    title: "8. Contact Us",
    content: [
      {
        type: "text",
        value:
          "If you have any questions about our use of cookies or this Cookie Policy, please contact:",
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

export default function CookiePolicyContent() {
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
              <Cookie size={14} className="text-[#FFA205]" />
              <span className="text-[#FFA205] text-xs font-semibold uppercase tracking-widest">
                Legal
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-[var(--font-heading)]"
            >
              Cookie Policy
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-300 text-lg leading-relaxed">
              This Cookie Policy explains what cookies are, how Adesa Media uses them on our
              website, and your choices regarding cookies.
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
          <motion.div initial="hidden" animate="show" variants={stagger} className="space-y-12">
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
                    if (block.type === "cookie-table") {
                      return (
                        <div key={j} className="space-y-6">
                          {cookieTypes.map((ct) => (
                            <div
                              key={ct.name}
                              className="border border-slate-200 rounded-xl overflow-hidden"
                            >
                              <div className="flex items-center gap-3 p-4 bg-slate-50 border-b border-slate-200">
                                <span className={`w-3 h-3 rounded-full ${ct.color}`} />
                                <span className="font-semibold text-[#151E47]">{ct.name}</span>
                                <span
                                  className={`ml-auto text-xs px-2 py-1 rounded-full font-medium ${
                                    ct.canDisable
                                      ? "bg-amber-100 text-amber-700"
                                      : "bg-green-100 text-green-700"
                                  }`}
                                >
                                  {ct.canDisable ? "Optional" : "Required"}
                                </span>
                              </div>
                              <div className="p-4 space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                  {ct.description}
                                </p>
                                {ct.examples.length > 0 && (
                                  <ul className="space-y-2">
                                    {ct.examples.map((ex, i) => (
                                      <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                                        {ex}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
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
                            <a href={`mailto:${block.details.email}`} className="text-[#FFA205] hover:underline">
                              {block.details.email}
                            </a>
                          </p>
                          <p className="text-sm">
                            <span className="text-slate-500">Phone: </span>
                            <a href={`tel:${block.details.phone}`} className="text-[#FFA205] hover:underline">
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
              <Link href="/terms-and-conditions" className="text-[#FFA205] hover:underline">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
