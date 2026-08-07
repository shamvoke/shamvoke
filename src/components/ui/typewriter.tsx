"use client"

import Typewriter from "typewriter-effect"

export default function HeroTypewriter() {
  return (
    <span>
      <Typewriter
        options={{
          strings: [
            "➤ Every Cursor has a point! Hover, let that click.",
            "➤ Kindness is free, sprinkle that stuff everywhere.",
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