import ExperienceAccordion from '../../components/ExperienceAccordion/ExperienceAccordion'
import { experiences } from '../../data/data'
import './WorkExperience.css'

const WorkExperience = () => {

  return (
    <div className='work-experience-container'>
      {Object.entries(experiences).map(([category, jobs], index) => (
        <ExperienceAccordion key={index} category={category} jobs={jobs} />
      ))}
    </div>
  )
}

export default WorkExperience