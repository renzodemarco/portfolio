import './NavbarContainer.css'
import img from '../../assets/profile.webp'
import { navItems } from '../../data/data.js'
import Navbar from '../Navbar/Navbar'

const NavbarContainer = ({ toggleIsHome, onSetActive }) => {

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