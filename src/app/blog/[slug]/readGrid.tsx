import Link from "next/link"
import Image from "next/image"
import { Post } from "@/interfaces/post"

type ReadGridProps = {
  posts: Post[]
}

export default function ReadGrid({ posts }: ReadGridProps) {
  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-1 lg:flex-row lg:items-start lg:gap-4"
        >
          <div className="relative w-full h-48 shrink-0 overflow-hidden rounded-xl lg:w-24 lg:h-16 lg:rounded-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105 group-hover:grayscale"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {post.category && (
              <span className="absolute top-2 left-2 rounded-full bg-black/20 px-3 text-xl text-voke font-voke font-bold capitalize backdrop-blur-sm lg:hidden">
                {post.category}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            {post.category && (
              <span className="hidden text-lg font-voke font-bold capitalize text-sham dark:text-voke lg:block">
                {post.category}
              </span>
            )}

            <h4 className="text-base font-bold capitalize text-black dark:text-white group-hover:text-sham dark:group-hover:text-voke lg:text-sm">
              {post.title}
            </h4>
          </div>
        </Link>
      ))}
    </div>
  )
}