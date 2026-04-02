"use client"

import Link from "next/link"
import Image from "next/image"
import SocialLinks from "@/components/ui/socials"

const menu = [
  { title: "Home", url: "/" },
  { title: "Blog", url: "/blog" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="max-w-200 mx-auto border-t border-border px-6 pt-6 mt-12 pb-24 text-center text-muted-foreground">
      <ul className="flex justify-center gap-4 mb-6">
        {menu.map((item) => (
          <li key={item.title}>
            <Link
              href={item.url}
              className="text-sm transition text-sham dark:text-muted-foreground hover:text-voke hover:uppercase hover:tracking-wider"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <SocialLinks />
      <Link href="/" className="block w-fit mx-auto mb-6">
        <Image
          src="/shamlogo.png"
          alt="Shamvoke brand Logo"
          width={150}
          height={150}
        />
      </Link>
      <p className="text-sm leading-6 text-sham dark:text-muted-foreground">
        Crafted with 💙 by sham
        <br />
        &copy; {year}{" "}
        <a
          href="https://webmeka.com"
          target="_blank"
          className="creator text-sham dark:text-muted-foreground hover:text-voke transition"
        >
          WEBMEKA STUDIO | All rights reserved.
        </a>
      </p>
    </footer>
  )
}