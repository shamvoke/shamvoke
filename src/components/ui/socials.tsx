import type { LucideIcon } from "lucide-react"
import { Github, Facebook, Youtube, Twitter, Instagram } from "lucide-react"

type Social = {
  name: string
  href: string
  icon: LucideIcon
  className: string
}

const socials: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/shamvoke",
    icon: Github,
    className: "hover:text-sham",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/17911CWaJV/",
    icon: Facebook,
    className: "hover:text-[#1877f2]",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@shamvoke",
    icon: Youtube,
    className: "hover:text-[#ff0a16]",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/shamvoke",
    icon: Twitter,
    className: "hover:text-voke",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/sham.voke",
    icon: Instagram,
    className: "hover:text-[#e4405f]",
  },
]

export default function SocialLinks() {
  return (
    <div className="mb-6 flex justify-center gap-5">
      {socials.map(({ name, href, icon: Icon, className }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="transition-transform hover:scale-110"
        >
          <Icon
            className={`size-7 text-muted-foreground transition ${className}`}
          />
        </a>
      ))}
    </div>
  )
}