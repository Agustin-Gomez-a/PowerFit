import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Prevenir scroll cuando el menú está abierto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e) => {
    setIsMenuOpen(false);
    const href = e.currentTarget.getAttribute('href');
    const target = document.querySelector(href);
    
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <Link to="/" className="nav-logo">PowerFit</Link>
        <span className="nav-slogan">ENTRENA DIFERENTE</span>
      </div>

      <button 
        className={`menu-icon ${isMenuOpen ? 'active' : ''}`} 
        onClick={handleMenuClick}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <a href="#inicio" className="nav-link" onClick={handleLinkClick}>Inicio</a>
        <a href="#nosotros" className="nav-link" onClick={handleLinkClick}>Nosotros</a>
        <a href="#membresias" className="nav-link" onClick={handleLinkClick}>Membresías</a>
        <a href="#contacto" className="nav-link" onClick={handleLinkClick}>Contacto</a>
      </div>

      <div className="nav-social">
        <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
        <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
        <a href="#" className="social-link"><i className="fab fa-whatsapp"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
