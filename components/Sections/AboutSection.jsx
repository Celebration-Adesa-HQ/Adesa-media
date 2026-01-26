"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Eye,
  Heart,
  Flame,
  Award,
  Users,
  Target,
  Zap,
} from "lucide-react";
import Image from "next/image";

const specialties = [
  "Branding & Strategy",
  "Digital Management",
  "Social Media Marketing",
  "OOH Advertising",
  "Content Production",
  "Influencer Marketing",
  "Media Buying",
  "Experiential Events",
];

const coreValues = [
  {
    icon: <Lightbulb className="w-6 h-6 text-[#FFA205]" />,
    title: "Innovation First",
    description:
      "We pioneer cutting-edge strategies that redefine industry standards.",
  },
  {
    icon: <Eye className="w-6 h-6 text-blue-600" />,
    title: "Total Clarity",
    description: "Transparent processes and measurable results at every stage.",
  },
  {
    icon: <Heart className="w-6 h-6 text-emerald-600" />,
    title: "Integrity",
    description: "Ethical practices and honest partnerships that build trust.",
  },
  {
    icon: <Flame className="w-6 h-6 text-purple-600" />,
    title: "Excellence",
    description: "Uncompromising quality in every deliverable and interaction.",
  },
];

const teamMembers = [
  {
    initials: "AM",
    name: "Alex Morgan",
    role: "Creative Director",
    color: "from-[#151E47] to-[#2A3B7F]",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
  },
  {
    initials: "JT",
    name: "Jamie Taylor",
    role: "Strategy Lead",
    color: "from-[#FFA205] to-[#FFC107]",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
  },
  {
    initials: "RP",
    name: "Riley Park",
    role: "Design Director",
    color: "from-[#4F46E5] to-[#7C3AED]",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300",
  },
  {
    initials: "KL",
    name: "Kai Lee",
    role: "Tech Lead",
    color: "from-[#0EA5E9] to-[#3B82F6]",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300",
  },
];

function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-linear-to-b from-white via-[#FFF8F3] to-[#F6EFEA] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#FFA205] to-transparent opacity-20" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FFA205]/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#FFA205] font-bold tracking-widest font-body uppercase text-sm bg-white/50 px-4 py-1 rounded-full backdrop-blur-sm"
          >
            Defining a New Era of Media
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-heading font-bold text-[#151E47] mt-6 mb-8 leading-tight"
          >
            Where Creativity Meets Strategy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto font-body"
          >
            A subsidiary of Adesa HQ, where innovation, strategic insight, and
            storytelling converge to transform businesses.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Column - Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#FFA205]/10 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#FFA205]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#151E47]">
                    Our Mission
                  </h3>
                  <p className="text-slate-600 mt-1">
                    To empower businesses with dynamic solutions that ignite
                    growth, captivate audiences, and deliver exceptional results
                    through strategic innovation.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100/50 rounded-2xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#151E47]">
                    Our Vision
                  </h3>
                  <p className="text-slate-600 mt-1">
                    To cultivate a collaborative ecosystem where creativity and
                    strategic insight converge seamlessly, redefining how
                    businesses connect with their audiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl h-80"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                  alt="Team Collaboration"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">Team Collaboration</p>
                  <p className="text-sm opacity-80">Strategy Session</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl h-80 mt-12"
              >
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
                  alt="Client Meeting"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">Client Partnership</p>
                  <p className="text-sm opacity-80">Growth Planning</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-15 left-30 md:-right-12 max-sm:mt-10 bg-linear-to-br from-[#FFA205] to-[#FF8C00] p-8 rounded-3xl shadow-2xl max-w-xs border-2 border-white/20"
            >
              <Award className="w-10 h-10 text-white mb-3" />
              <p className="text-white font-bold text-4xl mb-1">3+</p>
              <p className="text-white/90 font-medium">
                Years of Marketing Innovation
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#151E47] mb-4">
              What Defines Our DNA
            </h2>
            <p className="text-lg text-slate-600">
              The principles that guide every decision and interaction at Adesa
              Media
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#151E47] mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-[#151E47] mb-4"
          >
            Our Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Meet the visionaries who blend creativity, strategy, and technology
            to drive exceptional results for our clients
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-100"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0  bg-linear-to-t mt-48 h-12 ${member.color} opacity-90`}
                />
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <p className="font-bold text-xl">{member.name}</p>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>
              </div>

              <div className="p-6 text-center bg-white">
                <div className="inline-block p-5 rounded-full bg-linear-to-br from-[#FFA205] to-[#FF6B00] text-white font-bold text-xl items-center justify-center mx-auto mb-4 shadow-lg">
                  {member.initials}
                </div>
                <h4 className="text-xl font-bold text-[#151E47]">
                  {member.name}
                </h4>
                <p className="text-slate-600 mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#151E47] to-[#2A3B7F] rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-10" />
          
          <Users className="w-16 h-16 text-[#FFA205] mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Brand?</h3>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Let's create something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-[#FFA205] to-[#FFC107] text-[#151E47] font-bold text-lg py-5 px-10 rounded-2xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
          >
            Start Your Growth Journey
          </motion.a>
        </motion.div> */}
      </div>
    </motion.section>
  );
}

export default AboutSection;
