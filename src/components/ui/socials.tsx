import { IconType } from "react-icons"
import { SiGithub, SiFacebook, SiYoutube, SiX, SiInstagram } from "react-icons/si"

type Social = {
  name: string
  href: string
  icon: IconType
  className: string
}

const socials: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/shamvoke",
    icon: SiGithub,
    className: "hover:text-sham",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/17911CWaJV/",
    icon: SiFacebook,
    className: "hover:text-[#1877f2]",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@shamvoke",
    icon: SiYoutube,
    className: "hover:text-[#ff0a16]",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/shamvoke",
    icon: SiX,
    className: "hover:text-[#000000]",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/sham.voke",
    icon: SiInstagram,
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