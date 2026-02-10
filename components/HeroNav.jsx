"use client";

import React, { useRef, useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "lucide-react";

const HeroNav = ({
  navigationItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "What We Do", href: "/services" },
    { label: "Our Approach", href: "/approach" },
    { label: "Media & PR", href: "/media" },
    { label: "Adventures", href: "/adventures" },
    { label: "Team", href: "/team" },
    { label: "Clients", href: "/clients" },
    { label: "Contact", href: "/contact" },
  ],
  navigationPrompt = "Click Menu to Navigate",
}) => {
  const navRef = useRef(null);
  const sentinelRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 1 },
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} />

      <nav
        ref={navRef}
        className={`bg-[#0a1e3d]/85 backdrop-blur-md px-6 md:px-12 py-5 transition-transform ${
          isSticky ? "fixed top-0 left-0 right-0 z-50" : "relative"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-2 text-cyan-400 text-sm">
            <span>{navigationPrompt}</span>
            <ChevronRightIcon className="w-4 h-4" />
          </div>

          <div className="flex flex-wrap items-center">
            {navigationItems.map((item, index) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Fragment key={index}>
                  {index > 0 && (
                    <ChevronRightIcon className="w-4 h-4 text-cyan-400 mx-2" />
                  )}

                  <Link
                    href={item.href || "#"}
                    className={`text-sm transition-colors ${
                      isActive
                        ? "text-cyan-400 font-semibold"
                        : "text-white hover:text-[#22d3ee]"
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
