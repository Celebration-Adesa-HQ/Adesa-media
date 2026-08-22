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
    <div
      className={`
        w-full
        max-w-xl
        mx-auto
        px-6
        sm:px-8
        ${className}
      `}
    >
      <div className="w-full bg-[#0c1638] border border-white/10 rounded-3xl p-8 sm:p-10 text-center shadow-2xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

        <span className="text-xs font-bold text-[#ffa205] uppercase tracking-[0.2em] bg-[#ffa205]/10 px-3.5 py-1.5 rounded-full border border-[#ffa205]/20 inline-block mb-4">
          Newsletter
        </span>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          {title || newsletter.title}
        </h3>

        <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
          {description || newsletter.description}
        </p>

        <motion.a
          href={href || newsletter.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="
            w-full
            sm:w-auto
            inline-flex
            items-center
            justify-center
            gap-2.5
            bg-[#ffa205]
            text-[#070e24]
            font-bold
            px-8
            py-4
            rounded-2xl
            shadow-lg
            shadow-amber-500/20
            hover:bg-[#ffb733]
            hover:shadow-amber-500/40
            transition-all
            duration-200
            text-sm
            sm:text-base
          "
        >
          <span>{buttonText}</span>
          {icon && <Send size={16} />}
        </motion.a>
      </div>
    </div>
  );
}

