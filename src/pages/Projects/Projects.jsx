import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects as projectsEN } from '../../data/data.en.js';
import { projects as projectsES } from '../../data/data.es.js';
import i18n from '../../i18n.js'
import './Projects.css'

const Projects = () => {

  const current = i18n.language
  const projects = current === 'en' ? projectsEN : projectsES;

  return (
    <>
      {projects.map((data, index) => <ProjectCard data={data} key={index} />)}
    </>
  )
}

export default Projects