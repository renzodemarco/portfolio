import './LanguageButton.css'
import i18n from '../../i18n.js'
import { useState, useEffect } from 'react';

const LanguageButton = () => {

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);
  
  const changeLanguage = () => {
    if (currentLanguage === 'es') i18n.changeLanguage('en')
    else i18n.changeLanguage('es')
  };

  return (
    <div className="lang-btn-container">
      <button className="lang-btn" onClick={changeLanguage}>
        {currentLanguage === 'es' ? 'EN' : 'ES'}
      </button>
    </div>
  )
}

export default LanguageButton