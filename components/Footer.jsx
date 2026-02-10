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

const services = [
  { title: "Strategy & Planning", link: "/service/strategy" },
  { title: "Production", link: "/service/production" },
  { title: "Marketing Communications", link: "/service/marketing" },
  { title: "Media Services", link: "/service/media" },
];

function Footer() {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

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
      className="bg-[#2B2B2B] text-white pt-24 pb-12 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFA205]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Logo color="white" />
            <p className="text-slate-400 leading-relaxed mb-8">
              At Adesa Media, we empower brands with creativity, strategy, and
              insights, delivering real value and lasting results.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#1877f2] hover:bg-[#1877f2]/10 transition-all duration-300"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#1da1f2] hover:bg-[#1da1f2]/10 transition-all duration-300"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#e1306c] hover:bg-[#e1306c]/10 transition-all duration-300"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#0a66c2] hover:bg-[#0a66c2]/10 transition-all duration-300"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-lg font-bold text-[#FFA205] mb-8 uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#services"
                  className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors group"
                >
                  <ChevronRight
                    size={12}
                    className="text-[#FFA205] group-hover:translate-x-1 transition-transform"
                  />
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors group"
                >
                  <ChevronRight
                    size={12}
                    className="text-[#FFA205] group-hover:translate-x-1 transition-transform"
                  />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors group"
                >
                  <ChevronRight
                    size={12}
                    className="text-[#FFA205] group-hover:translate-x-1 transition-transform"
                  />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors group"
                >
                  <ChevronRight
                    size={12}
                    className="text-[#FFA205] group-hover:translate-x-1 transition-transform"
                  />
                  Resource Hub
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors group"
                >
                  <ChevronRight
                    size={12}
                    className="text-[#FFA205] group-hover:translate-x-1 transition-transform"
                  />
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold text-[#FFA205] mb-8 uppercase tracking-widest">
              Our Services
            </h4>
            <div className="space-y-6">
              {services.map((service, index) => (
                <ul key={index} className="space-y-4">
                  <li>
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
                </ul>
              ))}
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-bold text-[#FFA205] mb-8 uppercase tracking-widest">
              Weekly Insights
            </h4>
            <p className="text-slate-400 mb-6">
              Join 5,000+ marketers receiving our weekly growth insights.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#FFA205] focus:outline-none focus:ring-2 focus:ring-[#FFA205]/30 transition-all"
                />
                <Mail
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500"
                  size={18}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-linear-to-r from-[#FFA205] to-[#FFC107] text-[#151E47] font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Subscribe <Send size={18} />
              </motion.button>
            </form>

            <div className="mt-10 pt-8 border-t border-white/10">
              <h5 className="text-sm font-bold text-[#FFA205] uppercase tracking-widest mb-4">
                Contact Directly
              </h5>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#FFA205] mt-1 shrink" />
                  <span className="text-slate-400 text-sm">
                    2, Isheri Road (2nd Floor), by Berger Roundabout, Ojodu
                    Berger, Lagos, 101233
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#FFA205] mt-1 shrink" />
                  <span className="text-slate-400 text-sm">
                    +234 701 234 5154
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#FFA205] mt-1 shrink" />
                  <span className="text-slate-400 text-sm">
                    info@adesahq.com
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
            <Link
              href="#"
              className="hover:text-white transition-colors relative group"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFA205] transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors relative group"
            >
              Terms of Service
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFA205] transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors relative group"
            >
              Cookie Settings
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFA205] transition-all group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
