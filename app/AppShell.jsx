"use client";

import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar_components/Navbar";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";



export default function AppShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const activeSection = pathname === "/" ? "home" : pathname.replace("/", "");

  const handleNavClick = (id, path) => {
    if (pathname === path) return;
    router.push(path);
  };

  return (
    <>
      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />
      {children}
      <TestimonialsSection />
      {/* <NewsletterSection /> */}
      <Footer onNavClick={handleNavClick} />
      <BackToTop />
    </>
  );
}
