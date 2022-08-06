import React from 'react'
import MenuIcon from "@icons/menu-icon.png";
import "@styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo-header">
        <a href><img src="https://centroeducativonacional.com/images/logo.png" alt /></a>
      </div>
      <div className="nav-menu">
        <input type="checkbox" id="check" />    
        <label htmlFor="check" className="checkbtn">
          <i className="menu-icon"><img src={MenuIcon} alt /></i>
        </label>
        <ul>
          <li><a href>Inicio</a></li>
          <li><a href="">Programas Educativos</a></li>
          <li><a href>Nosotros</a></li>
          <li><a href>Contacto</a></li>
        </ul>
      </div>
</header>

  )
}

export default Navbar