"use client"

type SidebarProps = {
  open: boolean
  onClose: () => void
}

const menu = [
  { title: "Home", url: "/" },
  { title: "Blog", url: "/blog" },
  { title: "Projects", url: "/projects" },
  { title: "About", url: "/about" },
]

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-[240px] z-20 bg-gray-300 transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav className="pt-4">
        
        {/* Title */}
        <h2 className="mx-5 border-b border-black/40 text-black text-lg sm:text-xl leading-[50px]">
          Menu
        </h2>

        {/* Links */}
        <ul className="mt-2 sm:mt-3">
          {menu.map((item) => (
            <li key={item.title}>
              <a
                href={item.url}
                onClick={onClose}
                className="block px-5 py-4 text-black hover:text-white hover:bg-[var(--color-shamcolor)] transition"
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