// app/adventures/[id]/page.tsx
import { notFound } from "next/navigation";
import AdventureGallery from "./_components/AdventureGallery";
import { AdventureWork } from "../_components/AdventureWork";

export async function generateMetadata({ params }) {
   const { id } = await params;
  const adventure = AdventureWork.find((a) => a.slug === id);

  if (!adventure) return { title: "Adventure Not Found" };

  return {
    title: `${adventure.title} | Adesa Media Adventures`,
    description: adventure.description,
    canonical: `https://adesamedia.com/adventures/${adventure.slug}`,
    openGraph: {
      title: adventure.title,
      description: adventure.description,
      url: `https://adesamedia.com/adventures/${adventure.slug}`,
      siteName: "Adesa Media",
      images: [
        {
          url: adventure.images[0] || "/Adesa-media-logo-black.png",
          width: 1200,
          height: 630,
          alt: adventure.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: adventure.title,
      description: adventure.description,
      images: [adventure.images[0] || "/Adesa-media-logo-black.png"],
      site: "@adesahq",
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
