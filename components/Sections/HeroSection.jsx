"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import HeroNav from "../HeroNav";
import { siteConfig } from "@/config/site";

export const HeroSection = ({
  headline = siteConfig.homepage.hero.headline,
  subheading = siteConfig.homepage.hero.subheading,
  description = siteConfig.homepage.hero.description,
  logo,
  className = "",
  "data-id": dataId,
}) => {
  const { backgroundImage, logoColor, ctaPrimary, ctaSecondary } =
    siteConfig.homepage.hero;

  return (
    <section
      data-id={dataId}
      className={`relative w-full min-h-dvh overflow-hidden flex flex-col ${className}`}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Layout */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Top Bar */}
        <header className="flex items-center justify-end px-6 md:px-12 pt-6 md:pt-8">
          {logo || <Logo color={logoColor} />}
        </header>

        {/* Hero Content */}
        <main className="flex flex-1 items-center px-6 md:px-16 lg:px-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-cyan-300">
              {subheading}
            </p>

            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
              {headline}
            </h1>

            <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={ctaPrimary.href}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                {ctaPrimary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {ctaSecondary.label}
              </Link>
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <div className="pb-safe">
          <HeroNav />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
