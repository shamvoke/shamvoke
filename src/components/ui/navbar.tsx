"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import Sidebar from "@/components/ui/sidebar"
import ThemeToggle from "@/components/ui/theme-toggle"
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10 bg-black/80 transition-all duration-500 p-2 py-2 sm:px-0 sm:py-4 flex items-center justify-between h-16">
      <div className="flex items-center">
        <button
          onClick={() => setMenuOpen(true)}
          className="mr-1 sm:ml-6"
          aria-label="Open menu"
        >
         <Menu className="w-8 h-8 text-gray-300" />
        </button>
        <h1 className="m-0 h-8 leading-8 relative">
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sham to-voke bg-clip-text text-transparent"
          >
            SHAMVOKE
            <span className="absolute top-0 left-full ml-2 text-[10px] opacity-70 text-voke">
              Blog
            </span>
          </Link>
        </h1>

      </div>
        <div className="flex items-center gap-3 sm:mr-5">
          <a
            href="https://www.youtube.com/@shamvoke"
            target="_blank"
            className="text-sm font-bold bg-[#ff0a16] text-white px-3 py-1 rounded-md"
          >
            YouTube
          </a>
          <ThemeToggle />
        </div>
      </header>

      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 z-[17] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  )
}