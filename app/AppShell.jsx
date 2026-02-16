"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Lazy load heavy components
const SubscribeCard = dynamic(() => import("@/components/SubscribeCard"), {
  ssr: false,
  loading: () => null,
});

const Navbar = dynamic(() => import("@/components/Navbar_components/Navbar"), {
  ssr: false,
  loading: () => null,
});

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false, loading: () => null });

const TestimonialsSection = dynamic(
  () => import("@/components/Sections/TestimonialsSection"),
  { loading: () => null },
);

const SloganSection = dynamic(
  () => import("@/components/Sections/SloganSection"),
  { loading: () => null, ssr: false },
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
      <SubscribeCard buttonText="Subscribe on LinkedIn" className="px-44 py-28 flex flex-col align-center justify-center " />
      <Footer onNavClick={handleNavClick} />

      <BackToTop />
    </>
  );
}
