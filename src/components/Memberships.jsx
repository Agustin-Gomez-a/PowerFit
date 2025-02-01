import React from 'react';
import '../styles/Memberships.css';
import { FaCheck } from 'react-icons/fa';

const Memberships = () => {
  return (
    <section className="memberships" id="membresias">
      <div className="memberships-container">
        <h2 className="section-title">MEMBRESÍAS</h2>
        <div className="memberships-grid">
          <div className="membership-card basic">
            <div className="card-header">
              <h3>BÁSICO</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">15000</span>
                <span className="period">/mes</span>
              </div>
            </div>
            <div className="card-content">
              <ul className="features-list">
                <li><FaCheck className="check-icon" /> Acceso a sala de musculación</li>
                <li><FaCheck className="check-icon" /> Horario limitado (8:00 - 22:00)</li>
                <li><FaCheck className="check-icon" /> Programa de entrenamiento básico</li>
                <li><FaCheck className="check-icon" /> Evaluación física mensual</li>
              </ul>
              <a href="#contact" className="membership-btn">EMPEZÁ AHORA</a>
            </div>
          </div>

          <div className="membership-card premium">
            <div className="popular-badge">MÁS POPULAR</div>
            <div className="card-header">
              <h3>PREMIUM</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">25000</span>
                <span className="period">/mes</span>
              </div>
            </div>
            <div className="card-content">
              <ul className="features-list">
                <li><FaCheck className="check-icon" /> Acceso ilimitado 24/7</li>
                <li><FaCheck className="check-icon" /> Todas las clases grupales</li>
                <li><FaCheck className="check-icon" /> Programa personalizado</li>
                <li><FaCheck className="check-icon" /> Seguimiento nutricional</li>
                <li><FaCheck className="check-icon" /> Acceso a área de cardio</li>
                <li><FaCheck className="check-icon" /> 2 sesiones PT mensuales</li>
              </ul>
              <a href="#contact" className="membership-btn">EMPEZÁ AHORA</a>
            </div>
          </div>

          <div className="membership-card elite">
            <div className="card-header">
              <h3>ELITE</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">35000</span>
                <span className="period">/mes</span>
              </div>
            </div>
            <div className="card-content">
              <ul className="features-list">
                <li><FaCheck className="check-icon" /> Todo lo de Premium</li>
                <li><FaCheck className="check-icon" /> Entrenador personal dedicado</li>
                <li><FaCheck className="check-icon" /> Plan nutricional personalizado</li>
                <li><FaCheck className="check-icon" /> Acceso a área VIP</li>
                <li><FaCheck className="check-icon" /> Masajes de recuperación</li>
                <li><FaCheck className="check-icon" /> Suplementación incluida</li>
              </ul>
              <a href="#contact" className="membership-btn">EMPEZÁ AHORA</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memberships;
