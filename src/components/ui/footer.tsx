"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Github,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"

const menu = [
  { title: "Home", url: "/" },
  { title: "Blog", url: "/blog" },
  { title: "Projects", url: "/projects" },
  { title: "About", url: "/about" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="max-w-[800px] mx-auto border-t border-white/10 px-6 py-6 mt-12 mb-24 text-center text-gray-400">
      
      {/* Menu */}
      <ul className="flex justify-center gap-4 mb-6">
        {menu.map((item) => (
          <li key={item.title}>
            <Link
              href={item.url}
              className="text-sm transition hover:text-voke hover:uppercase hover:tracking-wider"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 mb-6">
        <a href="https://github.com/" target="_blank">
          <Github className="w-6 h-6 hover:text-[var(--color-shamcolor)] transition" />
        </a>
        <a href="https://facebook.com/" target="_blank">
          <Facebook className="w-6 h-6 hover:text-[var(--color-shamcolor)] transition" />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <Twitter className="w-6 h-6 hover:text-[var(--color-shamcolor)] transition" />
        </a>
        <a href="https://instagram.com/" target="_blank">
          <Instagram className="w-6 h-6 hover:text-[var(--color-shamcolor)] transition" />
        </a>
        <a href="https://youtube.com/@shamvoke" target="_blank">
          <Youtube className="w-6 h-6 hover:text-[#ff0a16] transition" />
        </a>
      </div>

      {/* Logo */}
        <Image
        src="/shamlogo.png"
        alt="Shamvoke brand Logo"
        width={150}
        height={150}
        className="mx-auto mb-6"
        />

      {/* Text */}
      <p className="text-sm leading-6">
        <span className="font-bold">Blog</span> crafted with 💙 by{" "} sham
        <br />
        &copy; {year}{" "}
        <a
          href="https://webmeka.com"
          target="_blank"
          className="creator hover:text-voke transition"
        >
          WEBMEKA STUDIO | All rights reserved.
        </a>
      </p>
    </footer>
  )
}