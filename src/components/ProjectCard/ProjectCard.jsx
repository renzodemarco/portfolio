import './ProjectCard.css'

const ProjectCard = ({ data }) => {

  const { imgSrc, title, description, technologies } = data

  return (
    <div className="project-card">
      <div className='project-img-container'>
        <img src={imgSrc} alt={`${title} screenshot`} className="project-image" />
      </div>
      <div className='project-info-container'>
        <div className='project-info'>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        </div>
        <p className="project-technologies">
          <span>Technologies used: </span>
          {technologies.join(", ")}
          </p>
      </div>
    </div>
  );
};

export default ProjectCard