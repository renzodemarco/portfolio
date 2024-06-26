import { RiArrowDropDownLine } from "react-icons/ri";
import './ExperienceAccordion.css'

const ExperienceAccordion = ({ category, jobs, index, expandedIndex, onToggle }) => {
  
  return (
    <div className="accordion-item">
      <div
        className={`accordion-header ${index === expandedIndex ? 'active' : ''}`}
        onClick={() => onToggle(index)}
      >
        <p>{category}</p>
        <RiArrowDropDownLine className='dropdown-icon' />
      </div>
      {index === expandedIndex && (
        <div className="accordion-content">
          {jobs.map((job, idx) => (
            <div key={idx} className="company">
              <h4>{job.company}</h4>
              <p>{job.date}</p>
              <ul className='responsabilities'>
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>)}
    </div>
  )
}

export default ExperienceAccordion