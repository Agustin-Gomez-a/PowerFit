import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1>DOMINA TU CUERPO</h1>
        <h2>SUPERA TUS LÍMITES</h2>
        <p>No más excusas. Es hora de forjar el físico que mereces con el entrenamiento más intenso y efectivo.</p>
        <a href="#membresias" className="cta-button">
          EMPEZA CON NOSOTROS
        </a>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">ABIERTO</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">INTENSIDAD</span>
          </div>
          <div className="stat">
            <span className="stat-number">0</span>
            <span className="stat-label">EXCUSAS</span>
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
