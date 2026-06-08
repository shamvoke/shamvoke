"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

type LogoLoopProps = {
  logos: string[]
  speed?: number
}

export default function LogoLoop({ logos, speed = 28 }: LogoLoopProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const items = [...logos, ...logos]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-15"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent" />

      <div
        className="flex w-max animate-logo-loop gap-2 md:gap-12"
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: isVisible ? "running" : "paused",
        }}
      >
        {items.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="flex h-40 w-40 shrink-0 items-center justify-center overflow-hidden rounded-full"
          >
            <Image
              src={src}
              alt={`Bree logo variation ${index + 1}`}
              width={160}
              height={160}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}