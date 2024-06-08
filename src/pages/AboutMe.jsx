import './styles.css'

const AboutMe = () => {
  return (
    <div className='about-me-container'>
      <div className="presentation-container">
        <h2>Hi! I'm <span>Renzo Demarco</span>, </h2>
        <h3> your next Full Stack Developer</h3>
      </div>
      <div className='intro-container'>
        <div className='intro'>
          <h4>Get to know me</h4>
          <p>I'm a creative and passionate developer dedicated to excellence and innovation in every project I undertake.</p>
          <p>My diverse background in veterinary medicine, laboratory work, university teaching, and research equips me with a unique perspective to create cutting-edge solutions. This multifaceted experience enables me to approach problems creatively and deliver results that stand out.</p>
          <p>In addition, my previous experience in team management and collaboration on interdisciplinary projects enables me to lead effectively and work collaboratively in team environments.</p>
        </div>
      </div>
      <div className='skills-container'>
        <h4>My skills</h4>
        <ul className='skills-list'>
          <li>
            <p className='skills-title'>Frontend</p>
            <p className='skills'>React.js | Javascript | HTML | CSS | Bootstrap | Tailwind</p>
          </li>
          <li>
            <p className='skills-title'>Backend</p>
            <p className='skills'>Node.js | Express.js</p>
          </li>
          <li>
            <p className='skills-title'>Databases</p>
            <p className='skills'>MySQL (Sequelize) | MongoDB (Mongoose)</p>
          </li>
          <li>
            <p className='skills-title'>Mobile</p>
            <p className='skills'>React Native</p>
          </li>
          <li>
            <p className='skills-title'>Tools and Methodologies</p>
            <p className='skills'>Git | Agile | Scrum</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe