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
import { useState } from "react";
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
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const {
    brand,
    quickNavigation,
    services,
    newsletter,
    contact,
    legalLinks,
  } = siteConfig.homepage.footer;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#2B2B2B] text-white pt-24 pb-12 relative overflow-hidden z-0"
    >
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFA205]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Logo color={brand.logoColor} />
            <p className="text-slate-400 leading-relaxed mb-8">
              {brand.description}
            </p>
            <div className="flex gap-4">
              {brand.socialLinks.map((s, i) => {
                const Icon = iconMap[s.icon];
                return (
                  <Link
                    key={i}
                    href={
                      siteConfig.socialMedia[s.icon.toLowerCase()]?.href || "#"
                    }
                    className={`w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#FFA205] hover:bg-[#FFA205]/10 transition-all duration-300`}
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
              <Link
                href={siteConfig.socialMedia.tiktok?.href || "#"}
                className={`w-12 h-12 rounded-xl bg-brand-orange/90 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#FFA205] hover:bg-[#FFA205]/50 transition-all duration-300`}
              >
                <Image
                  src="/icons/tiktok.svg"
                  width={20}
                  height={20}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-lg font-bold text-[#FFA205] mb-8 uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-4">
              {quickNavigation.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-[#FFA205] group-hover:translate-x-1 transition-transform"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold text-[#FFA205] mb-8 uppercase tracking-widest">
              Our Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.link}
                    className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-[#FFA205] group-hover:translate-x-1 transition-transform"
                    />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-bold text-[#FFA205] mb-8 uppercase tracking-widest">
              {newsletter.title}
            </h4>
            <p className="text-slate-400 mb-6">{newsletter.description}</p>
            <motion.a
              href="https://www.linkedin.com/newsletters/the-adesa-lens-7352962421847638016/"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-linear-to-r from-[#FFA205] to-[#FFC107] text-[#151E47] font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Subscribe on LinkedIn <Send size={18} />
            </motion.a>

            <div className="mt-10 pt-8 border-t border-white/10">
              <h5 className="text-sm font-bold text-[#FFA205] uppercase tracking-widest mb-4">
                Contact Directly
              </h5>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#FFA205] mt-1 shrink" />
                  <span className="text-slate-400 text-sm">
                    {contact.address}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#FFA205] mt-1 shrink" />
                  <span className="text-slate-400 text-sm">
                    {contact.phone}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#FFA205] mt-1 shrink" />
                  <span className="text-slate-400 text-sm">
                    {contact.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>&copy; {currentYear} Adesa Media. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {legalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFA205] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
