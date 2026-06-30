import './ProjectCard.css';

function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl }) {
  return (
    <article className="project-card">
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-image-link">
        <img src={image} alt={`Print do projeto ${title}`} />
      </a>

      <div className="project-info">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-tech-list">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Acessar projeto
            </a>
          )}

          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
