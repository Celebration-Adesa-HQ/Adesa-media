"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import ChevronSteps from "./_components/ChevronSteps";
import { siteConfig } from "@/config/site";
import BlogSection from "@/components/Sections/BlogSection";

export default function MediaPRPage() {
  const { mediaPR } = siteConfig;

  return (
    <main className="bg-background-light dark:bg-background-dark font-display transition-colors duration-300">
      {/* Hero */}
      <SectionHeading
        showFullClient
        eyebrow={mediaPR.hero.eyebrow}
        title={mediaPR.hero.title}
        description={mediaPR.hero.description}
      />

      <BlogSection variant="blog" />
    </main>
  );
}
