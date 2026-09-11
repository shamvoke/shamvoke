import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 text-muted-foreground">

      <div className="flex flex-col items-center mt-12">
        <Image
          src="/BigVokeLogo.svg"
          alt="Sham Voke profile picture."
          width={128}
          height={128}
          className="rounded-full size-50 sm:size-60 mb-6"
        />

        <h1 className="text-3xl sm:text-4xl font-sham font-bold mb-4 text-foreground">
          About Me
        </h1>

        <p className="text-lg text-foreground">
          I&apos;m <span className="font-bold text-foreground">Sham.</span> A Creative Designer And Web Developer. <span className="text-sham dark:text-voke opacity-60">A webmeka.</span> 🌍
        </p>

        <p className="italic mt-3 text-muted-foreground">
          Curiously exploring the realms of code & creativity🚀
        </p>
      </div>

      <div className="relative w-full h-50 sm:h-100 ring mb-12 rounded-xl overflow-hidden">
        <Image
          src="https://res.cloudinary.com/deudsgjbm/image/upload/v1780820862/01_Welcome-to-my-blog_jo4auv.webp"
          alt="Shamvoke wallpaper. A vibrant and dynamic design that captures the essence of creativity and innovation."
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6 text-base leading-7 text-foreground">

        <p>
          👨‍💻 With a fervent love for{" "}
          <span className="underline decoration-sham">clean code</span> and{" "}
          <span className="underline decoration-voke">elegant designs</span>, I dive headfirst into the world of web development, always seeking to push the boundaries of what&apos;s possible.
        </p>

        <Image
          src="https://res.cloudinary.com/deudsgjbm/image/upload/v1780931462/shamart_fdwqfe.webp"
          alt="Shamvoke Logo, The Official shamvoke logo, Feauturing Bree the blue smiley face, in a vibrant and artistic style. A creative and colorful representation of the shamvoke brand."
          width={839}
          height={150}
        />

        <p>
          🌱 I believe in the power of{" "}
          <span className="bg-black/20 dark:bg-voke/10 text-sham dark:text-voke px-2 py-0.5 rounded-md">continuous learning and growth.</span> Constantly expanding my skill set to stay ahead in the ever-evolving tech landscape.
        </p>
      <h1 className="text-3xl text-center sm:text-4xl font-sham font-bold mb-4 text-foreground">
          The Blog
      </h1>

      <p>
          A personal journal about the things I use, build, learn,
          break, fix, and dig about.
      </p>

      <p className="mt-8 text-lg italic text-sham dark:text-voke">
        Stay curious,
      </p>

      <p className="mt-2 font-bold text-sham">
        Sham.
      </p>

      </div>
    </section>
  )
}