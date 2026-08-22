"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function FeaturedWorkSection() {
  const { projects, cta } = useMemo(() => {
    return {
      projects: siteConfig.features.featuredWork,
      cta: siteConfig.features.featuredWorkCta,
    };
  }, []);

  return (
    <section className="py-24 bg-[#070e24] text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffa205] bg-[#ffa205]/15 px-4 py-1.5 rounded-full border border-[#ffa205]/30">
              Our Adventures
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4">
              Case Studies
            </h2>
          </div>

          <Link
            href={cta.href}
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 hover:text-white transition-colors group"
          >
            <span>{cta.label}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-[#0c1638] border border-white/10 flex flex-col justify-between hover:border-[#ffa205]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              {/* Media banner */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#070e24]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index < 2}
                    className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1638] via-black/30 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-amber-300 border border-white/10">
                      {project.brand}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-semibold text-[#ffa205] uppercase tracking-wider mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffa205] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Link
                  href={`/adventures/${project.slug}`}
                  prefetch={false}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#ffa205] transition-colors"
                >
                  <span>Read More</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href={cta.href}
            prefetch={false}
            className="inline-flex items-center gap-2 rounded-full bg-[#ffa205] px-6 py-3 text-sm font-bold text-[#070e24]"
          >
            <span>{cta.label}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

