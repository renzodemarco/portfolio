
import './Layout.css'
import NavbarContainer from '../NavbarContainer/NavbarContainer'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'

function Layout() {

  return (
    <div className='layout'>
      <NavbarContainer />
      <div className='body'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default Layout