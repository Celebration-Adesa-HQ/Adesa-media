"use client";

import { SectionHeading } from "@/components/SectionHeading";


export default function ApproachPage() {

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-blue text-brand-dark dark:text-white font-body">
        <SectionHeading eyebrow={"Our approach"} title={"Collaborative, strategic, and accountable"} description={"A process designed to move quickly without losing rigor—built around shared goals, strong craft, and measurable outcomes."} showFullClient />
      {/* Section */}
      <section className="min-h-screen flex items-center bg-brand-orange justify-center p-6 md:p-12">
        <div className="max-w-6xl w-full mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary dark:text-primary tracking-tight">
              How We Do This
            </h1>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-black/10 dark:bg-white/10 p-px">
              <div className="bg-primary p-8 md:p-12 lg:p-16 min-h-80 flex flex-col justify-start">
                <span className="text-6xl md:text-7xl font-bold text-white mb-4 leading-none">
                  01
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Co-Creation
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md">
                  We actively involve our clients in the ideation and creation
                  process, ensuring that the solutions we develop are not only
                  aligned with their objectives, but truly reflect their vision
                  and unlock meaningful results.
                </p>
              </div>
              <div className="bg-primary p-8 md:p-12 lg:p-16 min-h-[320px] flex flex-col justify-start">
                <span className="text-6xl md:text-7xl font-bold text-white mb-4 leading-none">
                  02
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Creative Storytelling
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md">
                  We transform ideas into compelling narratives that connect
                  with people on an emotional level, translating brand messages
                  into stories that inspire, engage, and drive action.
                </p>
              </div>
              <div className="bg-primary p-8 md:p-12 lg:p-16 min-h-[320px] flex flex-col justify-start">
                <span className="text-6xl md:text-7xl font-bold text-white mb-4 leading-none">
                  03
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Empathy
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md">
                  We take the time to understand your audience, their needs,
                  motivations, and pain points, so we can create experiences and
                  communications that truly resonate and deliver real value.
                </p>
              </div>
              <div className="bg-primary p-8 md:p-12 lg:p-16 min-h-[320px] flex flex-col justify-start">
                <span className="text-6xl md:text-7xl font-bold text-white mb-4 leading-none">
                  04
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Data-Driven
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md">
                  We rely on insights, not assumptions, using data to inform our
                  decisions, optimise performance, and ensure every initiative
                  delivers measurable impact and meaningful growth.
                </p>
              </div>
            </div>
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-brand-blue dark:bg-background-dark rounded-full items-center justify-center text-center shadow-lg border-4 border-primary z-10">
              <span className="text-primary font-extrabold text-lg md:text-xl leading-tight px-4">
                OUR
                <br />
                APPROACH
              </span>
            </div>
            <div className="md:hidden flex my-4 w-full justify-center">
              <div className="w-24 h-24 bg-background-light dark:bg-background-dark rounded-full flex items-center justify-center text-center shadow-md border-2 border-primary">
                <span className="text-primary font-extrabold text-xs leading-tight">
                  OUR
                  <br />
                  APPROACH
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
