import './ButtonLink.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const ButtonLink = ({ name, link }) => {

  return (
    <button className='button-link'>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name === 'github' && <FaGithub className='button-link-img'/> }
        {name === 'linkedin' && <FaLinkedin className='button-link-img'/> }
      </a>
    </button>
  )
}

export default ButtonLink