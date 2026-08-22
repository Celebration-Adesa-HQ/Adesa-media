import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  MapPin,
} from "lucide-react";

import { Container } from "@/components/Container";
import {
  buildApplicationMailto,
  buildPositionMailto,
  getCareerListingsState,
} from "@/lib/careers";

import styles from "./careers.module.css";

function OpenPositions({ careers }) {
  const listingState = getCareerListingsState(careers.openPositions);

  return (
    <section id="open-positions" className="bg-white py-20 text-brand-blue sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <h2 className="max-w-md font-heading text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Open positions
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
              Every role published here is a real opportunity with Adesa Media.
            </p>
          </div>

          {listingState === "empty" ? (
            <div className="border-y border-brand-blue/15 py-10 sm:py-14">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-xl">
                  <BriefcaseBusiness
                    aria-hidden="true"
                    className="mb-7 text-brand-orange"
                    size={32}
                    strokeWidth={1.6}
                  />
                  <h3 className="font-heading text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                    No vacancies available at the moment.
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    You can still introduce yourself for future opportunities through our general application.
                  </p>
                </div>
                <Link
                  href="#general-application"
                  className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#243363] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-4"
                >
                  General application
                  <ArrowDown aria-hidden="true" size={17} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-brand-blue/15 border-y border-brand-blue/15">
              {careers.openPositions.map((position) => (
                <article key={position.id} className="py-8 sm:py-10">
                  <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600">
                        <span>{position.department}</span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin aria-hidden="true" size={15} />
                          {position.location}
                        </span>
                        <span>{position.employmentType}</span>
                      </div>
                      <h3 className="mt-4 font-heading text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                        {position.title}
                      </h3>
                      <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                        {position.summary}
                      </p>
                    </div>
                    <a
                      href={buildPositionMailto(
                        careers.applicationEmail,
                        position.title,
                      )}
                      className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-4"
                    >
                      Apply by email
                      <ArrowUpRight aria-hidden="true" size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function GeneralApplication({ careers }) {
  const mailto = buildApplicationMailto(
    careers.applicationEmail,
    careers.generalApplicationSubject,
    careers.generalApplicationBody,
  );

  return (
    <section
      id="general-application"
      className="bg-brand-orange py-20 text-brand-blue sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div>
            <h2 className="max-w-xl font-heading text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              There is always room for a strong introduction.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-brand-blue/80">
              Replace the placeholders, attach your CV, add a portfolio where relevant, and tell us how you could contribute.
            </p>
            <a
              href={mailto}
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#243363] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-brand-orange"
            >
              <Mail aria-hidden="true" size={18} />
              Open email application
            </a>
          </div>

          <div className="border-y border-brand-blue/25 py-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue/65">
              Before you send
            </p>
            <ol className="mt-7 space-y-6">
              <li className="flex gap-5">
                <span className="text-sm font-semibold tabular-nums">01</span>
                <span className="text-lg leading-7">Replace the desired-role placeholder in the email subject.</span>
              </li>
              <li className="flex gap-5">
                <span className="text-sm font-semibold tabular-nums">02</span>
                <span className="text-lg leading-7">Complete the prefilled details and explain how you could contribute.</span>
              </li>
              <li className="flex gap-5">
                <span className="text-sm font-semibold tabular-nums">03</span>
                <span className="text-lg leading-7">Attach your CV and include a portfolio link where relevant.</span>
              </li>
            </ol>
            <p className="mt-8 text-sm text-brand-blue/70">
              Applications are sent to {careers.applicationEmail}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function CareersPage({ careers, values }) {
  return (
    <main className="overflow-hidden bg-brand-blue">
      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-brand-blue text-white">
        <div
          aria-hidden="true"
          className={`${styles.heroRing} absolute -right-[13rem] top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border-[5rem] border-white/10 sm:-right-[8rem] sm:h-[46rem] sm:w-[46rem] sm:border-[7rem] lg:-right-[3rem] lg:h-[52rem] lg:w-[52rem]`}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-white/15"
        />
        <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-between py-14 sm:py-20">
          <div className="flex items-center justify-between gap-6 text-sm text-white/65">
            <span>Careers at Adesa Media</span>
            <span className="hidden sm:block">Lagos, Nigeria</span>
          </div>

          <div className="max-w-4xl py-16 sm:py-20">
            <h1 className="font-heading text-[clamp(3.7rem,10vw,6rem)] font-semibold leading-[0.92] tracking-[-0.04em]">
              Bring your
              <span className="block text-brand-orange">point of view.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              We bring strategy, creativity, media, and culture together. If that is where you do your best work, start the conversation.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#general-application"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange px-7 py-3.5 text-sm font-bold text-brand-dark transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-brand-blue"
              >
                Introduce yourself
                <ArrowDown aria-hidden="true" size={17} />
              </Link>
              <Link
                href="#open-positions"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-4 focus-visible:ring-offset-brand-blue"
              >
                View open positions
              </Link>
            </div>
          </div>

          <div className="flex items-end justify-between gap-8 text-sm text-white/65">
            <span className="max-w-xs">Ideas become stronger when different disciplines meet.</span>
            <ArrowDown aria-hidden="true" size={20} />
          </div>
        </Container>
      </section>

      <section className="bg-brand-light py-20 text-brand-blue sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <h2 className="max-w-md font-heading text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Where your craft can contribute
              </h2>
              <p className="mt-5 max-w-md leading-7 text-brand-blue/70">
                Our work crosses disciplines. These are the areas where prospective talent can introduce their experience and point of view.
              </p>
            </div>
            <ol className="divide-y divide-brand-blue/15 border-y border-brand-blue/15">
              {careers.disciplines.map((discipline, index) => (
                <li
                  key={discipline}
                  className="flex items-center gap-6 py-5 sm:gap-10 sm:py-6"
                >
                  <span className="w-8 text-sm tabular-nums text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-xl font-medium tracking-[-0.02em] sm:text-2xl">
                    {discipline}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <OpenPositions careers={careers} />

      <section className="bg-brand-blue py-20 text-white sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <h2 className="max-w-xl font-heading text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              The standards behind the work
            </h2>
            <p className="max-w-xl text-lg leading-8 text-white/70">
              How we work matters as much as what we make. These values guide collaboration, responsibility, and delivery across the agency.
            </p>
          </div>
          <ul className="mt-14 grid border-y border-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <li
                key={value}
                className="flex min-h-28 items-end border-b border-white/15 py-6 text-xl font-semibold sm:min-h-36 sm:px-6 sm:text-2xl"
              >
                <span className="mr-4 text-sm font-normal tabular-nums text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {value}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <GeneralApplication careers={careers} />
    </main>
  );
}
