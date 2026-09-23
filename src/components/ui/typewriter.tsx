"use client"

import Typewriter from "typewriter-effect"

export default function HeroTypewriter() {
  return (
    <span>
      <Typewriter
        onInit={(typewriter) => {
          const lines = [
            "➤ Every Cursor has a point! Hover, <br /> let that click.",
            "➤ Kindness is free, sprinkle that <br /> stuff everywhere.",
          ]

          const [first, second] =
            Math.random() < 0.5 ? lines : [lines[1], lines[0]]

          typewriter
            .typeString(first)
            .pauseFor(1500)
            .deleteAll()
            .typeString(second)
            .pauseFor(1500)
            .deleteAll()
            .typeString("➤ Tools I actually use on Linux, <br /> Windows and Android.")
            .start()
        }}
        options={{
          autoStart: true,
          loop: false,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </span>
  )
}