import { experiences } from '../../data/data'
import './WorkExperience.css'

const WorkExperience = () => {

  return (
    <div className='work-experience-container'>
{Object.entries(experiences).map(([category, jobs], index) => (
        <div key={index} className="role-name">
          <h3>{category}</h3>
          {jobs.map((job, idx) => (
            <div key={idx} className="experience-div">
              <h4>{job.company}</h4>
              <p>{job.date}</p>
              <ul className='experience-list'>
                {job.responsibilities.map((responsibility, id) => (
                  <li key={id}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default WorkExperience