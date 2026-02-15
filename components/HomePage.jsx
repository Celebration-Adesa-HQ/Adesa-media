"use client";

import dynamic from "next/dynamic";

// Lazy load heavy sections
const HeroSection = dynamic(() => import("./Sections/HeroSection"), {
  ssr: false,
});
const WhatWeDoSection = dynamic(() => import("./Sections/WhatWeDoSection"), {
  ssr: false,
});
const AdesaAdvantageSection = dynamic(
  () => import("./Sections/AdesaAdvantageSection"),
  { ssr: false },
);
const FeaturedWorkSection = dynamic(
  () => import("./Sections/FeaturedWorkSection"),
  { ssr: false },
);
const ClientsSection = dynamic(() => import("./Sections/ClientsSection"), {
  ssr: false,
});
const CallToActionSection = dynamic(
  () => import("./Sections/CallToActionSection"),
  { ssr: false },
);

export default function HomePage() {
  return (
    <div className="font-body text-brand-dark bg-brand-light scroll-smooth">
      <HeroSection />
      <WhatWeDoSection />
      <AdesaAdvantageSection />
      <FeaturedWorkSection />
      <ClientsSection />
      <CallToActionSection />
    </div>
  );
}

// Optional: monitor vitals in dev only
export function reportWebVitals(metric) {
  if (process.env.NODE_ENV === "development") {
    console.log(metric);
  }
}
