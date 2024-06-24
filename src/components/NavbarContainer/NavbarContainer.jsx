import './NavbarContainer.css'
import img from '../../assets/profile.webp'
import Navbar from '../Navbar/Navbar'
import { navItems as navItemsEN } from '../../data/data.en.js';
import { navItems as navItemsES } from '../../data/data.es.js';
import i18n from '../../i18n.js'

const NavbarContainer = ({ toggleIsHome, onSetActive }) => {

  const current = i18n.language
  const navItems = current === 'en' ? navItemsEN : navItemsES;

  return (
    <div className='navbar-container'>
      <div className='img-container'>
        <img src={img} alt='Renzo Demarco' className='navbar-profile-img' />
      </div>
      <Navbar navItems={navItems} toggleIsHome={toggleIsHome} onSetActive={onSetActive}/>
    </div>
  )
}

export default NavbarContainer