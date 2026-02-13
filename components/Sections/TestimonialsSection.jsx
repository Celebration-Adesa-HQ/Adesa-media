"use client";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = siteConfig.homepage.testimonials;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading md:text-5xl font-bold text-center text-[#151E47] mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => {
                  const starValue = i + 1;
                  if (starValue <= testimonial.stars) {
                    return (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-current text-yellow-500"
                      />
                    );
                  } else if (
                    testimonial.stars % 1 !== 0 &&
                    starValue === Math.ceil(testimonial.stars)
                  ) {
                    return (
                      <div key={i} className="relative w-6 h-6">
                        <StarHalf className="w-full h-full text-yellow-500 fill-current" />
                      </div>
                    );
                  } else {
                    return <Star key={i} className="w-6 h-6 text-slate-300" />;
                  }
                })}
              </div>

              <h4 className="text-xl font-bold text-[#151E47] mb-2">
                {testimonial.title}
              </h4>
              <p className="text-[#2B2B2B]/80 leading-relaxed mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-3">
                {testimonial.image ? (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full border-3 border-[#FFA205] object-cover"
                  />
                ) : (
                  <div
                    className="w-14 h-14 rounded-full border-3 border-[#FFA205] bg-slate-100"
                    aria-hidden="true"
                  />
                )}
                <div>
                  <p className="font-semibold text-[#151E47]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#2B2B2B]/70">
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
