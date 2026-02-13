"use client";

import Image from "next/image";
import Logo from "../Logo/Logo";
import { siteConfig } from "@/config/site";

const SectionItem = ({ data, align }) => (
  <section className="relative w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 overflow-hidden">
    {/* Background Image */}
    <Image
      src={data.backgroundImage}
      alt={`${data.headline} background`}
      fill
      priority
      className="object-cover"
    />

    {/* Overlay */}
    {/* <div
      className={`absolute inset-0 bg-linear-to-b ${data.overlayLight} dark:${data.overlayDark}`}
    /> */}
    <div className="absolute inset-0 bg-linear-to-b from-[#003270]/40 to-[#003270]/20 dark:from-[#0f172a]/70 dark:to-[#0f172a]/70" />

    {/* Content */}
    <div className={`relative max-w-xl z-10 ${align === "right" ? "lg:-mt-28" : ""}`}>
      <h1 className="text-7xl lg:text-9xl font-black text-white mb-8 tracking-tight drop-shadow-2xl">
        {data.headline.slice(0, -1)}
        <span className="text-[#00AEEF]">{data.highlightLetter}</span>
        {data.headline.slice(-1)}
      </h1>

      <p className="text-xl lg:text-2xl leading-relaxed text-white font-medium drop-shadow-lg">
        {data.description}
      </p>
    </div>
  </section>
);


export default function MissionAndVisionSection() {
  const { vision, mission } = siteConfig.missionVision;

  return (
    <section className="bg-white dark:bg-[#0f172a] min-h-screen overflow-x-hidden relative">
      <div className="flex flex-col lg:flex-row min-h-screen w-full relative">
        <SectionItem data={vision} align="left" />
        <SectionItem data={mission} align="right" />
      </div>
    </section>
  );
}
