"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

// Lazy-load framer-motion
const MotionArticle = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.article),
  { ssr: false },
);

export default function FeaturedWorkSection() {
  // Memoize config reads
  const { projects, cta } = useMemo(() => {
    return {
      projects: siteConfig.features.featuredWork,
      cta: siteConfig.features.featuredWorkCta,
    };
  }, []);

  return (
    <section className="py-24 bg-[#151E47] text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14">
          <div>
            <p className="text-[#FFA205] text-sm tracking-widest uppercase font-semibold">
              Our Adventures
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Case Studies
            </h2>
          </div>

          <Link
            href={cta.href}
            className="hidden md:block text-sm font-semibold text-slate-300 border-b border-slate-600 hover:text-white hover:border-white transition"
          >
            {cta.label}
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <MotionArticle
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group rounded-2xl overflow-hidden bg-slate-800 hover:scale-[1.02] transition"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 2}
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-3xl font-black tracking-widest text-white/70">
                    {project.brand}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold text-[#FFA205] uppercase tracking-wider mb-2">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold mb-3 group-hover:text-[#FFA205] transition">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/adventures/${project.slug}`}
                  prefetch={false}
                  className="text-sm font-semibold text-white hover:text-[#FFA205] transition"
                >
                  Read More →
                </Link>
              </div>
            </MotionArticle>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href={cta.href}
            prefetch={false}
            className="text-sm font-semibold text-slate-300 border-b border-slate-600 hover:text-white hover:border-white transition"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
