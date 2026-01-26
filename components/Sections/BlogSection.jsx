"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

import { allBlogPosts } from "../Blog_components/blogPosts";
import BlogCard from "../Blog_components/BlogCard";
import FeaturedPostsSection from "../Blog_components/FeaturedPostsSection";
import BlogPageComponent from "../Blog_components/BlogPageComponent";

const categories = [
  "All",
  ...new Set(allBlogPosts.map((post) => post.category)),
];

function BlogSection({ variant = "page" }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const filteredPosts = useMemo(() => {
    const q = searchQuery.toLowerCase();

    return allBlogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const matchesSearch =
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.author.name.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const postsPerPage = variant === "blog" ? 6 : 3;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  if (variant === "blog") {
    return (
      <BlogPageComponent
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
        categories={categories}
        filteredPosts={filteredPosts}
        paginatedPosts={paginatedPosts}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  return (
    <section id="blog" className="py-24 bg-brand-light text-brand-blue">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-brand-orange font-bold tracking-widest uppercase text-xs mb-4">
            Blog
          </span>

          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Insights That Drive Growth
          </h2>

          <p className="font-body text-lg text-brand-dark">
            Strategy, media, branding, and execution from real campaigns.
          </p>
        </div>

        <FeaturedPostsSection />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {allBlogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 font-heading bg-brand-orange text-white rounded-full shadow-button transition hover:-translate-y-1"
          >
            View All Posts
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
