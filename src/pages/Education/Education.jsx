import './Education.css'

const Education = () => {
  return (
    <div className='education-container'>
      <div className="education-div education-coder">
        <h2>Coderhouse</h2>
        <ul>
          <li>Web Development: HTML, CSS, Javascript, React.js</li>
          <li>Backend programming: Node.js, Express.js</li>
          <li>Mobile Application Development: React Native</li>
          <li>NoSQL Database Management</li>
        </ul>
      </div>
      <div className="education-div education-courses">
        <h2>Other courses</h2>
        <ul>
          <li>MySQL and Sequelize</li>
          <li>Git</li>
          <li>Docker</li>
          <li>Agile Methodologies</li>
        </ul>
      </div>
      <div className="education-div education-vet">
        <h2>Veterinary Medicine</h2>
        <ul>
          <li>In 2020, I received my degree in Veterinary Medicine with a focus on clinical practice and laboratory research, teaching, and investigation</li>
          <li>Developed strong problem-solving skills, attention to detail, and team leadership</li>
        </ul>
      </div>
      <div className="education-div education-lang">
        <h2>Languages</h2>
        <ul>
          <li><span>Spanish</span> (native)</li>
          <li><span>English</span> (fluent)
            <p>IELTS Advanced English Certificate (2023)</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Education