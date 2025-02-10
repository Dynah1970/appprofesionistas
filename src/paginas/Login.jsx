/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types"; // ✅ Importar PropTypes
import { useNavigate } from "react-router-dom";

const Login = ({ setUsuarioAutenticado }) => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(
      user => user.correo === correo && user.contraseña === contraseña
    );

    if (!usuarioEncontrado) {
      alert("Correo o contraseña incorrectos.");
      return;
    }

    localStorage.setItem("usuarioAutenticado", JSON.stringify(usuarioEncontrado));
    setUsuarioAutenticado(usuarioEncontrado);

    alert(`Bienvenido, ${usuarioEncontrado.nombre}`);

    navigate(usuarioEncontrado.rol === "profesionista" ? "/panel-profesionista" : "/profesionistas");
  };

  return (
    <div className="contenedor">
      <h1>Iniciar Sesión</h1>

      <label>Correo Electrónico:</label>
      <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Correo Electrónico" autoComplete="off" />

      <label>Contraseña:</label>
      <input type={mostrarContraseña ? "text" : "password"} value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" autoComplete="new-password" />

      <button className="toggle-password" onClick={() => setMostrarContraseña(!mostrarContraseña)}>
        {mostrarContraseña ? "Ocultar Contraseña" : "Mostrar Contraseña"}
      </button>

      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
};

// ✅ Agregar validación de PropTypes
Login.propTypes = {
  setUsuarioAutenticado: PropTypes.func.isRequired,
};

export default Login;
