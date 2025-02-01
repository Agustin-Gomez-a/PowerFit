import { useState } from 'react';
import '../styles/BmiCalculator.css';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      let category = '';

      if (bmi < 18.5) category = 'Bajo peso';
      else if (bmi < 25) category = 'Peso normal';
      else if (bmi < 30) category = 'Sobrepeso';
      else category = 'Obesidad';

      setBmiResult({ bmi, category });
    }
  };

  return (
    <section className="bmi-calculator" id="bmi">
      <div className="container">
        <h2 className="section-title">CALCULADORA IMC</h2>
        <p className="section-description">
          Calcula tu Índice de Masa Corporal para conocer tu estado de salud
        </p>
        
        <div className="calculator-container">
          <form onSubmit={calculateBMI}>
            <div className="input-group">
              <label htmlFor="weight">Peso (kg)</label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Ingresa tu peso"
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="height">Altura (cm)</label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Ingresa tu altura"
                required
              />
            </div>
            
            <button type="submit" className="calculate-button">
              Calcular IMC
            </button>
          </form>

          {bmiResult && (
            <div className="result">
              <h3>Tu resultado:</h3>
              <p className="bmi-value">IMC: <span>{bmiResult.bmi}</span></p>
              <p className="bmi-category">Categoría: <span>{bmiResult.category}</span></p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;
