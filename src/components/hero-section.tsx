import Image from "next/image"
import shamhero from "@/assets/images/BreeHero.webp"
import Greeting from "@/components/ui/greeting"
import HeroTypewriter from "@/components/ui/typewriter"
import ScrollToGrid from "@/components/ui/scrollToGrid";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-svh w-full bg-slate-600 dark:bg-black overflow-hidden">
      <Image
        src={shamhero}
        alt="Sham voke blog hero image, AKA Bree the blue smiley face"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute bg-[url('/pixels.png')] bg-repeat opacity-58 inset-0"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-white via-transparent to-transparent dark:from-black" />

      <div className="absolute flex h-full w-full flex-col justify-center pl-[10%] sm:w-[50%] mt-15">

        <Greeting />

        <h1 className="mt-2 w-[80vw] text-4xl font-sham font-extrabold drop-shadow sm:text-5xl text-shamvoke">
          Hello Milky Way!
        </h1>

        <div className="mt-5 min-h-[10vh] sm:min-h-[18vh] w-[80vw] text-2xl font-bold capitalize-first text-white/75 dark:text-voke font-voke leading-relaxed drop-shadow sm:text-[28px]">
          <HeroTypewriter/>
        </div>

        <div className="mt-12">
        <ScrollToGrid 
          className="
            group relative inline-flex items-center
            overflow-hidden
            rounded-full
            border border-cyan-400/20
            bg-white/5 dark:bg-black/45
            px-5 py-2.5
            font-voke text-lg font-bold
            text-white/75 dark:text-voke
            backdrop-blur-lg
            transition-all duration-300
            hover:border-voke
            hover:bg-voke/10
            hover:text-white
            hover:shadow-[0_0_28px_rgba(0,255,255,0.22)]
          "
        >
          
          <span
            className="
              mr-3 flex h-6 w-6 items-center justify-center
              text-3xl
              transition-transform duration-500
              group-hover:rotate-45
            "
          >
            🪐
          </span>

          <span className="relative z-10">
            Let&apos;s get curious...
          </span>
          
          <span
            className="
              absolute inset-y-0 -left-full w-1/2
              skew-x-[-20deg]
              bg-cyan-300/10
              transition-all duration-700
              group-hover:left-[120%]
            "
          />
        </ScrollToGrid>
        </div>
      </div>
    </section>
  )
}