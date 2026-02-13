import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const roles = [
  "Brand & communications strategists",
  "Art direction and creative leadership",
  "Copy and content marketing",
  "Social media specialists",
  "Media and PR experts",
  "Digital ads specialists",
  "UI/UX design",
  "Client service and account management",
] 

export default function TeamPage() {
  return (
    <main className="bg-white">
      <SectionHeading
        eyebrow="Our People"
        showFullClient={true}
        title="Senior expertise across strategy, creative, and delivery"
        description="Role-led structure built for quality control, accountability, and consistent execution."
        className=""
      />
      <section className="bg-slate-50">
        <Container className="py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {roles.map((r) => (
              <div
                key={r}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="text-sm font-semibold tracking-tight text-slate-950">
                  {r}
                </div>
                <div
                  className="mt-3 h-32 rounded-xl border border-slate-200 bg-slate-50"
                  aria-hidden
                />
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
            <div className="text-lg font-semibold tracking-tight text-slate-950">
              Built to deliver
            </div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">
              A multidisciplinary team structured to move from strategy to
              execution without losing quality, speed, or control.
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
