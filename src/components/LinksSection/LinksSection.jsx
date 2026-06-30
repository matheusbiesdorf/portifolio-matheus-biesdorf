import './LinksSection.css';

function LinksSection() {
  return (
    <section className="links-section">
      <div className="links-container">
        <div className="links-header">
          <p className="links-label">Links</p>

          <h2>Onde me encontrar</h2>

          <p>Acesse meus perfis profissionais ou baixe meu currículo em PDF.</p>
        </div>

        <div className="links-cards">
          <a
            href="https://www.linkedin.com/in/seu-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
            />

            <div>
              <h3>LinkedIn</h3>
              <p>Meu perfil profissional</p>
            </div>
          </a>

          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="GitHub"
            />

            <div>
              <h3>GitHub</h3>
              <p>Meus repositórios e projetos</p>
            </div>
          </a>

          <a href="/curriculo-matheus-biesdorf.pdf" download className="link-card">
            <div className="pdf-icon">PDF</div>

            <div>
              <h3>Currículo</h3>
              <p>Baixar currículo em PDF</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LinksSection;
