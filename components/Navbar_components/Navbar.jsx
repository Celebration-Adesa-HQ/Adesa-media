"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../Logo/Logo";
import ThemeSwitch from "@/app/ThemeSwitch";
import { useTheme } from "next-themes";

const primaryRoutes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "What We Do" },
  { href: "/approach", label: "Our Approach" },
  { href: "/media", label: "Media & PR" },
];

const secondaryRoutes = [
  { href: "/adventures", label: "Our Adventures" },
  { href: "/team", label: "Team" },
  { href: "/clients", label: "Clients" },
];

const allRoutes = [
  ...primaryRoutes,
  ...secondaryRoutes,
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  const isActive = (href) => pathname === href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition ${
        scrolled
          ? "bg-brand-light/95 backdrop-blur border-b border-gray-200 dark:bg-brand-blue/95 dark:border-white/10"
          : "bg-brand-light/80 dark:bg-brand-blue/80"
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <span className="shrink-0">
            <Logo color={`${theme === "dark" ? "white" : "black"}`} />
          </span>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-8 font-heading text-[13px] tracking-wide">
            {primaryRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`relative py-3 transition-colors ${
                  isActive(route.href)
                    ? "text-brand-orange font-semibold"
                    : "light:text-brand-blue dark:text-brand-light hover:text-brand-orange"
                }`}
              >
                <span
                  className={`relative py-3 transition-colors ${
                    isActive(route.href)
                      ? "text-brand-orange font-semibold"
                      : "light:text-brand-blue dark:text-brand-light hover:text-brand-orange dark:hover:text-brand-orange"
                  }`}
                >
                  {route.label}
                </span>
                {isActive(route.href) && (
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-brand-orange " />
                )}
              </Link>
            ))}

            <div className="relative group">
              <button className="flex items-center gap-1 py-3 light:text-brand-blue hover:text-brand-orange transition-colors">
                More
                <ChevronDown size={14} />
              </button>

              <div className="absolute left-0 top-full mt-2 w-48 rounded-xl bg-brand-light dark:bg-brand-blue border border-gray-200 dark:border-white/10 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {secondaryRoutes.map((route) => (
                  <Link key={route.href} href={route.href} className="relative">
                    <span
                      className={`block px-4 py-3 text-sm overflow-hidden transition-colors ${
                        isActive(route.href)
                          ? "text-brand-orange font-semibold light:bg-brand-orange/10 dark:bg-brand-orange/20"
                          : "light:text-brand-blue dark:text-brand-light light:hover:bg-gray-100 dark:hover:bg-white/10 light:hover:text-brand-orange dark:hover:text-brand-orange "
                      }`}
                    >
                      {route.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <ThemeSwitch />
            <Link
              href="/contact"
              className="rounded-xl bg-brand-orange px-7 py-3 text-sm font-semibold text-brand-dark hover:bg-amber-500 transition-colors"
            >
              Partner with us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden h-11 w-11 rounded-xl flex items-center justify-center text-brand-blue dark:text-brand-light hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="fixed inset-0 z-50" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/40" />

          <div
            className="absolute right-0 top-0 h-full w-[90%] max-w-md bg-brand-light dark:bg-brand-blue border-l border-gray-200 dark:border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200 dark:border-white/10">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="h-10 w-10 rounded-xl flex items-center justify-center text-brand-blue dark:text-brand-light hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 px-6 py-8 flex flex-col gap-2 overflow-y-auto">
              {allRoutes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-5 py-4 text-sm transition-colors ${
                    isActive(route.href)
                      ? "bg-brand-orange/10 dark:bg-brand-orange/20 text-brand-orange font-semibold"
                      : "text-brand-blue dark:text-brand-light hover:bg-gray-100 dark:hover:bg-white/10"
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-gray-200 dark:border-white/10 px-6 py-6 flex flex-col gap-4">
              <ThemeSwitch />
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-full rounded-xl bg-brand-orange py-3 text-center font-semibold text-brand-dark hover:bg-amber-500 transition-colors"
              >
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
