
import './Layout.css'
import NavbarContainer from '../NavbarContainer/NavbarContainer'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { useSelector } from 'react-redux';
import getComponentTitle from '../../utils/getComponentTitle'

function Layout({ children }) {

  const activeComponent = useSelector(state => state.activeComponent);

  return (
    <div className='layout'>
      <NavbarContainer />
      <div className='body'>
        <Header title={'choto'} />
        <main id='scroll-container'>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout