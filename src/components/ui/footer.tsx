import Link from "next/link"
import Image from "next/image"
import breehero from "@/assets/images/BreeHero.webp"
import SocialLinks from "@/components/ui/socials"
import ScrollToTop from "@/components/ui/scrollToTop"

const menu = [
  { title: "Home", url: "/" },
  { title: "Blog", url: "/blog" },
  { title: "Play", url: "/maze3d" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
]
const legal = [
  { title: "Privacy Policy", url: "/privacy-policy" },
  { title: "Terms of Service", url: "/terms-of-service" },
  { title: "Cookie Policy", url: "/cookie-policy" },
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
              className="text-lg transition text-sham dark:text-muted-foreground hover:text-voke hover:uppercase hover:tracking-wider"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <SocialLinks />
      <Link href="/" className="block w-fit mx-auto mb-4">
        <Image
          src={breehero}
          alt="Shamvoke brand Logo, AKA Bree the blue smiley face"
          className="size-40"
        />
      </Link>
      <p className="text-lg leading-6 text-sham dark:text-muted-foreground">
        <span className="block mb-3">Crafted with 💙 by sham</span>
        <span>
          &copy; {year}{" "}
          <a
            href="https://webmeka.com"
            target="_blank"
            className="creator text-sham dark:text-muted-foreground hover:text-voke transition"
          >
            WEBMEKA | All rights reserved
          </a>
        </span>
      </p>

      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-sm">
        {legal.map((item) => (
          <li key={item.title}>
            <Link
              href={item.url}
              className="text-sham dark:text-muted-foreground/60 hover:text-voke transition hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <ScrollToTop />
    </footer>
  )
}