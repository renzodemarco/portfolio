import { navItems as navItemsEN } from '../../data/data.en.js';
import { navItems as navItemsES } from '../../data/data.es.js';
import i18n from '../../i18n.js'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll'
import './Footer.css'

const Footer = ({ toggleIsHome, onSetActive }) => {

  const { t } = useTranslation()
  const current = i18n.language
  const navItems = current === 'en' ? navItemsEN : navItemsES;

  return (
    <footer>
      <nav className='footer-nav'>
        <h2 className='footer-title'>{t("footer.nav")}</h2>
        <ul className='nav-list footer'>
          <li className='nav-item footer' onClick={toggleIsHome}>
            {current === 'en' ? 'WELCOME!' : '¡BIEVENIDO!'}
          </li>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='nav-item footer'
            >
              <Link
                to={item.name}
                spy={true}
                offset={item.name === 'AboutMe' ? -110 : -100}
                smooth={true}
                duration={500}
                activeClass="active"
                onSetActive={() => onSetActive(item.label)}
              >{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='footer-legal'>
        <p>{t("footer.createdBy")}</p>
        <p>{t("footer.rights")}</p>
      </div>
    </footer>
  )
}

export default Footer