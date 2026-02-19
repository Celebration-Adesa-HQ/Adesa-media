import HomePage from "@/components/HomePage";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Full Service Marketing Agency in Lagos, Nigeria | Adesa Media",
  description:
    "Adesa Media is a full service marketing agency in Lagos, Nigeria. We deliver brand strategy, media buying, PR, digital marketing, and experiential campaigns built for measurable growth.",
  keywords: [
    "Full Service Marketing Agency Lagos",
    "Marketing Agency Nigeria",
    "Media Buying Agency Lagos",
    "Brand Strategy Agency Nigeria",
    "PR Agency Lagos",
    "Digital Marketing Agency Nigeria",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Full Service Marketing Agency in Lagos, Nigeria | Adesa Media",
    description:
      "Strategy, media, PR, and digital campaigns built for growth. Adesa Media partners with brands across Nigeria to deliver measurable marketing performance.",
    url: "/",
    siteName: siteConfig.title,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/Adesa-media-logo-black.png`,
        width: 1200,
        height: 630,
        alt: "Adesa Media Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Service Marketing Agency in Lagos | Adesa Media",
    description:
      "Brand strategy, media buying, PR, and digital marketing built for measurable growth.",
    images: [`${siteConfig.url}/Adesa-media-logo-black.png`],
  },
};

export default function Home() {
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "@id": `${siteConfig.url}/#organization`,
  name: "Adesa Media",
  url: siteConfig.url,
  logo: `${siteConfig.url}/Adesa-media-logo-black.png`,
  description:
    "Full service marketing agency in Lagos, Nigeria delivering strategy, media, PR and digital campaigns.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },

  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  sameAs: [
    "https://www.linkedin.com/company/your-link",
    "https://www.instagram.com/your-handle",
    "https://twitter.com/your-handle",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}#website`,
  url: siteConfig.url,

  name: "Adesa Media",
  publisher: {
    "@id": `${siteConfig.url}#organization`,
  },
};

return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
    />
    <HomePage />
  </>
);
}