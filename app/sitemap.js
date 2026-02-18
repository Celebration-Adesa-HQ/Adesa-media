import { allBlogPosts } from "@/components/Blog_components/blogPosts";
import { AdventureWork } from "@/app/adventures/_components/AdventureWork";
import { siteConfig } from "@/config/site";

export default function sitemap() {
  const baseUrl = siteConfig.url || "https://adesamedia.com";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/approach",
    "/clients",
    "/team",
    "/contact",
    "/adventures",
    "/media",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Team member pages
  const teamPages = siteConfig.team.map((member) => ({
    url: `${baseUrl}/team/${member.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Adventure/Case study pages
  const adventurePages = AdventureWork.map((adventure) => ({
    url: `${baseUrl}/adventures/${adventure.slug}`,
    lastModified: new Date(adventure.date || Date.now()),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Blog post pages
  const blogPages = allBlogPosts.map((post) => ({
    url: `${baseUrl}${post.link}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticPages, ...teamPages, ...adventurePages, ...blogPages];
}
