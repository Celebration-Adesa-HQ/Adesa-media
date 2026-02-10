"use client";

import React from "react";
import {
  Star,
  Users,
  ShieldCheck,
  Flame,
  Handshake,
  Brain,
} from "lucide-react";

/* Manual Color Map */
const valueColors = {
  "value-passion": "#A3D133",
  "value-teamwork": "#36C59E",
  "value-innovation": "#47D1E9",
  "value-excellence": "#43A5E2",
  "value-relationship": "#4178D2",
  "value-accountability": "#4A67A2",
};

const valuesLeft = [
  {
    label: "EXCELLENCE",
    color: "value-excellence",
    icon: Star,
    ml: "",
  },
  {
    label: "RELATIONSHIP",
    color: "value-relationship",
    icon: Users,
    ml: "lg:ml-10",
  },
  {
    label: "ACCOUNTABILITY",
    color: "value-accountability",
    icon: ShieldCheck,
    ml: "",
  },
];

const valuesRight = [
  {
    label: "PASSION",
    color: "value-passion",
    icon: Flame,
    mr: "",
  },
  {
    label: "TEAMWORK",
    color: "value-teamwork",
    icon: Handshake,
    mr: "lg:mr-10",
  },
  {
    label: "INNOVATION",
    color: "value-innovation",
    icon: Brain,
    mr: "",
  },
];

export default function OurCoreValue() {
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
            {[
              "M500 300 C400 300, 350 120, 310 120",
              "M500 300 C380 300, 370 300, 310 300",
              "M500 300 C400 300, 350 480, 310 480",
              "M500 300 C600 300, 650 120, 690 120",
              "M500 300 C620 300, 630 300, 690 300",
              "M500 300 C600 300, 650 480, 690 480",
            ].map((d, i) => (
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
            {valuesRight.map((v) => {
              const Icon = v.icon;
              const color = valueColors[v.color];

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
                style={{ color: valueColors["value-teamwork"] }}
              >
                OUR
              </span>

              <span
                className="text-2xl lg:text-3xl font-black"
                style={{ color: valueColors["value-innovation"] }}
              >
                CORE
              </span>

              <span
                className="text-2xl lg:text-3xl font-black"
                style={{ color: valueColors["value-excellence"] }}
              >
                VALUES
              </span>
            </div>
          </div>

          {/* Left Column */}
          <div className="flex flex-col gap-12 lg:gap-24 items-start z-10 w-full lg:w-1/3">
            {valuesLeft.map((v) => {
              const Icon = v.icon;
              const color = valueColors[v.color];

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
