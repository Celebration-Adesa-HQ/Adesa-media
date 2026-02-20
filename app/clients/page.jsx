import ClientsSection from "@/components/Sections/ClientsSection";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Our Clients | Adesa Media Marketing Agency in Lagos",
  description:
    "See the brands that trust Adesa Media, a marketing agency in Lagos, Nigeria. Explore our client portfolio, campaigns, and measurable results.",
  keywords: [
    "Adesa Media Clients",
    "Marketing Agency Clients Lagos",
    "Brand Campaign Portfolio Nigeria",
    "PR Campaigns Nigeria",
    "Digital Marketing Portfolio Lagos",
  ],
  alternates: {
    canonical: `https://www.adesamedia.com/clients`,
  },
  icons: {
    icon: siteConfig.favicon,
    apple: siteConfig.favicon,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ClientsPage() {
return (
  <main role="main" className="relative">
    <h1 className="sr-only">
      Marketing Agency Client Portfolio in Lagos, Nigeria
    </h1>
    <ClientsSection showFullClient />
  </main>
);
}