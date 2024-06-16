import './NavbarContainer.css'
import img from '../../assets/profile.webp'
import Navbar from '../Navbar/Navbar'

const NavbarContainer = () => {

  const navItems = [
    { name: 'Home', label: 'WELCOME!' },
    { name: 'AboutMe', label: 'ABOUT ME' },
    { name: 'Education', label: 'EDUCATION' },
    { name: 'WorkExperience', label: 'WORK EXPERIENCE' },
    { name: 'Projects', label: 'PROJECTS' },
    { name: 'Contact', label: 'CONTACT' }
  ];

  return (
    <div className='navbar-container'>
      <div className='img-container'>
        <img src={img} alt='Renzo Demarco' className='navbar-profile-img' />
      </div>
      <Navbar navItems={navItems}/>
    </div>
  )
}

export default NavbarContainer