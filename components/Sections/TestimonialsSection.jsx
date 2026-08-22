"use client";

import { useMemo } from "react";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = siteConfig.homepage.testimonials;

  const renderStars = useMemo(
    () => (stars) =>
      [...Array(5)].map((_, i) => {
        const starValue = i + 1;
        if (starValue <= stars) {
          return (
            <Star key={i} className="w-5 h-5 fill-current text-[#ffa205]" />
          );
        } else if (stars % 1 !== 0 && starValue === Math.ceil(stars)) {
          return (
            <div key={i} className="relative w-5 h-5">
              <StarHalf className="w-full h-full text-[#ffa205] fill-current" />
            </div>
          );
        } else {
          return <Star key={i} className="w-5 h-5 text-white/20" />;
        }
      }),
    [],
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-[#070e24] text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffa205] bg-[#ffa205]/15 px-4 py-1.5 rounded-full border border-[#ffa205]/30">
            Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="p-8 rounded-3xl border border-white/10 bg-[#0c1638] flex flex-col justify-between hover:border-[#ffa205]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              <div>
                <div className="flex text-[#ffa205] mb-5">
                  {renderStars(testimonial.stars)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {testimonial.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                {testimonial.image ? (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-[#ffa205] object-cover"
                  />
                ) : (
                  <div
                    className="w-12 h-12 rounded-full border-2 border-[#ffa205] bg-white/10 flex items-center justify-center font-bold text-[#ffa205]"
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-bold text-sm text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

