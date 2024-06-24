import { Link } from 'react-scroll';
import i18n from '../../i18n';
import './Navbar.css'

const Navbar = ({ navItems, toggleIsHome, onSetActive }) => {

  const current = i18n.language

  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='nav-item' onClick={toggleIsHome}>
          {current === 'en' ? 'WELCOME!' : '¡BIEVENIDO!'}
        </li>
        {navItems.map((item, index) => (
          <li
            key={index}
            className='nav-item'
          >
            <Link
              to={item.name}
              spy={true}
              offset={item.name === 'AboutMe' ? -140 : -120}
              smooth={true}
              duration={500}
              activeClass="active"
              onSetActive={() => onSetActive(item.label)}
            >{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar