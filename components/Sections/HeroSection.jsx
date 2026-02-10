"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import HeroNav from "../HeroNav";

export const HeroSection = ({
  headline = "We are Link Leading Full-Service Agency",
  subheading = "Corporate Profile",
  description = "We empower brands with media, marketing, and PR systems built for growth, visibility, and long-term relevance.",
  logo,
  className = "",
  "data-id": dataId,
}) => {
  return (
    <section
      data-id={dataId}
      className={`relative w-full min-h-screen overflow-hidden flex flex-col ${className}`}
    >
      {/* Background Image */}
      <Image
        src="/speed-boat-aerial-shot-laa7nlc87rsmxvqk.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-1" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="flex items-center justify-end px-6 md:px-12 pt-8">
          {logo || <Logo color="white" />}
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
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Partner With Us
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/adventures"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <HeroNav />
      </div>
    </section>
  );
};

export default HeroSection;
