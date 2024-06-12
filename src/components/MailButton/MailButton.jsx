import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TbCopy } from "react-icons/tb";
import './MailButton.css'

const MailButton = () => {
  return (
    <button className='copy-button-container' onClick={() => alert('email copied')}>
      <CopyToClipboard text='renzo11demarco@gmail.com'>
        <div className='copy-button'>
          <p>renzo11demarco@gmail.com</p>
          <TbCopy className='copy-icon' />
        </div>
      </CopyToClipboard>
    </button>
  )
}

export default MailButton