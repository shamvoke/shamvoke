"use client"

import Typewriter from "typewriter-effect"

export default function HeroTypewriter() {
  return (
    <span>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("➤ Every Cursor has a point! Hover, <br /> let that click.")
            .pauseFor(1500)
            .deleteAll()
            .typeString("➤ Kindness is free, sprinkle that <br /> stuff everywhere.")
            .pauseFor(1500)
            .deleteAll()
            .typeString("➤ Tools I actually use on Linux, <br /> Windows and Android.")
            .start()
        }}
        options={{
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </span>
  )
}