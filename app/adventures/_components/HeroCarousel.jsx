"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/components/Logo/Logo";
import HeroNav from "@/components/HeroNav";
import { siteConfig } from "@/config/site";

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { adventureImages } = siteConfig;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === adventureImages.length - 1 ? 0 : prev + 1,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [adventureImages.length]);

  return (
    <div className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#070e24]">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {adventureImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Adventure background"
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover scale-105 transition-transform duration-10000"
            />
          </div>
        ))}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e24] via-[#070e24]/70 to-[#070e24]/40" />
      </div>

      {/* Header Logo */}
      <header className="relative z-30 p-6 sm:p-10 md:p-12 flex items-center justify-between">
        <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-amber-300 border border-white/10 backdrop-blur-md">
          Case Studies & Works
        </span>
        <Logo color="white" />
      </header>

      {/* Hero Content */}
      <section className="relative z-20 flex-1 flex items-center justify-end px-6 sm:px-12 md:px-20 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-right"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffa205] bg-[#ffa205]/15 px-4 py-1.5 rounded-full border border-[#ffa205]/30">
            Portfolio
          </span>
          <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight mt-4 drop-shadow-lg">
            Our Adventures
          </h1>
        </motion.div>
      </section>

      {/* Nav Dock */}
      <div className="relative z-30 w-full">
        <HeroNav />
      </div>
    </div>
  );
}

