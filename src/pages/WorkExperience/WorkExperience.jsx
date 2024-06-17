import { useState } from 'react';
import ExperienceAccordion from '../../components/ExperienceAccordion/ExperienceAccordion'
import { experiences } from '../../data/data'
import './WorkExperience.css'

const WorkExperience = () => {

  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleItem = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className='work-experience-container'>
      <h2>Tap to explore my achievements and roles:</h2>
      {Object.entries(experiences).map(([category, jobs], index) => (
        <ExperienceAccordion
          key={index}
          category={category}
          jobs={jobs}
          index={index}
          onToggle={toggleItem}
          expandedIndex={expandedIndex}
        />
      ))}
    </div>
  )
}

export default WorkExperience