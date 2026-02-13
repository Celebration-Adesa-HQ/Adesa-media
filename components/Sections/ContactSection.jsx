"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ContactSection() {
  const { contact, socialMedia } = siteConfig;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: contact.form.services[0],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      service: contact.form.services[0],
      message: "",
    });
  };

  return (
    <motion.section
      id={contact.sectionId}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-[#151E47] text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* Left */}
          <div className="lg:w-1/2">

            <span className="text-[#FFA205] font-bold tracking-widest uppercase text-sm bg-white/10 px-4 py-1 rounded-full inline-block">
              {contact.badge}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              {contact.heading}
            </h2>

            <p className="text-blue-200 text-lg mb-12">
              {contact.description}
            </p>

            <div className="space-y-8">

              {/* Address */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="text-[#FFA205]" />
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-1">
                    {contact.address.title}
                  </h4>

                  <p className="text-blue-200">
                    {contact.address.lines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Mail className="text-[#FFA205]" />
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-1">
                    {contact.email.title}
                  </h4>

                  <p className="text-blue-200">
                    {contact.email.value}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Phone className="text-[#FFA205]" />
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-1">
                    {contact.phone.title}
                  </h4>

                  <p className="text-blue-200">
                    {contact.phone.value}
                  </p>
                </div>
              </div>

            </div>

            {/* Social */}
            <div className="mt-12 flex items-center gap-6">

              <p className="font-bold text-[#FFA205] uppercase tracking-widest text-sm">
                {contact.followLabel}
              </p>

              <div className="flex gap-4">

                <Link
                  href={socialMedia.linkedin.href}
                  aria-label="LinkedIn"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
                >
                  <Linkedin />
                </Link>

                <Link
                  href={socialMedia.twitter.href}
                  aria-label="Twitter"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
                >
                  <Twitter />
                </Link>

                <Link
                  href={socialMedia.instagram.href}
                  aria-label="Instagram"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
                >
                  <Instagram />
                </Link>

                <Link
                  href={socialMedia.tiktok.href}
                  aria-label="TikTok"
                  className="w-12 h-12 bg-brand-orange/90 rounded-full flex items-center justify-center"
                >
                  <Image
                    src={socialMedia.tiktok.icon}
                    width={20}
                    height={20}
                    alt="TikTok"
                  />
                </Link>

              </div>
            </div>

          </div>

          {/* Right */}
          <div className="lg:w-1/2">

            <div className="bg-white p-8 md:p-10 rounded-3xl text-[#151E47] shadow-2xl">

              <h3 className="text-3xl font-bold mb-8">
                {contact.form.heading}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <input
                    name="firstName"
                    placeholder={contact.form.fields.firstName}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-50 border rounded-2xl"
                  />

                  <input
                    name="lastName"
                    placeholder={contact.form.fields.lastName}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-50 border rounded-2xl"
                  />

                </div>

                <input
                  type="email"
                  name="email"
                  placeholder={contact.form.fields.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border rounded-2xl"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border rounded-2xl"
                >
                  {contact.form.services.map((service) => (
                    <option key={service}>
                      {service}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  placeholder={contact.form.fields.message}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-slate-50 border rounded-2xl resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-[#FFA205] text-[#151E47] font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-3"
                >
                  {contact.form.submitLabel}
                  <Send className="w-5 h-5" />
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default ContactSection;
