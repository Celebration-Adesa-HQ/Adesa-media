"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import { AdventureWork } from "./AdventureWork";

export default function AdventuresList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {AdventureWork.map((a, index) => {
        const slug = a.slug || slugify(a.client, { lower: true });

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
              <div className="relative w-full h-80 overflow-hidden bg-slate-700">
                <div className="absolute inset-0 animate-pulse bg-slate-600" />

                <Image
                  src={a.images[0]} // use the first image
                  alt={a.client}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                  {a.title}
                </h3>

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
                    {a.strategy.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div>
                  <p className="text-xs text-white/70 font-semibold mb-1">
                    Outcome
                  </p>
                  <ul className="text-sm text-slate-300 space-y-1 list-disc list-inside">
                    {a.results.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
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
