"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-brand-light py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div className="space-y-12">
            {/* TEXT */}
            <div className="max-w-2xl space-y-6">
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-brand-blue">
                Grow Your <span className="text-brand-orange">Brand</span> With Purpose
              </h1>

              <p className="text-xl text-brand-dark leading-relaxed">
                We create digital experiences that turn visitors into loyal
                customers. Data-driven strategies meet creative excellence.
              </p>

              <div className="flex gap-4 flex-wrap pt-2">
                <Link href="/contact" className="btn-primary">
                  Start Your Project
                </Link>
                <Link href="/work" className="btn-secondary">
                  See Our Work
                </Link>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-8 max-w-xl">
              <div className="stat">
                <div className="stat-number">250+</div>
                <div className="stat-label">Projects Completed</div>
              </div>

              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>

              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>

            {/* TRUST */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-brand-blue uppercase tracking-wider">
                Trusted by Industry Leaders
              </h3>
              <div className="flex gap-6 text-3xl text-slate-500">
                <i className="fab fa-microsoft" />
                <i className="fab fa-google" />
                <i className="fab fa-amazon" />
                <i className="fab fa-apple" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="hero-image bg-brand-blue rounded-3xl p-8 animate-float max-w-md w-full">
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <i className="fas fa-chart-line text-3xl text-brand-orange" />
                  <h3 className="text-2xl font-bold text-brand-blue">
                    Growth Analytics
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">
                        Organic Traffic
                      </span>
                      <span className="text-xl font-bold text-brand-orange">
                        280%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className="progress-bar h-3 rounded-full w-[85%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">
                        Conversion Rate
                      </span>
                      <span className="text-xl font-bold text-brand-orange">
                        150%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className="progress-bar h-3 rounded-full w-[70%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
