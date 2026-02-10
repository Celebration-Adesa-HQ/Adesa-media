import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import ChevronSteps from "./_components/ChevronSteps";

const tools = [
  {
    name: "MediaStar",
    purpose: "Tracks GRP-driven delivery for terrestrial TV.",
  },
  { name: "AMPS", purpose: "National database on audience media habits." },
  {
    name: "MediaXpress",
    purpose:
      "Scheduling and contracting tool for spend transparency by medium and region.",
  },
];

const compliance = [
  { medium: "TV", target: "90–95%", proof: "Third-party monitoring" },
  {
    medium: "Radio",
    target: "80–85%",
    proof: "Off-air dubs plus third-party validation",
  },
  {
    medium: "OOH",
    target: "95%",
    proof: "Monthly alphanumeric codes plus compliance photos",
  },
  { medium: "Print", target: "95%", proof: "Weekly scanned tear sheets" },
  { medium: "Online", target: "95%", proof: "Digital verification" },
];

const prToolkit = [
  "In-house media team",
  "Stakeholders’ forums",
  "Press releases",
  "Strategic photo placement",
  "News analysis",
  "Columnists’ endorsement",
  "E-PR and online media deployment",
  "Issues and crisis management",
  "Press and media conferences",
];


export default function MediaPRPage() {
  return (
    <main className="bg-background-light dark:bg-background-dark font-display transition-colors duration-300">
      <SectionHeading
        showFullClient
        eyebrow="Media and PR"
        title="Planning, tools, and standards built for accountability"
        description="Professional, data-focused workflows across media planning, verification, and public relations execution."
      />
      {/* Approach to briefs */}
      <div class="min-h-screen flex items-center justify-center bg-brand-orange p-6 md:p-12 relative overflow-hidden">
        {" "}
        <div class="relative z-10 max-w-6xl w-full mx-auto">
          {" "}
          <div class="space-y-8">
            {" "}
            <h1 class="text-4xl md:text-5xl font-bold text-primary dark:text-brand-blue-400 tracking-tight">
              {" "}
              Approach To Briefs{" "}
            </h1>{" "}
            <div class="space-y-6 max-w-5xl text-gray-700 dark:text-brand-blue leading-relaxed text-lg">
              {" "}
              <p>
                {" "}
                Once we receive a detailed brief from the Client, our first step
                is to run a comprehensive review using Media-Star software. This
                allows us to analyse the latest platform ratings, including TV
                viewership, radio listenership, print circulation and time-belt
                performance, ensuring we stay aligned with evolving media
                consumption patterns and base our planning on real data, not
                assumptions.{" "}
              </p>{" "}
              <p>
                {" "}
                Leveraging our strong relationships with local, regional and
                global media partners, we interrogate the data to determine the
                most effective media mix for the brief.{" "}
              </p>{" "}
              <p>
                {" "}
                Based on these insights, we select the most appropriate
                platforms and issue media orders to the relevant stations, while
                simultaneously notifying our media monitoring team to ensure
                seamless execution and reporting.{" "}
              </p>{" "}
            </div>{" "}
            <ChevronSteps />
          </div>{" "}
        </div>{" "}
      </div>

      {/* Planning and tools */}
      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="py-16">
          {/* Tools */}
          <div className="mb-20">
            <h2 className="mb-8 text-2xl font-bold text-slate-900">
              Key Tools
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {tools.map((tool, i) => (
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
            eyebrow="Measurement"
            title="Compliance and verification benchmarks"
            description="Clear targets by medium with defined proof standards."
          />

          <div className="mt-20 overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-3 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <div>Medium</div>
              <div>Target</div>
              <div>Proof</div>
            </div>
            <div className="divide-y divide-slate-200 bg-white">
              {compliance.map((row) => (
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

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <div className="text-lg font-semibold text-slate-950">
              OOH code system
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                Agency generates monthly codes
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                Codes placed on boards by suppliers
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                Photos serve as proof of display
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Public relations */}
      <section className="bg-white">
        <Container className="py-16">
          <SectionHeading
            eyebrow="Public relations"
            title="PR toolkit"
            description="Execution-focused tools built for control, credibility, and crisis readiness."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {prToolkit.map((item) => (
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
