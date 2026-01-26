import { motion } from "framer-motion";
import { Rocket, Heart, Star, Building } from "lucide-react";

function WhyChooseUsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-linear-to-br from-[#F6EFEA] to-white"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#FFA205] font-bold tracking-widest font-heading uppercase text-sm">
              Our Edge
            </span>
            <h2 className="text-4xl font-body text-brand-orange md:text-5xl font-bold text-[#151E47] mt-3 mb-6">
              Why Adesa Media Stands Out
            </h2>
            <p className="text-lg text-[#2B2B2B]/85 leading-relaxed mb-8">
              We combine creativity, technology, and data to deliver exceptional
              digital marketing solutions that drive real business results.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                  <Rocket className="text-[#FFA205]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#151E47] mb-2">
                    Data-Driven Decisions
                  </h3>
                  <p className="text-[#2B2B2B]/75">
                    We use advanced analytics to optimize campaigns and maximize
                    your ROI based on real human behavior.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                  <Heart className="text-[#FFA205]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#151E47] mb-2">
                    Customer-Focused Approach
                  </h3>
                  <p className="text-[#2B2B2B]/75">
                    Your success is our priority - we work as an extension of
                    your team, not just another vendor.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                  <Star className="text-[#FFA205]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#151E47] mb-2">
                    Proven Expertise
                  </h3>
                  <p className="text-[#2B2B2B]/75">
                    Years of experience working with businesses of all sizes
                    across dozens of competitive industries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-[#FFA205] text-white rounded-full flex items-center justify-center"
            >
              <Building size={20} />
            </motion.div>

            <h3 className="text-2xl font-bold text-[#151E47] mb-8">
              Our Impact
            </h3>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-5 bg-orange-50/60 rounded-2xl border border-orange-100 text-center">
                <Rocket className="mx-auto mb-2 text-[#FFA205]" size={22} />
                <h4 className="text-3xl font-extrabold text-[#151E47]">250+</h4>
                <p className="text-slate-500 text-sm font-medium">
                  Campaigns Launched
                </p>
              </div>

              <div className="p-5 bg-blue-50/60 rounded-2xl border border-blue-100 text-center">
                <Heart className="mx-auto mb-2 text-blue-600" size={22} />
                <h4 className="text-3xl font-extrabold text-[#151E47]">180+</h4>
                <p className="text-slate-500 text-sm font-medium">
                  Brands Served
                </p>
              </div>

              <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-center">
                <Star className="mx-auto mb-2 text-emerald-600" size={22} />
                <h4 className="text-3xl font-extrabold text-[#151E47]">12+</h4>
                <p className="text-slate-500 text-sm font-medium">
                  Industries Covered
                </p>
              </div>

              <div className="p-5 bg-purple-50/60 rounded-2xl border border-purple-100 text-center">
                <Building className="mx-auto mb-2 text-purple-600" size={22} />
                <h4 className="text-3xl font-extrabold text-[#151E47]">5+</h4>
                <p className="text-slate-500 text-sm font-medium">
                  Years Experience
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="block bg-linear-to-r from-[#FFA205] to-[#FFC107] text-white font-semibold py-4 rounded-2xl text-lg shadow-lg text-center transition-all duration-300 hover:shadow-orange-200/50"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default WhyChooseUsSection;