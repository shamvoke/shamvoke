import HeroTypewriter from "@/components/ui/typewriter"

export default function HeroSection() {
  return (
    <section
      className="relative h-svh w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/shamlogo.png')" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage: "url('/pixels.png')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

      <div className="absolute flex h-full w-[80%] flex-col justify-center pl-[10%] sm:w-[50%] mt-15">
        
        <div className="text-sm text-white/75">
          welcome
        </div>

        <h1 className="mt-2 w-[80vw] text-4xl text-white font-bold drop-shadow sm:text-5xl">
          Hello Milky Way!
        </h1>

        <div className="mt-5 min-h-[10vh] w-[80vw] text-[22px] leading-relaxed text-white drop-shadow sm:text-[28px]">
          <HeroTypewriter/>
        </div>

        <div className="mt-12">
          <a
            href="#grid"
            className="inline-flex items-center rounded bg-black/60 px-4 py-2 text-lg font-bold text-white transition hover:bg-white/50 hover:shadow"
          >
            <span className="mr-2">📖</span>
            <span>Read Now</span>
          </a>
        </div>
      </div>
    </section>
  )
}