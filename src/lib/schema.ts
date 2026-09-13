import type { BlogPosting, Person, WebSite } from "schema-dts";
import type { Post } from "@/interfaces/post";

export const personSchema: Person = {
  "@type": "Person",
  "@id": "https://shamvoke.com/#person",
  name: "Sham Voke",
  url: "https://shamvoke.com",
};

export const websiteSchema: WebSite = {
  "@type": "WebSite",
  "@id": "https://shamvoke.com/#website",
  url: "https://shamvoke.com",
  name: "sham voke blog",
  description:
    "Personal blog of Sham Voke, sharing thoughts on web development, design, creativity, branding, and digital ideas.",
  publisher: {
    "@id": "https://shamvoke.com/#person",
  },
};

export function createBlogPostingSchema(post: Post): BlogPosting {
  const articleUrl = `https://shamvoke.com/blog/${post.slug}`;

  return {
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    image: post.ogImage,
    author: {
      "@id": "https://shamvoke.com/#person",
    },
    publisher: {
      "@id": "https://shamvoke.com/#person",
    },
    datePublished: post.date,
    articleSection: post.category,
    keywords: post.tags,
  };
}