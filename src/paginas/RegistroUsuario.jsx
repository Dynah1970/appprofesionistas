/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistroUsuario = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [rol, setRol] = useState("cliente");
  const navigate = useNavigate();

  // Función para validar formato de correo
  const validarCorreo = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Manejar el registro
  const handleRegistro = () => {
    if (!nombre.trim() || !correo.trim() || !contraseña.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (!validarCorreo(correo)) {
      alert("Correo electrónico no válido.");
      return;
    }

    if (contraseña.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el correo ya está registrado
    if (usuarios.some(user => user.correo === correo)) {
      alert("Este correo ya está registrado. Usa otro.");
      return;
    }

    const nuevoUsuario = { id: Date.now(), nombre, correo, contraseña, rol };
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Guardar usuario autenticado en localStorage
    localStorage.setItem("usuarioAutenticado", JSON.stringify(nuevoUsuario));

    alert("Registro exitoso. Redirigiendo...");
    navigate("/");
  };

  return (
    <div className="contenedor">
      <h1>Registro de Usuario</h1>
      <label>Nombre:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

      <label>Correo electrónico:</label>
      <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />

      <label>Contraseña:</label>
      <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />

      <label>Tipo de Usuario:</label>
      <select value={rol} onChange={(e) => setRol(e.target.value)}>
        <option value="cliente">Cliente</option>
        <option value="profesionista">Profesionista</option>
      </select>

      <button onClick={handleRegistro}>Registrarse</button>
    </div>
  );
};

export default RegistroUsuario;
