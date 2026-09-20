import HeroSection from "@/components/hero-section"
import { getAllPosts } from "@/lib/api"
import PostsGrid from "@/app/blog/PostsGrid"
import LogoLoopSection from "@/components/bree-section"
import Newsletter from "@/components/ui/newsletter"
import AdBanner from "@/components/seo/adbanner";

export default function Page() {
  const posts = getAllPosts()
  return (
    <main className="min-h-svh">
      <HeroSection />
      <PostsGrid posts={posts.slice(0, 12)} />
      {/* top banner unit */}
      <div className="max-w-5xl mx-auto px-4 my-8">
        <AdBanner dataAdSlot="7395457986" />
      </div>
      <LogoLoopSection />
      {/* Lower banner unit */}
      <div className="max-w-5xl mx-auto px-4 my-8">
        <AdBanner dataAdSlot="7395457986" />
      </div>
      <Newsletter />
    </main>
  )
}
