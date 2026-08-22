"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  Send,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Logo from "./Logo/Logo";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const iconMap = {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const {
    brand,
    quickNavigation,
    services,
    newsletter,
    contact,
    legalLinks,
  } = siteConfig.homepage.footer;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#050b1d] text-white pt-20 pb-12 relative overflow-hidden z-0 border-t border-white/10"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div>
              <Logo color="white" />
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ffa205]/80">
                A Subsidiary of{" "}
                <a
                  href="https://adesahq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffa205] hover:text-amber-300 underline underline-offset-2 transition-colors"
                >
                  Adesa HQ
                </a>
              </p>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {brand.description}
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {brand.socialLinks.map((s, i) => {
                const Icon = iconMap[s.icon] || Linkedin;
                return (
                  <Link
                    key={i}
                    href={
                      siteConfig.socialMedia[s.icon.toLowerCase()]?.href || "#"
                    }
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#ffa205] hover:border-[#ffa205]/40 hover:bg-[#ffa205]/10 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
              <Link
                href={siteConfig.socialMedia.tiktok?.href || "#"}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#ffa205] hover:border-[#ffa205]/40 hover:bg-[#ffa205]/10 transition-all duration-200"
              >
                <Image
                  src="/icons/tiktok.svg"
                  width={16}
                  height={16}
                  alt="TikTok"
                />
              </Link>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-bold text-[#ffa205] mb-6 uppercase tracking-[0.2em]">
              Quick Navigation
            </h3>
            <ul className="space-y-3">
              {quickNavigation.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-[#ffa205] text-sm flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#ffa205] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xs font-bold text-[#ffa205] mb-6 uppercase tracking-[0.2em]">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.link}
                    className="text-slate-300 hover:text-[#ffa205] text-sm flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#ffa205] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Direct Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold text-[#ffa205] mb-3 uppercase tracking-[0.2em]">
                {newsletter.title}
              </h3>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {newsletter.description}
              </p>
              <a
                href={newsletter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffa205] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#070e24] shadow-md shadow-amber-500/20 hover:bg-[#ffb733] transition-all"
              >
                <span>Subscribe on LinkedIn</span>
                <Send size={14} />
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <MapPin size={15} className="text-[#ffa205] shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Phone size={15} className="text-[#ffa205] shrink-0" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Mail size={15} className="text-[#ffa205] shrink-0" />
                <span>{contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
            <p>&copy; {currentYear} Adesa Media. All rights reserved.</p>
            <span className="hidden sm:block text-white/20">·</span>
            <p>
              A subsidiary of{" "}
              <a
                href="https://adesahq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffa205] hover:text-amber-300 transition-colors"
              >
                Adesa HQ
              </a>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="hover:text-[#ffa205] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

