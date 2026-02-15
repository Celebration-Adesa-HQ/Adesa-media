"use client";

import { Search, Filter, ChevronDown } from "lucide-react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

export default function BlogPageComponent({
  searchQuery,
  setSearchQuery,
  isFilterOpen,
  setIsFilterOpen,
  selectedCategory,
  setSelectedCategory,
  categories,
  filteredPosts,
  paginatedPosts,
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <section
      id="blog"
      className="py-16 bg-brand-light text-brand-dark font-body"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-brand-orange font-bold tracking-wideLogo uppercase text-xs mb-4">
            Blog
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Latest Articles
          </h1>
          <p className="text-lg text-brand-dark/70">
            Strategy, media, branding, and execution from real campaigns.
          </p>
        </div> */}

        <div className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-dark/40"
                size={18}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-brand-dark/20 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-between px-4 py-3 border border-brand-dark/20 rounded-lg bg-brand-light"
              >
                <div className="flex items-center gap-2 text-brand-dark">
                  <Filter size={18} className="text-brand-orange" />
                  <span>{selectedCategory}</span>
                </div>
                <ChevronDown
                  size={18}
                  className={
                    isFilterOpen
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-1 w-48 max-h-60 overflow-y-auto bg-brand-light rounded-lg shadow-lg border border-brand-dark/20 z-10 scrollbar-thin scrollbar-thumb-brand-orange scrollbar-track-brand-light">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
                        selectedCategory === category
                          ? "bg-brand-orange text-brand-light"
                          : "hover:bg-brand-blue/10"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  selectedCategory === category
                    ? "bg-brand-orange text-brand-light"
                    : "hover:bg-brand-blue/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-brand-light rounded-2xl shadow-card">
            <Search size={48} className="mx-auto text-brand-orange mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-2 text-brand-dark">
              No articles found
            </h3>
            <p className="text-brand-dark/70 mb-4">
              Adjust your search or filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 bg-brand-orange text-brand-light rounded-lg shadow-button"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </section>
  );
}
