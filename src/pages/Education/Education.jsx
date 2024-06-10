import './Education.css'

const Education = () => {
  return (
    <div className='education-container'>
      <div className="education-coder">
        <h2>Coderhouse(2023)</h2>
        <ul>
          <li>Web Development: HTML, CSS, Javascript, React.js</li>
          <li>Backend programming: Node.js, Express.js</li>
          <li>NoSQL Database Management</li>
          <li>Mobile Application Development: React Native</li>
        </ul>
      </div>
      <div className="education-courses">
        <h2>Other courses(2023)</h2>
        <ul>
          <li>Git</li>
          <li>MySQL</li>
          <li>Agile Methodologies</li>
        </ul>
      </div>
    </div>
  )
}

export default Education