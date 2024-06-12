import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TbCopy } from "react-icons/tb";
import './MailButton.css'

const MailButton = () => {
  return (
    <CopyToClipboard text='renzo11demarco@gmail.com' onCopy={() => alert('Email copied')}>
      <button className='copy-button-container'>
        <div className='copy-button'>
          <p>renzo11demarco@gmail.com</p>
          <TbCopy className='copy-icon' />
        </div>
      </button>
    </CopyToClipboard>
  )
}

export default MailButton