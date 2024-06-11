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
        <button onClick={handleButton} className='home-button'>Let's start working together</button>
        <HomeContact />
      </div>
      <div className='home-img img-container'>
        <img src={img} alt='Renzo Demarco'/>
      </div>
    </div>
  )
}

export default Home