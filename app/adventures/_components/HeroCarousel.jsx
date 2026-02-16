"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
    }, 5000);

    return () => clearInterval(interval);
  }, [adventureImages.length]);

  return (
    <div className="relative min-h-dvh w-full flex flex-col overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {adventureImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Adventure background"
            fill
            priority={index === 0}
            sizes="100vw"
            className={`
              object-cover brightness-75
              transition-opacity duration-1000
              ${index === activeIndex ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Logo */}
      <header className="relative z-30 p-6 md:p-12 flex items-center justify-end">
        <Logo color="white" />
      </header>

      {/* Hero Content */}
      <section className="relative z-10 flex-1 flex items-center justify-end px-6 md:px-32">
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter text-shadow-hero leading-none">
          Our Adventures
        </h1>
      </section>

      {/* Nav */}
      <div className="relative z-20 pb-safe">
        <HeroNav className="px-4 py-2" />
      </div>
    </div>
  );
}
