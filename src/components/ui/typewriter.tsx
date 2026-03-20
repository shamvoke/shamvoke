"use client"

import Typewriter from "typewriter-effect"

export default function HeroTypewriter() {
  return (
    <span className="flex items-start gap-2">
      <span className="shrink-0">➤</span>

      <Typewriter
        options={{
          strings: [
            "All cursors have a point! Let that click.",
            "Crafting pixels into art, one design at a time.",
            "Kindness is free, sprinkle that stuff everywhere.",
            "FREE EDUCATION! FREE EDUCATION! FREE!"
          ],
          autoStart: true,
          loop: true,
          delay: 55,
          deleteSpeed: 50,
        }}
      />
    </span>
  )
}