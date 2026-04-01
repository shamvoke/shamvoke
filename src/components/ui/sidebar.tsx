"use client"

import Link from "next/link"
import SocialLinks from "@/components/ui/socials"
import { X, Coffee } from "lucide-react"

type SidebarProps = {
  open: boolean
  onClose: () => void
}

const menu = [
  { title: "Home", url: "/" },
  { title: "Blog", url: "/blog" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
]

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-300
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      <aside
        className={`fixed top-0 left-0 z-40 h-full w-72 transform border-r border-white/10
        bg-black/80 backdrop-blur-xl shadow-2xl transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="absolute inset-0 bg-linear-to-b from-sham/20 via-transparent to-voke/15 pointer-events-none" />

        <nav className="relative flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <h2 className="text-2xl font-bold font-sham bg-linear-to-r from-sham to-voke bg-clip-text text-transparent">
              Menu
            </h2>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-full p-2 text-2xl font-extrabold text-white/80 hover:bg-white/10 hover:text-white transition"
            >
              <X />
            </button>
          </div>

          <div className="px-5 pt-4 pb-2 flex items-center gap-2">
            <p className="text-sm text-voke/50 font-voke">
              If you like shamthing here, buy <span className="font-bold">yourself</span> a coffee
            </p>
            <Coffee className="w-4 h-4 text-voke/80" />
          </div>

          <ul className="mt-2 flex flex-col gap-1 px-3">
            {menu.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.url}
                  onClick={onClose}
                  className="group flex items-center rounded-xl px-4 py-3 text-white/85 transition
                  hover:bg-white/8 hover:text-white"
                >
                  <span className="mr-3 text-voke/80 transition group-hover:translate-x-1">
                    →
                  </span>
                  <span className="font-medium tracking-wide">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto border-t border-white/10 px-5 py-4">
            <SocialLinks />
          </div>
        </nav>
      </aside>
    </>
  )
}