import { useDispatch, useSelector } from 'react-redux';
import { Link, Events, scrollSpy } from 'react-scroll';
import './Navbar.css'
import { useEffect } from 'react';

const Navbar = ({ navItems }) => {

  const dispatch = useDispatch();
  const activeComponent = useSelector(state => state.activeComponent)

  useEffect(() => {
    Events.scrollEvent.register('end', handleSetActive);
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('end', handleSetActive);
    };
  }, []);

  const handleSetActive = (to) => {
    dispatch({ type: 'SET_ACTIVE_COMPONENT', payload: to });
  };

  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${activeComponent === item.name ? 'nav-item-active' : ''}`}
          >
            <Link to={item.name} spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar