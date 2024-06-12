import { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import './ExperienceAccordion.css'

const ExperienceAccordion = ({ category, jobs, index }) => {

  const [expandedIndex, setExpandedIndex] = useState('0');

  const toggleItem = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="accordion-item">
      <div
        className={`accordion-header ${index === expandedIndex ? 'active' : ''}`}
        onClick={() => toggleItem(index)}
      >
        <p>{category}</p>
        <RiArrowDropDownLine />
      </div>
      {index === expandedIndex && (
        <div className="accordion-content">
          {jobs.map((job, idx) => (
            <div key={idx} className="company-div">
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