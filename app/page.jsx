import HomePage from "@/components/HomePage";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Full Service Marketing Agency in Lagos, Nigeria",
  description:
    "Adesa Media is a full service marketing agency in Lagos, Nigeria. We deliver brand strategy, media buying, PR, digital marketing, OOH advertising, and experiential campaigns built for measurable growth.",
  path: "/",
});

export default function Home() {
  return (
    <main role="main">
      <h1 className="sr-only">
        Adesa Media - Full Service Marketing Agency in Lagos, Nigeria
      </h1>
      <HomePage />
    </main>
  );
}
