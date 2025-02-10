/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // O el archivo CSS donde tengas los estilos

const BarraNavegacion = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Inicio</Link></li>
        <li><Link to="/profesionistas" className="nav-link">Profesionales</Link></li>
        <li><Link to="/registro-profesionista" className="nav-link">Registrar Profesional</Link></li>
        <li><Link to="/registro-usuario" className="nav-link">Registrarse</Link></li>
      </ul>
    </nav>
  );
};

export default BarraNavegacion;
