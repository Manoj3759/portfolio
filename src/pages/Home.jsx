import React from 'react'
import {GithubFilled} from '@ant-design/icons';
import {LinkedinFilled} from '@ant-design/icons';
import { SkypeFilled  } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "../style/home.css"
import Typer from './../components/Typer';

const Home = () => {
  return (
    <div className='home'>
      <div className="about">
        <h2>Hi,My name is Manoj R,</h2>
        <div className='prompt'>
        <p> a developer eager to showcase my skills and creativity through my portfolio.I'm excited to demonstrate my ability to build innovative and user-friendly software solutions, and 
          I specialize in
          <h4>
            <Typer/>
          </h4>
           </p>
          <Link to={'https://join.skype.com/invite/vkIN0BdF22Uk'}><SkypeFilled /></Link>
          <Link to={'https://github.com/Manoj3759/manoj'}><GithubFilled /></Link>
          <Link to={'https://www.linkedin.com/in/manoj-r-0379b7241'}><LinkedinFilled /></Link>
          </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End: </h2>
            <span><b>
              VueJS, NuxtJS, ReactJS, VueX, HTML, CSS, BootStrap, JavaScript, TypeScript</b>
            </span>
          </li>
          <li className="item">
            <h2>Back-End:</h2>
            <span> <b>
              NodeJS, CoreJava , ExpressJS,
              MySQL, MongoDB, Oracle SQL</b>
            </span>
          </li>
          <li className="item">
            <h2>Languages: </h2>
            <span><b>JavaScript, Java, TypeScript</b></span>
          </li>
        </ol>
      </div>
    </div>

  )
}
export default Home
