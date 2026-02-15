"use client";

import Image from "next/image";
import { User, Clock, Tag } from "lucide-react";

export default function BlogPostHeader({ postData }) {
  return (
    <div className="relative mb-10 group overflow-hidden rounded-2xl shadow-cardHover">
      <div className="absolute inset-0 bg-linear-to-t from-brand-dark/70 to-transparent z-10"></div>

      <div className="absolute bottom-6 left-6 z-20 max-w-xl text-brand-light font-body">
        <span className="inline-block px-4 py-1 bg-brand-orange/90 backdrop-blur-sm rounded-full text-sm font-medium mb-3">
          {postData.category}
        </span>

        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-brand-light">
          {postData.title}
        </h1>

        <div className="flex items-center space-x-4 text-brand-light/80">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>{postData.author.name}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <time dateTime={postData.isoDate}>{postData.date}</time>
          </div>
          <div className="flex items-center">
            <Tag className="w-4 h-4 mr-2" />
            <span>{postData.readTime}</span>
          </div>
        </div>
      </div>

      <Image
        src={postData.image}
        alt={postData.title}
        className="w-full h-125 object-cover transition-transform duration-700 group-hover:scale-105"
        loading="eager"
        width={800}
        height={500}
      />
    </div>
  );
}
