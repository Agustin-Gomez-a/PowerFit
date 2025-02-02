import React from 'react';
import '../styles/About.css';
import { FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h2 className="section-title">SOBRE NOSOTROS</h2>
          </div>
          <div className="about-grid">
            <div className="about-info">
              <h3>ENTRENÁ CON LOS MEJORES</h3>
              <p>
                En POWER GYM, nos dedicamos a transformar vidas a través del fitness y el entrenamiento de alta intensidad. 
                Nuestro equipo de profesionales está comprometido con tu éxito.
              </p>
              <div className="info-cards">
                <div className="info-card">
                  <FaClock className="info-icon" />
                  <h3>HORARIOS</h3>
                  <p>Lun - Vie: 6:00 - 23:00</p>
                  <p>Sáb: 8:00 - 20:00</p>
                  <p>Dom: 8:00 - 14:00</p>
                </div>
                <div className="info-card">
                  <FaMapMarkerAlt className="info-icon" />
                  <h3>UBICACIÓN</h3>
                  <p>Av. Pres. Juan Domingo Perón 1600</p>
                  <p>San Miguel, Buenos Aires</p>
                </div>
                <div className="info-card">
                  <FaPhone className="info-icon" />
                  <h3>CONTACTO</h3>
                  <p>Tel: (11) 4664-4440</p>
                  <p>WhatsApp: +54 11 2345-6789</p>
                </div>
              </div>
            </div>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102455135085!2d-65.20952492357482!3d-26.836712783157673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0e8d0271b9%3A0x7946062ac490db30!2sPlaza%20Independencia!5e0!3m2!1ses!2sar!4v1710321183044!5m2!1ses!2sar"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
