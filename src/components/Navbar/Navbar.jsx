import { useDispatch } from 'react-redux';
import { setActiveComponent } from '../../redux/actions';
import './Navbar.css'

const Navbar = () => {

  const dispatch = useDispatch();

  const handleClick = (component) => {
    dispatch(setActiveComponent(component));
  };

  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='nav-item' onClick={() => handleClick('Home')}>HOME</li>
        <li className='nav-item' onClick={() => handleClick('AboutMe')}>ABOUT ME</li>
        <li className='nav-item' onClick={() => handleClick('Education')}>EDUCATION</li>
        <li className='nav-item' onClick={() => handleClick('WorkExperience')}>WORK EXPERIENCE</li>
        <li className='nav-item' onClick={() => handleClick('Projects')}>PROJECTS</li>
        <li className='nav-item' onClick={() => handleClick('Contact')}>CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navbar