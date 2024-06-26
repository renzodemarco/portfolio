import './Layout.css'
import NavbarContainer from '../NavbarContainer/NavbarContainer'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { useState } from 'react';

function Layout({ children, toggleIsHome }) {

  const [activeSection, setActiveSection] = useState('ABOUT ME');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='layout'>
      <NavbarContainer toggleIsHome={toggleIsHome} onSetActive={handleSetActive} />
      <div className='body'>
        <Header title={activeSection} />
        <main id='scroll-container'>
          {children}
        </main>
        <Footer toggleIsHome={toggleIsHome} onSetActive={handleSetActive} />
      </div>
    </div>
  )
}

export default Layout