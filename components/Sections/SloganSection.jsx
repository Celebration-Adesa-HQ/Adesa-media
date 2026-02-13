"use client";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function SloganSection() {
  const lines = siteConfig.homepage.slogan;
  const highlights = siteConfig.homepage.sloganHighlights;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-28 bg-brand-orange relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFA205]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#151E47]/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#151E47]/40" />
            <Quote className="text-[#151E47]" size={28} />
            <div className="h-px w-12 bg-[#151E47]/40" />
          </div>

          {/* Line 1 */}
          <p className="text-[#151E47] text-3xl md:text-5xl font-extrabold leading-tight">
            Great <span className={highlights.brands}>brands</span>{" "}
            <span className={highlights.dont}>don&apos;t</span> just happen.
          </p>

          {/* Line 2 */}
          <p className="text-[#151E47]/80 text-lg md:text-2xl leading-relaxed">
            It takes <span className={highlights.time}>time</span>,{" "}
            <span className={highlights.patience}>patience</span> and great
          </p>

          {/* Line 3 */}
          <p className="text-[#151E47]/80 text-lg md:text-2xl leading-relaxed">
            <span className={highlights.strategies}>strategies</span> to build a
            brand that the
          </p>

          {/* Line 4 */}
          <p className="text-[#151E47]/80 text-lg md:text-2xl leading-relaxed">
            <span className={highlights.consumer}>consumer</span> falls in{" "}
            <span className={highlights.love}>love</span> with, One amazing{" "}
            <span className={highlights.experience}>experience</span> at a time
          </p>
        </div>
      </div>
    </motion.section>
  );
}
