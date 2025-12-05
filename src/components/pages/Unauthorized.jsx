import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="unauthorized-page">
      <h1>⚠️ Acceso Denegado</h1>
      <p>No tienes permisos para acceder a esta página.</p>
      <Link to="/" className="btn-home">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default Unauthorized;