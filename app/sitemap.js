import { allBlogPosts } from "@/components/Blog_components/blogPosts";
import { AdventureWork } from "@/app/adventures/_components/AdventureWork";
import { siteConfig } from "@/config/site";

export default function sitemap() {
  const baseUrl = siteConfig.url || "https://adesamedia.com";

  // Core Static pages
  const staticPages = [
    { route: "", priority: 1.0, changeFreq: "weekly" },
    { route: "/about", priority: 0.9, changeFreq: "monthly" },
    { route: "/services", priority: 0.9, changeFreq: "weekly" },
    { route: "/approach", priority: 0.8, changeFreq: "monthly" },
    { route: "/clients", priority: 0.8, changeFreq: "monthly" },
    { route: "/adventures", priority: 0.9, changeFreq: "weekly" },
    { route: "/media", priority: 0.9, changeFreq: "daily" },
    { route: "/team", priority: 0.8, changeFreq: "monthly" },
    { route: "/careers", priority: 0.8, changeFreq: "weekly" },
    { route: "/contact", priority: 0.9, changeFreq: "monthly" },
    { route: "/privacy-policy", priority: 0.3, changeFreq: "yearly" },
    { route: "/terms-and-conditions", priority: 0.3, changeFreq: "yearly" },
    { route: "/cookie-policy", priority: 0.3, changeFreq: "yearly" },
  ].map(({ route, priority, changeFreq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: changeFreq,
    priority,
  }));

  // Team member pages
  const teamPages = siteConfig.team.map((member) => ({
    url: `${baseUrl}/team/${member.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Adventure / Case study pages
  const adventurePages = AdventureWork.map((adventure) => ({
    url: `${baseUrl}/adventures/${adventure.slug}`,
    lastModified: new Date(adventure.date || Date.now()).toISOString(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Media / Blog post pages
  const blogPages = allBlogPosts.map((post) => ({
    url: `${baseUrl}${post.link}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...teamPages, ...adventurePages, ...blogPages];
}
