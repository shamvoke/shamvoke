"use client"

import Typewriter from "typewriter-effect"

export default function HeroTypewriter() {
  return (
    <span>
      <Typewriter
        options={{
          strings: [
            "➤ Every Cursor has a point! Hover, let that click.",
            "➤ Crafting pixels into art, one design at a time.",
            "➤ Kindness is free, sprinkle that stuff everywhere.",
            "➤ Shamtimes I write blogs, shamtimes I write code..."
          ],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </span>
  )
}