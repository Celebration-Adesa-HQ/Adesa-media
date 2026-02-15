"use client";

import Image from "next/image";

export default function AuthorBio({ postData }) {
  return (
    <div className="flex items-start gap-6 p-8 rounded-3xl border border-brand-blue/10 mt-16">
      <Image
        src={postData.author.avatar}
        alt={postData.author.name}
        className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-card"
        width={80}
        height={80}
      />
      <div>
        <h3 className="text-xl font-heading text-brand-blue">
          {postData.author.name}
        </h3>
        <p className="text-brand-orange font-medium mt-1">
          {postData.author.bio}
        </p>
        <p className="mt-3 text-brand-dark max-w-2xl font-body">
          Sarah has been at the forefront of search engine optimization since
          2014, helping brands adapt to algorithm changes while focusing on
          human-centered content strategies.
        </p>
      </div>
    </div>
  );
}
