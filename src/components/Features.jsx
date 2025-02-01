import { FaDumbbell, FaUserTie, FaCog, FaTrophy } from 'react-icons/fa';
import '../styles/Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaDumbbell />,
      title: "Mejor Entrenamiento",
      description: "Programas personalizados diseñados por expertos para maximizar tus resultados y alcanzar tus objetivos fitness de manera efectiva."
    },
    {
      icon: <FaUserTie />,
      title: "Instructores Calificados",
      description: "Nuestro equipo de profesionales certificados te guiará en cada paso de tu journey fitness, asegurando resultados óptimos."
    },
    {
      icon: <FaCog />,
      title: "Equipamiento Moderno",
      description: "Contamos con la última tecnología en equipamiento deportivo para optimizar tu entrenamiento y garantizar tu seguridad."
    },
    {
      icon: <FaTrophy />,
      title: "Premiados",
      description: "Reconocidos por nuestra excelencia en servicio y resultados comprobados en la transformación de nuestros miembros."
    }
  ];

  return (
    <section className="features" id="servicios">
      <div className="container">
        <h2 className="section-title">NUESTRAS VENTAJAS</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
