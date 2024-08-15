import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
  const [animal, setAnimal] = useState({
    nombre: '',
    descripcion: '',
  });
  const [mostrarCard, setMostrarCard] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (event) => {
    setAnimal({ ...animal, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();   
    // Validaciones
    if (animal.nombre.length < 3 || animal.nombre.trim() === '') {
      setError(true);
      return;
    }
    if (animal.descripcion.length < 6) {
      setError(true);
      return;
    }
    setMostrarCard(true);
  };

  return (
    <div>
          <h1>Formulario de Animales</h1>
          <form onSubmit={handleSubmit}>
          <div className='Jleft'>
          <label>
              Animal:
              <input type="text" name="nombre" value={animal.nombre} onChange={handleChange} />
            </label>
            <br />
            <br />
            <label className="mt10">
              Observaciones:
              <input  type="text" name="descripcion" value={animal.descripcion} onChange={handleChange} />
            </label>
          </div> 
            <br />
            <br />
            <button type="submit">Registrar</button>
            <br />
            <br />
            {error && <p className='TextRed'>Error: Por favor chequea que la información sea correcta</p>}
          </form>
          {mostrarCard && <Card nombre={animal.nombre} descripcion={animal.descripcion} />}
    </div>
  );
}

export default App;
