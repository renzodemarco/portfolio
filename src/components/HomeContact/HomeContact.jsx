import './HomeContact.css'
import ButtonLink from '../ButtonLink/ButtonLink'
import DownloadCv from '../DownloadCv/DownloadCv';
import MailButton from '../MailButton/MailButton';

const HomeContact = () => {

  return (
    <div className='home-contact'>
      <h3>Contact me:</h3>
      <div className='home-contact-list'>
        <div className='home-contact-button'>
          <MailButton />
        </div>
        <div className='home-contact-button cv-button-container'>
          <DownloadCv/>
        </div>
        <div className='home-contact-social'>
          <ButtonLink name='linkedin' link='https://linkedin.com/in/renzo-demarco' />
          <ButtonLink name='github' link='https://github.com/renzodemarco' />
        </div>
      </div>
    </div>
  )
}

export default HomeContact