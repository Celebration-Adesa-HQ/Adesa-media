"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Rocket, Heart, Star, Building } from "lucide-react";
import Link from "next/link";


/* Icon Mapper */
const icons = {
  Rocket,
  Heart,
  Star,
  Building,
};

const WhyChooseUsSection = () => {
  const data = siteConfig.whyChooseUs;

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
              {data.badge}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mt-3 mb-6">
              {data.title}
            </h2>

            <p className="text-lg text-brand-dark/80 leading-relaxed mb-8">
              {data.description}
            </p>

            <div className="space-y-8">
              {data.features.map((item, index) => {
                const Icon = icons[item.icon];

                return (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                      <Icon className="text-brand-orange" size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-brand-blue mb-2">
                        {item.title}
                      </h3>

                      <p className="text-brand-dark/75">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-black/5 relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center"
            >
              <Building size={20} />
            </motion.div>

            <h3 className="text-2xl font-bold text-brand-blue mb-8">
              {data.profile.title}
            </h3>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {data.profile.stats.map((stat, index) => {
                const Icon = icons[stat.icon];

                return (
                  <div
                    key={index}
                    className="p-5 bg-brand-light rounded-2xl border border-brand-orange/20 text-center"
                  >
                    <Icon
                      className="mx-auto mb-2 text-brand-orange"
                      size={22}
                    />

                    <h4 className="text-3xl font-extrabold text-brand-blue">
                      {stat.value}
                    </h4>

                    <p className="text-brand-dark/70 text-sm font-medium">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <Link
              href={data.cta.href}
              className="block bg-linear-to-r from-brand-orange to-brand-orange text-white font-semibold py-4 rounded-2xl text-lg shadow-lg text-center transition hover:opacity-90"
            >
              {data.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default WhyChooseUsSection;
