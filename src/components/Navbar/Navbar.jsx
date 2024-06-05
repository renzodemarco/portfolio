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
        <li className='nav-item'>EDUCATION</li>
        <li className='nav-item'>WORK EXPERIENCE</li>
        <li className='nav-item'>PROJECTS</li>
        <li className='nav-item'>CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navbar