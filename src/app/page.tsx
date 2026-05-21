import HeroSection from "@/components/hero-section"
import { getAllPosts } from "@/lib/api"
import WebDesignSection from "@/components/webDesign-section"
import PostsGrid from "@/app/blog/PostsGrid"
import LogoLoopSection from "@/components/bree-section"
import Newsletter from "@/components/ui/newsletter"

export default function Page() {
  const posts = getAllPosts()
  return (
    <main className="min-h-svh">
      <HeroSection />
      <PostsGrid posts={posts.slice(0, 12)} />
      <WebDesignSection />
      <LogoLoopSection />
      <Newsletter />
    </main>
  )
}
