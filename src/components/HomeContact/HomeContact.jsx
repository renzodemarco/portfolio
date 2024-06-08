import './HomeContact.css'

const HomeContact = () => {

  const copyText = () => {
    const textToCopy = "renzo11demarco@gmail.com";
  }

  return (
    <div className='home-contact'>
      <h3>Contacto</h3>
      <ul>
        <li>Email: renzo11demarco@gmail.com
          <button onClick={this.copyText}>Copiar Texto</button>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tu_perfil">LinkedIn</a>
        </li>
        <li><
          a href="https://github.com/tu_usuario">GitHub</a>
        </li>
      </ul>
    </div>
  )
}

export default HomeContact