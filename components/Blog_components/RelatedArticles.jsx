"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function RelatedArticles({ relatedPosts }) {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <h2 className="text-3xl font-heading text-brand-blue mb-12">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <div
            key={post.id}
            className="group border border-gray-200 rounded-2xl overflow-hidden shadow-card hover:shadow-cardHover transition-shadow duration-300 bg-white"
          >
            <Link href={`/media/${post.slug}`}>
              <div className="h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={192}
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-brand-orange text-white text-sm font-medium rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-heading text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-brand-dark/70 mb-4 font-body">
                  {post.excerpt}
                </p>
                <button className="inline-flex items-center hover:text-brand-orange text-brand-blue font-medium hover:text-brand-orange transition-colors">
                  Read more <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
