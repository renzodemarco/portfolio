
import './Layout.css'
import NavbarContainer from '../NavbarContainer/NavbarContainer'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'

function Layout({ children }) {

  return (
    <div className='layout'>
      <NavbarContainer  />
      <div className='body'>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout