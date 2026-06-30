import TechCard from '../TechCard/TechCard'
import { technologies } from '../../data/technologies'
import './TechSection.css'

function TechSection() {
  return (
    <section className="tech-section">
      <div className="tech-container">
        <div className="tech-header">
          <p className="section-label">Tecnologias</p>
          <h2>Tecnologias que utilizo</h2>
          <p>
            Algumas das principais tecnologias, ferramentas e linguagens que uso
            em projetos de desenvolvimento web, mobile, interfaces e aplicações.
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechSection