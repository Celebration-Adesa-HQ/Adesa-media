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
  return <HomePage />;
}
