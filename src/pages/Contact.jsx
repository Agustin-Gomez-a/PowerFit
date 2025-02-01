import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>CONTACTO</h1>
        <div className="hero-overlay"></div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>CONECTA CON NOSOTROS</h2>
          <div className="info-cards">
            <div className="info-card">
              <FaWhatsapp className="info-icon" />
              <h3>WHATSAPP</h3>
              <p>+54 11 2345-6789</p>
              <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer" className="contact-link">
                Enviar mensaje
              </a>
            </div>

            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h3>EMAIL</h3>
              <p>info@powerfit.com</p>
              <a href="mailto:info@powerfit.com" className="contact-link">
                Enviar email
              </a>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>UBICACIÓN</h3>
              <p>Av. Pres. Juan Domingo Perón 1600</p>
              <p>San Miguel, Buenos Aires</p>
            </div>
          </div>

          <div className="social-media">
            <h3>SEGUINOS EN REDES</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>ENVIANOS TU MENSAJE</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre completo"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Teléfono"
                required
              />
            </div>

            <div className="form-group">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un tema</option>
                <option value="membresia">Membresías</option>
                <option value="clases">Clases</option>
                <option value="personal">Entrenamiento personal</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tu mensaje"
                required
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              ENVIAR MENSAJE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
