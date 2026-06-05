"use client"

import { useEffect, useRef, useState } from "react"
import { Search, X, Loader2 } from "lucide-react"
import Link from "next/link"

type PagefindResult = {
  id: string
  data: () => Promise<{
    url: string
    meta: {
      title?: string
    }
    excerpt?: string
  }>
}

type PagefindSearchResponse = {
  results: PagefindResult[]
}

type Pagefind = {
  search: (query: string) => Promise<PagefindSearchResponse>
}

type SearchResult = {
  url: string
  title: string
  excerpt: string
}

async function loadPagefind(): Promise<Pagefind | null> {
  try {
    return await new Function(
      "return import('/pagefind/pagefind.js')"
    )()
  } catch {
    return null
  }
}

function cleanUrl(url: string) {
  return url.replace(/\.html$/, "")
}

export default function SearchModal() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [pagefind, setPagefind] = useState<Pagefind | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return

    inputRef.current?.focus()

    if (!pagefind) {
      loadPagefind().then(setPagefind)
    }
  }, [open, pagefind])

  useEffect(() => {
    if (!open) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open])

  useEffect(() => {
    if (!open) return

    function handleShortcut(event: KeyboardEvent) {
      const isSearchShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k"

      if (isSearchShortcut) {
        event.preventDefault()
        setOpen(true)
      }
    }

    window.addEventListener("keydown", handleShortcut)
    return () => window.removeEventListener("keydown", handleShortcut)
  }, [open])

  async function handleSearch(value: string) {
    setQuery(value)

    if (!value.trim()) {
      setResults([])
      return
    }

    if (!pagefind) {
      return
    }

    setLoading(true)

    const search = await pagefind.search(value)

    const data = await Promise.all(
      search.results.slice(0, 8).map(async (result) => {
        const item = await result.data()

        return {
          url: cleanUrl(item.url),
          title: item.meta.title || "Untitled",
          excerpt: item.excerpt || "",
        }
      })
    )

    setResults(data)
    setLoading(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-sham transition hover:text-voke dark:text-gray-300 dark:hover:text-voke"
        aria-label="Search Shamvoke"
      >
        <Search className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label="Close search"
            onClick={() => setOpen(false)}
          />

          <div className="relative mx-auto mt-24 w-[92vw] max-w-2xl rounded-3xl border border-sham/10 bg-white p-4 shadow-2xl dark:border-voke/20 dark:bg-[#02044a]">
            <div className="flex items-center gap-3 rounded-2xl border border-sham/10 bg-gray-50 px-4 py-3 dark:border-voke/20 dark:bg-black/30">
              <Search className="h-5 w-5 text-sham dark:text-voke" />

              <input
                ref={inputRef}
                value={query}
                onChange={(event) => handleSearch(event.target.value)}
                placeholder="Search the Shamverse..."
                className="w-full bg-transparent text-base text-sham outline-none placeholder:text-gray-400 dark:text-white"
              />

              {loading && <Loader2 className="h-5 w-5 animate-spin text-voke" />}

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sham transition hover:text-voke dark:text-gray-300 dark:hover:text-voke"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 max-h-[60vh] overflow-y-auto">
              {!query.trim() && (
                <p className="px-2 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                  Search posts, Linux chaos, design thoughts, code notes, and Sham things.
                </p>
              )}

              {query.trim() && !loading && results.length === 0 && (
                <p className="px-2 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                  No results found.
                </p>
              )}

              <div className="space-y-3">
                {results.map((result) => (
                  <Link
                    key={result.url}
                    href={result.url}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl border border-transparent p-4 transition hover:border-voke/40 hover:bg-sham/5 dark:hover:bg-white/5"
                  >
                    <h3 className="font-bold text-sham dark:text-white">
                      {result.title}
                    </h3>

                    {result.excerpt && (
                      <p
                        className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300"
                        dangerouslySetInnerHTML={{ __html: result.excerpt }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-between px-2 text-xs text-gray-400">
              <span>Press Esc to close</span>
              <span>Powered by Pagefind</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}