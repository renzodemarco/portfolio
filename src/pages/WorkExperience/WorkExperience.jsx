import { useState } from 'react';
import ExperienceAccordion from '../../components/ExperienceAccordion/ExperienceAccordion'
import DownloadCv from '../../components/DownloadCv/DownloadCv'
import { experiences } from '../../data/data'
import './WorkExperience.css'

const WorkExperience = () => {

  const [expandedIndex, setExpandedIndex] = useState(null);

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
      <div className='accordion-container'>
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
      <div className='cv-container'>
        <p>You can also take a look at my CV:</p>
        <div className='home-contact-button cv-button-container'>
          <DownloadCv/>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience