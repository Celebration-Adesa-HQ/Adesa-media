"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Clock,
  Tag,
  User,
  Heart,
  Copy,
  ChevronUp,
} from "lucide-react";
import dynamic from "next/dynamic";
const BlogPostHeader = dynamic(
  () => import("./Blog_components/BlogPostHeader"),
  { loading: () => null, ssr: false },
);
const ArticleActions = dynamic(
  () => import("./Blog_components/ArticleActions"),
  { loading: () => null, ssr: false },
);
const AuthorBio = dynamic(() => import("./Blog_components/AuthorBio"), {
  loading: () => null,
  ssr: false,
});
const CommentsSection = dynamic(
  () => import("./Blog_components/CommentsSection"),
  { loading: () => null, ssr: false },
);
const RelatedArticles = dynamic(
  () => import("./Blog_components/RelatedArticles"),
  { loading: () => null, ssr: false },
);
const SidebarTOC = dynamic(() => import("./Blog_components/SidebarTOC"), {
  loading: () => null,
  ssr: false,
});
const Breadcrumbs = dynamic(() => import("./Blog_components/Breadcrumbs"), {
  loading: () => null,
  ssr: false,
});

const Icons = {
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Clock,
  Tag,
  User,
  Heart,
  Copy,
  ChevronUp,
};

export default function BlogPostPage({
  post: postData,
  relatedPosts,
  prevPost,
  nextPost,
}) {
  const storageKey = `comments-${postData.slug}`;
  const userKey = "comment-user";

  const [comments, setComments] = useState(() => {
    try {
      const saved =
        typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [form, setForm] = useState(() => {
    try {
      const savedUser =
        typeof window !== "undefined" ? localStorage.getItem(userKey) : null;
      const userData = savedUser ? JSON.parse(savedUser) : {};
      return {
        comment: "",
        name: userData.name || "",
        email: userData.email || "",
        website: userData.website || "",
        remember: !!savedUser,
      };
    } catch (e) {
      return {
        comment: "",
        name: "",
        email: "",
        website: "",
        remember: false,
      };
    }
  });

  // Initialization moved to useState lazy initializer; no client-only effect needed.

  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showTOC, setShowTOC] = useState(true);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (!form.comment || !form.name || !form.email) return;

    const newComment = {
      id: Date.now(),
      author: form.name,
      email: form.email,
      website: form.website,
      avatar: `https://ui-avatars.com/api/?name=${form.name}`,
      content: form.comment,
      date: new Date().toLocaleDateString(),
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));

    if (form.remember) {
      localStorage.setItem(
        userKey,
        JSON.stringify({
          name: form.name,
          email: form.email,
          website: form.website,
        }),
      );
    } else {
      localStorage.removeItem(userKey);
    }

    setForm((prev) => ({ ...prev, comment: "" }));
  }, [form, comments, storageKey, userKey]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      setScrollProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
      setShowTOC(scrollTop <= 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = useCallback(
    async (platform) => {
      const url = window.location.href;
      const title = postData.title;
      let shareUrl = "";

      switch (platform) {
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
          break;
        case "twitter":
          shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
          break;
        case "linkedin":
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
          break;
        case "copy":
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
          return;
        default:
          return;
      }

      window.open(shareUrl, "_blank", "width=600,height=400");
    },
    [postData],
  );

  const handleLike = useCallback(
    () => alert("Thanks for liking this article! (Demo)"),
    [],
  );

  // Memoized comments count
  const commentsCount = useMemo(() => comments.length, [comments]);

  return (
    <div className="min-h-screen bg-brand-light font-body">
      {/* Sticky Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 z-50 bg-linear-to-r from-brand-orange to-brand-blue"
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {/* Breadcrumbs */}
        <Breadcrumbs postTitle={postData.title} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-2 max-w-4xl mx-auto">
            <BlogPostHeader postData={postData} />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div
                className="article-content space-y-8 text-gray-700"
                dangerouslySetInnerHTML={{ __html: postData.content }}
              />
            </div>

            <ArticleActions
              handleLike={handleLike}
              handleShare={handleShare}
              copied={copied}
            />

            <AuthorBio postData={postData} />

            <CommentsSection
              comments={comments}
              commentsCount={commentsCount}
              form={form}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />

            <RelatedArticles relatedPosts={relatedPosts} />

            {/* Pagination */}
            <div className="mt-16 flex justify-between items-center border-t border-gray-200 pt-8">
              {prevPost && (
                <Link
                  href={`/media/${prevPost.slug}`}
                  className="flex items-center text-gray-600 hover:text-brand-orange transition-colors"
                >
                  <Icons.ArrowLeft className="w-5 h-5 mr-2" />
                  <span>{prevPost.title.slice(0, 30) + "..."}</span>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/media/${nextPost.slug}`}
                  className="flex items-center text-gray-600 hover:text-brand-orange transition-colors ml-auto"
                >
                  <span>{nextPost.title.slice(0, 30) + "..."}</span>
                  <Icons.ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              )}
            </div>
          </article>

          {showTOC && <SidebarTOC postData={postData} />}
        </div>
      </div>

      {/* Scroll to top button */}
      {scrollProgress > 50 && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-linear-to-r from-indigo-600 to-purple-700 text-white shadow-xl flex items-center justify-center z-40 hover:opacity-90 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-7 h-7" />
        </motion.button>
      )}
    </div>
  );
}
