import Link from "next/link"

type BlogCategoryFilterProps = {
  activeCategory: string
}

const categories = [
  "all",
  "software",
  "linux",
  "life",
  "code",
  "android",
  "windows",
]

export default function BlogCategoryFilter({
  activeCategory,
}: BlogCategoryFilterProps) {
  return (
    <div className="mb-20 flex flex-wrap justify-center gap-3 px-4">
      {categories.map((category) => {
        const isActive = activeCategory === category
        const href =
          category === "all"
            ? "/blog"
            : `/blog?category=${encodeURIComponent(category)}`

        return (
          <Link
            key={category}
            href={href}
            scroll={false}
            className={`rounded-full border px-5 py-2 text-sm font-medium capitalize tracking-wide transition ${
              isActive
                ? "border-voke bg-voke text-sham"
                : "border-neutral-300 text-neutral-700 hover:border-voke hover:text-sham dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-voke dark:hover:text-voke"
            }`}
          >
            {category}
          </Link>
        )
      })}
    </div>
  )
}