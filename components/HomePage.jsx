"use client";

import { useEffect, useRef } from "react";
import HeroSection from "./Sections/HeroSection";
import WhatWeDoSection from "./Sections/WhatWeDoSection";
import ClientsSection from "./Sections/ClientsSection";
import FeaturedWorkSection from "./Sections/FeaturedWorkSection";
import FAQSection from "./Sections/SloganSection";
import AdesaAdvantageSection from "./Sections/AdesaAdvantageSection";
import CallToActionSection from "./Sections/CallToActionSection";
import SloganSection from "./Sections/SloganSection";

export default function HomePage() {

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

      {/* Blog Section */}
      {/* <BlogSection /> */}

      {/* Slogan Section */}
      <SloganSection />

      {/* Final CTA */}
      <CallToActionSection />

      {/* Contact Section */}
      {/* <ContactSection /> */}
    </div>
  );
}

// Add global styles
export function reportWebVitals(metric) {
  console.log(metric);
}
