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

  /* -----------------------------
     Memoized Routes
  ------------------------------*/

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

  /* -----------------------------
     Active Route Checker
  ------------------------------*/

  const isActive = useCallback((href) => pathname === href, [pathname]);

  /* -----------------------------
     Scroll Optimization (rAF)
  ------------------------------*/

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 12);
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* -----------------------------
     Handlers
  ------------------------------*/

  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  const logoColor = theme === "dark" ? "white" : "black";

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition ${
          scrolled
            ? "bg-brand-light/95 backdrop-blur border-b border-gray-200 dark:bg-brand-blue/95 dark:border-white/10"
            : "bg-brand-light/80 dark:bg-brand-blue/80"
        }`}
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <span className="shrink-0">
              <Logo color={logoColor} />
            </span>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 font-heading text-[13px] tracking-wide">
              {primaryRoutes.map((route) => {
                const active = isActive(route.href);

                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`relative py-3 transition-colors ${
                      active
                        ? "text-brand-orange font-semibold"
                        : "light:text-brand-blue dark:text-brand-light hover:text-brand-orange"
                    }`}
                  >
                    {route.label}

                    {active && (
                      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-brand-orange" />
                    )}
                  </Link>
                );
              })}

              {/* More Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 py-3 light:text-brand-blue hover:text-brand-orange transition-colors"
                >
                  More
                  <ChevronDown size={14} />
                </button>

                <div className="absolute left-0 top-full mt-2 w-48 rounded-xl bg-brand-light dark:bg-brand-blue border border-gray-200 dark:border-white/10 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {secondaryRoutes.map((route) => {
                    const active = isActive(route.href);

                    return (
                      <Link
                        key={route.href}
                        href={route.href}
                        className="block"
                      >
                        <span
                          className={`block px-4 py-3 text-sm transition-colors ${
                            active
                              ? "text-brand-orange font-semibold light:bg-brand-orange/10 dark:bg-brand-orange/20"
                              : "light:text-brand-blue dark:text-brand-light light:hover:bg-gray-100 dark:hover:bg-white/10 light:hover:text-brand-orange dark:hover:text-brand-orange"
                          }`}
                        >
                          {route.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <Link
                href={ctaRoute.href}
                className="rounded-xl bg-brand-orange px-7 py-3 text-sm font-bold text-brand-dark hover:bg-amber-500 transition-colors"
              >
                {ctaRoute.label}
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={openMenu}
              className="lg:hidden h-11 w-11 rounded-xl flex items-center justify-center text-brand-blue dark:text-brand-light hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Lazy Mobile Menu */}
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
