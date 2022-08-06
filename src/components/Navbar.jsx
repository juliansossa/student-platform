import React from 'react'
import "@styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className="nav__left">
            <div>
                <img src="https://centroeducativonacional.com/images/logo.png" alt="" srcset="" />
            </div>
        </div>
        <div className="nav__right">
            <a href="">inicio</a>
            <a href="">programas educativos</a>
            <a href="">nosotros</a>
        </div>
    </nav>
  )
}

export default Navbar