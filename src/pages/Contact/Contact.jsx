import ButtonLink from '../../components/ButtonLink/ButtonLink'
import MailButton from '../../components/MailButton/MailButton'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-msg'>
        <h3>Feel free to reach out for collaboration opportunities</h3>
        <h2>Let's create something wonderful!</h2>
      </div>
      <div className='contact-list'>
        <div className='contact-mail'>
          <h4>You can reach me through my mail:</h4>
          <MailButton />
        </div>
        <div className='contact-social'>
          <h4>or find me on LinkedIn and GitHub:</h4>
          <div className='contact-btn-container'>
            <ButtonLink name='linkedin' link='https://linkedin.com/in/renzo-demarco' />
            <ButtonLink name='github' link='https://github.com/renzodemarco' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact