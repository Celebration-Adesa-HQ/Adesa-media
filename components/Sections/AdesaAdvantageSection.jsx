"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AdesaAdvantageSection() {
  const { features, cta, backgroundImage } = useMemo(() => {
    const section = siteConfig.homepage.adesaAdvantage;

    return {
      features: section.theAdvantage,
      cta: section.adesaAdvantageCta,
      backgroundImage: section.backgroundImage,
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden py-24 z-0">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Aerial view of scenic landscape"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.55]"
          quality={85}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070e24]/90 via-[#070e24]/75 to-[#070e24]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="max-w-2xl mb-14 md:mb-18">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffa205] bg-[#ffa205]/15 px-4 py-1.5 rounded-full border border-[#ffa205]/30 backdrop-blur-md">
            Why We Win
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mt-4 leading-tight tracking-tight drop-shadow-md">
            The ADESA Advantage
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f) => (
            <FeatureCard key={f.id} data={f} />
          ))}

          {/* CTA Card */}
          <div className="flex items-center">
            <Link
              href={cta.href}
              className="group inline-flex items-center gap-3 rounded-2xl bg-[#ffa205] px-8 py-5 text-base font-bold text-[#070e24] shadow-xl shadow-amber-500/20 transition-all duration-300 hover:bg-[#ffb733] hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{cta.label}</span>
              <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ data }) {
  return (
    <div className="group rounded-3xl bg-[#0b1430]/75 border border-white/10 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-[#ffa205]/50 hover:bg-[#0f1b40]/85 hover:-translate-y-1 shadow-lg">
      <div className="flex items-baseline gap-1 mb-3">
        <span className="font-extrabold text-4xl sm:text-5xl text-[#ffa205] drop-shadow-[0_0_12px_rgba(255,162,5,0.4)]">
          {data.letter}
        </span>
        <span className="font-semibold text-xl sm:text-2xl text-white tracking-wide">
          {data.title}
        </span>
      </div>

      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
        {data.description}
      </p>
    </div>
  );
}

