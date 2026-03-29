import HeroSection from "@/components/hero-section"
import { getAllPosts } from "@/lib/api"
import PostsGrid from "@/app/blog/PostsGrid"

export default function Page() {
  const posts = getAllPosts()
  return (
    <main className="min-h-svh">
      <HeroSection />
            {/* Blog Grid Section */}
      <section className="-mt-15">
        <PostsGrid posts={posts} />
      </section>
    </main>
  )
}
