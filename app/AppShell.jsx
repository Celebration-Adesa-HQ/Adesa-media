"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Lazy load heavy components
const Navbar = dynamic(() => import("@/components/Navbar_components/Navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const TestimonialsSection = dynamic(
  () => import("@/components/Sections/TestimonialsSection"),
  { loading: () => null },
);

const SloganSection = dynamic(
  () => import("@/components/Sections/SloganSection"),
  { loading: () => null },
);

const BackToTop = dynamic(() => import("@/components/BackToTop"), {
  ssr: false,
});

export default function AppShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  // Memoized route checks
  const isHome = useMemo(() => {
    return pathname === "/" || pathname === "/adventures";
  }, [pathname]);

  const activeSection = useMemo(() => {
    if (pathname === "/") return "home";
    return pathname.replace("/", "");
  }, [pathname]);

  // Stable handler
  const handleNavClick = useCallback(
    (id, path) => {
      if (pathname === path) return;
      router.push(path);
    },
    [pathname, router],
  );

  return (
    <>
      {!isHome && (
        <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />
      )}

      {children}

      <SloganSection />
      <TestimonialsSection />

      <Footer onNavClick={handleNavClick} />

      <BackToTop />
    </>
  );
}
