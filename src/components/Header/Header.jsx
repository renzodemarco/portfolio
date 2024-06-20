import ResponsiveNavbar from '../ResponsiveNavbar/ResponsiveNavbar'
import './Header.css'

const Header = ({ title }) => {
  return (
    <header>
      <ResponsiveNavbar />
      <h1 className='title'>{title}</h1>
    </header>
  )
}

export default Header