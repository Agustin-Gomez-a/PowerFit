import React from 'react';
import '../styles/About.css';
import { FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>SOBRE NOSOTROS</h1>
        <div className="hero-overlay"></div>
      </div>
      
      <section className="about-content">
        <div className="about-grid">
          <div className="about-text">
            <h2>POWERFIT GYM</h2>
            <p>
              En POWERFIT, nos dedicamos a forjar campeones y transformar vidas. Nuestro gimnasio 
              no es solo un lugar para entrenar, es un templo del fitness donde cada gota de sudor 
              te acerca a tus objetivos.
            </p>
            <p>
              Con más de 1000m² de instalaciones de última generación, entrenadores elite y una 
              comunidad apasionada, te ayudaremos a alcanzar tu máximo potencial.
            </p>
          </div>
          
          <div className="info-cards">
            <div className="info-card">
              <FaClock className="info-icon" />
              <h3>HORARIOS</h3>
              <ul>
                <li>Lunes a Viernes: 6:00 - 23:00</li>
                <li>Sábados: 8:00 - 20:00</li>
                <li>Domingos: 8:00 - 14:00</li>
              </ul>
            </div>
            
            <div className="info-card">
              <FaPhone className="info-icon" />
              <h3>CONTACTO</h3>
              <ul>
                <li>Tel: (11) 4664-4440</li>
                <li>WhatsApp: +54 11 2345-6789</li>
                <li>Email: info@powerfit.com</li>
              </ul>
            </div>
            
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>UBICACIÓN</h3>
              <ul>
                <li>Av. Pres. Juan Domingo Perón 1600</li>
                <li>San Miguel, Buenos Aires</li>
                <li>Argentina</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <h2>ENCONTRANOS</h2>
        <div className="map-container">
          <iframe 
            src="https://www.openstreetmap.org/export/embed.html?bbox=-58.74549865722657%2C-34.54744766985225%2C-58.70515823364258%2C-34.52557966%25&amp;layer=mapnik&amp;marker=-34.5365137%2C-58.7253284" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: 0 }} 
            allowFullScreen 
          />
        </div>
      </section>
      
      <section className="facilities-section">
        <h2>NUESTRAS INSTALACIONES</h2>
        <div className="facilities-grid">
          <div className="facility">
            <h3>ÁREA DE MUSCULACIÓN</h3>
            <p>Equipamiento de última generación y pesos libres para todo tipo de entrenamiento.</p>
          </div>
          <div className="facility">
            <h3>ÁREA CARDIO</h3>
            <p>Zona exclusiva con cintas, bicicletas y elípticos de alta gama.</p>
          </div>
          <div className="facility">
            <h3>ÁREA FUNCIONAL</h3>
            <p>Espacio dedicado para CrossFit y entrenamiento funcional.</p>
          </div>
          <div className="facility">
            <h3>VESTUARIOS</h3>
            <p>Vestuarios amplios con duchas y lockers individuales.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
