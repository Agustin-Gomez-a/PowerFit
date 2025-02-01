import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Classes from './components/Classes';
import Trainers from './components/Trainers';
import BmiCalculator from './components/BmiCalculator';
import About from './pages/About';
import Memberships from './pages/Memberships';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Classes />
              <Trainers />
              <BmiCalculator />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
