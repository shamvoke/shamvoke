"use client"

import { useState } from "react"
import PostsGrid from "@/app/blog/PostsGrid"
import { Post } from "@/interfaces/post"

type BlogCategoryFilterProps = {
  posts: Post[]
}

const categories = [
  "all",
  "software",
  "linux",
  "life",
  "code",
  "android",
  "windows",
]

export default function BlogCategoryFilter({ posts }: BlogCategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter(
          (post) => post.category?.toLowerCase() === activeCategory
        )

  return (
    <>
      <div className="mb-20 flex flex-wrap justify-center gap-3 px-4">
        {categories.map((category) => {
          const isActive = activeCategory === category

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-medium capitalize tracking-wide transition ${
                isActive
                  ? "border-voke bg-voke text-sham"
                  : "border-neutral-300 text-neutral-700 hover:border-voke hover:text-sham dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-voke dark:hover:text-voke"
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      <PostsGrid posts={filteredPosts} />
    </>
  )
}