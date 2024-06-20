import { useState } from 'react';
import { navItems } from '../../data/data.js'
import './ResponsiveNavbar.css'

const ResponsiveNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="responsive-navbar">
      <div className="responsive-icon" onClick={toggleNavbar}>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
      </div>
      <ul className={isOpen ? 'nav-links nav-active' : 'nav-links'}>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default ResponsiveNavbar