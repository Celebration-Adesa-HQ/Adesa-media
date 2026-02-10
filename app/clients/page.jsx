import ClientsSection from "@/components/Sections/ClientsSection";

export const metadata = {
  title: "Our Clients | Adesa Media",
  description:
    "Brands that trust Adesa Media. From finance to FMCG, technology, automotive, and lifestyle. We partner with ambitious brands to deliver measurable growth.",
  keywords: [
    "Adesa Media clients",
    "marketing agency clients Nigeria",
    "brands Adesa Media works with",
    "media and advertising agency Lagos",
    "PR and digital marketing clients",
  ],
  openGraph: {
    title: "Our Clients",
    description:
      "Trusted by leading brands across finance, FMCG, automotive, and technology. Adesa Media delivers strategy, creativity, and execution that drives results.",
    url: "https://adesamedia.com/clients",
    siteName: "Adesa Media",
    images: [
      {
        url: "/og/clients.png",
        width: 1200,
        height: 630,
        alt: "Adesa Media Clients",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients | Adesa Media",
    description:
      "Leading brands choose Adesa Media for strategy, media, PR, and digital execution.",
    images: ["/og/clients.png"],
  },
  alternates: {
    canonical: "https://adesamedia.com/clients",
  },
};

export default function ClientsPage() {
  return (
    <main className="relative">
      <ClientsSection showFullClient />
    </main>
  );
}
