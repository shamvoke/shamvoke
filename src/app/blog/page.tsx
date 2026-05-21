import { getAllPosts } from "@/lib/api"
import PostsGrid from "@/app/blog/PostsGrid"

export const metadata = {
  title: "Blog | Web Design, Arch Linux & Digital Creativeity",
  description:
    "Explore a collection of technical guides and creative insights. This blog features deep dives into Arch Linux configurations, web development workflows, and digital design strategies. Join Sham Voke for a blend of practical tutorials and experimental projects aimed at building efficient, high-quality digital experiences.",
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main className="mx-auto sm:px-6 lg:px-8 py-20">
      <div className="mb-15 px-8 text-center">
        <p className="text-2xl tracking-[0.2em] font-voke text-sham dark:text-voke">
          Shamthing to read...
        </p>
        <p className="py-6 text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-8">
          Thoughts, experiments, ideas, and digital rabbit holes from the world
          of code and creativity.
        </p>
      </div>

      <PostsGrid posts={posts} />
    </main>
  )
}