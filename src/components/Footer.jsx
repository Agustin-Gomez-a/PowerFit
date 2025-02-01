import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre Nosotros</h3>
          <p>Transformando vidas a través del fitness y el entrenamiento de alta intensidad. Únete a nuestra comunidad y alcanza tus objetivos.</p>
          <div className="social-links">
            <a href="#" className="social-link"><FaFacebook /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul className="footer-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#clases">Clases</a></li>
            <li><a href="#horarios">Horarios</a></li>
            <li><a href="#membresias">Membresías</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Calle Fitness, Ciudad</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+1 234 567 890</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@powergym.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <strong>POWER GYM</strong>. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
