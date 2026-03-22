"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // CHANGED: defer setMounted to next animation frame to avoid synchronous setState warning
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="pr-3 text-xl"
    >
      {theme === "dark" ? (
        <Sun className="w-7 h-7" />
        // CHANGED: replaced 🌞 with Lucide Sun icon
      ) : (
        <Moon className="w-7 h-7 text-white" />
        // CHANGED: replaced 🌙 with Lucide Moon icon
      )}
    </button>
  )
}