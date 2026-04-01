import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/api"
import markdownToHtml from "@/lib/markdownToHtml"
import Image from "next/image"
import LikeButton from "@/components/ui/likeButton"
import { Calendar, Clock } from "lucide-react"
import readingTime from "reading-time";
import styles from "./post-body.module.css"

type Props = {
  params: Promise<{ slug: string }>
}

// Generate static pages for all posts at build time
export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate SEO metadata dynamically
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params

  try {
    const post = getPostBySlug(slug)

    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        publishedTime: post.date,
        images: post.ogImage?.url ? [{ url: post.ogImage.url }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        images: post.ogImage?.url ? [post.ogImage.url] : [],
      },
    }
  } catch {
    return {
      title: "Post Not Found",
    }
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params

  let post

  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }

  const content = await markdownToHtml(post.content)
   const stats = readingTime(post.content || post.excerpt);

  return (
    <>
    <article className="max-w-3xl mx-auto px-4 py-20">
      <header className="mb-12">
        

        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
          <Calendar className="w-5 h-5 text-black dark:text-voke/70" />
          <time className="text-sm text-sham dark:text-gray-300">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })} 
          </time>
          <Clock className="w-5 h-5 text-black dark:text-voke/70" />
          <span className="text-sm text-sham dark:text-gray-300">
         {stats.text} 
          </span>
        </div>
        <h1 className="text-2xl md:text-5xl font-sham font-bold mb-4">{post.title}</h1>

        {post.shamthing && (
          <p className="text-xl capitalize md:text-2xl font-voke mb-2 text-sham dark:text-voke">
            {post.shamthing}
          </p>
        )}

        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />

          {post.category && (
            <div className="absolute bottom-0 right-0 bg-black/60 text-white text-xs px-2 py-1 rounded-tl-md">
              <p>
                Category: {post.category}
              </p>
            </div>
          )}
        </div>
      </header>

      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
        <LikeButton />
    </article>
    </>
  )
}