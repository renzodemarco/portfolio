import './NavbarContainer.css'
import img from '../../assets/profile.webp'
import Navbar from '../Navbar/Navbar'

const NavbarContainer = ({ toggleIsHome }) => {

  const navItems = [
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
      <Navbar navItems={navItems} toggleIsHome={toggleIsHome}/>
    </div>
  )
}

export default NavbarContainer