"use client"

import Typewriter from "typewriter-effect"

export default function HeroTypewriter() {
  return (
    <span>
      <Typewriter
        options={{
          strings: [
            "➤ All cursors have a point! Let that click.",
            "➤ Crafting pixels into art, one design at a time.",
            "➤ Kindness is free, sprinkle that stuff everywhere.",
            "➤ Shamtimes I write blogs, shamtimes I write code..."
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