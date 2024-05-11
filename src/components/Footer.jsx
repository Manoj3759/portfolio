import React from 'react'
import "../style/footer.css"
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Footer = () => {
    let Year=new Date()
    console.log(Year.getFullYear);
  return (
    <div className='footer'>
        <div className="socialMedia">
        <Link to='https://instagram.com/manoj.r3579?igshid=ZDdkNTZiNTM='><BsInstagram /></Link>
        <Link to='https://t.me/Manojr3759'><BsTelegram /></Link>
        <Link to='https://www.facebook.com/manoj.r.75248?mibextid=ZbWKwL'><BsFacebook /></Link>
        <Link to='https://www.linkedin.com/in/manoj-r-0379b7241'><BsLinkedin /></Link>
      </div>
      <p> Copyright &copy; {Year.getFullYear()} </p>
    </div>
  )
}

export default Footer