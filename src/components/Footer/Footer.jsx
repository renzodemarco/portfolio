import { navItems } from '../../data/data.js'
import { Link } from 'react-scroll'
import './Footer.css'

const Footer = ({ toggleIsHome, onSetActive }) => {
  return (
    <footer>
      <nav className='footer-nav'>
        <h2 className='footer-title'>Navigation:</h2>
        <ul className='nav-list footer'>
          <li className='nav-item footer' onClick={toggleIsHome}>
            WELCOME!
          </li>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='nav-item footer'
            >
              <Link
                to={item.name}
                spy={true}
                offset={ item.name === 'AboutMe' ? -110 : -100 }
                smooth={true}
                duration={500}
                activeClass="active"
                onSetActive={() => onSetActive(item.label)}
              >{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='footer-legal'>
        <p>Webpage created by Renzo Demarco</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer