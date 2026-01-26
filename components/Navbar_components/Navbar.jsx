"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeSwitch from "@/app/ThemeSwitch";
import Logo from "../Logo/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItem = (path) =>
    `nav-link font-heading ${pathname === path ? "nav-active" : ""}`;

  return (
    <header className="sticky top-0 z-50 bg-brand-light dark:bg-brand-blue border-b border-gray-200 dark:border-white/10">
      <div className="container-custom">
        <div className="flex items-center justify-between py-6">
          <Logo />

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-10 text-brand-blue dark:text-brand-light">
            <Link href="/" className={navItem("/")}>
              Home
            </Link>
            <Link href="/services" className={navItem("/services")}>
              Services
            </Link>
            <Link href="/about" className={navItem("/about")}>
              About
            </Link>
            <Link href="/blog" className={navItem("/blog")}>
              Blog
            </Link>
            <Link href="/contact" className={navItem("/contact")}>
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <ThemeSwitch />
            <Link
              href="/contact"
              className="btn-primary font-body px-6 py-3 rounded-md text-brand-dark"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-brand-blue dark:text-brand-light"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-brand-light dark:bg-brand-blue transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200 dark:border-white/10">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            className="text-brand-blue dark:text-brand-light"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-8 px-6 py-10 text-2xl font-heading text-brand-blue dark:text-brand-light">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <div className="pt-6 flex items-center gap-4">
            <ThemeSwitch />
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary font-body px-6 py-3 rounded-md text-brand-dark"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
