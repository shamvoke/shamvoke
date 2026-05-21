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
    <section className="relative w-full pt-15 overflow-hidden">
      <div className="mb-8 px-6 text-center">
        <h2 className="text-2xl font-semibold font-sham sm:font-sans tracking-tight text-black dark:text-white sm:text-4xl md:text-5xl">
          A SHAM WORLD
        </h2>
      </div>
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
              alt={`Logo ${index + 1}, image of Bree the blue smiley face. In diffrent colors and styles.`}
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