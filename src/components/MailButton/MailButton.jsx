import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TbCopy } from "react-icons/tb";
import './MailButton.css'
import { useState } from 'react';

const MailButton = () => {

  const [isCopied, setIsCopied] = useState(false)

  const copyMail = () => {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <CopyToClipboard text='renzo11demarco@gmail.com' onCopy={copyMail}>
      <button className={`copy-button-container ${isCopied ? 'copied' : ''}`}>
        <div className='copy-button'>
          <p>renzo11demarco@gmail.com</p>
          <TbCopy className='copy-icon' />
        </div>
      </button>
    </CopyToClipboard>
  )
}

export default MailButton