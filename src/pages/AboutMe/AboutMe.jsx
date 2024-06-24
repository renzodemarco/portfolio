import './AboutMe.css'
import { useTranslation } from 'react-i18next'

const AboutMe = () => {

  const { t } = useTranslation()

  return (
    <>
      <div className="presentation-container">
        <h2>{t("welcome.h2")}<span> Renzo Demarco</span>, </h2>
        <h3> {t("aboutMe.role")}</h3>
      </div>
      <div className='intro-container'>
        <div className='intro'>
          <h4>{t("aboutMe.intro")}</h4>
          <p>{t("aboutMe.introPart1")}</p>
          <p>{t("aboutMe.introPart2")}</p>
          <p>{t("aboutMe.introPart3")}</p>
        </div>
      </div>
      <div className='skills-container'>
        <h4>{t("aboutMe.skills")}</h4>
        <ul className='skills-list'>
          <li>
            <p className='skills-title'>{t("aboutMe.skillsTitle1")}</p>
            <p className='skills'>React.js | Javascript | HTML | CSS | Bootstrap | Tailwind</p>
          </li>
          <li>
            <p className='skills-title'>{t("aboutMe.skillsTitle2")}</p>
            <p className='skills'>Node.js | Express.js</p>
          </li>
          <li>
            <p className='skills-title'>{t("aboutMe.skillsTitle3")}</p>
            <p className='skills'>MySQL (Sequelize) | MongoDB (Mongoose)</p>
          </li>
          <li>
            <p className='skills-title'>{t("aboutMe.skillsTitle4")}</p>
            <p className='skills'>React Native</p>
          </li>
          <li>
            <p className='skills-title'>{t("aboutMe.skillsTitle5")}</p>
            <p className='skills'>Git | Agile | SOLID</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default AboutMe