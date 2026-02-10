"use client";

import { useEffect, useRef } from "react";
import HeroSection from "./Sections/HeroSection";
import WhatWeDoSection from "./Sections/WhatWeDoSection";
import ClientsSection from "./Sections/ClientsSection";
import FeaturedWorkSection from "./Sections/FeaturedWorkSection";
import FAQSection from "./Sections/FaqSection";
import AdesaAdvantageSection from "./Sections/AdesaAdvantageSection";

export default function HomePage() {
  const sectionRefs = useRef({});

  useEffect(() => {
    const sections = ["home", "services", "work", "about", "contact"];

    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);

      // Highlight active section in navigation
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const element = sectionRefs.current[section];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            // Update active nav item based on scroll position
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="font-body text-brand-dark bg-brand-light scroll-smooth">
      {/* Hero Section */}
      <HeroSection />

      {/* What We Do */}
      <WhatWeDoSection />

      {/* Adesa Advantage */}
      <AdesaAdvantageSection />

      {/* Featured Work */}
      <FeaturedWorkSection />

      {/* Why Adesa Media */}
      {/* <WhyChooseUsSection /> */}

      {/* Clients */}
      <ClientsSection />

      {/* Process */}
      {/* <ProcessSection /> */}

      {/* About Section */}
      {/* <AboutSection /> */}

      {/* Blog Sectio */}
      {/* <BlogSection /> */}

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-24 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-light mb-6">
            READY TO BUILD SOMETHING GREAT?
          </h2>
          <p className="font-body text-xl text-brand-light/80 mb-8">
            Let's talk about your project and see how we can help your brand
            grow.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-block bg-brand-orange text-brand-dark px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Start Your Project Today
          </button>
        </div>
      </section>

      {/* Contact Section */}
      {/* <ContactSection /> */}
    </div>
  );
}

// Add global styles
export function reportWebVitals(metric) {
  console.log(metric);
}
