"use client";

import { motion } from "framer-motion";
import { Rocket, Heart, Star, Building } from "lucide-react";
import Link from "next/link";

function WhyChooseUsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-linear-to-br from-brand-light to-white"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">
              Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mt-3 mb-6">
              A Leading Full-Service Agency
            </h2>

            <p className="text-lg text-brand-dark/80 leading-relaxed mb-8">
              Adesa Media builds brands through strategy, creativity, and
              execution. We help organizations grow, connect, and win in
              competitive markets.
            </p>

            <div className="space-y-8">
              {/* Insight */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                  <Rocket className="text-brand-orange" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-blue mb-2">
                    Applied Insight
                  </h3>
                  <p className="text-brand-dark/75">
                    We build strategies from real market research, audience
                    data, and competitive analysis.
                  </p>
                </div>
              </div>

              {/* Excellence */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                  <Star className="text-brand-orange" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-blue mb-2">
                    Executional Excellence
                  </h3>
                  <p className="text-brand-dark/75">
                    From media buying to production and digital campaigns, every
                    project meets high delivery standards.
                  </p>
                </div>
              </div>

              {/* Partnership */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                  <Heart className="text-brand-orange" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-blue mb-2">
                    True Partnership
                  </h3>
                  <p className="text-brand-dark/75">
                    We co-create with clients and stay invested in long-term
                    business success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-black/5 relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center"
            >
              <Building size={20} />
            </motion.div>

            <h3 className="text-2xl font-bold text-brand-blue mb-8">
              Our Profile
            </h3>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {/* Team */}
              <div className="p-5 bg-brand-light rounded-2xl border border-brand-orange/20 text-center">
                <Heart className="mx-auto mb-2 text-brand-orange" size={22} />
                <h4 className="text-3xl font-extrabold text-brand-blue">21+</h4>
                <p className="text-brand-dark/70 text-sm font-medium">
                  Strategic Experts
                </p>
              </div>

              {/* Brands */}
              <div className="p-5 bg-brand-light rounded-2xl border border-brand-orange/20 text-center">
                <Building
                  className="mx-auto mb-2 text-brand-orange"
                  size={22}
                />
                <h4 className="text-3xl font-extrabold text-brand-blue">25+</h4>
                <p className="text-brand-dark/70 text-sm font-medium">
                  Major Brands
                </p>
              </div>

              {/* Campaigns */}
              <div className="p-5 bg-brand-light rounded-2xl border border-brand-orange/20 text-center">
                <Rocket className="mx-auto mb-2 text-brand-orange" size={22} />
                <h4 className="text-3xl font-extrabold text-brand-blue">
                  300+
                </h4>
                <p className="text-brand-dark/70 text-sm font-medium">
                  Campaigns Delivered
                </p>
              </div>

              {/* Experience */}
              <div className="p-5 bg-brand-light rounded-2xl border border-brand-orange/20 text-center">
                <Star className="mx-auto mb-2 text-brand-orange" size={22} />
                <h4 className="text-3xl font-extrabold text-brand-blue">10+</h4>
                <p className="text-brand-dark/70 text-sm font-medium">
                  Years Experience
                </p>
              </div>
            </div>

            <Link
              href="#contact"
              className="block bg-linear-to-r from-brand-orange to-brand-orange text-white font-semibold py-4 rounded-2xl text-lg shadow-lg text-center transition hover:opacity-90"
            >
              Partner With Adesa Media
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default WhyChooseUsSection;
