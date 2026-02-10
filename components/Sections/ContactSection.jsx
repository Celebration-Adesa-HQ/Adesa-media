"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram, Send } from "lucide-react";
import { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "Brand Strategy",
    message: "",
  });

  const handleChange = (
    e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      service: "Brand Strategy",
      message: "",
    });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-[#151E47] text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <span className="text-[#FFA205] font-bold tracking-widest uppercase text-sm bg-white/10 px-4 py-1 rounded-full inline-block">
              Contact Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Partner With Us Today
            </h2>

            <p className="text-blue-200 text-lg mb-12">
              We work with value-driven brands focused on growth, clarity, and long-term impact.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="text-[#FFA205]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Office Address</h4>
                  <p className="text-blue-200">
                    2, Isheri Road (2nd Floor)
                    <br />
                    By Berger Roundabout
                    <br />
                    Ojodu Berger, Lagos, 101233
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Mail className="text-[#FFA205]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email</h4>
                  <p className="text-blue-200">info@adesahq.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Phone className="text-[#FFA205]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Phone</h4>
                  <p className="text-blue-200">+234 701 234 5154</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <p className="font-bold text-[#FFA205] uppercase tracking-widest text-sm">
                Follow Us
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
                >
                  <Linkedin />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-8 md:p-10 rounded-3xl text-[#151E47] shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">
                Start the Conversation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-50 border rounded-2xl"
                  />
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-50 border rounded-2xl"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
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
                  <option>Brand Strategy</option>
                  <option>Marketing Communications</option>
                  <option>Media Planning</option>
                  <option>Digital Marketing</option>
                  <option>Integrated Campaigns</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us what you want to build"
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
                  Send Message <Send className="w-5 h-5" />
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
