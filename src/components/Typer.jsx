import React from 'react'
import Typewriter from 'typewriter-effect'
import "../style/typer.css"

const Typer = () => {
  return (
    <div className='typer-container'>
          <Typewriter
      options={{
        strings: [
          "Java Full Stack.",
          "MERN Full Stack.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  )
}

export default Typer