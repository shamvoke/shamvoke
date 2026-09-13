import JsonLd from "@/components/seo/JsonLd"
import { createCategorySchema } from "@/lib/schema"
import type { Metadata } from "next"
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

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1)

  return {
    title: `${capitalizedCategory} posts`,
    description: `Explore Sham's latest posts about ${category}, including thoughts, experiments, and things worth getting curious about.`,
    alternates: {
      canonical: `/blog/category/${category}`,
    },
    openGraph: {
      title: `${capitalizedCategory} posts`,
      description: `Explore Sham's posts about ${category}, including thoughts, experiments, and things worth getting curious about.`,
      url: `https://shamvoke.com/blog/category/${category}`,
      siteName: "shamvoke.com",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${capitalizedCategory} posts`,
      description: `Explore Sham's posts about ${category}, including thoughts, experiments, and things worth getting curious about.`,
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const posts = getAllPosts()
  const activeCategory = category.toLowerCase()

  if (!categories.includes(activeCategory)) {
    notFound()
  }

  const categorySchema = createCategorySchema(activeCategory)

  const filteredPosts = posts.filter(
    (post) => post.category?.toLowerCase() === activeCategory
  )

  return (
    <>
    <JsonLd data={categorySchema} />
    <main className="mx-auto py-20 sm:px-6 lg:px-8">
      <div className="px-8 text-center">
        <p className="font-voke text-2xl tracking-[0.2em] text-sham dark:text-voke">
          Shamthing to read...
        </p>
        <p className="py-6 text-base leading-8 text-neutral-600 dark:text-neutral-400 md:text-lg">
          Thoughts, experiments, ideas, and digital rabbit holes from the {activeCategory} category.
        </p>
      </div>

      <BlogCategoryFilter activeCategory={activeCategory} />
      <PostsGrid posts={filteredPosts} />
    </main>
    </>
  )
}
