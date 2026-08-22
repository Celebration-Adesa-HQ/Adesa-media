"use client";

import { useMemo } from "react";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket, Heart, Star, Building } from "lucide-react";

const icons = { Rocket, Heart, Star, Building };

const WhyChooseUsSection = () => {
  const data = siteConfig.whyChooseUs;

  const featureItems = useMemo(() => {
    return data.features.map((item, idx) => {
      const Icon = icons[item.icon] || Star;
      return (
        <div key={idx} className="flex gap-5 items-start group">
          <div className="w-12 h-12 rounded-2xl bg-[#ffa205]/15 border border-[#ffa205]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Icon className="text-[#ffa205]" size={22} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1.5">
              {item.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      );
    });
  }, [data.features]);

  const statItems = useMemo(() => {
    return data.profile.stats.map((stat, idx) => {
      const Icon = icons[stat.icon] || Star;
      return (
        <div
          key={idx}
          className="p-5 bg-[#070e24] rounded-2xl border border-white/10 text-center hover:border-[#ffa205]/40 transition-colors"
        >
          <Icon className="mx-auto mb-2 text-[#ffa205]" size={20} />
          <h4 className="text-2xl sm:text-3xl font-black text-white">
            {stat.value}
          </h4>
          <p className="text-slate-300 text-xs sm:text-sm font-medium mt-1">
            {stat.label}
          </p>
        </div>
      );
    });
  }, [data.profile.stats]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-24 bg-[#070e24] text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffa205] bg-[#ffa205]/15 px-4 py-1.5 rounded-full border border-[#ffa205]/30">
              {data.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
              {data.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10">
              {data.description}
            </p>
            <div className="space-y-6">{featureItems}</div>
          </div>

          {/* Right Card */}
          <div className="bg-[#0c1638] p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/10 relative">
            <div className="absolute -top-5 -right-5 w-12 h-12 bg-[#ffa205] text-[#070e24] rounded-2xl shadow-lg flex items-center justify-center">
              <Building size={22} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-8">
              {data.profile.title}
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">{statItems}</div>

            <Link
              href={data.cta.href}
              className="block w-full bg-[#ffa205] text-[#070e24] font-bold py-4 rounded-2xl text-center shadow-lg shadow-amber-500/20 transition-all duration-300 hover:bg-[#ffb733] hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-[0.99]"
            >
              {data.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;

