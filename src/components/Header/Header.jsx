import './Header.css'

const Header = ({title}) => {
  return (
    <header>
      <h1 className='title'>{title}</h1>
    </header>
  )
}

export default Header