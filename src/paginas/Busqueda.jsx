/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Fuse from "fuse.js";
import "../busqueda-nueva.css";

const profesionalesLista = [
  { nombre: "Dr. Juan Pérez", especialidad: "Cardiólogo", ubicacion: "CDMX", rating: 4.5, precio: "$800 - $1200" },
  { nombre: "Dra. Ana González", especialidad: "Pediatría", ubicacion: "Guadalajara", rating: 4.2, precio: "$600 - $1000" },
  { nombre: "Lic. María Gómez", especialidad: "Psicólogo", ubicacion: "Monterrey", rating: 4.8, precio: "$1000 - $2000" },
  { nombre: "Ing. Sofía Martínez", especialidad: "Ingeniería Civil", ubicacion: "CDMX", rating: 3.9, precio: "$500 - $900" },
  { nombre: "Prof. Ricardo López", especialidad: "Matemáticas", ubicacion: "Guadalajara", rating: 4.0, precio: "$700 - $1100" },
];

const especialidadesLista = [
  "Ginecólogo",
  "Psicólogo",
  "Dermatólogo",
  "Oftalmólogo",
  "Urólogo",
  "Ortopedista",
  "Otorrinolaringólogo",
  "Cardiólogo",
  "Pediatría",
  "Ingeniería Civil",
  "Matemáticas",
];

const ubicacionesLista = ["Guadalajara", "CDMX", "Monterrey"];

const fuse = new Fuse(especialidadesLista, {
  includeScore: true,
  threshold: 0.3,
});

const Busqueda = () => {
  const [tipoConsulta, setTipoConsulta] = useState("presencial");
  const [especialidad, setEspecialidad] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [busquedaLibre, setBusquedaLibre] = useState("");
  const [resultados, setResultados] = useState(null);

  const realizarBusqueda = () => {
    let especialidadFiltrada = busquedaLibre.trim() !== "" ? busquedaLibre : especialidad;
    
    // Si el usuario escribió en la barra de búsqueda, intentar buscar coincidencias
    if (busquedaLibre.trim() !== "") {
      const match = fuse.search(busquedaLibre);
      if (match.length > 0) {
        especialidadFiltrada = match[0].item;
      }
    }

    // Aplicar filtro solo si se ha ingresado una especialidad o ubicación
    let filtrados = profesionalesLista.filter((prof) =>
      (!especialidadFiltrada || prof.especialidad.toLowerCase() === especialidadFiltrada.toLowerCase()) &&
      (!ubicacion || prof.ubicacion.toLowerCase() === ubicacion.toLowerCase())
    );

    setResultados(filtrados.length > 0 ? filtrados : null);
  };

  return (
    <div className="contenedor-busqueda-nuevo">
      <div className="texto-informativo">
        <h1 className="titulo-busqueda">Encuentra tu especialista y pide cita</h1>
        <p className="subtitulo-busqueda">260 000 profesionales están aquí para ayudarte.</p>
      </div>
      <div className="opciones-busqueda-nuevo">
        <button
          className={`boton-busqueda-nuevo ${tipoConsulta === "presencial" ? "activo-busqueda" : ""}`}
          onClick={() => setTipoConsulta("presencial")}
        >
          🏥 Visita presencial
        </button>
        <button
          className={`boton-busqueda-nuevo ${tipoConsulta === "en linea" ? "activo-busqueda" : ""}`}
          onClick={() => setTipoConsulta("en linea")}
        >
          📺 En línea
        </button>
      </div>
      <div className="busqueda-nueva">
        <select className="select-estilizado-nuevo" value={especialidad} onChange={(e) => setEspecialidad(e.target.value)}>
          <option value="">Cualquier especialidad</option>
          {especialidadesLista.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
        <input type="text" className="input-libre-nuevo" placeholder="Escribe lo que buscas" value={busquedaLibre} onChange={(e) => setBusquedaLibre(e.target.value)} />
        <select className="select-estilizado-nuevo" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)}>
          <option value="">Cualquier ubicación</option>
          {ubicacionesLista.map((ciudad, index) => (
            <option key={index} value={ciudad}>{ciudad}</option>
          ))}
        </select>
        <button className="boton-buscar-nuevo" onClick={realizarBusqueda}><FaSearch /> Buscar</button>
      </div>
      <div className="resultados-busqueda">
        {resultados ? (
          <div className="lista-profesionales">
            {resultados.map((prof, index) => (
              <div key={index} className="card-profesional">
                <h3>{prof.nombre} ⭐ {prof.rating}</h3>
                <p>Especialidad: {prof.especialidad}</p>
                <p>Ubicación: {prof.ubicacion}</p>
                <p>Precio: {prof.precio}</p>
                <button>Agendar Cita</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
};

export default Busqueda;
