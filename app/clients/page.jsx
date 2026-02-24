import ClientsSection from "@/components/Sections/ClientsSection";

export const metadata = {
  title: "Our Clients - Full-Service Marketing Agency",
  description:
    "See the brands that trust Adesa Media, a marketing agency in Lagos, Nigeria. Explore our client portfolio, campaigns, and measurable results.",
  keywords: [
    "Adesa Media Clients",
    "Marketing Agency Clients Lagos",
    "Brand Campaign Portfolio Nigeria",
    "PR Campaigns Nigeria",
    "Digital Marketing Portfolio Lagos",
    "marketing agency in Lagos",
    "marketing agency Nigeria",
    "full service marketing agency",
    "media buying agency Nigeria",
    "PR agency Lagos",
    "digital marketing agency Nigeria",
    "OOH advertising Nigeria",
    "brand strategy agency Lagos",
    "Adesa Media",
    "adesamedia.com",
    "adesa",
    "adesa media.com",
    "adesa media clients",
    "client",
  ],
  alternates: {
    canonical: "https://www.adesamedia.com/clients",
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