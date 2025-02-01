import React from 'react';
import '../styles/About.css';
import { FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">SOBRE NOSOTROS</h2>
          <div className="about-grid">
            <div className="about-info">
              <h3>ENTRENÁ CON LOS MEJORES</h3>
              <p>
                En POWER GYM, nos dedicamos a transformar vidas a través del fitness y el entrenamiento de alta intensidad. 
                Nuestro equipo de profesionales está comprometido con tu éxito y te guiará en cada paso del camino.
              </p>
              <div className="info-cards">
                <div className="info-card">
                  <FaClock className="info-icon" />
                  <h4>HORARIOS</h4>
                  <p>Lun - Vie: 6:00 - 23:00</p>
                  <p>Sáb: 8:00 - 20:00</p>
                  <p>Dom: 8:00 - 14:00</p>
                </div>
                <div className="info-card">
                  <FaMapMarkerAlt className="info-icon" />
                  <h4>UBICACIÓN</h4>
                  <p>Av. Pres. Juan Domingo Perón 1600</p>
                  <p>San Miguel, Buenos Aires</p>
                </div>
                <div className="info-card">
                  <FaPhone className="info-icon" />
                  <h4>CONTACTO</h4>
                  <p>Tel: (11) 4664-4440</p>
                  <p>WhatsApp: +54 11 2345-6789</p>
                </div>
              </div>
            </div>
            <div className="map-container">
              <iframe 
                src="https://www.openstreetmap.org/export/embed.html?bbox=-58.74549865722657%2C-34.54744766985225%2C-58.70515823364258%2C-34.52557966%" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: '2px solid #ffd700' }} 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
