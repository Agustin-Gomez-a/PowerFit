import React from "react";
import "../styles/Trainers.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Trainers = () => {
  const trainers = [
    {
      name: "Alex Martínez",
      position: "Entrenador de Fuerza",
      image: "/src/img/coach1.jpg",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Tom Homz",
      position: "Especialista en HIIT",
      image: "/src/img/coach2.jpg",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Marco Silva",
      position: "Coach de CrossFit",
      image: "/src/img/coach3.jpg",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="trainers" className="trainers-section">
      <div className="section-header">
        <h2>NUESTROS ENTRENADORES</h2>
        <div className="header-line"></div>
      </div>
      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <div key={index} className="trainer-card">
            <img src={trainer.image} alt={trainer.name} className="trainer-image" />
            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p>{trainer.position}</p>
              <div className="social-links">
                <a href={trainer.social.facebook}><FaFacebook /></a>
                <a href={trainer.social.instagram}><FaInstagram /></a>
                <a href={trainer.social.twitter}><FaTwitter /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
