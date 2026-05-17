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
      <section className="py-16">
        <LogoLoopSection />
      </section>
    <div className="mt-10 max-w-3xl mx-auto">
      <Newsletter />
    </div>
    </main>
  )
}
