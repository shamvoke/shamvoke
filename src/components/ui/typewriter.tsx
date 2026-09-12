"use client"

import Typewriter from "typewriter-effect"

export default function HeroTypewriter() {
  return (
    <span>
      <Typewriter
        options={{
          strings: [
            "➤ Every Cursor has a point! Hover, <br /> let that click.",
            "➤ Kindness is free, sprinkle that <br /> stuff everywhere.",
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