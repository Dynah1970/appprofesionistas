/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import "../App.css"; 

const Profesionistas = () => {
  const [busqueda, setBusqueda] = useState("");
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);
  const [citas, setCitas] = useState(() => {
    return JSON.parse(localStorage.getItem("citas")) || [];
  });
  const [citaAEliminar, setCitaAEliminar] = useState(null);
  const [profesionistas, setProfesionistas] = useState([]);

  // Profesionistas predefinidos
  const [citaFinalizada, setCitaFinalizada] = useState(null);
  const [reseñas, setReseñas] = useState(() => JSON.parse(localStorage.getItem("reseñas")) || {});

  const profesionistasBase = [
    { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Cardiólogo", destacado: true },
    { id: 2, nombre: "Dra. Ana González", especialidad: "Pediatra", destacado: false },
    { id: 3, nombre: "Lic. María Gómez", especialidad: "Derecho Penal", destacado: true },
    { id: 4, nombre: "Ing. Sofía Martínez", especialidad: "Ingeniería Civil", destacado: true },
    { id: 5, nombre: "Ing. Luis Fernández", especialidad: "Ingeniería Mecánica", destacado: false }
  ];

 // Cargar profesionistas registrados + predefinidos
useEffect(() => {
  const profesionistasGuardados = JSON.parse(localStorage.getItem("profesionales")) || [];
  setProfesionistas(prev => [...profesionistasBase, ...profesionistasGuardados]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
useEffect(() => {
    localStorage.setItem("reseñas", JSON.stringify(reseñas));
  }, [reseñas]);
  

 // Agendar Cita
  const handleAgendarCita = (profesionista) => {
    setCitaSeleccionada(profesionista);
  };

  // Confirmar Cita
  const handleConfirmarCita = () => {
    const nombre = document.getElementById("nombreUsuario").value;
    const fecha = document.getElementById("fechaCita").value;
    const hora = document.getElementById("horaCita").value;

    if (!nombre || !fecha || !hora) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const nuevaCita = {
      id: Date.now(),
      profesionista: citaSeleccionada,
      nombreUsuario: nombre,
      fecha,
      hora
    };

    setCitas((prevCitas) => {
      const nuevasCitas = [...prevCitas, nuevaCita];
      localStorage.setItem("citas", JSON.stringify(nuevasCitas));
      return nuevasCitas;
    });

    setCitaSeleccionada(null);
  };

  // Abrir modal de eliminación
  const confirmarEliminarCita = (cita) => {
    setCitaAEliminar(cita);
  };

  // Eliminar Cita con modal de confirmación
  const handleEliminarCita = () => {
    if (citaAEliminar) {
      setCitas((prevCitas) => {
        const nuevasCitas = prevCitas.filter(cita => cita.id !== citaAEliminar.id);
        localStorage.setItem("citas", JSON.stringify(nuevasCitas));
        return nuevasCitas;
      });
      setCitaAEliminar(null); // Cierra el modal
    }
  };
  const handleAbrirReseña = (cita) => {
    setCitaFinalizada(cita);
  };
  const handleGuardarReseña = () => {
    const calificacion = document.getElementById("calificacion").value;
    const comentario = document.getElementById("comentario").value;
  
    if (!calificacion || !comentario) {
      alert("Por favor, completa la calificación y el comentario.");
      return;
    }
  
    const nuevasReseñas = { ...reseñas };
    if (!nuevasReseñas[citaFinalizada.profesionista.id]) {
      nuevasReseñas[citaFinalizada.profesionista.id] = [];
    }
    nuevasReseñas[citaFinalizada.profesionista.id].push({ calificacion, comentario });
  
    setReseñas(nuevasReseñas);
    setCitaFinalizada(null);
  };
    
  return (
    <div className="contenedor">
      <h1>Lista de Profesionistas</h1>
      <p>Busca un profesionista por nombre o especialidad.</p>

      {/* Input de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por especialidad..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="input-busqueda"
      />

      {/* Lista de Profesionistas */}
      <ul className="lista-profesionistas">
        {profesionistas.length === 0 ? (
          <p>No hay profesionistas registrados.</p>
        ) : (
          profesionistas
            .filter((p) =>
              p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
              p.especialidad.toLowerCase().includes(busqueda.toLowerCase())
            )
            .map((p) => (
              <li key={p.id} className="tarjeta">
                <h3>{p.nombre}</h3>
                <p><strong>Especialidad:</strong> {p.especialidad}</p>
                {p.foto && <img src={p.foto} alt="Perfil" className="foto-profesional" />}
                <button className="btn-cita" onClick={() => handleAgendarCita(p)}>Agendar Cita</button>
              </li>
          ))
        )}
      </ul>

      {/* Modal para Agendar Cita */}
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

      {/* Citas Agendadas */}
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
                <button className="btn-eliminar" onClick={() => confirmarEliminarCita(cita)}>Eliminar</button>
              </li>
            ))
          ) : (
            <p>No hay citas agendadas.</p>
          )}
        </ul>
      </div>

      {/* Modal de Confirmación de Eliminación */}
      {citaAEliminar && (
        <div className="modal">
          <div className="modal-content">
            <h2>¿Eliminar cita con {citaAEliminar.profesionista.nombre}?</h2>
            <button className="btn-eliminar" onClick={handleEliminarCita}>Sí, eliminar</button>
            <button className="btn-cancelar" onClick={() => setCitaAEliminar(null)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profesionistas;
