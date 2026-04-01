import { notFound } from "next/navigation";
import AdventureGallery from "./_components/AdventureGallery";
import { AdventureWork } from "../_components/AdventureWork";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export async function generateMetadata(
  { params }
){
  const {id} = await params
  const adventure = AdventureWork.find(
    (a) => a.slug === id
  );

  if (!adventure) {
    return constructMetadata({
      title: "Adventure Not Found",
      path: `/adventures/${id}`,
      noIndex: true,
    });
  }

  const rawImage =
    adventure.images?.[0] ?? "/Adesa-media-logo-black.png";

  const imageUrl = rawImage.startsWith("http")
    ? rawImage
    : `${siteConfig.url}${rawImage.startsWith("/") ? "" : "/"}${rawImage}`;

  return constructMetadata({
    title: adventure.title,
    description: adventure.description,
    path: `/adventures/${adventure.slug}`,
    image: imageUrl,
  });
}

export default async function AdventurePage({
  params,
}) {
  const { id } = await params;
  const adventureData = AdventureWork.find(
    (a) => a.slug === id
  );

  console.log("Adventure Data:", adventureData);

  if (!adventureData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main
        role="main"
        className="container mx-auto px-4 py-12"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          {adventureData.title}
        </h1>

        <AdventureGallery data={adventureData} />
      </main>
    </div>
  );
}