"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { siteConfig } from "@/config/site";

export default function OurCoreValue() {
    const { colors, left, right, svg } = siteConfig.coreValues;
  return (
    <section className="min-h-screen flex items-center justify-center p-6 lg:p-12 overflow-hidden relative">
      <div className="max-w-6xl w-full relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">
            Our Culture
          </h2>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white">
            Driving Excellence Through Values
          </h1>
        </div>

        {/* Main Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 min-h-[600px]">
          {/* SVG Lines */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full"
            fill="none"
            viewBox="0 0 1000 600"
          >
            {svg.map((d, i) => (
              <path
                key={i}
                d={d}
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-slate-300 dark:text-slate-600 opacity-60"
              />
            ))}
          </svg>

          {/* Right Column */}
          <div className="flex flex-col gap-12 lg:gap-24 items-end z-10 w-full lg:w-1/3">
            {right.map((v) => {
                const Icon = LucideIcons[v.icon];
                const color = colors[v.color];

              return (
                <div
                  key={v.label}
                  className={`flex items-center gap-6 group ${v.mr}`}
                >
                  <span
                    className="text-xl font-bold tracking-wider transition-opacity"
                    style={{ color }}
                  >
                    {v.label}
                  </span>

                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: color,
                      boxShadow: `0 10px 25px ${color}55`,
                    }}
                  >
                    <Icon size={48} color="#fff" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center */}
          <div className="relative z-20 flex justify-center">
            <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-white dark:bg-slate-800 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-slate-100 dark:border-slate-700">
              <span
                className="text-2xl lg:text-3xl font-black"
                style={{ color: colors["value-teamwork"] }}
              >
                OUR
              </span>

              <span
                className="text-2xl lg:text-3xl font-black"
                style={{ color: colors["value-innovation"] }}
              >
                CORE
              </span>

              <span
                className="text-2xl lg:text-3xl font-black"
                style={{ color: colors["value-excellence"] }}
              >
                VALUES
              </span>
            </div>
          </div>

          {/* Left Column */}
          <div className="flex flex-col gap-12 lg:gap-24 items-start z-10 w-full lg:w-1/3">
            {left.map((v) => {
              const Icon = LucideIcons[v.icon];
              const color = colors[v.color];

              return (
                <div
                  key={v.label}
                  className={`flex flex-row-reverse lg:flex-row items-center gap-6 group ${v.ml}`}
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: color,
                      boxShadow: `0 10px 25px ${color}55`,
                    }}
                  >
                    <Icon size={48} color="#fff" />
                  </div>

                  <span
                    className="text-xl font-bold tracking-wider transition-opacity"
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

      {/* Background Blurs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-24 left-1/2 w-80 h-80 bg-lime-400/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
