import { motion } from "framer-motion";

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We dive deep into your brand identity, target demographics, and competitors to build a strategic foundation.",
      rotation: "rotate-3",
      delay: 0.2,
    },
    {
      number: "02",
      title: "Execution",
      description:
        "Our experts implement cross-channel strategies using best-in-class tools and creative assets.",
      rotation: "-rotate-3",
      delay: 0.4,
      className: "md:mt-12",
    },
    {
      number: "03",
      title: "Scale",
      description:
        "Data insights drive continuous optimization, ensuring your brand grows sustainably over the long term.",
      rotation: "rotate-6",
      delay: 0.6,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-linear-to-b from-white to-[#F6EFEA]"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#151E47] mb-6">
            Our Workflow
          </h2>
          <p className="text-lg text-slate-600 font-body">
            We follow a rigorous, transparent process to ensure every project
            delivers maximum impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: step.delay }}
              className={`text-center bg-white p-10 rounded-3xl border border-slate-100 relative hover:shadow-xl transition-all duration-300 ${step.className || ""}`}
            >
              <div
                className={`w-20 h-20 rounded-2xl bg-linear-to-r from-[#FFA205] to-[#FFC107] flex items-center justify-center mx-auto mb-8 ${step.rotation}`}
              >
                <span className="text-3xl font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#151E47] mb-4">
                {step.title}
              </h3>
              <p className="text-[#2B2B2B]/75 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ProcessSection;