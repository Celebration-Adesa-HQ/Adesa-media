"use client";

import Link from "next/link";
import { X } from "lucide-react";

import Logo from "../Logo/Logo";
import ThemeSwitch from "@/app/ThemeSwitch";

export default function NavbarMobile({
  routes,
  cta,
  isActive,
  close,
  logoColor,
}) {
  return (
    <div
      className="fixed inset-0 z-50 overscroll-contain lg:hidden"
      onPointerDown={close}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div
        className="absolute right-0 top-0 h-dvh w-[90%] max-w-md bg-brand-light dark:bg-brand-blue border-l border-gray-200 dark:border-white/10 flex flex-col"
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200 dark:border-white/10">
          <Logo color={logoColor} />

          <button
            onClick={close}
            className="h-10 w-10 rounded-xl flex items-center justify-center text-brand-blue dark:text-brand-light hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-6 py-8 flex flex-col gap-2 overflow-y-auto">
          {routes.map((route) => {
            const active = isActive(route.href);

            return (
              <Link
                key={route.href}
                href={route.href}
                onClick={close}
                className={`rounded-xl px-5 py-4 text-sm transition-colors ${
                  active
                    ? "bg-brand-orange/10 dark:bg-brand-orange/20 text-brand-orange font-semibold"
                    : "text-brand-blue dark:text-brand-light hover:bg-gray-100 dark:hover:bg-white/10"
                }`}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-white/10 px-6 py-6 flex flex-col gap-4">
          <ThemeSwitch />

          <Link
            href={cta.href}
            onClick={close}
            className="w-full rounded-xl bg-brand-orange py-3 text-center font-semibold text-brand-dark hover:bg-amber-500 transition-colors"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
