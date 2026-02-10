"use client";

import Image from "next/image";
import Logo from "../Logo/Logo";

export default function MissionAndVisionSection() {
  return (
    <section className="bg-white dark:bg-[#0f172a] min-h-screen overflow-x-hidden relative">
      <div className="flex flex-col lg:flex-row min-h-screen w-full relative">
        {/* Vision */}
        <section className="relative w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 overflow-hidden z-10">
          {/* Background Image */}
          <Image
            src="/planet-orbit-outer-space-cosmos-4096x3112-8768.jpg"
            alt="Vision background"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-[#003270]/40 to-[#003270]/20 dark:from-[#0f172a]/70 dark:to-[#0f172a]/70" />

          {/* Logo */}
          <div className="absolute top-8 right-8 text-white font-black tracking-tighter text-xl z-20 drop-shadow-md">
            <Logo color="white" />
          </div>
          
          {/* Content */}
          <div className="relative max-w-xl z-10">
            <h1 className="text-7xl lg:text-9xl font-black text-white mb-8 tracking-tight drop-shadow-2xl">
              Visi<span className="text-[#00AEEF]">o</span>n
            </h1>

            <p className="text-xl lg:text-2xl leading-relaxed text-white font-medium drop-shadow-lg">
              To cultivate a collaborative ecosystem where creativity,
              innovation, and strategic insight converge seamlessly, redefining
              how brands connect with their audiences and creating lasting
              impressions.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="relative w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 overflow-hidden">
          {/* Background Image */}
          <Image
            src="/jonathan-francis-U1OdQbMi6ys-unsplash.jpg"
            alt="Mission background"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-[#00AEEF]/30 to-[#003270]/30 dark:from-[#0f172a]/70 dark:to-[#0f172a]/70" />

          {/* Logo */}
          <div className="absolute top-8 right-8 text-white font-black tracking-tighter text-xl z-20 drop-shadow-md">
            <Logo color="white" />
          </div>

          {/* Content */}
          <div className="relative max-w-xl z-10">
            <h1 className="text-7xl lg:text-9xl font-black text-white mb-8 tracking-tight drop-shadow-2xl">
              Missi<span className="text-[#00AEEF]">o</span>n
            </h1>

            <p className="text-xl lg:text-2xl leading-relaxed text-white font-medium drop-shadow-lg">
              To empower our clients with dynamic solutions that ignite growth,
              captivate audiences, and deliver exceptional results.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
