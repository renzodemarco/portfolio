import './LanguageButton.css'
import i18n from '../../i18n.js'

const LanguageButton = () => {

  const current = i18n.language;

  const changeLanguage = () => {
    if (current === 'es') i18n.changeLanguage('en')
    else i18n.changeLanguage('es')
  };

  return (
    <div className="lang-btn-container">
      <button className="lang-btn" onClick={changeLanguage}>
        {current === 'es' ? 'EN' : 'ES'}
      </button>
    </div>
  )
}

export default LanguageButton