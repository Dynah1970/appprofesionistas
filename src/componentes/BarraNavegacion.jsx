/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Asegurar que los estilos se apliquen

const BarraNavegacion = () => {
  return (
    <nav className="navbar">
      <div className="contenedor">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/profesionistas" className="nav-link">Profesionales</Link>
        <Link to="/registro-profesionista" className="nav-link registro">Registrar Profesional</Link>
        <Link to="/registro-usuario" className="nav-link">Registrarse</Link>

      </div>
    </nav>
  );
};

export default BarraNavegacion;


