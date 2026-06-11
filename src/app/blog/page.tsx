import { getAllPosts } from "@/lib/api"
import BlogCategoryFilter from "@/app/blog/BlogCategoryFilter"
import PostsGrid from "@/app/blog/PostsGrid"

export const metadata = {
  title: "Blog | Web Design, Arch Linux & Digital creativity",
  description:
    "Explore a collection of technical guides and creative insights. This blog features deep dives into Arch Linux configurations, web development workflows, and digital design strategies. Join Sham Voke for a blend of practical tutorials and experimental projects aimed at building efficient, high-quality digital experiences.",
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main className="mx-auto py-20 sm:px-6 lg:px-8">
      <div className="px-8 text-center">
        <p className="font-voke text-2xl tracking-[0.2em] text-sham dark:text-voke">
          Shamthing to read...
        </p>
        <p className="py-6 text-base leading-8 text-neutral-600 dark:text-neutral-400 md:text-lg">
          Thoughts, experiments, ideas, and digital rabbit holes from various categories.
        </p>
      </div>

      <BlogCategoryFilter activeCategory="all" />
      <PostsGrid posts={posts} />
    </main>
  )
}