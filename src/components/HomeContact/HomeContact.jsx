import './HomeContact.css'
import ButtonLink from '../ButtonLink/ButtonLink'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TbCopy } from "react-icons/tb";

const HomeContact = () => {

  return (
    <div className='home-contact'>
      <h3>Contact me:</h3>
      <div className='home-contact-list'>
        <div className='home-contact-mail'>
          <button className='copy-button-container' onClick={() => alert('email copied')}>
            <CopyToClipboard text='renzo11demarco@gmail.com'>
              <div className='copy-button'>
                <p>renzo11demarco@gmail.com</p>
                <TbCopy className='copy-icon' />
              </div>
            </CopyToClipboard>
          </button>
        </div>
        <div className='home-contact-cv'>
          <p>Download CV</p>
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