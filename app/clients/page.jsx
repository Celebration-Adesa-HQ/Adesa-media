import ClientsSection from "@/components/Sections/ClientsSection";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Our Clients - Full-Service Marketing Agency",
  description:
    "See the brands that trust Adesa Media, a marketing agency in Lagos, Nigeria. Explore our client portfolio, campaigns, and measurable results.",
  path: "/clients",
});

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
