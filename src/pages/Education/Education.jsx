import './Education.css'

const Education = () => {
  return (
    <>
      <h2>Explore my education and training:</h2>
      <div className="education-div education-coder">
        <h3>Coderhouse</h3>
        <ul>
          <li>Web Development: HTML, CSS, Javascript, React.js</li>
          <li>Backend programming: Node.js, Express.js</li>
          <li>Mobile Application Development: React Native</li>
          <li>NoSQL Database Management</li>
        </ul>
      </div>
      <div className="education-div education-courses">
        <h3>Other courses</h3>
        <ul>
          <li>MySQL and Sequelize</li>
          <li>Git</li>
          <li>Docker</li>
          <li>Agile Methodologies</li>
        </ul>
      </div>
      <div className="education-div education-vet">
        <h3>Veterinary Medicine</h3>
        <ul>
          <li>In 2020, I received my degree in Veterinary Medicine with a focus on clinical practice and laboratory research, teaching, and investigation</li>
          <li>Developed strong problem-solving skills, attention to detail, and team leadership</li>
        </ul>
      </div>
      <div className="education-div education-lang">
        <h3>Languages</h3>
        <ul>
          <li><span>Spanish</span> (native)</li>
          <li><span>English</span> (fluent)
            <p>IELTS Advanced English Certificate (2023)</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Education