import React from 'react'
import { Link } from 'react-router-dom'
import '../style/nav.css'
import BtnLOgo from './BtnLOgo';

const Nav = ({handleTheme}) => {

  return (
    <header>
         <section className="header-title-line">
          <div className="logo-container">
            <BtnLOgo Theme={handleTheme}/>
          </div>
            <button className="menu-button">
                <div className="menu-icon"></div>
            </button>
        </section>
    <nav><ul>
      <li> <Link to={'/'} >Home</Link></li>
      <li><Link to={'/project'} >Project</Link></li>
      <li><Link to={'/Experience'} >Experience</Link></li>
      <li><Link to={'/contact'} >Contact</Link></li>
    </ul>
    </nav>
    </header>
  )
}

export default Nav