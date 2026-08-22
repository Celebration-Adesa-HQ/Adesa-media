"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "../Logo/Logo";
import { siteConfig } from "@/config/site";

const MobileMenu = dynamic(() => import("./NavbarMobile"), {
  ssr: false,
  loading: () => null,
});

export default function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const ticking = useRef(false);

  const { primaryRoutes, secondaryRoutes, ctaRoute, allRoutes } =
    useMemo(() => {
      const primary = siteConfig.navigation.primary;
      const secondary = siteConfig.navigation.secondary;
      const cta = siteConfig.navigation.cta;

      return {
        primaryRoutes: primary,
        secondaryRoutes: secondary,
        ctaRoute: cta,
        allRoutes: [...primary, ...secondary],
      };
    }, []);

  const isActive = useCallback((href) => pathname === href, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 16);
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  const logoColor = theme === "dark" ? "white" : "white";

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#070e24]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-[#070e24]/75 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <span className="shrink-0">
              <Logo color={logoColor} />
            </span>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
              {primaryRoutes.map((route) => {
                const active = isActive(route.href);

                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`relative py-2 px-3 rounded-full transition-all duration-200 ${
                      active
                        ? "text-[#ffa205] font-semibold bg-white/5"
                        : "text-slate-200 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {route.label}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#ffa205] rounded-full shadow-[0_0_8px_#ffa205]" />
                    )}
                  </Link>
                );
              })}

              {/* More Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1.5 py-2 px-3 rounded-full text-slate-200 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  <span>More</span>
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180 text-slate-400" />
                </button>

                <div className="absolute left-0 top-full mt-2 w-52 rounded-2xl bg-[#0b132e] border border-white/10 shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                  {secondaryRoutes.map((route) => {
                    const active = isActive(route.href);

                    return (
                      <Link
                        key={route.href}
                        href={route.href}
                        className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                          active
                            ? "text-[#ffa205] bg-white/10 font-semibold"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {route.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={ctaRoute.href}
                className="rounded-full bg-[#ffa205] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#070e24] shadow-md shadow-amber-500/20 hover:bg-[#ffb733] hover:shadow-amber-500/35 transition-all duration-200 active:scale-95"
              >
                {ctaRoute.label}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={openMenu}
              className="lg:hidden h-11 w-11 rounded-xl flex items-center justify-center text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <MobileMenu
          routes={allRoutes}
          cta={ctaRoute}
          isActive={isActive}
          close={closeMenu}
          logoColor={logoColor}
        />
      )}
    </>
  );
}

