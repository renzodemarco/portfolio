import './NavbarContainer.css'
import img from '../../assets/profile.webp'
import Navbar from '../Navbar/Navbar'

const NavbarContainer = () => {
  return (
    <div className='navbar-container'>
      <img src={img} alt='Renzo Demarco' className='navbar-profile-img' />
      <Navbar />
    </div>
  )
}

export default NavbarContainer