"use client";

import { motion } from "framer-motion";

const steps = [
  { label: "Brief", color: "bg-primary" },
  { label: "Research", color: "bg-teal-process" },
  { label: "Strategy", color: "bg-green-process" },
  { label: "Media Choice", color: "bg-sage-process" },
  { label: "Deployment", color: "bg-dark-gray-process" },
  { label: "Evaluation", color: "bg-mid-gray-process" },
];

export default function ChevronSteps() {
  return (
    <div className="pt-8 flex flex-wrap gap-4 chevron-container">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className={`chevron ${step.color} text-white shadow-sm px-6 py-3 rounded-lg cursor-pointer`}
          whileHover={{ y: -5, scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
        >
          {step.label}
        </motion.div>
      ))}
    </div>
  );
}
