import WhatWeDoSection from "@/components/Sections/WhatWeDoSection";

export default function ServicePage() {
  return (
    <main>
      <section aria-labelledby="what-we-do">
        <h1 id="what-we-do" className="sr-only">
          Our Services at Adesa Media
        </h1>
        <WhatWeDoSection variant="blog" />
      </section>
    </main>
  );
}
