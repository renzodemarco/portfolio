import './ProjectCard.css'

const ProjectCard = ({ data }) => {

  const { imgSrc, title, description, technologies, url } = data

  return (
    <div className="project-card">
      <div className="project-img-container">
        <img src={imgSrc} alt={`${title} screenshot`} className="project-image" />
        <div className="overlay-link-container">
          <a href={url} target="_blank" rel="noopener noreferrer" className="overlay-link">
            Visit website
          </a>
        </div>
        <div className="overlay-text-container">
          <h3 className="overlay-img-text">{title}</h3>
        </div>
      </div>
      <div className='project-info-container'>
        <p className="project-description">{description}</p>
        <p className="project-technologies">
          <span>Technologies used: </span>
          {technologies.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard