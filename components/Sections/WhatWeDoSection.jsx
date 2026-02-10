import React from 'react'
import { Settings, Users, MessageCircle } from 'lucide-react'
export function WhatWeDoSection() {
  return (
    <section className="min-h-screen w-full bg-[#0B1121] text-white z-0 overflow-hidden relative font-sans selection:bg-red-500/30">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;600;700&display=swap');
          .font-serif-display { font-family: 'Playfair Display', serif; }
          .font-montserrat { font-family: 'Montserrat', sans-serif; }
        `}
      </style>

      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f172a] via-[#0B1121] to-[#050810] z-0" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20 max-w-7xl">
        {/* Main Heading */}
        <h1 className="text-center text-5xl md:text-6xl font-serif-display text-[#a3e635] mb-16 tracking-wide">
          What We Do
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT COLUMN - Strategy */}
          <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-[#ef4444] font-montserrat tracking-wider uppercase">
                  Strategy & Planning
                </h2>
                <Settings className="w-6 h-6 text-[#ef4444] animate-spin-slow" />
              </div>

              {/* Connector Line for Mobile/Tablet (Hidden on Desktop as SVG handles it) */}
              <div className="lg:hidden h-1 w-20 bg-[#ef4444] mb-4 rounded-full" />

              <ol className="space-y-2 font-montserrat text-sm md:text-base text-gray-300">
                {[
                  'Brand Strategy Development',
                  'Marketing Communication Strategy Development',
                  'Brand Acculturation Sessions',
                  'Retail Channel Planning',
                  'Marketing Project Management',
                  'New Product Feasibility Assessment',
                  'Market Research & Competitive Analysis',
                  'CSR Initiative Concept Development & Planning',
                  'Customer Feedback Management',
                  'Media Strategy & Planning',
                  'Measurement and Evaluation',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#ef4444] font-bold min-w-[20px]">
                      {i + 1}.
                    </span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* CENTER COLUMN - Graphic */}
          <div className="lg:col-span-4 flex justify-center items-center order-1 lg:order-2 mb-12 lg:mb-0">
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
              {/* SVG Graphic */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full drop-shadow-2xl"
              >
                <defs>
                  <linearGradient
                    id="grad-red"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                  <linearGradient
                    id="grad-teal"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#0f766e" />
                  </linearGradient>
                  <linearGradient
                    id="grad-yellow"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#eab308" />
                    <stop offset="100%" stopColor="#a16207" />
                  </linearGradient>
                  <filter
                    id="shadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="4"
                      stdDeviation="4"
                      floodOpacity="0.3"
                    />
                  </filter>
                </defs>

                {/* Red Arc (Left) - Large outer segment */}
                <path
                  d="M 200, 40 A 160,160 0 0,0 200,360 L 200,320 A 120,120 0 0,1 200,80 Z"
                  fill="url(#grad-red)"
                  filter="url(#shadow)"
                />

                {/* Teal Arc (Top Right) - Inner segment */}
                <path
                  d="M 210,90 A 110,110 0 0,1 310,190 L 270,190 A 70,70 0 0,0 210,130 Z"
                  fill="url(#grad-teal)"
                  filter="url(#shadow)"
                />

                {/* Yellow Arc (Bottom Right) - Inner segment */}
                <path
                  d="M 310,210 A 110,110 0 0,1 210,310 L 210,270 A 70,70 0 0,0 270,210 Z"
                  fill="url(#grad-yellow)"
                  filter="url(#shadow)"
                />

                {/* Connector Lines & Dots */}

                {/* Red Connector (Left) */}
                <circle
                  cx="145"
                  cy="100"
                  r="8"
                  fill="white"
                  className="animate-pulse"
                />
                <path
                  d="M 145,100 L 20,100"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.5"
                  className="hidden lg:block"
                />

                {/* Teal Connector (Right Top) */}
                <circle
                  cx="285"
                  cy="140"
                  r="8"
                  fill="white"
                  className="animate-pulse"
                />
                <path
                  d="M 285,140 L 380,140"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.5"
                  className="hidden lg:block"
                />

                {/* Yellow Connector (Right Bottom) */}
                <circle
                  cx="285"
                  cy="260"
                  r="8"
                  fill="white"
                  className="animate-pulse"
                />
                <path
                  d="M 285,260 L 360,260 L 380,280"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.5"
                  className="hidden lg:block"
                />

                {/* Central Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="65"
                  fill="white"
                  filter="url(#shadow)"
                />

                {/* Logo Text in Center */}
                <text
                  x="200"
                  y="195"
                  textAnchor="middle"
                  className="font-montserrat font-bold text-2xl fill-slate-900"
                  style={{
                    letterSpacing: '2px',
                  }}
                >
                  ADESA
                </text>
                <text
                  x="200"
                  y="215"
                  textAnchor="middle"
                  className="font-montserrat font-medium text-[10px] fill-slate-600 tracking-[0.3em]"
                >
                  MEDIA
                </text>
              </svg>
            </div>
          </div>

          {/* RIGHT COLUMN - Marketing & Production */}
          <div className="lg:col-span-4 flex flex-col gap-12 order-3">
            {/* Marketing Section */}
            <div className="relative">
              <div className="flex items-start gap-3 mb-4">
                <div className="mt-1">
                  <Users className="w-6 h-6 text-[#14b8a6]" />
                </div>
                <h2 className="text-xl font-bold text-[#14b8a6] font-montserrat tracking-wider uppercase leading-tight">
                  Marketing Communications & <br />
                  <span className="text-lg">Media Services</span>
                </h2>
              </div>

              <ol className="space-y-2 font-montserrat text-sm md:text-base text-gray-300 pl-9">
                {[
                  'Creative Development/ Execution',
                  'Media Buying and Management',
                  'Public/Media Relations,',
                  'Social/Digital Marketing',
                  'Events Management/Experiential Marketing',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#14b8a6] font-bold min-w-[20px]">
                      {i + 1}.
                    </span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Production Section */}
            <div className="relative mt-4">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-[#eab308]" />
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold text-[#eab308] font-montserrat tracking-wider uppercase">
                    Production
                  </h2>
                  <span className="text-xs text-gray-400 uppercase tracking-widest">
                    Production Value
                  </span>
                </div>
              </div>

              <ol className="space-y-2 font-montserrat text-sm md:text-base text-gray-300 pl-9">
                {[
                  'TV Commercials',
                  'Documentary',
                  'Radio Commercial',
                  'Corporate Publications',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#eab308] font-bold min-w-[20px]">
                      {i + 1}.
                    </span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDoSection