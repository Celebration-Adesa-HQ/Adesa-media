"use client";

import { useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

// Lazy-load framer-motion
const MotionSection = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.section),
  { ssr: false },
);

// Lazy-load icons (tree-shaken)
const MapPin = dynamic(() => import("lucide-react").then((m) => m.MapPin));
const Mail = dynamic(() => import("lucide-react").then((m) => m.Mail));
const Phone = dynamic(() => import("lucide-react").then((m) => m.Phone));
const Linkedin = dynamic(() => import("lucide-react").then((m) => m.Linkedin));
const Twitter = dynamic(() => import("lucide-react").then((m) => m.Twitter));
const Instagram = dynamic(() =>
  import("lucide-react").then((m) => m.Instagram),
);
const Facebook = dynamic(() =>
  import("lucide-react").then((m) => m.Facebook),
);
const Send = dynamic(() => import("lucide-react").then((m) => m.Send));

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
  const [feedback, setFeedback] = useState(null); // { type: "success"|"error", message: string }

  // Stable initial state
  const defaultForm = useMemo(
    () => initialForm(contact.form.services),
    [contact.form.services],
  );

  const [formData, setFormData] = useState(defaultForm);

  // Stable change handler
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
    <MotionSection
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

            <p className="text-blue-200 text-lg mb-12">{contact.description}</p>

            <div className="space-y-8">
              {/* Address */}
              <InfoItem
                icon={<MapPin className="text-[#FFA205]" />}
                title={contact.address.title}
                content={contact.address.lines}
              />

              {/* Email */}
              <InfoItem
                icon={<Mail className="text-[#FFA205]" />}
                title={contact.email.title}
                content={[contact.email.value]}
              />

              {/* Phone */}
              <InfoItem
                icon={<Phone className="text-[#FFA205]" />}
                title={contact.phone.title}
                content={[contact.phone.value]}
              />
            </div>

            {/* Social */}
            <div className="mt-12 flex items-center gap-6">
              <p className="font-bold text-[#FFA205] uppercase tracking-widest text-sm">
                {contact.followLabel}
              </p>

              <div className="flex gap-4">
                <SocialLink
                  href={socialMedia.facebook.href}
                  label=" Facebook"
                  icon={<Facebook />}
                />
                <SocialLink
                  href={socialMedia.linkedin.href}
                  label="LinkedIn"
                  icon={<Linkedin />}
                />

                <SocialLink
                  href={socialMedia.twitter.href}
                  label="Twitter"
                  icon={<Twitter />}
                />

                <SocialLink
                  href={socialMedia.instagram.href}
                  label="Instagram"
                  icon={<Instagram />}
                />

                <Link
                  href={socialMedia.tiktok.href}
                  aria-label="TikTok"
                  className="w-12 h-12 hover:bg-brand-orange/60 bg-brand-orange/90 rounded-full flex items-center justify-center"
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

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border rounded-2xl"
                >
                  {contact.form.services.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  placeholder={contact.form.fields.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-slate-50 border rounded-2xl resize-none"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#FFA205] text-[#151E47] font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <svg
                      className="w-5 h-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                  ) : (
                    <>
                      {contact.form.submitLabel}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

/* -------------------------------- */
/* Reusable Subcomponents */
/* -------------------------------- */

function InfoItem({ icon, title, content }) {
  return (
    <div className="flex items-start gap-6">
      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
        {icon}
      </div>

      <div>
        <h4 className="text-xl font-bold mb-1">{title}</h4>

        <p className="text-blue-200">
          {content.map((line) => (
            <span key={line}>
              {line}
              <br />
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
      className="w-12 h-12 hover:bg-brand-orange bg-white/10 rounded-full flex items-center justify-center"
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
      className="w-full px-5 py-4 bg-slate-50 border rounded-2xl"
    />
  );
}
