import { Post } from "@/interfaces/post"
import fs from "fs"
import matter from "gray-matter"
import { join } from "path"

const postsDirectory = join(process.cwd(), "src/_posts")

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

/**
 * Converts:
 * 2025-08-31-welcome-to-my-blog.md
 * into:
 * welcome-to-my-blog
 */
export function stripDateFromSlug(fileName: string): string {
  return fileName
    .replace(/\.md$/, "")
    .replace(/^\d{4}-\d{2}-\d{2}-/, "")
}

/**
 * Finds the actual file using the clean slug
 * Example:
 * welcome-to-my-blog -> 2025-08-31-welcome-to-my-blog.md
 */
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

  return {
    ...(data as Omit<Post, "slug" | "content">),
    slug: stripDateFromSlug(fileName),
    content,
  }
}

export function getAllPosts(): Post[] {
  const files = getPostSlugs()

  return files
    .map((file) => {
      const fullPath = join(postsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        ...(data as Omit<Post, "slug" | "content">),
        slug: stripDateFromSlug(file),
        content,
      }
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export function getRandomPosts(count: number): Post[] {
  const allPosts = getAllPosts()
  const shuffled = [...allPosts].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}