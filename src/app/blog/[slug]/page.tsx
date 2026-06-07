import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/api"
import markdownToHtml from "@/lib/markdownToHtml"
import FeaturedImage from "@/components/ui/featuredImage"
import LikeButton from "@/components/ui/likeButton"
import { Calendar, Clock } from "lucide-react"
import readingTime from "reading-time";
import ReadGrid from "@/app/blog/[slug]/readGrid";
import AuthorCard from "@/components/ui/authorCard";
import CommentBox from "@/components/ui/comments"
import Newsletter from "@/components/ui/newsletter"
import styles from "./post-body.module.css"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params

  try {
    const post = getPostBySlug(slug)
    const ogImage = post.ogImage ?? "/shamvoke-banner.webp"

    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        publishedTime: post.date,
        images: [
          {
            url: ogImage,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        images: [
          {
            url: ogImage,
            alt: post.title,
          },
        ],
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
  const allOtherPosts = getAllPosts().filter(p => p.slug !== post.slug)
  const latestPosts = [...allOtherPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 8)
  let relatedPosts = allOtherPosts.filter(
    p => p.category && post.category && p.category === post.category
  )
  if (relatedPosts.length < 4) {
    const remaining = allOtherPosts.filter(
      p => !relatedPosts.some(r => r.slug === p.slug)
    )
    relatedPosts = [...relatedPosts, ...remaining.slice(0, 4 - relatedPosts.length)]
  } else {
    relatedPosts = relatedPosts.slice(0, 4)
  }
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
    <article data-pagefind-body className="flex-1 min-w-0">
      <header className="mb-12">
        

        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
          <Calendar className="w-5 h-5 text-black dark:text-voke/70" />
          <time className="text-sm text-sham dark:text-gray-300/70">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })} 
          </time>
          <Clock className="w-5 h-5 text-black dark:text-voke/70" />
          <span className="text-sm text-sham dark:text-gray-300/70">
         {stats.text} 
          </span>
        </div>
        <h1 data-pagefind-meta="title" className="text-2xl md:text-3xl font-sham font-bold mb-4">{post.title}</h1>

        {post.shamthing && (
          <p data-pagefind-meta="shamthing" className="text-xl md:text-2xl font-voke mb-2 text-sham dark:text-voke">
            {post.shamthing}
          </p>
        )}

        <div className="relative aspect-40/21 rounded-lg overflow-hidden">
          <FeaturedImage
            imageFilename={post.featuredImage}
            alt={post.title}
            sizes="(max-width: 1023px) 100vw, 70vw"
          />

          {post.category && (
            <div className="absolute top-0 right-0 bg-black/40 text-white text-xs px-2 py-1 rounded-bl-md">
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
        <AuthorCard />
        <CommentBox />
      <div className="lg:hidden mt-12 ">
      <h3 className="text-xl font-sham font-bold mb-6 text-sham dark:text-voke">
        Related Posts
      </h3>
        <ReadGrid posts={relatedPosts} />
      </div>
    </article>
    <aside className="hidden lg:block w-80 shrink-0 space-y-12 mt-33">
      <div>
        <h3 className="text-xl font-sham font-bold text-sham dark:text-voke">
          Related Posts
        </h3>
        <hr className="my-6" />
        <ReadGrid posts={relatedPosts} />
      </div>
      <div>
        <h3 className="text-xl font-sham font-bold mb-6 text-sham dark:text-voke">
          Latest Posts
        </h3>
        <hr className="my-6" />
        <ReadGrid posts={latestPosts} />
      </div>
    </aside>
    </div>
    <Newsletter />
    </div>
  )
}