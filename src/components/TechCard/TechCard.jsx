import './TechCard.css';

function TechCard({ name, icon }) {
  return (
    <article className="tech-card">
      <img src={icon} alt={`Logo ${name}`} className="tech-card-icon" />
      <h3>{name}</h3>
    </article>
  );
}

export default TechCard;
