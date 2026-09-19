"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    kofiWidgetOverlay?: {
      draw: (username: string, options: Record<string, string>) => void
    }
  }
}

const SCRIPT_ID = "kofi-overlay-script"
const STYLE_ID = "kofi-visibility-style"
const VISIBLE_CLASS = "kofi-visible"
const TARGET_ID = "post-content"

export default function KofiWidget() {
  useEffect(() => {
    let cancelled = false

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style")
      style.id = STYLE_ID
      style.textContent = `
        body:not(.${VISIBLE_CLASS}) [class*="floatingchat-container"],
        body:not(.${VISIBLE_CLASS}) [class*="floating-chat-kofi"] {
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
        [class*="floatingchat-container"],
        [class*="floating-chat-kofi"] {
          transition: opacity 0.25s ease, visibility 0.25s ease;
        }
        body.${VISIBLE_CLASS} .floatingchat-container-wrap,
        body.${VISIBLE_CLASS} .floating-chat-kofi-popup-iframe {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
        [class*="floatingchat-container"],
        [class*="floatingchat-container"] * {
          width: auto !important;
          max-width: none !important;
          white-space: nowrap !important;
          overflow: visible !important;
          scrollbar-width: none !important;
        }
        [class*="floatingchat-container"]::-webkit-scrollbar,
        [class*="floatingchat-container"] *::-webkit-scrollbar {
          display: none !important;
        }
        @media (min-width: 768px) {
        [class*="floatingchat-container"],
        [class*="floating-chat-kofi"] {
          display: none !important;
        }
      }
      `
      document.head.appendChild(style)
    }

    let observer: IntersectionObserver | null = null
    const card = document.getElementById(TARGET_ID)
    if (card) {
      observer = new IntersectionObserver(([entry]) => {
        const scrolledPast =
          !entry.isIntersecting && entry.boundingClientRect.bottom < 0
        document.body.classList.toggle(VISIBLE_CLASS, scrolledPast)
      })
      observer.observe(card)
    }

    const initWidget = () => {
      if (cancelled) return
      if (window.kofiWidgetOverlay) {
        window.kofiWidgetOverlay.draw("shamvoke", {
          type: "floating-chat",
          "floating-chat.donateButton.text": "Fuel the Curiosity",
          "floating-chat.donateButton.background-color": "#00b9fe",
          "floating-chat.donateButton.text-color": "#fff",
        })
      }
    }

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null

    if (!script) {
      script = document.createElement("script")
      script.id = SCRIPT_ID
      script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
      script.async = true
      script.onload = initWidget
      document.body.appendChild(script)
    } else {
      initWidget()
    }

    return () => {
      cancelled = true
      observer?.disconnect()
      document.body.classList.remove(VISIBLE_CLASS)
      document.getElementById(STYLE_ID)?.remove()
      document.getElementById("kofi-widget-overlay")?.remove()
      document.querySelector(".floatingchat-container-wrap")?.remove()
      document.querySelector(".floating-chat-kofi-popup-iframe")?.remove()
    }
  }, [])

  return null
}