import './NavbarContainer.css'
import img from '../../assets/profile.webp'
import Navbar from '../Navbar/Navbar'
import { useTranslation } from 'react-i18next'

const NavbarContainer = ({ toggleIsHome, onSetActive }) => {

  const { t } = useTranslation()
  const navItems = t('navItems', { returnObjects: true });

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