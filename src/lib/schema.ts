import type { BlogPosting, BreadcrumbList, CollectionPage, AboutPage, Person, WebSite, VideoGame } from "schema-dts";
import type { Post } from "@/interfaces/post";

export const personSchema: Person = {
  "@type": "Person",
  "@id": "https://shamvoke.com/#person",
  name: "Sham Voke",
  alternateName: "Shamvoke",
  url: "https://shamvoke.com",
  jobTitle: ["Creative Designer", "Full Stack Web Developer"],
  worksFor: {
    "@type": "Organization",
    name: "WebMeka",
  },
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
    isPartOf: {
    "@id": "https://shamvoke.com/#website",
    },
    inLanguage: "en-US",
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

export function createBreadcrumbSchema(post: Post): BreadcrumbList {
  const articleUrl = `https://shamvoke.com/blog/${post.slug}`;

  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://shamvoke.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://shamvoke.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };
}

export function createBlogCollectionSchema(): CollectionPage {
  return {
    "@type": "CollectionPage",
    "@id": "https://shamvoke.com/blog#collection",
    url: "https://shamvoke.com/blog",
    name: "Sham Voke Blog categories and posts",
    description:
      "Personal blog of Sham Voke, sharing thoughts on web development, design, creativity, branding, and Tech exploration.",
    isPartOf: {
      "@id": "https://shamvoke.com/#website",
    },
    breadcrumb: {
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://shamvoke.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://shamvoke.com/blog",
    },
  ],
 },
};
}

export function createAboutPageSchema(): AboutPage {
  return {
    "@type": "AboutPage",
    "@id": "https://shamvoke.com/about#about",
    url: "https://shamvoke.com/about",
    name: "About Sham Voke",
    description:
      "Meet Sham, a creative designer and web developer exploring code, creativity, technology, and the web.",
    isPartOf: {
      "@id": "https://shamvoke.com/#website",
    },
    mainEntity: {
      "@id": "https://shamvoke.com/#person",
    },
    breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://shamvoke.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://shamvoke.com/about",
    },
  ],
},
};
}

export function createCategorySchema(category: string): CollectionPage {
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1)

  const categoryUrl = `https://shamvoke.com/blog/category/${category}`

  return {
    "@type": "CollectionPage",
    "@id": `${categoryUrl}#collection`,
    url: categoryUrl,
    name: `${capitalizedCategory} posts`,
    description: `Explore Sham's latest posts about ${category}, including thoughts, experiments, and things worth getting curious about.`,
    isPartOf: {
      "@id": "https://shamvoke.com/#website",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://shamvoke.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://shamvoke.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: capitalizedCategory,
          item: categoryUrl,
        },
      ],
    },
  }
}

export function createShamaze3DSchema(): VideoGame {
  return {
    "@type": "VideoGame",
    "@id": "https://shamvoke.com/shamaze3d#game",
    name: "Shamaze3D",
    description:
      "A curious little 3D maze game built with React and Three.js. Explore the labyrinth, find your way out, or get lost in the fun.",
    url: "https://shamvoke.com/shamaze3d",
    image:
      "https://res.cloudinary.com/deudsgjbm/image/upload/v1780820863/05_A-maze-game-for-the-curious-Shamaze3D_zj7wmg.webp",
    author: {
      "@id": "https://shamvoke.com/#person",
    },
    publisher: {
      "@id": "https://shamvoke.com/#person",
    },
    applicationCategory: "Game",
    genre: "Maze",
    gamePlatform: ["Web Browser"],
  };
}

export function createShamaze3DBreadcrumbSchema(): BreadcrumbList {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://shamvoke.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shamaze3D",
        item: "https://shamvoke.com/shamaze3d",
      },
    ],
  };
}