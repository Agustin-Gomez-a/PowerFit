import React from 'react';
import '../styles/Memberships.css';
import { FaCheck, FaDumbbell, FaStopwatch, FaUsers } from 'react-icons/fa';

const Memberships = () => {
  return (
    <div className="memberships-page">
      <div className="memberships-hero">
        <h1>MEMBRESÍAS</h1>
        <div className="hero-overlay"></div>
      </div>

      <section className="memberships-content">
        <div className="intro-text">
          <h2>ELIGE TU PLAN</h2>
          <p>Selecciona el plan que mejor se adapte a tus objetivos y comienza tu transformación hoy mismo.</p>
        </div>

        <div className="plans-grid">
          <div className="plan-card starter">
            <div className="card-header">
              <FaDumbbell className="plan-icon" />
              <h3>PLAN BÁSICO</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">15000</span>
                <span className="period">/mes</span>
              </div>
            </div>
            <div className="card-content">
              <ul className="features">
                <li><FaCheck /> Acceso a sala de musculación</li>
                <li><FaCheck /> Horario limitado (8:00 - 22:00)</li>
                <li><FaCheck /> Programa de entrenamiento básico</li>
                <li><FaCheck /> Evaluación física mensual</li>
                <li><FaCheck /> Acceso a vestuarios</li>
              </ul>
              <button className="cta-button">EMPEZÁ AHORA</button>
            </div>
          </div>

          <div className="plan-card premium">
            <div className="popular-badge">MÁS POPULAR</div>
            <div className="card-header">
              <FaStopwatch className="plan-icon" />
              <h3>PLAN PREMIUM</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">25000</span>
                <span className="period">/mes</span>
              </div>
            </div>
            <div className="card-content">
              <ul className="features">
                <li><FaCheck /> Acceso ilimitado 24/7</li>
                <li><FaCheck /> Todas las clases grupales</li>
                <li><FaCheck /> Programa personalizado</li>
                <li><FaCheck /> Seguimiento nutricional</li>
                <li><FaCheck /> Acceso a área de cardio</li>
                <li><FaCheck /> 2 sesiones PT mensuales</li>
              </ul>
              <button className="cta-button">EMPEZÁ AHORA</button>
            </div>
          </div>

          <div className="plan-card elite">
            <div className="card-header">
              <FaUsers className="plan-icon" />
              <h3>PLAN ELITE</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">35000</span>
                <span className="period">/mes</span>
              </div>
            </div>
            <div className="card-content">
              <ul className="features">
                <li><FaCheck /> Todo lo de Premium</li>
                <li><FaCheck /> Entrenador personal dedicado</li>
                <li><FaCheck /> Plan nutricional personalizado</li>
                <li><FaCheck /> Acceso a área VIP</li>
                <li><FaCheck /> Masajes de recuperación</li>
                <li><FaCheck /> Suplementación incluida</li>
              </ul>
              <button className="cta-button">EMPEZÁ AHORA</button>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>PREGUNTAS FRECUENTES</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>¿Hay permanencia mínima?</h3>
            <p>No, nuestros planes son mes a mes sin compromiso de permanencia.</p>
          </div>
          <div className="faq-item">
            <h3>¿Puedo congelar mi membresía?</h3>
            <p>Sí, podés congelar tu membresía hasta 30 días por año.</p>
          </div>
          <div className="faq-item">
            <h3>¿Qué métodos de pago aceptan?</h3>
            <p>Aceptamos efectivo, tarjetas de crédito/débito y transferencias bancarias.</p>
          </div>
          <div className="faq-item">
            <h3>¿Puedo cambiar de plan?</h3>
            <p>Sí, podés cambiar tu plan en cualquier momento del mes.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Memberships;
