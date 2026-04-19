"use client"

import Image from "next/image"

type LogoLoopProps = {
  logos: string[]
  speed?: number
}

export default function LogoLoop({
  logos,
  speed = 28,
}: LogoLoopProps) {
  const items = [...logos, ...logos]

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent" />

      <div
        className="flex w-max animate-logo-loop gap-2 md:gap-12"
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full overflow-hidden"
          >
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              width={160}
              height={80}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}