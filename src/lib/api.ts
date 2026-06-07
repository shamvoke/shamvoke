import { Post } from "@/interfaces/post"
import fs from "fs"
import matter from "gray-matter"
import { join } from "path"

const postsDirectory = join(process.cwd(), "src/_posts")

function normalizePostData(
  data: Record<string, unknown>,
  slug: string,
  content: string
): Post {
  return {
    slug,
    title: String(data.title ?? ""),
    shamthing: data.shamthing ? String(data.shamthing) : undefined,
    date:
      data.date instanceof Date
        ? data.date.toISOString()
        : String(data.date ?? ""),
    excerpt: String(data.excerpt ?? ""),
    featuredImage: String(data.featuredImage ?? ""),
    ogImage: data.ogImage ? String(data.ogImage) : undefined,
    category: data.category ? String(data.category) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    content,
  }
}

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}
export function stripDateFromSlug(fileName: string): string {
  return fileName
    .replace(/\.md$/, "")
    .replace(/^\d{4}-\d{2}-\d{2}-/, "")
}

export function findPostFileBySlug(slug: string): string {
  const files = getPostSlugs()

  const matchedFile = files.find((file) => {
    const cleanSlug = stripDateFromSlug(file)
    return cleanSlug === slug
  })

  if (!matchedFile) {
    throw new Error(`Post not found for slug: ${slug}`)
  }

  return matchedFile
}

export function getPostBySlug(slug: string): Post {
  const fileName = findPostFileBySlug(slug)
  const fullPath = join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return normalizePostData(data, stripDateFromSlug(fileName), content)
}

export function getAllPosts(): Post[] {
  const files = getPostSlugs()

  return files
    .map((file) => {
      const fullPath = join(postsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return normalizePostData(data, stripDateFromSlug(file), content)
    })
    .sort((post1, post2) => {
      return new Date(post2.date).getTime() - new Date(post1.date).getTime()
    })
}

export function getRandomPosts(count: number): Post[] {
  const allPosts = getAllPosts()
  const shuffled = [...allPosts].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}