"use client"

import { useState } from "react"

export default function ContactSham() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const actionUrl = form.action

    try {
      const res = await fetch(actionUrl, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (res.ok) setSubmitted(true)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section className="flex justify-center px-8 py-15">
      <div className="w-full max-w-lg">
        <h2 className="text-3xl font-bold m-10 text-center text-foreground">
          Talk to me
        </h2>

        {submitted ? (
          <p className="text-green-500 text-center font-semibold">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form
            className="space-y-4"
            method="POST"
            action="https://formspree.io/f/YOUR_FORM_ID"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="_subject"
              value="New contact!"
            />
            <input
              type="hidden"
              name="_next"
              value="https://shamvoke.com/contact?success=true"
            />

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 bg-card text-foreground border-b border-border focus:outline-none focus:border-sham transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-3 bg-card text-foreground border-b border-border focus:outline-none focus:border-sham transition"
            />

            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-card text-foreground border-b border-border focus:outline-none focus:border-sham transition resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 text-primary-foreground bg-linear-to-r from-sham to-voke font-bold rounded-md hover:uppercase hover:tracking-wider transition"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  )
}