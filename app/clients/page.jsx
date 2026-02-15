import ClientsSection from "@/components/Sections/ClientsSection";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Our Clients - Adesa Media | Full-Service Marketing Agency in Lagos, Nigeria",
  description:
    "Trusted by leading brands, Adesa Media delivers marketing, media, and PR solutions across Nigeria. See our client portfolio and success stories.",
  keywords: [
    "Marketing Agency Lagos",
    "Full Service Marketing Agency Nigeria",
    "PR Agency Nigeria",
    "Media Buying Agency Nigeria",
    "Brand Strategy Agency Lagos",
    "Digital Marketing Agency Nigeria",
  ],
  openGraph: {
    title: "Our Clients - Adesa Media",
    description:
      "Trusted by leading brands, Adesa Media delivers marketing, media, and PR solutions across Nigeria. See our client portfolio and success stories.",
    url: `${siteConfig.url}/clients`,
    siteName: "Adesa Media",
    type: "website",
    images: [
      {
        url: siteConfig.logo,
        width: 1200,
        height: 630,
        alt: "Adesa Media Clients Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients - Adesa Media",
    description:
      "Trusted by leading brands, Adesa Media delivers marketing, media, and PR solutions across Nigeria. See our client portfolio and success stories.",
    images: [`${siteConfig.logo}`],
    site: "@adesahq",
  },
};

export default function ClientsPage() {
  return (
    <main className="relative">
      <ClientsSection showFullClient />
    </main>
  );
}
