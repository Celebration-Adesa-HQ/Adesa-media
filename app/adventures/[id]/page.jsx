// app/adventures/[id]/page.tsx
import { notFound } from "next/navigation";
import AdventureGallery from "./_components/AdventureGallery";
import { AdventureWork } from "../_components/AdventureWork";

export default async function AdventurePage({ params }) {
  const { id } = await params; // Get the slug from the URL
  // Find adventure by slug
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
