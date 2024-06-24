import img from '../../assets/profile.webp'
import HomeContact from '../../components/HomeContact/HomeContact'
import LanguageButton from '../../components/LanguageButton/LanguageButton'
import { useTranslation } from 'react-i18next'
import './Home.css'

const Home = ({ toggleIsHome }) => {

  const { t } = useTranslation();

  return (
    <div className="home-container">
      <LanguageButton />
      <div className='home-welcome'>
        <h1>{t("welcome.h1")}</h1>
        <h2>{t("welcome.h2")}<span> Renzo</span>{t("welcome.h2role")}</h2>
        <div className='img-wrapper'>
          <div className='home-img-responsive img-container'>
            <img src={img} alt='Renzo Demarco' />
          </div>
        </div>
        <button onClick={toggleIsHome} className='home-button'>{t("welcome.button")}</button>
        <HomeContact />
      </div>
      <div className='home-img img-container'>
        <img src={img} alt='Renzo Demarco' />
      </div>
    </div>
  )
}

export default Home