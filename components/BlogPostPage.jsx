"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";

// Lazy load heavy libraries & components
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);
const MotionButton = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.button),
  { ssr: false },
);

const Icons = dynamic(
  () =>
    import("lucide-react").then((mod) => ({
      Facebook: mod.Facebook,
      Twitter: mod.Twitter,
      Linkedin: mod.Linkedin,
      MessageCircle: mod.MessageCircle,
      ArrowLeft: mod.ArrowLeft,
      ArrowRight: mod.ArrowRight,
      ChevronRight: mod.ChevronRight,
      Clock: mod.Clock,
      Tag: mod.Tag,
      User: mod.User,
      Heart: mod.Heart,
      Copy: mod.Copy,
      ChevronUp: mod.ChevronUp,
    })),
  { ssr: false },
);

const Image = dynamic(() => import("next/image"), { ssr: false });
const Link = dynamic(() => import("next/link"), { ssr: false });

export default function BlogPostPage({
  post: postData,
  relatedPosts,
  prevPost,
  nextPost,
}) {
  const storageKey = `comments-${postData.slug}`;
  const userKey = "comment-user";

  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState(() => {
    const savedUser = localStorage.getItem(userKey);
    return savedUser
      ? { ...JSON.parse(savedUser), comment: "", remember: true }
      : { comment: "", name: "", email: "", website: "", remember: false };
  });

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
      <MotionDiv
        className="fixed top-0 left-0 h-1 z-50 bg-linear-to-r from-brand-orange to-brand-blue"
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {/* Breadcrumbs */}
        <nav
          className="flex mb-8 text-sm font-body text-foreground"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-brand-blue hover:text-brand-orange font-body transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <Icons.ChevronRight className="w-4 h-4 text-brand-dark mx-2" />
                <Link
                  href="/media"
                  className="text-brand-blue hover:text-brand-orange font-body transition-colors"
                >
                  Media & PR
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <Icons.ChevronRight className="w-4 h-4 text-brand-dark mx-2" />
                <span className="text-brand-dark font-body">
                  {postData.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-2 max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative mb-10 group overflow-hidden rounded-2xl shadow-cardHover">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark/70 to-transparent z-10"></div>

              {/* Text content */}
              <div className="absolute bottom-6 left-6 z-20 max-w-xl text-brand-light font-body">
                {/* Category badge */}
                <span className="inline-block px-4 py-1 bg-brand-orange/90 backdrop-blur-sm rounded-full text-sm font-medium mb-3">
                  {postData.category}
                </span>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-brand-light">
                  {postData.title}
                </h1>

                {/* Post meta */}
                <div className="flex items-center space-x-4 text-brand-light/80">
                  <div className="flex items-center">
                    <Icons.User className="w-4 h-4 mr-2" />
                    <span>{postData.author.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Icons.Clock className="w-4 h-4 mr-2" />
                    <time dateTime={postData.isoDate}>{postData.date}</time>
                  </div>
                  <div className="flex items-center">
                    <Icons.Tag className="w-4 h-4 mr-2" />
                    <span>{postData.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Featured image */}
              <Image
                src={postData.image}
                alt={postData.title}
                className="w-full h-125 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                width={800}
                height={500}
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div
                className="article-content space-y-8 text-gray-700"
                dangerouslySetInnerHTML={{ __html: postData.content }}
              />
            </div>

            {/* Article Actions */}
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
                    <span className="text-green-600 text-sm font-medium">
                      Copied!
                    </span>
                  ) : (
                    <Copy className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Author Bio */}
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
                  Sarah has been at the forefront of search engine optimization
                  since 2014, helping brands adapt to algorithm changes while
                  focusing on human-centered content strategies.
                </p>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[#1A1F3D] flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-[#FF9500]" />
                  Join the conversation ({comments.length})
                </h2>
              </div>

              {/* Comments List */}
              <div className="space-y-8 mb-12">
                {comments.length === 0 && (
                  <p className="text-[#6B6B6B]">
                    No comments yet. Start the conversation.
                  </p>
                )}

                {comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-4">
                    <Image
                      src={comment.avatar}
                      alt={comment.author}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover shrink-0"
                    />

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-[#1A1F3D]">
                          {comment.website ? (
                            <Link
                              href={comment.website}
                              target="_blank"
                              className="hover:underline text-[#FF9500]"
                            >
                              {comment.author}
                            </Link>
                          ) : (
                            comment.author
                          )}
                        </h4>

                        <time className="text-sm text-[#6B6B6B]">
                          {comment.date}
                        </time>
                      </div>

                      <p className="mt-2 text-[#2C2C2C] leading-relaxed">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <div className="border-t pt-8 border-[#D1D1D1]">
                <h3 className="text-xl font-bold text-[#1A1F3D] mb-6">
                  Leave A Comment
                </h3>

                <div className="space-y-4">
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    placeholder="Comment *"
                    rows={5}
                    className="w-full p-4 border border-[#D1D1D1] text-[#FF9500] rounded-xl focus:ring-2 focus:ring-[#FF9500]"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Name *"
                      className="w-full p-4 border border-[#D1D1D1] text-[#FF9500] rounded-xl"
                    />

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      className="w-full p-4 border border-[#D1D1D1] text-[#FF9500] rounded-xl"
                    />

                    <input
                      type="url"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      placeholder="Website"
                      className="w-full p-4 border border-[#D1D1D1] text-[#FF9500] rounded-xl"
                    />
                  </div>

                  <label className="flex items-start gap-3 text-sm text-[#6B6B6B]">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={form.remember}
                      onChange={handleChange}
                      className="mt-1 text-[#FF9500] border-[#D1D1D1]"
                    />
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>

                  <button
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-[#1A1F3D] text-white rounded-xl hover:opacity-90"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </div>

            {/* Related Posts */}
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

            {/* Pagination */}
            <div className="mt-16 flex justify-between items-center border-t border-gray-200 pt-8">
              {prevPost && (
                <Link
                  href={`/media/${prevPost.slug}`}
                  className="flex items-center text-gray-600 hover:text-brand-orange transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  <span>{prevPost.title.slice(0, 30) + "..."}</span>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/media/${nextPost.slug}`}
                  className="flex items-center text-gray-600 hover:text-brand-orange transition-colors ml-auto"
                >
                  <span>{nextPost.title.slice(0, 30) + "..."}</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              )}
            </div>
          </article>

          {/* Sidebar - Table of Contents */}
          {showTOC && (
            <div className="bg-brand-light p-4 cursor-default">
              <aside className="hidden lg:block  top-24 h-fit max-w-md">
                <div className="bg-brand-light rounded-2xl shadow-card border border-brand-light p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-heading text-brand-blue flex items-center">
                      <Icons.ChevronUp className="w-5 h-5 mr-2 text-brand-orange" />
                      Table of Contents
                    </h2>
                    <span className="text-sm text-brand-dark font-body font-medium">
                      4 sections
                    </span>
                  </div>

                  <nav className="space-y-3">
                    {postData.toc.map((item) => (
                      <div
                        key={item.id}
                        className="block p-3 rounded-xl hover:bg-brand-orange/10 transition-colors group"
                      >
                        <div className="flex items-start">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-brand-blue text-brand-light flex items-center justify-center font-medium text-sm mr-3 mt-1"></span>
                          <div>
                            <div className="font-medium text-brand-blue group-hover:text-brand-orange transition-colors font-body">
                              {item.title}
                            </div>
                            <div className="text-sm text-brand-dark mt-1 font-body">
                              {item.subtitle}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </nav>

                  <div className="mt-8 pt-6 border-t border-brand-light">
                    <h3 className="font-medium text-brand-dark mb-3 font-body">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {postData.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-brand-blue text-brand-light text-sm rounded-full hover:bg-brand-orange transition-colors cursor-pointer font-body"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          )}
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
