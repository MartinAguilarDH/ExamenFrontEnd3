import React from 'react';

function Card({ nombre, descripcion }) {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>Descripción: {descripcion}</p>
    </div>
  );
}

export default Card;
