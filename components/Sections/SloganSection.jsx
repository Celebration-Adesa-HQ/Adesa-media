"use client";

import { useMemo } from "react";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function SloganSection() {
  const { lines, highlights } = useMemo(() => {
    const lines = siteConfig.homepage.slogan;
    const highlights = siteConfig.homepage.sloganHighlights;
    return { lines, highlights };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-[#ffa205] text-[#070e24] relative overflow-hidden z-0"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#070e24]/30" />
            <Quote className="text-[#070e24]" size={28} />
            <div className="h-px w-12 bg-[#070e24]/30" />
          </div>

          <p className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Great <span className="font-black text-[#070e24]">brands</span>{" "}
            <span className="underline decoration-[#070e24]/40">don&apos;t</span> just happen.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed opacity-95">
            It takes <span className="font-bold">time</span>,{" "}
            <span className="font-bold">patience</span> and great
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed opacity-95">
            <span className="font-bold">strategies</span> to build a brand that the
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed opacity-95">
            <span className="font-bold">consumer</span> falls in{" "}
            <span className="font-bold italic">love</span> with, One amazing{" "}
            <span className="font-bold underline decoration-[#070e24]/40">experience</span> at a time
          </p>
        </div>
      </div>
    </motion.section>
  );
}

