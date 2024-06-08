import './Home.css'
import img from '../../assets/profile.webp'
import { useDispatch } from 'react-redux'
import { setActiveComponent } from '../../redux/actions'
import HomeContact from '../../components/HomeContact/HomeContact'

const Home = () => {

  const dispatch = useDispatch()

  const handleButton = () => {
    dispatch(setActiveComponent('AboutMe'))
  }

  return (
    <div className="home-container">
      <div className='home-welcome'>
      <h1>Welcome to my portfolio!</h1>
      <h2>I'm <span>Renzo</span>, Full Stack Developer</h2>
      <button onClick={handleButton} className='home-button'>Get to know me</button>
      </div>
      <div className='home-img'>
        <img src={img} alt='Renzo Demarco' />
      </div>
      <HomeContact />
    </div>
  )
}

export default Home