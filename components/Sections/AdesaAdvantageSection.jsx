"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { siteConfig } from "@/config/site";

// Lazy-load icon (lucide is big)
const ArrowRight = dynamic(
  () => import("lucide-react").then((m) => m.ArrowRight),
  { ssr: false },
);

export default function AdesaAdvantageSection() {
  // Memoize config access
  const { features, cta, backgroundImage } = useMemo(() => {
    const section = siteConfig.homepage.adesaAdvantage;

    return {
      features: section.theAdvantage,
      cta: section.adesaAdvantageCta,
      backgroundImage: section.backgroundImage,
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden z-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Aerial view of a long bridge over a lush green canyon"
          fill
          sizes="100vw"
          className="object-cover brightness-75"
          quality={85}
          priority
        />

        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20">
        {/* Heading */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
            The
            <br />
            ADESA
            <br />
            Advantage
          </h1>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10">
          {features.map((f) => (
            <FeatureCard key={f.id} data={f} />
          ))}

          {/* CTA */}
          <div className="flex items-end md:pl-6 pb-2">
            <a
              href={cta.href}
              className="inline-flex items-center text-white font-semibold hover:text-[#FFA205] transition-colors group"
            >
              {cta.label}

              <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Isolated card = fewer re-renders */
function FeatureCard({ data }) {
  return (
    <div className="border-l-4 border-white/30 pl-6 group hover:translate-y-1 transition-transform">
      <h3 className="text-white text-2xl md:text-3xl font-light mb-3">
        <span className="font-extrabold text-4xl md:text-5xl mr-2">
          {data.letter}
        </span>

        <span className="italic font-normal opacity-90">{data.title}</span>
      </h3>

      <p className="text-white/80 text-lg leading-relaxed max-w-sm">
        {data.description}
      </p>
    </div>
  );
}
