/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../App.css";

// Componente principal que muestra una lista de profesionistas y permite agendar citas
const Profesionistas = () => {
  // Estado para manejar el término de búsqueda
  const [busqueda, setBusqueda] = useState("");
// Estado para filtrar por categoría seleccionada
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  // Estado para filtrar por especialidad seleccionada
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState("");

  // Estado para almacenar la cita seleccionada
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);

  // Estado para almacenar las citas agendadas, obteniéndolas de localStorage al inicio
  const [citas, setCitas] = useState(() => {
    return JSON.parse(localStorage.getItem("citas")) || [];
  });

  // Estado para manejar la cita que se desea eliminar (actualmente no implementado)
  const [citaAEliminar, setCitaAEliminar] = useState(null);

  // Estado para almacenar la lista de profesionistas disponibles
  const [profesionistas, setProfesionistas] = useState([]);

  // Estado para manejar el profesional seleccionado para ver sus detalles
  const [profesionalSeleccionado, setProfesionalSeleccionado] = useState(null);

  

  // useEffect para cargar profesionistas desde localStorage al montar el componente
  useEffect(() => {
    const profesionistasGuardados = JSON.parse(localStorage.getItem("profesionales")) || [];
    setProfesionistas([...profesionistasBase, ...profesionistasGuardados]);
  }, []);

  // useEffect para guardar las citas en localStorage cada vez que se actualizan
  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  // Función para ver los detalles de un profesionista
  const handleVerDetalles = (profesionista) => {
    setProfesionalSeleccionado(profesionista);
  };

  // Función para agendar una cita con un profesionista seleccionado
  const handleAgendarCita = (profesionista) => {
    setCitaSeleccionada(profesionista);
    setProfesionalSeleccionado(null); // Cierra el modal de detalles si está abierto
  };

  // Función para confirmar una cita y guardarla en el estado y localStorage
  const handleConfirmarCita = () => {
    const nombre = document.getElementById("nombreUsuario").value;
    const fecha = document.getElementById("fechaCita").value;
    const hora = document.getElementById("horaCita").value;

    // Validación: no permitir campos vacíos
    if (!nombre || !fecha || !hora) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Crear un objeto de cita con los datos ingresados
    const nuevaCita = {
      id: Date.now(), // ID único basado en la marca de tiempo
      profesionista: citaSeleccionada, // Guardar datos del profesionista
      nombreUsuario: nombre, // Nombre del usuario que agendó la cita
      fecha,
      hora
    };

    // Agregar la nueva cita a la lista de citas
    setCitas((prevCitas) => [...prevCitas, nuevaCita]);

    // Cerrar el modal de agendar cita
    setCitaSeleccionada(null);
  };
 // Lista base de profesionistas con sus datos
 const profesionistasBase = [
  { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Cardiólogo", calificacion: 4.5, precio: "$800 - $1200", destacado: true },
  { id: 2, nombre: "Dra. Ana González", especialidad: "Pediatra", calificacion: 4.2, precio: "$600 - $1000", destacado: false },
  { id: 3, nombre: "Lic. María Gómez", especialidad: "Derecho Penal", calificacion: 4.8, precio: "$1000 - $2000", destacado: true },
  { id: 4, nombre: "Ing. Sofía Martínez", especialidad: "Ingeniería Civil", calificacion: 3.9, precio: "$500 - $900", destacado: false }
];
 
  const profesionistasFiltrados = profesionistas.filter((p) =>
    (busqueda ? p.nombre.toLowerCase().includes(busqueda.toLowerCase()) || p.especialidad.toLowerCase().includes(busqueda.toLowerCase()) : true) &&
    (categoriaSeleccionada ? (p.categoria && p.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase()) : true) &&
    (especialidadSeleccionada ? p.especialidad.toLowerCase() === especialidadSeleccionada.toLowerCase() : true)
  );
  
  // Definir las categorías y especialidades
const categorias = ["Médico", "Abogado", "Ingeniero", "Psicólogo"];
const especialidades = ["Cardiólogo", "Pediatra", "Derecho Penal", "Ingeniería Civil"];

// Agregar profesionistasBase en el array de dependencias de useEffect
useEffect(() => {
  const profesionistasGuardados = JSON.parse(localStorage.getItem("profesionales")) || [];
  setProfesionistas([...profesionistasBase, ...profesionistasGuardados]);
}, [profesionistasBase]); // ✅ Corregido

  return (
    
    <div> {/* ✅ Contenedor principal */}
      <input
        type="text"
        placeholder="Buscar por especialidad o nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="input-busqueda"
      />
  
      <select className="select-busqueda" value={categoriaSeleccionada} onChange={(e) => setCategoriaSeleccionada(e.target.value)}>
        <option value="">Selecciona una categoría</option>
        {categorias.map((cat, index) => <option key={index} value={cat}>{cat}</option>)}
      </select>
  
      <select className="select-busqueda" value={especialidadSeleccionada} onChange={(e) => setEspecialidadSeleccionada(e.target.value)}>
        <option value="">Selecciona una especialidad</option>
        {especialidades.map((esp, index) => <option key={index} value={esp}>{esp}</option>)}
      </select>
  
      <ul className="lista-profesionistas">
        {profesionistasFiltrados.map((p) => (
          <li key={p.id} className="tarjeta">
            <h3>{p.nombre} ⭐ {p.calificacion}</h3>
            <p><strong>Especialidad:</strong> {p.especialidad}</p>
            <p><strong>Categoría:</strong> {p.categoria}</p>
            <p><strong>Precio:</strong> {p.precio}</p>
            <button className="btn-ver" onClick={() => setProfesionalSeleccionado(p)}>Ver Detalles</button>
            <button className="btn-cita" onClick={() => setCitaSeleccionada(p)}>Agendar Cita</button>
          </li>
        ))}
      </ul>
  
      {/* ✅ Modal para ver detalles de un profesionista */}
      {profesionalSeleccionado && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <button className="btn-cerrar" onClick={() => setProfesionalSeleccionado(null)}>✖</button>
            </div>
            <h2>{profesionalSeleccionado.nombre}</h2>
            <p><strong>Especialidad:</strong> {profesionalSeleccionado.especialidad}</p>
            <p><strong>Calificación:</strong> ⭐ {profesionalSeleccionado.calificacion}</p>
            <p><strong>Precio:</strong> {profesionalSeleccionado.precio}</p>
            <button className="btn-cita" onClick={() => handleAgendarCita(profesionalSeleccionado)}>Agendar Cita</button>
          </div>
        </div>
      )}
  
      {/* ✅ Modal para agendar una cita */}
      {citaSeleccionada && (
        <div className="modal">
          <div className="modal-content">
            <button className="btn-cerrar" onClick={() => setCitaSeleccionada(null)}>✖</button>
            <h2>Agendar Cita con {citaSeleccionada.nombre}</h2>
            <p>Especialidad: {citaSeleccionada.especialidad}</p>
            <label>Nombre:</label>
            <input type="text" id="nombreUsuario" placeholder="Tu nombre" />
            <label>Fecha:</label>
            <input type="date" id="fechaCita" />
            <label>Hora:</label>
            <input type="time" id="horaCita" />
            <button className="btn-cita" onClick={handleConfirmarCita}>Confirmar Cita</button>
            <button className="btn-cancelar" onClick={() => setCitaSeleccionada(null)}>Cancelar</button>
          </div>
        </div>
      )}
  
      {/* ✅ Sección de citas agendadas */}
      <div className="contenedor-citas">
        <h2>Citas Agendadas</h2>
        <ul className="lista-citas">
          {citas.length > 0 ? (
            citas.map((cita) => (
              <li key={cita.id} className="tarjeta-cita">
                <h3>{cita.profesionista.nombre}</h3>
                <p><strong>Especialidad:</strong> {cita.profesionista.especialidad}</p>
                <p><strong>Cliente:</strong> {cita.nombreUsuario}</p>
                <p><strong>Fecha:</strong> {cita.fecha}</p>
                <p><strong>Hora:</strong> {cita.hora}</p>
              </li>
            ))
          ) : (
            <p>No hay citas agendadas.</p>
          )}
        </ul>
      </div>
    </div> // ✅ Cierre correcto del `div` principal
  );
  
}
  export default Profesionistas;  