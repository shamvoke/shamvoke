"use client"

import Link from "next/link"
import { FiMenu } from "react-icons/fi";
import SearchModal from "@/components/ui/search-modal"
import Sidebar from "@/components/ui/sidebar"
import ThemeToggle from "@/components/ui/theme-toggle"
import { useState } from "react"

const menu = [
  { title: "Home", url: "/" },
  { title: "Blog", url: "/blog" },
  { title: "Play", url: "/maze3d" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20 bg-white/80 dark:bg-black/80 transition-all duration-500 p-2 py-2 sm:px-0 sm:py-4 flex items-center justify-between h-16">
      <div className="flex items-center">
        <button
          onClick={() => setMenuOpen(true)}
          className="mr-1 sm:ml-6 lg:hidden"
          aria-label="Open menu"
        >
         <FiMenu className="w-8 h-10 text-sham dark:text-gray-300" />
        </button>
        <div className="m-0 h-8 leading-8 relative lg:ml-8">
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold font-sham  bg-linear-to-r from-sham to-sham dark:from-sham dark:to-voke bg-clip-text text-transparent transition-all"
          >
            SHAMVOKE
            <span className="absolute top-0 left-full ml-2 font-voke text-xs opacity-70 text-sham dark:text-voke">
              Blog
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {menu.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className="text-sm font-bold tracking-wide text-sham dark:text-white transition hover:text-voke hover:underline decoration-voke underline-offset-8"
            >
              {item.title}
            </Link>
          ))}
        </nav>

      </div>
        <div className="flex items-center gap-3 sm:mr-5">
          {/* <a
            href="https://www.youtube.com/@shamvoke"
            target="_blank"
            className="text-sm font-bold bg-[#ff0a16] text-white px-3 py-1 rounded-md"
          >
            YouTube
          </a> */}
          <SearchModal />
          <ThemeToggle />
        </div>
      </header>

      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}