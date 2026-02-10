"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* Slug Helper */
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

/* Data */
export const adventures = [
  {
    id: "leadway",
    client: "Leadway Assurance / Leadway Health",
    slug: "leadway-assurance-leadway-health",

    category: "Insurance & Health",
    brand: "Leadway",

    image: "https://source.unsplash.com/720x480/?health,insurance",

    description:
      "Campaigns driving adoption of health plans across families, seniors, and corporate groups.",

    tags: ["Health", "Insurance", "Wellness", "Growth"],

    objective:
      "Drive adoption for health plans across families, seniors, groups, and wellness.",

    execution: [
      "Campaign messaging: “Explore the power of more”",
      "Family health + senior citizen focus",
      "Group health and employee wellness communications",
      "Tagline: #TheSmarterChoice",
    ],

    outcome:
      "Sustained awareness and clarity of plan benefits across priority audiences.",
  },

  {
    id: "firstbank",
    client: "FirstBank",
    slug: "firstbank",

    category: "Banking",
    brand: "FirstBank",

    image: "https://source.unsplash.com/720x480/?bank,finance",

    description:
      "Product and experience campaigns across seasonal and community moments.",

    tags: ["Finance", "Retail", "Digital"],

    objective:
      "Support product and experience campaigns across seasonal and community moments.",

    execution: [
      "FirstLounge summer experience campaign",
      "FirstMonie agent income campaign",
      "Father’s Day campaign: “Dad, our first hero”",
      "Tagline: You First",
    ],

    outcome:
      "Improved campaign coherence across products with strong call-to-action clarity.",
  },

  {
    id: "fcmb-flexx",
    client: "FCMB — Flexx",
    slug: "fcmb-flexx",

    category: "Youth Banking",
    brand: "Flexx",

    image: "https://source.unsplash.com/720x480/?youth,finance",

    description:
      "Digital-first engagement for youth banking and lifestyle programs.",

    tags: ["Youth", "Digital", "Community"],

    objective: "Launch a youth banking product with digital-first engagement.",

    execution: [
      "Built FlexxZone: lifestyle hub blending fun, future, and banking",
      "Content themes: career, finance, lifestyle",
      "Scaled program: #FCMBFlexxtern internship (since 2016)",
    ],

    outcome:
      "Over 70,000 unique visitors; effective lead generation and research platform.",
  },

  {
    id: "toyota-nigeria",
    client: "Toyota Nigeria",
    slug: "toyota-nigeria",

    category: "Automotive",
    brand: "Toyota",

    image: "https://source.unsplash.com/720x480/?car,toyota",

    description:
      "Product-led campaigns strengthening showroom and purchase intent.",

    tags: ["Automotive", "Mobility", "Sales"],

    objective: "Strengthen product preference and showroom intent.",

    execution: [
      "Campaign: “Go New. Go Ahead.”",
      "Free 1-year/20,000km maintenance on Starlet & Hilux",
      "Armoured Toyota Hilux 4x4: “The Ultimate Bodyguard”",
    ],

    outcome: "Clear value proposition supported by product-led messaging.",
  },
];

/* UI */
export default function AdventuresList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {adventures.map((a, index) => {
        const slug = slugify(a.client);

        return (
          <Link key={a.id} href={`/adventures/${slug}`}>
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.15 }}
              className="group rounded-2xl overflow-hidden bg-slate-800 hover:scale-[1.02] transition cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-700">
                <div className="absolute inset-0 animate-pulse bg-slate-600" />

                <Image
                  src={a.image}
                  alt={a.client}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl font-black text-white/80 text-center px-4">
                    {a.client}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Category */}
                <p className="text-xs font-semibold text-[#FFA205] uppercase tracking-wider">
                  {a.category}
                </p>

                {/* Client */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#FFA205] transition">
                  {a.client}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm">{a.description}</p>

                {/* Objective */}
                <div>
                  <p className="text-xs text-white/70 font-semibold mb-1">
                    Objective
                  </p>

                  <p className="text-sm text-slate-300">{a.objective}</p>
                </div>

                {/* Execution */}
                <div>
                  <p className="text-xs text-white/70 font-semibold mb-1">
                    Execution
                  </p>

                  <ul className="text-sm text-slate-400 space-y-1 list-disc list-inside">
                    {a.execution.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div>
                  <p className="text-xs text-white/70 font-semibold mb-1">
                    Outcome
                  </p>

                  <p className="text-sm text-slate-300">{a.outcome}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {a.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <span className="block pt-2 text-sm font-semibold text-white group-hover:text-[#FFA205] transition">
                  View Case Study →
                </span>
              </div>
            </motion.article>
          </Link>
        );
      })}
    </div>
  );
}
