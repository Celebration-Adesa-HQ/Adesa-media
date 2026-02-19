import { allBlogPosts } from "@/components/Blog_components/blogPosts";
import BlogPostPage from "@/components/BlogPostPage";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = allBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Adesa Media",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${post.title}`,
    description: post.excerpt,
    keywords: [
      post.category,
      "SEO",
      "content strategy",
      "digital marketing",
      "Adesa Media",
    ],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://adesamedia.com${post.link}`,
      siteName: "Adesa Media",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://adesamedia.com${post.link}`,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function getRelatedPosts(currentPost, allPosts, limit = 3) {
  if (!currentPost) return [];

  const related = allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      let score = 0;

      if (post.category === currentPost.category) {
        score += 2;
      }

      const sharedTags = post.tags?.filter((tag) =>
        currentPost.tags?.includes(tag),
      );

      score += sharedTags?.length || 0;

      return { ...post, score };
    })
    .filter((post) => post.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return related;
}

function getPaginationLinks(currentSlug, allPosts) {
  const index = allPosts.findIndex((post) => post.slug === currentSlug);

  const prevPost = index > 0 ? allPosts[index - 1] : null;
  const nextPost = index < allPosts.length - 1 ? allPosts[index + 1] : null;

  return { prevPost, nextPost };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const post = allBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return null;
  }

  const relatedPosts = getRelatedPosts(post, allBlogPosts, 3);
  const { prevPost, nextPost } = getPaginationLinks(slug, allBlogPosts);

  return (
    <main>
      <BlogPostPage
        post={post}
        relatedPosts={relatedPosts}
        prevPost={prevPost}
        nextPost={nextPost}
      />
    </main>
  );
}
