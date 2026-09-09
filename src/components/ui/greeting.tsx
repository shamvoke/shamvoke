"use client"

import { useEffect, useState } from "react"

export default function Greeting() {
  const [showKaribu, setShowKaribu] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowKaribu((current) => !current)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-7 text-xl font-voke text-white/75 dark:text-voke">
      <span
        className={`absolute inset-0 transition-opacity duration-2000 ${
          showKaribu ? "opacity-0" : "opacity-100"
        }`}
      >
        welcome
      </span>

      <span
        className={`absolute inset-0 transition-opacity duration-4000 ${
          showKaribu ? "opacity-100" : "opacity-0"
        }`}
      >
        karibu
      </span>
    </div>
  )
}