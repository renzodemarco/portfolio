import ExperienceAccordion from '../../components/ExperienceAccordion/ExperienceAccordion'
import { experiences } from '../../data/data'
import './WorkExperience.css'

const WorkExperience = () => {

  return (
    <div className='work-experience-container'>
      <h2>Tap to explore my achievements and roles:</h2>
      {Object.entries(experiences).map(([category, jobs], index) => (
        <ExperienceAccordion key={index} category={category} jobs={jobs} />
      ))}
    </div>
  )
}

export default WorkExperience