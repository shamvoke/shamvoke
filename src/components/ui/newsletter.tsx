import { Mail } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="mx-auto w-full max-w-4xl pb-6">
      <div className="relative overflow-hidden rounded-[1.7rem] bg-linear-to-r from-sham to-voke p-px">
        <div className="absolute inset-0 bg-linear-to-br from-sham/20 via-transparent to-voke/20" />

        <div className="relative rounded-[1.7rem] bg-black/85 px-5 py-5 text-left backdrop-blur-xl sm:px-7">

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Get{" "}
            <span className="bg-linear-to-r from-sham to-voke bg-clip-text text-transparent font-sham">
              shamthing
            </span>{" "}
            in your inbox
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
            Subscribe to get the latest posts sent to your email.
          </p>

          <form className="mt-5 grid grid-cols-[1fr_auto] gap-3">
            <label className="relative min-w-0">
              <span className="sr-only">Email address</span>

              <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/45" />

              <input
                type="email"
                required
                placeholder="Enter your email"
                className="h-10 w-full rounded-2xl border border-white/10 bg-white/6 pl-12 pr-4 text-base text-white outline-none transition placeholder:text-white/40 focus:border-cyan-300/60 focus:bg-white/9 focus:ring-4 focus:ring-cyan-300/10"
              />
            </label>

            <button
              type="submit"
              className="h-10 rounded-2xl bg-linear-to-r from-sham to-voke px-5 text-sm font-semibold text-white transition hover:scale-[1.02] active:scale-[0.98] sm:px-7 sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}