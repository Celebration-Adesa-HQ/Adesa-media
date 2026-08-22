"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram, Facebook, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

const initialForm = (services) => ({
  firstName: "",
  lastName: "",
  email: "",
  service: services[0],
  message: "",
});

export default function ContactSection() {
  const { contact, socialMedia } = siteConfig;
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const defaultForm = useMemo(
    () => initialForm(contact.form.services),
    [contact.form.services],
  );

  const [formData, setFormData] = useState(defaultForm);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setFeedback(null);

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (!data.success) throw new Error(data.error || "Failed");

        setFeedback({ type: "success", message: "Message sent successfully" });
        setFormData(defaultForm);
      } catch (err) {
        console.error(err);
        setFeedback({ type: "error", message: "Send failed. Try again." });
      } finally {
        setIsLoading(false);
      }
    },
    [defaultForm, formData],
  );

  return (
    <motion.section
      id={contact.sectionId}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-[#070e24] text-white relative overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffa205] bg-[#ffa205]/15 px-4 py-1.5 rounded-full border border-[#ffa205]/30">
              {contact.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
              {contact.heading}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed">
              {contact.description}
            </p>

            <div className="space-y-6">
              {/* Address */}
              <InfoItem
                icon={<MapPin className="text-[#ffa205]" size={22} />}
                title={contact.address.title}
                content={contact.address.lines}
              />

              {/* Email */}
              <InfoItem
                icon={<Mail className="text-[#ffa205]" size={22} />}
                title={contact.email.title}
                content={[contact.email.value]}
              />

              {/* Phone */}
              <InfoItem
                icon={<Phone className="text-[#ffa205]" size={22} />}
                title={contact.phone.title}
                content={[contact.phone.value]}
              />
            </div>

            {/* Social */}
            <div className="mt-10">
              <p className="font-bold text-[#ffa205] uppercase tracking-widest text-xs mb-4">
                {contact.followLabel}
              </p>

              <div className="flex flex-wrap gap-3">
                <SocialLink
                  href={socialMedia.facebook.href}
                  label="Facebook"
                  icon={<Facebook size={18} />}
                />
                <SocialLink
                  href={socialMedia.linkedin.href}
                  label="LinkedIn"
                  icon={<Linkedin size={18} />}
                />
                <SocialLink
                  href={socialMedia.twitter.href}
                  label="Twitter"
                  icon={<Twitter size={18} />}
                />
                <SocialLink
                  href={socialMedia.instagram.href}
                  label="Instagram"
                  icon={<Instagram size={18} />}
                />
                <Link
                  href={socialMedia.tiktok.href}
                  aria-label="TikTok"
                  className="w-11 h-11 bg-white/5 border border-white/10 hover:bg-[#ffa205] hover:border-[#ffa205] rounded-xl flex items-center justify-center transition-all duration-200"
                >
                  <Image
                    src={socialMedia.tiktok.icon}
                    width={18}
                    height={18}
                    alt="TikTok"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-1/2">
            <div className="bg-[#0c1638] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                {contact.form.heading}
              </h3>

              {feedback && (
                <div
                  className={`p-4 rounded-2xl mb-6 text-sm font-medium ${
                    feedback.type === "success"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-red-500/20 text-red-300 border border-red-500/30"
                  }`}
                >
                  {feedback.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    placeholder={contact.form.fields.firstName}
                    onChange={handleChange}
                  />

                  <Input
                    name="lastName"
                    value={formData.lastName}
                    placeholder={contact.form.fields.lastName}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder={contact.form.fields.email}
                  onChange={handleChange}
                />

                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-[#070e24] border border-white/15 rounded-2xl text-slate-200 text-sm focus:border-[#ffa205] focus:outline-none transition-colors"
                  >
                    {contact.form.services.map((service) => (
                      <option key={service} value={service} className="bg-[#070e24] text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  placeholder={contact.form.fields.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-3.5 bg-[#070e24] border border-white/15 rounded-2xl text-slate-200 text-sm focus:border-[#ffa205] focus:outline-none transition-colors resize-none placeholder:text-slate-500"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#ffa205] text-[#070e24] font-bold py-4 rounded-2xl text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:bg-[#ffb733] hover:shadow-amber-500/35 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {isLoading ? (
                    <span className="inline-block animate-spin w-5 h-5 border-2 border-[#070e24] border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <span>{contact.form.submitLabel}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function InfoItem({ icon, title, content }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div>
        <h4 className="text-base font-bold text-white mb-0.5">{title}</h4>
        <p className="text-slate-300 text-sm leading-relaxed">
          {content.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

function SocialLink({ href, label, icon }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="w-11 h-11 bg-white/5 border border-white/10 hover:bg-[#ffa205] hover:border-[#ffa205] text-slate-300 hover:text-[#070e24] rounded-xl flex items-center justify-center transition-all duration-200"
    >
      {icon}
    </Link>
  );
}

function Input({ type = "text", name, value, placeholder, onChange }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required
      className="w-full px-5 py-3.5 bg-[#070e24] border border-white/15 rounded-2xl text-slate-200 text-sm focus:border-[#ffa205] focus:outline-none transition-colors placeholder:text-slate-500"
    />
  );
}

