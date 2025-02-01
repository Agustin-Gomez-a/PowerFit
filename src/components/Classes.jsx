import React from 'react';
import '../styles/Classes.css';

const Classes = () => {
  const classes = [
    {
      name: 'CROSSFIT',
      description: 'Entrenamiento funcional de alta intensidad que combina ejercicios cardiovasculares y de fuerza.',
      image: '/src/assets/img/service/1.jpg'
    },
    {
      name: 'MUSCULACIÓN',
      description: 'Desarrolla tu fuerza y masa muscular con nuestro programa especializado de entrenamiento con pesas.',
      image: '/src/assets/img/service/2.jpg'
    },
    {
      name: 'CARDIO',
      description: 'Mejora tu resistencia y quema calorías con nuestras sesiones de cardio de alta intensidad.',
      image: '/src/assets/img/service/3.jpg'
    },
    {
      name: 'ENTRENAMIENTO FUNCIONAL',
      description: 'Mejora tu fuerza, resistencia y movilidad con ejercicios funcionales.',
      image: '/src/assets/img/service/4.jpg'
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
