"use client";

import { memo, useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Logo from "../Logo/Logo";
import HeroNav from "../HeroNav";
import { siteConfig } from "@/config/site";

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
    }, 6000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <section
      data-id={dataId}
      className={`relative w-full min-h-screen overflow-hidden flex flex-col justify-between ${className}`}
    >
      {/* Background Carousel with Zoom/Fade Effect */}
      <div className="absolute inset-0 z-0 bg-[#070e24]">
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Hero background"
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center scale-105 transition-transform duration-10000 ease-out"
            />
          </div>
        ))}

        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-[#070e24] via-[#070e24]/60 to-[#070e24]/40 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent z-10" />
      </div>

      {/* Top Header - Logo */}
      <header className="relative z-30 flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-6 sm:pt-8">
         <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-wrap items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ffa205]/15 border border-[#ffa205]/30 backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              A Subsidiary of Adesa HQ
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-xs font-semibold text-slate-300 uppercase tracking-widest">
              Lagos, Nigeria
            </span>
          </motion.div>
        <div>
          {logo || <Logo color={logoColor} />}
        </div>
      </header>

      {/* Center Hero Content */}
      <main className="relative z-20 flex flex-1 items-center px-6 sm:px-12 lg:px-20 py-12">
        <div className="max-w-4xl">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            {headline || heroConfig.headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-slate-200/90 leading-relaxed font-normal"
          >
            {description || heroConfig.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href={ctaPrimary.href}
              className="group inline-flex items-center gap-3 rounded-full bg-[#ffa205] px-8 py-4 text-sm font-bold text-[#070e24] shadow-lg shadow-amber-500/25 transition-all duration-300 hover:bg-[#ffb733] hover:scale-[1.02] hover:shadow-amber-500/40 active:scale-[0.98]"
            >
              <span>{ctaPrimary.label}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href={ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-md px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15 hover:border-white/40 active:scale-[0.98]"
            >
              <span>{ctaSecondary.label}</span>
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Bottom Hero Navigation Dock */}
      <div className="relative z-30 w-full">
        <HeroNav />
      </div>
    </section>
  );
});

export default HeroSection;

