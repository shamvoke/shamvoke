"use client"

import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 text-muted-foreground">
      {/* CHANGED: text-gray-300 -> text-muted-foreground */}

      <div className="flex flex-col items-center mt-12">
        <Image
          src="/shamvoke.webp"
          alt="Sham Voke"
          width={200}
          height={200}
          className="rounded-full mb-6 border-2 border-voke"
          priority
        />

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
          {/* CHANGED: explicitly set text-foreground */}
          About Me
        </h1>

        <p className="text-lg text-foreground">
          {/* CHANGED: text-white -> text-foreground */}
          I&apos;m <span className="font-bold text-foreground">Sham</span>, <span className="line-through opacity-60">a webmeka</span>. A UI/UX Designer & Web Developer based in Kenya.
        </p>

        <p className="italic mt-3 text-muted-foreground">
          {/* CHANGED: text-gray-400 -> text-muted-foreground */}
          Constantly exploring the realms of code and creativity 🚀
        </p>
      </div>

      <div className="relative w-full h-[300px] ring mb-12 rounded-xl overflow-hidden">
        <Image
          src="/shamvoke-banner.webp"
          alt="Shamvoke wallpaper"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        {/* CHANGED: added dark:bg-black/60 for better contrast in dark mode */}
      </div>

      <div className="space-y-6 text-base leading-7 text-foreground">
        {/* CHANGED: text inherits text-foreground instead of default gray */}

        <p>
          👨‍💻 With a fervent love for{" "}
          <span className="underline decoration-sham">clean code</span> and{" "}
          <span className="underline decoration-voke">elegant designs</span>, I dive headfirst into the world of web development, always seeking to push the boundaries of what’s possible.
        </p>

        <p>
          🌱 I believe in the power of{" "}
          <span className="bg-black/20 dark:bg-voke/10 text-sham dark:text-voke px-2 py-0.5 rounded-md">continuous learning and growth.</span> Constantly expanding my skill set to stay ahead in the ever-evolving tech landscape.
        </p>

      </div>

      <div className="flex justify-center mt-10">
        <Image
          src="/shamart.webp"
          alt="Shamvoke Logo"
          width={2340}
          height={418}
          quality={100}
          className="opacity-80 hover:opacity-100 transition"
        />
      </div>

      <p className="mt-8 text-lg italic text-muted-foreground">
        {/* CHANGED: text-gray-400 -> text-muted-foreground */}
        Stay curious.
      </p>

      <p className="mt-2 font-bold bg-gradient-to-r from-sham to-voke bg-clip-text text-transparent">
        Sham
      </p>

    </section>
  )
}