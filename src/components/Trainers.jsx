import React from 'react';
import '../styles/Trainers.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import team1 from '../assets/img/team/1.jpg';
import team2 from '../assets/img/team/2.jpg';
import team3 from '../assets/img/team/3.jpg';

const Trainers = () => {
  return (
    <section className="trainers" id="trainers">
      <div className="container">
        <h2 className="section-title">NUESTROS INSTRUCTORES</h2>
        <p className="section-description">
          Conoce a nuestro equipo de profesionales dedicados a ayudarte a alcanzar tus metas
        </p>
        
        <div className="trainers-grid">
          <div className="trainer-card">
            <div className="trainer-image">
              <img src={team1} alt="Entrenador Alex" />
            </div>
            <div className="trainer-info">
              <h3 className="trainer-name">Alex Martínez</h3>
              <p className="trainer-specialty">Entrenador de Fuerza</p>
              <p className="trainer-description">
                Especialista en entrenamiento de fuerza y acondicionamiento físico avanzado.
              </p>
              <div className="trainer-social">
                <a href="#" className="social-icon"><FaFacebook /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
              </div>
            </div>
          </div>

          <div className="trainer-card">
            <div className="trainer-image">
              <img src={team2} alt="Entrenadora Sara" />
            </div>
            <div className="trainer-info">
              <h3 className="trainer-name">Sara López</h3>
              <p className="trainer-specialty">Especialista en HIIT</p>
              <p className="trainer-description">
                Experta en entrenamiento de alta intensidad y transformación corporal.
              </p>
              <div className="trainer-social">
                <a href="#" className="social-icon"><FaFacebook /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
              </div>
            </div>
          </div>

          <div className="trainer-card">
            <div className="trainer-image">
              <img src={team3} alt="Entrenador Marco" />
            </div>
            <div className="trainer-info">
              <h3 className="trainer-name">Marco Silva</h3>
              <p className="trainer-specialty">Coach de CrossFit</p>
              <p className="trainer-description">
                Certificado en CrossFit y entrenamiento funcional de alto rendimiento.
              </p>
              <div className="trainer-social">
                <a href="#" className="social-icon"><FaFacebook /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
