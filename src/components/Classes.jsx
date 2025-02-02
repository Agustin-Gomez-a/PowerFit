import React from 'react';
import '../styles/Classes.css';

import musculacionImg from '../img/musculacion.png';
import cardioImg from '../img/cardio.jpg';
import funcionalImg from '../img/funcional.png';

const Classes = () => {
  const classes = [
    {
      name: 'CROSSFIT',
      name: 'MUSCULACIÓN',
      description: 'Desarrolla tu fuerza y masa muscular con nuestro programa especializado de entrenamiento con pesas.',
      image: "/img/musculacion.png"  // Actualizar ruta
    },
    {
      name: 'CARDIO',
      description: 'Mejora tu resistencia y quema calorías con nuestras sesiones de cardio de alta intensidad.',
      image: '/img/cardio.jpg'
    },
    {
      name: 'ENTRENAMIENTO FUNCIONAL',
      description: 'Mejora tu fuerza, resistencia y movilidad con ejercicios funcionales.',
      image: '/img/funcional.png'
    }
  ];

  return (
    <section id="classes" className="classes-section">
      <div className="section-header">
        <h2>NUESTRAS CLASES</h2>
        <div className="header-line"></div>
      </div>
      <div className="classes-grid">
        {classes.map((classItem, index) => (
          <div key={index} className="class-card">
            <div className="class-image-container">
              <img src={classItem.image} alt={classItem.name} className="class-image" />
              <div className="image-overlay">
                <h3>{classItem.name}</h3>
                <p>{classItem.description}</p>
                <a href="#" className="class-button">MÁS INFO</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;

};

export default Classes;
