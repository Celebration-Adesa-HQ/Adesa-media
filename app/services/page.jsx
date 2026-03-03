import WhatWeDoSection from "@/components/Sections/WhatWeDoSection";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Service",
  description:
    "Explore Adesa Media’s full suite of marketing services including brand strategy, media buying, digital marketing, PR, OOH advertising, content production, and experiential marketing across Lagos and Nigeria.",
  path: "/services",
});

export default function ServicePage() {
  return (
    <main>
      <section aria-labelledby="what-we-do">
        <h1 id="what-we-do" className="sr-only">
          Marketing and Branding Services in Lagos, Nigeria
        </h1>
        <WhatWeDoSection variant="blog" />
      </section>
    </main>
  );
}
