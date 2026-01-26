import BlogCard from "./BlogCard";
import { allBlogPosts } from "./blogPosts";

export default function FeaturedPostsSection() {
  const featuredPosts = allBlogPosts
    .filter((post) => post.featured)
    .slice(0, 2);
  if (!featuredPosts.length) return null;

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 bg-orange-500 rounded-full"></div>
        <h2 className="font-bold text-2xl text-gray-800">Featured Articles</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredPosts.map((post) => (
          <BlogCard key={post.id} post={post} isFeatured />
        ))}
      </div>
    </section>
  );
}
