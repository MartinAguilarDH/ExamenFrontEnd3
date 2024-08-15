import React from 'react';

function Card({ nombre, descripcion }) {
  return (
    <div className="card">
      <h2>El nombre del Animal Registrado es:</h2>
      <br />
      <h1 className='TextRed'>{nombre}</h1>
      
      <p>Observaciones: {descripcion}</p>
    </div>
  );
}
export default Card;
