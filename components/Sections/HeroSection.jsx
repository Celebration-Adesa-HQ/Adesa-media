"use client";

import { memo, useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { siteConfig } from "@/config/site";

// Lazy components
const Logo = dynamic(() => import("../Logo/Logo"), { ssr: false });
const HeroNav = dynamic(() => import("../HeroNav"), { ssr: false });

const ArrowRight = dynamic(
  () => import("lucide-react").then((m) => m.ArrowRight),
  { ssr: false },
);

const HeroSection = memo(function HeroSection({
  headline,
  subheading,
  description,
  logo,
  className = "",
  "data-id": dataId,
}) {
  const heroConfig = useMemo(() => {
    return siteConfig.homepage.hero;
  }, []);

  const { backgroundImages, logoColor, ctaPrimary, ctaSecondary } = heroConfig;

  // Carousel state
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    if (!backgroundImages?.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <section
      data-id={dataId}
      className={`relative w-full min-h-dvh overflow-hidden flex flex-col ${className}`}
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Hero background"
            fill
            priority={index === 0}
            sizes="100vw"
            className={`
              object-cover object-center
              transition-opacity duration-1000
              ${index === activeIndex ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="relative z-20 flex flex-col flex-1">
        {/* Header */}
        <header className="flex items-center justify-end px-6 md:px-12 pt-6 md:pt-8">
          {logo || <Logo color={logoColor} />}
        </header>

        {/* Content */}
        <main className="flex flex-1 items-center px-6 md:px-16 lg:px-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-cyan-300">
              {subheading || heroConfig.subheading}
            </p>

            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
              {headline || heroConfig.headline}
            </h1>

            <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
              {description || heroConfig.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={ctaPrimary.href}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                {ctaPrimary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={ctaSecondary.href}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {ctaSecondary.label}
              </Link>
            </div>
          </div>
        </main>

        {/* Bottom Nav */}
        <div className="pb-safe">
          <HeroNav />
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
