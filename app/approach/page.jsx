import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";
import ChevronSteps from "../media/_components/ChevronSteps";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Our Approach - Full-Service Marketing Agency",
  description:
    "Discover Adesa Media's proven approach: co-creation, creative storytelling, empathy, and data-driven strategies for measurable growth and impactful campaigns.",
  keywords: [
    "Marketing Agency Lagos",
    "PR Agency Nigeria",
    "Media Buying Agency",
    "Brand Strategy Agency",
    "Digital Marketing Agency",
    "Full-Service Marketing Agency",
  ],
  alternates: {
    canonical: "https://www.adesamedia.com/approach",
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function ApproachPage() {
  const { approach } = siteConfig;

  return (
    <main
      className="min-h-screen bg-brand-light dark:bg-brand-blue text-brand-dark dark:text-white font-body"
      role="main"
    >
      <h1 className="sr-only">
        Adesa Media's Approach to Marketing and PR in Lagos, Nigeria
      </h1>

      {/* Heading */}
      <SectionHeading
        eyebrow={approach.heading.eyebrow}
        title={approach.heading.title}
        description={approach.heading.description}
        showFullClient
      />

      {/* Approach */}
      <div className="min-h-screen flex items-center justify-center bg-brand-orange p-6 md:p-12 relative overflow-hidden">
        <div className="relative z-10 max-w-6xl w-full mx-auto">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-brand-blue-400 tracking-tight">
              {approach.approach.title}
            </h1>

            <div className="space-y-6 max-w-5xl text-gray-700 dark:text-brand-blue leading-relaxed text-lg">
              {approach.approach.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>

            <ChevronSteps />
          </div>
        </div>
      </div>

      {/* Section */}
      <section className="min-h-screen flex items-center bg-brand-orange justify-center p-6 md:p-12">
        <div className="max-w-6xl w-full mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight">
              {approach.sectionTitle}
            </h1>
          </div>

          {/* Center Badge Mobile */}
          <div className="lg:hidden flex my-4 w-full justify-center">
            <div className="w-24 h-24 bg-background-light dark:bg-background-dark rounded-full flex items-center justify-center text-center shadow-md border-2 border-primary">
              <span className="text-primary font-extrabold text-xs leading-tight whitespace-pre-line">
                {approach.centerBadge}
              </span>
            </div>
          </div>

          <div className="relative">
            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 bg-black/10 dark:bg-white/10 p-px">
              {approach.steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-primary p-8 md:p-12 lg:p-16 min-h-80 flex flex-col justify-start"
                >
                  <span className="text-6xl md:text-7xl font-bold text-white mb-4 leading-none">
                    {step.number}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Badge Desktop */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-brand-blue dark:bg-background-dark rounded-full items-center justify-center text-center shadow-lg border-4 border-primary z-10">
              <span className="text-primary font-extrabold text-lg md:text-xl leading-tight px-4 whitespace-pre-line">
                {approach.centerBadge}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="py-16">
          <div className="mb-20">
            <h2 className="mb-8 text-2xl font-bold text-slate-900">
              Key Tools
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {approach.tools.map((tool, i) => (
                <div key={i} className="rounded-xl border border-slate-500 p-6">
                  <h3 className="mb-2 font-bold text-slate-900">{tool.name}</h3>
                  <p className="text-sm text-slate-600">{tool.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Measurement */}
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-16">
          <SectionHeading
            eyebrow={approach.measurement.heading.eyebrow}
            title={approach.measurement.heading.title}
            description={approach.measurement.heading.description}
          />

          {/* Table */}
          <div className="mt-20 overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-3 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <div>Medium</div>
              <div>Target</div>
              <div>Proof</div>
            </div>

            <div className="divide-y divide-slate-200 bg-white">
              {approach.measurement.compliance.map((row) => (
                <div
                  key={row.medium}
                  className="grid grid-cols-3 px-5 py-4 text-sm"
                >
                  <div className="font-semibold text-slate-950">
                    {row.medium}
                  </div>
                  <div className="text-slate-700">{row.target}</div>
                  <div className="text-slate-600">{row.proof}</div>
                </div>
              ))}
            </div>
          </div>

          {/* OOH Codes */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <div className="text-lg font-semibold text-slate-950">
              OOH code system
            </div>

            <ul className="mt-4 grid gap-2 text-sm text-slate-600">
              {approach.measurement.oohCodes.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* PR Toolkit */}
      <section className="bg-white">
        <Container className="py-16">
          <SectionHeading
            eyebrow={approach.pr.heading.eyebrow}
            title={approach.pr.heading.title}
            description={approach.pr.heading.description}
          />

          <div className="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {approach.pr.toolkit.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-900"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
