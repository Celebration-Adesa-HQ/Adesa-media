"use client";

import { Heart, Facebook, Twitter, Linkedin, Copy } from "lucide-react";

export default function ArticleActions({ handleLike, handleShare, copied }) {
  return (
    <div className="mt-12 flex flex-col sm:flex-row justify-between items-center border-t border-b py-6 border-gray-200">
      <div className="flex space-x-4 mb-4 sm:mb-0">
        <button
          onClick={handleLike}
          className="flex items-center space-x-2 text-gray-600 hover:text-brand-orange transition-colors"
        >
          <Heart className="w-5 h-5" />
          <span>Like this article</span>
        </button>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={() => handleShare("facebook")}
          className="p-2 rounded-lg bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleShare("twitter")}
          className="p-2 rounded-lg bg-sky-500/10 text-sky-600 hover:bg-sky-500/20 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleShare("linkedin")}
          className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleShare("copy")}
          className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Copy link"
        >
          {copied ? (
            <span className="text-green-600 text-sm font-medium">Copied!</span>
          ) : (
            <Copy className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
}
