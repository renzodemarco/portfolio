import './Education.css'

const Education = () => {
  return (
    <div className='education-container'>
      <div className="education-coder education-div">
        <h2>Coderhouse</h2>
        <ul>
          <li>Web Development: HTML, CSS, Javascript, React.js</li>
          <li>Backend programming: Node.js, Express.js</li>
          <li>Mobile Application Development: React Native</li>
          <li>NoSQL Database Management</li>
        </ul>
      </div>
      <div className="education-courses education-div">
        <h2>Other courses</h2>
        <ul>
          <li>MySQL and Sequelize</li>
          <li>Git</li>
          <li>Docker</li>
          <li>Agile Methodologies</li>
        </ul>
      </div>
      <div className="education-vet education-div">
        <h2>Veterinary Medicine</h2>
        <ul>
          <li>Comprehensive training in Veterinary Medicine with experience in clinical practice, laboratory work, teaching, and research.</li>
          <li>Developed strong problem-solving skills, attention to detail, and team leadership.</li>
        </ul>
      </div>
      <div className="education-lang education-div">
        <h2>Languages</h2>
        <ul>
          <li><span>Spanish</span> (native)</li>
          <li><span>English</span> (advanced)
            <p>IELTS Advanced English Certificate (2023)</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Education