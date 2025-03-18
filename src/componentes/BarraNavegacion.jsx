/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuDesplegable from "./MenuDesplegable"; // Importa el componente del menú desplegable
import "../App.css";
import "../Footer.css";
import "../Navegacion.css";
const BarraNavegacion = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [pantallaGrande, setPantallaGrande] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const manejarRedimension = () => {
      setPantallaGrande(window.innerWidth > 1024);
      if (window.innerWidth > 1024) {
        setMenuAbierto(false); // Cerrar menú si la pantalla se agranda
      }
    };

    window.addEventListener("resize", manejarRedimension);
    return () => window.removeEventListener("resize", manejarRedimension);
  }, []);

  // Opciones del menú "Registro"
  const registro = [
    { nombre: "Registro Profesionista", link: "/registro-profesionista" },
    { nombre: "Registro Consultores", link: "/registro-consultores" },
    { nombre: "Registro Usuario", link: "/registro-usuario" },
    { nombre: "Registro Empresa", link: "/registro-empresa" },
  ];

  // Opciones del menú "Soluciones"
  const soluciones = [
    { nombre: "Soluciones Clientes", link: "/soluciones-clientes" },
    { nombre: "Soluciones Profesionales", link: "/soluciones-profesionales" },
    { nombre: "Soluciones Consultores", link: "/soluciones-consultores" },
    { nombre: "Soluciones Empresariales", link: "/soluciones-empresariales" },
  ];

  // Opciones del menú "Información"
  const informacion = [
    { nombre: "Información Clientes", link: "/informacion-clientes" },
    { nombre: "Información Profesional", link: "/informacion-profesional" },
    { nombre: "Información Consultores", link: "/informacion-consultores" },
    { nombre: "Información Empresarial", link: "/informacion-empresarial" },
  ];

  return (
    <nav className="navbar">
      <div className="menu-hamburguesa" onClick={() => setMenuAbierto(!menuAbierto)}>
        ☰
      </div>

      {pantallaGrande && (
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Inicio</Link></li>
          <li><Link to="/profesionistas" className="nav-link">Explorar Profesionales</Link></li>
          <li><Link to="/explorar-consultores" className="nav-link">Explorar Consultores</Link></li>
          <li><MenuDesplegable titulo="Registro" opciones={registro} /></li>
          <li><MenuDesplegable titulo="Soluciones" opciones={soluciones} /></li>
          <li><MenuDesplegable titulo="Información" opciones={informacion} /></li>
          <li><Link to="/soporte" className="nav-link">Soporte</Link></li>
          <li><Link to="/login" className="nav-link">Iniciar Sesión</Link></li>
        </ul>
      )}

      {/* Menú lateral para móviles */}
      <div className={`menu-lateral ${menuAbierto ? "activo" : ""}`}>
        <div className="cerrar-menu" onClick={() => setMenuAbierto(false)}>✖</div>
        <ul>
          <li><Link to="/" className="nav-link">Inicio</Link></li>
          <li><Link to="/profesionistas" className="nav-link">Explorar Profesionales</Link></li>
          <li><Link to="/explorar-consultores" className="nav-link">Explorar Consultores</Link></li>
          <li><MenuDesplegable titulo="Registro" opciones={registro} /></li>
          <li><MenuDesplegable titulo="Soluciones" opciones={soluciones} /></li>
          <li><MenuDesplegable titulo="Información" opciones={informacion} /></li>
          <li><Link to="/soporte" className="nav-link">Soporte</Link></li>
          <li><Link to="/login" className="nav-link">Iniciar Sesión</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default BarraNavegacion;
