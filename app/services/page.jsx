import WhatWeDoSection from "@/components/Sections/WhatWeDoSection";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Marketing & Branding Services | Full-Service Agency",
  description:
    "Explore Adesa Media’s full suite of marketing services: brand strategy, media buying, digital marketing, and more. Serving businesses in Lagos and across Nigeria.",
  keywords: [
    "Marketing Agency Lagos",
    "Full-Service Marketing Agency Nigeria",
    "Brand Strategy Agency Lagos",
    "Digital Marketing Agency Nigeria",
    "Media Buying Agency Lagos",
    "PR Agency Lagos",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Marketing & Branding Services | Adesa Media",
    description:
      "Discover Adesa Media’s end-to-end marketing solutions including brand strategy, media buying, digital marketing, and PR.",
    url: `${siteConfig.url}/services`,
    siteName: "Adesa Media",
    type: "website",
    images: [
      {
        url: siteConfig.logo,
        width: 1200,
        height: 630,
        alt: "Adesa Media Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing & Branding Services | Adesa Media",
    description:
      "End-to-end marketing solutions: brand strategy, media buying, digital marketing, and PR.",
    images: ["/images/adesa-services-og.jpg"],
    site: "@adesahq",
    creator: "@adesahq",
  },
};

export default function ServicePage() {
  return (
    <main>
      <section aria-labelledby="what-we-do">
        <h1 id="what-we-do" className="sr-only">
          Our Services at Adesa Media
        </h1>
        <WhatWeDoSection variant="blog" />
      </section>
    </main>
  );
}
