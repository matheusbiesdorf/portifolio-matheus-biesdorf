import './App.css';
import TechSection from './components/TechSection/TechSection';

function App() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-label">Portfólio</p>

            <h1>
              Olá, eu sou <span>Matheus</span>
            </h1>

            <h2>Estudante de Ciência da Computação</h2>

            <p className="hero-description">
              Sou desenvolvedor em formação, com interesse em desenvolvimento web, mobile e UX/UI.
              Tenho experiência com tecnologias como React, TypeScript, JavaScript, HTML, CSS e
              Figma, criando interfaces funcionais, responsivas e pensadas na experiência do
              usuário.
            </p>
          </div>

          <div className="hero-image-container">
            <img src="/minha-foto.jpg" alt="Foto de Matheus" className="hero-image" />
          </div>
        </div>
      </section>

      <TechSection />
    </main>
  );
}

export default App;
