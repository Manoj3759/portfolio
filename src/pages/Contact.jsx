import React from 'react'
import "../style/contact.css"

const Contact = () => {
  return (
    
      <div className='contact'>
      <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'> I’m currently searching for opportunities for a developer role. <br /> If there is any vacancy my inbox is always open. Whether <br /> you have any further questions or just want to say hi, <br /> I’ll try my best to get back to you!</p>
        <div className='btn'>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.link/zd81py");
          }}
        >Say Hello</button>
        </div>
      </div>
    
  )
}

export default Contact