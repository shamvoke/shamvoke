import { getAllPosts } from "@/lib/api"
import PostsGrid from "@/app/blog/PostsGrid"

export const metadata = {
  title: "Blog",
  description:
    "Thoughts on web design, development, creativity, branding, and digital experiments from Sham Voke.",
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main className="mx-auto sm:px-6 lg:px-8 py-20">
      <section className="mb-12 md:mb-16 px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-sham dark:text-voke mb-3">
          A sham world
        </p>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-8">
          Thoughts, experiments, ideas, and digital rabbit holes from the world
          of code and creativity.
        </p>
      </section>

      <PostsGrid posts={posts} />
    </main>
  )
}