import WhatWeDoSection from "@/components/Sections/WhatWeDoSection";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Marketing, Media & PR Services in Lagos Nigeria",
  description:
    "Explore Adesa Media's comprehensive marketing services: brand strategy, media buying, digital marketing, PR, OOH advertising, content production, and experiential marketing across Lagos, Nigeria.",
  path: "/services",
});

export default function ServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Full-Service Marketing, Media & Public Relations",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing Services",
      itemListElement: [
        ...siteConfig.whatWeDo.strategy.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s,
          },
        })),
        ...siteConfig.whatWeDo.marketing.map((m) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: m,
          },
        })),
        ...siteConfig.whatWeDo.production.map((p) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: p,
          },
        })),
      ],
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section aria-labelledby="what-we-do">
        <h1 id="what-we-do" className="sr-only">
          Marketing and Branding Services in Lagos, Nigeria
        </h1>
        <WhatWeDoSection variant="blog" />
      </section>
    </main>
  );
}

