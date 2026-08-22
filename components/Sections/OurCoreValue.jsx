"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { siteConfig } from "@/config/site";

export default function OurCoreValue() {
  const { colors, left, right, svg } = siteConfig.coreValues;

  return (
    <section className="min-h-screen flex items-center justify-center p-6 lg:p-16 bg-[#070e24] text-white overflow-hidden relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#ffa205] bg-[#ffa205]/10 px-4 py-1.5 rounded-full border border-[#ffa205]/20">
            Our Culture
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Driving Excellence Through Values
          </h2>
        </div>

        {/* Main Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 min-h-[500px]">
          {/* SVG Connecting Lines for Desktop */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
            fill="none"
            viewBox="0 0 1000 600"
          >
            {svg.map((d, i) => (
              <path
                key={i}
                d={d}
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-pulse"
              />
            ))}
          </svg>

          {/* Left Column (Left array in data) */}
          <div className="flex flex-col gap-10 lg:gap-16 items-start z-10 w-full lg:w-1/3 order-2 lg:order-1">
            {left.map((v) => {
              const Icon = LucideIcons[v.icon] || LucideIcons.Star;
              const color = colors[v.color] || "#ffa205";

              return (
                <div
                  key={v.label}
                  className={`flex items-center gap-5 group w-full lg:w-auto ${v.ml}`}
                >
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 shrink-0"
                    style={{
                      backgroundColor: `${color}25`,
                      border: `1.5px solid ${color}80`,
                      boxShadow: `0 8px 24px ${color}30`,
                    }}
                  >
                    <Icon size={32} style={{ color }} />
                  </div>

                  <span
                    className="text-lg sm:text-xl font-bold tracking-wider"
                    style={{ color }}
                  >
                    {v.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Center Hub */}
          <div className="relative z-20 flex justify-center order-1 lg:order-2 my-4 lg:my-0">
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-[#0d173b] flex flex-col items-center justify-center text-center shadow-2xl border-4 border-white/10 relative p-4 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ffa205]/20 via-transparent to-cyan-500/20 blur-sm pointer-events-none" />

              <span
                className="text-2xl sm:text-3xl font-black tracking-wider"
                style={{ color: colors["value-teamwork"] || "#36C59E" }}
              >
                OUR
              </span>

              <span
                className="text-2xl sm:text-3xl font-black tracking-wider my-1"
                style={{ color: colors["value-innovation"] || "#47D1E9" }}
              >
                CORE
              </span>

              <span
                className="text-2xl sm:text-3xl font-black tracking-wider"
                style={{ color: colors["value-excellence"] || "#43A5E2" }}
              >
                VALUES
              </span>
            </div>
          </div>

          {/* Right Column (Right array in data) */}
          <div className="flex flex-col gap-10 lg:gap-16 items-start lg:items-end z-10 w-full lg:w-1/3 order-3">
            {right.map((v) => {
              const Icon = LucideIcons[v.icon] || LucideIcons.Flame;
              const color = colors[v.color] || "#ffa205";

              return (
                <div
                  key={v.label}
                  className={`flex flex-row lg:flex-row-reverse items-center gap-5 group w-full lg:w-auto ${v.mr}`}
                >
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 shrink-0"
                    style={{
                      backgroundColor: `${color}25`,
                      border: `1.5px solid ${color}80`,
                      boxShadow: `0 8px 24px ${color}30`,
                    }}
                  >
                    <Icon size={32} style={{ color }} />
                  </div>

                  <span
                    className="text-lg sm:text-xl font-bold tracking-wider"
                    style={{ color }}
                  >
                    {v.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

