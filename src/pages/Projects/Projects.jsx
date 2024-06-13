import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/data.js'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects-container'>
      {projects.map((data, index) => <ProjectCard data={data} key={index} />)}
    </div>
  )
}

export default Projects