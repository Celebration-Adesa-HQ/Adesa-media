import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "What does Adesa Media do?",
    answer:
      "Adesa Media runs end-to-end marketing services. Strategy and planning. Production. Marketing communications. Media buying and management. The focus stays on growth, audience connection, and measurable results.",
  },
  {
    id: 2,
    question: "What industries does Adesa Media work with?",
    answer:
      "Finance. Insurance. FMCG. Automotive. Real estate. Healthcare. Alcohol and beverage brands. The team works across startups, growing businesses, and large enterprises.",
  },
  {
    id: 3,
    question: "What makes Adesa Media different?",
    answer:
      "Applied insight. Deep sector understanding. Strong execution. Clear strategy. Fast delivery. Every activity ties back to a defined business objective.",
  },
  {
    id: 4,
    question: "How does Adesa Media approach projects?",
    answer:
      "Projects follow co-creation, creative storytelling, empathy for the audience, and data-led decisions. Clients stay involved from idea stage to delivery.",
  },
  {
    id: 5,
    question: "Does Adesa Media handle media buying and verification?",
    answer:
      "Yes. Media buying, monitoring, and verification across TV, radio, OOH, print, and digital. Performance tracking uses tools like MediaStar, AMPS, and MediaXpress.",
  },
  {
    id: 6,
    question: "What digital marketing services are offered?",
    answer:
      "Social media management. Community building. Digital ads. Media planning. Technology integration. Digital commerce. Tools include Google, Mobihunter, and Sprout Social.",
  },
  {
    id: 7,
    question: "Who are some brands Adesa Media has worked with?",
    answer:
      "FirstBank. Leadway. WEMA Bank ALAT. FCMB Flexx. Toyota Nigeria. Mikano Motors. Enterprise Life. Greenwich Capital. May and Baker. Health Partners HMO.",
  },
  {
    id: 8,
    question: "How can brands contact or partner with Adesa Media?",
    answer:
      "Office at 2 Isheri Road, Ojodu Berger, Lagos. Phone +234 701 234 5154. Email info@adesahq.com. Partnerships focus on long-term growth and shared goals.",
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
      className="py-24 bg-brand-orange relative overflow-hidden z-0"
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
              className="text-brand-blue font-bold tracking-widest uppercase text-sm bg-white/60 px-4 py-1 rounded-full backdrop-blur-sm inline-block"
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
              href="/contact"
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
