import type { HTMLAttributes } from "react"

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "pagefind-modal-trigger": HTMLAttributes<HTMLElement> & {
        compact?: boolean | ""
        "hide-shortcut"?: boolean | ""
        placeholder?: string
        shortcut?: string
        instance?: string
        class?: string
      }

      "pagefind-modal": HTMLAttributes<HTMLElement> & {
        "reset-on-close"?: boolean | ""
        instance?: string
        class?: string
      }
    }
  }
}