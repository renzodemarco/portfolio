import { Link } from 'react-scroll';
import './Navbar.css'

const Navbar = ({ navItems, toggleIsHome }) => {

  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='nav-item' onClick={toggleIsHome}>
          WELCOME!
        </li>
        {navItems.map((item, index) => (
          <li
            key={index}
            className='nav-item'
          >
            <Link
              to={item.name}
              spy={true}
              offset={-160}
              smooth={true}
              duration={500}
              activeClass="active" 
            >{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar