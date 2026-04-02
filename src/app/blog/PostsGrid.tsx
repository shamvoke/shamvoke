import Link from "next/link"
import Image from "next/image"
import { Post } from "@/interfaces/post"

type PostsGridProps = {
  posts: Post[]
}

export default function PostsGrid({ posts }: PostsGridProps) {
  return (
    <section
      id="grid"
      className="grid px-4 sm:px-8 gap-8 gap-y-12 sm:gap-x-2 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 "
    >
      {posts.map((post) => (
        <article
        key={post.slug}
        className="group relative h-full transition-transform duration-300 hover:-translate-y-1"
        >
        {post.category && (
            <div className="mb-3">
            <span className="inline-block text-sm font-bold font-sham uppercase tracking-wide text-sham dark:text-voke">
                {post.category}
            </span>
            </div>
        )}

        <div className="flex h-full flex-col overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <Link href={`/blog/${post.slug}`} className="block">
            <div className="relative aspect-16/10 overflow-hidden">
                <Image
                src={post.coverImage}
                alt={post.title}
                fill={true}
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105 group-hover:grayscale"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-voke bg-black/20 backdrop-blur-sm">
                    <span className="text-voke text-sm font-semibold">Read</span>
                </div>
                </div>
            </div>
            </Link>

            <div className="flex flex-1 flex-col px-3 py-5">
            <time className="block text-sm font-light text-neutral-500 dark:text-neutral-400 mb-3">
                {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                })}
            </time>

            <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-xl sm:text-2xl font-sham sm:font-sans font-bold leading-tight text-black dark:text-white mb-3 transition-colors group-hover:text-sham dark:group-hover:text-voke">
                {post.title}
                </h2>
            </Link>

            <Link href={`/blog/${post.slug}`} className="block">
                <p className="text-[15px] leading-7 sm:text-sm sm:leading-5 text-neutral-600 dark:text-neutral-400">
                {post.excerpt}
                </p>
            </Link>

            {post.tags && post.tags.length > 0 && (
                <div className="mt-auto flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                    <span
                    key={tag}
                    className="inline-flex items-center font-voke rounded-full border border-black dark:border-white px-2 py-1 text-sm sm:text-xs text-black dark:text-white"
                    >
                    #{tag.toLowerCase()}
                    </span>
                ))}
                </div>
            )}
            </div>
        </div>
        </article>
      ))}
    </section>
  )
}