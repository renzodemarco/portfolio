
import './Layout.css'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'

function Layout() {

  return (
    <div className='layout'>
      <Navbar />
      <div className='body'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default Layout