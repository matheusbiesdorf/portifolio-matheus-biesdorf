import ProjectCard from '../ProjectCard/ProjectCard'
import { projects } from '../../data/projects'
import './ProjectsSection.css'

function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <p className="section-label">Projetos</p>

          <h2>Projetos pessoais</h2>

          <p>
            Alguns projetos que desenvolvi para praticar, aplicar conhecimentos
            e construir soluções com foco em interface, responsividade e
            experiência do usuário.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection