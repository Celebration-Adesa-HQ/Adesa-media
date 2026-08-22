"use client";

import React, { useRef, useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Compass } from "lucide-react";
import { siteConfig } from "@/config/site";

const HeroNav = ({ className = "" }) => {
  const { navigationItems, navigationPrompt } = siteConfig.navigation;
  const sentinelRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0.1 },
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-px w-full pointer-events-none" />

      <nav
        aria-label="Hero Navigation"
        className={`w-full transition-all duration-300 z-40 ${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-[#070e24]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5 px-4 md:px-12"
            : "relative bg-[#070e24]/75 backdrop-blur-lg border-t border-white/10 py-4 px-4 md:px-12"
        } ${className}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Prompt / Eyebrow */}
          <div className="flex items-center gap-2 text-cyan-400 text-xs md:text-sm font-semibold tracking-wider uppercase shrink-0">
            <Compass className="w-4 h-4 text-[#ffa205] animate-spin-slow" />
            <span>{navigationPrompt}</span>
            <ChevronRight className="w-3.5 h-3.5 text-cyan-400/80" />
          </div>

          {/* Scrollable Nav Items */}
          <div className="flex items-center flex-nowrap overflow-x-auto md:overflow-visible md:flex-wrap gap-1.5 scrollbar-none py-1">
            {navigationItems.map((item, index) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Fragment key={item.href || index}>
                  {index > 0 && (
                    <span className="text-white/20 select-none text-xs hidden md:inline px-1">
                      /
                    </span>
                  )}

                  <Link
                    href={item.href || "#"}
                    className={`whitespace-nowrap text-xs md:text-sm px-3.5 py-1.5 rounded-full transition-all duration-200 shrink-0 font-medium ${
                      isActive
                        ? "bg-[#ffa205] text-[#070e24] font-bold shadow-md shadow-amber-500/20"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                </Fragment>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeroNav;

