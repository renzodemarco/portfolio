import ButtonLink from '../../components/ButtonLink/ButtonLink'
import MailButton from '../../components/MailButton/MailButton'
import { useTranslation } from 'react-i18next'
import './Contact.css'

const Contact = () => {

  const { t } = useTranslation()

  return (
    <>
      <div className='contact-msg'>
        <h3>{t("contact.h3")}</h3>
        <h2>{t("contact.h2")}</h2>
      </div>
      <div className='contact-list'>
        <div className='contact-mail'>
          <h4>{t("contact.mail")}</h4>
          <MailButton />
        </div>
        <div className='contact-social'>
          <h4>{t("contact.social")}</h4>
          <div className='contact-btn-container'>
            <ButtonLink name='linkedin' link='https://linkedin.com/in/renzo-demarco' />
            <ButtonLink name='github' link='https://github.com/renzodemarco' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact