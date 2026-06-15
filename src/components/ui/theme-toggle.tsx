"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="pr-3 text-xl text-foreground"
    >
      {isDark ? (
        <FiSun className="h-7 w-7" />
      ) : (
        <FiMoon className="h-7 w-7 text-sham" />
      )}
    </button>
  )
}