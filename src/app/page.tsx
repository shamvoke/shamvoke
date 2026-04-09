import HeroSection from "@/components/hero-section"
import { getAllPosts } from "@/lib/api"
import WebDesignSection from "@/components/webDesign-section"
import PostsGrid from "@/app/blog/PostsGrid"

export default function Page() {
  const posts = getAllPosts()
  return (
    <main className="min-h-svh">
      <HeroSection />
      <PostsGrid posts={posts.slice(0, 6)} />
      <WebDesignSection />
    </main>
  )
}
