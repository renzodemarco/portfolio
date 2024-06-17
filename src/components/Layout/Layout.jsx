
import './Layout.css'
import NavbarContainer from '../NavbarContainer/NavbarContainer'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Layout({ children, toggleIsHome }) {

  return (
    <div className='layout'>
      <NavbarContainer toggleIsHome={toggleIsHome}/>
      <div className='body'>
        <Header title='WELCOME!' />
        <main id='scroll-container'>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout