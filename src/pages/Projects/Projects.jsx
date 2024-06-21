import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/data.js'
import './Projects.css'

const Projects = () => {
  return (
    <>
      {projects.map((data, index) => <ProjectCard data={data} key={index} />)}
    </>
  )
}

export default Projects