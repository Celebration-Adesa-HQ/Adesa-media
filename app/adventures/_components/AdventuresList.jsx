"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import { ArrowUpRight } from "lucide-react";
import { AdventureWork } from "./AdventureWork";

export default function AdventuresList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {AdventureWork.map((a, index) => {
        const slug = a.slug || slugify(a.client, { lower: true });

        return (
          <Link key={a.id} href={`/adventures/${slug}`}>
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-[#0c1638] border border-white/10 flex flex-col justify-between hover:border-[#ffa205]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl cursor-pointer"
            >
              {/* Image Banner */}
              <div>
                <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-[#070e24]">
                  <Image
                    src={a.images[0]}
                    alt={a.client}
                    fill
                    className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1638] via-black/40 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-amber-300 border border-white/10">
                      {a.client}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <span className="text-xs font-bold text-[#ffa205] uppercase tracking-wider">
                    {a.category}
                  </span>

                  <h3 className="text-2xl font-bold text-white group-hover:text-[#ffa205] transition-colors leading-snug">
                    {a.title}
                  </h3>

                  {/* Objective */}
                  <div className="bg-[#070e24] p-4 rounded-2xl border border-white/5">
                    <p className="text-xs text-amber-300 font-bold uppercase tracking-wider mb-1">
                      Objective
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed">{a.objective}</p>
                  </div>

                  {/* Execution */}
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1.5">
                      Execution
                    </p>
                    <ul className="text-sm text-slate-300 space-y-1 list-disc list-inside">
                      {a.strategy.slice(0, 3).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {a.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA bar */}
              <div className="px-6 sm:px-8 pb-6 pt-0 flex items-center gap-1.5 text-sm font-bold text-white group-hover:text-[#ffa205] transition-colors">
                <span>View Case Study</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.article>
          </Link>
        );
      })}
    </div>
  );
}

