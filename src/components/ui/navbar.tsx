"use client"

import Link from "next/link"
import { Menu, Search } from "lucide-react"
import Sidebar from "@/components/ui/sidebar"
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10 bg-black/80 transition-all duration-500 px-4 py-2 sm:px-0 sm:py-4 flex items-center justify-between">

      {/* Left SIde */}
      <div className="flex items-center">
        {/* Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="mr-4 sm:ml-6"
          aria-label="Open menu"
        >
         <Menu className="w-6 h-6 text-gray-300" />
        </button>

        {/* Logo */}
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

        {/* Right side */}
        <div className="flex items-center gap-3 sm:mr-5">
          
          {/* YouTube Button */}
          <a
            href="https://www.youtube.com/@shamvoke"
            target="_blank"
            className="text-xs font-bold bg-[#ff0a16] text-white px-3 py-1 rounded-md"
          >
            YouTube
          </a>

          {/* Search Button */}
          <button
            className="w-8 h-8 flex items-center justify-center"
            aria-label="Search"
          >
          <Search className="w-6 h-6 text-gray-300" />
          </button>
        </div>
      </header>

      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 z-[17] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  )
}