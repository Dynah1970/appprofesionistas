/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import "../App.css"; 

const RegistroProfesionista = () => {
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [destacado, setDestacado] = useState(false);
  const [foto, setFoto] = useState("");
  const [profesionistas, setProfesionistas] = useState(() => {
    return JSON.parse(localStorage.getItem("profesionales")) || [];
  });

  const [editando, setEditando] = useState(null); // Estado para edición

  useEffect(() => {
    localStorage.setItem("profesionales", JSON.stringify(profesionistas));
  }, [profesionistas]);

  const handleRegistro = () => {
    if (!nombre || !especialidad) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const nuevoProfesionista = {
      id: Date.now(),
      nombre,
      especialidad,
      destacado,
      foto,
    };

    setProfesionistas([...profesionistas, nuevoProfesionista]);
    limpiarFormulario();
  };

  const handleEditar = (profesionista) => {
    setEditando(profesionista.id);
    setNombre(profesionista.nombre);
    setEspecialidad(profesionista.especialidad);
    setDestacado(profesionista.destacado);
    setFoto(profesionista.foto || "");
  };

  const handleEliminarFoto = () => {
    if (editando !== null) {
      // Actualizar la lista de profesionistas con la foto eliminada
      const profesionistasActualizados = profesionistas.map((p) =>
        p.id === editando ? { ...p, foto: "" } : p
      );

      setProfesionistas(profesionistasActualizados);
      localStorage.setItem("profesionales", JSON.stringify(profesionistasActualizados));

      // También actualiza el estado de edición
      setFoto("");
    }
  };

  const handleGuardarCambios = () => {
    if (!nombre || !especialidad) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const profesionistasActualizados = profesionistas.map((p) =>
      p.id === editando
        ? { ...p, nombre, especialidad, destacado, foto }
        : p
    );

    setProfesionistas(profesionistasActualizados);
    localStorage.setItem("profesionales", JSON.stringify(profesionistasActualizados));
    setEditando(null);
    limpiarFormulario();
  };

  const handleEliminar = (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar este profesionista?");
    if (confirmar) {
      const nuevosProfesionistas = profesionistas.filter((p) => p.id !== id);
      setProfesionistas(nuevosProfesionistas);
      localStorage.setItem("profesionales", JSON.stringify(nuevosProfesionistas));
    }
  };

  const limpiarFormulario = () => {
    setNombre("");
    setEspecialidad("");
    setDestacado(false);
    setFoto("");
    setEditando(null);
  };

  return (
    <div className="contenedor">
      <h1>{editando ? "Editar Profesionista" : "Registro de Profesionales"}</h1>

      <div className="formulario">
        <label>Nombre Completo:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

        <label>Especialidad:</label>
        <input type="text" value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} />

        <label>¿Destacado?:</label>
        <input type="checkbox" checked={destacado} onChange={() => setDestacado(!destacado)} />

        <label>Foto de Perfil:</label>
        {foto && (
          <div className="foto-preview">
            <img src={foto} alt="Perfil" className="foto-profesional" />
            <button className="btn-eliminar" onClick={handleEliminarFoto}>Eliminar Foto</button>
          </div>
        )}
        <input type="file" accept="image/png, image/jpeg" onChange={(e) => setFoto(URL.createObjectURL(e.target.files[0]))} />

        {editando ? (
          <>
            <button onClick={handleGuardarCambios} className="btn-guardar">Guardar Cambios</button>
            <button onClick={limpiarFormulario} className="btn-cancelar">Cancelar</button>
          </>
        ) : (
          <button onClick={handleRegistro} className="btn-registrar">Registrar Profesional</button>
        )}
      </div>

      <h2>Profesionales Registrados</h2>
      <ul className="lista-profesionistas">
        {profesionistas.length === 0 ? (
          <p>No hay profesionistas registrados.</p>
        ) : (
          profesionistas.map((p) => (
            <li key={p.id} className="tarjeta">
              <h3>{p.nombre}</h3>
              <p><strong>Especialidad:</strong> {p.especialidad}</p>
              {p.foto && <img src={p.foto} alt="Perfil" className="foto-profesional" />}
              <button className="btn-editar" onClick={() => handleEditar(p)}>Editar</button>
              <button className="btn-eliminar" onClick={() => handleEliminar(p.id)}>Eliminar</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RegistroProfesionista;
