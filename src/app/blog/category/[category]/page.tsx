import { getAllPosts } from "@/lib/api"
import BlogCategoryFilter from "@/app/blog/BlogCategoryFilter"
import PostsGrid from "@/app/blog/PostsGrid"
import { notFound } from "next/navigation"

type CategoryPageProps = {
  params: Promise<{
    category: string
  }>
}

const categories = [
  "software",
  "linux",
  "life",
  "code",
  "android",
  "windows",
]

export const dynamicParams = false

export async function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1)
  
  return {
    title: `${capitalizedCategory} | Blog`,
    description: `Explore posts about ${category} on Sham Voke's blog.`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const posts = getAllPosts()
  const activeCategory = category.toLowerCase()

  if (!categories.includes(activeCategory)) {
    notFound()
  }

  const filteredPosts = posts.filter(
    (post) => post.category?.toLowerCase() === activeCategory
  )

  return (
    <main className="mx-auto py-20 sm:px-6 lg:px-8">
      <div className="px-8 text-center">
        <p className="font-voke text-2xl tracking-[0.2em] text-sham dark:text-voke">
          Shamthing to read about {activeCategory}...
        </p>
      </div>

      <BlogCategoryFilter activeCategory={activeCategory} />
      <PostsGrid posts={filteredPosts} />
    </main>
  )
}
