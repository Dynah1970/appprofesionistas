/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Formulario.css";




const RegistroUsuario = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [rol, setRol] = useState("cliente");
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const navigate = useNavigate();

  const handleRegistro = () => {
    if (!nombre || !correo || !contraseña || !confirmarContraseña) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (contraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (usuarios.some((user) => user.correo === correo)) {
      alert("Este correo ya está registrado. Usa otro.");
      return;
    }

    const nuevoUsuario = { id: Date.now(), nombre, correo, contraseña, rol };
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");

    // 🔹 Limpiar los campos correctamente
    setNombre("");
    setCorreo("");
    setContraseña("");
    setConfirmarContraseña("");

    // 🔹 Redirigir según el rol
    if (rol === "profesionista") {
      navigate("/registro-profesionista");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="formulario-container">
      <div className="formulario">
        <h1>Registro de Usuario</h1>

        <label>Nombre Completo:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          autoComplete="off"
        />

        <label>Correo electrónico:</label>
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          autoComplete="off"
        />

        <label>Contraseña:</label>
        <input
          type={mostrarContraseña ? "text" : "password"}
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          autoComplete="new-password"
        />

        <label>Confirmar Contraseña:</label>
        <input
          type={mostrarContraseña ? "text" : "password"}
          value={confirmarContraseña}
          onChange={(e) => setConfirmarContraseña(e.target.value)}
          autoComplete="new-password"
        />

        <button
          className="btn-mostrar"
          onClick={() => setMostrarContraseña(!mostrarContraseña)}
        >
          {mostrarContraseña ? "Ocultar Contraseña" : "Mostrar Contraseña"}
        </button>

        {/* <label>Tipo de Usuario:</label>
<select value={rol} onChange={(e) => setRol(e.target.value)}>
  <option value="cliente">Cliente</option>
  <option value="profesionista">Profesional</option>
</select> */}

        <button className="btn-registrar" onClick={handleRegistro}>
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default RegistroUsuario;

