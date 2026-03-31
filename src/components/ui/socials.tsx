import { Github, Facebook, Youtube, Twitter, Instagram } from "lucide-react"

const socials = [
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
    iconSize: "w-8 h-8",
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
      {socials.map(({ name, href, icon: Icon, className, iconSize }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="transition-transform hover:scale-110"
        >
          <Icon
            className={`${iconSize ?? "w-6 h-6"} text-muted-foreground transition ${className}`}
          />
        </a>
      ))}
    </div>
  )
}