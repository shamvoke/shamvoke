"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const [formState, setFormState] = useState({
    email: "",
  })

  const [status, setStatus] = useState("")
  const [statusType, setStatusType] = useState<
    "success" | "error" | "loading" | ""
  >("")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setStatus("Joining...")
    setStatusType("loading")
    setIsSuccess(false)

    const formData = new FormData()
    formData.append("email", formState.email)

    try {
      const res = await fetch("https://formspree.io/f/xgoqepwe", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (!res.ok) throw new Error("Failed to submit")

      setStatus("You're in 💙")
      setStatusType("success")
      setIsSuccess(true)

      setTimeout(() => {
        setIsSuccess(false)
      }, 2000)

      setFormState({ email: "" })
    } catch (error) {
      console.error(error)
      setStatus("Oops! Something went wrong.")
      setStatusType("error")
      setIsSuccess(false)
    }
  }

  return (
    <section className="pt-15 max-w-3xl mx-auto w-full pb-6 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[1.7rem] bg-linear-to-r from-sham to-voke p-px">
        <div className="absolute inset-0 bg-linear-to-br from-sham/20 via-transparent to-voke/20" />

        <div className="relative rounded-[1.7rem] bg-black/85 px-5 py-5 text-left backdrop-blur-xl sm:px-7">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Get{" "}
            <span className="bg-linear-to-r from-sham to-voke bg-clip-text font-sham text-transparent">
              shamthing
            </span>{" "}
            in your inbox
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
            Occasional notes on design, tools, and tech explorations.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-5 grid grid-cols-[1fr_auto] gap-3"
          >
            <label className="relative min-w-0">
              <span className="sr-only">Email address</span>

              <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/45" />

              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="h-10 w-full rounded-2xl border border-white/10 bg-white/6 pl-12 pr-4 text-base text-white outline-none transition placeholder:text-white/40 focus:border-cyan-300/60 focus:bg-white/9 focus:ring-4 focus:ring-cyan-300/10"
              />
            </label>

            <button
              type="submit"
              disabled={statusType === "loading"}
              className={`h-10 rounded-2xl px-5 text-sm font-semibold text-white transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-80 sm:px-7 sm:text-base ${
                isSuccess
                  ? "bg-green-500"
                  : "bg-linear-to-r from-sham to-voke hover:scale-[1.02]"
              }`}
            >
              {statusType === "loading"
                ? "Joining..."
                : isSuccess
                  ? "Joined ✓"
                  : "Subscribe"}
            </button>
          </form>

          {status && (
            <p
              className={`mt-3 text-sm ${
                statusType === "success"
                  ? "text-cyan-300"
                  : statusType === "error"
                    ? "text-red-400"
                    : "text-white/70"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}