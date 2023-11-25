import React from 'react'
import Typewriter from "typewriter-effect";

const Text = () => {
  return (
    <div>
        <Typewriter
    options={{
      strings: [
        "Digital World",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  /></div>
  )
}

export default Text


