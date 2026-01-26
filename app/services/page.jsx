import WhatWeDoSection from "@/components/Sections/WhatWeDoSection";

export const metadata = {
  title: "Our Services",
  description:
    "Explore Adesa Media's full range of services including Social Media Marketing, Advertising, Media Buying, Influencer Marketing, and Content Production.",
  keywords:
    "Marketing Agency, Social Media Marketing, Media Buying, Advertising, Influencer Marketing, Content Production, Branding, Digital Management",
  openGraph: {
    title: "Our Services | Adesa Media",
    description:
      "Adesa Media provides cutting-edge solutions in social media, advertising, media buying, influencer marketing, and more.",
    url: "https://adesamedia.com/services",
    siteName: "Adesa Media",
    images: [
      {
        url: "https://adesamedia.com/og-image-services.jpg",
        width: 1200,
        height: 630,
        alt: "Adesa Media Services Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Adesa Media",
    description:
      "Adesa Media provides cutting-edge solutions in social media, advertising, media buying, influencer marketing, and more.",
    images: ["https://adesamedia.com/og-image-services.jpg"],
  },
  alternates: {
    canonical: "https://adesamedia.com/services",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Adesa Media",
            "url": "https://adesamedia.com",
            "logo": "https://adesamedia.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/adesamedia",
              "https://www.linkedin.com/company/adesamedia",
              "https://www.twitter.com/adesamedia"
            ],
            "description":
              "Adesa Media is a full-service marketing agency offering social media marketing, advertising, media buying, influencer marketing, and content production.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main St",
              "addressLocality": "Lagos",
              "addressRegion": "LA",
              "postalCode": "100001",
              "addressCountry": "NG"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+234-123-456-7890",
              "contactType": "Customer Service"
            }
          }),
        }}
      />
    </main>
  );
}
