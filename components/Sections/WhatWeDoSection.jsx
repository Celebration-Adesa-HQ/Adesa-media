"use client";

import React from "react";
import { Settings, Users, MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatWeDoSection() {
  const { strategy, marketing, production } = siteConfig.whatWeDo;

  return (
    <section className="min-h-screen w-full bg-[#070e24] text-white py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#070e24] via-[#091333] to-[#070e24] z-0" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffa205] bg-[#ffa205]/10 px-4 py-1.5 rounded-full border border-[#ffa205]/20">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-4 tracking-tight">
            What We Do
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            End-to-end marketing, media planning, and high-impact creative execution built for market leadership.
          </p>
        </div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Column 1: Strategy & Planning */}
          <div
            id="strategy"
            className="scroll-mt-24 lg:col-span-4 rounded-3xl bg-[#0d173b]/70 border border-white/10 p-6 sm:p-8 backdrop-blur-xl hover:border-red-500/40 transition-all duration-300 shadow-xl order-2 lg:order-1"
          >
            <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
                  <Settings className="w-5 h-5 animate-spin-slow" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide uppercase">
                  Strategy & Planning
                </h3>
              </div>
            </div>

            <ol className="space-y-2.5 text-sm sm:text-base text-slate-300">
              {strategy.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="text-red-400 font-bold text-xs mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="leading-snug text-slate-200 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Column 2: Center Emblem / Graphic */}
          <div className="lg:col-span-4 flex justify-center items-center order-1 lg:order-2 my-4 lg:my-0">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">
              <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_35px_rgba(255,162,5,0.25)]">
                <defs>
                  <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                  <linearGradient id="grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#0f766e" />
                  </linearGradient>
                  <linearGradient id="grad-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffa205" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>

                {/* Arcs */}
                <path
                  d="M 200, 40 A 160,160 0 0,0 200,360 L 200,320 A 120,120 0 0,1 200,80 Z"
                  fill="url(#grad-red)"
                  className="opacity-95"
                />
                <path
                  d="M 210,90 A 110,110 0 0,1 310,190 L 270,190 A 70,70 0 0,0 210,130 Z"
                  fill="url(#grad-teal)"
                  className="opacity-95"
                />
                <path
                  d="M 310,210 A 110,110 0 0,1 210,310 L 210,270 A 70,70 0 0,0 270,210 Z"
                  fill="url(#grad-yellow)"
                  className="opacity-95"
                />

                {/* Central Crest */}
                <circle cx="200" cy="200" r="66" fill="#070e24" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="3" />
                <circle cx="200" cy="200" r="56" fill="#0c1638" />

                <text
                  x="200"
                  y="196"
                  textAnchor="middle"
                  className="font-extrabold text-2xl fill-white tracking-widest"
                >
                  ADESA
                </text>
                <text
                  x="200"
                  y="218"
                  textAnchor="middle"
                  className="font-bold text-[10px] fill-[#ffa205] tracking-[0.35em]"
                >
                  MEDIA
                </text>
              </svg>
            </div>
          </div>

          {/* Column 3: Marketing & Production */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-3">
            {/* Marketing Communications */}
            <div
              id="marketing"
              className="scroll-mt-24 relative rounded-3xl bg-[#0d173b]/70 border border-white/10 p-6 sm:p-8 backdrop-blur-xl hover:border-teal-500/40 transition-all duration-300 shadow-xl"
            >
              <div id="media" className="absolute -top-24 left-0" />
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide uppercase leading-tight">
                  Marketing & PR
                </h3>
              </div>

              <ol className="space-y-2 text-sm sm:text-base text-slate-300">
                {marketing.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <span className="text-teal-400 font-bold text-xs mt-1 w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="leading-snug text-slate-200 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Production */}
            <div
              id="production"
              className="scroll-mt-24 rounded-3xl bg-[#0d173b]/70 border border-white/10 p-6 sm:p-8 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#ffa205]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide uppercase">
                    Production
                  </h3>
                </div>
              </div>

              <ol className="space-y-2 text-sm sm:text-base text-slate-300">
                {production.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <span className="text-[#ffa205] font-bold text-xs mt-1 w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="leading-snug text-slate-200 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;

