import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";
import ChevronSteps from "../media/_components/ChevronSteps";
import { Container } from "@/components/Container";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Our Approach - Full-Service Marketing Agency",
  description:
    "Discover Adesa Media's proven approach: co-creation, creative storytelling, empathy, and data-driven strategies for measurable growth and impactful campaigns.",
  path: "/approach",
});

export default function ApproachPage() {
  const { approach } = siteConfig;

  return (
    <main
      className="min-h-screen bg-[#070e24] text-white font-body"
      role="main"
    >
      <h1 className="sr-only">
        Adesa Media's Approach to Marketing and PR in Lagos, Nigeria
      </h1>

      <SectionHeading
        eyebrow={approach.heading.eyebrow}
        title={approach.heading.title}
        description={approach.heading.description}
        showFullClient
      />

      {/* Approach Narrative */}
      <div className="py-20 px-6 sm:px-10 lg:px-16 bg-[#091333] relative overflow-hidden border-y border-white/10">
        <div className="relative z-10 max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {approach.approach.title}
          </h2>

          <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            {approach.approach.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          <div className="pt-6">
            <ChevronSteps />
          </div>
        </div>
      </div>

      {/* 4 Steps Section */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#070e24]">
        <div className="max-w-6xl w-full mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffa205] bg-[#ffa205]/15 px-4 py-1.5 rounded-full border border-[#ffa205]/30">
              Workflow
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              {approach.sectionTitle}
            </h2>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {approach.steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-[#0c1638] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-start hover:border-[#ffa205]/40 transition-all duration-300 shadow-xl"
                >
                  <span className="text-5xl sm:text-6xl font-black text-[#ffa205] mb-4 leading-none drop-shadow-[0_0_12px_rgba(255,162,5,0.3)]">
                    {step.number}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Badge */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#070e24] rounded-full items-center justify-center text-center shadow-2xl border-4 border-[#ffa205] z-10">
              <span className="text-[#ffa205] font-black text-sm leading-tight px-3 whitespace-pre-line">
                {approach.centerBadge}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Tools */}
      <section className="py-20 bg-[#091333] border-t border-white/10">
        <Container>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffa205] bg-[#ffa205]/15 px-4 py-1.5 rounded-full border border-[#ffa205]/30">
              Technology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 mb-8">
              Key Tools
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {approach.tools.map((tool, i) => (
                <div key={i} className="rounded-3xl bg-[#0c1638] border border-white/10 p-6 hover:border-[#ffa205]/40 transition-colors">
                  <h3 className="mb-2 font-bold text-lg text-white">{tool.name}</h3>
                  <p className="text-sm text-slate-300">{tool.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Compliance & Measurement */}
      <section className="py-20 bg-[#070e24] border-t border-white/10">
        <Container>
          <SectionHeading
            eyebrow={approach.measurement.heading.eyebrow}
            title={approach.measurement.heading.title}
            description={approach.measurement.heading.description}
          />

          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0c1638]">
            <div className="grid grid-cols-3 bg-[#070e24] px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#ffa205] border-b border-white/10">
              <div>Medium</div>
              <div>Target</div>
              <div>Proof</div>
            </div>

            <div className="divide-y divide-white/5">
              {approach.measurement.compliance.map((row) => (
                <div
                  key={row.medium}
                  className="grid grid-cols-3 px-6 py-4 text-sm"
                >
                  <div className="font-semibold text-white">
                    {row.medium}
                  </div>
                  <div className="text-slate-300">{row.target}</div>
                  <div className="text-slate-400">{row.proof}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-[#0c1638] p-8">
            <h3 className="text-lg font-bold text-white">
              OOH code system
            </h3>

            <ul className="mt-4 grid gap-2.5 text-sm text-slate-300">
              {approach.measurement.oohCodes.map((item, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#ffa205]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* PR Toolkit */}
      <section className="py-20 bg-[#091333] border-t border-white/10">
        <Container>
          <SectionHeading
            eyebrow={approach.pr.heading.eyebrow}
            title={approach.pr.heading.title}
            description={approach.pr.heading.description}
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {approach.pr.toolkit.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#0c1638] p-5 text-sm font-semibold text-white hover:border-[#ffa205]/40 transition-colors"
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

