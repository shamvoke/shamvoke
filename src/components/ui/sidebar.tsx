"use client"

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
    <aside
      className={`fixed top-0 left-0 h-full w-60 z-30 bg-linear-to-r from-sham to-voke transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav>
        
        {/* Title */}
        <h2 className="px-5 pt-4 border-b bg-black/65 border-black/40 hover:text-black text-lg sm:text-xl leading-12 font-bold">
          Menu
        </h2>

        {/* Links */}
        <ul>
          {menu.map((item) => (
            <li key={item.title}>
              <a
                href={item.url}
                onClick={onClose}
                className="block px-5 py-4 hover:text-black hover:bg-linear-to-r hover:from-voke hover:to-sham transition"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}