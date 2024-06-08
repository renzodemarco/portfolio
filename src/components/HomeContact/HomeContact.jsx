import './HomeContact.css'
import ButtonLink from '../ButtonLink/ButtonLink'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy } from "react-icons/fa";

const HomeContact = () => {

  return (
    <div className='home-contact'>
      <h3>Contact me:</h3>
      <div className='home-contact-list'>
        <div className='home-contact-mail'>
          renzo11demarco@gmail.com
          <button className='copy-button'>
            <CopyToClipboard text='renzo11demarco@gmail.com'>
              <FaRegCopy className='copy-icon' />
            </CopyToClipboard>
          </button>
        </div>
        <div className='home-contact-cv'>
          Download CV
        </div>
        <div className='home-contact-social'>
          <ButtonLink name='linkedin' link='www.linkedin.com/in/renzo-demarco' />
          <ButtonLink name='github' link='https://github.com/renzodemarco' />
        </div>
      </div>
    </div>
  )
}

export default HomeContact