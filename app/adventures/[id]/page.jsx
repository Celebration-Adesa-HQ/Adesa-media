// app/adventures/[id]/page.tsx
import { notFound } from "next/navigation";
import AdventureGallery from "./_components/AdventureGallery";
import { AdventureWork } from "../_components/AdventureWork";
import { siteConfig } from "@/config/site";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const adventure = AdventureWork.find((a) => a.slug === id);

  if (!adventure) return { title: "Adventure Not Found" };

  const rawImage = adventure.images?.[0] || "/Adesa-media-logo-black.png";
  const imageUrl = rawImage?.startsWith("http")
    ? rawImage
    : `${siteConfig.url}${rawImage.startsWith("/") ? "" : "/"}${rawImage}`;

return {
  title: `${adventure.title} | Adesa Media Adventures`,
  description: adventure.description,
  alternates: {
    canonical: `${siteConfig.url}/adventures/${adventure.slug}`,
  },
  openGraph: {
    title: adventure.title,
    description: adventure.description,
    url: `${siteConfig.url}/adventures/${adventure.slug}`,
    siteName: siteConfig.title,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: adventure.title,
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: adventure.title,
    description: adventure.description,
    images: [imageUrl],
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
}

export default async function AdventurePage({ params }) {
  const { id } = await params;
  const adventureData = AdventureWork.find((a) => a.slug === id);
  if (!adventureData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          {adventureData.title}
        </h1>

        <AdventureGallery data={adventureData} />
      </main>
    </div>
  );
}
