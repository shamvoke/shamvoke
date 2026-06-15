"use client"

import { useEffect, useRef, useState } from "react"
import { FiSearch, FiX } from "react-icons/fi";
import { LuLoader } from "react-icons/lu";
import Link from "next/link"

type PagefindSubResult = {
  title: string
  url: string
  excerpt: string
}

type PagefindResult = {
  id: string
  data: () => Promise<{
    url: string
    meta: {
      title?: string
      shamthing?: string
    }
    excerpt?: string

    sub_results?: PagefindSubResult[]
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
  shamthing?: string
  subResults?: PagefindSubResult[]
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
  return url.replace(/\.html(?=#|$)/, "")
}

export default function SearchModal() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [pagefind, setPagefind] = useState<Pagefind | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const searchRequestRef = useRef(0)

  useEffect(() => {
    if (!open) return

    if (!pagefind) {
      loadPagefind().then(setPagefind)
    }
  }, [open, pagefind])

  useEffect(() => {
  if (!open) return

  const originalOverflow = document.body.style.overflow

  document.body.style.overflow = "hidden"

  return () => {
    document.body.style.overflow = originalOverflow
  }
}, [open])

useEffect(() => {
  if (!open) return

  const dialog = dialogRef.current
  if (!dialog) return

  const focusableElements = dialog.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  inputRef.current?.focus()

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      closeSearch()
      return
    }

    if (event.key !== "Tab" || focusableElements.length === 0) return

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }

  window.addEventListener("keydown", handleKeyDown)
  return () => window.removeEventListener("keydown", handleKeyDown)
}, [open])

  function closeSearch() {
    setOpen(false)
    setQuery("")
    setResults([])
    setLoading(false)
  }

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      const isSearchShortcut =
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"

      if (isSearchShortcut) {
        event.preventDefault()
        setOpen(true)
      }
    }

  window.addEventListener("keydown", handleShortcut)
  return () => window.removeEventListener("keydown", handleShortcut)
}, [])

async function handleSearch(value: string) {
  setQuery(value)

  const trimmedValue = value.trim()
  const requestId = searchRequestRef.current + 1
  searchRequestRef.current = requestId

  if (!trimmedValue) {
    setResults([])
    setLoading(false)
    return
  }

  if (!pagefind) {
    return
  }

  setLoading(true)

  const search = await pagefind.search(trimmedValue)
  if (requestId !== searchRequestRef.current) {
    return
  }

  const data = await Promise.all(
    search.results.slice(0, 8).map(async (result) => {
      const item = await result.data()

      return {
        url: cleanUrl(item.url),
        title: item.meta.title || "Untitled",
        shamthing: item.meta.shamthing || "",
        excerpt: item.excerpt || "",
        subResults: item.sub_results?.slice(0, 3).map((subResult) => ({
          title: subResult.title,
          url: cleanUrl(subResult.url),
          excerpt: subResult.excerpt,
        })),
      }
    })
  )
  if (requestId !== searchRequestRef.current) {
    return
  }

  setResults(data)
  setLoading(false)
}

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-sham transition hover:text-voke dark:text-foreground dark:hover:text-voke"
        aria-label="Search Shamvoke"
      >
        <FiSearch className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label="Close search"
            onClick={closeSearch}
          />

          <div 
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="search-dialog-title"
          className="relative mx-auto mt-24 w-[92vw] max-w-2xl rounded-3xl border border-sham/10 bg-white p-4 shadow-2xl dark:border-voke/20 dark:bg-[#02044a]"
          >
            <h2 id="search-dialog-title" className="sr-only">
              Search Shamvoke
            </h2>
            <div className="flex items-center gap-3 rounded-2xl border border-sham/10 bg-gray-50 px-4 py-3 dark:border-voke/20 dark:bg-black/30">
              <FiSearch className="h-5 w-5 text-sham dark:text-voke" />

              <input
                ref={inputRef}
                value={query}
                onChange={(event) => handleSearch(event.target.value)}
                placeholder="Search and thou shall scroll..."
                className="w-full bg-transparent text-base text-sham outline-none placeholder:text-gray-400 dark:text-white"
              />

              {loading && <LuLoader className="h-5 w-5 animate-spin text-voke" />}

              <button
                type="button"
                onClick={closeSearch}
                className="text-sham transition hover:text-voke dark:text-gray-300 dark:hover:text-voke"
                aria-label="Close search"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 max-h-[60vh] overflow-y-auto">
              {!query.trim() && (
                <p className="px-2 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                  Search posts, Linux chaos, design thoughts, code notes, and shamthings.
                </p>
              )}

              {query.trim() && !loading && results.length === 0 && (
                <p className="px-2 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                  No results found.
                </p>
              )}

              <div className="space-y-3">
                {results.map((result) => (
                  <div
                    key={result.url}
                    className="rounded-2xl border border-transparent p-4 transition hover:border-voke/40 hover:bg-sham/5 dark:hover:bg-white/5"
                  >
                    <Link
                      href={result.url}
                      onClick={closeSearch}
                      className="block"
                    >
                      <h3 className="font-bold text-sham dark:text-white">
                        {result.title}
                      </h3>
                      <p className="mt-2 text-sm font-voke text-gray-600 dark:text-gray-300">
                        {result.shamthing}
                      </p>
                    </Link>
                    {result.subResults && result.subResults.length > 0 && (
                      <div className="mt-3 space-y-2 border-l border-voke/30 pl-3">
                        {result.subResults.map((subResult) => (
                          <Link
                            key={subResult.url}
                            href={subResult.url}
                            onClick={closeSearch}
                            className="block rounded-xl px-3 py-2 transition hover:bg-voke/10"
                          >
                            <p className="text-sm font-semibold text-sham dark:text-voke">
                              {subResult.title}
                            </p>

                            {subResult.excerpt && (
                              <p
                                className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400"
                                dangerouslySetInnerHTML={{
                                  __html: subResult.excerpt,
                                }}
                              />
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-between px-2 text-xs text-gray-400">
              <span>Press Esc to close</span>
              <span>Stay Curious!</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}