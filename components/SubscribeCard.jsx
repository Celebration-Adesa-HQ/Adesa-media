"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function SubscribeCard({
  title,
  description,
  href,
  buttonText = "Subscribe",
  icon = true,
  className = "",
}) {
    const { newsletter } = siteConfig.homepage.footer;
  return (
    <div className={className}>
      <h4 className="text-lg font-bold text-[#FFA205] mb-8 uppercase tracking-widest">
        {title || newsletter.title}
      </h4>

      <p className="text-slate-400 mb-6">{description || newsletter.description}</p>

      <motion.a
        href={href || newsletter.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="
          w-full
          bg-linear-to-r from-[#FFA205] to-[#FFC107]
          text-[#151E47]
          font-bold
          py-4
          rounded-xl
          hover:shadow-lg hover:shadow-orange-500/20
          transition-all duration-300
          flex items-center justify-center gap-2
          cursor-pointer
        "
      >
        {buttonText}

        {icon && <Send size={18} />}
      </motion.a>
    </div>
  );
}
