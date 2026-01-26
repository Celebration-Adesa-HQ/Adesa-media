import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "How long does it take to see SEO results?",
    answer:
      "While initial technical improvements happen fast, organic growth usually takes 3-6 months to manifest significant ranking shifts. We provide monthly reporting so you can track the steady climb.",
  },
  {
    id: 2,
    question: "Do you offer customized packages?",
    answer:
      "Absolutely. Every business has unique goals and budgets. We build tailored roadmaps focusing on the services that will provide the highest immediate ROI for your specific situation.",
  },
  {
    id: 3,
    question: "Which social platforms are best for my brand?",
    answer:
      "This depends entirely on your target audience. We conduct a demographic analysis to determine where your potential customers spend most of their time before launching any campaigns.",
  },
  {
    id: 4,
    question: "Can you manage my existing Google Ads account?",
    answer:
      "Yes, we specialize in account audits and takeovers. We'll analyze your current performance, strip out waste, and optimize the structure to lower your Cost Per Acquisition (CPA).",
  },
];

function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(faqItems[0].id);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-linear-to-b from-[#F6EFEA] to-[#FFF8F3] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFA205]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#151E47]/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#FFA205] font-bold tracking-widest uppercase text-sm bg-white/60 px-4 py-1 rounded-full backdrop-blur-sm inline-block"
            >
              Clarification
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold text-[#151E47] mt-3 mb-6"
            >
              Got Questions? We Have Answers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 mb-8"
            >
              We believe in full transparency. Here are some of the most common
              questions our partners ask us.
            </motion.p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-[#151E47] border-2 border-[#FFA205] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Still Unsure? Talk to us
            </motion.a>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  openQuestion === item.id
                    ? "bg-linear-to-br from-white to-[#FFF8F3] shadow-lg border border-[#FFA205]/30"
                    : "bg-white shadow-sm border border-slate-100 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full flex justify-between items-center text-left p-6 focus:outline-none focus:ring-2 focus:ring-[#FFA205] focus:ring-opacity-50"
                >
                  <span className="text-lg font-bold text-[#151E47]">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openQuestion === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${openQuestion === item.id ? "text-[#FFA205]" : "text-slate-400"}`}
                  >
                    {openQuestion === item.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openQuestion === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2"
                    >
                      <p className="text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default FAQSection;
