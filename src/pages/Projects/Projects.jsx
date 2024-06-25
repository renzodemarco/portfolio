import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { useTranslation } from 'react-i18next'
import './Projects.css'

const Projects = () => {

  const { t } = useTranslation()
  const data = t("projects.data", { returnObjects: true })

  return (
    <>
      {data.map((data, index) => <ProjectCard data={data} key={index} />)}
    </>
  )
}

export default Projects