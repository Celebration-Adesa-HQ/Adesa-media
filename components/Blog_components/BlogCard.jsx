"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  Check,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogCard({ post, isFeatured = false }) {
  const [copiedId, setCopiedId] = useState(null);
  const [shareOpen, setShareOpen] = useState(false);

  const handleShare = async (platform) => {
    const url = window.location.origin + post.link;
    if (platform === "copy") {
      await navigator.clipboard.writeText(url);
      setCopiedId(post.id);
      setTimeout(() => setCopiedId(null), 2000);
      return;
    }
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(post.title);
    const links = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    };
    window.open(links[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${isFeatured ? "col-span-full md:col-span-2" : ""} bg-brand-light rounded-2xl overflow-hidden flex flex-col shadow-cardHover hover:shadow-card transition-shadow duration-300 border border-brand-blue`}
    >
      <div className="relative">
        <Image
          src={post.image}
          alt={post.title}
          width={600}
          height={400}
          className="h-56 md:h-64 w-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-brand-orange text-brand-light text-xs font-bold px-2 py-1 rounded">
          {post.category}
        </div>
        <button
          onClick={() => setShareOpen(!shareOpen)}
          className="absolute top-4 right-4 p-2 rounded-full bg-brand-light bg-opacity-80 text-brand-blue hover:text-brand-orange transition-colors"
        >
          <Share2 size={18} className="hover:text-brand-orange" />
        </button>
        <AnimatePresence>
          {shareOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute right-4 top-14 bg-brand-light rounded-xl shadow-card p-2 w-44 z-10"
            >
              {["twitter", "facebook", "linkedin", "copy"].map((platform) => (
                <button
                  key={platform}
                  onClick={() => handleShare(platform)}
                  className="flex gap-2 px-3 py-2 w-full hover:bg-brand-light/50 rounded-lg items-center font-body text-brand-foreground"
                >
                  {platform === "twitter" && (
                    <Twitter size={16} className="text-brand-blue" />
                  )}
                  {platform === "facebook" && (
                    <Facebook size={16} className="text-brand-blue" />
                  )}
                  {platform === "linkedin" && (
                    <Linkedin size={16} className="text-brand-blue" />
                  )}
                  {platform === "copy" &&
                    (copiedId === post.id ? (
                      <Check size={16} className="text-brand-orange" />
                    ) : (
                      <Copy size={16} />
                    ))}
                  {platform === "copy"
                    ? "Copy link"
                    : platform.charAt(0).toUpperCase() + platform.slice(1)}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-6 flex flex-col grow">
        <time className="text-brand-orange font-bold text-sm flex items-center gap-1 font-body">
          <Calendar size={14} /> {post.date} • {post.readTime}
        </time>
        <h3 className="font-heading font-bold text-xl md:text-2xl mt-2 mb-3 line-clamp-2 hover:text-brand-orange transition-colors">
          {post.title}
        </h3>
        <p className="text-brand-dark mb-5 line-clamp-3 font-body">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 pt-4 mt-auto border-t border-brand-blue/20">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full w-10 h-10 object-cover"
          />
          <div>
            <span className="font-bold text-brand-foreground font-body">
              {post.author.name}
            </span>
            <p className="text-xs text-brand-dark font-body">
              {post.author.bio}
            </p>
          </div>
        </div>
        <Link
          href={post.link}
          className="mt-5 font-bold text-brand-orange inline-flex items-center gap-1 group hover:text-brand-orange/90 transition-colors font-body"
        >
          Read Article
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </motion.article>
  );
}
