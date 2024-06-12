import { useDispatch, useSelector } from 'react-redux';
import { setActiveComponent } from '../../redux/actions';
import './Navbar.css'

const Navbar = () => {

  const dispatch = useDispatch();
  const activeComponent = useSelector(state => state.activeComponent)
  const navItems = [
    { name: 'Home', label: 'WELCOME!' },
    { name: 'AboutMe', label: 'ABOUT ME' },
    { name: 'Education', label: 'EDUCATION' },
    { name: 'WorkExperience', label: 'WORK EXPERIENCE' },
    { name: 'Projects', label: 'PROJECTS' },
    { name: 'Contact', label: 'CONTACT' }
  ];

  const handleClick = (component) => {
    dispatch(setActiveComponent(component));
  };

  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${activeComponent === item.name ? 'nav-item-active' : ''}`}
            onClick={() => handleClick(item.name)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar