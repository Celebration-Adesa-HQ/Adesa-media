"use client";

import React from 'react';
import { Search, Megaphone, FileText, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const WhatWeDoSection = () => {
  const services = [
    {
      id: 1,
      icon: <Search className="text-white w-8 h-8" />,
      title: 'Search Engine Optimization',
      description: 'Boost your visibility with cutting-edge SEO strategies that drive organic traffic and improve search rankings.',
      features: ['On-page optimization', 'Technical SEO audits', 'Content strategy & creation']
    },
    {
      id: 2,
      icon: <Megaphone className="text-white w-8 h-8" />,
      title: 'Paid Advertising',
      description: 'Maximize ROI with targeted paid campaigns across Google, Facebook, Instagram, and other platforms.',
      features: ['Google Ads & PPC', 'Social media ads', 'Conversion tracking']
    },
    {
      id: 3,
      icon: <FileText className="text-white w-8 h-8" />,
      title: 'Content Marketing',
      description: 'Engage your audience with high-quality, valuable content that builds trust and drives conversions.',
      features: ['Blog & article writing', 'Video content strategy', 'Email marketing']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#151E47] mb-6 font-heading">What We Do</h2>
          <p className="text-lg text-[#2B2B2B]/85 leading-relaxed font-body">
            Comprehensive digital marketing services designed to elevate your brand and drive measurable results across all channels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#FFA205] flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#151E47] mb-4">{service.title}</h3>
              <p className="text-[#2B2B2B]/75 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <Check className="text-[#FFA205] shrink-0 mt-0.5 w-4 h-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="text-[#151E47] font-semibold flex items-center gap-2 group">
                Learn more 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhatWeDoSection;